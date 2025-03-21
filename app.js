
const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = [
    'mission accomplished • connor RK800 (online-video-cutter.com).mp4',
    'just a machine_ [Detroit_ Become Human] _HBD Pteryx_.mp4',
    'They Have Something I Could Never Have (online-video-cutter.com).mp4',
];

let index = 0;
nextButton.addEventListener('click', function () {
    index += 1;
    video.src = movieList[index];

    if (index === 3) {
        index = -1;
    }
});

