namespace Assig2.Models
{
    public class CityDetail
    {
        public string CityName { get; set; } = string.Empty;
        public int CityId { get; set; }
        public string CountryName { get; set; } = string.Empty;
        public int CountryID { get; set; }
        public string? ImageUrl { get; set; }
        public string? iso3 { get; set; } 
        public string? regionName { get; set; }
        public int? regionId { get; set; }

    }
}
