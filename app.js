import colors from "colors";
import { confirmar, inquirerMenu, leerInput, listadoTareasBorrar, listadoTareasCompletar, pausa } from "./helpers/inquierer.js";
import { Tarea } from "./models/tarea.js";
import { Tareas } from "./models/tareas.js";
import { guardarInfoArchivo, leerDatos } from "./helpers/guardar-archivo.js";

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear()

// Llamado funcion principal 



const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDatos();
    if (tareasDB) {
        tareas.cargarTareasFromDB(tareasDB);
    }
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const opcionDes = await leerInput('Descripcion : ');
                tareas.crearTarea(opcionDes);
                break;

            case '2':
                tareas.listadoCompleto();
                break;

            case '3':
                tareas.listarPedientesCompletadas(true);
                break;

            case '4':
                tareas.listarPedientesCompletadas(false);
                break;

            case '5':
                const ids = await listadoTareasCompletar(tareas.listadoArray);
                tareas.toggleCompletadas(ids);
                break;

            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArray);
                if (id != '0') {
                    const isConfirmar = await confirmar('Esta seguro que desea eliminar esta tarea?');
                    if (isConfirmar) {
                        tareas.borrarTarea(id);
                        console.log("Tarea borrada ".blue);

                    }
                }
                break;
        }
        // console.log(opt);
        // opt !== '0' ? await pausa() : opt;

        guardarInfoArchivo(JSON.stringify(tareas.listadoArray));
        await pausa();


    } while (opt !== '0');



    // pausa();
}

main();