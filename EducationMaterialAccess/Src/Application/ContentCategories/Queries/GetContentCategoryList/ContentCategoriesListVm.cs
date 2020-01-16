using System;
using System.Collections.Generic;
using System.Text;

namespace Application.ContentCategories.Queries.GetContentCategoryList
{
    public class ContentCategoriesListVm
    {
        public IList<ContentCategoryLookUpDto> ContentCategories { get; set; }
    }
}
