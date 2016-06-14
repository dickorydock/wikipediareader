$(document).ready(function(){
  console.log("this is it.");
  $.ajax({url: "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein", success: function(result){
    console.log('test1');
        console.log(result);
    }, error: function(result){console.log("oh no2");} 
  });
  console.log("but 3");
});