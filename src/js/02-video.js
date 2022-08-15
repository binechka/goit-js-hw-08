import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

player.on('timeupdate', throttle(data => {
localStorage.setItem("videoplayer-current-time",data.seconds);   
}, 1000));
const getItem = localStorage.getItem("videoplayer-current-time")
getItem && player.setCurrentTime(getItem).then(function(seconds) {
}).catch(function() {})
