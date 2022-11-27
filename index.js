const fs = require("fs");
const path = require("node:path");
const process = require('node:process');

// Usuario ingresa una ruta
const routeUser = "./herly.md";

// Verificar si esa ruta existe
const pathStat = (route) => console.log(fs.existsSync(route));
pathStat(routeUser);

//Verificar si la ruta es absoluta sino transfomarla a Absoluta
const getAbsolutePath = (route) => path.isAbsolute(route) ? route : path.resolve(route);
console.log(getAbsolutePath(routeUser));

// Verificar si la ruta tiene extension .md
const extPath = (route) => (path.extname(route) === '.md') ? console.log('Este es un archivo md') : console.log('No es un archivo md');
extPath('prueba.txt');

// escribir un archivo
fs.writeFile("prueba2.txt", "Hola, soy tu nuevo archivo desde node", (error) => {
    if(error) {
      console.log(`Error: ${error}`);
    }
});
// leer un archivo
fs.readFile("prueba2.txt", "utf-8", (error, data) => {
    if(!error) {
      console.log(data)
    }else {
      console.log(`Error: ${error}`)
    }
})

// Obtener el contenido de un directorio
function getDir() {
  fs.readdir('./.', (error, files) => {
    if (error) {
      throw error;
    }
    console.log(files);
  });
}
getDir();

console.log(process.argv[2]);



module.exports = {
  getAbsolutePath,
  pathStat
};