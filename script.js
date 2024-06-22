let btn1 = document.getElementById("mybtn1")
let btn2 = document.getElementById("mybtn2")
let copyDiv = document.querySelector(".copycode");
let rgb1 = '#01763f';
let rgb2 = '#4858ef';


const getHexValue = () => {
    let myHexa = '0987654321abcdef';
    let colors = '#';
    // alert(myHexa[3]);
    for (let i = 0; i < 6; i++) {
        colors += myHexa[Math.floor(Math.random() * 16)];
    }
    return (colors);
}
const colormaker1 = () => {
    rgb1 = getHexValue();
    console.log(rgb1);
    document.body.style.backgroundImage =
        `linear-gradient(to right, ${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-color:linear-gradient(to right, ${rgb1}, ${rgb2})`
    btn1.innerText = rgb1
    // btn1.style.backgroundColor = rgb2
}
const colormaker2 = () => {
    rgb2 = getHexValue();
    console.log(rgb2);
    document.body.style.backgroundImage =
        `linear-gradient(to right,${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-color:linear-gradient(to right, ${rgb1}, ${rgb2})`
    btn2.innerText = rgb2
    // btn2.style.backgroundColor = rgb1
}
btn1.addEventListener('click', colormaker1)
btn2.addEventListener('click', colormaker2)


copyDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(copyDiv.innerText)
    alert("copied!")
})


