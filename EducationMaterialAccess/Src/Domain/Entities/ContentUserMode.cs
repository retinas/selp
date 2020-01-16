using Domain.Common;

namespace Domain.Entities
{
    public class ContentUserMode : AuditableEntity
    {
        public int Id { get; set; }
        public int ContentId { get; set; }
        public int UserModeId { get; set; }

        public UserMode UserMode { get; set; }
        public Content Content { get; set; }
    }
}
