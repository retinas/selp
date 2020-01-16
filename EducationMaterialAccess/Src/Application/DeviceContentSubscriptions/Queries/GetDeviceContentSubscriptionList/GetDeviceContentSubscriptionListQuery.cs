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

namespace Application.DeviceContentSubscriptions.Queries.GetDeviceContentSubscriptionList
{
    public class GetDeviceContentSubscriptionListQuery : IRequest<DeviceContentSubscriptionListVm>
    {
        public class GetDeviceContentSubscriptionListQueryHandler : IRequestHandler<GetDeviceContentSubscriptionListQuery, DeviceContentSubscriptionListVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetDeviceContentSubscriptionListQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<DeviceContentSubscriptionListVm> Handle(GetDeviceContentSubscriptionListQuery request, CancellationToken cancellationToken)
            {
                List<DeviceContentSubscriptionLookUpDto> deviceContentSubscriptions;

                deviceContentSubscriptions = await _context.DeviceContentSubscriptions
                        .ProjectTo<DeviceContentSubscriptionLookUpDto>(_mapper.ConfigurationProvider)
                        .OrderBy(e => e.CompanyName)
                        .ToListAsync(cancellationToken);

                var vm = new DeviceContentSubscriptionListVm
                {
                    DeviceContentSubscriptions = deviceContentSubscriptions
                };

                return vm;
            }
        }
    }
}
