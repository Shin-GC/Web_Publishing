function openClose() {
    let status = $('#post-box').css('display');
    if (status === 'block') {
        $('#post-box').hide()
        $('#posting-box-btn').text('포스팅박스 열기')
    } else {
        $('#post-box').show()
        $('#posting-box-btn').text('포스팅박스 닫기')
    }
}

function cardSave(){
    $('#cards-box').empty();
    $.ajax({
        type: 'GET',
        data: {},
        url: 'http://spartacodingclub.shop/post',
        success: function(response){
            let rows = response['articles']
            for (let i = 0; i < rows.length; i++) {
                let comment = rows[i]['comment'];
                let desc = rows[i]['desc'];
                let title = rows[i]['title'];
                let image = rows[i]['image'];
                let url = rows[i]['url'];
                console.log(rows[i]['url']);
                let tempHtml = `<div class="card">
            <img class="card-img-top"
                 src=${image}
                 alt="Card image cap">
            <div class="card-body">
                <a href=${url} class="card-title">${title}</a>
                <p class="card-text">${desc}</p>
                <p class="card-text comment">${comment}</p>
            </div>
        </div>`
                $(`#cards-box`).append(tempHtml);
            }
        }
    })
}


$(document).ready(function(){
// 포스팅 함수
    cardSave();
 });

// <div className="card">
//     <img className="card-img-top"
//          src="https://d2ur7st6jjikze.cloudfront.net/offer_photos/29590/185689_medium_1525763241.jpg?1525763241"
//          alt="Card image cap">
//         <div className="card-body">
//             <a href="http://naver.com" className="card-title">여기 기사 제목이 들어가죠</a>
//             <p className="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
//             <p className="card-text comment">여기에 코멘트가 들어갑니다.</p>
//         </div>
// </div>
