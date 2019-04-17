/* 
To use "<script src="https://og-amayokoy.github.io/zenryaku-sousou/main.js" type="text/javascript"></script>, you can get.

*/

import defaultExport from "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
/*
$('input[name="zensou-bottom"]').change(function() {
 document.getElementByClass("zensou").style.display ="none";
}

          */                           
                                    
 fucnction ZensouMode() {
var zensouModeValue =  document.zensou_bottom_form.zensou_bottom.checked;

 if ( zensouModeValue == true){
 document.getElementByClass("zensou").style.display ="none";
 }
 
}
