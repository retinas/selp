using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.UserModes.Queries.GetUserModeDetail
{
    public class GetUserModeDetailQuery: IRequest<UserModeDetailVm>
    {
        public int Id { get; set; }
        public class GetUserModeDetailQueryHandler : IRequestHandler<GetUserModeDetailQuery, UserModeDetailVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetUserModeDetailQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<UserModeDetailVm> Handle(GetUserModeDetailQuery request, CancellationToken cancellationToken)
            {
                var vm = await _context.UserModes
                  .Where(e => e.Id == request.Id)
                  .ProjectTo<UserModeDetailVm>(_mapper.ConfigurationProvider)
                  .SingleOrDefaultAsync(cancellationToken);

                return vm;
            }
        }
    }
}
