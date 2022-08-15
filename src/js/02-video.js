import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

player.on('timeupdate', throttle(data => {
localStorage.setItem("videoplayer-current-time",data.seconds);   
}, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function() {})
