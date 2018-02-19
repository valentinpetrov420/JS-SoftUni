(function bookGenerator() {
    let id = 1;
    return function(selector, name, author, isbn) {
        $('#selector').append($('<div>').attr('id', 'book' + id))
            .append($('<p>').addClass('title').text(name))
            .append($('<p>').addClass('author').text(author))
            .append($('<p>').addClass('isbn').text(isbn))
            .append($('<button>').text('Select').on('click', select))
            .append($('<button>').text('deSelect').on('click', deselect));
        function select(){
            console.log(this);
        }
        function deselect(){
            console.log(this);
        }
        id++;
    }
}());

