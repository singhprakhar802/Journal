function getStudent(req, res){
    res.render('login', { userType: 'Student' });
  };

function getTeacher(req, res) {
    res.render('login', { userType: 'Teacher' });
  };

  function getIndex(req, res){
    res.render('index');
  };
module.exports = {getStudent,getTeacher,getIndex};