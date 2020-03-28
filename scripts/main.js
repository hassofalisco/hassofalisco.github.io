let myImage = document.getElementById('umbreon-img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/250px-197Umbreon.png'){
        myImage.setAttribute ('src', 'images/shiny_umbreon.png');
    }
    else {
        myImage.setAttribute ('src', 'images/250px-197Umbreon.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(repetition='') {
    let myName = prompt('Please enter your name ' + repetition + '?');
    if (!myName || myName === null) {
        setUserName("again.");
    }
    else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'What is your favorite Pokémon? ' + myName;
    if (myName == 'Lea'){
        myHeading.style.color = 'red';
    }
    if (myName == 'Lea'){
        myHeading.style.color = 'blue';
    }
    else{
        myHeading.style.color = 'black';
    }
    
    }
}

if (!localStorage.getItem('name')){
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'What is your favorite Pokémon ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}