const preview = document.getElementById("previewwindow");
const red = document.getElementById("rValue");
const green = document.getElementById("gValue");
const blue = document.getElementById("bValue");
const rslider = document.getElementById("rRange");
const gslider = document.getElementById("gRange");  
const bslider = document.getElementById("bRange");
const rgbField = document.getElementById("rgbValue");
const hexField = document.getElementById("hexValue");
const rgbButton = document.getElementById("rgbButton");
const hexButton = document.getElementById("hexButton");


red.addEventListener('input' , () => {
    rslider.value = red.value;
    composeRGB(red, green, blue);
})
green.addEventListener('input' , () => {
    gslider.value = green.value;
    composeRGB(red, green, blue);
})
blue.addEventListener('input' , () => {
    bslider.value = blue.value;
    composeRGB(red, green, blue);
})

rslider.addEventListener('input' , () => {
    console.log("I am being invoked.");
    red.value = rslider.value;
    composeRGB(red, green , blue);
})
gslider.addEventListener('input' , () => {
    green.value = gslider.value;
    composeRGB(red, green , blue);
})
bslider.addEventListener('input' , () => {
    blue.value = bslider.value;
    composeRGB(red, green , blue);
})

rgbButton.addEventListener('click' , ()=>{
   copyValue(rgbField);
})

hexButton.addEventListener('click' , ()=>{
    copyValue(hexField);
})


function composeRGB(r, g, b){
    r = r.value == "" ? 0 : r.value;
    g = g.value == "" ? 0 : g.value;
    b = b.value == "" ? 0 : b.value;
    
    preview.style.backgroundColor = `rgb(${r} ,${g} , ${b})`;
    updateFields(r , g , b);
}

function updateFields(RED, GREEN, BLUE){
    rgbField.innerHTML = `${RED}${GREEN}${BLUE}`;
    hexField.innerHTML = rgbToHex(RED, GREEN, BLUE);
    
}


function rgbToHex(red, green, blue) {
    red = Math.max(0, Math.min(255, red));
    green = Math.max(0, Math.min(255, green));
    blue = Math.max(0, Math.min(255, blue));
    return ("#" + ( + (red << 16) | (green << 8) | blue).toString(16).padStart(6, '0').toUpperCase());
}

function copyValue(target){
    navigator.clipboard.writeText(target.innerText);
}

composeRGB(red, green , blue);




