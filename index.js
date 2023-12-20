function btnYes(){
    Swal.fire("Sabia que querias ser minovia UWU");
}
function btnNo(){

    var randomLeft = Math.random()* (2000- 0) + 1;;

    var randomBottom = Math.random()* (1000 - 0) + 1;

    var btnNo = document.getElementById('btnNo')

    btnNo.style.position = 'absolute';
    btnNo.style.bottom = (randomBottom - 1) + "px";
    btnNo.style.left = (randomLeft -1) + "px";

}