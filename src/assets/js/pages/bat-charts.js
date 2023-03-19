var splneAreaColors = getChartColorsArray("#spline_area"),
options = {
    chart: { height: 350, type: "area", toolbar: { show: !1 } },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: 3 },
    series: [
        { name: "series1", data: [34, 40, 28, 52, 42, 109, 100] }, 
    ],
    colors: splneAreaColors,
    xaxis: { type: "datetime", categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"] },
    grid: { borderColor: "#f1f1f1" },
    tooltip: { x: { format: "dd/MM/yy HH:mm" } },
};

(chart = new ApexCharts(document.querySelector("#spline_area"), options)).render();

var splneAreaColors = getChartColorsArray("#spline_area2"),
options = {
    chart: { height: 350, type: "area", toolbar: { show: !1 } },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: 3 },
    series: [
        { name: "series1", data: [34, 40, 28, 52, 42, 109, 100] }, 
    ],
    colors: splneAreaColors,
    xaxis: { type: "datetime", categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"] },
    grid: { borderColor: "#f1f1f1" },
    tooltip: { x: { format: "dd/MM/yy HH:mm" } },
};
(chart = new ApexCharts(document.querySelector("#spline_area2"), options)).render();


var splneAreaColors = getChartColorsArray("#spline_area3"),
options = {
    chart: { height: 350, type: "area", toolbar: { show: !1 } },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: 3 },
    series: [
        { name: "series1", data: [34, 40, 28, 52, 42, 109, 100] }, 
    ],
    colors: splneAreaColors,
    xaxis: { type: "datetime", categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"] },
    grid: { borderColor: "#f1f1f1" },
    tooltip: { x: { format: "dd/MM/yy HH:mm" } },
};
(chart = new ApexCharts(document.querySelector("#spline_area3"), options)).render();

var splneAreaColors = getChartColorsArray("#spline_area4"),
options = {
    chart: { height: 350, type: "area", toolbar: { show: !1 } },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: 3 },
    series: [
        { name: "series1", data: [34, 40, 28, 52, 42, 109, 100] }, 
    ],
    colors: splneAreaColors,
    xaxis: { type: "datetime", categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"] },
    grid: { borderColor: "#f1f1f1" },
    tooltip: { x: { format: "dd/MM/yy HH:mm" } },
};
(chart = new ApexCharts(document.querySelector("#spline_area4"), options)).render();

var splneAreaColors = getChartColorsArray("#spline_area5"),
options = {
    chart: { height: 350, type: "area", toolbar: { show: !1 } },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: 3 },
    series: [
        { name: "series1", data: [34, 40, 28, 52, 42, 109, 100] }, 
    ],
    colors: splneAreaColors,
    xaxis: { type: "datetime", categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"] },
    grid: { borderColor: "#f1f1f1" },
    tooltip: { x: { format: "dd/MM/yy HH:mm" } },
};
(chart = new ApexCharts(document.querySelector("#spline_area5"), options)).render();

 
var columnDatalabelColors = getChartColorsArray("#column_chart_datalabel"),
options = {
    chart: { height: 350, type: "bar", toolbar: { show: !1 } },
    plotOptions: { bar: { borderRadius: 10, dataLabels: { position: "top" } } },
    dataLabels: {
        enabled: !0,
        formatter: function (e) {
            return e + "%";
        },
        offsetY: -22,
        style: { fontSize: "12px", colors: ["#304758"] },
    },
    series: [{ name: "Inflation", data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, 0.8] }],
    colors: columnDatalabelColors,
    grid: { borderColor: "#f1f1f1" },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        labels: { offsetY: -18 },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        crosshairs: { fill: { type: "gradient", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } } },
        tooltip: { enabled: !0, offsetY: -35 },
    },
    yaxis: {
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
            show: !1,
            formatter: function (e) {
                return e + "%";
            },
        },
    },
    title: { text: "Monthly Inflation in Argentina, 2002", floating: !0, offsetY: 330, align: "center", style: { color: "#444", fontWeight: "500" } },
};
(chart = new ApexCharts(document.querySelector("#column_chart_datalabel"), options)).render();


var columnDatalabelColors = getChartColorsArray("#column_chart_datalabel2"),
options = {
    chart: { height: 350, type: "bar", toolbar: { show: !1 } },
    plotOptions: { bar: { borderRadius: 10, dataLabels: { position: "top" } } },
    dataLabels: {
        enabled: !0,
        formatter: function (e) {
            return e + "%";
        },
        offsetY: -22,
        style: { fontSize: "12px", colors: ["#304758"] },
    },
    series: [{ name: "Inflation", data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, 0.8] }],
    colors: columnDatalabelColors,
    grid: { borderColor: "#f1f1f1" },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        labels: { offsetY: -18 },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        crosshairs: { fill: { type: "gradient", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } } },
        tooltip: { enabled: !0, offsetY: -35 },
    },
    yaxis: {
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
            show: !1,
            formatter: function (e) {
                return e + "%";
            },
        },
    },
    title: { text: "Monthly Inflation in Argentina, 2002", floating: !0, offsetY: 330, align: "center", style: { color: "#444", fontWeight: "500" } },
};
(chart = new ApexCharts(document.querySelector("#column_chart_datalabel2"), options)).render();

