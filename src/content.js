export const glossary = {
  pulao: { bn: 'পোলাও', roman: 'pulao', meaning: 'rice cooked with ghee and whole spices' },
  malaikari: { bn: 'মালাইকারি', roman: 'malai curry', meaning: 'prawns in a creamy coconut curry' },
}

export const ways = [
  { id: 'food', label: 'Food', short: 'Food' },
  { id: 'language', label: 'Language', short: 'Lang.' },
  { id: 'people', label: 'People', short: 'People' },
  { id: 'ritual', label: 'A ritual', short: 'Ritual' },
  { id: 'object', label: 'An object', short: 'Object' },
]

export const meta = {
  title: ['What is home', 'when it’s far away?'],
  deck: 'What home means to international students at Texas Tech, and how they keep in touch with it from Lubbock.',

  distance: { mi: 8390, km: 13503, from: 'Dhaka', to: 'Lubbock' },
  byline: [
    ['By', 'Tahmid Ahnaf Taseen'],
    ['Course', 'ENGL 1301'],
    ['Place', 'Lubbock, Texas'],
    ['Term', 'Fall 2026'],
  ],
  heroFigure: {
    src: 'media/TTU_ICC_CULTURAL_FEST_2026.webp',
    srcSet: 'media/TTU_ICC_CULTURAL_FEST_2026-640.webp 640w, media/TTU_ICC_CULTURAL_FEST_2026.webp 1280w',
    sizes: '(min-width: 900px) 40rem, calc(100vw - 2rem)',
    ratio: '3 / 2',
    priority: true,
    alt: 'Students holding the flags of their home countries, including Bangladesh, Brazil, Ghana, Nepal, Canada and many others, in front of the International Cultural Center at Texas Tech under a clear blue sky.',
    caption: 'Cultural Fest 2026 outside the International Cultural Center, Texas Tech.',
  },
}

