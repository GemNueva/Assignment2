namespace Assig2.Models
{
    public class TemperatureDataDetail
    {
        public TemperatureData TheCountryTempData { get; set; } = new TemperatureData();
        public decimal? RegionalAvg { get; set; }
        public decimal? RegionalMin { get; set; }
        public decimal? RegionalMax { get; set; }
    }
}
