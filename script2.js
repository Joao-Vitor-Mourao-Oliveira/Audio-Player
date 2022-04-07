const musicContainer = document.querySelector('.music-container-into');
const playButton = document.querySelector('#play');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const cover = document.querySelector('#cover');
const title = document.querySelector('#title');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const songList = document.getElementById('lista');

// Nome das Musicas 
const songs = ['1-09. Beneath the Mask -instrumental version-', '01. Unshaken','05. Cleric Beast', '1-13 Iwatodai Dorm', '06. Promise (Reprise)', '68 - Gerudo Valley', '16-one-winged-angel']

// Acompanhe as musicas 
let songIndex = 2

//
loadSong(songs[songIndex]);

//
function loadSong(song){
    title.textContent = song;
    audio.src = `assets/musicas/${song}.mp3`;
    cover.src = `assets/imagens/${song}.jpg`;
}
function playSong(){
    musicContainer.classList.add('play')
    audio.play()
}
function pauseSong(){
    musicContainer.classList.remove('play')
    audio.pause()
}
function prevSong(){
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    playSong()
}
function nextSong(){
    songIndex++
    if(songIndex > songs.length - 1){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}
// função basica para esconder um conteúdo no navbar //
function hide(){
    let x = songList
    if(x.style.display === "none"){
        x.style.display = "block"
    }
    else{x.style.display = 'none'}
}

// events

playButton.addEventListener('click', () => {
   const isPlaying = musicContainer.classList.contains('play');
   if(isPlaying){
       pauseSong()
   }
   else {
       playSong()
   }
}) 
prevButton.addEventListener('click', prevSong)
nextButton.addEventListener('click', nextSong)