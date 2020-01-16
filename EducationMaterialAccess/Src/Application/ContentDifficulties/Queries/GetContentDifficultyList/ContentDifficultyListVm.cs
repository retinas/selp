using System;
using System.Collections.Generic;
using System.Text;

namespace Application.ContentDifficulties.Queries.GetContentDifficultyList
{
    public class ContentDifficultyListVm
    {
        public IList<ContentDifficultyLookUpDto> ContentDifficulties { get; set; }
    }
}
