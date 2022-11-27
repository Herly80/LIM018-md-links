const process = require("process");

const CLI = () => {
    if(process.argv[2]== "herly.md"){
        console.log("Esto es un archivo con extension .md")
    }else {
        console.log("Esto no es un archivo .md")
    }
}
module.exports = {
    CLI
};