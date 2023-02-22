var topContentDivHeigth;

function loadtopContentDivHeight(){
    topContentDivHeigth = document.getElementById('rowTop').offsetHeight;
    topDivOperations();
}

function topDivOperations(){

    var topTextHeight = document.getElementById('nameDiv').offsetHeight;
    var scrollHeight = topContentDivHeigth - window.pageYOffset;
    // var percent = (scrollHeight/topContentDivHeigth)*100; //find percentage

    if(scrollHeight>topTextHeight){
        document.getElementById('topContentDiv').style.height = scrollHeight+'px';
        document.getElementById('topContentDiv').style.backgroundColor = 'rgba(0, 0, 0, 0)';
        document.getElementById('passionDiv').style.display = 'block';
        document.getElementById('passionDivText').style.fontSize = '3vw';
    }else{
        document.getElementById('topContentDiv').style.backgroundColor = 'black';
        document.getElementById('topContentDiv').style.height = topTextHeight+'px';
        document.getElementById('passionDivText').style.fontSize = '0';
        // document.getElementById('passionDiv').style.display = 'none';
    }

}


document.getElementById('topContentDiv').onload = loadtopContentDivHeight();
window.addEventListener('resize',loadtopContentDivHeight);


window.onscroll = function() {
    
    if (window.pageYOffset > 0) {
        var bottom = document.getElementById('rowTop').offsetHeight;
        var opac = (window.pageYOffset/bottom)+0.3;
        // console.log('heigth is', topContentDivHeigth);
        document.getElementById('background-profile').style.background = "linear-gradient(rgba(0, 0, 0, " + opac + "), rgba(0, 0, 0, " + opac + ")), url(assets/image/background.jpg) no-repeat";
        document.getElementById('passionDivText').style.color = 'rgba(252, 252, 252,'+ ((1-opac)+0.3) + ')';
    }
    topDivOperations();
  }