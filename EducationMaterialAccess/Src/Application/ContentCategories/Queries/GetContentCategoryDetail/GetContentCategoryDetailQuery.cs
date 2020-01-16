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

namespace Application.ContentCategories.Queries.GetContentCategoryDetail
{
    public class GetContentCategoryDetailQuery : IRequest<ContentCategoryDetailVm>
    {
        public int Id { get; set; }
        public class GetContentCategoryDetailQueryHandler : IRequestHandler<GetContentCategoryDetailQuery, ContentCategoryDetailVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetContentCategoryDetailQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<ContentCategoryDetailVm> Handle(GetContentCategoryDetailQuery request, CancellationToken cancellationToken)
            {
                var vm = await _context.ContentCategories
                  .Where(e => e.Id == request.Id)
                  .ProjectTo<ContentCategoryDetailVm>(_mapper.ConfigurationProvider)
                  .SingleOrDefaultAsync(cancellationToken);

                return vm;
            }
        }
    }
}
