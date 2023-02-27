var topContentDivHeigth;
var topNamePassionHeight;


function loadtopContentDivHeight(){
    topContentDivHeigth = document.getElementById('topBackground').offsetHeight;
    topDivOperations();
}

function loadTopNamePassionHeight(){
    topNamePassionHeight = document.getElementById('nameDiv').offsetHeight;

}

function topDivOperations(){

    var topTextHeight = document.getElementById('iconDiv').offsetHeight;
    var scrollHeight = topContentDivHeigth - window.pageYOffset;
    // if (window.pageYOffset > 0) {
    var bottom = document.getElementById('topBackground').offsetHeight;
    var opac = (window.pageYOffset/bottom)+0.3;
    // console.log('heigth is', topContentDivHeigth);
    document.getElementById('background-profile').style.background = "linear-gradient(rgba(0, 0, 0, " + opac + "), rgba(0, 0, 0, " + opac + ")), url(assets/image/background.jpg) no-repeat";
    document.getElementById('passionDivText').style.color = 'rgba(252, 252, 252,'+ ((1-opac)+0.3) + ')';
    document.getElementById('nameDivText').style.color = 'rgba(252, 252, 252,'+ ((1-opac)+0.3) + ')';
    // }
    if(scrollHeight>topTextHeight){
        document.getElementById('topContentDiv').style.height = scrollHeight+'px';
        document.getElementById('topContentDiv').style.backgroundColor = 'rgba(0, 0, 0, 0)';    //transparent
        if(topNamePassionHeight>=scrollHeight){
            document.getElementById('nameDiv').style.display = 'none';
        }else{
            document.getElementById('nameDiv').style.display = 'block';
        }
        // document.getElementById('passionDiv').style.display = 'block';
        // document.getElementById('passionDivText').style.fontSize = '3vw';
    }else{
        document.getElementById('topContentDiv').style.backgroundColor = 'black';
        document.getElementById('topContentDiv').style.height = topTextHeight+'px';
        document.getElementById('nameDiv').style.display = 'none';
        // document.getElementById('passionDivText').style.fontSize = '0';
    }


}

/*----------------------------------
on right list button press
-----------------------------------*/
function onListPress(){
    document.getElementById('sideList').style.right = '0'+'px';
}
/*-----------------------------------
on outside of sideList press
------------------------------------*/
document.addEventListener('click', function(e){   
if (document.getElementById('sideList').contains(e.target)){
    // Clicked in box
} else{
    if(document.getElementById('listButton').contains(e.target)){

    }else{
        document.getElementById('sideList').style.right = '-500'+'px';

    }
}
});




window.addEventListener("load",()=>{
    loadtopContentDivHeight();
    loadTopNamePassionHeight();
    // document.getElementById('sideList').style.top = document.getElementById('iconDiv').offsetHeight+'px';
});
window.addEventListener('resize',()=>{
    loadtopContentDivHeight();
    loadTopNamePassionHeight();

});


window.onscroll = function() {
    

    topDivOperations();
  }