function movie(){
    window.location.href= "https://www.youtube.com/watch?v=VKyz5SVH1Ug"
}

function info(){
    window.location.href = "https://www.themoviedb.org/movie/413594-sword-art-online-the-movie-ordinal-scale?language=pt-BR"
}

var btn = document.getElementById('btn-div');
var container = document.querySelector('.account-box');

btn.addEventListener('click', function(){
    if (container.style.display === 'flex'){
        container.style.display = 'none';
    }else{
        container.style.display = 'flex';
    }
});