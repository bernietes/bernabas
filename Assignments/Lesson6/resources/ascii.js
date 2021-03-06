let text_area = document.getElementById('text_area');
let size = document.getElementById('size');
let animation = document.getElementById('animation');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let turbo = document.getElementById('speed');
let speed = 250;
let sequence = '';
let frame = 0;
let timeInterval;
stop.disabled = true;

// Text size change
size.onchange = function () {
    let font = size.value;
    text_area.style.fontSize = font+'pt';
}


//Animation Selector

animation.onchange = function () {
    let selected_animation = animation.value;
    sequence = ANIMATIONS[selected_animation].split('=====\n');
    if (start.disabled) {
        stopper();
        frame = 0;
    }

    text_area.value = sequence[frame];

}

// Start Functionality
start.onclick = startStarter;

function starter() {
    if (!sequence === '') {
        stop.disabled = false;
        start.disabled = true;
        text_area.value = '';
        frame++;
        if (frame > sequence.length - 1)
            frame = 0;

        text_area.value = sequence[frame];
    } else {
        stopper();
    }

}

function startStarter() {
    if (animation.value === 'custom')
        sequence = text_area.value.split('=====\n');

    timeInterval = setInterval(starter, speed);
}

//Stop functionality

stop.onclick = stopper;

function stopper() {
    stop.disabled = true;
    start.disabled = false;
    clearInterval(timeInterval);
}

// Speed Functionality
turbo.onchange = function () {
    if (turbo.checked)
        speed = 50;
    if (!turbo.checked)
        speed = 250;
    stopper();
    startStarter();
}
