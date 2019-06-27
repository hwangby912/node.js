$(document).ready(() => {
    // member insert btn listener
    $('#member_insert_btn').click(() => {
        const name = $('#name').val();
        const email = $('#email').val();
        const comments = $('#comments').val();
        // ES2015에서의 문법 key와 value가 같으면 하나만 써도 됨
        const send_params = {
            name,
            email,
            comments
        };
        // $ === xhr 객체 (let xhr = new XMLHttpRequest의 jQuery ver)
        $.post('/member_insert', send_params, function (data, status) {
            const parsed_data = JSON.parse(data);
            $('#result_div').html(`<h1>${parsed_data.msg}</h1>`);
        });
    });

    // login btn listener
    $('#login_btn').click(() => {
        const email = $('#login_email').val();
        const login_params = {
            email
        };

        $.post('/login', login_params, (data, status) => {
            try {
                $('#login_email').val() = "";
            } catch (err) {
                location.reload(true);
            }
        });
    });

    // logout btn listener
    $('#logout_btn').click(() => {
        $.get('/logout', (data, status) => {
            location.reload(true);
        });
    });

    $('#search_btn').click(() => {
        const carNum = $('#carNum').val();
        const select_menu = $('#select_menu').val();
        const send_params = {
            carNum,
            select_menu
        };
        $.post('/search_carinfo', send_params, (data, status) => {
            const parsed_data = JSON.parse(data);
            let tableTag = '<table border = 1>';
            for (key in parsed_data.msg) {
                tableTag += `<tr><td>${key}</td><td>${parsed_data.msg[key]}</td></tr>`;
            }
            tableTag += '</table>';
            $('#carResult').html(`${tableTag}`);
        });
    });
});