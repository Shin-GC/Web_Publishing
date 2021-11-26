
function q1() {
    $.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/seoulbike",
        data: {},
        success: function (response) {
            $('#names-q1').empty();
            let rows = response['getStationList']['row'];

            for (let i = 0; i <= rows.length; i++) {
                let totalBike = rows[i]['parkingBikeTotCnt']; // 주차 자전거 수
                let rackBike = rows[i]['rackTotCnt']; //거치대 수
                let stationName = rows[i]['stationName'];

                let tempHtml = ``;

                if (totalBike <= 5){
                    tempHtml = ` <tr class="low-five">
            <td>${stationName}</td>
            <td>${rackBike}</td>
            <td>${totalBike}</td>
        </tr>`
                }
                else{
                    tempHtml = ` <tr>
            <td>${stationName}</td>
            <td>${rackBike}</td>
            <td>${totalBike}</td>
        </tr>`
                }
                $('#names-q1').append(tempHtml);
            }

        }
    })
}