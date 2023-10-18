using System;
using System.Collections.Generic;

namespace Assig2.Models
{
    public partial class AirQualityStation
    {
        public int StationTypeId { get; set; }
        public int AqdId { get; set; }
        public int Number { get; set; } = 0;

        public virtual AirQualityData Aqd { get; set; } = null!;
        public virtual MonitorStationType StationType { get; set; } = null!;
    }
}
