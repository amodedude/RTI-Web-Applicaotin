// -----------------------------------------------------------------------
// <copyright file="PredictiveSettings.cs" company="RTI">
// RTI
// </copyright>
// <summary>Predictive Settings</summary>
// -----------------------------------------------------------------------

namespace RTI.ModelingSystem.Core.Models
{
    public static class PredictiveSettings
    {
        /// <summary>
        /// Gets or sets the resin life expectancy.
        /// </summary>
        /// <value>
        /// The resin life expectancy.
        /// </value>
        public static int ResinLifeExpectancy { get; set; }

        /// <summary>
        /// Gets or sets the average resin age.
        /// </summary>
        /// <value>
        /// The average resin age.
        /// </value>
        public static int AvgResinAge { get; set; }

        /// <summary>
        /// Gets or sets the new resin salt split.
        /// </summary>
        /// <value>
        /// The new resin salt split.
        /// </value>
        public static int NewResinSaltSplit { get; set; }

        /// <summary>
        /// Gets or sets the regen effectiveness.
        /// </summary>
        /// <value>
        /// The regen effectiveness.
        /// </value>
        public static decimal RegenEffectiveness { get; set; }

        /// <summary>
        /// Gets or sets the maximum degradation.
        /// </summary>
        /// <value>
        /// The maximum degradation.
        /// </value>
        public static decimal MaxDegradation { get; set; }

        /// <summary>
        /// Gets or sets the rticleaning threshold.
        /// </summary>
        /// <value>
        /// The rticleaning threshold.
        /// </value>
        public static decimal RticleaningThreshold { get; set; }

        /// <summary>
        /// Gets or sets the resin replacement level.
        /// </summary>
        /// <value>
        /// The resin replacement level.
        /// </value>
        public static decimal ResinReplacementLevel { get; set; }

        /// <summary>
        /// Gets or sets the source predictibilty.
        /// </summary>
        /// <value>
        /// The source predictibilty.
        /// </value>
        public static decimal SourcePredictibilty { get; set; }

        /// <summary>
        /// Gets or sets the no of iterations.
        /// </summary>
        /// <value>
        /// The no of iterations.
        /// </value>
        public static int NoOfIterations { get; set; }

        /// <summary>
        /// Gets or sets the standard deviation interval.
        /// </summary>
        /// <value>
        /// The standard deviation interval.
        /// </value>
        public static int StandardDeviationInterval { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether [replace resin].
        /// </summary>
        /// <value>
        ///   <c>true</c> if [replace resin]; otherwise, <c>false</c>.
        /// </value>
        public static bool ReplaceResin { get; set; }

        /// <summary>
        /// Gets or sets the calculation method.
        /// </summary>
        /// <value>
        /// The calculation method.
        /// </value>
        public static string CalculationMethod { get; set; }

        /// <summary>
        /// Gets or sets the train identifier.
        /// </summary>
        /// <value>
        /// The train identifier.
        /// </value>
        public static int TrainId { get; set; }

        /// <summary>
        /// Gets or sets the cleaning effectiveness.
        /// </summary>
        /// <value>
        /// The cleaning effectiveness.
        /// </value>
        public static int CleaningEffectiveness { get; set; }
    }
}
