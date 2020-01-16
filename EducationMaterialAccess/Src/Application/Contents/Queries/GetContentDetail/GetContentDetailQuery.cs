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

namespace Application.Contents.Queries.GetContentDetail
{
    public class GetContentDetailQuery : IRequest<ContentDetailVm>
    {
        public int Id { get; set; }
        public class GetSubscriptionTypeDetailQueryHandler : IRequestHandler<GetContentDetailQuery, ContentDetailVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetSubscriptionTypeDetailQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<ContentDetailVm> Handle(GetContentDetailQuery request, CancellationToken cancellationToken)
            {
                var vm = await _context.SubscriptionTypes
                  .Where(e => e.Id == request.Id)
                  .ProjectTo<ContentDetailVm>(_mapper.ConfigurationProvider)
                  .SingleOrDefaultAsync(cancellationToken);

                return vm;
            }
        }
    }
}
