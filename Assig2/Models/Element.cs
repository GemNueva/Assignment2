using System;
using System.Collections.Generic;

namespace Assig2.Models
{
    public partial class Element
    {
        public Element()
        {
            ItemElements = new HashSet<ItemElement>();
        }

        public int ElementId { get; set; }
        public string ElementName { get; set; } = null!;
        public string Unit { get; set; } = null!;
        public string? ImageUrl { get; set; }

        public virtual ICollection<ItemElement> ItemElements { get; set; }
    }
}
