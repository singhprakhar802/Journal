var connection = require('../db.js');

function createConnection(){
   
  connection.connect((err)=>{
    if(err)console.log(err);
  });

  var createUserTableQuery = `
        CREATE TABLE IF NOT EXISTS student(
            name VARCHAR(200) UNIQUE NOT NULL,
            password VARCHAR(50) UNIQUE NOT NULL
        )
      `;

    connection.query(createUserTableQuery, function (error) {
      if (error) throw error;
      console.log('SCHEMA CREATED ');
    });
    createUserTableQuery = `
        CREATE TABLE IF NOT EXISTS teacher(
            name VARCHAR(200) UNIQUE NOT NULL,
            password VARCHAR(50) UNIQUE NOT NULL
        )
      `;

    connection.query(createUserTableQuery, function (error) {
      if (error) throw error;
      console.log('SCHEMA CREATED ');
    });
    createUserTableQuery = `CREATE TABLE IF NOT EXISTS files (
      name VARCHAR(255),
      path VARCHAR(255),
      user VARCHAR(255)
    )`;
    connection.query(createUserTableQuery, function (error) {
      if (error) throw error;
      console.log('SCHEMA CREATED ');
    });
}
createConnection();
module.exports = connection;