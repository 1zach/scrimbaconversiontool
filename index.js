//gets value input from user
function returnText(){
    input = document.getElementById("value-input").value;
    console.log(input)
   
   // this is to replace each html element with the input from
    //theuser... i don't know how to do all of them with one move//
  
    newInput0 = document.getElementById("userInput0")
    newInput0.textContent = input
    
    newInput1 = document.getElementById("userInput1")
    newInput1.textContent = input
  
    newInput2 = document.getElementById("userInput2")
    newInput2.textContent = input
  
    newInput3 = document.getElementById("userInput3")
    newInput3.textContent = input
  
    newInput4 = document.getElementById("userInput4")
    newInput4.textContent = input
  
    newInput5 = document.getElementById("userInput5")
    newInput5.textContent = input
    //console.log(newInput)
    
//console.log(input)
//conversion functions
function metersToFeet(x) {
    let mTF = x * 3.28084
    let mTFcalced = document.getElementById("mTF")
    mTFcalced.textContent = mTF.toFixed(3)
    console.log(mTF)
}

function feetToMeters(x) {
    let fTM = x / 3.28084
    let fTMcalced = document.getElementById("fTM")
    fTMcalced.textContent = fTM.toFixed(3)
    console.log(fTM)
}

function litresToGallons(x) {
    let lTG = x / 3.785
    let lTGcalced = document.getElementById("lTG")
    lTGcalced.textContent = lTG.toFixed(3)
    console.log(lTG)
}

function gallonToLiters(x) {
    let gTL = x * 3.785
    let gTLcalced = document.getElementById("gTL")
    gTLcalced.textContent = gTL.toFixed(3)
    console.log(gTL)
}

function kilogramsToPounds(x) {
    let kTP = x / 2.2
    let kTPcalced = document.getElementById("kTP")
    kTPcalced.textContent = kTP.toFixed(3)
    console.log(kTP)
}
function poundsToKilo(x) {
    let pTK = x * 2.2
    let pTKcalced = document.getElementById("pTK")
    pTKcalced.textContent = pTK.toFixed(3)
    console.log(pTKcalced)
}

//call each function

metersToFeet(input)

litresToGallons(input)

kilogramsToPounds(input)

feetToMeters(input)

gallonToLiters(input)

kilogramsToPounds(input)

poundsToKilo(input)


}

//this is ugly code but it works