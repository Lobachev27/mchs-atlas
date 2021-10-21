/*Sidebar*/

$(document).ready(function() {
  $('.sidebar').hover(
    function(){
      $(this).addClass('active');
      $(".main").addClass('active');
    },
    function(){
      $(this).removeClass('active');
      $(".main").removeClass('active');
      $(".sidebar__nav-box").removeClass('active');
    }
  );

  $('div.sidebar__nav-link').click(function(){
    if ($(this).parent().hasClass('active')){
      $(this).parent().removeClass('active');
    } else {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

/*Header search*/

$(document).ready(function() {
  $(".header .search svg").on("click", function() {
    $(this).parent().toggleClass("active");
  });
});

/*Раскрытие фильтра*/

$(document).ready(function() {
  $('.filter__icon').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).parent().next().removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).parent().next().addClass('active');
    }
  });
});

$(document).mouseup(function (e){
  var el = $(".select");
  if (!el.is(e.target) && el.has(e.target).length === 0) {
    el.removeClass('active');
    $('.select-copy').text('');
  }
});

/*Раскрытие селекта*/

$(document).ready(function() {
  $('.select-simple .select-main').click(function(){
    if($(this).parent().hasClass('disabled')){
    } else {
      $('.select').removeClass('active');
      $(this).parent().addClass('active');
      let txt1 = $(this).text();
      console.log(txt1);
      $(this).next().html("<span>" + txt1 + "</span>");
      console.log($(this).next().text());
    }
  });

  $('.select-simple-input .select-main').click(function(){
    if($(this).parent().hasClass('disabled')){
    } else {
      $('.select').removeClass('active');
      $(this).parent().addClass('active');
    }
  });

  $('.select-multi .select-main').click(function(){
    $('.select').removeClass('active');
    $(this).parent().addClass('active');
  });

  $('.select-simple .select-item').click(function(){
    $('.select-simple').removeClass('active');
    let txt = $(this).text();
    $(this).parent().parent().prev().prev().children('span').text(txt);
    $('.select-copy').text('');
  });

  $('.select-simple-input .select-item').click(function(){
    $('.select-simple-input').removeClass('active');
    let txt = $(this).text();
    let src = $(this).children().attr("src");
    $(this).parent().parent().prev().children('span').text(txt);
    $(this).parent().parent().prev().children('img').attr("src", src);
  });

  $('.select-simple .select-close').click(function(){
    $(this).parent().parent().removeClass('active')
  });

  $('.select-simple-input .select-close').click(function(){
    $(this).parent().removeClass('active')
  });

  $('.select-multi .select-close').click(function(){
    $(this).parent().removeClass('active')
  });
});

/*Изменение размера элементов в таблице*/

$(document).ready(function() {
  $(".view__item svg").on("click", function() {
    $(this).parent()
      .addClass("active")
      .siblings()
      .removeClass("active");

    if ($(".view__item-max").hasClass("active")){
      $(".table").removeClass("table-view-mid");
      $(".table").removeClass("table-view-min");
      $(".table").addClass("table-view-max");
    }

    if ($(".view__item-mid").hasClass("active")){
      $(".table").removeClass("table-view-max");
      $(".table").removeClass("table-view-min");
      $(".table").addClass("table-view-mid");
    }

    if ($(".view__item-min").hasClass("active")){
      $(".table").removeClass("table-view-max");
      $(".table").removeClass("table-view-mid");
      $(".table").addClass("table-view-min");
    }
  });
});

/*В таблице изменять класс строки при изменении чекбокса*/

$(document).ready(function() {
  $('.table__item-col.col-checkbox input:checkbox').change(function(){
    if($(this).is(":checked")) {
      $(this).parent().parent().parent().addClass("checked");
    } else {
      $(this).parent().parent().parent().removeClass("checked");
    }
  });
});

/*Раскрытие строки таблицы*/

$(document).ready(function() {
  $(".table__item-box.box-parent .icon-arrow").on("click", function() {
    if ($(this).parent().parent().hasClass('open')){
      $(this).parent().parent().removeClass('open');
      console.log($(this).parent().parent())
    } else {
      $(this).parent().parent().addClass('open');
      console.log($(this).parent().parent())
    }
  });
});

