const throttle = require(`lodash.throttle`);
import Player from "@vimeo/player";

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);

const startPlay = parseFloat(localStorage.getItem(`videoplayer-current-time`)) || 0;

iframePlayer.setCurrentTime(startPlay);

function secondsPlay(data) {
    localStorage.setItem(`videoplayer-current-time`, data.seconds);
    console.log(`Time update: ` + localStorage.getItem(`videoplayer-current-time`));
}
iframePlayer.on(`timeupdate`, throttle(secondsPlay, 1000));

