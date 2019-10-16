$(document).ready(function () {
    $('#text').on('keyup', function () {
        var text = $('#text').val();
        $('.alert-success').html(text);
        $('.alert-success').fadeIn(3000);
        var border = text.length;

        if(border <= 3 ){
            $('#text').css('border','3px solid red');
        }else{
            $('#text').css('border','3px solid teal');
        }
    });

    $('#description').on('keyup', function () {
        var text = $('#description').val();
        $('.alert-danger').html(text);
        var border = text.length;
        
        if(border <= 3){
            $('#description').css('border', '3px solid orange');
        }else{
            $('#description').css('border', '3px solid dark');
        }
    });

    $('#subject').on('click', function () {
        var subject = $('#subject').val();
        $('.alert-warning').html(subject)
    });
    $('.gender').on('click', function () {
        var gender = $('.gender:checked').val();
        $('.alert-dark').html(gender);
    });
    $('.fruit').on('click', function () {
        var fruit = "";
        $('.fruit:checked').each(function () {
            fruit += $(this).val() + " , ";
        });
        $('.alert-info').html(fruit);
        var counter = $ ('[type="checkbox"]:checked').length;
        alert("you are click" + counter + "time");
    });
});