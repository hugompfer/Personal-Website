document.getElementById("right").childNodes.forEach(function (item) {
    item.onclick = function () {
        if ($(window).width() > 768) {
            clearUnderline(true);
            item.childNodes[1].className = "underline";
        }
    }
});

document.getElementById("options").childNodes.forEach(function (item) {
        item.onclick = function () {
        clearUnderline(false);
        item.childNodes[1].className = "underline";
    }
});

function clearUnderline(menu) {
    var underlines;
    if(menu){
        underlines = document.querySelectorAll("#right li a");
    }else{
        underlines = document.querySelectorAll("#options li a");
    }
    
    for (var i = 0; i < underlines.length; i++) {
        underlines.item(i).className = "";
    }
}


var points = {"prof":"Profile","edu":"Education","exp":"Experience",
            "abi":"Abilities","my-projects":"Projects","con":"Contact"};
$(document).ready(function(){
    $("section").mouseenter(function(){
        if ($(window).width() > 768) {
            var id = $(this).attr('id');
            clearUnderline(true);
            var items = $('a[href="#'+points[id]+'"]');
            if(items.length === 0){
                items.addClass('underline');
            }else{
                items[0].className='underline';
            }
        }
    });

    $("header").mouseenter(function(){
        clearUnderline(true);
   });
 });

 $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });