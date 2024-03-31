dados = {};

dados.init = function(callback) {
    $.getJSON('dic.json', function(data) {
        dados.data = data;
        if(callback) {
            callback();
        }
    });
}