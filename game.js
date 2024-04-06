var testBool = true;

function pickCard() {
  var chosenCard = Math.floor(Math.random() * deck.length)
  println(deck[chosenCard].name);

}

const tarotReading = () => {
  pickCard("test");
}
const gameDisk = () => ({
  roomId: 'outside-bar',
  rooms: [
    {
      id: 'outside-bar',
      name: `
      ===================
      BAR NAME (OUTSIDE)
      ===================`,
      desc: `They say if you don’t deal with one’s own demons, they will deal with you. It's funny how one can get help from sources they least expect. To make any sense of it, I’d have to go back three years. To the beginning of the pain.

      Back then, I was still in the force, GlipGlorpPD,  Au Gratin Island, Pangratto, Effin’-Ham. “When ya gonna work for me, detective?” I scoffed at the idea, shaking my head with a smile. “You’d make me work undercover at some hotel, filling out invoices. That’d be dangerous for my health. Besides, I’m getting carpet installed today, that comes first.” I took one long drag from the last of a comforting pack of cigarettes. “See, last one today. It's bad for the carpet.” 

  My boss had a hard time stifling his office-level laughter. “That’s you, a regular boy scout. Still on for a game of backgammon this Tuesday? Maybe parcheesi?” My eyes furrowed at the thought of another high stakes game of Stratego. “Like falling off a log.”
  
  Life was good. It wasn’t everyday that an overworked detective got the feeling of a new carpet between his toes. The sun setting on a sweet summer’s day, that familiar chemical smell of upholstery fresh from the factory, the sounds of cars without mufflers destroying my ear drums - a carpet, white and pristine as the sands of the moon. The American Dream, come true. My hands trembled in front of my own door. “I can’t believe this is really happening.” 

  But dreams have a nasty habit of going bad when you’re not looking. The sun had gone down, shining a foreboding twilight across the familiar walls of the living room. I didn’t like how the show started, they had given me a front row seat, without the pop corn. There it sat, in the middle of the room, two boot prints. Black stamps on my perfect record of a carpet, decaying all the way to its roots, too molecular aligned to even think about cleaning up the mess. I fell to my knees, my hands clutching the stains while sounds I could only hope to imagine escaped my throat. 

  That was three years ago. The stain never came out. For three years, I pass by a mark in my room that follows me to work, to sleep, to dinner. I couldn’t escape. I told my boss I would be transferring to the vandalism task force. It took us three long months before we got something, a tip. Someone had agreed to meet with us, a carpet cleaner. He said that he had valuable information that he was willing to trade.
  
  ===============
  BAR NAME (OUTSIDE)
  ===============`,

  items: [
    {

    }
  ],

  exits: [
    {
      dir: ['inside the bar', 'inside', 'the bar'], id: 'inside-bar',
    }
  ]

  },


  {
    id: 'inside-bar',
    name: `
    ================
    BAR NAME (INSIDE)
    ================`,

    items: [
      {

      }
    ],

    exits: [
      {
        dir: ['outside the bar', 'outside'], id: 'outside-bar'
      },
      {
        dir: ['bar', 'the bar', 'north'], id: 'bar'
      },
    ]
  },

  {
    id: 'bar',
    name: `
    =======
    THE BAR
    =======`,
    items: [
      {

      }
    ],

    exits: [
      {
        dir: ['back', 'bar name', 'south'], id: 'inside-bar'
      }
    ]
  }],

  inventory: [
    {
      name: 'Cigarettes',
      desc: 'Highly addictive and hazardous to your health.',
      onUse: () => println(`Maybe now isn't the time.`)
    },
    {
      name: 'Velo-Dog Pocket Pistol',
      desc: '',
    }
  ],

  characters: [
    {
      name: ['Cleaner', 'Cleaning Man', 'Felix', 'Guy', 'Person', 'Man'],
      roomId: 'inside-bar',
      desc: `He's devilishly handsome.`,
      onTalk: () => {
        println(`You make eye contact with the man in front of you as you decide what to say. His eyes don't shy away - in fact, you realize that he has been looking
      at you the entire time. His gaze is piercing, yet blank, his posture refined and still.

      You tell him that you have some questions you'd like to ask.
      "Go ahead."`);
      },
      topics: [
        {
          option: 'What do you know about the **THING**?',
          line: `"Nothing interesting."`,
        },

        {
          option: `I see you brought a **TAROT** deck with you. Seems a bit strange that you of all people would be interested in divination.`,
          line: `"I have many interests. Let me give you a reading." he replies.`,
          prereqs: ['lookedAtDeck'],
          onSelected(){
            tarotReading();
          }
        }
      ]
    }
  ],
  
    });
