using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.DeviceContentSubscriptions.Commands.UpsertDeviceContentSubscription
{
    public class UpsertDeviceContentSubscriptionCommand : IRequest<int>
    {
        public int? Id { get; set; }
        public int DeviceId { get; set; }
        public int SubscriptionTypeId { get; set; }
        public int ContentId { get; set; }
        public double Price { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public int NumberOfPaymentInstallments { get; set; }

        public class UpserDeviceCOntentSubscriptionCommandHandler : IRequestHandler<UpsertDeviceContentSubscriptionCommand, int>
        {

            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMediator _mediator;

            public UpserDeviceCOntentSubscriptionCommandHandler(IEductaionMaterialAccessDbContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }

            public async Task<int> Handle(UpsertDeviceContentSubscriptionCommand request, CancellationToken cancellationToken)
            {
                DeviceContentSubscription entity;

                if (request.Id.HasValue)
                {
                    entity = await _context.DeviceContentSubscriptions.FindAsync(request.Id.Value);
                }
                else
                {
                    entity = new DeviceContentSubscription();

                    _context.DeviceContentSubscriptions.Add(entity);
                }

                entity.ExpiryDate = request.ExpiryDate;
                entity.StartingDate = request.StartingDate;
                entity.NumberOfPaymentInstallments = request.NumberOfPaymentInstallments;
                entity.Price = request.Price;
                entity.SubscriptionTypeId = request.SubscriptionTypeId;
                entity.DeviceId = request.DeviceId;
                entity.ContentId = request.ContentId;

                await _context.SaveChangesAsync(cancellationToken);

                return entity.Id;
            }
        }
    }
}
