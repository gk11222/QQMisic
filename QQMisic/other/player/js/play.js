$('.play').click(function(){
		var music = document.getElementById("music");
		if(music.paused) {
			music.play();
			$('.play').css('background-image','url(img/play_rdi_btn_pause.png)');
		} else {
			music.pause();
			$('.play').css('background-image','url(img/play_rdi_btn_play.png)');
		}
	})

$(function() {
		$(".item").click(function() {
			$("#player").attr('src', $(this).data("source"));
			$("#player")[0].play();
			$("#curr").html($(this).data("source"))
			$(this).addClass("playing")
			$(this).prevUntil().removeClass("playing");
			$(this).nextUntil().removeClass("playing");
		})

$(".next").click(function() {
			var target = $(".playing");
			
			if( target.data("source") == $(".item:last-child").data("source") ) {   
				
				$("#player").attr('src', $(".item:first-child").data("source"));
				
				$(".item:first-child").addClass("playing");
				target.removeClass("playing")
			} else {
				$("#player").attr('src', target.next().data("source"));
				target.next().addClass("playing");
				target.removeClass("playing")
			}
			 //开始播放
			$("#player")[0].play();
	})
})
