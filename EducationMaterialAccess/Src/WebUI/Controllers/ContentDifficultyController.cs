using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.ContentDifficulties.Commands.UpsertContentDifficulty;
using Application.ContentDifficulties.Queries.GetContentDifficultyDetail;
using Application.ContentDifficulties.Queries.GetContentDifficultyList;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class ContentDifficultyController : BaseController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ContentDifficultyListVm>> GetAll()
        {
            return Ok(await Mediator.Send(new GetContentDifficultyListQuery()));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody]UpsertContentDifficultyCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpsertContentDifficultyCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ContentDifficultyDetailVm>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetContentDifficultyDetailQuery { Id = id }));
        }
    }
}