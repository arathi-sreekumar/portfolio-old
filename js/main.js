
var sub_section_index = 0;
$(document).ready(function(){

	var isLightBoxOpen  = false;
	var content_index = 0;
	var section_name = "profile";
	var template_color = getUrlParam('color');
	if (template_color == "red"){
		$(document.body).removeClass('blue');
		$(document.body).addClass('red');
	} else {
		$(document.body).removeClass('red');
		$(document.body).addClass('blue');
	}

	showNav(section_name);
	selectLeftMenu(section_name);
	changeBoxContent(content_index,section_name);	

	$(".menu_option").click(function(){
		content_index = 0;
		var menuId  = $(this).attr('id');
		section_name = menuId.split("_")[0];
		selectLeftMenu(section_name);
		showNav(section_name);
		changeBoxContent(content_index,section_name);
	});

	/* light box display function  */
	$('.lightboxlink').click(function(){
		var contentbox_id  = "#"+$(this).attr('id')+"_text";
		var current_id = "#" + $(this).attr('id');
		var nav_class = "." + section_name + "_nav";
		var colour = $(this).attr('colour_code');
		isLightBoxOpen = true;
		if($('body').attr('name') == 'html5') {
			set_rounded_content_html5(contentbox_id,colour);
		}
		else {
			set_rounded_content(contentbox_id,colour,section_name);
		}
		$('.current_nav').removeClass('current_nav')
		$(this).parent().addClass('current_nav');
		content_index = getIndex(nav_class,current_id);
	});
	/* Function to close light box on pressing esc key   */
	$(document).keyup(function(e) {
	  if (e.keyCode == 27 && isLightBoxOpen == true) { }   // esc
	});

	$(document).on('mouseover','.back',function(){
		if(content_index!=0){
			$('.back').children().css('visibility','visible');
		}
	});
	$(document).on('mouseout','.back',function(){
		$('.back').children().css('visibility','hidden');
	});
	$(document).on('click','.back',function(){
		var nav_type = section_name;
		if(content_index > 0)
		{
			content_index--;
			changeBoxContent(content_index,nav_type);
		}
	});
	$(document).on('mouseover','.forward',function(){
		var nav_type = section_name;
		var nav_class = "." + nav_type + "_nav";
		var nav_length = $(nav_class).length;
		if(content_index < $(nav_class).length-1)
		{
			$('.forward').children().css('visibility','visible');
		}
	});
	$(document).on('mouseout','.forward',function(){
		$('.forward').children().css('visibility','hidden');
	});
	$(document).on('click','.forward',function(){
		var nav_type = section_name;
		var nav_class = "." + nav_type + "_nav";
		var nav_length = $(nav_class).length;
		if(content_index < $(nav_class).length-1)
		{
			content_index++;
			changeBoxContent(content_index,nav_type);
		}
	});

	
	/* funtion to navigate contents within light box  */
	$(document).on('click','.next',function(){
		if(sub_section_index < ($(".exp_sub_section").length-1)) {
			$(".exp_sub_section").eq(sub_section_index).css('display','none');
			sub_section_index++;
			$(".exp_sub_section").eq(sub_section_index).css('display','block');
		}
	});
	/*function to navigate using the arrow keys */
	$(document).keyup(function(e) {
  		if(e.keyCode == 37){  //left arrow key
  			var nav_type = section_name;
			if(content_index > 0)
			{
				content_index--;
				changeBoxContent(content_index,nav_type);
			}
  		}
  		if(e.keyCode == 38){ //up arrow key
  		}
  		if(e.keyCode == 39){ //right arrow key
  			var nav_type = section_name;
			var nav_class = "." + nav_type + "_nav";
			var nav_length = $(nav_class).length;
			if(content_index < $(nav_class).length-1)
			{
				content_index++;
				changeBoxContent(content_index,nav_type);
			}
  		}  
  		if(e.keyCode == 40){  //down arrow key
  		}
	});

});

/* funtion to navigate contents within light box  */
function previousSubContent(){
	if(sub_section_index > 0) {
		$(".exp_sub_section").eq(sub_section_index).css('display','none');
		sub_section_index--;
		$(".exp_sub_section").eq(sub_section_index).css('display','block');
	}
}

