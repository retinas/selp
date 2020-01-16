using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;

namespace Application.Companies.Queries.GetCompaniesList
{
    public class CompanyLookUpDto : IMapFrom<Company>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Province { get; set; }
        public int Vat { get; set; }
        public string TaxOffice { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Company, CompanyLookUpDto>()
                .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.Name, opt => opt.MapFrom(s => s.CompanyName))
                .ForMember(d => d.Address, opt => opt.MapFrom(s => s.CompanyAdress))
                .ForMember(d => d.Province, opt => opt.MapFrom(s => s.CompanyProvince))
                .ForMember(d => d.TaxOffice, opt => opt.MapFrom(s => s.CompanyTaxOffice))
                .ForMember(d => d.Vat, opt => opt.MapFrom(s => s.CompanyVAT));
        }
    }
}
