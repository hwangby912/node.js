$(document).ready(() => {
    $('#registerBtn').click(() => {
        const name = $('#registerName').val();
        const email = $('#registerEmail').val();
        const phone = $('#registerPhone').val();
        const message = $('#registerMessage').val();

        sendParams = {
            name,
            email,
            phone,
            message
        }

        $.post('/register', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            $('#register_div').html(`<h1>${parsedData.txt}</h1>`)
        });

    });

    $('#clearBtn').click(() => {
        $('#contact-form').reset();
    });

    $('#loginBtn').click(() => {
        const loginEmail = $('#loginEmail').val();
        const loginPhone = $('#loginPhone').val();
        const loginParams = {
            email : loginEmail,
            phone : loginPhone
        };

        $.post('/login', loginParams, (data, status) => {
            try {
                alert(JSON.parse(data).txt);
                $('#loginEmail').val() = "";
                $('#loginPhone').val() = "";
            } catch (err) {
                window.location.reload(true);
            }
        });
    });

    $('#logOutBtn').click(() => {
        $.get('/logout', (data, status) => {
            location.reload(true);
        });
    });
});