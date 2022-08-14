import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', function (data) {
     data = {
 duration: 61.857,
    percent: 0.049,
    seconds: 3.034
     }
console.log(data);
localStorage.setItem("videoplayer-current-time",data.seconds);
data.seconds = iframe.currentTime
     // data is an object containing properties specific to that event
});

// let localStorage=localStorage.setItem("videoplayer-current-time", data.duration);
// console.log(localStorage);