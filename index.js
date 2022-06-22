for(let i = 0; i < 7; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        
        let drumButton = this.innerHTML;

        makeSound(drumButton);

        buttonAnimation(drumButton);

    });

}


// when the keys are pressed then this function wiil work
document.addEventListener('keydown', function (event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});



function makeSound (key) {

    switch (key) {
        case "w":
            let tom_1_audio = new Audio('sounds/tom-1.mp3');
            tom_1_audio.play();
            break;
        
        case "a":
            let tom_2_audio = new Audio('sounds/tom-2.mp3');
            tom_2_audio.play();
         
            break;

        case "s":
            let tom_3_audio = new Audio('sounds/tom-3.mp3');
            tom_3_audio.play();
      
            break;

        case "d":
            let tom_4_audio = new Audio('sounds/tom-4.mp3');
            tom_4_audio.play();
      
            break;

        case "j":
            let snare_audio = new Audio('sounds/snare.mp3');
            snare_audio.play();
    
            break;
        
        case "k":
            let crash_audio = new Audio('sounds/crash.mp3');
            crash_audio.play();
         
            break;

        case "l":
            let kick_audio = new Audio('sounds/kick-bass.mp3');
            kick_audio.play();
        
            break;
        default:
            alert("Wrong Key...");
            break;
    }
}


function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`);


    // adding animation to the button
    activeButton.classList.add('pressed');
    

    // removing animation from the button after 1ms
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);

}
