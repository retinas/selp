using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.UserModes.Queries.GetUserModeList
{
    public class UserModeLookUpDto : IMapFrom<UserMode>
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Code { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<UserMode, UserModeLookUpDto>()
                .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.Description, opt => opt.MapFrom(s => s.Description))
                .ForMember(d => d.Code, opt => opt.MapFrom(s => s.Code));
        }


    }
}
