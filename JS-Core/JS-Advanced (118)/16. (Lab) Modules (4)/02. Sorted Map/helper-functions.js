function mapSort(map){
    if(arguments.length = 1){
        return new Map([...map.entries()].sort());
    }
}