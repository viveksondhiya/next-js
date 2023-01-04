import { pool } from "../../../config/db";

export default async function handler(req , res){

    switch(req.method){

        case "DELETE" : 
            return await deleteMultiUser(req,res);
        
        default : 
            return res.status(400).send("method not allowed");
    }
}

const deleteMultiUser = async (req , res) => {
    try{
        const {ids} = req.body ;
        // console.log(ids);
        await pool.query(`DELETE FROM users WHERE id IN (${ids})`);
        return res.status(200).json({message : "multi deleted" , ids : ids});    
        
    }catch(error){
        return res.status(500).send("error occured");
    }
}