using Microsoft.EntityFrameworkCore;
using Persistence.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace Persistence
{
    public class EducationMaterialAccessDbContextFactory : DesignTimeDbContextFactoryBase<EducationMaterialAccessDbContext>
    {
        protected override EducationMaterialAccessDbContext CreateNewInstance(DbContextOptions<EducationMaterialAccessDbContext> options)
        {
            return new EducationMaterialAccessDbContext(options);
        }
    }
}
