const {infos} = require('../json/data.json');
//var link = infos.carrosel[0].link

var divTrailer = document.getElementById('trailer')

var tag = '<iframe name="min1" src="'+ infos.carrosel[0].link + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

divTrailer.innerHTML = tag

