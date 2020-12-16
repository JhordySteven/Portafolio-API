/*var express=require('express');
var router=express.Router();
const multer = require('multer');
var fs = require('fs');

storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, '../public/imagenes') // Agregamos el directorio donde se guardarán los archivos.
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname) // Le pasamos el nombre original del archvio, también podriamos cambiar el nombre concatenando la fecha actual.
  }
}),
upload = multer({storage}), // Cambiamos el atributo dest por el storage.

//subir archivo
router.post('/api/subirFoto', upload.single('archivo'), error => {
  //console.log(req.file) // Nos devuelve un objeto con la información de nuestro archivo
  if(error) {
    throw error;
  }
  else res.send('ok');
})


//obtener foto
router.get('/api/verfotos', function(req, res, next) {
  fs.readdir('../archivo/foto', function(err, files) {
    console.log(files);
     res.send(files);        
  });
});

module.exports=router;   */


var fs = require('fs');
const routeImagenServer=require('../Conexion/configGeneral');   



module.exports={
  //Subir fotos
  subirFoto(req, res, next) {
    console.log(req.file);
    const files = req.file
    if (!files) {
      console.log('ok');
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }if (files)  {
      console.log('asdasd');
      res.send('ok');}
      console.log('acass');
  },
  //obtener foto
  obtenerFotos(req, res, next) {
    fs.readdir(routeImagenServer.imagenGet, function(err, files) {
      console.log(files);
      res.send(files);        
    });
  }
}  