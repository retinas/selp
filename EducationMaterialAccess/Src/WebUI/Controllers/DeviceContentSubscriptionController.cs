using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.DeviceContentSubscriptions.Commands.UpsertDeviceContentSubscription;
using Application.DeviceContentSubscriptions.Queries.GetDeviceContentSubscriptionDetail;
using Application.DeviceContentSubscriptions.Queries.GetDeviceContentSubscriptionList;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class DeviceContentSubscriptionController : BaseController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<DeviceContentSubscriptionListVm>> GetAll()
        {
            return Ok(await Mediator.Send(new GetDeviceContentSubscriptionListQuery()));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody]UpsertDeviceContentSubscriptionCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpsertDeviceContentSubscriptionCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<DeviceContentSubscriptionDetailVm>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetDeviceContentSubscriptionDetailQuery { Id = id }));
        }
    }
}