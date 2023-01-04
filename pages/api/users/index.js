import { pool } from "../../../config/db";

export default async function handler(req , res){

    switch(req.method){

        case "GET" : 
            return await getUsers(req , res);

        case "POST" : 
            return await saveUser(req,res);
        
        default : 
            return res.status(400).send("method not allowed");
    }
}


const getUsers = async (req , res) => {
    try{
        const results = await pool.query("SELECT * FROM users");
        return res.status(200).json(results);
    }catch(error){
        return res.status(500).json(error);
    }
}


const saveUser = async (req , res) => {
    try{
        const {username , email , password} = req.body ;
        const results = await pool.query(`INSERT INTO users(username , email , password) VALUES("${username}" , "${email}" , "${password}")`);
        return res.status(200).json({username,email,password,id : results.insertId});
    }catch(error){
        return res.status(500).send("error occured");
    }
}