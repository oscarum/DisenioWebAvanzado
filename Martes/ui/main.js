$("#fecha").datepicker();

$(function(){//funcion que siempre estara activa
  $("#arrastre").draggable();

  $("#canasta").droppable({
    drop: function(event,ui){
      $(this).addClass("ui-state-highlight").find("p").html("Anotaste una canasta");// find busca la etiqueta p dentro de canasta
    }
  });

});
