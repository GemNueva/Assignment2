namespace Assig2.Models
{
    public class CityAirQualityDetail
    {
        public int Year { get; set; }
        public double? CountryPM10Avg { get; set; }
        public double? CountryPM10Min { get; set; }
        public double? CountryPM10Max { get; set; }
        public double? CountryPM25Avg { get; set; }
        public double? CountryPM25Min { get; set; }
        public double? CountryPM25Max { get; set; }

        public AirQualityData TheAirQualityData { get; set; } = new AirQualityData();

        public List<CityStationDetail> DataStationDetail { get; set; } = new List<CityStationDetail>();
    }
}