export const chapters = [
  {
    id: 'leaving',
    number: '01',
    kicker: 'Leaving',
    title: 'Eight thousand miles is a long way',
    body: [
      'The first thing I noticed in Lubbock after landing was not the harsh hot weather or the flat terrain but the quiet of my apartment. In Dhaka, every day began with a mix of voices and the sound of cooking, and I never thought about how much I would miss it until it was gone. On my first night, I was standing beside the window of my room and the emptiness hit me. I missed the home that I grew up in.',
      'The first thing I pulled out of my luggage after arriving in Lubbock was a packet of black tea powder. It came in a spacious box that took up space I could have given to more practical things. Back home, tea is the staple of almost every home, its smell wakes the house in the morning and ends the evening with family. In the quiet room of Lubbock, it was a piece of home I carried.',
      'That packet of tea made me curious about everyone else. If one box could hold that much of home for me, what do my peers and senior international students do to keep home within touch from about eight thousand miles away? Over the week, I asked my friends what home means to them and how they keep it close, and paid attention to the small habits that seemed to carry the most weight when attending dinners and hangout with them. This story reports what I found.',
    ],
    compare: {
      prompt: 'Drag to compare',
      before: {
        src: 'media/compare-dhaka.webp',
        label: 'Dhaka',
        alt: 'Dhaka at dusk: lit towers rising beside a dark river, with light trails along the road in the foreground.',
      },
      after: {
        src: 'media/compare-lubbock.webp',
        label: 'Lubbock',
        alt: 'Lubbock from above at sunset: a low skyline over a busy plaza with food trucks and people.',
      },
      caption: 'Dhaka and Lubbock',
    },
  },
  {
    id: 'ideas',
    number: '02',
    kicker: 'Ideas of home',
    title: 'Everyone I asked defined home differently.',
    deck: 'Every interview asked the same question about home. Tap a name to read each answer.',
    body: [
      'I asked each of them the same question about what home means, and every answer was different. Anika said home is the sense of security and people looking out for her, like leaving the steering of life away and enjoying the back seat. Yaishik said home is the warmth of his mother’s dishes and the comfort that comes with them. My own answer, after two months in Lubbock, is the experience we have with our loved ones which creates a special sense of belonging.',
      'I noticed few things when I laid the answers side by side. First, neither of them described a place. Anika described a feeling of security and the people around her when Yaishik described his mother’s cooking. Second, they disagreed about what can be replaced. Yaishik found a sense of home again after meeting new friends in Lubbock, while Anika said there are things she cannot find here, like the comfort of riding rickshaw, mornings of her village, and she does not try to make up for them with anything. That difference tells that keeping a sense of home is partly about what a student decides to rebuild and what they decide to leave behind.',
    ],
    explorer: {
      hint: 'Tap a name, or a row in the table, to switch student.',

      people: [
        {
          id: 'anika',
          name: 'Anika',
          from: 'Chattogram, Bangladesh',
          definition:
            'the sense of security and people looking out for her, like leaving the steering of life away and enjoying the back seat',
          ways: ['food', 'language', 'people', 'ritual', 'object'],
          detail:
            'She cooks the traditional dishes herself, though they come out different. She speaks Bangla when she cooks, calls home or jokes with friends, explores Lubbock with Yaishik and me, calls home every night, and brought her traditional clothes.',
        },
        {
          id: 'yaishik',
          name: 'Yaishik',
          from: 'Sylhet, Bangladesh',
          definition: 'the warmth of his mother’s dishes and the comfort that comes with them',
          ways: ['food', 'language', 'people'],
          detail:
            'He carried spices for his mother’s recipe, speaks Bangla with family on the phone, while cooking and when cursing, and found new friends in Lubbock.',
        },
        {
          id: 'tahmid',
          name: 'Tahmid',
          from: 'Dhaka, Bangladesh',
          definition: 'the experience we have with our loved ones which creates a special sense of belonging',
          ways: ['food', 'people'],
          detail:
            'Drinking tea, chatting with old friends and family whenever I miss them, and talking with close people here.',
        },
      ],
    },
  },
  {
    id: 'kitchen',
    number: '03',
    kicker: 'The kitchen',
    title: 'A cooking night, step by step.',
    deck: 'One Sunday evening at Yaishik’s house, over malai curry and rice, and what each spice was carrying.',
    steps: [
      {
        heading: 'Arrival',
        text: 'On Sunday, October 25, I arrived at Yaishik’s house to hang out, and he was already sorting his spices. Nobody had planned the evening around me, which made it easier to watch what they did without thinking.',
        figure: {
          src: 'media/eating-with-friends.svg',
          alt: 'Illustration of friends sharing a meal around a table.',
          fit: 'contain',
        },
      },
      {
        heading: 'Spices',
        text: 'The ingredients tell two stories. Some, like cumin and garam masala, came in a suitcase as my tea did. Yaishik packed them because they make the food taste like his mother’s cooking during festivals like the recent Puja. Others, like cinnamon and cardamom, were bought from Mirch Masala which is the local Indian shop. The pantry below sorts every jar into carried or found. What stood out was that every carried spice was one he could not replace if he wanted the food to taste like home.',
        figure: { src: 'media/kitchen-spices.webp', alt: 'Whole and ground spices laid out in the kitchen.' },
      },
      {
        heading: 'Language',
        text: 'Anika spoke English when we first met up, but she switched to Bengali while arguing over how to cook the shrimp and how to boil the rice, and while joking about Yaishik’s new scooter. When I asked about it, she said expressing her emotions in Bengali gives her a sense of fulfillment. It did the same job as the spices, keeping a piece of home in daily use.',
        figure: {
          src: 'media/Language.svg',
          alt: 'Illustration of two people talking, with speech bubbles in different languages.',
          fit: 'contain',
        },
      },
      {
        heading: 'The table',
        text: 'When we sat down to eat, there was {{pulao}} on every plate, and the {{malaikari}}. It was a very simple dish, but it was Yaishik’s mother’s recipe which made everybody find it a bit closer to their heart. The way everyone laughed and traded stories about life back home showed that the evening was less about the food than about forgetting how far away they were.',
        figure: {
          src: 'media/kitchen-malai-curry.webp',
          alt: 'A grey bowl of malai curry with prawns and fresh coriander, served beside white rice and a spoon.',
        },
      },
    ],
    pantry: {
      title: 'The pantry, itemised',
      intro: 'Every jar here was either carried from home or found in Lubbock. Tap one to read its story.',

      items: [
        {
          name: 'Black tea',
          bn: 'চা পাতা',
          origin: 'carried',
          who: 'Tahmid',
          note: 'The first thing I unpacked, in a spacious box that took up space for more practical things.',
        },
        {
          name: 'Cumin',
          bn: 'জিরা',
          origin: 'carried',
          who: 'Yaishik',
          note: 'Packed because it makes the food taste like his mother’s cooking.',
        },
        {
          name: 'Garam masala',
          bn: 'গরম মসলা',
          origin: 'carried',
          who: 'Yaishik',
          note: 'Packed for the same reason.',
        },
        {
          name: 'Cinnamon',
          bn: 'দারুচিনি',
          origin: 'found',
          who: 'Yaishik',
          note: 'Bought at Mirch Masala, the local Indian shop.',
        },
        {
          name: 'Cardamom',
          bn: 'এলাচ',
          origin: 'found',
          who: 'Yaishik',
          note: 'Bought at Mirch Masala, the local Indian shop.',
        },
      ],
    },
  },
  {
    id: 'call',
    number: '04',
    kicker: 'The call',
    title: 'Home is a time zone away.',
    body: [
      'Anika calls home every night, when it is morning in her home country. She said the time difference costs her nothing, because she keeps a specific time for the call and so does her family. Yaishik has no schedule at all. He talks with his mother whenever it is convenient, and sometimes it is his bedtime while the sun is rising on the other side. Both of them also turn to their Bangladeshi friends when they miss home, because talking in their own language with someone who shares the culture and the thoughts gives them comfort.',
      'But not everything has a replacement. Anika said Lubbock has no rickshaw, no mornings like the ones in her village, a part of her she used to enjoy back home, and she does not try to make up for it with anything.',
    ],
    quote: {
      text: 'Home is the sense of security and people looking out for you. Leaving the steering of life away and enjoying the back seat.',
      mark: 'home',
      who: 'Anika',
    },
    clocks: {
      title: 'The call home',
      text: 'Calling home means doing math. The clock shows when both ends are awake.',
      cities: [
        { city: 'Lubbock', tz: 'America/Chicago', here: true },
        { city: 'Dhaka', tz: 'Asia/Dhaka' },
      ],

      awake: [8, 23],
    },
  },
  {
    id: 'reflection',
    number: '05',
    kicker: 'Reflection',
    title: 'Carried, rebuilt, or replaced?',
    body: [
      'Looking back at the whole story, nobody described home as a single thing, or as a place with four definite walls. Anika described it as a sense of security and people looking out for her, and Yaishik described it as the warmth of his mother’s dishes. For me it is the familiar sounds and a packet of tea. Home was built out of small things, like language, traditional clothes, a spice, mixed with thoughts and feelings that are hard to pull apart. Some pieces were carried from Bangladesh, some were found in Lubbock, and some could not be replaced at all.',
      'People might notice that a long time cooked meal, a jar of spices, or a call at an odd hour is doing more work than it looks like, but it is a way of keeping touch with the sense of the identity.',
    ],
    statement: {
      title: 'Statement of goals and choices',
      note: 'Written for ENGL 1301, Project 3. It sits apart from the 1,500–2,000-word essay above.',
      sections: [
        {
          heading: 'Personal goals',
          body: [
            'I wanted to understand something I was living through myself. I came to Lubbock from Dhaka, and in my first week I noticed that what I missed most was not a place but a feeling, the sound of voices and cooking that made the house I grew up in feel like home. I wanted to find out whether the other students around me were missing the same feeling and what they did about it. I also wanted to build the project with the skill I trust most, which is web programming.',
          ],
        },
        {
          heading: 'Rhetorical goals',
          body: [
            'The project asks how international students keep a sense of home in Lubbock and reports what two students and I said. My main audience is my classmates and instructor in ENGL 1301, most of whom have not lived this experience, and my second audience is other international students who may see their own habits in it. For the first group I wanted understanding, so I opened with a quiet apartment and a packet of tea, small things a reader can picture without knowing my country. For the second group I wanted to connect the feelings. The Bengali words are tappable and explained in place so the primary audience from other language doesn’t feel any issue.',
          ],
        },
        {
          heading: 'Material and methods',
          body: [
            'I chose primary research because the question is about everyday habits and those are best learned by asking and watching. I interviewed two Bangladeshi students, Anika and Yaishik, using a shared set of questions, and I answered some question myself. I also observed one cooking night at Yaishik’s house, where I watched which spices had been carried and which had been bought, and when the language in the room changed. I wrote from my notes, and I use participants’ words only with their permission. I kept outside sources out of the main text on purpose, so that only the first person experience carry the essay.',
          ],
        },
        {
          heading: 'Medium and technology',
          body: [
            'I chose a scrolling web page, coded by hand in React and Vite which are suitable for a single web page. I used only text, photos and small interactions. I left out audio and video because of the consent of the people I took interview from.',
            'I used interaction to connect the story with audience using selection, sliders, images and word meaning explainer.',
          ],
        },
        {
          heading: 'Accessibility',
          body: [
            'I wrote the project for readers with different abilities. The web page is accessible through any device, and each Bengali word is defined in text and not only on hover. Since I used no audio or video, no transcript was needed.',
          ],
        },
        {
          heading: 'Why this plan and not others',
          body: [
            'I considered a podcast or a video essay which would let readers hear the students. I chose the web page because it let me control the pacing and the design myself.',
          ],
        },
        {
          heading: 'Risks',
          body: [
            'The biggest risk was writing about friends. Anika and Yaishik let me into their conversations, so I asked their permission before using their names, words and photos and kept to what they were comfortable sharing. The second risk was my own closeness, since I am one of the voices and could have steered the answers. I asked each person the same questions and I kept the places where we disagree. The last risk was technical where a complex design could have been hard and not possible to make in this short time frame.',
          ],
        },
      ],
    },
  },
]

export const method =
  'Two Bangladeshi students, Anika and Yaishik, were interviewed with their consent, and the cooking night took place at Yaishik’s home.'

export const worksCited = [
  'Anika (Electrical engineering). Personal interview. October 2026.',
  'Yaishik (Electrical engineering). Personal interview. October 2026.',
]
