import Vimeo from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
    player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));
function saveCurrentTime (event) {
    localStorage.setItem(STORAGE_KEY, event.seconds);
}
