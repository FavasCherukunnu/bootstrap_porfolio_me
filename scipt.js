var topContentDivHeigth;

function loadtopContentDivHeight(){
    topContentDivHeigth = document.getElementById('topContentDiv').offsetHeight;
}


document.getElementById('topContentDiv').onload = loadtopContentDivHeight();
window.addEventListener('resize',loadtopContentDivHeight);


window.onscroll = function() {
    if (window.pageYOffset > 0) {
    var bottom = document.getElementById('rowTop').offsetHeight;
   var opac = (window.pageYOffset/bottom)+0.3;
    console.log('heigth is', topContentDivHeigth);
    document.getElementById('background-profile').style.background = "linear-gradient(rgba(0, 0, 0, " + opac + "), rgba(0, 0, 0, " + opac + ")), url(assets/image/background.jpg) no-repeat";
    }
  }