var aposInicializado = function() {
    var items = $(".item-total");

    var total = 0;
    for (var i = 0; i < items.length; i++) {
        var item = $(items[i]).text();
        var valor = parseFloat(item);
        total += valor;
    }
    $("#valor-total").text(total);
    $("#quantidade-de-itens").text(items.length);
};
$(aposInicializado);
