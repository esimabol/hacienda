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
        let mes = fecha.getMonth() + 1;
        let hora = fecha.getHours();

        let porteria1Abierta = mes % 2 === 0 || (hora >= 6 && hora < 22);
        let porteria2Abierta = mes % 2 !== 0;

        return {
            puerta1: porteria1Abierta ? 'Ingreso Por la Porteria 1' : 'Porteria 1 Cerrada',
            puerta2: porteria2Abierta ? 'Ingreso Por la Porteria 2' : 'Porteria 2 Cerrada'
        };
    }

    let puertaDeIngreso = ingreso();
    $('#puerta_ingreso').html(`
        <h5 class="center">${puertaDeIngreso.puerta1}</h5>
        <h5 class="center">${puertaDeIngreso.puerta2}</h5>
    `);
   
  

  }); // end of document ready
})(jQuery); // end of jQuery name space
