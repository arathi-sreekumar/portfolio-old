'use strict';
var sub_section_index = 0;
$(document).ready(function(){

	var isLightBoxOpen  = false;	
	/* light box display function  */
	$('.lightbox').click(function(){
		var ScreenHeight = $(document).height();  
		var ScreenkWidth = $(window).width();	
		var contentbox_id  = '#'+$(this).attr('id')+'_text';
		var colour = $(this).attr('colour_code');
		isLightBoxOpen = true;
		set_rounded_content(contentbox_id,colour,'#lightbox_content');
		$('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
		$('.box').animate({'opacity':'1.00'}, 300, 'linear');
		$('.backdrop, .box').css('display', 'block');
		$('.backdrop').css('width', ScreenkWidth);
		$('.backdrop').css('height', ScreenHeight);		
	});
	/* light box display function  */
	$('.lightboxlink').click(function(){
		var ScreenHeight = $(document).height();  
		var ScreenkWidth = $(window).width();	
		var contentbox_id  = '#'+$(this).attr('id')+'_text';
		var colour = $(this).attr('colour_code');
		isLightBoxOpen = true;
		if($('body').attr('name') === 'html5') {
			set_rounded_content_html5(contentbox_id,colour,'#lightbox_content');
		}
		else {
			set_rounded_content(contentbox_id,colour,'#lightbox_content');
		}
		$('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
		$('.box').animate({'opacity':'1.00'}, 300, 'linear');
		$('.backdrop').css('width', ScreenkWidth);
		$('.backdrop').css('height', $(document).height());
		$('.backdrop, .box').css('display', 'block');
	});
	/* Function to close light box on pressing esc key   */
	$(document).keyup(function(e) {
	  if (e.keyCode === 27 && isLightBoxOpen === true) { close_box();}   // esc
	});

	/* funtion to close light box  on clicking the close link*/
	$('.close').click(function(){
		close_box();
	});
	/* funtion to close light box  on clicking outside the lightbox */
	$('.backdrop').click(function(){
		close_box();
	});
	/* funtion to navigate contents within light box  */
	$(document).on('click','.prev',function(){
		if(sub_section_index > 0) {
			$('.box_sub_section').eq(sub_section_index).css('display','none');
			sub_section_index--;
			$('.box_sub_section').eq(sub_section_index).css('display','block');
		}
		return false;
	});
	/* funtion to navigate contents within light box  */
	$(document).on('click','.next',function(){
		if(sub_section_index < ($('.box_sub_section').length-1)) {
			$('.box_sub_section').eq(sub_section_index).css('display','none');
			sub_section_index++;
			$('.box_sub_section').eq(sub_section_index).css('display','block');
		}
	});

	/* funtion to close light box  */
	function close_box()
	{
		isLightBoxOpen = false;
		$('.box_sub_section').eq(sub_section_index).css('display','none');
		sub_section_index = 0;
		$('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
			$('.backdrop, .box').css('display', 'none');
		});
	}
	/* funtion to create a rounded light box with contents  */
	function set_rounded_content(contentid, colour, lightboxid){
			var boxcolor = colour;
			var box_top_img_src = boxcolor + '_top.png';
			var box_bottom_img_src = boxcolor + '_bottom.png';
			var box_top_class = boxcolor + 'boxtop';
			var box_bottom_class = boxcolor + 'boxbottom';
			var box_class = boxcolor + 'box';
			var contentbox_id  = contentid;
			var box_content = $(contentbox_id).html();
			
			var box_html = '<div class="roundedBox">';
				  box_html += '<div class="box_top '+box_top_class+'">';
				    box_html += '<div class="no_overflow">';
					box_html += '<img src="../images/roundedcorners/'+box_top_img_src+'" alt=" " height="40" class="placeborder"/>';
				    box_html += '</div>';
				  box_html += '</div>';
				  box_html += '<div class="box_body '+box_class+'">';
					box_html += box_content;
				  box_html += '</div>';
				  box_html += '<div class="box_bottom '+box_bottom_class+'">';
				    box_html += '<div class="no_overflow">';
					box_html += '<img src="../images/roundedcorners/'+box_bottom_img_src+'" alt=" " height="40" class="placeborder"/>';
				    box_html += '</div>';
				  box_html += '</div>';
			    box_html += '</div>';
			    
			 $(lightboxid).html(box_html);
			 $(lightboxid).find('.exp_sub_section').addClass('box_sub_section');
			 $(lightboxid).find('.box_sub_section').removeClass('exp_sub_section');
			 $('.box_sub_section').eq(sub_section_index).css('display','block');
	}
	/* funtion to create a rounded light box with contents in HTML5 */
	function set_rounded_content_html5(contentid, colour, lightboxid){
		var box_class = colour + '_rounded_box';
		var contentbox_id  = contentid;
		var box_content=$(contentbox_id).html();
		var box_html = '<div class="rounded_box '+box_class+'">';
				box_html += box_content;
		    box_html += '</div>';
		$(lightboxid).html(box_html);
		$(lightboxid).find('.exp_sub_section').addClass('box_sub_section');
		$(lightboxid).find('.box_sub_section').removeClass('exp_sub_section');
		$('.box_sub_section').eq(sub_section_index).css('display','block');
	}

});
