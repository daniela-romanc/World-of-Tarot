const majorCards = [
  { name: "The Fool", number: "0", symbol: "♙", meaning: "A fresh beginning is calling. Stay open to possibility and take your first step with curiosity." },
  { name: "The Magician", number: "I", symbol: "✧", meaning: "You already have useful tools at hand. Focus your intention and turn an idea into action." },
  { name: "The High Priestess", number: "II", symbol: "☾", meaning: "Quiet your thoughts and listen inward. Not everything needs to be known just yet." },
  { name: "The Empress", number: "III", symbol: "❀", meaning: "Give care to what you want to grow. Creativity, comfort, and abundance need room to bloom." },
  { name: "The Emperor", number: "IV", symbol: "♜", meaning: "Create a steady structure. Clear boundaries and thoughtful leadership can support your next move." },
  { name: "The Hierophant", number: "V", symbol: "⌂", meaning: "Consider the wisdom, shared values, or traditions that help you find your footing." },
  { name: "The Lovers", number: "VI", symbol: "♡", meaning: "A meaningful choice asks you to bring your actions into alignment with your values." },
  { name: "The Chariot", number: "VII", symbol: "✦", meaning: "Gather your focus and steer with intention. Progress comes from holding opposing forces together." },
  { name: "Strength", number: "VIII", symbol: "∞", meaning: "Meet the moment with patience and compassion. Gentle courage can be stronger than force." },
  { name: "The Hermit", number: "IX", symbol: "☼", meaning: "Step back from the noise. Solitude and reflection may help you find your own guiding light." },
  { name: "Wheel of Fortune", number: "X", symbol: "◉", meaning: "A cycle is turning. Notice what is changing and where you can meet it with flexibility." },
  { name: "Justice", number: "XI", symbol: "⚖", meaning: "Look at the situation honestly. Fair choices begin with clarity and accountability." },
  { name: "The Hanged One", number: "XII", symbol: "⌁", meaning: "Try a different point of view. A pause can reveal what pushing forward cannot." },
  { name: "Death", number: "XIII", symbol: "✿", meaning: "Something has reached its natural ending. Letting go can make space for a real transformation." },
  { name: "Temperance", number: "XIV", symbol: "≋", meaning: "Bring things into balance a little at a time. Patience and integration are part of the work." },
  { name: "The Devil", number: "XV", symbol: "⛓", meaning: "Notice the habit, fear, or attachment that feels limiting. Awareness gives you room to choose." },
  { name: "The Tower", number: "XVI", symbol: "ϟ", meaning: "A shaky structure may be ready to change. What is true can help you rebuild on firmer ground." },
  { name: "The Star", number: "XVII", symbol: "✦", meaning: "Let hope return gently. Rest, honesty, and small acts of care can help you feel renewed." },
  { name: "The Moon", number: "XVIII", symbol: "☾", meaning: "Move thoughtfully through uncertainty. Dreams and feelings may be asking for your attention." },
  { name: "The Sun", number: "XIX", symbol: "☼", meaning: "Welcome warmth, confidence, and a clearer view. Let yourself enjoy what is going well." },
  { name: "Judgement", number: "XX", symbol: "♬", meaning: "A moment of honest reflection invites you to answer a deeper calling and move forward." },
  { name: "The World", number: "XXI", symbol: "◎", meaning: "A meaningful chapter is complete. Recognize how far you have come before beginning again." },
];

const numberMeanings = [
  { number: "0", clue: "Openness, possibility, and the space before a new beginning." },
  { number: "1", clue: "A beginning, a seed of potential, and the first step toward something new." },
  { number: "2", clue: "Balance, partnership, and the choices that ask you to consider two sides." },
  { number: "3", clue: "Growth, collaboration, and the first signs of an idea taking shape." },
  { number: "4", clue: "Stability, structure, and building a foundation you can rely on." },
  { number: "5", clue: "A turning point, challenge, or disruption that asks you to adapt." },
  { number: "6", clue: "Harmony, generosity, and finding your way back toward balance." },
  { number: "7", clue: "Reflection, discernment, and looking beneath the surface before acting." },
  { number: "8", clue: "Movement, focused effort, and developing skill or momentum." },
  { number: "9", clue: "Near completion, deepening wisdom, and the last stretch of a cycle." },
  { number: "10", clue: "Completion, a cycle coming full circle, and moving forward into what is next." },
];

