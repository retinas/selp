using Application.Devices.Commands.UpsertDevice;
using Application.Devices.Queries.GetDeviceDetail;
using Application.Devices.Queries.GetDevicesList;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    public class DeviceController : BaseController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<DevicesListVm>> GetAll()
        {
            return Ok(await Mediator.Send(new GetDevicesListQuery()));
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<DevicesListVm>> GetAllByCompanyId(GetDevicesListQuery query)
        {
            return Ok(await Mediator.Send(query));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody]UpsertDeviceCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpsertDeviceCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<DeviceDetailVm>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetDeviceDetailQuery { Id = id }));
        }
    }
}