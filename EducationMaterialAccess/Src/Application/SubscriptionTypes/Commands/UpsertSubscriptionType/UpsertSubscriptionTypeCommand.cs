using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.SubscriptionTypes.Commands.UpsertSubscriptionType
{
    public class UpsertSubscriptionTypeCommand : IRequest<int>
    {
        public int? Id { get; set; }
        public string Description { get; set; }

        public class UpsertSubscriptionTypeCommandHandler : IRequestHandler<UpsertSubscriptionTypeCommand, int>
        {

            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMediator _mediator;

            public UpsertSubscriptionTypeCommandHandler(IEductaionMaterialAccessDbContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }

            public async Task<int> Handle(UpsertSubscriptionTypeCommand request, CancellationToken cancellationToken)
            {
                SubscriptionType entity;

                if (request.Id.HasValue)
                {
                    entity = await _context.SubscriptionTypes.FindAsync(request.Id.Value);
                }
                else
                {
                    entity = new SubscriptionType();

                    _context.SubscriptionTypes.Add(entity);
                }

                entity.Description = request.Description;

                await _context.SaveChangesAsync(cancellationToken);

                return entity.Id;
            }
        }
    }
}
