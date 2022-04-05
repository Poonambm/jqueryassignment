$(document).ready(function () {
    $("#submit").click(function () {
        var name1 = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        var required = new Array();
        required[0] = name1;
        required[1] = email;
        required[2] = phone;
        required[3] = message;
        for (i = 0; i < required.length; i++) {
            if (required[i] == "") {
                $('#message').html("Please Fill Out Required Fields");
                $('#message').addClass('warning')
                if (i == 0) { $('#labelName').addClass('warning') }
                if (i == 1) { $('#labelEmail').addClass('warning') }
                if (i == 2) { $('#labelNumber').addClass('warning') }
                if (i == 3) { $('#labelmsg').addClass('warning') }
            }
            else {
                $('#labelName').removeClass('warning');
                $('#labelEmail').removeClass('warning');
                $('#labelNumber').removeClass('warning');
                $('#labelmsg').removeClass('warning');
                $('#message').html(" ");
                $('#message').removeClass('warning')

            }
        }
    });
});
