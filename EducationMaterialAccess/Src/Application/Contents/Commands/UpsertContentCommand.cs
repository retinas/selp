using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Contents.Commands
{
    public class UpsertContentCommand : IRequest<int>
    {
        public int? Id { get; private set; }
        public string AdditionalInfo { get; private set; }
        public int ContentCategoryId { get; private set; }
        public int ContentDifficultyId { get; private set; }
        public string Description { get; private set; }
        public string Instructions { get; private set; }
        public double Price { get; private set; }
        public string Title { get; private set; }
        public string UserCompetence { get; private set; }
        public string ImageBase64 { get; set; }
        public string OculusContentId { get; set; }
        public List<int> UserModeIds { get; private set; }

        public class UpsertContentCommandHandler : IRequestHandler<UpsertContentCommand, int>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMediator _mediator;

            public UpsertContentCommandHandler(IEductaionMaterialAccessDbContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }

            public async Task<int> Handle(UpsertContentCommand request, CancellationToken cancellationToken)
            {
                Content entity;
                bool isUpdating = false;

                if (request.Id.HasValue)
                {
                    entity = await _context.Contents.FindAsync(request.Id.Value);
                    isUpdating = true;
                }
                else
                {
                    entity = new Content();

                    _context.Contents.Add(entity);
                }

                entity.AdditionalInfo = request.AdditionalInfo;
                entity.ContentCategoryId = request.ContentCategoryId;
                entity.ContentDifficultyId = request.ContentDifficultyId;
                entity.Description = request.Description;
                entity.Instructions = request.Instructions;
                entity.Price = request.Price;
                entity.Title = request.Title;
                entity.UserCompetence = request.UserCompetence;
                entity.ImageBase64 = request.ImageBase64;
                entity.OculusContentId = request.OculusContentId;


                if (isUpdating)
                {
                    var existingModes = _context.ContentUserModes.Where(p => p.ContentId == request.Id);
                    _context.ContentUserModes.RemoveRange(existingModes);
                }
                //Delete all/insert all => a content will have probably 3 different user modes at most. Not worth to track changes for update
                if (request.UserModeIds != null && request.UserModeIds.Count > 0)
                {
                    
                    List<ContentUserMode> userModes = new List<ContentUserMode>();
                    foreach(var userModeId in request.UserModeIds)
                    {
                        ContentUserMode userModeEntity = new ContentUserMode
                        {
                            Content = entity,
                            UserModeId = userModeId
                        };
                        userModes.Add(userModeEntity);
                    }
                    _context.ContentUserModes.AddRange(userModes);
                }

                await _context.SaveChangesAsync(cancellationToken);

                return entity.Id;
            }
        }
    }
}
