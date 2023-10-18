namespace Assig2.Models
{
    public class CityAirQualityData
    {
        public CityDetail TheCityDetail { get; set; } = new CityDetail();
        public List<CityAirQualityDetail> TheCityAirQualityData { get; set; } = new List<CityAirQualityDetail>();
    }
}
