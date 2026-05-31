const refs = {
    videoFileInput: searchElement('#videoFileInput'),
    videoPlayer: searchElement('#videoPlayer'),
    playBackRate: searchElement('.playbackrate'),
};

document.addEventListener('DOMContentLoaded', init);

function init() {
    setInputValue(refs.videoFileInput, '');

    refs.videoFileInput.addEventListener('change', handlerChangeVideo);
    refs.playBackRate.addEventListener('change', handlerChangePlayBackRate);
}

function handlerChangeVideo() {
    const file = this.files?.[0];

    if (!file) return;

    refs.videoPlayer.src = URL.createObjectURL(file);
}

function handlerChangePlayBackRate() {
    const rate = convertToNumber(getInputValue(this));

    if (!checkIsNaN(rate)) {
        refs.videoPlayer.playbackRate = rate;
    }
}

function searchElement(selector) {
    return document.querySelector(selector);
}

function getInputValue(input) {
    return input?.value;
}

function setInputValue(input, value) {
    if (input) {
        input.value = value;
    }
}

function checkIsNaN(value) {
    return Number.isNaN(value);
}

function convertToNumber(value) {
    return Number(value);
}

//----------

// const videoFileInput = document.getElementById('videoFileInput');
// const videoPlayer = document.getElementById('videoPlayer');
// const playBackRate = document.querySelector(".playbackrate")

// videoFileInput.addEventListener('change', function() {
//     const file = this.files[0];
//     const url = URL.createObjectURL(file);
//     videoPlayer.src = url;
// });

// playBackRate.addEventListener('change', function() {
//    videoPlayer.playbackRate = +this.value
// });
