'use strict';
$(document).ready(function(){
	$('.boxtest').click(function(){
		var boxcolor = $(this).attr('name');
		var box_top_img_src = boxcolor + '_top.png';
		var box_bottom_img_src = boxcolor + '_bottom.png';
		var box_top_class = boxcolor + 'boxtop';
		var box_bottom_class = boxcolor + 'boxbottom';
		var box_class = boxcolor + 'box';
		var contentbox_id  = '#'+$(this).attr('content');
		var box_content = $(contentbox_id).html();
		
		var box_html = '<div class="content_section">';
			box_html += '<div class="roundedBox">';
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
		    box_html += '</div>';
		    
		 $(this).html(box_html);
	});
});