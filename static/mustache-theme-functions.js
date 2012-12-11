(function($) {

  $(document).ready(function() {
	  $(".date").each(function() {
    	var dateTime = $(this).text();
		  alert(dateTime);
      //$("time", this).html(getBinaryTime(postDate));
    });
  });

})(jQuery);
