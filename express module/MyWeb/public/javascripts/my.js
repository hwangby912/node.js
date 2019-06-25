$(document).ready(() => {
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
        $.post('/member_insert', send_params, (data, status) => {
            // alert(data + " : " + status);
            const parsedData = JSON.parse(data);
            $('#result_div').html(`<h1>${parsedData.msg}</h1>`);
        });
    })
});