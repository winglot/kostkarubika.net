// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-3975745-1', 'kostkarubika.net');
ga('send', 'pageview');

$(function() {
    // Init Material Design
    $.material.init();

    // Style tables
    $("article table").addClass("table").addClass("table-responsive").addClass("table-striped");
    $("article table th:first-child").addClass("col-sm-3");
});