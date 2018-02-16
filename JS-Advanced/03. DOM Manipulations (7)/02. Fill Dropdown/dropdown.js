function addItem(){
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');
    let newOption = document.createElement('OPTION');
    newOption.textContent = text;
    newOption.value = value;
    menu.add(newOption);
    console.log(newOption);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}