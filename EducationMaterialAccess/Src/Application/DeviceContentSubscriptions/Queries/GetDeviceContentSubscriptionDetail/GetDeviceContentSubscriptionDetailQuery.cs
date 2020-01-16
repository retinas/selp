using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.DeviceContentSubscriptions.Queries.GetDeviceContentSubscriptionDetail
{
    public class GetDeviceContentSubscriptionDetailQuery : IRequest<DeviceContentSubscriptionDetailVm>
    {
        public int Id { get; set; }
        public class GetDeviceContentSubscriptionDetailQueryHandler : IRequestHandler<GetDeviceContentSubscriptionDetailQuery, DeviceContentSubscriptionDetailVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetDeviceContentSubscriptionDetailQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<DeviceContentSubscriptionDetailVm> Handle(GetDeviceContentSubscriptionDetailQuery request, CancellationToken cancellationToken)
            {
                var vm = await _context.DeviceContentSubscriptions
                  .Where(e => e.Id == request.Id)
                  .ProjectTo<DeviceContentSubscriptionDetailVm>(_mapper.ConfigurationProvider)
                  .SingleOrDefaultAsync(cancellationToken);

                return vm;
            }
        }
    }
}
