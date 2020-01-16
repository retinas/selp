using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IEductaionMaterialAccessDbContext
    {
        public DbSet<Company> Companies { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<Content> Contents { get; set; }
        public DbSet<SubscriptionType> SubscriptionTypes { get; set; }
        public DbSet<DeviceContentSubscription> DeviceContentSubscriptions { get; set; }
        public DbSet<UserMode> UserModes { get; set; }
        public DbSet<ContentCategory> ContentCategories { get; set; }
        public DbSet<ContentDifficulty> ContentDifficulties { get; set; }
        public DbSet<ContentUserMode> ContentUserModes { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
