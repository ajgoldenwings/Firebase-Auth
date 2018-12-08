using FirebaseAuthExample.Core;
using FirebaseAuthExample.Core.Dtos;
using FirebaseAuthExample.Firebase;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FirebaseAuthExample.Controllers.Api
{
    public class MemberController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public MemberController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // Put: api/Member/Add
        [HttpPut]
        [Route("api/Member/Add")]
        [Authorize]
        public ActionResult Add(MemberDto dto)
        {
            FirebaseDB firebaseDBMembers = _unitOfWork.FirebaseDB.Node("Members").Node("Member");

            FirebaseResponse putResponse = firebaseDBMembers.Put(JsonConvert.SerializeObject(dto));

            //var uid = "some-uid";

            //string customToken = await FirebaseAuth.DefaultInstance.CreateCustomTokenAsync(uid);
            // Send token back to client


            if (putResponse.Success)
                return Ok();
            else
                return Content(putResponse.ErrorMessage);
        }

        // Put: api/Member/AddNoAuth
        [HttpPut]
        [Route("api/Member/AddNoAuth")]
        public ActionResult AddNoAuth(MemberDto dto)
        {
            FirebaseDB firebaseDBMembers = _unitOfWork.FirebaseDB.Node("Members").Node("Member");

            FirebaseResponse putResponse = firebaseDBMembers.Put(JsonConvert.SerializeObject(dto));

            if (putResponse.Success)
                return Ok();
            else
                return Content(putResponse.ErrorMessage);
        }
    }
}