using ChatBotTest.DataModel.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatBotTest.DataModel.Dto
{
    public class MessageDto
    {
        public Guid? Id { get; set; }

        public string Content { get; set; }

        public ReactionType Reaction { get; set; }

        public Guid SpeakerId { get; set; }

        public DateTime TimeStamp { get; set; }
    }
}
