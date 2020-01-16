using Domain.Common;
using System;

namespace Domain.Entities
{
    public class DeviceContentSubscription : AuditableEntity
    {
        public int Id { get; set; }
        public int DeviceId { get; set; }
        public int SubscriptionTypeId { get; set; }
        public int ContentId { get; set; }
        public double Price { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public bool IsActive { get; set; }
        public int NumberOfPaymentInstallments { get; set; }
        public Device Device { get; set; }
        public SubscriptionType SubscriptionType { get; set; }
        public Content Content { get; set; }
    }
}
