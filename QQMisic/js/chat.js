
	$(function(){
		
		$("#submit").click(function(){
			
			var input = $("#input").val() 
			
			//创建元素
			var sub_div = $("<div id='button_discuss_main'><div id='button_discuss_main_title'><div id='content_top' class='flex-row-nowarp align-col-center align-row-center'><div id='content_top_img1_1'></div><div id='content_top_branch1'><div id='content_top_branch2'>只对你有感觉</div><div id='content_top_text1'>今天05:07</div></div><div id='content_button_img_comment2'></div></div></div><div id='button_discuss_main_middle' class='overflow'>"+input+"</div></div>");
			
			/*sub_div.addClass("me")*/
			
			//将此元素  追加到父节点
			$("#result").append( sub_div )
			
			
			$("#input").attr("value","");
		})
		
	})
	
