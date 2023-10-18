namespace Assig2.Models
{
    public class CountrySearchDetail
    {
        public RegionDetail TheRegion { get; set; } = new RegionDetail();

        public List<CountryDetail> CountryList { get; set; } = new List<CountryDetail>();



    }
}
