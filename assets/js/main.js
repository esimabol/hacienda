const ingreso = () => {
    let fecha = new Date();
    let mes = fecha.getMonth() + 1; 
    let hora = fecha.getHours();

    let porteria1Abierta = mes % 2 !== 0; // Meses imparares
    let porteria2Abierta = mes % 2 === 0 ? true : (hora >= 6 && hora < 22); // Se abre a las 6 y cierra a las 22
    return {
        puerta1: porteria1Abierta ? 'Ingreso Por la Porteria 1' : 'Porteria 1 Cerrada',
        puerta2: porteria2Abierta ? 'Ingreso Por la Porteria 2' : 'Porteria 2 Cerrada'
    }

}

const puertaDeIngreso = ingreso();
document.getElementById('puerta_ingreso').innerHTML = `
<h5>${puertaDeIngreso.puerta1}</h5>
<h5>${puertaDeIngreso.puerta2}</h5>`;