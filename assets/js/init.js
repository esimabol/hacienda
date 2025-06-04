(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider({
      indicators: false
    });    
     $('.tooltipped').tooltip();
     $('.modal').modal();
    
    function ingreso() {
      let fecha = new Date(); 
      console.log(fecha);
      let mes = fecha.getMonth() + 1;
      let hora = fecha.getHours();
      console.log(mes, hora);

      // Determinar cuál puerta está abierta las 24 horas y cuál tiene restricción nocturna
      let puerta1Abierta = mes % 2 === 0; // Mes par -> puerta 1 abierta siempre
      let puerta2Abierta = !puerta1Abierta; // Mes impar -> puerta 2 abierta siempre

      return {
        puerta1: puerta1Abierta || (hora >= 6 && hora < 22) ? 'Ingreso Por la Porteria 1' : 'Porteria 1 Cerrada',
        puerta2: puerta2Abierta || (hora >= 6 && hora < 22) ? 'Ingreso Por la Porteria 2' : 'Porteria 2 Cerrada'
      };
    }

  let puertaDeIngreso = ingreso();
  $('#puerta_ingreso').html(`
      <h5 class="center">${puertaDeIngreso.puerta1}</h5>
      <h5 class="center">${puertaDeIngreso.puerta2}</h5>
  `);
   
  

  }); // end of document ready
})(jQuery); // end of jQuery name space
