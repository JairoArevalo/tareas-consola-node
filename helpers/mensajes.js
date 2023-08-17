const colors = require('colors');


const mostrarMenu = () => {

    return new Promise((resolve, reject) => {
        console.clear();
        console.log("=========================".green);
        console.log("==Seleccione una opcion==".green);
        console.log("=========================\n".green);

        console.log(`${'1.'.yellow} ${' Crear tarea'}`.white);
        console.log(`${'2.'.yellow} ${' Listar tareas'}`.white);
        console.log(`${'3.'.yellow} ${' Listar tareas completadas'}`.white);
        console.log(`${'4.'.yellow} ${' Listar tareas pendientes'}`.white);
        console.log(`${'5.'.yellow} ${' Completar tarea'}`.white);
        console.log(`${'6.'.yellow} ${' Borrar una tarea'}`.white);
        console.log(`${'0.'.yellow} ${' Salir\n'}`.white);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion', (answer) => {
            // console.log(answer);
            readline.close();
            resolve(answer)
        })
    })





}

const pausa = () => {

    return new Promise((resolve, reject) => {
        const readlinePausa = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readlinePausa.question(`\nPresione ${'ENTER'.green}. para continuar`, (answer) => {
            console.log(answer);
            readlinePausa.close();
            resolve();
        })
    })

}

module.exports = {
    mostrarMenu,
    pausa
}