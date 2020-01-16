using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Persistence
{
    public class EducationMaterialAccessDbContext : DbContext,IEductaionMaterialAccessDbContext
    {
        private readonly ICurrentUserService _currentUserService;
        public EducationMaterialAccessDbContext(DbContextOptions<EducationMaterialAccessDbContext> options) : base(options)
        {
        }

        public EducationMaterialAccessDbContext(
           DbContextOptions<EducationMaterialAccessDbContext> options,
           ICurrentUserService currentUserService)
           : base(options)
        {
            _currentUserService = currentUserService;
        }
        public DbSet<Company> Companies { get ; set ; }
        public DbSet<Device> Devices { get ; set ; }
        public DbSet<Content> Contents { get; set; }
        public DbSet<SubscriptionType> SubscriptionTypes { get; set; }
        public DbSet<DeviceContentSubscription> DeviceContentSubscriptions { get; set; }
        public DbSet<UserMode> UserModes { get; set; }
        public DbSet<ContentCategory> ContentCategories { get; set; }
        public DbSet<ContentDifficulty> ContentDifficulties { get; set; }
        public DbSet<ContentUserMode> ContentUserModes { get; set; }


        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            foreach (var entry in ChangeTracker.Entries<AuditableEntity>())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.CreatedBy = _currentUserService.UserId;
                        entry.Entity.Created = DateTime.Now;
                        break;
                    case EntityState.Modified:
                        entry.Entity.LastModifiedBy = _currentUserService.UserId;
                        entry.Entity.LastModified = DateTime.Now;
                        break;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(EducationMaterialAccessDbContext).Assembly);
        }
    }
}
