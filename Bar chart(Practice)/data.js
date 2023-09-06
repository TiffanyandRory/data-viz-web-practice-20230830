// 動物數據
let animals = [
    {
        "name": "lion",
        "count": 20
    },
    {
        "name": "tiger",
        "count": 14
    },
    {
        "name": "monkey",
        "count": 23
    }
];

// 生成動物數據表格
var animalTable = '<table><tr><th>Name</th><th>Count</th></tr>';
animals.forEach(function (animal) {
    animalTable += '<tr><td>' + animal.name + '</td><td>' + animal.count + '</td></tr>';
});
animalTable += '</table>';

// 插入動物數據表格到指定的 div 元素中
document.getElementById('animalData').innerHTML = animalTable;

// 數據 for 長條圖
var dataForChart = [
    {
        "name": "lion",
        "count": 20
    },
    {
        "name": "tiger",
        "count": 14
    },
    {
        "name": "monkey",
        "count": 23
    }
];

// 提取數據
var animalNames = dataForChart.map(item => item.name);
var animalCounts = dataForChart.map(item => item.count);

// 創建長條圖數據
var barChartData = [
    {
        x: animalNames,
        y: animalCounts,
        type: 'bar',
        name: 'Animal Count'
    }
];

// 定義圖表佈局
var layout = {
    title: 'Animal Count Bar Chart',
    xaxis: {
        title: 'Animal Name'
    },
    yaxis: {
        title: 'Count'
    }
};

// 在指定的 div 元素中繪製長條圖
Plotly.newPlot('barChart', barChartData, layout);
