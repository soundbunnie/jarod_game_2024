var testBool = true;

var isOutside = false;

var cigarettesSmoked = 0;

var cardsInspected = false;

/* TEMPORARY SOLUTION : REPLACE */
var topicsBadgeUnlocked = false;

var topicsCarpetUnlocked = false;

var topicsTarotUnlocked = false;

var felixTopicsBadge =
  {
  option: `Show him my **BADGE**`,
  line: `I thumbed through my coat, and produced my police badge. He scoffed in my direction, his voice
  rumbling from his chest. “Oh, I know who you are, DETECTIVE. I don’t feel like conversing with your ilk.
  Leave me be.” Tough crowd.`,
  }

var felixTopicsTarot = 
{
  option: `Ask about the **TAROT** cards`,
  line: `“So, you’re into divination?” Finally, something piqued his interest, his hand slowly coiling over
  the cards, eyes slowly gazing over my form. He replied, “ Something to pass the time, DETECTIVE. “ His
  eyes slowly drifted to the cards, lifting them from the table, beginning to shuffle, remaining silent for
  some time. “. . .If you wish to do business with me, I must verify you are the person you *CLAIM* to be.”
  Before I could even say yes, he started to shuffle again, placing three cards in front of me.`,
  onSelected: () => {
    tarotReading();
    var felix = getCharacter('man');
    if (!topicsCarpetUnlocked && cigarettesSmoked){
      felix.topics.push(felixTopicsCarpet);
      topicsCarpetUnlocked = true;
    }

  }
}

var felixTopicsCarpet = 
{
  option: `Ask about the **CARPET**`,
  line: `This was the moment. My fingers curled into fists, as those faithful words left my mouth. "Felix, what do you know about carpet vandalism?" 
  He failed to meet my eyes, staring into the well of his mostly empty drink. "Carpet vandalism?" He replied, before beginning to laugh, 
  producing a simple wooden pipe from his suitjacket. He banged the tobacco that lay within the pipe, pinching a new batch inside, squishing 
  his thumb to pack in the poison. "I should be asking **you** that question, DETECTIVE."

  I was stunned, to say the least. "Me? I investigate it, I don't participate in it." He man laughed again as a bright red tail began to curl out of his suit jacket,
  standing and towering above, pointing a single finger in my face, producing the pipe to his face. "Look within yourself, DETECTIVE. Feel the sins crawling on your soles and face them."
  I looked down, at my feet. 

  I was there, standing in an infinitely white space of carpet, that stretched as far as the eye could see. Fuzzy little rows of fleece painted a perfect white country side.
  My feet, my dirty shoes, planted right in the middle, two familiar boot prints I had long forgotten. "Its always been you, DETECTIVE." I knew my crime, but I just wasn't
  strong enough to face it just yet. 

  I looked back up at him, aware of the truth in my head. I had ruined my own carpet. "Guess it has, Felix. How did you know?"

  The man, no the demon stood to his full, gargantuan height, slapping a pile of bills on the counter. "You tracked mud inside."

  I looked back, a pitter patter of footprints highlighted by the orange glow up above. "Looked like this case solved itself, DETECTIVE. Must be your lucky day."

  "Actually, its my birthday, Felix."

  He turned to face me completely, offering the pipe of tobacco, cartoonishly large for my human face. "Got a light?"

  I laughed awkwardly, remarking that I had just used my last seconds on my lighter, and the damn thing didn't work. "What the hell are you talkin' about, DETECTIVE?
  Ain't you ever heard of matches?"

  "I have, Felix. I have."

  Well, another day, another crime well solved. Man, I'm good. I didn't even have to go very far to arrest the culprit. "You're coming with me, me." I opened the door to my car,
  and cuffed myself to the wheel. "You're not going anywhere, haha!" I laughed to myself, leaning back in the seat. At least I got this catharsis. I might never
  get my carpet back, but I'll always have this, right here, right now. 

  I sat up in my seat, and breathed deep. "Guess there'll be more carpets." I stared down at my wrist, cuffed to the wheel. "Man, am I dumb."
  `,
  onSelected: () => {
    enterRoom('credits');
  }
}

