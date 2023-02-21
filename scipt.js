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
        // console.log('heigth is', topContentDivHeigth);
        document.getElementById('background-profile').style.background = "linear-gradient(rgba(0, 0, 0, " + opac + "), rgba(0, 0, 0, " + opac + ")), url(assets/image/background.jpg) no-repeat";
    }
    // console.log(topContentDivHeigth - window.pageYOffset);

    var scrollHeight = topContentDivHeigth - window.pageYOffset;
    var percent = (scrollHeight/topContentDivHeigth)*100; //find percentage

    console.log(percent)
    if(percent>20){
        document.getElementById('topContentDiv').style.height = percent+'vh';
        document.getElementById('topContentDiv').style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }else{
        document.getElementById('topContentDiv').style.backgroundColor = 'black';
    }

  }