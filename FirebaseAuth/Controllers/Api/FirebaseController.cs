using FirebaseAuthExample.Core;
using FirebaseAuthExample.Core.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using FirebaseAdmin.Auth;
using System.Threading.Tasks;
using FirebaseAuthExample.ViewModels;

namespace FirebaseAuthExample.Controllers.Api
{
    public class FirebaseController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public FirebaseController()
        {
        }

        // Put: api/Member/Add
        [Authorize]
        public async Task<ActionResult> GetToken(MemberDto dto)
        {
            var uid = "custom-uid";

            // Add some custom claims to the token, which will be available on the
            // ID token after successful sign in.
            var claims = new Dictionary<string, object>()
            {
                { "premium", true },
                { "package", "gold" },
            };

            string customToken = await FirebaseAuth.DefaultInstance.CreateCustomTokenAsync(uid, claims);


            var customTokenViewModel = new CustomTokenViewModel
            {
                CustomToken = customToken
            };

            return Ok(customTokenViewModel);
        }
    }
}