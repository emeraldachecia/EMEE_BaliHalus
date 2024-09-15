var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// Bar-charts
var options = {
    series: [{
        data: [400, 430, 448],
        name: "Service",
  }],
    chart: {
        type: 'bar',
        background: 'transparent',
        height: 350,
        toolbar: {
            show: false,
        }
    },
    colors: [
        "#2962ff",
        "#d50000",
        "#2e7d32",
        "#ff6d00",
        "#583cb3",
    ],
  plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: "40%",
    }
  },
  dataLabels: {
    enabled: false
    },
  fill: {
    opacity: 1, 
    },
  grid: {
    borderColor: "#55596e",
    yaxis: {
        lines: {
            show: true,
        },
      },
      xaxis: {
          lines: {
            show: true,
        },
    },
  },
    legend: {
        labels: {
          colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
  xaxis: {
      categories: ['Spa', 'Body Massage', 'Refleksi'],
      title: {
          style: {
              color: "#f5f7ff",
        },
      },
      axisborder: {
        show: true,
        color: "#55596e",
      },
      axisTicks: {
          show: true,
          color: "#55596e",
      },
      labels: {
          style: {
              colors: "#f5f7ff",
          },
        },
    },
    yaxis: {
        title: {
            text: "Count",
            style: {
                color: "#f5f7ff",
            },
        },
        axisborder: {
            color: "#55596e",
            show: true,
          },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    }
  };

document.addEventListener('DOMContentLoaded', function () {
    var barChart = new ApexCharts(document.querySelector("#bar-chart"), options);
    barChart.render();
});


// Area charts for order
var areaChartOptions = {
    series: [{
        name: 'Franchise Kuta',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 27]
    }, {
        name: 'Franchise Ubud',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 70]
    }],
    chart: {
        type: "area",
        background: "transparent",
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ["#00ab57", "#d50000"],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: "vertical",
        },
        type: "gradient",
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    markers: {
        size: 6,
        strokeColors: "1b2635",
        strokeWidth: 3,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            offSetY: 5,
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: [
        {
            title: {
                text: "Sales Order A",
                style: {
                    color: "#f5f7ff",
                },
            },
            labels: {
                style: {
                    colors: ["#f5f7ff"],
                },
            },
        },
        {
            opposite: true,
            title: {
                text: "Sales Order B",
                style: {
                    color: "#f5f7ff",
                },
            },
            labels: {
                style: {
                    colors: ["#f5f7ff"],
                },
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
};
  
document.addEventListener('DOMContentLoaded', function () {
    var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
   areaChart.render();
});
