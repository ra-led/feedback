/*! apex.js | Huro | Css ninja 2020-2021 */
"use strict";
$(document).ready((function() {
  if ($("#apex-chart-1").length) {
    var e = {
      series: [{
        name: "Sales",
        data: [105, 414, 357, 511, 497, 621, 695, 912, 748]
      }],
      chart: {
        height: 280,
        type: "line",
        zoom: {
          enabled: !1
        },
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent],
      dataLabels: {
        enabled: !1
      },
      stroke: {
        width: [2, 2, 2],
        curve: "straight"
      },
      title: {
        text: "Line Chart",
        align: "left"
      },
      grid: {
        row: {
          colors: ["transparent", "transparent"],
          opacity: .5
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-1"), e).render()
  }
  if ($("#apex-chart-2").length) {
    var t = {
      series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      }, {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      }, {
        name: "Total Visits",
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }],
      chart: {
        height: 280,
        type: "line",
        zoom: {
          enabled: !1
        },
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
      dataLabels: {
        enabled: !1
      },
      stroke: {
        width: [2, 2, 2],
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Multiple Lines",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function(e, t) {
          return e + " - " + t.w.globals.series[t.seriesIndex][t.dataPointIndex]
        },
        position: "top"
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      tooltip: {
        y: [{
          title: {
            formatter: function(e) {
              return e + " (mins)"
            }
          }
        }, {
          title: {
            formatter: function(e) {
              return e + " per session"
            }
          }
        }, {
          title: {
            formatter: function(e) {
              return e
            }
          }
        }]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-2"), t).render()
  }
  if ($("#apex-chart-4").length) {
    var a = {
      series: [{
        name: "New members",
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79]
      }],
      chart: {
        type: "line",
        height: 280,
        toolbar: {
          show: !1
        }
      },
      stroke: {
        width: [2, 2, 2],
        curve: "stepline"
      },
      colors: [themeColors.accent],
      dataLabels: {
        enabled: !1
      },
      title: {
        text: "Stepline Chart",
        align: "left"
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-4"), a).render()
  }
  if ($("#apex-chart-5").length) {
    var o = {
      series: [{
        name: "Balance",
        data: series.monthDataSeries1.prices
      }],
      chart: {
        type: "area",
        height: 280,
        zoom: {
          enabled: !1
        },
        toolbar: {
          show: !1
        }
      },
      dataLabels: {
        enabled: !1
      },
      stroke: {
        width: [2, 2, 2],
        curve: "straight"
      },
      colors: [themeColors.accent],
      title: {
        text: "Area Chart",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: !0
      },
      legend: {
        horizontalAlign: "left"
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-5"), o).render()
  }
  if ($("#apex-chart-6").length) {
    var r = {
      series: [{
        name: "Completed",
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: "Pending",
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chart: {
        height: 280,
        type: "area",
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
      title: {
        text: "Multiple Area",
        align: "left"
      },
      legend: {
        position: "top"
      },
      dataLabels: {
        enabled: !1
      },
      stroke: {
        width: [2, 2, 2],
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-6"), r).render()
  }
  if ($("#apex-chart-7").length) {
    for (var n = 13885344e5, l = 13886208e5, s = 13890528e5, i = [
        [],
        [],
        []
      ], h = 0; h < 12; h++) {
      var c = [n += 864e5, dataSeries[2][h].value];
      i[0].push(c)
    }
    for (h = 0; h < 18; h++) {
      c = [l += 864e5, dataSeries[1][h].value];
      i[1].push(c)
    }
    for (h = 0; h < 12; h++) {
      c = [s += 864e5, dataSeries[0][h].value];
      i[2].push(c)
    }
    var m = {
      series: [{
        name: "Desktops",
        data: i[0]
      }, {
        name: "Phones",
        data: i[1]
      }, {
        name: "Tablets",
        data: i[2]
      }],
      chart: {
        type: "area",
        stacked: !1,
        height: 280,
        zoom: {
          enabled: !1
        },
        toolbar: {
          show: !1
        }
      },
      dataLabels: {
        enabled: !1
      },
      markers: {
        size: 0
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: .45,
          opacityTo: .05,
          stops: [20, 100, 100, 100]
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: "#8e8da4"
          },
          offsetX: 0,
          formatter: function(e) {
            return (e / 1e6).toFixed(2)
          }
        },
        axisBorder: {
          show: !1
        },
        axisTicks: {
          show: !1
        }
      },
      xaxis: {
        type: "datetime",
        tickAmount: 8,
        min: new Date("01/01/2014").getTime(),
        max: new Date("01/20/2014").getTime(),
        labels: {
          rotate: -15,
          rotateAlways: !0,
          formatter: function(e, t) {
            return moment(new Date(t)).format("DD MMM YYYY")
          }
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
      title: {
        text: "Multiple Areas",
        align: "left"
      },
      tooltip: {
        shared: !0
      },
      stroke: {
        width: [2, 2, 2]
      },
      legend: {
        position: "top",
        horizontalAlign: "center"
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-7"), m).render()
  }
  if ($("#apex-chart-8").length) {
    var p = {
      series: [{
        name: "Inflation",
        data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.3, 1.4, .8, .5, .2]
      }],
      chart: {
        height: 280,
        type: "bar",
        toolbar: {
          show: !1
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: !0,
        formatter: function(e) {
          return e + "%"
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        axisBorder: {
          show: !1
        },
        axisTicks: {
          show: !1
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: .4,
              opacityTo: .5
            }
          }
        },
        tooltip: {
          enabled: !0
        }
      },
      yaxis: {
        axisBorder: {
          show: !1
        },
        axisTicks: {
          show: !1
        },
        labels: {
          show: !1,
          formatter: function(e) {
            return e + "%"
          }
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
      title: {
        text: "Bar Chart",
        align: "left"
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-8"), p).render()
  }
  if ($("#apex-chart-9").length) {
    var d = {
      series: [{
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      chart: {
        type: "bar",
        height: 280,
        toolbar: {
          show: !1
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple],
      dataLabels: {
        enabled: !1
      },
      stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "center"
      },
      title: {
        text: "Multiple Bars",
        align: "left"
      },
      tooltip: {
        y: {
          formatter: function(e) {
            return "$ " + e + "K"
          }
        }
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-9"), d).render()
  }
  if ($("#apex-chart-10").length) {
    var g = {
      series: [{
        name: "Desktops",
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: "Phones",
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: "Tablets",
        data: [11, 17, 15, 15, 21, 14]
      }, {
        name: "Hybrid",
        data: [21, 7, 25, 13, 22, 8]
      }],
      chart: {
        type: "bar",
        height: 280,
        stacked: !0,
        toolbar: {
          show: !1
        },
        zoom: {
          enabled: !0
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: "top"
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: !1
        }
      },
      xaxis: {
        type: "datetime",
        categories: ["01/01/2011 GMT", "01/02/2011 GMT", "01/03/2011 GMT", "01/04/2011 GMT", "01/05/2011 GMT", "01/06/2011 GMT"]
      },
      title: {
        text: "Stacked Bars",
        align: "left"
      },
      legend: {
        position: "top",
        horizontalAlign: "center"
      },
      fill: {
        opacity: 1
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-10"), g).render()
  }
  if ($("#apex-chart-11").length) {
    var x = {
      series: [{
        name: "Corporate",
        data: [{
          x: "Team A",
          y: [1, 5]
        }, {
          x: "Team B",
          y: [4, 6]
        }, {
          x: "Team C",
          y: [5, 8]
        }, {
          x: "Team D",
          y: [3, 11]
        }]
      }, {
        name: "Service",
        data: [{
          x: "Team A",
          y: [2, 6]
        }, {
          x: "Team B",
          y: [1, 3]
        }, {
          x: "Team C",
          y: [7, 8]
        }, {
          x: "Team D",
          y: [5, 9]
        }]
      }],
      chart: {
        type: "rangeBar",
        height: 280,
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
      title: {
        text: "Range Column",
        align: "left"
      },
      plotOptions: {
        bar: {
          horizontal: !1
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "center"
      },
      dataLabels: {
        enabled: !0
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-11"), x).render()
  }
  if ($("#apex-chart-12").length) {
    var u = {
      series: [{
        name: "Spaceships",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chart: {
        type: "bar",
        height: 280,
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
      plotOptions: {
        bar: {
          horizontal: !0
        }
      },
      title: {
        text: "Horizontal Bar",
        align: "left"
      },
      dataLabels: {
        enabled: !1
      },
      xaxis: {
        categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-12"), u).render()
  }
  if ($("#apex-chart-13").length) {
    var C = {
      series: [{
        name: "Completed",
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        name: "Pending",
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      chart: {
        type: "bar",
        height: 280,
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.green],
      title: {
        text: "Horizontal Bar Multiple",
        align: "left"
      },
      plotOptions: {
        bar: {
          horizontal: !0,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: !0,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: !0,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
      },
      legend: {
        position: "top",
        horizontalAlign: "center"
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-13"), C).render()
  }
  if ($("#apex-chart-14").length) {
    var y = {
      series: [{
        data: [{
          x: "Analysis",
          y: [new Date("2019-02-27").getTime(), new Date("2019-03-04").getTime()],
          fillColor: themeColors.accent
        }, {
          x: "Design",
          y: [new Date("2019-03-04").getTime(), new Date("2019-03-08").getTime()],
          fillColor: themeColors.secondary
        }, {
          x: "Coding",
          y: [new Date("2019-03-07").getTime(), new Date("2019-03-10").getTime()],
          fillColor: themeColors.orange
        }, {
          x: "Testing",
          y: [new Date("2019-03-08").getTime(), new Date("2019-03-12").getTime()],
          fillColor: themeColors.info
        }, {
          x: "Deployment",
          y: [new Date("2019-03-12").getTime(), new Date("2019-03-17").getTime()],
          fillColor: themeColors.purple
        }]
      }],
      title: {
        text: "Timeline",
        align: "left"
      },
      chart: {
        height: 280,
        type: "rangeBar",
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
      plotOptions: {
        bar: {
          horizontal: !0,
          distributed: !0,
          dataLabels: {
            hideOverflowingLabels: !1
          }
        }
      },
      dataLabels: {
        enabled: !0,
        formatter: function(e, t) {
          var a = t.w.globals.labels[t.dataPointIndex],
            o = moment(e[0]),
            r = moment(e[1]).diff(o, "days");
          return a + ": " + r + "d"
        },
        style: {
          colors: ["#f3f4f5", "#fff"]
        }
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        show: !1
      },
      grid: {
        row: {
          colors: ["transparent"],
          opacity: 1
        }
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-14"), y).render()
  }
  if ($("#apex-chart-15").length) {
    var f = function(e, t, a) {
        for (var o = 0, r = []; o < t;) {
          var n = Math.floor(750 * Math.random()) + 1,
            l = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min,
            s = Math.floor(61 * Math.random()) + 15;
          r.push([n, l, s]), 864e5, o++
        }
        return r
      },
      b = {
        series: [{
          name: "Bubble1",
          data: f(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }, {
          name: "Bubble2",
          data: f(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }, {
          name: "Bubble3",
          data: f(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }, {
          name: "Bubble4",
          data: f(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }],
        chart: {
          height: 280,
          type: "bubble",
          toolbar: {
            show: !1
          }
        },
        colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
        dataLabels: {
          enabled: !1
        },
        fill: {
          opacity: .8
        },
        title: {
          text: "Bubble Chart"
        },
        xaxis: {
          tickAmount: 12,
          type: "category"
        },
        yaxis: {
          max: 70
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        }
      };
    new ApexCharts(document.querySelector("#apex-chart-15"), b).render()
  }
  if ($("#apex-chart-16").length) {
    var w = function(e, t, a) {
        for (var o = 0, r = []; o < t;) {
          var n = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min;
          r.push([e, n]), e += 864e5, o++
        }
        return r
      },
      T = {
        series: [{
          name: "Team 1",
          data: w(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }, {
          name: "Team 2",
          data: w(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }, {
          name: "Team 3",
          data: w(new Date("11 Feb 2017 GMT").getTime(), 30, {
            min: 10,
            max: 60
          })
        }, {
          name: "Team 4",
          data: w(new Date("11 Feb 2017 GMT").getTime(), 10, {
            min: 10,
            max: 60
          })
        }, {
          name: "Team 5",
          data: w(new Date("11 Feb 2017 GMT").getTime(), 30, {
            min: 10,
            max: 60
          })
        }],
        title: {
          text: "Scatter Chart"
        },
        chart: {
          height: 280,
          type: "scatter",
          zoom: {
            type: "xy"
          },
          toolbar: {
            show: !1
          }
        },
        colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
        dataLabels: {
          enabled: !1
        },
        grid: {
          xaxis: {
            lines: {
              show: !0
            }
          },
          yaxis: {
            lines: {
              show: !0
            }
          }
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          max: 70
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        }
      };
    new ApexCharts(document.querySelector("#apex-chart-16"), T).render()
  }
  if ($("#apex-chart-17").length) {
    var A = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 405,
        type: "pie"
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.info, themeColors.purple],
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 315,
            toolbar: {
              show: !1
            }
          },
          legend: {
            position: "top"
          }
        }
      }],
      legend: {
        position: "right",
        horizontalAlign: "center"
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-17"), A).render()
  }
  if ($("#apex-chart-18").length) {
    var v = {
      series: [44, 55, 41, 17, 15],
      title: {
        text: "Donut Chart"
      },
      chart: {
        width: 405,
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 280,
            toolbar: {
              show: !1
            }
          },
          legend: {
            position: "top"
          }
        }
      }],
      legend: {
        position: "right",
        horizontalAlign: "center"
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-18"), v).render()
  }
  if ($("#apex-chart-19").length) {
    var S = {
      series: [70],
      title: {
        text: "Radial Bar"
      },
      chart: {
        height: 295,
        type: "radialBar",
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Power"]
    };
    new ApexCharts(document.querySelector("#apex-chart-19"), S).render()
  }
  if ($("#apex-chart-20").length) {
    var M = {
      series: [44, 55, 67, 83],
      title: {
        text: "Radial Bar Multiple"
      },
      chart: {
        height: 295,
        type: "radialBar",
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: !0,
              label: "Total",
              formatter: function(e) {
                return 249
              }
            }
          }
        }
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"]
    };
    new ApexCharts(document.querySelector("#apex-chart-20"), M).render()
  }
  if ($("#apex-chart-21").length) {
    var D = {
      series: [67],
      title: {
        text: "Radial Bar Gauge"
      },
      chart: {
        height: 295,
        type: "radialBar",
        offsetY: -10,
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: void 0,
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: void 0,
              formatter: function(e) {
                return e + "%"
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: .15,
          inverseColors: !1,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: ["Median Ratio"]
    };
    new ApexCharts(document.querySelector("#apex-chart-21"), D).render()
  }
  if ($("#apex-chart-22").length) {
    var z = {
      series: [76],
      title: {
        text: "Radial Bar Gauge"
      },
      chart: {
        height: 295,
        type: "radialBar",
        sparkline: {
          enabled: !0
        },
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5,
            dropShadow: {
              enabled: !1,
              top: 2,
              left: 0,
              color: "#999",
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: !1
            },
            value: {
              offsetY: -2,
              fontSize: "22px"
            }
          }
        }
      },
      grid: {
        padding: {}
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: .1,
          inverseColors: !1,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      labels: ["Average Results"]
    };
    new ApexCharts(document.querySelector("#apex-chart-22"), z).render()
  }
  if ($("#apex-chart-23").length) {
    var B = {
      series: [{
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20]
      }],
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: !1
        }
      },
      colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.info],
      title: {
        text: "Radar Chart"
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"]
      }
    };
    new ApexCharts(document.querySelector("#apex-chart-23"), B).render()
  }
}));