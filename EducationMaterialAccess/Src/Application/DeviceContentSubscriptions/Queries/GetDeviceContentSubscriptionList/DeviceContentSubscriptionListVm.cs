using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DeviceContentSubscriptions.Queries.GetDeviceContentSubscriptionList
{
    public class DeviceContentSubscriptionListVm
    {
        public IList<DeviceContentSubscriptionLookUpDto> DeviceContentSubscriptions { get; set; }
        
    }
}
