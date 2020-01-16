
using Infrastructure.Identity.CustomIdentityEntities;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Infrastructure.Identity
{
    public class ApplicationUser : IdentityUser
    {
        public virtual ICollection<UserCompanyAuthorizationLevel> UserCompanyAuthorizationLevels { get; set; }
    }
}
