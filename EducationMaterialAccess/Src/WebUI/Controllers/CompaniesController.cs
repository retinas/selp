using System.Threading.Tasks;
using Application.Companies.Commands.UpsertCompany;
using Application.Companies.Queries.GetCompaniesList;
using Application.Companies.Queries.GetCompanyDetail;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class CompaniesController : BaseController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<CompaniesListVm>> GetAll()
        {
            return Ok(await Mediator.Send(new GetCompaniesListQuery()));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody]UpsertCompanyCommand command)
        {
            var id = await Mediator.Send(command);

            return Ok(id);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpsertCompanyCommand command)
        {
            var id = await Mediator.Send(command);

            return Ok(id);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<CompanyDetailVm>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetCompanyDetailQuery { Id = id }));
        }

    }
}