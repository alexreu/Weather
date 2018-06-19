$(function(){
    var url = 'http://localhost:3012/test';
    $.ajax({
        url: url,
        success: function (data) {
            console.log(data.list[0].name);
            console.log(data.list[1].name);
            console.log(data.list[2].name);
            console.log(data.list[3].name);
            data.forEach(function(datas){
                $('#result').append('<p>'+data.list.name+'</p>');
            });
        }
    });
});
