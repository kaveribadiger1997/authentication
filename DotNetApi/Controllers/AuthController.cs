using DotNetApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            // logic
            if (request.Username == "kaveri" && request.Password == "password") // default username and password, other than these it will always shows error
            {
                return Ok(new { Token = "kaveri@123" }); // Example response
            }
            return Unauthorized();
        }
    }
}