var drinkMenu = `
+------------------------------------+
|‎‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎|  
| All drinks listed are MARKET PRICE |
| ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ |
+------------------------------------+
| **__Pink Berry__** ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
+------------------------------------+
| Wall's 0% Pink Berry, ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| Bael Farm Raspberry Lemonade, ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| and a strawberry garnish. ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| *Sip on the sweetness of berries* ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| *and orange blossom without any*‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎|
| *of the DEMONIC INFLUENCE* ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
+------------------------------------+
| **__Blackcurrant Mule__** ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
+------------------------------------+
| Bael Farm Blackcurrant cordial, ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| Bael Farm Ginger Beer, ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| a squeeze of lime, and a ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| raspberry garnish. ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎|
| *Wonderful for those spring months* ‎‏‏‎ ‎‏‏‎|
| *or the IDES OF MARCH* ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
+------------------------------------+
| **__I-Can't-Believe-It's-Not-Sunday ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| Gin Spritz**__ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
+------------------------------------+
| Gin, prosecco, and schwepps ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| lemonade. ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎|
| *This gin cocktail is a guarenteed* ‎‏‏‎ ‎‏‏‎|
| *mood boost, for those of a* ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
| *NERVOUS DISPOSITION* ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎|
+------------------------------------+`

function pickCard() {
  var chosenCard = Math.floor(Math.random() * deck.length)
  println(deck[chosenCard].name);

}

