import *  as fs from "fs";

const archivo = "./database/data.json"

const guardarInfoArchivo =  (data) => {
    fs.writeFileSync(archivo, data);
}


const leerDatos = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}

export {guardarInfoArchivo, leerDatos};