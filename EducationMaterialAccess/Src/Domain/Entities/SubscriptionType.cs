using Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class SubscriptionType : AuditableEntity
    {
        public SubscriptionType()
        {
            DeviceContentSubscriptions = new HashSet<DeviceContentSubscription>();
        }
        
        public int Id { get; set; }
        public string Description { get; set; }
        public int LengthInMonths { get; set; }

        public ICollection<DeviceContentSubscription> DeviceContentSubscriptions { get; private set; }

    }
}