/*Инпут со временем*/

$(document).ready(function() {
  $(".input.input-time").on("click", function() {
    $(this).addClass('active');
  });

  $(".input__box .input-close").on("click", function() {
    $(this).prev().prev().removeClass('active');
  });
});

$(document).mouseup(function (e){
  var el = $(".input.input-time");
  if (!el.next().is(e.target) && el.next().has(e.target).length === 0) {
    el.removeClass('active');
  }
});

/*Popup*/

$(document).ready(function() {
  $('.table .table__item-col.col-name span').click(function(){
    $('#popupInfo').addClass('open');
    $('.table .table__item-box').removeClass('active');
    $(this).parent().parent().addClass('active');
  });
  $('.table .table__topic-col.col-action .icon-setting').click(function(){
    $('#popupSetting').addClass('open');
  });
  $('.popup-close').click(function(){
    $('.popup').removeClass('open');
    $('.table .table__item-box').removeClass('active');
  });
});

/*Раскрытие popup__part*/

$(document).ready(function() {
  $('.popup__part-caption').click(function(){
    if ($(this).parent().hasClass('open')){
      $(this).parent().removeClass('open');
    } else {
      $(this).parent().addClass('open');
    }
  });
});

/*Табы инцидентов*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.popup__container');
    tabContainers.hide().filter(':first').show();
    $('.popup__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.popup__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });
});

/*range slider*/

$(document).ready(function() {
  $( function() {
    $( ".range-input" ).slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 255,
        value: 127,
      });

    $( ".range-multi .range-multi-row > span" ).each(function() {
      var value = parseInt( $( this ).text(), 10 );
      $( this ).empty().slider({
        value: 0,
        min: 0,
        max: 255,
        animate: true,
        orientation: "horizontal"
      });
    });
  } );
});

/*Графики*/

$(document).ready(function() {

  Chart.defaults.global.defaultFontSize = 12;

  var graph1 = document.getElementById("graph-1").getContext('2d')
  var graph2 = document.getElementById("graph-2").getContext('2d')
  var graph3 = document.getElementById("graph-3").getContext('2d')

  var gradient1 = graph1.createLinearGradient(0, 0, 0, 220);
      gradient1.addColorStop(0, 'rgba(94, 147, 252, 0.5)');
      gradient1.addColorStop(1, 'rgba(94, 147, 252, 0)');

  var gradient2 = graph1.createLinearGradient(0, 0, 0, 220);
      gradient2.addColorStop(0, 'rgba(223, 231, 239, 0.8)');
      gradient2.addColorStop(1, 'rgba(223, 231, 239, 0.3)');

  var chart1 = new Chart(graph1, {
    type: 'line',
    data: {
      labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      datasets: [
        {
          label: "1",
          backgroundColor: gradient1,
          hoverBackgroundColor: gradient1,
          borderColor: '#5e93fc',
          borderWidth: 3,
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          data: [1752, 2104, 3987, 10000, 5721, 3439, 3734, 1864, 1895, 1948, 3378, 3943]
        },{
          label: "2",
          backgroundColor: gradient2,
          hoverBackgroundColor: gradient2,
          borderColor: '#dfe7ef',
          borderWidth: 3,
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          data: [1863, 2104, 2787, 4000, 4321, 4139, 6034, 6164, 3995, 3848, 2278, 1243]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            borderDash: [4, 4],
            color: "#b9c2d1"
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            stepSize: 2000
          },
          gridLines: {
            borderDash: [4, 4],
            color: "#b9c2d1"
          }
        }]
      }
    }
  });

  var chart2 = new Chart(graph2, {
    type: 'bar',
    data: {
      labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      datasets: [{
        label: '1',
        backgroundColor: "#9ee379",
        data: [2000, 1600, 900, 500, 900, 900, 1600, 2000, 2400, 3000, 4000, 3500],
      }, {
        label: '2',
        backgroundColor: "#5e93fc",
        data: [5700, 5600, 6400, 7200, 6800, 7100, 6400, 5700, 4800, 4300, 4400, 4500],
      }, {
        label: '3',
        backgroundColor: "#dfe7ef",
        data: [2300, 2800, 2700, 2300, 2300, 2000, 2000, 2300, 2800, 2700, 1600, 2000],
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [{
          barPercentage: 0.3,
          stacked: true,
          gridLines: {
            borderDash: [4, 4],
            color: "#b9c2d1"
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            min: 0,
            max: 10000,
            stepSize: 2000
          },
          gridLines: {
            borderDash: [4, 4],
            color: "#b9c2d1"
          }
        }]
      }
    }
  });

  var chart3 = new Chart(graph3, {
    type: 'bar',
    data: {
      labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      datasets: [{
        label: '1',
        backgroundColor: "#b188e5",
        data: [-5800, -6300, -7800, -8200, -8200, -7600, -6300, -6400, -5600, -6300, -7700, -8200],
      }, {
        label: '2',
        backgroundColor: "#5e93fc",
        data: [5200, 6000, 7000, 8000, 8000, 7100, 7200, 8000, 10000, 9100, 9100, 8000],
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [{
          barPercentage: 0.3,
          stacked: true,
          gridLines: {
            borderDash: [4, 4],
            color: "#b9c2d1"
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            min: -10000,
            max: 10000,
            stepSize: 2000
          },
          gridLines: {
            borderDash: [4, 4],
            color: "#b9c2d1"
          }
        }]
      }
    }
  });

});

