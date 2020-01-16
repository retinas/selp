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

namespace Application.Devices.Queries.GetDevicesList
{
    public class GetDevicesListQuery : IRequest<DevicesListVm>
    {
        public int? CompanyId { get; set; }

        public class GetDevicesListQueryHandler : IRequestHandler<GetDevicesListQuery, DevicesListVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetDevicesListQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<DevicesListVm> Handle(GetDevicesListQuery request, CancellationToken cancellationToken)
            {
                List<DeviceLookUpDto> devices;
                if (request.CompanyId != null)
                {
                    devices = await _context.Devices
                        .Where(p => p.CompanyId == request.CompanyId)
                        .ProjectTo<DeviceLookUpDto>(_mapper.ConfigurationProvider)
                        .OrderBy(e => e.DeviceNumber)
                        .ToListAsync(cancellationToken);
                }
                else
                {
                    devices = await _context.Devices
                        .ProjectTo<DeviceLookUpDto>(_mapper.ConfigurationProvider)
                        .OrderBy(e => e.DeviceNumber)
                        .ToListAsync(cancellationToken);
                }

                var vm = new DevicesListVm
                {
                    Devices = devices
                };

                return vm;
            }


        }
    }
}
