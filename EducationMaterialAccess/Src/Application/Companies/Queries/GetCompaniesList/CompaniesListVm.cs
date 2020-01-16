using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Companies.Queries.GetCompaniesList
{
    public class CompaniesListVm
    {
        public IList<CompanyLookUpDto> Companies { get; set; }
    }
}