anychart.onDocumentReady(function () {

  // create data
  var data = [
    {x: "Янв", y: "10000", heat: ""},
    {x: "Янв", y: "8000", heat: 213},
    {x: "Янв", y: "6000", heat: 76},
    {x: "Янв", y: "4000", heat: ""},
    {x: "Янв", y: "2000", heat: ""},
    {x: "Фев", y: "10000", heat: 435},
    {x: "Фев", y: "8000", heat: ""},
    {x: "Фев", y: "6000", heat: ""},
    {x: "Фев", y: "4000", heat: 56},
    {x: "Фев", y: "2000", heat: ""},
    {x: "Мар", y: "10000", heat: 218},
    {x: "Мар", y: "8000", heat: ""},
    {x: "Мар", y: "6000", heat: 142},
    {x: "Мар", y: "4000", heat: 39},
    {x: "Мар", y: "2000", heat: ""},
    {x: "Апр", y: "10000", heat: ""},
    {x: "Апр", y: "8000", heat: 109},
    {x: "Апр", y: "6000", heat: ""},
    {x: "Апр", y: "4000", heat: 26},
    {x: "Апр", y: "2000", heat: 19},
    {x: "Май", y: "10000", heat: ""},
    {x: "Май", y: "8000", heat: 57},
    {x: "Май", y: "6000", heat: 76},
    {x: "Май", y: "4000", heat: ""},
    {x: "Май", y: "2000", heat: ""},
    {x: "Июн", y: "10000", heat: ""},
    {x: "Июн", y: "8000", heat: ""},
    {x: "Июн", y: "6000", heat: ""},
    {x: "Июн", y: "4000", heat: 34},
    {x: "Июн", y: "2000", heat: ""},
    {x: "Июл", y: "10000", heat: ""},
    {x: "Июл", y: "8000", heat: ""},
    {x: "Июл", y: "6000", heat: 87},
    {x: "Июл", y: "4000", heat: 73},
    {x: "Июл", y: "2000", heat: ""},
    {x: "Авг", y: "10000", heat: 224},
    {x: "Авг", y: "8000", heat: ""},
    {x: "Авг", y: "6000", heat: 93},
    {x: "Авг", y: "4000", heat: 40},
    {x: "Авг", y: "2000", heat: ""},
    {x: "Сен", y: "10000", heat: 206},
    {x: "Сен", y: "8000", heat: ""},
    {x: "Сен", y: "6000", heat: ""},
    {x: "Сен", y: "4000", heat: 55},
    {x: "Сен", y: "2000", heat: ""},
    {x: "Окт", y: "10000", heat: ""},
    {x: "Окт", y: "8000", heat: 61},
    {x: "Окт", y: "6000", heat: 104},
    {x: "Окт", y: "4000", heat: ""},
    {x: "Окт", y: "2000", heat: 8},
    {x: "Ноя", y: "10000", heat: ""},
    {x: "Ноя", y: "8000", heat: 98},
    {x: "Ноя", y: "6000", heat: ""},
    {x: "Ноя", y: "4000", heat: ""},
    {x: "Ноя", y: "2000", heat: 4},
    {x: "Дек", y: "10000", heat: 301},
    {x: "Дек", y: "8000", heat: ""},
    {x: "Дек", y: "6000", heat: ""},
    {x: "Дек", y: "4000", heat: 27},
    {x: "Дек", y: "2000", heat: ""},
  ];

  // create a chart and set the data
  var chart = anychart.heatMap(data);

  chart.hovered().fill("#32436a", 1);
  chart.selected().fill("#32436a", 1);
  chart.normal().stroke("#fff");
  chart.hovered().stroke("#fff");
  chart.selected().stroke("#fff", 1);
  chart.xAxis().orientation("bottom");
  chart.xAxis().labels().fontSize('11px');
  chart.yAxis().labels().fontSize('11px');

  var background = chart.background();
  background.fill('#f8fafc');

  var labels = chart.labels();
  labels.fontColor('#ffffff');
  labels.fontSize('11px');

  var customColorScale = anychart.scales.linearColor();
  customColorScale.colors(["#f8fafc", "#5e93fc"]);
  chart.colorScale(customColorScale);

  chart.tooltip(false);

  // set the container id
  chart.container("graph-4");

  // initiate drawing the chart
  chart.draw();
});

