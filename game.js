var testBool = true;

var isOutside = false;

var cigarettesSmoked = 0;

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
  pickCard("test");
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
      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Back then, I was still in the force, GlipGlorpPD,  Au Gratin Island, Pangratto, Effin’-Ham. “When ya gonna work for me, detective?” I scoffed at the idea, shaking my head with a smile. “You’d make me work undercover at some hotel, filling out invoices. That’d be dangerous for my health. Besides, I’m getting carpet installed today, just for my birthday. That comes first.” I took one long drag from the last of a comforting pack of cigarettes. “See, last one today. It's bad for the carpet.” 
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
You can see some SIGNS, and the DOOR.
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
      name: ['car', 'my car'],
      desc: `Just my daily drive ,a Big Ugly Indestructible Cat Killer. I don’t think I left anything important there. Maybe my keys? Who knows.`,
    },
    {
      name: ['door', 'bar door'],
      desc: `Apart from the torn fliers that line the walls of the door, it was one of the doors of all time.`,
    },
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

      }
    ],

    exits: [
      {
        dir: ['outside the bar', 'outside'], id: 'outside'
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

    onEnter: () => {
      isOutside = false;
    },

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
      name: ['Cigarettes', 'Cigs'],
      desc: 'Highly addictive and hazardous to your health. Your favorite brand.',
      onUse: () => {
        if (isOutside){
          if (cigarettesSmoked === 0){
            println('New laws, can’t smoke inside. Man, I miss the good ol’ days, when you could arrest someone without reading them their rights and get away with it. Smoking outside bites too.” “I took the cigarette and lighter from my jacket, the lighter of course, with only one more pre-paid charge left, would only be good for one last stick-o-death. Either way, I leaned my head up and took one long drag, staring up at the sky with a small sigh. I felt myself calming down as the anxiety from my vices slipped from my body. I flicked the cigarette down, stomping it into the pavement.')
          }
          else if (cigarettesSmoked > 0){
            println(` I thumbed another cigarette into my hands. Damn, if only I had remembered to grab more seconds from the gas station on the way over here, I could authorize the lighter back on. Its funny how the future can fix so many things that weren't problems.`)
          }
        }
        else{
          println('Can only be used OUTSIDE');
        }
        cigarettesSmoked++;
        var lighter = getItem('Icarus™ Pre-Paid Lighter');
        var cigs = getItem('Cigarettes');
        lighter.desc = "A pre-paid lighter without any seconds left.";
        cigs.desc = "A pack of death sticks, nestled together. My lighter isn't workin' anymore, so they're pretty useless. Who cares anyway? These things'll kill ya.";
      }
    },
    
    {
      name: ['Velo-Dog Pocket Pistol', 'Velo-Dog', 'Velo', 'Pistol', 'Pocket Pistol','Gun'],
      desc: `A standard issue poodle plinker, perfect for blasting those pesky ankle-biters on your morning bike commute. It might have come in handy, if I hadn’t missed my monthly U-Holster subscription. Now it’s just a paper weight.
      `,
      onUse: () =>{
        println(`I haven’t paid for the subscription on my holster, so my gun isn’t working right now. Besides, I wear it for the prestige.`);
      }
    },

    {
      name: [`Icarus™ Pre-Paid Lighter`, 'Icarus', 'Lighter', 'Prepaid lighter'],
      desc: ` My handy dandy, pocket lighter. With everything getting so convenient now-a-days, I can just pay for my lighter at any gas station to get it activated. I was so excited to get here today, I forgot to pick up some more seconds. Only a couple left.`,
      onUse: () => {
        println(`Lighter? I hardly know 'er!`);
      }
    }
  ],

  characters: [
    {
      name: 'man',
      desc: 'test',
      roomId: 'inside-bar',
    },
  ],
  
    });
