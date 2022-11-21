/*! finance-1.js | Huro | Css ninja 2020-2021 */
"use strict";
$(document).ready((function() {
  var e = {
    series: [{
      name: "Revenue",
      data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648]
    }],
    chart: {
      height: 250,
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
      curve: "smooth"
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: .5
      }
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
    },
    tooltip: {
      y: {
        formatter: function(e) {
          return "$" + e
        }
      }
    }
  };
  new ApexCharts(document.querySelector("#revenue-chart"), e).render();
  var t = {
    series: [57, 86],
    chart: {
      height: 220,
      type: "radialBar",
      offsetY: -10
    },
    colors: [themeColors.accent, themeColors.purple],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        inverseOrder: !0,
        dataLabels: {
          show: !0,
          name: {
            show: !0,
            fontSize: "14px",
            fontWeight: 500,
            offsetY: -10
          },
          value: {
            show: !0,
            fontWeight: 600,
            color: themeColors.lightText,
            fontSize: "16px",
            offsetY: -5
          },
          total: {
            show: !0,
            fontSize: "14px",
            fontWeight: 500,
            color: themeColors.lightText
          }
        },
        hollow: {
          margin: 15,
          size: "75%"
        },
        track: {
          strokeWidth: "100%"
        }
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Efficiency", "Productivity"]
  };
  new ApexCharts(document.querySelector("#goal-gauge"), t).render();
  var o = [{
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }];
  o = o.map((function(e) {
    return {
      name: e.name,
      data: e.data.map((function(e) {
        return e - 70
      }))
    }
  }));
  var r = {
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: !1
      }
    },
    colors: [themeColors.accent, themeColors.purple, themeColors.orange],
    legend: {
      position: "top"
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        endingShape: "rounded",
        columnWidth: "55%"
      }
    },
    dataLabels: {
      enabled: !1
    },
    stroke: {
      show: !0,
      width: 2,
      colors: ["transparent"]
    },
    series: o,
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
    },
    yaxis: {
      labels: {
        formatter: function(e) {
          return e + 70
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(e) {
          return e + 70
        }
      }
    }
  };
  new ApexCharts(document.querySelector("#profit-chart"), r).render();
  var a = {
    series: [65],
    chart: {
      height: 160,
      type: "radialBar",
      toolbar: {
        show: !1
      }
    },
    colors: [themeColors.purple],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "75%"
        },
        dataLabels: {
          show: !0,
          name: {
            show: !0,
            fontSize: "14px",
            fontWeight: 500,
            offsetY: -10,
            color: themeColors.lightText
          },
          value: {
            show: !0,
            fontWeight: 600,
            color: themeColors.purple,
            fontSize: "16px",
            offsetY: -5
          }
        }
      }
    },
    labels: ["Growth"]
  };
  new ApexCharts(document.querySelector("#radial-circle"), a).render()
}));