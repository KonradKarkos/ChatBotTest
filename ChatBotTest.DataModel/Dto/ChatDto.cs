using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatBotTest.DataModel.Dto
{
    public class ChatDto
    {
        public Guid SpeakerId { get; set; }

        public IList<MessageDto> Messages { get; set; } = new List<MessageDto>();
    }
}
