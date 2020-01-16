using Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class Device : AuditableEntity
    {
        public Device() 
        {
            DeviceContentSubscriptions = new HashSet<DeviceContentSubscription>();
        }

        public int Id { get; set; }
        public string Model { get; set; }
        public string DeviceNumber { get; set; }
        public int CompanyId { get; set; }
        public Company Company { get; set; }

        public ICollection<DeviceContentSubscription> DeviceContentSubscriptions { get; private set; }
        

    }
}