/*График внутри таблицы*/

/*Графики*/

$(document).ready(function() {

  Chart.defaults.global.defaultFontSize = 12;

  var tbG1 = document.getElementById("table-graph-1");
  var tbG2 = document.getElementById("table-graph-2");
  var tbG3 = document.getElementById("table-graph-3");
  var tbG4 = document.getElementById("table-graph-4");
  var tbG5 = document.getElementById("table-graph-5");
  var tbG6 = document.getElementById("table-graph-6");
  var tbG7 = document.getElementById("table-graph-7");
  var tbG8 = document.getElementById("table-graph-8");
  var tbG9 = document.getElementById("table-graph-9");
  var tbG10 = document.getElementById("table-graph-10");
  var tbG11 = document.getElementById("table-graph-11");
  var tbG12 = document.getElementById("table-graph-12");
  var tbG13 = document.getElementById("table-graph-13");
  var tbG14 = document.getElementById("table-graph-14");
  var tbG15 = document.getElementById("table-graph-15");

  var setting = {
    type: 'line',
    data: {
      labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      datasets: [
        {
          label: "1",
          /*backgroundColor: tbGradient1,
          hoverBackgroundColor: tbGradient1,*/

          backgroundColor: 'rgba(94, 147, 252, 0.2)',
          hoverBackgroundColor: 'rgba(94, 147, 252, 0.2)',
          borderColor: '#5e93fc',
          borderWidth: 1,
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          data: [1752, 2104, 3987, 10000, 5721, 3439, 3734, 1864, 1895, 1948, 3378, 3943,]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  }

  var chartTb1 = new Chart(tbG1, setting);
  var chartTb2 = new Chart(tbG2, setting);
  var chartTb3 = new Chart(tbG3, setting);
  var chartTb4 = new Chart(tbG4, setting);
  var chartTb5 = new Chart(tbG5, setting);
  var chartTb6 = new Chart(tbG6, setting);
  var chartTb7 = new Chart(tbG7, setting);
  var chartTb8 = new Chart(tbG8, setting);
  var chartTb9 = new Chart(tbG9, setting);
  var chartTb10 = new Chart(tbG10, setting);
  var chartTb11 = new Chart(tbG11, setting);
  var chartTb12 = new Chart(tbG12, setting);
  var chartTb13 = new Chart(tbG13, setting);
  var chartTb14 = new Chart(tbG14, setting);
  var chartTb15 = new Chart(tbG15, setting);

});
