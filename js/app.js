let arrImg = ['slide1.jpg', 'slide2.jpg', 'slide3.jpeg', 'slide4.jpg', 'slide5.jpg'];
let indexImg = 0;
function slideShow() {
    let htmlSlideShow = '';
    htmlSlideShow = `
    <div class="mySlides show">
        <div class="slide_show">
            <div class="numbertext">${indexImg + 1}/${arrImg.length}</div>
            <img id="image" src="images/${arrImg[indexImg]}" style="width:100%; height: 380px;">
        </div>
    </div>
    <div style="text-align:center">
        <button class="btn-custom btn-outline-primary" onclick="previous()">Previous</button> 
        <button class="btn-custom btn-outline-success" onclick="play()">Play</button> 
        <button class="btn-custom btn-outline-danger" onclick="stop()">Stop</button> 
        <button class="btn-custom btn-outline-primary" onclick="next()">Next</button> 
    </div>`
    document.getElementById('slide-show').innerHTML = htmlSlideShow;
}
slideShow();

function next() {
    indexImg++;
    if(indexImg >= arrImg.length) {
        indexImg = 0;
    }
    slideShow();
}

function previous() {
    indexImg--;
    if(indexImg < 0) {
        indexImg = arrImg.length - 1;
    }
    slideShow();
}

var play;
function play() {
    play = setInterval(next, 1000);
}
function stop() {
    clearInterval(play)
}