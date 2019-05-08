$(document).ready(function() {
    $(".checklist-expanded").hide();

    $(".checklist-expanded a, .checklist-collapsed a").click(function(e) {
        $(".checklist-expanded, .checklist-collapsed").toggle('slow');
        e.preventDefault();
    });
});