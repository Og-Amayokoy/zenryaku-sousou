/* 
Just add your html  tag
"<script src="https://og-amayokoy.github.io/zenryaku-sousou/main.js" type="text/javascript"></script>

*/


function zensou_clicked() {
    var zensou_bottom = docment.getElementsById("zensou_bottom");

    var none_and_block = document.getElementsByClassName("zensou")


    if(zensou_bottom.checked == true){
        Text.style.display="none";

    }else{
        text.style.display="block";
    }
}