const tarotReading = () => {
  for (let i = 0; i < 3; i++){
    pickCard();
  }
  println(`“Well, that about does it, you really are who you say you are, DETECTIVE.”
  “I haven’t even introduced myself to you, yet.”
  “Where are my manners, DETECTIVE? He stretched an old, wrinkly red hand, to which i cautiously took,
  shaking firm. “Name’s Felix. Felix Natalis.”`);
}
const gameDisk = () => ({
  roomId: 'outside',
  rooms: [
    {
      id: 'outside',
      name: `
      =======
      ‎‏‏‎‎**OUTSIDE**‎‏‏‎ 
      =======`,
      desc: `‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ They say if you don’t deal with one’s own demons, they will deal with you. It's funny how one can get help from sources they least expect. To make any sense of it, I’d have to go back three years. To the beginning of the pain.
      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ 
      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Back then, I was still in the force, GlipGlorpPD,  Au Gratin Island, Pangratto, Effin’-Ham. “When ya gonna work for me, detective?” I scoffed at the idea, shaking my head at my boss, with a smile. “You’d make me work undercover at some hotel, filling out invoices. That’d be dangerous for my health. Besides, I’m getting carpet installed today, just for my birthday. That comes first.” I took one long drag from the last of a comforting pack of cigarettes. “See, last one today. It's bad for the carpet.” 
      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ My boss had a hard time stifling his office-level laughter. “That’s you, a regular boy scout. Happy birthday, by the way, Detective. Still on for a game of backgammon this Tuesday? Maybe parcheesi?” My eyes furrowed at the thought of another high stakes game of Stratego. “Like falling off a log.”

      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Life was good. It wasn’t everyday that an overworked detective got the feeling of a new carpet between his toes. The sun setting on a sweet summer’s day, that familiar chemical smell of upholstery fresh from the factory, the sounds of cars without mufflers destroying my ear drums - a carpet, white and pristine as the sands of the moon. The American Dream, come true. My hands trembled in front of my own door. “I can’t believe this is really happening.” 
      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ 
      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ But dreams have a nasty habit of going bad when you’re not looking. The sun had gone down, shining a foreboding twilight across the familiar walls of the living room. I didn’t like how the show started, they had given me a front row seat, without the popcorn. There it sat, in the middle of the room, two boot prints, like a surprise party I didn't want. Black stamps on my perfect record of a carpet, decaying all the way to its roots, too molecular aligned to even think about cleaning up the mess. I fell to my knees, my hands clutching the stains while sounds I could only hope to imagine escaped my throat. 
      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ 
      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ That was three years ago. The stain never came out. For three years, I pass by a mark in my room that follows me to work, to sleep, to dinner. I couldn’t escape. I told my boss I would be transferring to the vandalism task force. It took us three long years before we got something, a tip.  A dime-dropper had tipped us off that there was a bar on the slightly-less-than-ideal side of the tracks, y’know, the kind of part of town where you could really get your carpet cleaned, that there was a man there by the name of Felix Natalis, who knew everything I needed to know about carpet vandalism, a real big player, but retired, an old timer. Word was getting out that he was getting ready to talk, and I’d be more than willing to oblige him. 
  
  ========
  ‎‏‏‎‎**OUTSIDE**‎‏‏‎ 
  ========
  
  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ The bar sat inside a strip mall, between an old abandoned warehouse and a Chuck E. Cheese that I wasn’t sure was even still operational. I stood behind my car, gazing up at the cheap neon sign that indicated that this place of business actually served people. Another larger sign sat above it, with the words “The Axe N’ Cleaver” in cheap, red, Times New Roman. Fitting name, as this is the very place that Justice would meet its end. 

You are standing OUTSIDE.
You can see some SIGNS, and the DOOR, which is to your north.
`,

  onLook: () => {
    var outside = getRoom('outside');
    outside.desc = `The weather was a pleasant grey overcast, reminding me of the constant bleakness of life. The asphalt down below, pooling with standing water did little to distract me from that constant. My car sat nestled in a parking space behind me, while the answers to everything lay within the walls of the Axe n’ Cleaver.
    `;
  },

  onEnter: () => {
    isOutside = true;
  },

  items: [
    {
      name: ['signs', 'sign','the sign'],
      desc: `Cheap red letting depicting the “Axe N’ Cleaver” illuminated underneath the cheap lit vinyl of the sign. Just underneath it, a neon ‘open’ sign blinked silently, on and off.
      `,
    },
    {
      name: ['door', 'bar door'],
      desc: `Apart from the torn fliers that line the walls of the door, it was one of the doors of all time.`,
    },
    {
      name: ['car'],
      desc: `Just my daily drive, a Big Ugly Indestructible Cat Killer. I don’t think I left anything important there. Maybe my keys? Who knows.`,
    },
  ],

  exits: [
    {
      dir: ['inside the bar', 'inside', 'the bar', 'north', 'door'], id: 'inside-bar',
    }
  ]

  },


  {
    id: 'inside-bar',
    name: `
    ==============
    AXE N' CLEAVER
    ==============`,
    desc: `
    The bar sat mostly empty, devoid of business, but settled with lots of style, the place reeked of old stories. It seemed to be at one point maybe an Irish pub, or recreated to look like something out of Ingleland, with its old wooden bar and comforting orange lighting, reflecting off the bottles. Cheap planks of wood painted with unflattering splotches of blackness lay beneath my feet, reminding me of why I was here. 

You are standing inside the AXE N’ CLEAVER.
You can see a MAN sitting at the BAR to your NORTH, as well as some BATHROOMS to your EAST. 
`,

    onEnter: () => {
      isOutside = false;
    },

    items: [
      {
        name: ['man'],
        desc: `A hulking visage of a man sat lazily at the counter in front of me. His face was obscured in
        shadow, his clothes illuminated by the radiant orange glow from the bar. He was hunched over the bar,
        wearing a cream-coloured daysuit, idly sipping away at the drinks. A comfortable line of empty glasses lay
        to his right, he’s been here a while. This must be my guy.`
      }
    ],

    exits: [
      {
        dir: ['outside the bar', 'outside', 'south'], id: 'outside'
      },
      {
        dir: ['bar', 'the bar', 'north'], id: 'bar',
      },
      {
        dir: ['east'], id: 'bathrooms',
      },
    ]
  },

  {
    id: 'bar',
    name: `
    =========
    BAR
    =========`,
    desc: `I approached the bar, gathering a closer look at the single patron. This guy was huge, and could
    drink to match his size. He sat with an array of empty glasses around him. A deck of CARDS lay next to his
    left hand, which was resting on the bar with the rest of his massive torso. His skin was bright red, and her
    nails were sharp, long, and black. His only acknowledgement was the perk of an eyebrow and a grunt.
    You are standing by the BAR.
    The floor of the AXE N’ CLEAVER is behind you to your SOUTH.
    You can see a deck of CARDS, a drink MENU, and a MAN sitting at the bar`,

    exits: [
      {
        dir: ['south', 'back'], id: 'inside-bar'
      }
    ],

    items: [
      {
        name: ['cards', 'card', 'deck', 'tarot', 'tarot cards', 'tarot deck'],
        desc: `A standard Rider-Waite tarot deck sat on the bar in front of the man.`,
        onUse: () => {
          var felix = getCharacter('man')
          println(`That's not mine`);
          if (!topicsTarotUnlocked && cigarettesSmoked){
            felix.topics.push(felixTopicsTarot);
            topicsTarotUnlocked = true;
          }
        },
        onLook: () =>{
          var felix = getCharacter('man')
          if (!topicsTarotUnlocked && cigarettesSmoked){
            var felix = getCharacter('man')
            felix.topics.push(felixTopicsTarot);
            topicsTarotUnlocked = true;
          }
        }
      },
      {
        name: ['menu', 'bar menu'],
        desc: `It's the menu for the bar.`,
        onLook: () => {
          if (getItemInInventory('menu')){
            println(`A cheap plastic cover laminated the paper menu from my dirty, law giving hands. It was a drink
            menu, listed with all the staples one might expect, white wine, red wine, fritzy spitzy ditzy do-hahs,
            glimby-jimbly-aperolizy-spritza-honey-smackers. Man I really don’t get these british names for stuff. Let’s
            just look at the cocktails.`);
          }
        },
        onUse: () => {
          if (getItemInInventory('menu')){
            println(`===========================` + drinkMenu);
          }
        },
        isTakeable: true,
      }
    ],

  },

  { 
    id: 'bathrooms',
    name: `
    ==========
    BATHROOMS
    ==========`,
    desc: `I swung the door open, and it slammed shut behind me, making it too dark to see, well, anything.
    I feel like I am likely to be eaten by a grue, for what it’s worth.
    You are standing inside the BATHROOM.
    There is an exit to your WEST.`,
    onEnter: () => {
      isOutside = false;
    },
    exits: [
      {
        dir: 'west', id: 'inside-bar'
      }
    ]
  },

{ 
  id: 'credits',
  name: 'credits',
  desc: `====================================================
  WRITING: TRISTAN GOUCHERNOUR
  PROGRAMMING: ARIA

  SPECIAL THANKS TO:
  Trina, for making us anxious enough to finish the game

  Cassidy, for reminding us of the true meaning of Christmas

  and YOU, for having a birthday.

  **Happy Birthday,
  Jarod!**

  THE END
  ====================================================
  `
}],

  inventory: [
    {
      name: ['Cigarettes', 'Cigs'],
      desc: 'Highly addictive and hazardous to your health. Your favorite brand.',
      onUse: () => {
        if (isOutside){
          if (cigarettesSmoked === 0){
            println('I took the cigarette and lighter from my jacket, the lighter of course, with only one more pre-paid charge left, would only be good for one last stick-o-death. Either way, I leaned my head up and took one long drag, staring up at the sky with a small sigh. I felt myself calming down as the anxiety from my vices slipped from my body. I flicked the cigarette down, stomping it into the pavement.')
            cigarettesSmoked++;
            var lighter = getItem('Ickarus™ Pre-Paid Lighter');
            var cigs = getItem('Cigarettes');
            lighter.desc = "A pre-paid lighter without any seconds left.";
            cigs.desc = "A pack of death sticks, nestled together. My lighter isn't workin' anymore, so they're pretty useless. Who cares anyway? These things'll kill ya.";
          }
          else if (cigarettesSmoked > 0){
            println(` I thumbed another cigarette into my hands. Damn, if only I had remembered to grab more seconds from the gas station on the way over here, I could authorize the lighter back on. Its funny how the future can fix so many things that weren't problems.`)
          }
        }
        else{
          println('New laws, can’t smoke inside. Man, I miss the good ol’ days, when you could arrest someone without reading them their rights and get away with it. Smoking outside bites too.');
        }
      }
    },
    
    {
      name: ['Velo-Dog™ Pocket Pistol', 'Velo-Dog', 'Velo', 'Pistol', 'Pocket Pistol','Gun'],
      desc: `A standard issue poodle plinker, perfect for blasting those pesky ankle-biters on your morning bike commute. It might have come in handy, if I hadn’t missed my monthly U-Holster subscription. Now it’s just a paper weight.
      `,
      onUse: () =>{
        println(`I haven’t paid for the subscription on my holster, so my gun isn’t working right now. Besides, I wear it for the prestige.`);
      }
    },

    {
      name: [`Ickarus™ Pre-Paid Lighter`, 'Ickarus', 'Lighter', 'Prepaid lighter'],
      desc: ` My handy dandy, pocket lighter. With everything getting so convenient now-a-days, I can just pay for my lighter at any gas station to get it activated. I was so excited to get here today, I forgot to pick up some more seconds. Only a couple left.`,
      onUse: () => {
        println(`Lighter? I hardly know 'er!`);
      }
    }
  ],

  characters: [
    {
      name: 'man',
      roomId: 'bar',
      desc: `This guy was huge, and could drink to match his size. He sat with an array of empty glasses
      around him. A deck of CARDS lay next to his left hand, which was resting on the bar with the rest of his
      massive torso. His skin was bright red, and her nails were sharp, long, and black.`,
      topics: [
      ],
      onTalk: () => {
        if (cigarettesSmoked === 0){
          println(`The world felt like it was folding in on itself, my stomach flipped while my head did flops. This
          man might finally have the answers to what happened that fateful afternoon, and the feelings were
          completely getting to me. I also forgot to eat this morning. I’m feeling too anxious right now. I better step
          outside for a break.`)
        }
        else {
          var felix = getCharacter('man');
          if (!topicsBadgeUnlocked && cigarettesSmoked){
            felix.topics.push(felixTopicsBadge);
            topicsBadgeUnlocked = true;
          }

        }

      },
    },
  ],
  
    });
