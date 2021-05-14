var noOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrums;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
  var x=this.innerHTML;
  makeSound(x);
  animation(x);
});
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  animation(event.key);
});



function makeSound(key)
{
  switch(key)
  {
    case "w":
    var tom1=new Audio("sound/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2=new Audio("sound/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3=new Audio("sound/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4=new Audio("sound/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var crash=new Audio("sound/crash.mp3");
    crash.play();
    break;

    case "k":
    var kick=new Audio("sound/kick-bass.mp3");
    kick.play();
    break;

    case "l":
    var snare=new Audio("sound/snare.mp3");
    snare.play();
    break;

   default:
   console.log(x);

  }
}
function animation(curBtn)
{
  var actBtn=document.querySelector("."+curBtn);
  actBtn.classList.add("pressed");
  setTimeout(function()
{
  actBtn.classList.remove("pressed");
},100);
}
