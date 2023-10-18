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
    
    public class A_RegionsController : ControllerBase
    {
        private readonly EnvDataContext _context;

        public A_RegionsController(EnvDataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets a list of Regions and adds a default region
        /// </summary>
        /// <param></param>
        /// <returns></returns>
        // GET: /api/A_Regions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RegionDetail>>> GetRegions()
        {
            if (_context.Regions == null)
            {
                return NotFound();
            }
            // get list of Regions with count of countries
            var RegionList = await _context.Regions
                .OrderBy(r => r.RegionName)
                .Select(r => new RegionDetail
                {
                    RegionId = r.RegionId,
                    RegionName = r.RegionName,
                    ImageUrl = r.ImageUrl ?? String.Empty,
                    CountryCount = r.Countries.Count()
                }).ToListAsync();

            // add default "all" with total country count
            var DefaultRegion = new RegionDetail
            {
                CountryCount = _context.Countries.Count(),
            };

            // add default at start of list
            RegionList.Insert(0, DefaultRegion);

            return RegionList;
        }

    }
}
