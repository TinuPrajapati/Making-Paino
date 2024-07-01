// Create button
const db=["a","s","d","f","g","h","j","k","l","q","w","p","z"];
for(let text of db){
    let btn=document.createElement("button");
    btn.innerHTML=text.toUpperCase();
    if(text=="s" ||text=="f" ||text=="j" ||text=="l" ||text=="w"){
        btn.classList.add("black");
        btn.classList.add("common");
    }
    const div = document.querySelector("div");
    div.append(btn);
};

const btns = document.querySelectorAll("button");
const box = document.querySelector("body")


box.addEventListener("keypress", (e) => {
    audioValue(e.key);
    btns.forEach((btn)=>{
        if(btn.innerHTML==e.key.toUpperCase()){
            changeStyle(btn);
        }
    })
});

for(let b of btns){
    b.addEventListener("click", (e) => {
        let value = b.innerHTML.toLowerCase();
        audioValue(value);
        changeStyle(b);
    });

};

// change style
function changeStyle(b){
    if(b.getAttribute("class")=="black common"){
        b.setAttribute("class", "white common");
        setTimeout(() => {
            b.setAttribute("class", "black common");
        }, 200);
    }
    b.style.transform="scale(0.9)"
    setTimeout(() => {
         b.style.transform="scale(1)"
    }, 200);
}

// check the letter
function audioValue(key) {
    if (key == "a") {
        playAudio("assets/audio/key01.mp3");
    } else if (key == "s") {
        playAudio("assets/audio/key02.mp3");
    } else if (key == "d") {
        playAudio("assets/audio/key03.mp3");
    } else if (key == "f") {
        playAudio("assets/audio/key04.mp3");
    } else if (key == "g") {
        playAudio("assets/audio/key05.mp3");
    } else if (key == "h") {
        playAudio("assets/audio/key06.mp3");
    } else if (key == "j") {
        playAudio("assets/audio/key07.mp3");
    } else if (key == "k") {
        playAudio("assets/audio/key08.mp3");
    } else if (key == "l") {
        playAudio("assets/audio/key09.mp3");
    } else if (key == "q") {
        playAudio("assets/audio/key10.mp3");
    } else if (key == "w") {
        playAudio("assets/audio/key11.mp3");
    } else if (key == "p") {
        playAudio("assets/audio/key12.mp3");
    } else if (key == "z") {
        playAudio("assets/audio/key01.mp3");
    } else {
        alert("press only selected key");
    }
}

// play the audio
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.play();
}