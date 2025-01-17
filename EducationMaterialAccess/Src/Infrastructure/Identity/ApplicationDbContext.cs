﻿using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Infrastructure.Identity.CustomIdentityEntities;


namespace Infrastructure.Identity
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
           DbContextOptions<ApplicationDbContext> options,
           IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
           
        }
        DbSet<UserCompanyAuthorizationLevel> UserCompanyAuthorizationLevel { get; set; }
    }
}
