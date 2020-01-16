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

namespace Application.UserModes.Queries.GetUserModeList
{
    public class GetUserModeListQuery: IRequest<UserModesListVm>
    {
        public class GetUserModeListQueryHandler : IRequestHandler<GetUserModeListQuery,UserModesListVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetUserModeListQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<UserModesListVm> Handle(GetUserModeListQuery request, CancellationToken cancellationToken)
            {
                List<UserModeLookUpDto> userModes;

                userModes = await _context.UserModes
                        .ProjectTo<UserModeLookUpDto>(_mapper.ConfigurationProvider)
                        .OrderBy(e => e.Description)
                        .ToListAsync(cancellationToken);

                var vm = new UserModesListVm
                {
                    UserModes = userModes
                };

                return vm;
            }
        }
    }
}
