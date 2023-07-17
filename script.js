function rojo(){
    var luces = document.getElementById('rojo');
    luces.style.backgroundColor = "red"
    setTimeout(function(){
        luces.style.backgroundColor = "rgb(99, 44, 44)";
        verde()
    }, 10000)
}
function amarillo(){
    var luces = document.getElementById('amarillo');
    var yellow = setInterval(function(){
        luces.style.backgroundColor = "yellow"
        setTimeout(function(){
            luces.style.backgroundColor = "rgb(88, 88, 37)";
        }, 500)
    }, 1000)
    setTimeout(function(){
        luces.style.backgroundColor = "rgb(88, 88, 37)";
        clearInterval(yellow)
        rojo()
    }, 6000)
}
function verde(){
    var luces = document.getElementById('verde');
    luces.style.backgroundColor = "rgb(43, 255, 43)";
    setTimeout(function(){
        luces.style.backgroundColor = "rgb(46, 97, 46)";
        amarillo()
    }, 10000)
}
verde() 
    