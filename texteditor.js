const obj = document.querySelector("#obj");
const font = document.querySelector("#font");
const colour = document.querySelector("#colour");
const fontSize = document.querySelector("#fontSize");
const text = document.querySelector("#text");
const fonts = ["Ebrima","Monospace","Terminal","Fantasy","Verdana","Bahnschrift"];

fontSize.min = parseFloat(window.getComputedStyle(obj).fontSize);
fontSize.max = 100;
fontSize.value = fontSize.min;

fonts.forEach(f=>{
    font.append(new Option(f,f));
    return Option;
})
//function
const changeText = function(event){
    obj.innerText = event.target.value;
};

const changeColor = (event)=>{
    obj.style.color = event.target.value;
}

const changeFontSize = (event)=>{
    obj.style.fontSize = event.target.value + "px";
}

const changeFontFamily = event =>{
    obj.style.fontFamily = event.target.value;
    // console.log(event.target)
}
//event
text.addEventListener("keyup",changeText);
colour.addEventListener("change",changeColor);
fontSize.addEventListener("change",changeFontSize);
font.addEventListener("change",changeFontFamily);
