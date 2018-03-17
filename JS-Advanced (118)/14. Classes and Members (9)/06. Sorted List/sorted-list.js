class SortedList{
    constructor(){
        this.arr = [];
        this.size = 0;
    }

    add(element){
        this.arr.push(element);
        this.arr.sort((a,b) => a-b);
        this.size++;
        return this.arr;
    };

    remove(index){
        if(index >=0 && index< this.arr.length) {
            this.arr.splice(index, 1);
            this.arr.sort((a,b) => a-b);
            this.size--;
            return this.arr;
        }
    }

    get(index){
        if(index >= 0 && index < this.arr.length){
            return this.arr[index];
        }
    }
}

let list = new SortedList();
list.add('asd1');
list.add('asd2');
list.add('asd3');
list.add('asd4');
list.add('asd5');
list.remove(1);
list.remove(2);
console.log(list);
console.log(list.get(2));
