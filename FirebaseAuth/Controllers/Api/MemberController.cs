using FirebaseAuth.Core;
using FirebaseAuth.Core.Dtos;
using FirebaseAuth.Firebase;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FirebaseAuth.Controllers.Api
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
        public ActionResult Add(MemberDto dto)
        {
            FirebaseDB firebaseDBMembers = _unitOfWork.FirebaseDB.Node("Members");

            FirebaseResponse putResponse = firebaseDBMembers.Put(JsonConvert.SerializeObject(dto));

            if (putResponse.Success)
                return Ok();
            else
                return Content(putResponse.ErrorMessage);
        }
    }
}