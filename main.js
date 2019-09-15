/* 
To use "<script src="https://og-amayokoy.github.io/zenryaku-sousou/main.js" type="text/javascript"></script>, you can get.

*/

/*
$('input[name="zensou-bottom"]').change(function() {
 document.getElementByClass("zensou").style.display ="none";
}

          */                           

          /*
 fucnction ZensouMode() {
var zensouModeValue =  document.zensou_bottom_form.zensou_bottom.checked;

 if ( zensouModeValue == true){
 document.getElementByClass("zensou").style.display ="none";
 }
 
}


*/

document.getElementsByClassName("zensou").style.block;

function zensou_clicked() {
    var zensou_bottom = docment.getElementsById("zensou_bottom");

    var none_and_block = document.getElementsByClassName("zensou")


    if(zensou_bottom.checked == true){
        Element.style.display="none";

    }else{
        Element.style.display="block";
    }
}