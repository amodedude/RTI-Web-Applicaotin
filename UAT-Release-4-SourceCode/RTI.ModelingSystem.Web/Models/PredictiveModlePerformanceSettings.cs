using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RTI.ModelingSystem.Web.Models
{
    public class PredictiveModlePerformanceSettings
    {
        public double resin_life_expectancy { get; set; }
        public double resin_age { get; set; }
        public bool dont_replace_resin { get; set; }
        public double regen_effectiveness { get; set; }
        public double max_degredation { get; set; }
        public double cleaning_efffectiveness { get; set; }
        public double threshold_cleaning { get; set; }
        public double threshold_replacement { get; set; }
        public double source_predictability { get; set; }
        public int number_of_iterations { get; set; }
        public int std_deviation_interval { get; set; }
    }
}