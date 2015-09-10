$(document).ready(function () {
    var Source1Id = $("#Source1Id")[0].value;
    var Source2Id = $("#Source2Id")[0].value;
    $(function () {
        $.ajax({
            type: 'GET',
            url: '/Conductivity/ConductivityPlot',
            data: { USGSID: Source1Id },
            success: function (jsonData) {
                var Data = new Array();
                for (var i = 0 ; i < jsonData.length ; i++) {
                    var parsedDate1 = new Date(parseInt(jsonData[0].Key.substr(6)));
                    var jsDate1 = new Date(parsedDate1);
                    var ConductivityData = new Object();
                    ConductivityData = jsonData[i];
                    Data.push(ConductivityData.Value);
                }
                $('#Conductivity_Source_1').empty();
                $('#Conductivity_Source_1').highcharts(
                    'StockChart', {

                        rangeSelector: {
                            selected: 5
                        },

                    
                    chart: {
                        type: 'spline',
                        zoomType: 'x',
                        width: 630,
                        height: 300
                    },
                    xAxis: {
                        type: 'datetime',
                        tickInterval: 24 * 3600 * 1000 * 90,
                        title: {
                            text: 'Date'
                        }
                    },                  
                    yAxis: {
                        title: {
                            text: 'Conductivity'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        shared: true,
                        crosshairs: true
                    },
                    plotOptions: {
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function (e) {
                                        
                                    }
                                }
                            },
                            marker: {
                                enabled: false,
                                lineWidth: 1
                            }
                        }
                    },
                    legend: {
                        enabled: true,
                        layout: 'vertical',
                        borderWidth: 1
                    },
                    series: [{
                        name: 'Conductivity',
                        pointInterval: 24 * 3600 * 1000,
                        pointStart: Date.UTC(jsDate1.getUTCFullYear(), jsDate1.getUTCMonth(), jsDate1.getUTCDay(), 0, 0, 0, 0),
                        data: Data
                    }]
                });
            }
        });
    });

    if (Source2Id != "") {
        $(function () {
            $.ajax({
                type: 'GET',
                url: '/Conductivity/ConductivityPlot',
                data: { USGSID: Source2Id },
                success: function (jsonData) {
                    var Data = new Array();
                    for (var i = 0 ; i < jsonData.length ; i++) {
                        var ConductivityData = new Object();
                        ConductivityData = jsonData[i];
                        Data.push(ConductivityData.Value);
                    }
                    $('#Conductivity_Source_2').empty();
                    if (jsonData.length > 0) {
                        var parsedDate2 = new Date(parseInt(jsonData[0].Key.substr(6)));
                        var jsDate2 = new Date(parsedDate2);
                        $('#Conductivity_Source_2').highcharts('StockChart', {

                            rangeSelector: {
                                selected: 5
                            },
                            chart: {
                                type: 'spline',
                                zoomType: 'x',
                                width: 630,
                                height: 300
                            },
                            xAxis: {
                                type: 'datetime',
                                tickInterval: 24 * 3600 * 1000 * 90,
                                title: {
                                    text: 'Date'
                                }
                            },
                            yAxis: {
                                title: {
                                    text: 'Conductivity'
                                }
                            },
                            credits: {
                                enabled: false
                            },
                            tooltip: {
                                shared: true,
                                crosshairs: true
                            },
                            plotOptions: {
                                series: {
                                    cursor: 'pointer',
                                    point: {
                                        events: {
                                            click: function (e) {

                                            }
                                        }
                                    },
                                    marker: {
                                        enabled: false,
                                        lineWidth: 1
                                    }
                                }
                            },
                            legend: {
                                enabled: true,
                                layout: 'vertical',
                                borderWidth: 1
                            },
                            series: [{
                                name: 'Conductivity',
                                pointInterval: 24 * 3600 * 1000,
                                pointStart: Date.UTC(jsDate2.getUTCFullYear(), jsDate2.getUTCMonth(), jsDate2.getUTCDay(), 0, 0, 0, 0),
                                data: Data
                            }]
                        });
                    }
                    else {
                        $('#Conductivity_Source_2').html('<div class="nodataimg" ></div>');
                    }
                }
            });
        });
    }
    $(function () {
        var now = new Date();
        var utc_timestamp = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
        
        $.ajax({
            type: 'GET',
            url: '/Conductivity/ForecastPlot',
            data: { USGSID: Source1Id },
            success: function (jsonData) {
                var BestCase = new Array();
                var WorstCase = new Array();
                for (var i = 0 ; i < jsonData.AverageForecastData.length ; i++) {
                    var BestData = new Object();
                    var WorstData = new Object();
                    BestData = jsonData.AverageForecastData[i];
                    WorstData = jsonData.MaximumForecastData[i];
                    BestCase.push(BestData.cond);
                    WorstCase.push(WorstData.cond)
                }
                $('#Forecast_Source_1').empty();
                $('#Forecast_Source_1').highcharts('StockChart', {

                    rangeSelector: {
                        selected: 1,
                    },
                    chart: {
                        type: 'spline',
                        zoomType: 'x',
                        width: 630,
                        height: 300
                    },
                    xAxis: {
                        type: 'datetime',
                        tickInterval: 24 * 3600 * 1000 * 21,
                        title: {
                            text: 'Date'
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Conductivity'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        shared: true,
                        crosshairs: true
                    },
                    plotOptions: {
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function (e) {
                                        
                                    }
                                }
                            },
                            marker: {
                                enabled:false,
                                lineWidth: 1
                            }
                        }
                    },
                    legend: {
                        enabled: true,
                        layout: 'horizontal',
                        borderWidth: 1
                    },
                    series: [{
                        name: 'WorstCase',
                        pointInterval: 24 * 3600 * 1000,
                        pointStart: utc_timestamp,
                        data: WorstCase,
                        color: '#FF0000'
                    },{
                        name: 'Expected',
                        pointInterval: 24 * 3600 * 1000,
                        pointStart: utc_timestamp,
                        data: BestCase
                    }]
                });
            }
        });
    });
})