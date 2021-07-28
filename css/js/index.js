var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
$(document).ready(function(){
    $("img").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/sangeeta.jpeg");
    });    
});