const suitDetails = {
  cups: {
    name: "Cups", symbol: "♡", theme: "feelings, relationships, intuition, and the inner world", zodiac: "Cancer, Scorpio, and Pisces",
    phrases: {
      Ace: "A new emotional opening invites you to trust your heart and welcome connection.",
      Two: "A bond grows through mutual care, honest exchange, and meeting one another halfway.",
      Three: "Shared joy, friendship, and community give your feelings room to flourish.",
      Four: "A pause can help you notice which emotional offers truly speak to you.",
      Five: "Disappointment deserves care, but not every source of support is gone.",
      Six: "A memory or familiar connection brings tenderness and a chance to reconnect.",
      Seven: "Many feelings or possibilities are present; take time to see what is real for you.",
      Eight: "You may be ready to leave an unfulfilling emotional pattern and seek deeper meaning.",
      Nine: "A wish, a moment of contentment, or a more generous relationship with yourself is within reach.",
      Ten: "Emotional fulfillment and a nourishing sense of belonging are possible.",
      Page: "A tender message or fresh curiosity invites you to explore your feelings.",
      Knight: "Follow a heartfelt ideal, while keeping one foot grounded in what is real.",
      Queen: "Lead with empathy and emotional wisdom without losing touch with your own needs.",
      King: "Steady compassion helps you respond to strong feelings with care and maturity.",
    },
  },
  wands: {
    name: "Wands", symbol: "♧", theme: "creative energy, ambition, inspiration, and action", zodiac: "Aries, Leo, and Sagittarius",
    phrases: {
      Ace: "A spark of inspiration is ready to become a project, adventure, or bold first step.",
      Two: "Look ahead and choose which direction deserves your energy next.",
      Three: "Your plans are beginning to reach farther; stay open to growth and new horizons.",
      Four: "Pause to celebrate what you have built and enjoy the people cheering you on.",
      Five: "Competing ideas bring friction, but a little challenge can sharpen your approach.",
      Six: "A milestone earns recognition; let confidence help you keep moving.",
      Seven: "Protect what matters to you and hold your ground with thoughtful confidence.",
      Eight: "Momentum is building; clear communication and timely action can carry you forward.",
      Nine: "You have resilience to draw on. Rest, regroup, and keep a healthy boundary.",
      Ten: "A worthwhile ambition has become a heavy load; decide what can be shared or set down.",
      Page: "A new passion or creative idea is asking to be explored with enthusiasm.",
      Knight: "Bold action and adventure beckon; give your enthusiasm a clear direction.",
      Queen: "Warm confidence and creative independence make room for others to shine, too.",
      King: "A compelling vision can inspire action when paired with generous leadership.",
    },
  },
  swords: {
    name: "Swords", symbol: "⚔", theme: "thoughts, communication, decisions, and challenges", zodiac: "Gemini, Libra, and Aquarius",
    phrases: {
      Ace: "A clear idea or honest conversation can cut through confusion and open a way forward.",
      Two: "A difficult choice may need stillness, balanced thought, and a little more information.",
      Three: "Heartache asks to be acknowledged; naming it can be part of healing.",
      Four: "Rest your mind before deciding. A thoughtful pause is productive, too.",
      Five: "Consider what winning costs; a direct but respectful conversation may serve you better.",
      Six: "A difficult passage is shifting toward calmer waters, one step at a time.",
      Seven: "Use discernment and strategy; be honest with yourself about what is being avoided.",
      Eight: "A limiting story can feel binding, but a new perspective may reveal choices.",
      Nine: "Worry may be louder at night; bring your fears into the light and seek support.",
      Ten: "A painful chapter has reached its limit. Endings can mark the start of recovery.",
      Page: "Stay curious, ask clear questions, and notice how information is being shared.",
      Knight: "A strong idea pushes for action; pause long enough to make your message precise.",
      Queen: "Clear boundaries and honest perception help you speak with fairness and resolve.",
      King: "Use logic and integrity to make a considered decision and communicate it clearly.",
    },
  },
  pentacles: {
    name: "Pentacles", symbol: "✧", theme: "work, resources, the body, and material security", zodiac: "Taurus, Virgo, and Capricorn",
    phrases: {
      Ace: "A practical opportunity is taking root; steady attention can help it grow.",
      Two: "Balance competing demands with flexibility, especially around time and resources.",
      Three: "Good work gets stronger through collaboration, craft, and shared expertise.",
      Four: "Security matters, but consider whether holding on tightly is keeping you from growing.",
      Five: "A lean stretch can feel isolating; practical help may be closer than it seems.",
      Six: "A fair exchange of support, time, or resources can benefit everyone involved.",
      Seven: "Your effort is growing over time; review your progress before choosing what to invest next.",
      Eight: "Practice and patience are building real skill. Keep showing up for the work.",
      Nine: "A sense of independence and comfort reflects care you have invested in yourself.",
      Ten: "Long-term security and shared prosperity grow from foundations built with care.",
      Page: "A practical new goal invites you to learn, plan, and begin with care.",
      Knight: "Consistency and dependable effort will carry a real-world plan forward.",
      Queen: "Create grounded comfort by caring for your resources, your body, and your community.",
      King: "Patient stewardship and practical leadership can turn resources into lasting stability.",
    },
  },
};

const ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"];
const majorSourceNames = {
  Strength: "Fortitude",
  "The Hanged One": "The Hanged Man",
  Judgement: "The Last Judgment",
};
const localMajorCardImages = {
  "The Fool": "assets/tarot/the-fool.jpg",
  "The High Priestess": "assets/tarot/the-high-priestess.jpg",
  "The Star": "assets/tarot/the-star.jpg",
};
const majorImageNames = {
  "The Hanged One": "The_Hanged_Man",
  Judgement: "Judgement",
};
const majorZodiac = {
  "The Fool": "Uranus · Aquarius",
  "The Magician": "Mercury · Gemini and Virgo",
  "The High Priestess": "The Moon · Cancer",
  "The Empress": "Venus · Taurus and Libra",
  "The Emperor": "Aries",
  "The Hierophant": "Taurus",
  "The Lovers": "Gemini",
  "The Chariot": "Cancer",
  Strength: "Leo",
  "The Hermit": "Virgo",
  "Wheel of Fortune": "Jupiter · Sagittarius and Pisces",
  Justice: "Libra",
  "The Hanged One": "Neptune · Pisces",
  Death: "Scorpio",
  Temperance: "Sagittarius",
  "The Devil": "Capricorn",
  "The Tower": "Mars · Aries",
  "The Star": "Aquarius",
  "The Moon": "Pisces",
  "The Sun": "Leo",
  Judgement: "Pluto · Scorpio",
  "The World": "Saturn · Capricorn",
};
const majorYesNo = {
  "The Fool": "Likely yes",
  "The Magician": "Yes",
  "The High Priestess": "Maybe · wait for more clarity",
  "The Empress": "Yes",
  "The Emperor": "Yes",
  "The Hierophant": "Likely yes",
  "The Lovers": "Yes · consider your values",
  "The Chariot": "Yes · with focused effort",
  Strength: "Yes · patience is needed",
  "The Hermit": "Not now · reflect first",
  "Wheel of Fortune": "Likely yes · circumstances may shift",
  Justice: "Maybe · weigh the facts",
  "The Hanged One": "Not yet · pause",
  Death: "No · a change or ending comes first",
  Temperance: "Yes · take a measured approach",
  "The Devil": "No · examine the attachment",
  "The Tower": "No · expect disruption",
  "The Star": "Yes · keep hope",
  "The Moon": "Maybe · things are unclear",
  "The Sun": "Yes",
  Judgement: "Yes · answer the call",
  "The World": "Yes · a cycle is completing",
};
const minorYesNo = {
  cups: ["Yes", "Yes", "Yes", "Maybe", "No", "Yes", "Maybe", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  wands: ["Yes", "Yes", "Yes", "Yes", "No", "Yes", "Yes", "Yes", "Maybe", "No", "Yes", "Yes", "Yes", "Yes"],
  swords: ["Yes", "Maybe", "No", "Not now", "No", "Yes", "Maybe", "No", "No", "No", "Maybe", "Yes", "Yes", "Yes"],
  pentacles: ["Yes", "Maybe", "Yes", "No", "No", "Yes", "Maybe", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
};
const suitImageNames = {
  cups: "Cups",
  wands: "Wands",
  swords: "Swords",
  pentacles: "Pentacles",
};
const cardDecks = {
  major: majorCards.map((card, index) => {
    const imageName = majorImageNames[card.name] || card.name.replaceAll(" ", "_");
    const imageUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/Pictorial_Key_to_the_Tarot_${String(index).padStart(2, "0")}_${imageName}.jpg`;
    return {
      ...card,
      image: localMajorCardImages[card.name] || imageUrl,
      zodiac: majorZodiac[card.name],
      yesNo: majorYesNo[card.name],
      sourceMeanings: tarotSourceMeanings.major[majorSourceNames[card.name] || card.name],
    };
  }),
  ...Object.fromEntries(
    Object.entries(suitDetails).map(([key, suit]) => [
      key,
      ranks.map((rank, index) => {
        const imageNumber = String(index + 1).padStart(2, "0");
        const imageUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/RWS1909_-_${suitImageNames[key]}_${imageNumber}.jpeg`;
        return {
          name: `${rank} of ${suit.name}`,
          number: index < 10 ? String(index + 1) : ["P", "Kn", "Q", "K"][index - 10],
          symbol: suit.symbol,
          suitKey: key,
          rank,
          image: imageUrl,
          zodiac: `${suit.zodiac} (${suit.name} correspondence)`,
          yesNo: minorYesNo[key][index],
          meaning: suit.phrases[rank],
          sourceMeanings: tarotSourceMeanings.minor[key][rank],
        };
      }),
    ]),
  ),
};

