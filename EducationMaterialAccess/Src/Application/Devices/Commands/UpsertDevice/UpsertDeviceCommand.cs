using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Devices.Commands.UpsertDevice
{
    public class UpsertDeviceCommand : IRequest<int>
    {
        public int? Id { get; set; }
        public string Model { get; set; }
        public string DeviceNumber { get; set; }
        public int CompanyId { get; set; }

        public class Handler : IRequestHandler<UpsertDeviceCommand,int>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMediator _mediator;

            public Handler(IEductaionMaterialAccessDbContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }

            public async Task<int> Handle(UpsertDeviceCommand request, CancellationToken cancellationToken)
            {
                Device entity;

                if (request.Id.HasValue)
                {
                    entity = await _context.Devices.FindAsync(request.Id.Value);
                }
                else
                {
                    entity = new Device();

                    _context.Devices.Add(entity);
                }

                entity.CompanyId = request.CompanyId;
                entity.DeviceNumber = request.DeviceNumber;
                entity.Model = request.Model;

                await _context.SaveChangesAsync(cancellationToken);

                return entity.Id;
            }
        }
    }
}
