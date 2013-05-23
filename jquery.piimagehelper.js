/*
 * Pi Image Helper - jQuery plugin for adjusting image width and height based with aspect ratio
 *
 * This plugin accept width & height of the image to be changed. Then will loop through all images and adjust
 * width & height of images based on passed parameter. So images will have same width and height regardless of their actual sizes.
 *
 * Copyright (c) 2013 Paing Pyi Ko
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   
 * Version:  0.5
 *
 */
(function($) {
  $.fn.piImageHelper = function(options) {
	  
	var settings = $.extend({}, {debug: false, width:130, height:100, center: true }, options);
	
    return this.each(function() {
      if(settings.debug) myLog("cool");
	  
		$(this).load(function() {  
			var img = {};
			img.image = $(this);
			img.w = img.image.width();
			img.h = img.image.height();
			img = changeImagePropotion(img);
			img.image.width(img.w); img.image.height(img.h);
			
			if(settings.center){
				var loc;
				
				if(img.w != "auto"){
					loc = (settings.height/2 - img.image.height()/2);
					$(img.image).css('margin-top', loc );					
				}else{
					loc = (settings.width/2 - img.image.width()/2);
					$(img.image).css('margin-left', loc );					
				}				
			}
			
		});	
    });
			 
	function changeImagePropotion(obj)
	{
		var w = settings.width; h = settings.height;
					
	    var $img = obj.image,
	        imgWidth = obj.w,
	        imgHeight = obj.h;
						
	    if(imgWidth >= imgHeight && imgHeight <= h){
			obj.h = h;
			obj.w = "auto";
			myLog("one");
	    }else if(imgWidth >= imgHeight && imgHeight >= h){
			obj.h = h;
			obj.w = "auto";
			myLog("two");					
	    }else if(imgWidth <= imgHeight && imgHeight <= h)
		{
			obj.h = h;
			obj.w = "auto";	
			myLog("three");						
		}else if(imgWidth <= imgHeight && imgHeight >= h)
		{
			obj.w = w;
			obj.h = "auto";						
			myLog("four");						
		}else{
			obj.w = w;
			obj.h = "auto";						
			myLog("five");						
		}						
		return obj;
	}			
		
	function myLog(msg)
	{
		if(settings.debug){
			console.log(msg);	
		}
	}
	
  };
})(jQuery);