using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.SubscriptionTypes.Commands.UpsertSubscriptionType;
using Application.SubscriptionTypes.Queries.GetSubscriptionTypeDetail;
using Application.SubscriptionTypes.Queries.GetSubscriptionTypeList;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class SubscriptionTypeController : BaseController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<SubscriptionTypeListVm>> GetAll()
        {
            return Ok(await Mediator.Send(new GetSubscriptionTypeListQuery()));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody]UpsertSubscriptionTypeCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpsertSubscriptionTypeCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<SubscriptionTypeDetailVm>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetSubscriptionTypeDetailQuery { Id = id }));
        }
    }
}