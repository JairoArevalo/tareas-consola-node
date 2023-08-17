import { Tarea } from "../models/tarea.js";

class Tareas {
    listado = {};

    constructor() {
        this.listado = {};
    }

    crearTarea(descripcionTarea = '') {
        const tarea = new Tarea(descripcionTarea);
        this.listado[tarea.id] = tarea;

    }

    get listadoArray() {
        const listadoArr = [];
        Object.keys(this.listado).forEach(key => {
            const tarea = this.listado[key];
            listadoArr.push(tarea);
        })
        return listadoArr;
    }

    cargarTareasFromDB(tareas = []) {
        const tareasArr = Object.values(tareas);

        tareasArr.forEach(tarea => {

            this.listado[tarea.id] = tarea;

        });
    }

    listadoCompleto() {
        this.listadoArray.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const { descripcion, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Incompleta'.red;

            console.log(`${idx} ${descripcion} :: ${estado}`);


        })


    }

    listarPedientesCompletadas(completadas = true) {
        if (completadas) {
            let listaCompletado = this.listadoArray.filter(x => x.completadoEn == true);
            listaCompletado.forEach((tarea, i) => {
                const idx = `${i + 1}`.green;
                const { descripcion, completadoEn } = tarea;
                const estado = (completadoEn) ? 'Completada'.green : 'Incompleta'.red;

                console.log(`${idx} ${descripcion} :: ${estado}`);


            })
        } else {
            let listaNoCompletado = this.listadoArray.filter(x => x.completadoEn != true);

            listaNoCompletado.forEach((tarea, i) => {
                const idx = `${i + 1}`.green;
                const { descripcion, completadoEn } = tarea;
                const estado = (completadoEn) ? 'Completada'.green : 'Incompleta'.red;

                console.log(`${idx} ${descripcion} :: ${estado}`);


            })
        }

    }



    borrarTarea(id = '') {
        if (this.listado[id]) {
            delete this.listado[id];
        }
    }

    toggleCompletadas( ids = [] ) {
        ids.forEach ( id => {
            const tarea = this.listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = true;
            }
        } )

        this.listadoArray.forEach( tarea => {
            if (!ids.includes(tarea.id)) {
                this.listado[tarea.id].completadoEn = false;

            }
        })
    }

}

export { Tareas }