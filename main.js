const videoFileInput = document.getElementById('videoFileInput');
const videoPlayer = document.getElementById('videoPlayer');
const playBackRate = document.querySelector(".playbackrate")

videoFileInput.addEventListener('change', function() {
    const file = this.files[0];
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
});

playBackRate.addEventListener('change', function() {
   videoPlayer.playbackRate = +this.value
});
