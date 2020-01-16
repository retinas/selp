using Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class UserMode :  AuditableEntity
    {
        public UserMode()
        {
            ContentUserModes = new HashSet<ContentUserMode>();
        }
        public int Id { get; set; }

        public string Description { get; set; }

        public int Code { get; set; }

        public ICollection<ContentUserMode> ContentUserModes { get;private set; }
    }
}
