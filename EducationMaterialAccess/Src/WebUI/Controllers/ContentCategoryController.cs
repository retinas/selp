using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.ContentCategories.Commands.UpsertContentCategory;
using Application.ContentCategories.Queries.GetContentCategoryDetail;
using Application.ContentCategories.Queries.GetContentCategoryList;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class ContentCategoryController : BaseController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ContentCategoriesListVm>> GetAll()
        {
            return Ok(await Mediator.Send(new GetContentCategoriesListQuery()));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody]UpsertContentCategoryCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpsertContentCategoryCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ContentCategoryDetailVm>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetContentCategoryDetailQuery { Id = id }));
        }
    }
}