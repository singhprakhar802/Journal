const connection =  require('../models/model');

async function uploadfile(req, res) {
  const file = req.file;
  if (!file) {
    return res.render('No file uploaded.');
  }
  const user = body.Username;
  // Insert file data into MySQL database
  const fileName = file.filename;
  const filePath = file.path;

  const insertQuery = 'INSERT INTO files (name, path,user) VALUES (?, ?, ?)';
  await connection.query(insertQuery, [fileName, filePath,user], (err, results) => {
    if (err) throw err;
    return res.send('File uploaded and data inserted into the database.');
  });
}
async function uploadAudio(req, res) {
  try {
    // Fetch audio file details from the database
    const [rows, fields] = await connection.execute('SELECT * FROM audio_files');

    // Render the EJS template with the fetched data
    res.render('audio', { audioFiles: rows });
  } catch (error) {
    console.error('Error fetching audio files:', error);
    res.status(500).send('Internal Server Error');
  }
}
async function requestLogin(req, res) {
    const Username = req.body.username;
    const Password = req.body.password;
    const Usertype = req.body.userType;
  
    // Check if username is empty
    if (!Username) {
      return res.render('login', { userType: Usertype, error: false }); // Set error to false
    }
  
    const query = 'SELECT password FROM student WHERE name = ?';
    await connection.query(query, [Username], async (err, results) => {
      if (err) {
        console.error('Error executing query:', err.message);
        return res.render('login', { userType: Usertype, error: 'true' });
      }
  
      if (results.length > 0) {
        const storedPassword = results[0].password;
  
        if (storedPassword === Password) {
          return res.render('dashboard',{user : Username,usertype:Usertype});
        } else {
          return res.render('login', { userType: Usertype, error: 'true' });
        }
      } else {
        return res.render('login', { userType: Usertype, error: 'true' });
      }
    });
  }


function redirect(req, res){
    const userType = req.body.userType;
    console.log("userType is " + userType);
    if (userType === 'student') {
      res.redirect('/student');
    } else if (userType === 'teacher') {
      res.redirect('/teacher');
    } else {
      // Handle other cases as needed
      res.redirect('/');
    }
  }

module.exports = {requestLogin,redirect,uploadfile,uploadAudio}