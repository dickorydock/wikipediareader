$(document).ready(function(){
  console.log("this is the before message.");
  $.ajax({url: "https://en.wikipedia.org/w/api.php?action=query&origin=http://dickorydock.github.io/&format=json&list=search&utf8=1&srsearch=Albert+Einstein&callback=JSON_CALLBACK", success: function(result){
    console.log('it worked!');
        console.log(result);
    }, error: function(result){console.log("oh no, it failed.");} 
  });
  console.log("this is the after message");
});