namespace Assig2.Models
{
    public class CountryDetail
    {
        public int CountryId { get; set; }
        public string CountryName { get; set; } = string.Empty;
        public string Iso3 { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;


        public int CityCount { get; set; } = 0;
        public int[] EmissionDataYearRange { get; set; } = new int[2];
        public int[] TemperatureDataYearRange { get; set; } = new int[2];
    }
}
