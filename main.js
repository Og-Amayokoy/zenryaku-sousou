/* 
Just add your html  tag
"<script src="https://og-amayokoy.github.io/zenryaku-sousou/main.js" type="text/javascript"></script>

*/


function zensou_clicked() {
    var zensou_bottom = docment.getElementsById("zensou_bottom");

    var zensou = document.getElementsByClassName("zensou")


    if(zensou_bottom.checked == true){
        zensou.style.display="none";

    }else{
        zensou.style.display="block";
    }
}