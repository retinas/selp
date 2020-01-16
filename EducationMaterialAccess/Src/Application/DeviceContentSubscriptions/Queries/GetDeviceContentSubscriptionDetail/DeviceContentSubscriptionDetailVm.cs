using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DeviceContentSubscriptions.Queries.GetDeviceContentSubscriptionDetail
{
    public class DeviceContentSubscriptionDetailVm : IMapFrom<DeviceContentSubscription>
    {
        public int Id { get; set; }
        public int DeviceId { get; set; }
        public int SubscriptionTypeId { get; set; }
        public int ContentId { get; set; }
        public double Price { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public bool IsActive { get; set; }
        public int NumberOfPaymentInstallments { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<DeviceContentSubscription, DeviceContentSubscriptionDetailVm>()
                .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.DeviceId, opt => opt.MapFrom(s => s.DeviceId))
                .ForMember(d => d.SubscriptionTypeId, opt => opt.MapFrom(s => s.SubscriptionTypeId))
                .ForMember(d => d.ContentId, opt => opt.MapFrom(s => s.ContentId))
                .ForMember(d => d.Price, opt => opt.MapFrom(s => s.Price))
                .ForMember(d => d.StartingDate, opt => opt.MapFrom(s => s.StartingDate))
                .ForMember(d => d.ExpiryDate, opt => opt.MapFrom(s => s.ExpiryDate))
                .ForMember(d => d.IsActive, opt => opt.MapFrom(s => s.IsActive))
                .ForMember(d => d.NumberOfPaymentInstallments, opt => opt.MapFrom(s => s.NumberOfPaymentInstallments));
        }
    }
}
