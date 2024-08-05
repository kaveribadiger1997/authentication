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
            if (request.Username == "kaveri" && request.Password == "password")
            {
                return Ok(new { Token = "YourJWTToken" }); // Example response
            }
            return Unauthorized();
        }
    }
}
