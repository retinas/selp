using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Contents.Queries.GetContentDetail
{
    public class ContentDetailVm : IMapFrom<Content>
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Instructions { get; set; }
        public string UserCompetence { get; set; }
        public string AdditionalInfo { get; set; }
        public int ContentCategoryId { get; set; }
        public int ContentDifficultyId { get; set; }
        public string OculusContentId { get; set; }
        public string ImageBase64 { get; set; }
        public List<int> UserModeIds { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Content, ContentDetailVm>()
                .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.Description, opt => opt.MapFrom(s => s.Description))
                .ForMember(d => d.Title, opt => opt.MapFrom(s => s.Title))
                .ForMember(d => d.Price, opt => opt.MapFrom(s => s.Price))
                .ForMember(d => d.Instructions, opt => opt.MapFrom(s => s.Instructions))
                .ForMember(d => d.UserCompetence, opt => opt.MapFrom(s => s.UserCompetence))
                .ForMember(d => d.AdditionalInfo, opt => opt.MapFrom(s => s.AdditionalInfo))
                .ForMember(d => d.ContentCategoryId, opt => opt.MapFrom(s => s.ContentCategoryId))
                .ForMember(d => d.ContentDifficultyId, opt => opt.MapFrom(s => s.ContentDifficultyId))
                .ForMember(d => d.OculusContentId, opt => opt.MapFrom(s => s.OculusContentId))
                .ForMember(d => d.ImageBase64, opt => opt.MapFrom(s => s.ImageBase64))
                .ForMember(d => d.UserModeIds, opt => opt.MapFrom(s => s.ContentUserModes.Select(p => p.UserModeId)));
        }
    }
}
