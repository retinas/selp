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

namespace Application.ContentDifficulties.Queries.GetContentDifficultyDetail
{
    public class GetContentDifficultyDetailQuery : IRequest<ContentDifficultyDetailVm>
    {
        public int Id { get; set; }

        public class GetContentDifficultyDetailQueryHandler : IRequestHandler<GetContentDifficultyDetailQuery, ContentDifficultyDetailVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetContentDifficultyDetailQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<ContentDifficultyDetailVm> Handle(GetContentDifficultyDetailQuery request, CancellationToken cancellationToken)
            {
                var vm = await _context.UserModes
                  .Where(e => e.Id == request.Id)
                  .ProjectTo<ContentDifficultyDetailVm>(_mapper.ConfigurationProvider)
                  .SingleOrDefaultAsync(cancellationToken);

                return vm;
            }
        }
    }
}
