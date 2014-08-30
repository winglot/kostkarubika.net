$(function() {
    $(".cube-wall").each(function() {
        var wall = new freewall(this);
        wall.reset({
            selector: '.brick',
            animate: true,
            cellW: 175,
            cellH: 175,
            onResize: function() {
                wall.fitWidth();
            }
        });
        
        wall.fitWidth();
    });

    // handle the mouseenter functionality
    $(".brick").mouseenter(function(){
        $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function(){
        $(this).removeClass("hover");
    });
});