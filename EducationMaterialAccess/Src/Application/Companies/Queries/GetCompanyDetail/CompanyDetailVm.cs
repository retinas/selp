using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Companies.Queries.GetCompanyDetail
{
    public class CompanyDetailVm : IMapFrom<Company>
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string CompanyAdress { get; set; }
        public string CompanyProvince { get; set; }
        public int CompanyVAT { get; set; }
        public string CompanyTaxOffice { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Company, CompanyDetailVm>()
                .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.CompanyName, opt => opt.MapFrom(s => s.CompanyName))
                .ForMember(d => d.CompanyAdress, opt => opt.MapFrom(s => s.CompanyAdress))
                .ForMember(d => d.CompanyProvince, opt => opt.MapFrom(s => s.CompanyProvince))
                .ForMember(d => d.CompanyVAT, opt => opt.MapFrom(s => s.CompanyVAT))
                .ForMember(d => d.CompanyTaxOffice, opt => opt.MapFrom(s => s.CompanyTaxOffice));
        }
    }
}
