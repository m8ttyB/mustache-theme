(function($) {

  $(document).ready(function() {
	  $(".date").each(function() {
    	var dateTime = $(this).text();
      $(this).attr("title", "Posted on: " + dateTime);
		  dateTime = new Date(dateTime);		
      $(this).html(getBinaryTime(dateTime));
    });
  });

function getBinaryTime(date) {
   //define the byte size to use
   var byteSize = 12;
   var bitArray = new Array();

   //Generate an array of possible values based on the byte size
   var index = 0;
   byteSize = byteSize - 1;
   for (var j = byteSize; j >= 0; j--) {
     bitArray[index] = Math.pow(2, j);
     index++;
   }

   //Get the current month (0 - 11)
   var month = date.getMonth() + 1;
   //Get the binary composition of the current hour as an array
   var monthBinary = getBinaryEquivalent(month, bitArray);
   var monthBinaryString = "";
   //Convert the binary composition to its correct binary display
   bitArray.forEach(function(bit) {
     if (monthBinary.indexOf(bit) > -1) {
       monthBinaryString += '<span class="on">1</span>';
     } else {
       monthBinaryString += '<span class="off">0</span>';
     }
   });

   //get the current day value (1 - 31)
   var day = date.getDate();
   //Get the binary composition of the current minute
   var dayBinary = getBinaryEquivalent(day, bitArray);
   var dayBinaryString = "";
   //Convert the binary composition to its correct binary display
   bitArray.forEach(function (bit) {
     if (dayBinary.indexOf(bit) > -1) {
       dayBinaryString += '<span class="on">1</span>';
     } else {
       dayBinaryString += '<span class="off">0</span>' ;
     }
   });
        
   //get the current year value
   var year = date.getFullYear();
   //Get the binary composition of the current minute
   var yearBinary = getBinaryEquivalent(year, bitArray);
   var yearBinaryString = "";
   //Convert the binary composition to its correct binary display
   bitArray.forEach(function (bit) {
     if (yearBinary.indexOf(bit) > -1) {
       yearBinaryString += '<span class="on">1</span>';
     } else {
       yearBinaryString += '<span class="off">0</span>';
     }
   });

   //Output the current binary time in hours and minutes
   //document.getElementById("binary_output").innerHTML = "Hour: " + hoursBinaryString + "<br /> Minutes: " + minutesBinaryString;
   
   return '<div class="month-binary">' + monthBinaryString + '</div><div class="day-binary">' + dayBinaryString + '</div><div class="year-binary">' + yearBinaryString + '</div>';
 } 
 
 function getBinaryEquivalent(baseTenNum, bitArray) {
   for (var i = 0; i < bitArray.length; i++) {
     if (baseTenNum >= bitArray[i]) {
       var binaryValues = new Array();
       binaryValues[0] = bitArray[i];
       return binaryValues.concat(getBinaryEquivalent(baseTenNum - bitArray[i], bitArray));
     }
   }
   //if we are passed zero, return zero
   return Array(0);
 }

})(jQuery);
