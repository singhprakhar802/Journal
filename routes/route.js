const express = require('express');
const router = express.Router();
const getRoutes = require('../controller/getMethods');
const postRoutes = require('../controller/postMethods')
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' }); // specify the destination folder

router.post('/audio', postRoutes.uploadAudio);


router.get('/student', getRoutes.getStudent);

router.post('/upload', postRoutes.uploadfile);

  // Route for teacher login
router.get('/teacher',getRoutes.getTeacher);

// Route for selecting user type (student or teacher)
router.get('/', getRoutes.getIndex);

router.post('/login',postRoutes.requestLogin);

router.post('/', postRoutes.redirect);

module.exports = router;