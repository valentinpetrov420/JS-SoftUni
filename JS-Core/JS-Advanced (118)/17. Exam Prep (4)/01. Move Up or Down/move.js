function move(direction){
    let selectedTown = $('#towns option:selected');
    if (direction == -1) {
        selectedTown.insertBefore(selectedTown.prev());
    }
    if (direction == +1) {
        selectedTown.insertAfter(selectedTown.next());
    }
}