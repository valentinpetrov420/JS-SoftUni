import { Airmelon, Earthmelon, Firemelon, Melolemonmelon, Watermelon } from './elemelonclass';

const watermelon = new Watermelon(12.5, "Kingsize");
const firemelon = new Firemelon(21, "SuperDuperSize");
const earthmelon = new Earthmelon(10, "Normalsize");
const airmelon = new Airmelon(5, "Smallsize");
const melolemonmelon = new Melolemonmelon(13, "Kingsize");

console.log(watermelon.toString());
console.log(firemelon.toString());
console.log(earthmelon.toString());
console.log(airmelon.toString());

console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());