const categoryNames = {
  major: "Major Arcana",
  all: "All Cards",
  cups: "Suit of Cups",
  wands: "Suit of Wands",
  swords: "Suit of Swords",
  pentacles: "Suit of Pentacles",
};

const numberMeaningList = numberMeanings.map((item) => item.clue);
const allTarotCards = Object.values(cardDecks).flat();
const readingAreas = [
  { name: "Love", symbol: "♡", lens: "connection, care, and emotional exchange" },
  { name: "Career", symbol: "✧", lens: "work, direction, and collaboration" },
  { name: "Finances", symbol: "$", lens: "resources, security, and practical choices" },
  { name: "Health", symbol: "✚", lens: "wellbeing, balance, and caring for yourself" },
];
const seasonalCards = [
  {
    name: "Spring", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=720&q=85",
    alt: "Bright yellow spring flowers against a blue sky",
    spiritual: "Renewal, awakening, and the courage to begin again.",
    zodiac: "Aries, Taurus, and Gemini bring initiative, growth, and curiosity.",
    tarot: "Wands: the first spark of energy, creativity, and action.",
  },
  {
    name: "Summer", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=720&q=85",
    alt: "A tropical green coastline with clear turquoise water",
    spiritual: "Vitality, connection, and self-expression.",
    zodiac: "Cancer, Leo, Virgo: nurture, express, refine.",
    tarot: "Cups: connection, feeling, and shared joy.",
  },
  {
    name: "Autumn", image: "https://images.unsplash.com/photo-1507783548227-544c3b8fc065?auto=format&fit=crop&w=720&q=85",
    alt: "A carpet of brilliant orange autumn leaves in a woodland setting",
    spiritual: "Harvest, gratitude, release, and renewal.",
    zodiac: "Libra, Scorpio, Sagittarius: balance, change, and meaning.",
    tarot: "Pentacles: harvest, resources, and what you nurture.",
  },
  {
    name: "Winter", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=720&q=85",
    alt: "A dramatic snow-covered mountain beneath a star-filled winter sky",
    spiritual: "Rest, inward listening, patience, and winter's quiet promise.",
    zodiac: "Capricorn, Aquarius, Pisces: structure, vision, intuition.",
    tarot: "Swords: reflection, discernment, and clarity.",
  },
];
const zodiacCards = [
  { name: "Aries", symbol: "♈", animal: "Ram", dates: "Mar 21–Apr 19", element: "Fire", zodiac: "Cardinal · bold, direct, and ready to act.", card: "The Emperor", spiritual: "Trust your courage and take the first step." },
  { name: "Taurus", symbol: "♉", animal: "Bull", dates: "Apr 20–May 20", element: "Earth", zodiac: "Fixed · grounded, patient, and devoted.", card: "The Hierophant", spiritual: "Build patiently and honor what you value." },
  { name: "Gemini", symbol: "♊", animal: "Twins", dates: "May 21–Jun 20", element: "Air", zodiac: "Mutable · curious, expressive, and adaptable.", card: "The Lovers", spiritual: "Stay curious and let honest exchange widen your view." },
  { name: "Cancer", symbol: "♋", animal: "Crab", dates: "Jun 21–Jul 22", element: "Water", zodiac: "Cardinal · intuitive, nurturing, and protective.", card: "The Chariot", spiritual: "Let care guide you without giving up your direction." },
  { name: "Leo", symbol: "♌", animal: "Lion", dates: "Jul 23–Aug 22", element: "Fire", zodiac: "Fixed · warm, expressive, and generous.", card: "Strength", spiritual: "Share your light with confidence and kindness." },
  { name: "Virgo", symbol: "♍", animal: "Maiden", dates: "Aug 23–Sep 22", element: "Earth", zodiac: "Mutable · observant, practical, and discerning.", card: "The Hermit", spiritual: "Let thoughtful service begin with self-understanding." },
  { name: "Libra", symbol: "♎", animal: "Scales", dates: "Sep 23–Oct 22", element: "Air", zodiac: "Cardinal · relational, diplomatic, and fair-minded.", card: "Justice", spiritual: "Seek balance without abandoning your own truth." },
  { name: "Scorpio", symbol: "♏", animal: "Scorpion", dates: "Oct 23–Nov 21", element: "Water", zodiac: "Fixed · perceptive, intense, and transformative.", card: "Death", spiritual: "Release what is complete so change can take root." },
  { name: "Sagittarius", symbol: "♐", animal: "Archer", dates: "Nov 22–Dec 21", element: "Fire", zodiac: "Mutable · adventurous, candid, and philosophical.", card: "Temperance", spiritual: "Keep seeking while bringing new wisdom into balance." },
  { name: "Capricorn", symbol: "♑", animal: "Sea-goat", dates: "Dec 22–Jan 19", element: "Earth", zodiac: "Cardinal · disciplined, strategic, and determined.", card: "The Devil", spiritual: "Choose your commitments with care and reclaim your agency." },
  { name: "Aquarius", symbol: "♒", animal: "Water Bearer", dates: "Jan 20–Feb 18", element: "Air", zodiac: "Fixed · independent, inventive, and community-minded.", card: "The Star", spiritual: "Let a hopeful vision serve both you and your community." },
  { name: "Pisces", symbol: "♓", animal: "Fish", dates: "Feb 19–Mar 20", element: "Water", zodiac: "Mutable · empathetic, imaginative, and receptive.", card: "The Moon", spiritual: "Honor your sensitivity while moving gently through uncertainty." },
];
const tarotNumbers = [
  ["0", "The Fool", "Open possibility, trust, and the willingness to begin.", "Aquarius · freedom, invention, and openness to the unknown.", "A leap into an unwritten journey."],
  ["1", "The Magician", "Intention becomes action when attention and resources align.", "Gemini and Virgo · Mercury's curiosity, communication, and skill.", "Focused will turns possibility into a first step."],
  ["2", "The High Priestess", "Duality, listening, and knowledge that grows in stillness.", "Cancer · the Moon, intuition, memory, and inner tides.", "Look beneath the surface and trust what is quietly known."],
  ["3", "The Empress", "Creation, growth, and the abundance that comes from care.", "Taurus and Libra · Venus, beauty, affection, and growth.", "Give an idea the conditions it needs to flourish."],
  ["4", "The Emperor", "Structure, boundaries, and a stable foundation.", "Aries · initiative, leadership, and decisive action.", "Make a clear plan and take responsibility for it."],
  ["5", "The Hierophant", "Learning, shared values, and inherited traditions.", "Taurus · steady values, teaching, and tradition.", "Explore the wisdom of a practice while finding your own meaning."],
  ["6", "The Lovers", "Choice, relationship, and alignment with core values.", "Gemini · dialogue, duality, and meaningful choices.", "A meaningful choice asks for honesty and connection."],
  ["7", "The Chariot", "Direction, discipline, and movement through opposing forces.", "Cancer · emotional resolve, protection, and direction.", "Choose a course and guide your energy toward it."],
  ["8", "Strength", "Courage, patience, and compassionate self-mastery.", "Leo · heart, confidence, and generous courage.", "Meet intensity with steady, gentle resolve."],
  ["9", "The Hermit", "Reflection, solitude, and the light of inner inquiry.", "Virgo · discernment, careful attention, and service.", "Step back long enough to hear your own perspective."],
  ["10", "Wheel of Fortune", "Cycles, turning points, and changing circumstances.", "Jupiter · Sagittarius and Pisces; expansion, faith, and change.", "Notice what is shifting and respond with flexibility."],
  ["11", "Justice", "Accountability, discernment, and cause meeting consequence.", "Libra · balance, fairness, and considered choices.", "Weigh the facts and act with integrity."],
  ["12", "The Hanged Man", "Pause, surrender, and a perspective changed by waiting.", "Pisces · compassion, surrender, and a changed perspective.", "A deliberate pause may reveal another way to see."],
  ["13", "Death", "An ending that clears space for transformation.", "Scorpio · deep change, release, and renewal.", "Release what has run its course so change can take root."],
  ["14", "Temperance", "Moderation, integration, and patient balance.", "Sagittarius · growth through exploration and integration.", "Bring different needs together one careful step at a time."],
  ["15", "The Devil", "Attachment, temptation, and the patterns that limit choice.", "Capricorn · ambition, responsibility, and material bonds.", "Recognize where a habit holds power and reclaim agency."],
  ["16", "The Tower", "Disruption that exposes an unstable foundation.", "Mars · traditionally linked with Aries; force and upheaval.", "When an old structure breaks, attend to what is real and rebuild."],
  ["17", "The Star", "Hope, renewal, and trust after difficulty.", "Aquarius · inspiration, community, and a wider vision.", "Make room for recovery and a vision of what could come next."],
  ["18", "The Moon", "Dreams, uncertainty, and the work of navigating the unseen.", "Pisces · imagination, sensitivity, and the unseen.", "Move gently through ambiguity and check assumptions as you go."],
  ["19", "The Sun", "Clarity, warmth, and open-hearted vitality.", "The Sun · often associated with Leo, warmth, and vitality.", "Let what is working be seen and shared."],
  ["20", "Judgement", "Reflection, awakening, and answering a meaningful call.", "Pluto · commonly linked with Scorpio and deep transformation.", "Gather what experience has taught you before choosing your next chapter."],
  ["21", "The World", "Integration, achievement, and the completion of a cycle.", "Saturn · commonly linked with Capricorn, boundaries, and mastery.", "Recognize how far you have come and carry that wisdom forward."],
].map(([number, card, significance, zodiac, tarot]) => ({
  name: number, symbol: number, significance, zodiac, tarot: `${card}: ${tarot}`,
}));
const tarotElements = [
  { name: "Fire", image: "https://images.unsplash.com/photo-1523861751938-121b5323b48b?auto=format&fit=crop&w=720&q=85", alt: "Bright flames against a dark background", spiritual: "Drive, creative spark, courage, and transformation.", zodiac: "Aries, Leo, and Sagittarius.", tarot: "Wands: inspiration, ambition, and action." },
  { name: "Water", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=720&q=85", alt: "Deep blue ocean waves", spiritual: "Feeling, intuition, empathy, and emotional flow.", zodiac: "Cancer, Scorpio, and Pisces.", tarot: "Cups: relationships, imagination, and inner life." },
  { name: "Air", image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=720&q=85", alt: "Looking upward through tall trees into the open sky", spiritual: "Thought, communication, perspective, and discernment.", zodiac: "Gemini, Libra, and Aquarius.", tarot: "Swords: ideas, decisions, and the clarity to face truth." },
  { name: "Earth", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=720&q=85", alt: "A mountain lake surrounded by green earth", spiritual: "Grounding, patience, the body, and material care.", zodiac: "Taurus, Virgo, and Capricorn.", tarot: "Pentacles: work, resources, and tangible growth." },
];
const tarotSuitOrder = [
  { name: "1 · Cups", image: "https://commons.wikimedia.org/wiki/Special:FilePath/RWS1909_-_Cups_01.jpeg", alt: "The original Rider–Waite–Smith Ace of Cups card", spiritual: "The meeting: feeling, care, and emotional exchange.", zodiac: "Water · Cancer, Scorpio, Pisces.", tarot: "Cups explore bonds, intuition, and the inner world." },
  { name: "2 · Wands", image: "https://commons.wikimedia.org/wiki/Special:FilePath/RWS1909_-_Wands_01.jpeg", alt: "The original Rider–Waite–Smith Ace of Wands card", spiritual: "The spark: desire, initiative, and the energy to begin.", zodiac: "Fire · Aries, Leo, Sagittarius.", tarot: "Wands carry the suit's creative and active current." },
  { name: "3 · Swords", image: "https://commons.wikimedia.org/wiki/Special:FilePath/RWS1909_-_Swords_01.jpeg", alt: "The original Rider–Waite–Smith Ace of Swords card", spiritual: "The mind: truth, tension, and the choices that clarify.", zodiac: "Air · Gemini, Libra, Aquarius.", tarot: "Swords bring thought, communication, and challenge into view." },
  { name: "4 · Pentacles", image: "https://commons.wikimedia.org/wiki/Special:FilePath/RWS1909_-_Pentacles_01.jpeg", alt: "The original Rider–Waite–Smith Ace of Pentacles card", spiritual: "The ground: effort, stability, and what we tend over time.", zodiac: "Earth · Taurus, Virgo, Capricorn.", tarot: "Pentacles focus on work, resources, and lived experience." },
];
const state = {
  category: "major",
  card: null,
  cardAnswers: [],
  cardCorrect: 0,
  cardTotal: 0,
  number: null,
  numberAnswers: [],
  numberCorrect: 0,
  numberTotal: 0,
  answeredCard: false,
  answeredNumber: false,
  quickReadArea: "Love",
  quickReadOrientation: 0,
};

const cardScore = document.querySelector("#card-score");
const cardTotal = document.querySelector("#card-total");
const numberScore = document.querySelector("#number-score");
const numberTotal = document.querySelector("#number-total");
const cardOptions = document.querySelector("#answer-options");
const numberOptions = document.querySelector("#number-options");
const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");
const homeViews = document.querySelectorAll("[data-home-view]");
const pageViews = document.querySelectorAll("[data-page-view]");
const quickReadForm = document.querySelector("#quick-read-form");
const quickReadInput = document.querySelector("#quick-read-card");
const quickReadList = document.querySelector("#tarot-card-list");
const quickReadFeedback = document.querySelector("#quick-read-feedback");
const quickReadResult = document.querySelector("#quick-read-result");
const threeCardForm = document.querySelector("#three-card-form");
const threeCardResult = document.querySelector("#three-card-result");
const threeCardSelects = [...document.querySelectorAll(".three-card-pick select")];
const dateSongPreview = document.querySelector("#date-song-preview");
const recordVinyl = document.querySelector(".record-vinyl");
const songPreviewStatus = document.querySelector("#song-preview-status");
const memoryCommentForms = [...document.querySelectorAll(".memory-comment-form")];
const memoryCommentsStorageKey = "world-of-tarot-memory-comments";
let memoryComments = [];

function renderMemoryComments() {
  memoryCommentForms.forEach((form) => {
    const polaroidIndex = Number(form.dataset.polaroidComment);
    const commentList = form.querySelector(".memory-comment-list");
    commentList.replaceChildren();
    memoryComments
      .filter((comment) => comment.polaroid === polaroidIndex)
      .forEach((comment) => {
        const article = document.createElement("article");
        const header = document.createElement("header");
        const name = document.createElement("strong");
        const timestamp = document.createElement("time");
        const text = document.createElement("p");
        article.className = "memory-comment-entry";
        name.textContent = comment.name || "Anonymous";
        timestamp.dateTime = comment.createdAt;
        timestamp.textContent = new Date(comment.createdAt).toLocaleString();
        text.textContent = comment.text;
        header.append(name, timestamp);
        article.append(header, text);
        commentList.append(article);
      });
  });
}

try {
  const savedComments = window.localStorage.getItem(memoryCommentsStorageKey);
  if (savedComments) {
    const rawComments = JSON.parse(savedComments);
    if (!Array.isArray(rawComments) || rawComments.some((comment) => !comment || typeof comment !== "object")) {
      throw new TypeError("Saved comments have an invalid format.");
    }
    const parsedComments = rawComments.map((comment) => ({
      ...comment,
      polaroid: comment.polaroid ?? 0,
    }));
    if (parsedComments.some((comment) =>
      !comment || typeof comment.name !== "string" || typeof comment.text !== "string" ||
      typeof comment.createdAt !== "string" || comment.name.length > 60 || comment.text.length > 500 ||
      !Number.isInteger(comment.polaroid) || comment.polaroid < 0 || comment.polaroid >= memoryCommentForms.length ||
      !Number.isFinite(Date.parse(comment.createdAt)),
    )) {
      throw new TypeError("Saved comments have an invalid format.");
    }
    memoryComments = parsedComments;
  }
  renderMemoryComments();
} catch (error) {
  memoryCommentForms.forEach((form) => {
    const status = form.querySelector(".memory-comment-status");
    if (status) status.textContent = "Saved comments are unavailable in this browser.";
    form.querySelector("button[type='submit']").disabled = true;
  });
}

memoryCommentForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const comment = {
      name: "",
      text: String(formData.get("comment")).trim().slice(0, 500),
      createdAt: new Date().toISOString(),
      polaroid: Number(form.dataset.polaroidComment),
    };
    const status = form.querySelector(".memory-comment-status");
    if (!comment.text) {
      status.textContent = "Write a thought before posting.";
      return;
    }
    const updatedComments = [...memoryComments, comment];
    try {
      window.localStorage.setItem(memoryCommentsStorageKey, JSON.stringify(updatedComments));
    } catch (error) {
      status.textContent = "Your thought couldn't be saved in this browser. Check its storage settings and try again.";
      return;
    }
    memoryComments = updatedComments;
    renderMemoryComments();
    form.reset();
    status.textContent = "Your thought was saved in this browser.";
  });
});

