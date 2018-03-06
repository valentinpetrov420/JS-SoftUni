function solve() {
    let counter = 0;
    function add(){
        counter += 1;
    }
    add();
    return counter;
}

console.log(solve());
console.log(add());