/* funtion to create a rounded light box with contents  */
function set_rounded_content(contentid, colour, section_name){
	var boxcolor=colour;
	var box_top_img_src = boxcolor + "_top.png";
	var box_bottom_img_src = boxcolor + "_bottom.png";
	var box_top_class = "box_top " + boxcolor + "boxtop";
	var box_bottom_class = "box_bottom " + boxcolor + "boxbottom";
	var box_class = "box_body " + boxcolor + "box";
	var box_top_html = "<img src=\"../img/roundedcorners/"+box_top_img_src+"\" alt=\"\" height=\"20\" class=\"placeborder\"/>";
	var box_bottom_html =  "<img src=\"../img/roundedcorners/"+box_bottom_img_src+"\" alt=\"\" height=\"20\" class=\"placeborder\"/>";
	var contentbox_id  = contentid;
	var articleClass = "." + section_name + "_article";
	$(articleClass).css('display','none');
	$(contentbox_id).css('display','block');
	/*$('.top_img_holder').html(box_top_html);
	$('.bottom_img_holder').html(box_bottom_html);
	$('.box_top').attr('class',box_top_class);
	$('.box_bottom').attr('class',box_bottom_class);*/
	$('.box_body').attr('class',box_class);
	$(".exp_sub_section").eq(sub_section_index).css('display','block');
	setArrowPositions();
}
/* funtion to create a rounded light box with contents in HTML5 */
function set_rounded_content_html5(contentid, colour, section_name){
	var box_class = "rounded_box " + colour + "_rounded_box";
	var contentbox_id  = contentid;
	var articleClass = "." + section_name + "_article";

	$('.rounded_box').attr('class',box_class);
	$(articleClass).css('display','none');
	$(contentbox_id).css('display','block');
	$(".exp_sub_section").eq(sub_section_index).css('display','block');
	setArrowPositions();
}

/* function to display box content on clicking prev/next arrow  */
function changeBoxContent(index,section_name){
	var box_section_class = "." + section_name + "_article";
	var current_id = $(box_section_class).eq(index).attr("id");
	var contentbox_id = "#" + current_id;
	var splitId = contentbox_id.split("_");
	var nav_id = splitId[0];

	$(box_section_class).css('display','none');
	$(contentbox_id).css('display','block');
	$('.current_nav').removeClass('current_nav')
	$(nav_id).parent().addClass('current_nav');
	$(".exp_sub_section").eq(sub_section_index).css('display','block');
	setArrowPositions();
}

function setArrowPositions() {
	var box_left = $('.rounded_box').offset().left;
	var box_top = $('.rounded_box').offset().top;
	var box_height = $('.rounded_box').height();
	var box_width = $('.rounded_box').width();
	var box_right = box_left + box_width;
	var box_bottom = box_top + box_height;
	$(".back, .forward").css("display","block");
	var arrow_width = $('.back').width();
	var arrow_height = $('.back').height();
	//alert("left : " + box_left + " -- top :" + box_top + " -- ht " + box_height + "-- arrow ht :"+ arrow_height);
	var arrow_top = (box_height/2) - (arrow_height/2);
	$(".back").css('left', 3);
	$(".back").css('top', arrow_top);
	$(".forward").css('left', box_width - 55);
	$(".forward").css('top',arrow_top);
}

//function to get the index of the parent containing a particular child
function getIndex(parentClass, childId){
	var i,index = 0;
	for(i=0;i<$(parentClass).length;i++){
		if($(parentClass).eq(i).has(childId).length){
			index = i;
			return(index);
		}
	}
	return(index);
}

//function show the chosen progress bar
function showNav(section_name){
	$(".nav_bar").css('display','none');
	var navBarClass = "." + section_name + "_nav_bar";
	$(navBarClass).css("display","block");
}

//select Page section option
function selectLeftMenu(section_name){
	var menu_section = "#" + section_name + "_section_option";
	if($(".left_menu").has(".selectOption").length){
		$(".selectOption").removeClass("selectOption");
	}
	$(menu_section).addClass("selectOption");
	selectMainSection(section_name);
}

//function to select main content exp_sub_section
function selectMainSection(section_name){
	var sectionClass = "." + section_name + "_section";
	$(".main_section").css('display','none');
	$(sectionClass).css('display','block');
}

function getUrlParam( name ){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
		var regexS = "[\\?&]"+name+"=([^&#]*)";  
		var regex = new RegExp( regexS );  
		var results = regex.exec( window.location.href ); 
		if( results == null )    return "";  
		else    return results[1];
	}