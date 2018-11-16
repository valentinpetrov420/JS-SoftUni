function currentViewport(){
    let p = document.getElementsByClassName('browser-name');
    console.log(p[0]);
    p[0].textContent = navigator.appCodeName;

    let w = Math.max(document.documentElement.clientWidth);
    let h = Math.max(document.documentElement.clientHeight);

    let heightDiv = document.getElementsByTagName('div')[1];
    let widthDiv = document.getElementsByTagName('div')[2];

    heightDiv.textContent = `Height = ${h}`;
    widthDiv.textContent = `Width = ${w}`;
}