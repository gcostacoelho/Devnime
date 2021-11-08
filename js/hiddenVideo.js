var min = document.getElementById('min')
var video = document.querySelector('#video')
var btn = document.getElementById('close')

function eventClose(){
    if (video.style.display === 'flex') video.style.display = 'none';
    else video.style.display = 'flex'
}

min.addEventListener('click', function(){
    eventClose()
});

btn.addEventListener('click', function(){
    eventClose()
})