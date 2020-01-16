using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Devices.Queries.GetDeviceDetail
{
    public class DeviceDetailVm : IMapFrom<Device>
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public string DeviceNumber { get; set; }
        public int CompanyId { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<Device, DeviceDetailVm>()
                .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.Model, opt => opt.MapFrom(s => s.Model))
                .ForMember(d => d.DeviceNumber, opt => opt.MapFrom(s => s.DeviceNumber))
                .ForMember(d => d.CompanyId, opt => opt.MapFrom(s => s.CompanyId));
        }
    }
}
