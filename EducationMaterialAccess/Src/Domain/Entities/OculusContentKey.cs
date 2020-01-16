using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class OculusContentKey
    {
        public int Id { get; set; }
        public string OculusKey { get; set; }
        public int ContentId { get; set; }
        public bool IsActive { get; set; }
        public Content Content { get; set; }

    }
}
