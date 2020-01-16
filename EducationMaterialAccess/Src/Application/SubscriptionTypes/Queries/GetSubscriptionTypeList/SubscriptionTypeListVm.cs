using System;
using System.Collections.Generic;
using System.Text;

namespace Application.SubscriptionTypes.Queries.GetSubscriptionTypeList
{
    public class SubscriptionTypeListVm
    {
        public IList<SubscriptionTypeLookUpDto> SubscriptionTypes { get; set; }
    }
}
