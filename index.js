let amazon = document.getElementById("projectBox1");
let cricHero = document.getElementById("projectBox2");
let lindin = document.getElementById("linkdinLogo");
let github = document.getElementById("gitHubLogo");
let email = document.getElementById("emailLogo");

amazon.addEventListener("click", ()=>{
    window.location.href="https://amazon-clone1234.netlify.app/";
});
cricHero.addEventListener("click", ()=>{
    window.location.href="https://crichero-clone.netlify.app/";
});

github.addEventListener("click", ()=>{
    window.location.href="https://github.com/ashura666";
});
lindin.addEventListener("click", ()=>{
    window.location.href="https://www.linkedin.com/in/yash-chakar-6b2059250";
});
email.addEventListener("click",()=>{
    window.location.href ="mailto:chakaryash05@gmail.com"
})

let txtEffect = document.getElementById("txtEffect");
let texts = ['Developer','Programmer','Creator','Designer','Problem Solver']
let textInd =0;
let charInd =0;

function typeText() {
    if (charInd < texts[textInd].length) {
        txtEffect.textContent += texts[textInd].charAt(charInd);
        charInd++;
        setTimeout(typeText, 100); // Adjust typing speed here
    } else {
        setTimeout(deleteText, 1000); // Pause before deleting
    }
}

function deleteText() {
    if (charInd > 0) {
        txtEffect.textContent = texts[textInd].substring(0, charInd - 1);
        charInd--;
        setTimeout(deleteText, 50); // Adjust deleting speed here
    } else {
        textInd = (textInd + 1) % texts.length; // Move to the next text
        setTimeout(typeText, 500); // Pause before typing the next text
    }
}

// Start the typewriter effect
typeText();