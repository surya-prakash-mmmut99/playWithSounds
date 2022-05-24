
$(".btn").click(function() {
 makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

    });
    



 document.addEventListener("keypress",function(event){
    makeSound(event.key);
   buttonAnimation(event.key);
});

function makeSound(key){

    switch(key){

        case "a"||"A":
            var audio = new Audio("sounds/a.mp3");
            audio.play();
        break;
        case "b":
            var audio = new Audio("sounds/b.mp3");
            audio.play();
        break;
        case "c":
            var audio = new Audio("sounds/c.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/d.mp3");
            audio.play();
        break;
        case "e":
            var audio = new Audio("sounds/e.mp3");
            audio.play();
        break;
        case "f":
            var audio = new Audio("sounds/f.mp3");
            audio.play();
        break;
        case "g":
            var audio = new Audio("sounds/g.mp3");
            audio.play();
        break;
        case "h":
            var audio = new Audio("sounds/h.mp3");
            audio.play();
        break;
        case "i":
            var audio = new Audio("sounds/i.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/j.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/k.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/l.mp3");
            audio.play();
        break;
        case "m":
            var audio = new Audio("sounds/m.mp3");
            audio.play();
        break;
        case "n":
            var audio = new Audio("sounds/n.mp3");
            audio.play();
        break;
        case "o":
            var audio = new Audio("sounds/o.mp3");
            audio.play();
        break;
        case "p":
            var audio = new Audio("sounds/p.mp3");
            audio.play();
        break;
        case "q":
            var audio = new Audio("sounds/q.mp3");
            audio.play();
        break;
        case "r":
            var audio = new Audio("sounds/r.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/s.mp3");
            audio.play();
        break;
        case "t":
            var audio = new Audio("sounds/t.mp3");
            audio.play();
        break;
        case "u":
            var audio = new Audio("sounds/u.mp3");
            audio.play();
        break;
        case "v":
            var audio = new Audio("sounds/v.mp3");
            audio.play();
        break;
        case "w":
            var audio = new Audio("sounds/w.mp3");
            audio.play();
        break;
        case "x":
            var audio = new Audio("sounds/x.mp3");
            audio.play();
        break;
        case "y":
            var audio = new Audio("sounds/y.mp3");
            audio.play();
        break;
        case "z":
            var audio = new Audio("sounds/z.mp3");
            audio.play();
        break;
        case "1":
            var audio = new Audio("sounds/1.mp3");
            audio.play();
        break;
        case "2":
            var audio = new Audio("sounds/2.mp3");
            audio.play();
        break;
        case "3":
            var audio = new Audio("sounds/3.mp3");
            audio.play();
        break;
        case "4":
            var audio = new Audio("sounds/4.mp3");
            audio.play();
        break;
        case "5":
            var audio = new Audio("sounds/5.mp3");
            audio.play();
        break;
        case "6":
            var audio = new Audio("sounds/6.mp3");
            audio.play();
        break;
        case "7":
            var audio = new Audio("sounds/7.mp3");
            audio.play();
        break;
        case "8":
            var audio = new Audio("sounds/8.mp3");
            audio.play();
        break;
        case "9":
            var audio = new Audio("sounds/9.mp3");
            audio.play();
        break;
        case "0":
            var audio = new Audio("sounds/0.mp3");
            audio.play();
        break;
        
        

        

        
    }

}

function buttonAnimation(currentKey){
 var activeButton =   document.querySelector("."+currentKey);
  activeButton =   document.querySelector("."+currentKey);

 activeButton.classList.add("pressed");

 setTimeout(function(){
    activeButton.classList.remove("pressed");
 },100)

}


 