var columnDatalabelColors = getChartColorsArray("#column_chart_datalabel3"),
options = {
    chart: { height: 350, type: "bar", toolbar: { show: !1 } },
    plotOptions: { bar: { borderRadius: 10, dataLabels: { position: "top" } } },
    dataLabels: {
        enabled: !0,
        formatter: function (e) {
            return e + "%";
        },
        offsetY: -22,
        style: { fontSize: "12px", colors: ["#304758"] },
    },
    series: [{ name: "Inflation", data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, 0.8] }],
    colors: columnDatalabelColors,
    grid: { borderColor: "#f1f1f1" },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        labels: { offsetY: -18 },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        crosshairs: { fill: { type: "gradient", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } } },
        tooltip: { enabled: !0, offsetY: -35 },
    },
    yaxis: {
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
            show: !1,
            formatter: function (e) {
                return e + "%";
            },
        },
    },
    title: { text: "Monthly Inflation in Argentina, 2002", floating: !0, offsetY: 330, align: "center", style: { color: "#444", fontWeight: "500" } },
};
(chart = new ApexCharts(document.querySelector("#column_chart_datalabel3"), options)).render();

var columnDatalabelColors = getChartColorsArray("#column_chart_datalabel4"),
options = {
    chart: { height: 350, type: "bar", toolbar: { show: !1 } },
    plotOptions: { bar: { borderRadius: 10, dataLabels: { position: "top" } } },
    dataLabels: {
        enabled: !0,
        formatter: function (e) {
            return e + "%";
        },
        offsetY: -22,
        style: { fontSize: "12px", colors: ["#304758"] },
    },
    series: [{ name: "Inflation", data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, 0.8] }],
    colors: columnDatalabelColors,
    grid: { borderColor: "#f1f1f1" },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        labels: { offsetY: -18 },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        crosshairs: { fill: { type: "gradient", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } } },
        tooltip: { enabled: !0, offsetY: -35 },
    },
    yaxis: {
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
            show: !1,
            formatter: function (e) {
                return e + "%";
            },
        },
    },
    title: { text: "Monthly Inflation in Argentina, 2002", floating: !0, offsetY: 330, align: "center", style: { color: "#444", fontWeight: "500" } },
};
(chart = new ApexCharts(document.querySelector("#column_chart_datalabel4"), options)).render();

var columnDatalabelColors = getChartColorsArray("#column_chart_datalabel5"),
options = {
    chart: { height: 350, type: "bar", toolbar: { show: !1 } },
    plotOptions: { bar: { borderRadius: 10, dataLabels: { position: "top" } } },
    dataLabels: {
        enabled: !0,
        formatter: function (e) {
            return e + "%";
        },
        offsetY: -22,
        style: { fontSize: "12px", colors: ["#304758"] },
    },
    series: [{ name: "Inflation", data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, 0.8] }],
    colors: columnDatalabelColors,
    grid: { borderColor: "#f1f1f1" },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        labels: { offsetY: -18 },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        crosshairs: { fill: { type: "gradient", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } } },
        tooltip: { enabled: !0, offsetY: -35 },
    },
    yaxis: {
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
            show: !1,
            formatter: function (e) {
                return e + "%";
            },
        },
    },
    title: { text: "Monthly Inflation in Argentina, 2002", floating: !0, offsetY: 330, align: "center", style: { color: "#444", fontWeight: "500" } },
};
(chart = new ApexCharts(document.querySelector("#column_chart_datalabel5"), options)).render();




var pieColors = getChartColorsArray("#pie_chart"),
    options = {
        chart: { height: 320, type: "pie" },
        series: [44, 55, 41],
        labels: ["Series 1", "Series 2", "Series 3"],
        colors: pieColors,
        legend: { show: !0, position: "bottom", horizontalAlign: "center", verticalAlign: "middle", floating: !1, fontSize: "14px", offsetX: 0 },
        responsive: [{ breakpoint: 600, options: { chart: { height: 240 }, legend: { show: !1 } } }],
    };
(chart = new ApexCharts(document.querySelector("#pie_chart"), options)).render();

var pieColors = getChartColorsArray("#pie_chart2"),
    options = {
        chart: { height: 320, type: "pie" },
        series: [44, 55, 41],
        labels: ["Series 1", "Series 2", "Series 3"],
        colors: pieColors,
        legend: { show: !0, position: "bottom", horizontalAlign: "center", verticalAlign: "middle", floating: !1, fontSize: "14px", offsetX: 0 },
        responsive: [{ breakpoint: 600, options: { chart: { height: 240 }, legend: { show: !1 } } }],
    };
(chart = new ApexCharts(document.querySelector("#pie_chart2"), options)).render();

var pieColors = getChartColorsArray("#pie_chart3"),
    options = {
        chart: { height: 320, type: "pie" },
        series: [44, 55, 41],
        labels: ["Series 1", "Series 2", "Series 3"],
        colors: pieColors,
        legend: { show: !0, position: "bottom", horizontalAlign: "center", verticalAlign: "middle", floating: !1, fontSize: "14px", offsetX: 0 },
        responsive: [{ breakpoint: 600, options: { chart: { height: 240 }, legend: { show: !1 } } }],
    };
(chart = new ApexCharts(document.querySelector("#pie_chart3"), options)).render();

var pieColors = getChartColorsArray("#pie_chart4"),
    options = {
        chart: { height: 320, type: "pie" },
        series: [44, 55, 41],
        labels: ["Series 1", "Series 2", "Series 3"],
        colors: pieColors,
        legend: { show: !0, position: "bottom", horizontalAlign: "center", verticalAlign: "middle", floating: !1, fontSize: "14px", offsetX: 0 },
        responsive: [{ breakpoint: 600, options: { chart: { height: 240 }, legend: { show: !1 } } }],
    };
(chart = new ApexCharts(document.querySelector("#pie_chart4"), options)).render();

 


 