function syncRecordPlayback() {
  const isPlaying = !dateSongPreview.paused && !dateSongPreview.ended;
  recordVinyl.classList.toggle("is-playing", isPlaying);
  recordVinyl.setAttribute("aria-pressed", String(isPlaying));
  recordVinyl.setAttribute("aria-label", `${isPlaying ? "Pause" : "Play"} Get It Shawty`);
}

function startDateSong() {
  dateSongPreview.play().then(() => {
    songPreviewStatus.textContent = "";
    syncRecordPlayback();
  }).catch(() => {
    songPreviewStatus.textContent = "Autoplay was blocked. Tap the record to play.";
    syncRecordPlayback();
  });
}

dateSongPreview.addEventListener("play", syncRecordPlayback);
dateSongPreview.addEventListener("pause", syncRecordPlayback);
dateSongPreview.addEventListener("ended", syncRecordPlayback);
recordVinyl.addEventListener("click", () => {
  if (dateSongPreview.paused) startDateSong();
  else dateSongPreview.pause();
});
document.querySelector(".secret-date-link").addEventListener("click", startDateSong);

function makeFlipCard({ name, image, glyph, symbol, alt, animal, element, card, spiritual, zodiac, tarot, significance }, kind) {
  const button = document.createElement("button");
  button.className = `flip-card ${kind}-card`;
  button.type = "button";
  button.setAttribute("aria-pressed", "false");

  const inner = document.createElement("span");
  inner.className = "flip-card-inner";
  const front = document.createElement("span");
  front.className = "flip-card-face flip-card-front";
  front.setAttribute("aria-hidden", "false");
  const back = document.createElement("span");
  back.className = "flip-card-face flip-card-back";
  back.setAttribute("aria-hidden", "true");

  const picture = document.createElement("img");
  let artwork;
  if ((image || glyph) && !(kind === "zodiac" && symbol)) {
    picture.className = "flip-card-image";
    picture.alt = alt || `${name} illustration`;
    picture.loading = "lazy";
    picture.decoding = "async";
    picture.src = image || `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${glyph}.svg`;
    artwork = picture;
  } else if (symbol) {
    artwork = document.createElement("span");
    artwork.className = "flip-card-symbol";
    artwork.textContent = symbol;
    artwork.setAttribute("aria-hidden", "true");
  } else {
    artwork = document.createElement("span");
    artwork.className = "flip-card-symbol";
    artwork.textContent = "";
    artwork.setAttribute("aria-hidden", "true");
  }
  if (animal) {
    const animalLabel = document.createElement("span");
    animalLabel.className = "flip-card-animal";
    animalLabel.textContent = animal;
    front.append(artwork, animalLabel);
  } else {
    front.append(artwork);
  }
  const title = document.createElement("span");
  title.className = "flip-card-title";
  title.textContent = name;
  const prompt = document.createElement("span");
  prompt.className = "flip-card-prompt";
  prompt.textContent = "Tap to reveal";
  front.append(title, prompt);

  const backTitle = document.createElement("span");
  backTitle.className = "flip-card-title";
  backTitle.textContent = name;
  const details = kind === "season"
    ? [["Spiritually", spiritual], ["Zodiac", zodiac], ["Tarot", tarot]]
    : kind === "zodiac"
      ? [["Animal / emblem", animal], ["Spiritually", spiritual], ["Zodiac", `${element} · ${zodiac}`], ["Tarot", card]]
      : kind === "number"
        ? [["Significance", significance], ["Zodiac", zodiac], ["Tarot", tarot]]
        : [["Spiritually", spiritual], ["Zodiac", zodiac], ["Tarot", tarot]];
  const list = document.createElement("span");
  list.className = "flip-card-details";
  details.forEach(([label, value]) => {
    const detail = document.createElement("span");
    const heading = document.createElement("strong");
    heading.textContent = label;
    const text = document.createElement("span");
    text.textContent = value;
    detail.append(heading, text);
    list.append(detail);
  });
  const promptBack = document.createElement("span");
  promptBack.className = "flip-card-prompt";
  promptBack.textContent = "Tap to turn back";
  back.append(backTitle, list, promptBack);
  inner.append(front, back);
  button.append(inner);
  button.addEventListener("click", () => {
    const isFlipped = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(isFlipped));
    button.classList.toggle("is-flipped", isFlipped);
    front.setAttribute("aria-hidden", String(isFlipped));
    back.setAttribute("aria-hidden", String(!isFlipped));
  });
  return button;
}

