import {result, time} from "./result.js";
let data = []
data = data.concat(result)
let labels = []
labels = labels.concat(time)

function getRandomColor () {
    return "#" + (Math.floor(Math.random() * 16177215)).toString(16)
}


function GenerateDataSet (dataSet, name) {
    return {
        label: name,
        data: dataSet.slice(1),
        borderColor: getRandomColor(),
        fill: false,
        tension: 0.1,
        spanGaps: true,
        hidden: true
    }
}

labels = labels.map(item => item.slice(0,10))
let dataSets = []
for (let entry of data){
    let name = entry[0]
    dataSets.push(GenerateDataSet(entry, name))
}

console.log(dataSets)
let chartContext = document.getElementById('myChart').getContext('2d');
let chartData = {
    labels: labels,
    datasets: dataSets
};

const myChart = new Chart(chartContext, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Хуевая таблица'
                    }
                },
        scales: {
            x: {
                ticks: {
            // For a category axis, the val is the index so the lookup via getLabelForValue is needed
            callback: function(val, index) {
                // Hide the label of every 2nd dataset
                return index % 2 === 0 ? this.getLabelForValue(val) : '';
            },
            color: 'black',
        }
    }
}
},

})


