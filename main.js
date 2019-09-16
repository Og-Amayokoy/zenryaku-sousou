/* 
Just add your html  tag
"<script src="https://og-amayokoy.github.io/zenryaku-sousou/main.js" type="text/javascript"></script>

*/

console.log ("js is runned")


function myfucntion() {
    var aaa = document.getElementById("text");
   /* var aaa = document.getElementsByClassName("zensou_area");*/
   var checkbox=document.getElementById("mycheck")
    console.log ("myfunction  is runned");
    if(checkbox.checked == true){
        aaa.style.display="block";
        console.log ("block")
    } else {
        aaa.style.display="none";
        console.log ("none")
    }
}