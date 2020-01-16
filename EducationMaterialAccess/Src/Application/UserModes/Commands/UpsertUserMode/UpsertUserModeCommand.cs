using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.UserModes.Commands.UpsertUserMode
{
    public class UpsertUserModeCommand : IRequest<int>
    {
        public int? Id { get; set; }
        public string Description { get; set; }
        public int? Code { get; set; }

        public class Handler : IRequestHandler<UpsertUserModeCommand, int>
        {

            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMediator _mediator;

            public Handler(IEductaionMaterialAccessDbContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }

            public async Task<int> Handle(UpsertUserModeCommand request, CancellationToken cancellationToken)
            {
                UserMode entity;

                if (request.Id.HasValue)
                {
                    entity = await _context.UserModes.FindAsync(request.Id.Value);
                }
                else
                {
                    entity = new UserMode();

                    _context.UserModes.Add(entity);
                }

                entity.Description = request.Description;
                var query = _context.UserModes.Select(p => p.Code);
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
    