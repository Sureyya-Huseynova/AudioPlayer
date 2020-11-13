
let audioPlayerImage = document.querySelector(".AudioPlayerImage");
let audioName = document.querySelector(".AudioName");
let audioSingerName = document.querySelector(".AudioSingerName");

let backAudioPlayer = document.querySelector(".BackAudioPlayer");
let pauseAudioPlayer = document.querySelector(".PauseAudioPlayer");
let nextAudioPlayer = document.querySelector(".NextAudioPlayer");
let randomAudio = document.querySelector(".RandomAudio");


let audioList = [
    {
        name: "Cirpinirdi qara deniz",
        singer: "Azerin",
        image: "https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg",
        audio: "Audio/Azerin_-_Cirpinirdin_qara_deniz_www.BiG.Az.mp3"

    },
    {
        name: "Esger marshi",
        singer: "Namelum ",
        image: "https://i.mycdn.me/image?id=513022246526&plc=WEB&tkn=*b00y7pCodbDPZlzHgmA-2iuygPo&fn=sqr_288",
        audio: "Audio/Esger_marsi_-_Azerbaycan_esgeri_www.BiG.Az.mp3"
    },
    {
        name: "Veten emaneti",
        singer: "Semistan",
        image: "https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg",
        audio: "Audio/Semistan_Elizamanli_-_Esger_Veten_emaneti_www.BiG.Az.mp3"

    }
];

let currentAudio = document.createElement('audio');
let audioIndex = 0;
let isPlaying = false;


// when call this funtion loading new audio
function loadAudio(audioIndex) {
    currentAudio.src = audioList[audioIndex].audio;
}

function PlayPauseAudio() {
    console.log(5);
    if (!isPlaying) {
        PlayAudio();
    }
    else {
        PauseAudio();
    }
}

function PlayAudio() {
    currentAudio.play();
    isPlaying = true;
}

function PauseAudio() {
    currentAudio.pause();
    isPlaying = false;
}

// change  Next Audio

function NextAudio() {
    console.log("next");
    if (audioIndex < audioList.length - 1) {
        audioIndex += 1;
    }
    else {
        audioIndex = 0;
    }
    loadAudio(audioIndex);
    PlayAudio();
}

// change Back Audio

function BackAudio() {
    if (audioIndex > 0) {
        audioIndex -= 1;
    }
    loadAudio(audioIndex);
    PlayAudio();
}

// Random ceviri '  
let val = 1;

function RandomChooseAudio() {
    val += 1;
    let randomValue = (Math.floor(Math.random() * 100 % 3))
    if (val % 2 == 0) {
        console.log("val " + randomValue);
        loadAudio(randomValue);

    } else {
        console.log("Eeeeeeeeeeee")

    }
}