document.querySelector("#season-cards").replaceChildren(...seasonalCards.map((card) => makeFlipCard(card, "season")));
document.querySelector("#zodiac-cards").replaceChildren(...zodiacCards.map((card) => makeFlipCard(card, "zodiac")));
document.querySelector("#tarot-numbers").replaceChildren(...tarotNumbers.map((card) => makeFlipCard(card, "number")));
document.querySelector("#tarot-elements-cards").replaceChildren(...tarotElements.map((card) => makeFlipCard(card, "element")));
document.querySelector("#tarot-suit-order").replaceChildren(...tarotSuitOrder.map((card) => makeFlipCard(card, "suit")));

function renderCardSuggestions() {
  const query = quickReadInput.value.trim().toLocaleLowerCase();
  quickReadList.replaceChildren();
  if (!query) {
    quickReadList.hidden = true;
    quickReadInput.setAttribute("aria-expanded", "false");
    return;
  }

  const matches = allTarotCards
    .filter((card) => card.name.toLocaleLowerCase().includes(query))
    .slice(0, 8);
  matches.forEach((card, index) => {
    const item = document.createElement("li");
    const option = document.createElement("button");
    option.type = "button";
    option.role = "option";
    option.setAttribute("aria-selected", "false");
    option.dataset.index = String(index);
    option.textContent = card.name;
    option.addEventListener("click", () => {
      quickReadInput.value = card.name;
      quickReadList.hidden = true;
      quickReadInput.setAttribute("aria-expanded", "false");
      quickReadInput.removeAttribute("aria-invalid");
      quickReadFeedback.textContent = "";
      quickReadInput.focus();
    });
    item.append(option);
    quickReadList.append(item);
  });
  quickReadList.hidden = matches.length === 0;
  quickReadInput.setAttribute("aria-expanded", String(matches.length > 0));
}

