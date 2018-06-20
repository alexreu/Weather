$(function(){
    let url;
    url = 'http://localhost:3012/weather';
    $.ajax({
        url: url,
        success: function (data) {
            data.list.forEach(function(datas){
                console.log(datas);
                $('#result').append('<div class="col-md-3 text-center text-uppercase"><div class="card"><div class="card-body"><p class="m-0 p-5">'+ datas.name + '  ' + datas.main.temp + ' C° </p></div></div></div>');
            });
        }
    });
});
