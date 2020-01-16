using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.UserModes.Commands.UpsertUserMode;
using Application.UserModes.Queries.GetUserModeDetail;
using Application.UserModes.Queries.GetUserModeList;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class UserModeController : BaseController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<UserModesListVm>> GetAll()
        {
            return Ok(await Mediator.Send(new GetUserModeListQuery()));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody]UpsertUserModeCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpsertUserModeCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<UserModeDetailVm>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetUserModeDetailQuery { Id = id }));
        }
    }
}