function renderQuickRead(card) {
  document.querySelector("#quick-read-title").textContent = card.name;
  document.querySelector("#reading-card-title").textContent = card.name;
  document.querySelector("#reading-card-meaning").textContent = card.sourceMeanings[state.quickReadOrientation];
  document.querySelector("#reading-card-answer").textContent = card.yesNo;
  document.querySelector("#reading-card-zodiac").textContent = card.zodiac;
  document.querySelectorAll(".orientation-button").forEach((button) => {
    const isActive = Number(button.dataset.orientation) === state.quickReadOrientation;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  const areaList = document.querySelector("#reading-areas");
  areaList.replaceChildren();

  readingAreas.forEach((area) => {
    const button = document.createElement("button");
    const inner = document.createElement("span");
    const front = document.createElement("span");
    const back = document.createElement("span");
    const icon = document.createElement("span");
    const label = document.createElement("span");
    const backTitle = document.createElement("strong");
    const context = document.createElement("span");
    const excerpt = document.createElement("span");
    button.type = "button";
    button.className = `area-tarot-card${area.name === state.quickReadArea ? " active is-flipped" : ""}`;
    button.dataset.area = area.name;
    button.setAttribute("aria-pressed", String(area.name === state.quickReadArea));
    button.setAttribute("aria-label", `${area.name} reading for ${card.name}; activate to flip`);
    inner.className = "area-tarot-inner";
    front.className = "area-tarot-face area-tarot-front";
    back.className = "area-tarot-face area-tarot-back";
    icon.className = "area-tarot-symbol";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = area.symbol;
    label.textContent = area.name;
    front.append(icon, label);
    backTitle.textContent = `${card.name} · ${area.name}`;
    context.className = "area-tarot-context";
    context.textContent = `Read the ${state.quickReadOrientation === 0 ? "upright" : "reversed"} card through ${area.lens}.`;
    excerpt.className = "area-tarot-excerpt";
    excerpt.textContent = card.sourceMeanings[state.quickReadOrientation];
    back.append(backTitle, context, excerpt);
    inner.append(front, back);
    button.append(inner);
    button.addEventListener("click", () => {
      state.quickReadArea = area.name;
      renderQuickRead(card);
    });
    areaList.append(button);
  });

  quickReadFeedback.textContent = "";
  quickReadResult.hidden = false;
}

document.querySelectorAll(".orientation-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.quickReadOrientation = Number(button.dataset.orientation);
    const enteredName = quickReadInput.value.trim().toLocaleLowerCase();
    const card = allTarotCards.find((candidate) => candidate.name.toLocaleLowerCase() === enteredName);
    if (card) renderQuickRead(card);
  });
});

quickReadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredName = quickReadInput.value.trim().toLocaleLowerCase();
  const card = allTarotCards.find((candidate) => candidate.name.toLocaleLowerCase() === enteredName);
  if (!card) {
    quickReadResult.hidden = true;
    quickReadFeedback.textContent = "Choose a card from the 78-card list, then try again.";
    quickReadInput.setAttribute("aria-invalid", "true");
    return;
  }
  quickReadInput.removeAttribute("aria-invalid");
    quickReadList.hidden = true;
    quickReadInput.setAttribute("aria-expanded", "false");
    renderQuickRead(card);
});

quickReadInput.addEventListener("input", () => {
    quickReadFeedback.textContent = "";
    quickReadInput.removeAttribute("aria-invalid");
    renderCardSuggestions();
});
quickReadInput.addEventListener("focus", renderCardSuggestions);
quickReadInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      quickReadList.hidden = true;
      quickReadInput.setAttribute("aria-expanded", "false");
    } else if (event.key === "ArrowDown" && !quickReadList.hidden) {
      event.preventDefault();
      quickReadList.querySelector("button")?.focus();
    }
});

threeCardSelects.forEach((select) => {
  allTarotCards.forEach((card) => {
    const option = document.createElement("option");
    option.value = card.name;
    option.textContent = card.name;
    select.append(option);
  });

  select.addEventListener("change", () => {
    const preview = select.closest(".three-card-pick").querySelector(".three-card-preview");
    const card = allTarotCards.find((candidate) => candidate.name === select.value);
    if (!card) {
      preview.hidden = true;
      preview.removeAttribute("src");
      preview.alt = "";
      return;
    }
    preview.src = card.image;
    preview.alt = `${card.name} tarot card`;
    preview.hidden = false;
  });
});

threeCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(threeCardForm);
  const cards = ["past", "present", "next"].map((position) =>
    allTarotCards.find((card) => card.name === formData.get(position)),
  );
  if (cards.some((card) => !card)) {
    document.querySelector("#three-card-feedback").textContent = "Choose one tarot card for each position before revealing the reading.";
    return;
  }
  document.querySelector("#three-card-feedback").textContent = "";

  const positions = ["Past · What led here", "Present · Where you are", "Next · A path forward"];
  const meanings = document.querySelector("#three-card-meanings");
  meanings.replaceChildren();
  cards.forEach((card, index) => {
    const article = document.createElement("article");
    const image = document.createElement("img");
    const position = document.createElement("p");
    const title = document.createElement("h5");
    const meaning = document.createElement("p");
    article.className = "three-card-meaning";
    image.src = card.image;
    image.alt = `${card.name} tarot card`;
    image.loading = "lazy";
    position.className = "eyebrow";
    position.textContent = positions[index];
    title.textContent = card.name;
    meaning.textContent = card.meaning;
    article.append(image, position, title, meaning);
    meanings.append(article);
  });

  const question = String(formData.get("question")).trim();
  document.querySelector("#three-card-result-question-text").textContent = question;
  document.querySelector("#three-card-result-guess").textContent = String(formData.get("guess")).trim();
  document.querySelector("#three-card-synthesis").textContent =
    `For “${question},” this spread moves from ${cards[0].name} as the background (${cards[0].meaning}), through ${cards[1].name} as the present influence (${cards[1].meaning}), toward ${cards[2].name} as a possible next step (${cards[2].meaning}). Notice how these three themes connect in your own situation.`;
  threeCardResult.hidden = false;
});

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  siteMenu.hidden = !isOpen;
}

