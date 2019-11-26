$(".str.home").each(function () {
  var div = $(this);
  var projetoStr = $(this).attr("data-be");
  var caminhoProjeto = "resources/" + projetoStr + "/index.json";

  var teste = $.getJSON(caminhoProjeto, function (data) {
    items = [];
    titulo = data.title;
    thumbnail = data.thumbnail;
    images = data.images;
    
    //console.log(images)

    div.html('<h2>' + titulo + '</h2>' + '<img src="resources/' + projetoStr + '/media/' + thumbnail + '"/>');

    
  });
});




$(".str.home").click(function() {
  var nomeProjeto =  $(this).attr("data-be");
  var abrirProjeto = "resources/" + $(this).attr("data-be") + "/index.json";

  $(".portfolio-modal .modal-content").html("");
  $(".portfolio-modal").addClass("display");

  var caminhoClique = $.getJSON(abrirProjeto, function (data) {
    items = [];
    titulo = data.title;
    images = data.images;
    description = data.description;
    copy = data.copy;

    $(".portfolio-modal .modal-content").append('<h2>' + titulo + '</h2>' + '<h3>' + description + '</h3>' + '<p>' + copy + '</p>');
    
    $(images).each(function () {
      var imagesU= '<img src="resources/' + nomeProjeto + '/media/' + this + '"/>';

      //console.log(imagesU)

      $(".portfolio-modal .modal-content").append(imagesU);
    });

  });
});


$(".portfolio-modal .close-modal, .modal-content").click(function() {
  $(".portfolio-modal").removeClass('display');
})

$(document).ready(function(){
  $('.portfolio-content').bind('mousewheel', function(e){
      if(e.originalEvent.wheelDelta /120 > 0) {
          //console.log('scrolling up !');
          $(this).animate( { scrollLeft: '-=100' }, 10 );

      }
      else{
          //console.log('scrolling down !');
          $(this).animate( { scrollLeft: '+=100' }, 10 );
      }
  });
});

$(document).on('keypress',function(e) {
  if(e.which == 13) {
    $("body").toggleClass("dev");
  }
});





/* o loop funcionou hehe
$(".str.home").each(function () {
  var projetoStr = $(this).attr("data-be")

  var caminhoProjeto = "resources/" + projetoStr + "/index.json"
  console.log(caminhoProjeto)

  $.getJSON(caminhoProjeto, function (data) {
    var items = [];

    $.each(data, function (key, val) {
      items.push("<li id='" + key + "'>" + val + "</li>");
    });

    $("<ul/>", {
      "class": "my-new-list",
      html: items.join("")
    }).appendTo("body");
  });
});

*/



/* 
 $.getJSON( caminhoProjeto, function ( data ) {
  var items = [];
  
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
}); */




/* $.ajax({
  type: "post",
  url: "https://www.behance.net/ericsatoru",
  data: {
      
  },
  success: function(response) {
      console.log(response);
  }
}); */