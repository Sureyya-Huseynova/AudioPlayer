let audioPlayerImage = document.querySelector(".AudioPlayerImage");
let audioName = document.querySelector(".AudioName");
let audioSingerName = document.querySelector(".AudioSingerName");

let backAudioPlayer = document.querySelector(".BackAudioPlayer");
let pauseAudioPlayer = document.querySelector(".PauseAudioPlayer");
let nextAudioPlayer = document.querySelector(".NextAudioPlayer");
let randomAudio = document.querySelector(".RandomAudio");
let showSeekLength = document.querySelector(".SeekLength");
let currentTime = document.querySelector(".CurrentTime");
let totalDuration = document.querySelector(".TotalDuration");
let volumeVoice = document.querySelector(".VolumeVoice");

// eventes
randomAudio.addEventListener("click", RandomChooseAudio);
pauseAudioPlayer.addEventListener("click", PlayPauseAudio);
nextAudioPlayer.addEventListener("click", NextAudio);
backAudioPlayer.addEventListener("click", BackAudio);
showSeekLength.addEventListener("change", SeeklengthAudio)
volumeVoice.addEventListener("change", ChangevolumeVoice)


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

// random buttona vurduqda tek cut ededler yaradir. Cut edeler cixdiqda random activdir demekdir , tek eded olduqda random active deyil . (bu yoxlanishi next back  buttonlari vurduqda check edib ona uygun netice cixaracagiq, bura da yalniz tek ve cut ededler istehsal olunur)

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
    if (randomButtonNumber % 2 == 0) {
        randomReseultValue = (Math.floor(Math.random() * 100 % 5));
        loadAudio(randomReseultValue);

    } else {
        loadAudio(audioIndex);
    }
    PlayAudio();
}

// change Back Audio
function BackAudio() {  
    if (audioIndex > 0) {
        audioIndex -= 1;
    }
    if (randomButtonNumber % 2 == 0) {
        randomReseultValue = (Math.floor(Math.random() * 100 % 5));
        console.log(randomReseultValue)
        loadAudio(randomReseultValue);

    } else {
        loadAudio(audioIndex);
    }
    PlayAudio();
}

// show audio length
function SeeklengthAudio(){
   let seeklengthAudio = currentAudio.duration * (showSeekLength.value / 100);
   currentAudio.currentTime = seeklengthAudio;   
}

// update audio time
function seekUpdate(){
    let seekposition=0;

    setInterval(function(){
        if(!isNaN(currentAudio.duration)){
            seekposition= currentAudio.currentTime * (100/currentAudio.duration);
            showSeekLength.value=seekposition;
    
            let currentMinutes = Math.floor(currentAudio.currentTime / 60); 
            let currentSeconds = Math.floor(currentAudio.currentTime - currentMinutes * 60); 
            let durationMinutes = Math.floor(currentAudio.duration / 60); 
            let durationSeconds = Math.floor(currentAudio.duration - durationMinutes * 60); 
          
            console.log(currentMinutes)
            if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; } 
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; } 
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; } 
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; } 
    
            currentTime.textContent = currentMinutes + ":" + currentSeconds; 
            totalDuration.textContent = durationMinutes + ":" + durationSeconds;
        }
    },1000) 
}
seekUpdate();

// change audio valume
function ChangevolumeVoice() {
    currentAudio.volume = volumeVoice.value / 100;
  }



    