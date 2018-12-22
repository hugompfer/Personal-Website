var showMore = true;

window.onload = function(){
    document.getElementById("all").click();
}

document.getElementById("all").onclick = function () {
    closeAll();
    var interval = setInterval(function () {
        $("#project1").fadeIn();
        $("#project2").fadeIn();
        $("#project3").fadeIn();
        $("#project4").fadeIn();
        $("#project5").fadeIn();
        $("#project6").fadeIn();
        document.getElementById("see-more").style.display = "block";
        clearInterval(interval);
    }, 500);
}

document.getElementById("personal").onclick = function () {
    closeAll();
    var interval = setInterval(function () {
        $("#project3").fadeIn();
        document.getElementById("see-more").style.display = "none";
        clearInterval(interval);
    }, 500);
}

document.getElementById("school").onclick = function () {
    closeAll();
    var interval = setInterval(function () {
        $("#project1").fadeIn();
        $("#project2").fadeIn();
        $("#project4").fadeIn();
        $("#project5").fadeIn();
        $("#project6").fadeIn();
        $("#project7").fadeIn();
        document.getElementById("see-more").style.display = "block";
        clearInterval(interval);
    }, 500);
}

function closeAll() {
    $("#project1").fadeOut();
    $("#project2").fadeOut();
    $("#project3").fadeOut();
    $("#project4").fadeOut();
    $("#project5").fadeOut();
    $("#project6").fadeOut();
    $("#project7").fadeOut();
    $("#project8").fadeOut();
    $("#project9").fadeOut();
    $("#project10").fadeOut();
}


document.getElementById("see-more").onclick =  function (){
    if(showMore){
        if(document.getElementById("all").className === "underline"){
            $("#project7").fadeIn();
        }
        $("#project8").fadeIn();
        $("#project9").fadeIn();
        $("#project10").fadeIn();    
        document.getElementById("see-more").textContent = "Show Less"; 
        showMore = false;
    }else{
        if(document.getElementById("all").className === "underline"){
            $("#project7").fadeOut();
        }
        $("#project8").fadeOut();
        $("#project9").fadeOut();
        $("#project10").fadeOut();   

        document.getElementById("see-more").textContent = "Show More";  
        showMore = true;

    }
    
}

