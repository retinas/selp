using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Devices.Queries.GetDevicesList
{
    public class DevicesListVm
    {
        public IList<DeviceLookUpDto> Devices { get; set; }
    }
}
