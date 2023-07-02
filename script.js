const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

// get each indivdual image as well
// reach them as img[1], img[2]
// inside of the images container each image
const img = document.querySelectorAll('#imgs img')

// console.log(img) //nodelist of 4 images but index is at 0

let idx = 0

let interval = setInterval(run, 2000)//2 seconds

function run() {
    idx++
    changeImage()
}

function changeImage() {
    // check if we are at the beginning or at the end
    // idx starts at 0 so -1
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }
    // take the image container to style it and transform
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    // when clicked reset interval
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})