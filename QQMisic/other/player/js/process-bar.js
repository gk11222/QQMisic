$(function() {
	 //每1秒 执行的函数  // 定时任务
	var task = setInterval("updateQuantity()",521)
	
})

function updateQuantity() {

	if($(".cur").width() + 1 > $(".rdy").width()) {
		$(".cur").width(1);
	} else {
		$(".cur").width( $(".cur").width() + 1 )
	}
}
