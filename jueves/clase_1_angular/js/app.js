// para usar angular siempre debemos usar modo estricto para tener control de las variables
//'use strict';//aqui lo indicamos

(function(){
    'use strict';
    angular
    .module("myApp",[])
    .controller("movieCtrl",movieCtrl);//definimos controlador controller("movieCtrl HTML",movieCtrl javascript)

    function movieCtrl(){
      var movie = this; //indicamos que movie estara dentro del metodo

      //movie.peli = [{'nombre':'Oscar','edad':'22'},{'nombre':'nombre2','edad':'25'}];//arreglo en formato json
      movie.collection = [
        {
          'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
        'name':'rapido y furioso',
        'cast':['Vin Diesel','El bueno','El malo'],
        'anio':'2015',
        'category':'accion'
        },
        {
          'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'name':'Resident Evil',
        'cast':['Milla Jov...nosequemas','El bueno','El malo'],
        'anio':'2016',
        'category':'zombies'
        },
        {
          'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NDE5NTU0OV5BMl5BanBnXkFtZTcwMzI1OTMzOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'name':'Pain & Gain',
        'cast':['La roca','Malo1','Malo2','secuestrado'],
        'anio':'2013',
        'category':'accion'
        },

      ];
    }
})();
