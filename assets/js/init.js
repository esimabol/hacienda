(function($){
  $(function(){
    // Initialize all Materialize components
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
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
        puerta1: puerta1Abierta || (hora >= 6 && hora < 22) ? `<h6 class="section green-text text-darken-4 green lighten-4">Ingreso Por la Porteria 1</h6>` : `<h6 class="section red-text text-darken-4 red lighten-4">Porteria 1 Cerrada</h6>`,
        puerta2: puerta2Abierta || (hora >= 6 && hora < 22) ? `<h6 class="section green-text text-darken-4 green lighten-4">Ingreso Por la Porteria 2</h6>` : `<h6 class="section red-text text-darken-4 red lighten-4">Porteria 2 Cerrada</h6>`
      };
    }

  let puertaDeIngreso = ingreso();
  $('#puerta_ingreso').html(`
      <div class="section center">${puertaDeIngreso.puerta1}</div>
      <div class="section center">${puertaDeIngreso.puerta2}</div>
  `);
   
  

  }); // end of document ready
})(jQuery); // end of jQuery name space
