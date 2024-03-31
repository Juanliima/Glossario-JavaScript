dados = {};

dados.init = function(callback) {
    $.getJSON('js/dic.json', function(data) {
        dados.data = data;
        if(callback) {
            callback();
        }
    });
}