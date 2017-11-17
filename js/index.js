$(document).ready(function(){

     $('#btn').keyup(function() {
        page = $('.container').text();
        searchedText = $('#btn').val();
        $("p:contains('"+searchedText+"')").css("color", "white");
    });
});