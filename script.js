let key = ``;
const input = document.querySelector('#input');
const btn = document.querySelector('button');

document.body.addEventListener('keydown', (e) => {
    key = e.key;
    playSound(key)
})

const playSound = (key) =>{
    let audio = document.querySelector(`#s_key${key}`);
    let keyBox = document.querySelector(`div[data-key="key${key}"]`);
    
    if(audio){
        audio.currentTime = 0;
        audio.play();
    }

    if(keyBox){
        keyBox.classList.add(`active`);
        setTimeout(() => {
            keyBox.classList.remove(`active`);
        }, 300)
    }
}

input.addEventListener(`keydown`, (e)=> {
    e.stopPropagation();
})

btn.addEventListener(`click`, () =>{  
    let value = input.value;
    playComposition(value);
})

function playComposition(song){
    let wait = 0;

    for(let i = 0; i < song.length; i++){
        setTimeout(()=>{
            playSound(song[i])
        }, wait);

        wait += 250;
    }
}