using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.SubscriptionTypes.Queries.GetSubscriptionTypeDetail
{
    public class SubscriptionTypeDetailVm : IMapFrom<SubscriptionType>
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<SubscriptionType, SubscriptionTypeDetailVm>()
                .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.Description, opt => opt.MapFrom(s => s.Description));
        }
    }
}
