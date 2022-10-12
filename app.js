'use strict'

let tableEl = document.createElement('table')
// let xArr = [];
// let yArr = [];
let addingform = document.getElementById('new-values')
addingform.addEventListener('submit',calculateEqu)
function calculateEqu(event)
{
    event.preventDefault();
    console.log("xxxxxx");
    let a = event.target.a.value;
  let b = event.target.b.value;
  let xfrom = event.target.xfrom.value;
  let xto = event.target.xto.value;
   tableEl.innerHTML = ''
    let tableParent = document.getElementById('table')
    tableParent.appendChild(tableEl)
    let xTr = document.createElement('tr')
    tableEl.appendChild(xTr)
    let xHed = document.createElement('th')
    xHed.textContent= ' X '
    xTr.appendChild(xHed)
    let yTr = document.createElement('tr')
         tableEl.appendChild(yTr)
    let yHed = document.createElement('th')
    yHed.textContent= ' Y(x) '
    yTr.appendChild(yHed)
    for(let i=parseInt(xfrom) ;i<= xto ;i++)
    {
        
        let xValue = document.createElement('td')
        xValue.textContent = i
        xTr.appendChild(xValue)
        let yValue= document.createElement('td')
        yValue.textContent = findYofX(a,b,i)
        yTr.appendChild(yValue)
        
    }
    // let yOfxTr = document.createElement('tr')
    // tableEl.appendChild(yOfxTr)
    // let yHed = document.createElement('td')
    // yHed.textContent= ' Y(x) '
    // yOfxTr.appendChild(yHed)
    // for(let i=xfrom ;i<= xto ;i++)
    // {
    //     let yofx= document.createElement('td')
    //     yofx.textContent = findYofX(a,b,i)
    //     yOfxTr.appendChild(yofx)
    // }
}
function findYofX(a,b,x)
{
    let y = ((b-a+1)*(Math.pow(x,3)-b))/(b*Math.pow(x,a)+a*x+a*b)
    y = y.toFixed(3)
    return y
}