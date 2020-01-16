using Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class Content : AuditableEntity
    {
        public Content()
        {
            DeviceContentSubscriptions = new HashSet<DeviceContentSubscription>();
            ContentUserModes = new HashSet<ContentUserMode>();
            OculusContentKeys = new HashSet<OculusContentKey>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Instructions { get; set; }
        public string UserCompetence { get; set; }
        public string AdditionalInfo { get; set; }
        public int ContentCategoryId { get; set; }
        public int ContentDifficultyId { get; set; }
        public string ImageBase64 { get; set; }
        public string OculusContentId { get; set; }

        public ICollection<DeviceContentSubscription> DeviceContentSubscriptions { get; private set; }
        public ICollection<ContentUserMode> ContentUserModes { get; private set; }
        public ICollection<OculusContentKey> OculusContentKeys { get; set; }
        public ContentCategory ContentCategory { get; set; }
        public ContentDifficulty ContentDifficulty { get; set; }
    }
}
