/* ******************************
 * 
 * StyleSwitcher Script
 * 
 * Author: Pixel Industry
 * 
 ******************************* */

jQuery(document).ready(function($){
    var relativeDir = 'css/';
    
    /* ***************************************
     * Reading Cookies for stored values
     *******************************************/
     
    (function(){
        if(readCookie("ssElvyreStyleSwitcher") != "0"){
            var status = readCookie("ssElvyreStyleSwitcher");
			//$('#style-switcher').removeClass('opened');
            pi_switcher_slide(0);
        }
    })();
        
    
    
    /* ***************************************
     * SlideIn and SlideOut animation on click
     *******************************************/
	 
   $('#styles-button').on('click', function(e){
		e.preventDefault();
		
		if($('#style-switcher').hasClass('opened')){
			pi_switcher_slide("1");
		}else{
			pi_switcher_slide("0");
		}
			
	});
	
	function pi_switcher_slide(status){
		var switcherWidth = $('#style-switcher').width();
	
		if(status == "1"){
			$('#style-switcher').animate({
					left: -switcherWidth
				}, 700, function(){
					$(this).removeClass('opened');
				});
			createCookie("ssElvyreStyleSwitcher", '0', 7);
		}else{
			$('#style-switcher').animate({
					left: 0
				}, 700, function(){
					$(this).addClass('opened');
				});
			createCookie("ssElvyreStyleSwitcher", '1', 7);
		}
	}
	
    
    
    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name,"",-1);
    }
});