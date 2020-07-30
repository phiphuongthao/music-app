const background = document.getElementById('background')
const thumbnail = document.getElementById('thumbnail')
const song = document.getElementById('song')

const songArtist = document.getElementsByClassName('song-artist')[0]
const songTitle = document.getElementsByClassName('song-title')[0]
const progressBar = document.getElementById('progress-bar')
const pPause = document.getElementById('play-pause')

let songs = ['./assets/music/Mot Cu Lua - Bich Phuong.mp3', './assets/music/Yeu Thi Yeu Khong Yeu Thi Yeu - AMEE.mp3', './assets/music/Exs Hate Me - B Ray, Masew, AMee.mp3 ']
let artists = ['Bích Phương', 'AMEE', 'B-ray, AMEE, Masew']
let thumbnails = ['./assets/cover/121626.jpg', './assets/cover/122486.jpg', './assets/cover/Exhateme.jpg']
let songtitles = ["Một Cú Lừa", "Yêu Thì Yêu Không Yêu Thì Yêu", "Ex's Hate me"]

let playing = true
let songindex = 0

function playPause() {
    if (playing) {
        pPause.src = './assets/icon/icons8-pause-64.png'

        song.play()
        playing = false
    } else {
        pPause.src = './assets/icon/icons8-play-64.png'

        song.pause()
        playing = true
    }
}

function nextsong() {
    songindex++
    if (songindex >= songs.length)
        songindex = 0
    songArtist.innerHTML = artists[songindex]
    songTitle.innerHTML = songtitles[songindex]
    thumbnail.src = thumbnails[songindex]
    song.src = songs[songindex]
    background.src = thumbnails[songindex]

    playing = true
    playPause()
}

function previoussong() {
    songindex = songindex - 1
    if (sonindex < 0)
        songindex = songs.length
    songArtist.innerHTML = artists[songindex]
    songTitle.innerHTML = songtitles[songindex]
    thumbnail.src = thumbnails[songindex]
    song.src = songs[songindex]
    background.src = thumbnails[songindex]

    playing = true
    playPause()

}

function formatTime(section) {
    let min = Math.floor(section / 60)
    let sec = Math.floor(section - min * 60)
    if (sec < 10) {
        sec = `0${ sec }`
    }
    return `${min}:${sec}`
}

function updateProgressValue() {
    progressBar.max = song.duration
    progressBar.value = song.currentTime
    document.querySelector('.currentTime').innerHTML = formatTime(Math.floor(song.currentTime));
    if (document.querySelector('.durationTime').innerHTML === 'NaN:NaN') {
        document.querySelector('.durationTime').innerHTML = '0:00';
    } else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(song.duration));
    }
}

setInterval(updateProgressValue, 200)

function changeProgressbar() {
    song.currentTime = progressBar.value
}