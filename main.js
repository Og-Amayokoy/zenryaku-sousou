/* 
Just add your html  tag
"<script src="https://og-amayokoy.github.io/zenryaku-sousou/main.js" type="text/javascript"></script>

*/

console.log ("js is runned")


function myfucntion() {
    var zensou_area = document.getElementById("text");
   /* var aaa = document.getElementsByClassName("zensou_area");*/
   var checkbox=document.getElementById("mycheck")
    console.log ("myfunction  is runned");
    if(checkbox.checked == true){
        zensou_area.style.display="block";
        console.log ("block")
    } else {
        zensou_area.style.display="none";
        console.log ("none")
    }
}