using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Identity.CustomIdentityEntities
{
    public class UserCompanyAuthorizationLevel
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public bool IsExecutive { get; set; }
        public bool IsFinanceOperator { get; set; }
        public bool IsTherapist { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsStaff { get; set; }
        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

    }
}
