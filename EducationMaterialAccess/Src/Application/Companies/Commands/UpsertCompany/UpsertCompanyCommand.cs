using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Companies.Commands.UpsertCompany
{
    public class UpsertCompanyCommand : IRequest<int>
    {
        public int? Id { get; set; }
        public string CompanyName { get; set; }
        public string CompanyAdress { get; set; }
        public string CompanyProvince { get; set; }
        public int CompanyVAT { get; set; }
        public string CompanyTaxOffice { get; set; }

        public class Handler : IRequestHandler<UpsertCompanyCommand,int>
        {
            private readonly IEductaionMaterialAccessDbContext _context;
            private readonly IMediator _mediator;

            public Handler(IEductaionMaterialAccessDbContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }

            public async Task<int> Handle(UpsertCompanyCommand request, CancellationToken cancellationToken)
            {
                Company entity;

                if (request.Id.HasValue)
                {
                    entity = await _context.Companies.FindAsync(request.Id.Value);
                }
                else
                {
                    entity = new Company();
                        
                    _context.Companies.Add(entity);
                }
                entity.CompanyName = request.CompanyName;
                entity.CompanyAdress = request.CompanyAdress;
                entity.CompanyProvince = request.CompanyProvince;
                entity.CompanyTaxOffice = request.CompanyTaxOffice;
                entity.CompanyVAT = request.CompanyVAT;
     
                
                await _context.SaveChangesAsync(cancellationToken);

                return entity.Id;

            }
        }
    }

  
}
