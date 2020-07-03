
function changeColor() {
    var randcol= "";
     var allchar="0123456789ABCDEF";
    for(var i=0; i<6; i++){
        randcol += allchar[Math.floor(Math.random()*16)];
         }
     document.body.style.backgroundColor= "#"+randcol;
}
