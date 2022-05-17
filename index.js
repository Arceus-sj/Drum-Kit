

for(let i = 0; i < 7; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        
        let drumButton = this.innerHTML;

        // let drumAudio = new Audio('sounds/')
        
        // drumButton.style.color = 'white';

        console.log(drumButton);


        if(drumButton === 'W') {
            let tom_1_audio = new Audio('sounds/tom-1.mp3');
            tom_1_audio.play();
        }
        else if(drumButton === 'a') {
            let tom_2_audio = new Audio('sounds/tom-2.mp3');
            tom_2_audio.play();
        }
        else if(drumButton === 's') {
            let tom_3_audio = new Audio('sounds/tom-3.mp3');
            tom_3_audio.play();
        }
        else if(drumButton === 'd') {
            let tom_4_audio = new Audio('sounds/tom-4.mp3');
            tom_4_audio.play();
        }
        else if(drumButton === 'j') {
            let snare_audio = new Audio('sounds/snare.mp3');
            snare_audio.play();
        }
        else if(drumButton === 'k') {
            let crash_audio = new Audio('sounds/crash.mp3');
            crash_audio.play();
        }
        else if(drumButton === 'l') {
            let kick_audio = new Audio('sounds/kick-bass.mp3');
            kick_audio.play();
        }
    });

}



