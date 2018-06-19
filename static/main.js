$(function(){
    var url = 'http://localhost:3012/test';
    $.ajax({
        url: url,
        success: function (data) {
            data.list.forEach(function(datas){
                console.log(datas);
                $('#result').append('<p>'+ datas.name + ' ' + datas.main.temp + ' C° </p>');
            });
        }
    });
});
