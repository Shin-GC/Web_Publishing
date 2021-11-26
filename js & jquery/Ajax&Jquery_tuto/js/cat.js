function q1() {
    $.ajax({
        type: "GET",
        url: "https://api.thecatapi.com/v1/images/search",
        data: {},
        success: function (response) {
            $('#img-cat').empty();
            let catImage = response[0]['url']
            $('#img-cat').attr('src', catImage);

        }
    })
}