import mysql from 'serverless-mysql';

const pool = mysql({
    config : {
        host : process.env.MYSQL_HOST,
        user : process.env.MYSQL_USERNAME,
        password : process.env.MYSQL_PASSWORD,
        port : 3306,
        database : process.env.MYSQL_DB

    }
})

export {pool};