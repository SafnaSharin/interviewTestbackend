var express = require('express');
var router = express.Router();
var controller = require('../controller/admin')
const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  var upload = multer({ storage: storage });



router.post('/submit',upload.single('image'), controller.submit)
 router.get('/details',controller.details)
 router.get('/edit/:id',controller.edit)
 router.put('/update/:id',controller.update)
 router.delete('/delete/:id',controller.delete)

module.exports = router;
