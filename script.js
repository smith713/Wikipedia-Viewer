/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    $("#button-search").click(function () {
        var inputSearch = $("#inputSearch").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + inputSearch + "&format=json&callback=?";
        
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                $('#result').html('');
                for (var i=0; i < data[1].length; i++) {
           $('#result').prepend("<div><h3><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a></h3> <div class='link'><p>"+data[3][i]+"</p></div><p class='box'>"+data[2][i]+"</p></div>");
          }    
   $("#inputSearch").val('');
        },
        error: function (errorMessage) {
         console.log(errorMessage);
        }
    });
    

  });
      $("#inputSearch").keypress(function (e) {
      if(e.which==13){
        $("#button-search").click();
      }
    });
});