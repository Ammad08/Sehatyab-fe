export interface TherapyItem {
  id?: string | number;
  title: string;
  desc: string;
  intro?: string;
  banner?: string;
  steps?: string[];
  src?: string;
}

export interface TherapyCategory {
  label: string;
  icon: string;
  items: TherapyItem[];
}

export const therapyData: { [key: string]: TherapyCategory } = {
  visualization: {
    label: "Visualization Therapy",
    icon: "GiVideoCamera",
    items: [
      {
        title: "Nature Visualization",
        desc: "This therapy guides you to imagine a serene forest stream, helping to quiet your mind and reduce stress. By focusing on the sights and sounds of nature, it promotes deep relaxation and a sense of inner peace, ideal for those feeling overwhelmed or anxious.",
        src: "https://www.youtube.com/embed/KJwYBJMSbPI?si=4IUWy4BN94K8esh-",
      },
      {
        title: "Sunset Over Lake",
        desc: "Unwind with this visualization of a tranquil lake at sunset, designed to soothe your thoughts and ease tension. The calming imagery of soft colors and still water helps you release daily stress, making it perfect for evening relaxation or moments when you need calm.",
        src: "https://www.youtube.com/embed/64ef8cnOOHI?si=Jajlxf-Pu2b1lzsU",
      },
      {
        title: "Starry Night Sky",
        desc: "This therapy invites you to picture a sky filled with twinkling stars, fostering a sense of calm and wonder. It’s designed to help you disconnect from worries and inspire tranquility, making it an excellent choice for nighttime relaxation or when seeking mental clarity.",
        src: "https://www.youtube.com/embed/Bbp1-p2FoXU?si=ut0jkQSUPA1RH8sm",
      },
      {
        title: "Waterfall Serenity",
        desc: "Visualize a cascading waterfall to wash away stress and restore balance. This therapy uses the soothing imagery and sound of flowing water to calm your senses, ideal for those looking to relieve anxiety or find a moment of peace during a busy day.",
        src: "https://www.youtube.com/embed/V1RPi2MYptM?si=2naBueXdofwBMjbV",
      },
      {
        title: "Forest Walk",
        desc: "Escape into a peaceful forest walk with this therapy, where the sounds of birds and rustling leaves help you relax. It’s crafted to ground you in nature’s embrace, perfect for reducing mental fatigue and reconnecting with a sense of calm and presence.",
        src: "https://www.youtube.com/embed/RzVvThhjAKw?si=aFTOxAJ0McfmTymS",
      },
      {
        title: "Gentle Rain",
        desc: "This therapy involves imagining soft rain falling on leaves, creating a calming atmosphere to ease your mind. It’s designed to help you let go of stress and find stillness, making it a great option for those seeking relaxation or struggling with overthinking.",
        src: "https://www.youtube.com/embed/CpS5Ex1Wx-4?si=0Nyxhf2uvYfDfp3E",
      },
      {
        title: "Snowfall Calm",
        desc: "Picture quiet snowflakes falling to create a peaceful moment with this therapy. The serene imagery helps quiet racing thoughts and promotes relaxation, ideal for anyone needing a mental reset or looking to cultivate a sense of calm during stressful times.",
        src: "https://www.youtube.com/embed/vz91QpgUjFc?si=wuKommtbg1F_bov6",
      },
      {
        title: "Desert Dunes",
        desc: "This meditative therapy guides you to imagine wind shaping vast desert dunes, fostering a sense of stillness and focus. It’s perfect for those seeking mental clarity or a break from daily pressures, helping you find calm in the simplicity of nature’s vastness.",
        src: "https://www.youtube.com/embed/o9i6ljOdp5A?si=D6IxsC4NtJvCYTx3",
      },
      {
        title: "Aurora Borealis",
        desc: "Imagine the northern lights dancing across the sky to inspire awe and tranquility. This therapy is designed to uplift your spirit and reduce stress, making it a wonderful choice for those feeling low or needing a moment of beauty to restore emotional balance.",
        src: "https://www.youtube.com/embed/T75IKSXVXlc?si=DqSqa--gtifLt4zE",
      },
      {
        title: "Cloud Timelapse",
        desc: "Visualize drifting clouds to calm your thoughts with this gentle therapy. It helps you release mental tension and find a sense of ease, ideal for anyone looking to quiet their mind or seeking a peaceful escape from a hectic day.",
        src: "https://www.youtube.com/embed/Qu7mcKZgqv0?si=g0i6boFIpfxH8VO_",
      },
      {
        title: "Candle Meditation",
        desc: "Focus on a flickering candle flame to center your mind and promote relaxation. This therapy is crafted to help you find focus and calm, particularly useful for those dealing with scattered thoughts or needing a simple way to unwind after a long day.",
        src: "https://www.youtube.com/embed/4eHsIhb0vZQ?si=E_pAeczOGfja--pI",
      },
      {
        title: "Windmill Calm",
        desc: "Picture a windmill spinning gently in the breeze to soothe your mind. This therapy offers a rhythmic visual to help you relax and let go of stress, perfect for those seeking a grounding experience or a moment of peace in a busy schedule.",
        src: "https://www.youtube.com/embed/ueX7B4veLwY?si=pSB2VG2hcw8bmG0B",
      },
      {
        title: "Autumn Forest",
        desc: "This therapy guides you to visualize an autumn forest with falling leaves, creating a sense of seasonal peace. It’s designed to help you release tension and embrace tranquility, ideal for those needing a mental break or wanting to connect with nature’s cycles.",
        src: "https://www.youtube.com/embed/TOHYkccYfUk?si=qwS7KZy6_gbFat9h",
      },
      {
        title: "Bamboo Grove",
        desc: "Imagine a swaying bamboo grove to calm your senses and restore balance. This therapy helps you find peace through nature’s gentle rhythm, making it a great choice for anyone feeling stressed or looking to reconnect with a sense of inner calm.",
        src: "https://www.youtube.com/embed/mi2Eb3wt74Y?si=r4v7sMp-DpgzSonh",
      },
      {
        title: "Flower Bloom",
        desc: "Visualize a flower slowly blooming to uplift your spirit and inspire joy. This therapy is crafted to boost your mood and reduce stress, perfect for those feeling down or seeking a positive, calming experience to brighten their day.",
        src: "https://www.youtube.com/embed/FV9a4ro5ecw?si=rhODftWbSzWffRB8",
      },
    ],
  },
  mindfulness: {
    label: "Mindfulness Practices",
    icon: "GiMeditation",
    items: [
      {
        title: "Guided Meditation",
        desc: "This 10-minute session helps you find peace by guiding you to focus on the present moment. It’s designed to reduce stress, improve mental clarity, and promote relaxation, making it ideal for anyone feeling overwhelmed or seeking a calm mind.",
        src: "https://www.youtube.com/embed/ZToicYcHIOU?si=sq2iDdtlSP0xYFIA",
      },
      {
        title: "Yoga Flow",
        desc: "Engage in energizing stretches to start your day with mindfulness and vitality. This therapy connects body and mind, helping to release physical tension and boost mood, perfect for those wanting to feel refreshed and centered.",
        src: "https://www.youtube.com/embed/v7AYKMP6rOE",
      },
      {
        title: "Body Scan Meditation",
        desc: "This practice involves focusing on each part of your body to release tension and promote relaxation. It’s ideal for reducing physical and mental stress, helping you feel grounded and at ease, especially after a long or hectic day.",
        src: "https://www.youtube.com/embed/inpok4MKVLM",
      },
      {
        title: "5-4-3-2-1 Grounding",
        desc: "A quick sensory exercise to bring you back to the present moment, this therapy helps reduce anxiety and overwhelm. By engaging your senses, it grounds you in the here and now, making it perfect for moments of stress or disconnection.",
        src: "https://www.youtube.com/embed/30VMIEmA114",
      },
      {
        title: "Mindful Eating Practice",
        desc: "This therapy encourages eating slowly and savoring each bite to stay present. It helps reduce stress and fosters a deeper connection with your food, ideal for those looking to improve mindfulness or manage emotional eating habits.",
        src: "https://www.youtube.com/embed/9YRXKVhPQ1g?si=X-PHQyIdPQItAC1G",
      },
      {
        title: "Mindful Walking",
        desc: "Walk slowly with awareness to feel grounded and relaxed, noticing each step and your surroundings. This therapy reduces mental clutter and promotes calmness, making it great for those seeking peace or a break from a busy mind.",
        src: "https://www.youtube.com/embed/zZnNO1myCMg?si=nwG7EMDd8UT39yDz",
      },
      {
        title: "Mindful Listening Exercise",
        desc: "Focus on the sounds around you to anchor yourself in the present moment. This therapy helps calm your mind and enhance awareness, ideal for those feeling distracted or needing a simple way to find peace in everyday life.",
        src: "https://www.youtube.com/embed/4KbWjdSB4f8?si=6cORj53opxQeGYbE",
      },
    ],
  },
  breathing: {
    label: "Breathing Exercises",
    icon: "GiLungs",
    items: [
      {
        title: "Breathwork Session",
        desc: "This guided session uses deep breathing techniques to promote deep relaxation and calm your body and mind. It’s designed to reduce stress and restore balance, making it ideal for those feeling tense or needing a mental reset.",
        src: "https://www.youtube.com/embed/VUjiXcfKBn8?si=7kEpsfVB2yP7WIn0",
      },
      {
        title: "4-7-8 Breathing",
        desc: "A rhythmic breathing technique to reduce stress and calm your mind, this exercise helps slow your heart rate and ease anxiety. It’s perfect for anyone looking to relax quickly, whether before sleep or during a stressful moment.",
        src: "https://www.youtube.com/embed/YRPh_GaiL8s",
      },
      {
        title: "Box Breathing",
        desc: "This rhythmic breathing exercise promotes balance and focus by using equal counts for inhaling, holding, and exhaling. It’s ideal for calming your nervous system and enhancing concentration, especially during high-pressure situations.",
        src: "https://www.youtube.com/embed/z0GtmPnqAd8",
      },
      {
        title: "Belly Breathing",
        desc: "Focus on deep diaphragmatic breathing to relax your body and mind, reducing stress and tension. This therapy is great for those seeking a simple way to calm down, improve focus, or prepare for restful sleep.",
        src: "https://www.youtube.com/embed/OXjlR4mXxSk?si=3J7Nu-U43NCYxOhG",
      },
      {
        title: "Alternate Nostril Breathing",
        desc: "A balancing technique that calms your nervous system by alternating breaths through each nostril. This therapy helps reduce anxiety and improve mental clarity, making it ideal for those seeking emotional balance or a meditative practice.",
        src: "https://www.youtube.com/embed/8VwufJrUhic",
      },
      {
        title: "Mindful Breathing for Anxiety",
        desc: "This guided breathing exercise is specifically designed to help reduce anxiety and promote a sense of calm. By focusing on slow, intentional breaths, it eases racing thoughts and soothes your nervous system, making it an excellent tool for anyone experiencing stress or panic in challenging moments.",
        src: "https://www.youtube.com/embed/v-w-vSvi-24?si=KlliLcYTd513x63O",
      },
    ],
  },
  cognitive: {
    label: "Cognitive & Behavioral Therapies",
    icon: "GiBrain",
    items: [
      {
        title: "Cognitive Behavioral Therapy (CBT)",
        desc: "This therapy helps you identify and reframe negative thoughts to improve your mood and reduce stress. By challenging unhelpful beliefs, it empowers you to feel calmer and more confident, making it ideal for managing anxiety, depression, or self-doubt.",
        banner: "https://images.unsplash.com/photo-1518644730709-0835105d9daa",
        steps: [
          "Find a quiet space with a notebook.",
          "Write one negative thought, e.g., ‘I’m not good enough.’",
          "Challenge it with evidence of your successes.",
          "Replace it with a positive thought, e.g., ‘I am capable.’",
        ],
      },
      {
        title: "Mindfulness-Based Cognitive Therapy (MBCT)",
        desc: "MBCT combines mindfulness with cognitive techniques to help you stay present and prevent negative thought spirals. It’s designed to reduce overthinking and promote calm, perfect for those dealing with stress or recurring negative emotions.",
        banner: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        steps: [
          "Sit comfortably and close your eyes.",
          "Focus on your breath for 5 minutes.",
          "Notice thoughts without judgment, letting them pass.",
          "Feel refreshed and present.",
        ],
      },
      {
        title: "Dialectical Behavior Therapy (DBT)",
        desc: "DBT teaches practical skills to manage intense emotions and improve emotional regulation. This therapy is ideal for those experiencing overwhelming feelings or seeking to build resilience, helping you feel more balanced and in control.",
        banner: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
        steps: [
          "Sit quietly and breathe deeply.",
          "Write one emotion, like anger, without judgment.",
          "Hold a soft object to soothe yourself.",
          "Say ‘I am enough’ five times.",
        ],
      },
      {
        title: "Acceptance and Commitment Therapy (ACT)",
        desc: "ACT encourages you to accept your thoughts without judgment and focus on actions aligned with your values. It’s designed to help you live a meaningful life while reducing the impact of negative thoughts, great for those feeling stuck or unmotivated.",
        banner:
          "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        steps: [
          "Notice a negative thought, e.g., ‘I’m not good enough.’",
          "Visualize it as a leaf floating away.",
          "Write down a core value, like kindness.",
          "Take one action aligned with that value today.",
        ],
      },
      {
        title: "Cognitive Defusion",
        desc: "This technique helps you distance yourself from negative thoughts, reducing their emotional weight. By viewing thoughts as passing ideas rather than facts, it promotes a lighter mindset, ideal for anyone overwhelmed by self-criticism or anxiety.",
        banner: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
        steps: [
          "Notice a negative thought, e.g., ‘I’m a failure.’",
          "Say ‘I’m having the thought that I’m a failure.’",
          "Imagine it as a cloud passing by.",
          "Breathe deeply, feeling lighter.",
        ],
      },
      {
        title: "Positive Reframing Exercise",
        desc: "Shift negative thoughts into positive ones with this exercise, fostering optimism and resilience. It’s perfect for those looking to change their perspective and boost confidence, helping you approach challenges with a hopeful mindset.",
        banner: "https://images.unsplash.com/photo-1517486430290-35657bdcef51",
        steps: [
          "Sit with a notebook quietly.",
          "Write a negative thought, e.g., ‘I always fail.’",
          "Reframe it, e.g., ‘I’m learning with each try.’",
          "Read it aloud, feeling hopeful.",
        ],
      },
    ],
  },
  creative: {
    label: "Creative & Expressive Therapies",
    icon: "GiPaintBrush",
    items: [
      {
        title: "Art Therapy",
        desc: "Express your emotions through drawing or painting to promote relaxation and self-discovery. This therapy helps you process feelings in a non-verbal way, making it ideal for those feeling stressed or seeking a creative outlet for emotional release.",
        banner: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
        steps: [
          "Gather art supplies like crayons or paints.",
          "Find a quiet space to create.",
          "Draw your current emotions using colors.",
          "Reflect on your artwork for 5 minutes.",
        ],
      },
      {
        title: "Journaling for Emotional Release",
        desc: "Write freely about your feelings to let go of stress and gain clarity. This therapy is perfect for processing complex emotions or overwhelming thoughts, helping you feel lighter and more in tune with yourself.",
        banner: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
        steps: [
          "Sit with a notebook in a quiet space.",
          "Write about a stressor for 10 minutes.",
          "Note one positive action to feel better.",
          "Close the journal, feeling lighter.",
        ],
      },
      {
        title: "Music Therapy",
        desc: "Listen to or create music to relax and elevate your mood, tapping into its calming power. This therapy is designed to reduce stress and inspire joy, ideal for anyone needing an emotional boost or a way to unwind creatively.",
        banner:
          "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHwy",
        steps: [
          "Choose a calming song you love.",
          "Sit quietly and play the song.",
          "Focus on the melody for 5 minutes.",
          "Sing along if you feel inspired.",
        ],
      },
      {
        title: "Mandala Coloring for Calmness",
        desc: "Color intricate mandala patterns to focus your mind and promote relaxation. This therapy helps quiet mental chatter and fosters a sense of calm, making it great for those seeking a meditative, creative way to de-stress.",
        banner:
          "https://images.unsplash.com/photo-1594577526227-daccc722bcc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmRhbGElMjBhcnR8ZW58MHx8MHx8fDI%3D",
        steps: [
          "Print a mandala design.",
          "Choose calming colors like blue or green.",
          "Color slowly for 10 minutes.",
          "Display your mandala to feel calm.",
        ],
      },
      {
        title: "Expressive Writing",
        desc: "Write about challenging experiences to process emotions and find clarity. This therapy is ideal for releasing pent-up feelings or gaining insight, helping you feel more grounded and emotionally balanced.",
        banner: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        steps: [
          "Find a notebook and quiet space.",
          "Write about a tough moment for 10 minutes.",
          "Read it, letting emotions go.",
          "Breathe deeply, feeling lighter.",
        ],
      },
      {
        title: "Color Therapy Visualization",
        desc: "Imagine vibrant colors to balance your emotions and promote relaxation. This therapy uses color imagery to influence your mood positively, perfect for those looking to reduce stress or enhance emotional well-being creatively.",
        banner:
          "https://images.unsplash.com/photo-1610137444548-728e7c4b49d9?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        steps: [
          "Sit quietly and close your eyes.",
          "Imagine blue light for peace, 5 minutes.",
          "Switch to yellow for happiness.",
          "Feel balanced and calm.",
        ],
      },
    ],
  },
  physical: {
    label: "Physical & Sensory Therapies",
    icon: "GiBodyBalance",
    items: [
      {
        title: "Progressive Muscle Relaxation (PMR)",
        desc: "Tense and relax each muscle group to release physical and mental stress, promoting deep relaxation. This therapy is ideal for those feeling tense or anxious, helping you feel more at ease in your body and mind.",
        banner: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        steps: [
          "Lie down in a quiet space.",
          "Tense your toes for 5 seconds, then relax.",
          "Move up to your face, tensing and relaxing.",
          "Complete the cycle in 10 minutes.",
        ],
      },
      {
        title: "Sensory Soothing Technique",
        desc: "Engage your senses with soft textures and calming scents to quickly reduce stress. This therapy is perfect for moments of overwhelm, helping you ground yourself and find instant calm through sensory focus.",
        banner:
          "https://images.unsplash.com/photo-1579018024219-fa9694ca5698?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        steps: [
          "Sit with a soft blanket or candle.",
          "Touch the blanket, focusing on softness.",
          "Smell the candle, breathing deeply.",
          "Listen to soft music for 5 minutes.",
        ],
      },
      {
        title: "Chair Yoga for Relaxation",
        desc: "Practice gentle seated yoga poses to ease physical tension and promote relaxation. This therapy is great for those with limited mobility or anyone seeking a low-impact way to calm the body and mind.",
        banner: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851",
        steps: [
          "Sit on a chair with a straight back.",
          "Raise arms, stretching for 10 seconds.",
          "Bend forward gently, breathing deeply.",
          "Sit up, feeling relaxed.",
        ],
      },
      {
        title: "Guided Imagery and Visualization",
        desc: "Picture a peaceful scene, like a beach, to calm your mind and reduce stress. This therapy helps you escape mental clutter and find tranquility, ideal for anyone needing a mental break or emotional reset.",
        banner:
          "https://images.unsplash.com/photo-1635795565628-c5e5cd720693?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxiZWF1dGlmdWwlMjBuYXR1cmV8ZW58MHwwfDB8fHwy",
        steps: [
          "Sit quietly and close your eyes.",
          "Imagine a peaceful beach with waves.",
          "Stay in the scene for 5 minutes.",
          "Feel relaxed and refreshed.",
        ],
      },
    ],
  },
  nature: {
    label: "Nature & Connection Therapies",
    icon: "GiTreeBranch",
    items: [
      {
        title: "Nature-Based Therapy (Ecotherapy)",
        desc: "Spend time outdoors in a park or forest to refresh your mind and boost your mood. This therapy leverages nature’s calming effects to reduce stress, making it perfect for those feeling disconnected or overwhelmed.",
        banner: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f",
        steps: [
          "Visit a park or forest.",
          "Walk slowly, noticing trees and birds.",
          "Take 5 deep breaths of fresh air.",
          "Spend 20 minutes feeling grounded.",
        ],
      },
      {
        title: "Loving-Kindness Meditation",
        desc: "Cultivate compassion by sending love to yourself and others, fostering a sense of connection. This therapy helps reduce negative emotions and promote peace, ideal for those seeking emotional warmth or improved relationships.",
        banner: "https://images.unsplash.com/photo-1522083165195-3424ed129620",
        steps: [
          "Sit quietly and close your eyes.",
          "Say ‘May I be happy, safe, loved’ three times.",
          "Repeat for a loved one, then all people.",
          "Feel love grow in your heart.",
        ],
      },
      {
        title: "Gratitude Practices",
        desc: "Reflect on what you’re thankful for to shift your focus to positivity and improve your mood. This therapy is great for fostering happiness and resilience, especially during challenging times or when feeling low.",
        banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        steps: [
          "Sit with a notebook quietly.",
          "Write 3 things you’re grateful for.",
          "Explain why each makes you happy.",
          "Read aloud, feeling positive.",
        ],
      },
      {
        title: "Gratitude Walk",
        desc: "Combine walking with gratitude to lift your mood and feel more connected to your surroundings. This therapy helps you appreciate life’s small joys, perfect for those seeking mindfulness or an emotional boost outdoors.",
        banner: "https://images.unsplash.com/photo-1529718836725-f449d3a52881",
        steps: [
          "Walk in a quiet park for 10 minutes.",
          "Think of one thing you’re grateful for per step.",
          "Say ‘I’m thankful’ in your mind.",
          "Feel your mood lift with gratitude.",
        ],
      },
      {
        title: "Self-Compassion Break",
        desc: "Practice kindness toward yourself to ease negative thoughts and feel more at peace. This therapy is ideal for moments of self-criticism or stress, helping you build emotional strength and self-acceptance.",
        banner:
          "https://images.unsplash.com/photo-1463736932348-4915535cf6f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VsZnxlbnwwfDB8MHx8fDI%3D",
        steps: [
          "Sit quietly and breathe deeply.",
          "Think of a struggle, like feeling inadequate.",
          "Say ‘It’s okay, I’m not alone.’",
          "Give yourself a hug for 5 minutes.",
        ],
      },
      {
        title: "Affirmation Practice",
        desc: "Repeat positive affirmations to boost self-confidence and foster a sense of empowerment. This therapy helps rewire negative self-talk, making it perfect for those looking to enhance self-esteem or face challenges with courage.",
        banner:
          "https://images.unsplash.com/photo-1478012237172-93bd483bb540?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxzZWxmJTIwYWZmaXJtYXRpb25zfGVufDB8MHwwfHx8Mg%3D%3D",
        steps: [
          "Sit quietly and breathe deeply.",
          "Choose affirmations like ‘I am strong.’",
          "Repeat each 5 times aloud.",
          "Smile, feeling more confident.",
        ],
      },
      {
        title: "Forgiveness Meditation",
        desc: "Let go of anger and resentment through guided reflection to find inner peace. This therapy is designed to release emotional burdens, ideal for those holding grudges or seeking closure and emotional freedom.",
        banner:
          "https://images.unsplash.com/photo-1638866411419-1d243f34d6cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZ2l2ZW5lc3N8ZW58MHwwfDB8fHwy",
        steps: [
          "Sit quietly and close your eyes.",
          "Think of someone you’re angry with.",
          "Say ‘I forgive you’ three times.",
          "Feel lighter, letting go of anger.",
        ],
      },
      {
        title: "Visualization for Goal Setting",
        desc: "Imagine achieving your goals in vivid detail to boost motivation and reduce stress. This therapy helps you stay focused and confident, perfect for those pursuing personal growth or needing inspiration to take action.",
        banner:
          "https://images.unsplash.com/photo-1552652893-2aa10a0ab4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN1Y2Nlc3N8ZW58MHwwfDB8fHwy",
        steps: [
          "Sit quietly and close your eyes.",
          "Imagine achieving a goal in detail.",
          "Feel the joy for 5 minutes.",
          "Write one step to start today.",
        ],
      },
    ],
  },
};
