using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.SubscriptionTypes.Queries.GetSubscriptionTypeList
{
    public class SubscriptionTypeLookUpDto : IMapFrom<SubscriptionType>
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<SubscriptionType, SubscriptionTypeLookUpDto>()
                .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.Description, opt => opt.MapFrom(s => s.Description));
        }
    }
}
