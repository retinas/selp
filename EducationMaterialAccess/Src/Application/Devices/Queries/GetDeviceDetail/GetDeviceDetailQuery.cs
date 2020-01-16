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

namespace Application.Devices.Queries.GetDeviceDetail
{
    public class GetDeviceDetailQuery : IRequest<DeviceDetailVm>
    {
        public int Id { get; set; }
        public class GetDeviceDetailQueryHandler : IRequestHandler<GetDeviceDetailQuery, DeviceDetailVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetDeviceDetailQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<DeviceDetailVm> Handle(GetDeviceDetailQuery request, CancellationToken cancellationToken)
            {
                var vm = await _context.Devices
                  .Where(e => e.Id == request.Id)
                  .ProjectTo<DeviceDetailVm>(_mapper.ConfigurationProvider)
                  .SingleOrDefaultAsync(cancellationToken);

                return vm;
            }
        }
    }
}
