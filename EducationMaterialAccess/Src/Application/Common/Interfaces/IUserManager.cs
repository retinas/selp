using Application.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IUserManager
    {
        Task<(Result Result, string UserId)> CreateUserAsync(string userName, string password,bool isStaff, bool isAdmin, bool isTherapist, bool isExecutive, bool isCompanyStaff, bool isFinanceOperator,int companyId);

        Task<Result> DeleteUserAsync(string userId);
    }
}
