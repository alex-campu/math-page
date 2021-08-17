const sqrS = 5

// const sqrPerimeter = sqrS * 4

// const sqrArea = sqrS * sqrS

// console.log(sqrPerimeter + '' + sqrArea)
const sqrInput = () => {
  return document.getElementById('sqrInput').value
}

const sqrPerimeter = () => {
  document.getElementById('sqr-perimeter').innerText=sqrInput() * 4
}


const sqrArea = () => {
  area=sqrInput() * sqrInput()
  document.getElementById('sqr-area').innerText=area
}
let base
let side1
let side2
let height
const triangleSides = () => {
    base=parseInt(document.getElementById('trBase').value)
    side1=parseInt(document.getElementById('trSide1').value)
    side2=parseInt(document.getElementById('trSide2').value)
    height=parseInt(document.getElementById('trHeight').value)
 
}

const trPerimeter = () => {
  triangleSides()
  perimeter=base+side1+side2
  document.getElementById('tr-perimeter').innerText=perimeter
}
const trArea = () => {
  triangleSides()
  area=base*height
  document.getElementById('tr-area').innerText=area
}

const trFunc = () => {
  let finalHeight
  triangleSides()
  if(base===side2 && base===side1) return "No"
  if(side1===side2||base===side1||base===side2){
    if(base===side2 && base+side2<=side1) return "That triangule is not real"
    if(base===side1 && base+side1<=side2) return "That triangule is not real"
    if(side2===side1 && side2+side1<=base) return "That triangule is not real"
    base===side1 ? finalHeight=Math.sqrt((base**2)-((side2/2)**2)) : ""
    side1===side2 ? finalHeight=Math.sqrt((side2**2)-((base/2)**2)) : finalHeight=Math.sqrt((side2**2)-((side1/2)**2)) 
    return `Yes, it is. Heght is equal to ${finalHeight}`
  } else {
    return "No"
  }
}
const trIso = ()=> document.getElementById('is-iso').innerText=trFunc()

const crDiameter = () =>{
  return parseInt(document.getElementById('crInput').value)
}

const crPerimeter = () => {
  alert(Math.PI*crDiameter())
}

const crArea = () => {
  alert(Math.PI*((crDiameter()/2)**2))
}