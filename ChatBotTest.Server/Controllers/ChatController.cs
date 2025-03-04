using ChatBotTest.DataModel.Dto;
using Microsoft.AspNetCore.Mvc;

namespace ChatBotTest.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        private static IList<MessageDto> Messages = new List<MessageDto>();

        private readonly ILogger<WeatherForecastController> _logger;

        public ChatController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{speakerName}")]
        public ChatDto GetChat(string speakerName)
        {
            return new ChatDto()
            {
                SpeakerId = Guid.NewGuid(),
                Messages = Messages
            };
        }


        [HttpPost]
        public MessageDto AddMessage(MessageDto messageToAdd)
        {
            Messages.Add(messageToAdd);
            return new MessageDto()
            {
                Id = Guid.NewGuid(),
                Content = "Kontent",
                SpeakerId = Guid.Empty,
                TimeStamp = DateTime.Now
            };
        }
    }
}
