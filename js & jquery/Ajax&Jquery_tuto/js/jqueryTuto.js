$.ajax({
    type: "GET",
    url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
    data: {},
    success: function (response) {
        let rows = response['RealtimeCityAir']['row']
        for (let i = 0; i < rows.length; i++) {
            let gu_name = rows[i]['MSRSTE_NM'];
            let gu_mise = rows[i]['IDEX_MVL'];

            console.log(gu_name, gu_mise);
        }
    }
})

function q1() {
    $('#names-q1').empty();
    $.ajax({
        type: "GET",
        url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
        data: {},
        success: function (response) {
            let rows = response['RealtimeCityAir']['row']
            for (let i = 0; i < rows.length; i++) {
                let gu_name = rows[i]['MSRSTE_NM'];
                let gu_mise = rows[i]['IDEX_MVL'];
                let temp_html = ''

                if (gu_mise >= 50) {
                    temp_html = `<li class='bad'>${gu_name} : ${gu_mise}</li>`;
                } else {
                    temp_html = `<li>${gu_name} : ${gu_mise}</li>`;
                }

                $('#names-q1').append(temp_html);
            }
        }
    })
}
