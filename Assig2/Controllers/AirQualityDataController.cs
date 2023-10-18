using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Assig2.Data;
using Assig2.Models;

namespace Assig2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirQualityDataController : ControllerBase
    {
        private readonly EnvDataContext _context;

        public AirQualityDataController(EnvDataContext context)
        {
            _context = context;
        }


        // GET: api/GetAirQualityData/5
        // id = cityID
        //[HttpGet("api/GetAirQualityData/{id}", Name = "Get City Air Quality Data")]
        //public async Task<ActionResult<CityAirQualityData>> GetAirQualityData(int id)
        //{
        //    var caqd = new CityAirQualityData(); // return object of this action

        //    if (_context.Cities == null)
        //    {
        //        return NotFound();
        //    }
        //    var cd = await _context.Cities
        //        .Where(c => c.CityId == id)
        //        .Select(c => new A_CityDetail
        //        {
        //            CityId = c.CityId,
        //            CityName = c.CityName,
        //            CountryName = c.Country.CountryName,
        //            CountryID = c.CountryId,
        //            ImageUrl = c.Country.ImageUrl,
        //            iso3 = c.Country.Iso3,
        //            regionId = c.Country.RegionId,
        //            regionName = c.Country.Region != null ? c.Country.Region.RegionName : null

        //        }).FirstOrDefaultAsync();

        //    if (cd == null)
        //    {
        //        return NotFound();
        //    }

        //    caqd.TheCityDetail = cd;



        //    var query = _context.AirQualityData
        //            .Where(aqd => aqd.CityId == id)
        //            .Select(aqd => new A_CityAirQualityDetail
        //            {
        //                TheAirQualityData = aqd,
        //                DataStationDetail = aqd.AirQualityStations.Select(aqs => new A_CityStationDetail
        //                {
        //                    StationType = aqs.StationType.StationType,
        //                    StationNumber = aqs.Number
        //                }).ToList()
        //            });

        //    var CountryData = _context.AirQualityData
        //         .Where(aqd => query.Any(q => q.TheAirQualityData != null &&
        //                 q.TheAirQualityData.City.Country.Cities.Select(c => c.CityId).Contains(aqd.CityId))
        //                 )
        //         .GroupBy(td2 => td2.Year)
        //         .Select(group => new
        //         {
        //             Year = group.Key,
        //             CountryPM10Avg = group.Select(td2 => td2.AnnualMean).DefaultIfEmpty().Average(),
        //             CountryPM10Min = group.Select(td2 => td2.AnnualMean).DefaultIfEmpty().Min(),
        //             CountryPM10Max = group.Select(td2 => td2.AnnualMean).DefaultIfEmpty().Max(),
        //             CountryPM25Avg = group.Select(td2 => td2.AnnualMeanUgm3).DefaultIfEmpty().Average(),
        //             CountryPM25Min = group.Select(td2 => td2.AnnualMeanUgm3).DefaultIfEmpty().Min(),
        //             CountryPM25Max = group.Select(td2 => td2.AnnualMeanUgm3).DefaultIfEmpty().Max()

        //         })
        //        .ToDictionary(group => group.Year, group => new
        //        {
        //            CountryPM10Avg = group.CountryPM10Avg,
        //            CountryPM10Min = group.CountryPM10Min,
        //            CountryPM10Max = group.CountryPM10Max,
        //            CountryPM25Avg = group.CountryPM25Avg,
        //            CountryPM25Min = group.CountryPM25Min,
        //            CountryPM25Max = group.CountryPM25Max,
        //        });



        //    caqd.TheCityAirQualityData = await query.Select(q => q).ToListAsync();

        //    foreach (var item in caqd.TheCityAirQualityData)
        //    {
        //        if (CountryData.ContainsKey(item.TheAirQualityData.Year))
        //        {
        //            var countryDataForYear = CountryData[item.TheAirQualityData.Year];
        //            item.Year = item.TheAirQualityData.Year;
        //            item.CountryPM10Avg = countryDataForYear.CountryPM10Avg;
        //            item.CountryPM10Min = countryDataForYear.CountryPM10Min;
        //            item.CountryPM10Max = countryDataForYear.CountryPM10Max;
        //            item.CountryPM25Avg = countryDataForYear.CountryPM25Avg;
        //            item.CountryPM25Min = countryDataForYear.CountryPM25Min;
        //            item.CountryPM25Max = countryDataForYear.CountryPM25Max;
        //        }
        //    }

        //    return Ok(caqd);
        //}
    }
}
