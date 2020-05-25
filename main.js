let oF = anime({
    targets: '.img-circle',
    opacity: [0, 0],
    autoplay: false
});

let offText = anime({
    targets: ['.img-line', 'p'],
    opacity: [0.5, 0],
    duration: 2000,
    loop: 1,
    autoplay: false
});

let oN = anime({
    targets: '.img-circle',
    opacity: [0, 0.3],
    duration: 5000,
    autoplay: false
});

hoverOn = document.querySelector('.hover-on')
hoverOff = document.querySelector('.hover-off')

hoverOn.addEventListener('mouseover', oN.play)
hoverOff.addEventListener('mouseover', oF.play)
hoverOn.addEventListener('mouseover', offText.play)
// hoverOff.addEventListener('mouseover', function () { oF.play })

// hoverOn.onmouseover = oN.play
// hoverOn.onmouseout = oF.play
