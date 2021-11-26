function q1() {
    $.ajax({
        type: 'GET',
        url: 'http://spartacodingclub.shop/sparta_api/rate',
        data: {},
        success: function (response) {
            let rate = response['rate'];
            let date = response['date'];
            let tempHtml = `${date} 일자 환율은 : ${rate} 원 입니다!`;
            $('#dollar-rate').text(tempHtml);
        }
    })
}

$(document).ready(function () {
    q1();
});

function btn_func(){
    alert('분양이 완료되었습니다!');
}
