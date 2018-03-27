//business logic
function yourFortune (luckArray){ //two integers represetning number of occurances

  var overallLuck = luckArray[0] - luckArray[1];
var lp = "lucky person";
var vlp = "very lucky person";
var up = "unlucky person";
var vup = "very unlucky person";

if (overallLuck >= 0){
  if (overallLuck <= 2){
    return lp;
  }else{
    return vlp;
  }
}

if (overallLuck < 0){
  if (overallLuck >= -2){
    return up;
  }else {
    return vup;
  }
}


}

yourFortune(3, 1);

//user logic
$(document).ready(function(){
  $("#fortune").submit(function(event){
    event.preventDefault();
    var luckArray = [0,0]; //number of occurances of lucky and unlucky, in that order
  $("input:checkbox[name=selection]:checked").each(function(){
      var checkedBox = $(this).val();
      console.log(checkedBox);
      if (checkedBox === "lucky") {
        luckArray[0]++;
      }else{
        luckArray[1]++;
      }
    });
    var finalLuck = yourFortune(luckArray);
    console.log(finalLuck);
  });
});
  //console.log("You happen to be" + + "!")
