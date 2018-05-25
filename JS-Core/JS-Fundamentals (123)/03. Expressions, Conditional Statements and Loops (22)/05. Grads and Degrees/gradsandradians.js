function solve(grad){
    let result = (grad * 0.9) % 360;

    return result < 0 ? 360 + result : result;
}