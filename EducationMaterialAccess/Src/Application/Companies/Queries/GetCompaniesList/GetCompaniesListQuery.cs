using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Companies.Queries.GetCompaniesList
{
    public class GetCompaniesListQuery : IRequest<CompaniesListVm>
    {
        public class GetCompaniesListQueryHandler : IRequestHandler<GetCompaniesListQuery, CompaniesListVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetCompaniesListQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<CompaniesListVm> Handle(GetCompaniesListQuery request, CancellationToken cancellationToken)
            {
                var companies = await _context.Companies
                    .ProjectTo<CompanyLookUpDto>(_mapper.ConfigurationProvider)
                    .OrderBy(e => e.Name)
                    .ToListAsync(cancellationToken);

                var vm = new CompaniesListVm
                {
                    Companies = companies
                };

                return vm;
            }
        }
    }
}
