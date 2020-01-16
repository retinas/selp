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

namespace Application.SubscriptionTypes.Queries.GetSubscriptionTypeList
{
    public class GetSubscriptionTypeListQuery : IRequest<SubscriptionTypeListVm>
    {
        public class GetSubscriptionTypeListQueryHandler : IRequestHandler<GetSubscriptionTypeListQuery, SubscriptionTypeListVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetSubscriptionTypeListQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<SubscriptionTypeListVm> Handle(GetSubscriptionTypeListQuery request, CancellationToken cancellationToken)
            {
                List<SubscriptionTypeLookUpDto> subscriptionTypes;

                subscriptionTypes = await _context.SubscriptionTypes
                        .ProjectTo<SubscriptionTypeLookUpDto>(_mapper.ConfigurationProvider)
                        .OrderBy(e => e.Description)
                        .ToListAsync(cancellationToken);

                var vm = new SubscriptionTypeListVm
                {
                    SubscriptionTypes = subscriptionTypes
                };

                return vm;
            }
        }
    }
}
