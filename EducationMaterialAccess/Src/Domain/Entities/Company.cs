using Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class Company : AuditableEntity
    {
        public Company()
        {
            Devices = new HashSet<Device>();
        }

        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string CompanyAdress { get; set; }
        public string CompanyProvince { get; set; }
        public int CompanyVAT { get; set; }
        public string CompanyTaxOffice { get; set; }
        public ICollection<Device> Devices { get; private set; }
    }
}
