function solve(n, k) {
    let sum = 0;
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        if(current >= start && current <= end){
            sum+=
        }
    }
    console.log(seq.join(' '));
}

