	$("#musi_play").click(function() {
		var music = document.getElementById("music");
		if(music.paused) {
			music.play();
			$('#musi_play').css('background-image','url(../img/music_stop.svg)');
		} else {
			music.pause();
			$('#musi_play').css('background-image','url(../img/music_play.svg)');
		}
	});
	
