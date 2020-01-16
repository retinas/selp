using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ContentDifficulties.Commands.UpsertContentDifficulty
{
    public class UpsertContentDifficultyCommand : IRequest<int>
    {
        public int? Id { get; set; }
        public string Description { get; set; }
        public int? Code { get; set; }

        public class UpsertContentDifficultyCommandHandler : IRequestHandler<UpsertContentDifficultyCommand, int>
        {

            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMediator _mediator;

            public UpsertContentDifficultyCommandHandler(IEductaionMaterialAccessDbContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }

            public async Task<int> Handle(UpsertContentDifficultyCommand request, CancellationToken cancellationToken)
            {
                ContentDifficulty entity;

                if (request.Id.HasValue)
                {
                    entity = await _context.ContentDifficulties.FindAsync(request.Id.Value);
                }
                else
                {
                    entity = new ContentDifficulty();

                    _context.ContentDifficulties.Add(entity);
                }

                entity.Description = request.Description;
                var query = _context.ContentDifficulties.Select(p => p.Code);
                if (query.Count() > 0)
                {
                    entity.Code = query.Max() + 1;
                }
                else
                {
                    entity.Code = 1;
                }

                await _context.SaveChangesAsync(cancellationToken);

                return entity.Id;
            }
        }
    }
}
