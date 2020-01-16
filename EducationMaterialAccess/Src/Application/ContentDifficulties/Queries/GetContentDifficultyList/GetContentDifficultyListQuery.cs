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

namespace Application.ContentDifficulties.Queries.GetContentDifficultyList
{
    public class GetContentDifficultyListQuery : IRequest<ContentDifficultyListVm>
    {
        public class GetContentDifficultyListQueryHandler : IRequestHandler<GetContentDifficultyListQuery, ContentDifficultyListVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetContentDifficultyListQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<ContentDifficultyListVm> Handle(GetContentDifficultyListQuery request, CancellationToken cancellationToken)
            {
                List<ContentDifficultyLookUpDto> contentDifficulties;

                contentDifficulties = await _context.ContentDifficulties
                        .ProjectTo<ContentDifficultyLookUpDto>(_mapper.ConfigurationProvider)
                        .OrderBy(e => e.Description)
                        .ToListAsync(cancellationToken);

                var vm = new ContentDifficultyListVm
                {
                    ContentDifficulties = contentDifficulties
                };

                return vm;
            }
        }
    }
}
