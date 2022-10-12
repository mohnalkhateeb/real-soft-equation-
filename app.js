'use strict'

let tableEl = document.createElement('table')
let h3El = document.createElement('h3')
let addingform = document.getElementById('new-values')
addingform.addEventListener('submit', calculateEqu)
let xArr = [];
let yArr = [];
function calculateEqu(event) {
    event.preventDefault();
    console.log("xxxxxx");
    let a = event.target.a.value;
    let b = event.target.b.value;
    let xfrom = event.target.xfrom.value;
    let xto = event.target.xto.value;
    tableEl.innerHTML = ''
    let tableParent = document.getElementById('table')
    tableParent.appendChild(h3El)
    h3El.textContent = `This table represent the values of Y(x) where x in [${xfrom},${xto}] and a=${a} and b=${b}`
    tableParent.appendChild(tableEl)
    let xTr = document.createElement('tr')
    tableEl.appendChild(xTr)
    let xHed = document.createElement('th')
    xHed.textContent = ' X '
    xTr.appendChild(xHed)
    let yTr = document.createElement('tr')
    tableEl.appendChild(yTr)
    let yHed = document.createElement('th')
    yHed.textContent = ' Y(x) '
    yTr.appendChild(yHed)
    for (let i = parseInt(xfrom); i <= xto; i++) {

        let xValue = document.createElement('td')
        xValue.textContent = i
        xTr.appendChild(xValue)
        let yValue = document.createElement('td')
        yValue.textContent = findYofX(a, b, i)
        yTr.appendChild(yValue)
        xArr[i-xfrom] = i;
        yArr[i-xfrom] = findYofX(a, b, i)
    }
    addChart();
    
}
function findYofX(a, b, x) {
    let y = ((b - a + 1) * (Math.pow(x, 3) - b)) / (b * Math.pow(x, a) + a * x + a * b)
    y = y.toFixed(3)
    return y
}
function addChart() {
    let  ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xArr,
            datasets: [{
                label: '',
                data: yArr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

}