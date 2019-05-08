$(document).ready(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $btns = $(".navBtn");
        var $abtBox = $(".aboutBox");
        var $cards = $(".card-columns");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()+100);
        $nav.toggleClass('shadow', $(this).scrollTop() > $nav.height()+100);
        $btns.toggleClass('scrolled', $(this).scrollTop() > $nav.height()+100);
        $abtBox.toggleClass('scrolled', $(this).scrollTop() > $nav.height()+100);
        $cards.toggleClass('scrolled', $(this).scrollTop() > $nav.height()+$abtBox.height()+70);
    });
});