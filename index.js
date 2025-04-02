import mysql from 'mysql2'; // Ele ira importar os arquivos de mysql para mysql2

const pool = mysql.createPool({ // Aqui ele criara um deposito de informações
     host: '127.0.0.1',
     user: 'root', // receberá o valor do nome de usuário
     password: 'senac@02', // receberá o valor da senha
     database: 'nataly' // receberá o valor do banco de dados
}).promise(); // ele ira executrar em si mesmo

const result = await pool.query("select * from `sakila` . `city` ") 
console.log(result); 