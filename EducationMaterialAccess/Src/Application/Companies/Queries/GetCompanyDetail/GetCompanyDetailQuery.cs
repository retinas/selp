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

namespace Application.Companies.Queries.GetCompanyDetail
{
    public class GetCompanyDetailQuery : IRequest<CompanyDetailVm>
    {
        public int Id { get; set; }

        public class GetCompanyDetailQueryHandler : IRequestHandler<GetCompanyDetailQuery, CompanyDetailVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetCompanyDetailQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<CompanyDetailVm> Handle(GetCompanyDetailQuery request, CancellationToken cancellationToken)
            {
                var vm = await _context.Companies
                    .Where(p=>p.Id == request.Id)
                    .ProjectTo<CompanyDetailVm>(_mapper.ConfigurationProvider)
                    .SingleOrDefaultAsync(cancellationToken);

                return vm;
            }
        }
    }
}
