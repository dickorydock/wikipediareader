

var searchFunction = function(){
 
 console.log("Test Message 1d.");
 var jsonresult=null;
    $.ajax({
      dataType: "jsonp",
      url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein&callback=?", 
      success: function(result){
      console.log('it worked!');
      console.log(result);
      jsonresult = result;
      printAjax(result);
      },
      error: function(error){
        console.log("oh no");
      }
    });


   }

var printAjax = function(ajaxresult){

    exstring = $("#searchtext").val();
    arrstring = exstring.split(" ");
    htmlstring="";
    if (exstring.length>0){
    for (i=0; i<arrstring.length; i++){
    htmlstring+="<div class='newentry'><br><div class='articletitle'>"+ajaxresult.query.search[i].title+"</div><div class='articletext'>"+ajaxresult.query.search[i].snippet+"</div></div>";    
    }
    }
    wikijson = "end of it";
    console.log("print json before");
    console.log(ajaxresult.query.search[0].size);
    console.log("print json after");
    // $("#printjson").html(JSON.parse(ajaxresult));
    $("#testBox").html(htmlstring);
    $("#searchtext").value="";
    console.log("after");  

}
 // $.ajax({
 //        type: "GET",
 //        url: "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein",
 //        contentType: "text/plain",
 //        async: true,
 //        // dataType: "json",
 //        success: function (data, textStatus, jqXHR) {
 //            console.log(data);
 //        },
 //        error: function (errorMessage) {
 //          console.log(errorMessage);
 //        }
 //    });


  // requestString="http://cors.io/?u=http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein";
  // requestString ="http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert";
  // // $httpn(function(response){ console.log(response); })
  // request = new XMLHttpRequest();
  //   request.onreadystatechange=function(){

  //     // request.setRequestHeader("Origin", "http://dickorydock.github.io");
  //     console.log("first" +request.readyState + " second "+request.status);
  //     if (request.readyState==4&&request.status==200){
  //       //parse the JSON
  //       console.log(request);
  //       console.log(request.responseText);
  //       // parsedWiki=JSON.parse(request.responseText);
  //       $("#printjson").html(request.responseText);
  //     }

  //   }
  //   request.open("get", requestString, true);
  //   request.send();

// $.ajax( {
//     url: 'https://en.wikipedia.org/w/api.php',
//     data: {
//         action: 'query',
//         meta: 'userinfo',
//         format: 'json',
//         origin: 'https://www.mediawiki.org'
//     },
//     xhrFields: {
//         withCredentials: true
//     },
//     dataType: 'json'
// } ).done( function ( data ) {
//   console.log("whts up");
//   console.log(data);
// } );



//searchFunction();

$("#submitForm").on("submit",function(){
  console.log("you clicked");
  searchFunction();
  event.preventDefault();
});


  // console.log(arrstring);
  // htmlstring = "<br>want<br>you<br>now<br>"

// var openWeatherMapKey = '3da93211bae1ede6af6a70a1ab2e1fee';
  
//   var requestString = "https://api.openweathermap.org/data/2.5/weather?lat=43.4&lon=74.5"+ "&APPID="+openWeatherMapKey;
//   