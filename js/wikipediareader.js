

var searchFunction = function(){
  exstring = $("#searchtext").val();
  arrstring = exstring.split(" ");
  htmlstring="";
  if (exstring.length>0){
  for (i=0; i<arrstring.length; i++){
    htmlstring+="<div class='newentry'><br><div class='articletitle'>"+"Random Title"+"</div><div class='articletext'>"+arrstring[i]+"</div></div>";
    
  }
  }
  wikijson = "end of it";
  $("#testBox").html(htmlstring);
  $("searchtext").value="";
  
var openWeatherMapKey = '3da93211bae1ede6af6a70a1ab2e1fee';
  
  var requestString = "https://api.openweathermap.org/data/2.5/weather?lat=43.4&lon=74.5"+ "&APPID="+openWeatherMapKey;
  
  // requestString="http://cors.io/?u=http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein";
  requestString ="http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert";
  console.log("are you there god");
  // $httpn(function(response){ console.log(response); })
  request = new XMLHttpRequest();
    request.onreadystatechange=function(){
      console.log("its me");
      request.setRequestHeader("Origin", "http://dickorydock.github.io");
      console.log("first" +request.readyState + " second "+request.status);
      if (request.readyState==4&&request.status==200){
        //parse the JSON
        console.log(request);
        console.log(request.responseText);
        // parsedWiki=JSON.parse(request.responseText);
        $("#printjson").html(request.responseText);
      }

    }
    request.open("get", requestString, true);
    request.send();

$.ajax( {
    url: 'https://en.wikipedia.org/w/api.php',
    data: {
        action: 'query',
        meta: 'userinfo',
        format: 'json',
        origin: 'https://www.mediawiki.org'
    },
    xhrFields: {
        withCredentials: true
    },
    dataType: 'json'
} ).done( function ( data ) {
  console.log("whts up");
  console.log(data);
} );

}

//searchFunction();

$("#submitForm").submit(function(){
  // console.log("you clicked");
  searchFunction();
  event.preventDefault();
});


  // console.log(arrstring);
  // htmlstring = "<br>want<br>you<br>now<br>"