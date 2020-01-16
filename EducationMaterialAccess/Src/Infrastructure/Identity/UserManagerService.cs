
using Application.Common.Interfaces;
using Application.Common.Models;
using Infrastructure.Identity.CustomIdentityEntities;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class UserManagerService : IUserManager
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public UserManagerService(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<(Result Result, string UserId)> CreateUserAsync(string userName, string password, bool isAdmin, bool isStaff, bool isTherapist, bool isExecutive, bool isCompanyStaff, bool isFinanceOperator, int companyId)
        {
            var user = new ApplicationUser
            {
                UserName = userName,
                Email = userName
            };

            var result = await _userManager.CreateAsync(user,password);
            var authorizationLevels = new List<UserCompanyAuthorizationLevel>
            {
                new UserCompanyAuthorizationLevel
            {
                CompanyId = companyId,
                IsAdmin = isAdmin,
                IsStaff = isStaff,
                IsExecutive = isExecutive,
                IsFinanceOperator = isFinanceOperator,
                IsTherapist = isTherapist,
                UserId = user.Id
            }
            };
            user.UserCompanyAuthorizationLevels = authorizationLevels;

            await _userManager.UpdateAsync(user);
            //TODO: tablo yerine her birini claim olarak eklemek daha iyi olacak sanırım
            //await _userManager.AddClaimsAsync

            return (result.ToApplicationResult(), user.Id);
        }

        public async Task<Result> DeleteUserAsync(string userId)
        {
            var user = _userManager.Users.SingleOrDefault(u => u.Id == userId);

            if (user != null)
            {
                return await DeleteUserAsync(user);
            }

            return Result.Success();
        }


        public async Task<Result> DeleteUserAsync(ApplicationUser user)
        {
            var result = await _userManager.DeleteAsync(user);

            return result.ToApplicationResult();
        }
    }
}
