/* 
Just add your html  tag
"<script src="https://og-amayokoy.github.io/zenryaku-sousou/main.js" type="text/javascript"></script>

*/

console.log ("js is runned")

function myfucntion() {
    var zensou_area = document.getElementById("zensou_area");

    var zensou_area_class=document.getElementsByClassName("zensou_area_class")
   
   var zensou_bottom=document.getElementById("zensou_bottom")
    console.log ("myfunction  is runned");
    if(zensou_bottom.checked == true){
        zensou_area.style.display="block";
        zensou_area_class.style.display="block";
        console.log ("block")
    } else {
        zensou_area.style.display="none";
        zensou_area_class.style.display="none";
        console.log ("none")
    }
}