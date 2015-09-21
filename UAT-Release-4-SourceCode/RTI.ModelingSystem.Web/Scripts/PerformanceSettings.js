

jQuery(document).ready(function () {
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#resinLifeExpectancySlider").slider({
                range: "min",
                value: settings_class.resin_life_expectancy,
                min: 0,
                max: 520,
                step: 52,
                slide: function (event, ui) {
                    $("#resinLifeExpectancy").text(ui.value);
                    if ($("#resinLifeExpectancy").text() == "0")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (0yr)");
                    else if ($("#resinLifeExpectancy").text() == "52")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (1yr)");
                    else if ($("#resinLifeExpectancy").text() == "104")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (2yrs)");
                    else if ($("#resinLifeExpectancy").text() == "156")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (3yrs)");
                    else if ($("#resinLifeExpectancy").text() == "208")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (4yrs)");
                    else if ($("#resinLifeExpectancy").text() == "260")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (5yrs)");
                    else if ($("#resinLifeExpectancy").text() == "312")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (6yrs)");
                    else if ($("#resinLifeExpectancy").text() == "364")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (7yrs)");
                    else if ($("#resinLifeExpectancy").text() == "416")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (8yrs)");
                    else if ($("#resinLifeExpectancy").text() == "468")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (9yrs)");
                    else if ($("#resinLifeExpectancy").text() == "520")
                        $("#resinLifeExpectancy").text($("#resinLifeExpectancy").text() + " (10yrs)");
                    if (ui.value < $('#avgResinAge').text()) {
                        $("#avgResinAge").text(ui.value);
                        $("#avgResinAgeSlider").slider("value", ui.value);
                    }
                }
            });
            $("#resinLifeExpectancy").text($("#resinLifeExpectancySlider").slider("value") + " (6yrs)");
        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#avgResinAgeSlider").slider({
                range: "min",
                value: settings_class.resin_age,
                min: 0,
                max: 520,
                slide: function (event, ui) {
                    if (ui.value <= $("#resinLifeExpectancySlider").slider("value"))
                        $("#avgResinAge").text(ui.value);
                    else {
                        $("#avgResinAge").text($("#resinLifeExpectancySlider").slider("value"));
                        return false;
                    }
                }
            });
            $("#avgResinAge").text($("#avgResinAgeSlider").slider("value"));
        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#newResinSaltSplitSlider").slider({
                range: "min",
                value: settings_class.new_resin_SS,
                min: 5,
                max: 30,
                slide: function (event, ui) {
                    $("#newResinSaltSplit").text(ui.value);
                }
            });
            $("#newResinSaltSplit").text($("#newResinSaltSplitSlider").slider("value"));
        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#regenEffectivenessSlider").slider({
                range: "min",
                value: settings_class.regen_effectiveness,
                min: 0,
                max: 100,
                step: .25,
                slide: function (event, ui) {
                    $("#regenEffectiveness").text(ui.value + "%");
                }
            });
            $("#regenEffectiveness").text($("#regenEffectivenessSlider").slider("value") + "%");
        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#maxDegradationSlider").slider({
                range: "min",
                value: settings_class.max_degredation,
                min: 0,
                max: 100,
                step: .25,
                slide: function (event, ui) {
                    $("#maxDegradation").text(ui.value + "%");
                }
            });
            $("#maxDegradation").text($("#maxDegradationSlider").slider("value") + "%");
        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#RTIcleaningThresholdSlider").slider({
                range: "min",
                value: settings_class.threshold_cleaning,
                min: 0,
                max: 30,
                step: .25,
                slide: function (event, ui) {
                    $("#RTIcleaningThreshold").text(ui.value + "kg/cu ft");
                }
            });
            $("#RTIcleaningThreshold").text($("#RTIcleaningThresholdSlider").slider("value") + "kg/cu ft");
        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#resinReplacementLevelSlider").slider({
                range: "min",
                value: settings_class.threshold_replacement,
                min: 0,
                max: 30,
                step: .25,
                slide: function (event, ui) {
                    $("#resinReplacementLevel").text(ui.value + "kg/cu ft");
                }
            });
            $("#resinReplacementLevel").text($("#resinReplacementLevelSlider").slider("value") + "kg/cu ft");
        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#sourcePredictibiltySlider").slider({
                range: "min",
                value: settings_class.source_predictability,
                min: 0,
                max: 100,
                step: .25,
                slide: function (event, ui) {
                    $("#sourcePredictibilty").text(ui.value + "%");
                }
            });
            $("#sourcePredictibilty").text($("#sourcePredictibiltySlider").slider("value") + "%");
        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#noOfIterationsSlider").slider({
                range: "min",
                value: settings_class.number_of_iterations,
                min: 1,
                max: 10000,
                slide: function (event, ui) {
                    $("#noOfIterations").text(ui.value);
                }
            });
            $("#noOfIterations").text($("#noOfIterationsSlider").slider("value"));

        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#standardDeviationIntervalSlider").slider({
                range: "min",
                value: settings_class.std_deviation_interval,
                min: 1,
                max: 4,
                slide: function (event, ui) {
                    $("#standardDeviationInterval").text(ui.value);
                }
            });
            $("#standardDeviationInterval").text($("#standardDeviationIntervalSlider").slider("value"));

        }
    });
    $.ajax({
        url: '/PredictiveSystem/GetSliderValues',
        type: "GET",
        cache: false,
        success: function (settings_class) {
            $("#RTICleaningEffectivenessSlider").slider({
                range: "min",
                value: settings_class.cleaning_efffectiveness,
                min: 0,
                max: 100,
                slide: function (event, ui) {
                    $("#RTICleaningEffectiveness").text(ui.value + "%");
                }
            });
            $("#RTICleaningEffectiveness").text($("#RTICleaningEffectivenessSlider").slider("value") + "%");
        }
    });
    $("#trainList").change(function () {
        var trainId = $('#trainList').val();

        $.ajax({
            type: "GET",
            url: '/PredictiveSystem/GetPerformanceSettings',
            data: { SelectedTrain: trainId },
            success: function (data) {
                $("#performSettings").empty();
                $("#performSettings").html(data);
            },
            error: function (xhr) {
                window.location.href = "/ClientDatabase/Errorview";
            }
        });

    }
    );
});

