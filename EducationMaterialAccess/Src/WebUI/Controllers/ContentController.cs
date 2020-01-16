using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Contents.Commands;
using Application.Contents.Queries.GetContentDetail;
using Application.Contents.Queries.GetContentList;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class ContentController : BaseController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ContentListVm>> GetAll()
        {
            return Ok(await Mediator.Send(new GetContentListQuery()));
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ContentListVm>> GetAllByCompanyId(GetContentListQuery query)
        {
            return Ok(await Mediator.Send(query));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody]UpsertContentCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpsertContentCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ContentDetailVm>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetContentDetailQuery { Id = id }));
        }
    }
}