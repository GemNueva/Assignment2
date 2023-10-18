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
    //[ApiController]
    public class CitiesOLDController : ControllerBase
    {
        private readonly EnvDataContext _context;

        public CitiesOLDController(EnvDataContext context)
        {
            _context = context;
        }

        // GET: api/GetCities/5?searchText=xx
        [HttpGet(template: "api/GetCities/{id}", Name = "Get Country Cities", Order = 0 )]
        [Route("api/GetCities/{id}")]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<CityListDetail>>> GetCities(int id, string? searchText)
        {
            if (_context.Cities == null)
            {
                return NotFound();
            }
            if (id == 0)
            {
                return BadRequest();
            }
            var query = _context.Cities
                .Where(c => c.CountryId == id)
                .Select(c => new CityListDetail
                {
                    CityID = c.CityId,
                    CityName = c.CityName,
                    RecordCount = c.AirQualityData.Count(),
                    AirQualityYearRange = new[]
                    {
                     c.AirQualityData.Any() ? c.AirQualityData.Min(td => td.Year) : 0,
                     c.AirQualityData.Any() ? c.AirQualityData.Max(td => td.Year) : 0
                    },
                });

            if (!string.IsNullOrWhiteSpace(searchText))
            {
                query = query.Where(c => c.CityName.StartsWith(searchText));
            }
            query = query.OrderBy(c => c.CityName);
            return Ok(await query.ToListAsync());
        }
    }

}

