$(function() {

	$("#title_submenu").hide();

	$("#add").click(function() {
		$("#title_submenu").toggle(400)
	})

})
$(function() {

	$("#music_submenu").hide();

	$("#musi_menu").click(function() {
		$("#music_submenu").toggle(400)
	})

})

$(function() {
	$('#music_submenu_bottom_1').click(function() {
		$('#music_submenu').hide()
	})
})

/*<--收藏-->*/
$(function() {
	$('.music_submenu_center_2').click(function() {
		var a = $(this).css("background-image");
		if($(this).is('.liking')) {
			$(this).css('background-image', 'url(../img/xin.svg)')
			$(this).removeClass('liking');
		} else {
			$(this).css('background-image', 'url(../img/xin_1.svg)')
			$(this).addClass('liking')
		}

	})
})

/*<--点击播放-->*/

$(function() {
	$('.music_submenu_center_1').click(function() {
		
		if(!$(this).is('.playing')) {
			$('#music').attr('src', $(this).data('source'))
			$('#music')[0].play();
			$('#musi_name').html($(this).html())
			$(this).addClass('playing')
			$(this).prevUntil().removeClass('playing')
			$(this).nextUntil().removeClass('playing')
		} else {
			document.getElementById('music').pause();
			$(this).removeClass('playing');
		}

	})

})




