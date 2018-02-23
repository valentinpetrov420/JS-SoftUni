function createBook(selector, name, author, isbn){
    let id = 1;
    return (function() {
        $(selector).append($('<div>').attr('id', 'book' + id))
            .append($('<p>').addClass('title').text(name))
            .append($('<p>').addClass('author').text(author))
            .append($('<p>').addClass('isbn').text(isbn))
            .append($('<button>').text('Select').on('click', select))
            .append($('<button>').text('Deselect').on('click', deselect));

        function select() {
            console.log(this.parentNode.children[0]);
        }

        function deselect() {
            console.log(this);
        }
    })();
}