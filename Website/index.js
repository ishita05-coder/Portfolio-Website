function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.style.transform = "translateY(-500px)";
    }
}


const texts = [
    "DEVELOPER",
    "YOUTUBER",
    "PROGRAMMER"
];

const speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textindex = 0;
let characterindex = 0;

function typeWriter() {
    if (characterindex < texts[textindex].length) {
        textElements.innerHTML += texts[textindex].charAt(characterindex);
        characterindex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000); // Wait before erasing
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        // Move to the next word and reset characterindex
        textindex = (textindex + 1) % texts.length;
        characterindex = 0;
        setTimeout(typeWriter, 500); // Wait before typing the next word
    }
}

// Initialize typing on window load
window.onload = typeWriter;