function showView(targetId, shouldScroll = false) {
  const target = document.getElementById(targetId);
  if (!target) return false;

  const view = target.closest("[data-home-view], [data-page-view]") || target;
  if (view.id !== "secret-date-page" && !dateSongPreview.paused) {
    dateSongPreview.pause();
    dateSongPreview.currentTime = 0;
  }
  const isHome = view.matches("[data-home-view]");
  homeViews.forEach((section) => { section.hidden = !isHome; });
  pageViews.forEach((section) => { section.hidden = isHome || section !== view; });

  if (shouldScroll) target.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

function navigateTo(targetId) {
  if (!showView(targetId)) return;
  const nextHash = `#${targetId}`;
  if (window.location.hash !== nextHash) window.history.pushState(null, "", nextHash);
  document.getElementById(targetId).scrollIntoView({ behavior: "smooth", block: "start" });
  setMenuOpen(false);
}

const initialTarget = window.location.hash.slice(1) || "home";
showView(initialTarget, initialTarget !== "home");

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteMenu.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^=\"#\"]");
  if (!link) return;
  event.preventDefault();
  navigateTo(link.hash.slice(1));
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^=\"#\"]");
  if (!link || link.closest("#site-menu")) return;
  const targetId = link.hash.slice(1);
  if (!document.getElementById(targetId)) return;
  event.preventDefault();
  navigateTo(targetId);
});

window.addEventListener("popstate", () => {
  showView(window.location.hash.slice(1) || "home", true);
});

document.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".nav-dropdown")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function pickDifferent(items, previous) {
  const choices = items.filter((item) => item !== previous);
  return choices[Math.floor(Math.random() * choices.length)];
}

function renderCardQuestion() {
  const deck = state.category === "all" ? allTarotCards : cardDecks[state.category];
  state.card = pickDifferent(deck, state.card);
  state.answeredCard = false;
  const quizCard = document.querySelector("#quiz-card");
  const quizImage = document.querySelector("#quiz-card-art");
  quizImage.hidden = false;
  quizCard.classList.add("has-original-art");
  quizCard.setAttribute("aria-label", state.card.name);
  quizImage.src = state.card.image;
  quizImage.alt = `Original Rider–Waite–Smith illustration for ${state.card.name}`;
  quizImage.onerror = () => {
    quizImage.hidden = true;
    quizCard.classList.remove("has-original-art");
    quizCard.setAttribute("aria-label", `${state.card.name} tarot card`);
  };
  document.querySelector("#quiz-number").textContent = state.card.number;
  document.querySelector("#quiz-symbol").textContent = state.card.symbol;
  document.querySelector("#quiz-card-name").textContent = state.card.name;
  document.querySelector("#quiz-category-label").textContent = categoryNames[state.category].toUpperCase();
  document.querySelector("#card-hint").textContent = `Card ${deck.indexOf(state.card) + 1} of ${deck.length} in this section`;
  document.querySelector("#answer-feedback").textContent = "";
  document.querySelector("#answer-feedback").classList.remove("is-wrong");
  document.querySelector("#next-card").disabled = true;

  const wrongMeanings = shuffle(
    Object.values(cardDecks).flat().map((card) => card.meaning).filter((meaning) => meaning !== state.card.meaning),
  ).slice(0, 2);
  state.cardAnswers = shuffle([state.card.meaning, ...wrongMeanings]);
  cardOptions.replaceChildren();
  state.cardAnswers.forEach((meaning, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.dataset.answer = String(index);
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.querySelector("span:last-child").textContent = meaning;
    button.addEventListener("click", () => answerCard(index));
    cardOptions.append(button);
  });
}

function answerCard(selectedIndex) {
  if (state.answeredCard) return;
  state.answeredCard = true;
  state.cardTotal += 1;
  const correctIndex = state.cardAnswers.indexOf(state.card.meaning);
  const feedback = document.querySelector("#answer-feedback");

  [...cardOptions.children].forEach((button, index) => {
    button.disabled = true;
    if (index === correctIndex) button.classList.add("correct");
    if (index === selectedIndex && index !== correctIndex) button.classList.add("incorrect");
  });

  if (selectedIndex === correctIndex) {
    state.cardCorrect += 1;
    feedback.textContent = "That’s it! Notice how the card’s clues build a story.";
  } else {
    feedback.textContent = `Not quite. ${state.card.name}: ${state.card.meaning}`;
    feedback.classList.add("is-wrong");
  }
  cardScore.textContent = String(state.cardCorrect);
  cardTotal.textContent = String(state.cardTotal);
  document.querySelector("#next-card").disabled = false;
}

function renderNumberQuestion() {
  state.number = pickDifferent(numberMeanings, state.number);
  state.answeredNumber = false;
  document.querySelector("#number-display").textContent = state.number.number;
  document.querySelector("#number-feedback").textContent = "";
  document.querySelector("#number-feedback").classList.remove("is-wrong");
  document.querySelector("#next-number").disabled = true;

  const wrongClues = shuffle(numberMeaningList.filter((clue) => clue !== state.number.clue)).slice(0, 2);
  state.numberAnswers = shuffle([state.number.clue, ...wrongClues]);
  numberOptions.replaceChildren();
  state.numberAnswers.forEach((clue, index) => {
    const button = document.createElement("button");
    button.className = "number-option";
    button.type = "button";
    button.dataset.answer = String(index);
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.querySelector("span:last-child").textContent = clue;
    button.addEventListener("click", () => answerNumber(index));
    numberOptions.append(button);
  });
}

function answerNumber(selectedIndex) {
  if (state.answeredNumber) return;
  state.answeredNumber = true;
  state.numberTotal += 1;
  const correctIndex = state.numberAnswers.indexOf(state.number.clue);
  const feedback = document.querySelector("#number-feedback");

  [...numberOptions.children].forEach((button, index) => {
    button.disabled = true;
    if (index === correctIndex) button.classList.add("correct");
    if (index === selectedIndex && index !== correctIndex) button.classList.add("incorrect");
  });

  if (selectedIndex === correctIndex) {
    state.numberCorrect += 1;
    feedback.textContent = "Exactly. The number gives the card another layer.";
  } else {
    feedback.textContent = `Remember: ${state.number.number} suggests ${state.number.clue.toLowerCase()}`;
    feedback.classList.add("is-wrong");
  }
  numberScore.textContent = String(state.numberCorrect);
  numberTotal.textContent = String(state.numberTotal);
  document.querySelector("#next-number").disabled = false;
}

document.querySelectorAll(".category-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelectorAll(".category-tab").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
    state.card = null;
    renderCardQuestion();
  });
});

document.querySelector("#next-card").addEventListener("click", renderCardQuestion);
document.querySelector("#next-number").addEventListener("click", renderNumberQuestion);

renderCardQuestion();
renderNumberQuestion();
