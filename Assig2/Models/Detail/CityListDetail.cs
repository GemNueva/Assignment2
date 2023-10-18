namespace Assig2.Models
{
    public class CityListDetail
    {
        public int CityID { get; set; }
        public string CityName { get; set; } = string.Empty;
        public int[] AirQualityYearRange { get; set; } = new int[2];
        public int RecordCount { get; set; }
    }
}
