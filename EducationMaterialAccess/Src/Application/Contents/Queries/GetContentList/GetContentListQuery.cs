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

namespace Application.Contents.Queries.GetContentList
{
    public class GetContentListQuery : IRequest<ContentListVm>
    {
        public int? CompanyId { get; set; }
        public class GetContentListQueryHandler : IRequestHandler<GetContentListQuery, ContentListVm>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMapper _mapper;

            public GetContentListQueryHandler(IEductaionMaterialAccessDbContext context, IMapper mapper) 
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<ContentListVm> Handle(GetContentListQuery request, CancellationToken cancellationToken)
            {
                List<ContentLookUpDto> contents;
                if (request.CompanyId.HasValue && request.CompanyId.Value > 0)
                {
                    contents = await _context.DeviceContentSubscriptions.Where(p=>p.Device.CompanyId == request.CompanyId).Select(t=>t.Content)
                            .ProjectTo<ContentLookUpDto>(_mapper.ConfigurationProvider)
                            .OrderBy(e => e.Description)
                            .ToListAsync(cancellationToken);
                }
                else
                {
                    contents = await _context.Contents
                            .ProjectTo<ContentLookUpDto>(_mapper.ConfigurationProvider)
                            .OrderBy(e => e.Description)
                            .ToListAsync(cancellationToken);
                }
                var vm = new ContentListVm
                {
                    Contents = contents
                };

                return vm;
            }
        }
    }
}