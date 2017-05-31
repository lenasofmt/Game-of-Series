'use strict';

var cabeca = new Audio('sons/cabeca.mp3');
var grito = new Audio('sons/grito.mp3');
var drogo = new Audio('sons/drogo.mp3');
var facada = new Audio('sons/facada.mp3');
var cair = new Audio('sons/cair.mp3');
var murro = new Audio('sons/murro.mp3');
var jon = new Audio('sons/jon.mp3');
var slideIndex = 1;
var lives = 3;

function showSlides(n) {
    var i, slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var n = 0; n < dots.length; n++) {
        dots[n].className = dots[n].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function perderVidas(ui, personagem, imagem, id, gif, sound) {
                //console.log(ui.draggable["0"].id);
	
    var dropppedObj = ui.draggable["0"].id // desta maneira consegues ir buscar o id do objecto que acabou de cair !
    if (dropppedObj === imagem) { // Caiu objeto certo
        $(id).attr('src', gif);
        sound.play();

    } else { // Caiu objeto errado
        $(".viidas:nth-child(" + (4 - lives) + ")").css({
            "display": "none"
        });
        $("#" + dropppedObj).css({
            "display": "none"
        });
        lives--;  // ESTAVA FORA DA FUNÇÂO ATENÇÂO A ISSO !!!!!!! E TEM QUE ESTAR DENTRO DO ELSE
    }
	
	      if(lives == 0) {
                showSlides(slideIndex = 21);
            }
}


    $(".weapons").draggable({
        stack: ".weapons",
        revert: 'invalid'
    });

    $(".viserys").droppable();

    $(".viserys").droppable({drop: function(event, ui){

            //accept: "#img-1", // ISTO SO SE FAZ SE QUISERES TRATAR FACILMENTE UM OJETO NO TUE CASO QUERES TRATAR DOS CERTOS E DOS ERRADOS


            perderVidas(ui, ".viserys", "img-1", "#man-alter1", "personagens/gay.gif", grito);
      
        }
    });



$(".ned").droppable();

$(".ned").droppable({drop: function (event, ui) {
    perderVidas(ui, ".ned", "img-7", "#man-alter2", "personagens/ned stark2.png", cabeca);
   
}});

$(".drogo").droppable();

$(".drogo").droppable({drop: function (event, ui) {
    perderVidas(ui, ".drogo", "img-10", "#man-alter3", "personagens/5.gif", drogo);
  $(".drogo").addClass("gif-1");
}});

$(".catelyn").droppable();

$(".catelyn").droppable({drop: function (event, ui) {
    perderVidas(ui, ".catelyn", "img-16", "#man-alter4", "personagens/2.gif", facada);
   
}});


$(".rob").droppable();

$(".rob").droppable({drop: function (event, ui) {
    perderVidas(ui, ".rob", "img-13", "#man-alter5", "personagens/10.gif", facada);
 
}});

$(".talisa").droppable();

$(".talisa").droppable({drop: function (event, ui) {
    perderVidas(ui, ".talisa", "img-15", "#man-alter6", "personagens/9.gif", facada);

}});

$(".joffrey").droppable();

$(".joffrey").droppable({drop: function (event, ui) {
    perderVidas(ui, ".joffrey", "img-18", "#man-alter7", "personagens/3.gif", drogo);
    
}});


$(".lysa").droppable();

$(".lysa").droppable({drop: function (event, ui) {
    perderVidas(ui, ".lysa", "img-24", "#man-alter8", "personagens/6.gif", cair);
  
}});

$(".oberyn").droppable();

$(".oberyn").droppable({drop: function (event, ui) {
    perderVidas(ui, ".oberyn", "img-25", "#man-alter9", "personagens/7.gif", murro);

    }});


$(".tywin").droppable();

$(".tywin").droppable({drop: function (event, ui) {
    perderVidas(ui, ".tywin", "img-30", "#man-alter10", "personagens/8.gif",facada);
   
}});

$(".jon").droppable();

$(".jon").droppable({drop: function (event, ui) {
    perderVidas(ui, ".jon", "img-34", "#man-alter11", "personagens/4.gif", facada);
   
}});
