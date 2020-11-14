let audioPlayerImage = document.querySelector(".AudioPlayerImage");
let audioName = document.querySelector(".AudioName");
let audioSingerName = document.querySelector(".AudioSingerName");

let backAudioPlayer = document.querySelector(".BackAudioPlayer");
let pauseAudioPlayer = document.querySelector(".PauseAudioPlayer");
let nextAudioPlayer = document.querySelector(".NextAudioPlayer");
let randomAudio = document.querySelector(".RandomAudio");

// eventes
randomAudio.addEventListener("click", RandomChooseAudio);
pauseAudioPlayer.addEventListener("click", PlayPauseAudio);
nextAudioPlayer.addEventListener("click", NextAudio);
backAudioPlayer.addEventListener("click", BackAudio);

// data store of audioplayer
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

    },
    {
        name: "Karabkh is azb",
        singer: "dj roshka",
        image: "https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg",
        audio: "Audio/Dj_Roshka_-_Karabakh_is_Azerbaijan_www.BiG.Az.mp3"

    },
    {
        name: "Cenab leytnant",
        singer: "Semistan",
        image: "https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg",
        audio: "Audio/Shemistan_Elizamanli_-_Cenab_Leytenant_www.BiG.Az.mp3"

    }
];

let currentAudio = document.createElement('audio');
let audioIndex = 0;
let isPlaying = false;
let randomButtonNumber = 1;
var randomReseultValue;

// this line when pressed for first time pause button ,audio will playing 
currentAudio.src = audioList[audioIndex].audio;

// when call this funtion loading new audio
function loadAudio(audioIndex) {
    currentAudio.src = audioList[audioIndex].audio;
}

// random buttona vurduqda tek cut ededler yaradir. Cut edeler cixdiqda random activdir demekdir , tek eded olduqda random active deyil 
function RandomChooseAudio() {
    randomButtonNumber += 1;
}

// when click pause button , audio is active or is not active
function PlayPauseAudio() {
    if (!isPlaying) {
        PlayAudio();
    }
    else {
        PauseAudio();
    }
}

// when call this function , audio is play
function PlayAudio() {
    currentAudio.play();
    isPlaying = true;
}

// when call this function , audio is not play
function PauseAudio() {
    currentAudio.pause();
    isPlaying = false;
}

// change  Next Audio
function NextAudio() {
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
    audioIndex -= 1;
    if (audioIndex < 0) {
        audioIndex = audioList.length - 1
    }
    loadAudio(audioIndex);
    PlayAudio();
}

