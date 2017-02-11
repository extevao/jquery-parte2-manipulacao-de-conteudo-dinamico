$(aposInicializado);

$('.remove-item').click(removeItem);


function removeItem(event) {
    event.preventDefault();

    var self = $(this);

    self.closest('tr').remove();


    var quantidadeComoString = $('#quantidade-de-itens').text();
    var atual = parseInt(quantidadeComoString);
    var novaQuantidade = atual -1;
    $('#quantidade-de-itens').text(novaQuantidade);


}

function aposInicializado() {
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
