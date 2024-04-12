const videoFileInput = document.getElementById('videoFileInput');
const videoPlayer = document.getElementById('videoPlayer');

videoFileInput.addEventListener('change', function() {
    const file = this.files[0];
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
});
