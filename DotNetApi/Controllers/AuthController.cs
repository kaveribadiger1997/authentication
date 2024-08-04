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
            // Implement your login logic here
            if (request.Username == "testuser" && request.Password == "testpassword")
            {
                return Ok(new { Token = "YourJWTToken" }); // Example response
            }
            return Unauthorized();
        }
    }
}
