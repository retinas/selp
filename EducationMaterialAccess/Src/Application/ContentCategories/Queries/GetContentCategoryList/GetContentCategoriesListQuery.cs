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

namespace Application.ContentCategories.Queries.GetContentCategoryList
{
    public class GetContentCategoriesListQuery: IRequest<ContentCategoriesListVm>
    {
        public class GetUserModeListQueryHandler : IRequestHandler<GetContentCategoriesListQuery, ContentCategoriesListVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetUserModeListQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<ContentCategoriesListVm> Handle(GetContentCategoriesListQuery request, CancellationToken cancellationToken)
            {
                List<ContentCategoryLookUpDto> contentCategories;

                contentCategories = await _context.ContentCategories
                        .ProjectTo<ContentCategoryLookUpDto>(_mapper.ConfigurationProvider)
                        .OrderBy(e => e.Description)
                        .ToListAsync(cancellationToken);

                var vm = new ContentCategoriesListVm
                {
                    ContentCategories = contentCategories
                };

                return vm;
            }
        }
    }
}
