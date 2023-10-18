namespace Assig2.Models
{
    public class CountryTemperatureDetail
    {
        public int MinYear { get; set; }
        public int MaxYear { get; set; }
        public List<TemperatureDataDetail> RawTemperatureData { get; set; } = new List<TemperatureDataDetail>();

      
    }
}
