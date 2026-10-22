export interface RecipeStep {
  title: string;
  instruction: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  cuisine: string;
  subCuisine?: string;
  prepTime: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Advanced";
  category: "quick-meals" | "plant-based" | "baking-grains" | "soups-stews";
  servings?: string;
  badge?: string;
  image: string;
  ingredients: string[];
  steps: RecipeStep[];
}

export interface SubRegion {
  name: string;
  recipesCount: number;
  description: string;
  focus: string;
  focusLabel: string;
}

export const RECIPES: Recipe[] = [
  {
    id: "REC-01",
    slug: "vegetable-noodles",
    title: "Vegetable Noodles",
    description: "Tender stir-fried ribbons with ginger-tamari glaze, scallions, and crisp julienned seasonal vegetables.",
    longDescription: "A quick weeknight stir-fry utilizing tender flat noodles, crisp julienned seasonal vegetables, and a balanced savory soy-sesame reduction.",
    cuisine: "Asian",
    subCuisine: "Chinese Tradition",
    prepTime: "20 mins",
    difficulty: "Easy",
    category: "quick-meals",
    servings: "2 portions",
    badge: "Quick Prep",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "200g wheat noodles or soba",
      "1 tbsp toasted sesame oil",
      "1 small carrot, julienned",
      "1 red bell pepper, thinly sliced",
      "2 cups shredded savoy cabbage",
      "2 scallions, diagonally sliced",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp dark soy sauce",
      "1 tsp grated ginger"
    ],
    steps: [
      {
        title: "Par-boil & oil noodles",
        instruction: "Cook noodles in salted boiling water until al dente, drain and toss lightly with half the sesame oil."
      },
      {
        title: "Preheat wok",
        instruction: "Heat a wide skillet or wok over medium-high heat with remaining oil until shimmering."
      },
      {
        title: "Flash aromatics and root vegetables",
        instruction: "Add ginger, julienned carrot, and bell pepper; stir-fry briskly for 3 minutes until tender-crisp."
      },
      {
        title: "Incorporate greens & seasoning reduction",
        instruction: "Fold in the shredded cabbage and noodles; pour in light and dark soy sauces."
      },
      {
        title: "Glaze reduction and finish",
        instruction: "Toss continuously for 2 minutes to glaze evenly, finish with sliced scallions and remove from heat."
      }
    ]
  },
  {
    id: "REC-02",
    slug: "rustic-tomato-galette",
    title: "Rustic Tomato Galette",
    description: "Flaky spelt dough folded over slow-roasted heirloom tomatoes, garlic-herb ricotta, and fresh basil.",
    longDescription: "Flaky spelt pastry crust encasing slow-roasted heirloom summer tomatoes layered over whole-milk ricotta infused with roasted garlic and fine garden basil.",
    cuisine: "Mediterranean",
    prepTime: "45 mins",
    difficulty: "Medium",
    category: "baking-grains",
    servings: "4 portions",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "1 rolled sheet flaky spelt pastry",
      "3 large heirloom tomatoes, sliced thick",
      "200g whole-milk ricotta",
      "2 cloves garlic, finely grated",
      "1 tbsp cold-pressed extra virgin olive oil",
      "Handful fresh basil leaves",
      "1 beaten egg yolk for crust glaze",
      "Coarse flaky sea salt and cracked pepper"
    ],
    steps: [
      {
        title: "Salt and drain tomatoes",
        instruction: "Place sliced tomatoes on paper towels and sprinkle lightly with salt to extract excess moisture for 15 minutes."
      },
      {
        title: "Mix seasoned ricotta spread",
        instruction: "In a bowl combine fresh ricotta, grated garlic, olive oil, salt, and half the torn basil leaves."
      },
      {
        title: "Assemble pastry and filling",
        instruction: "Roll pastry out onto parchment, spread ricotta evenly leaving a 2-inch border, and overlap tomato slices atop."
      },
      {
        title: "Fold pleats and glaze",
        instruction: "Gently fold the pastry borders inward creating rustic pleats, brushing pastry edges with beaten egg yolk."
      },
      {
        title: "Bake until deep golden",
        instruction: "Bake at 200°C (400°F) for 35 to 40 minutes until pastry is crisp and tomatoes are caramelized. Garnish with basil."
      }
    ]
  },
  {
    id: "REC-03",
    slug: "lemon-herb-roast-chicken",
    title: "Lemon Herb Roast Chicken",
    description: "Crisp skin infused with crushed garlic, lemon peel, cracked pepper, and fresh rosemary sprigs.",
    longDescription: "Tender spatchcocked chicken steeped in Meyer lemon zest, crushed garlic cloves, fresh garden herbs, and roasted at high heat for maximum skin crackle.",
    cuisine: "European",
    prepTime: "50 mins",
    difficulty: "Medium",
    category: "quick-meals",
    servings: "4 portions",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "1 whole organic chicken, spatchcocked",
      "2 unwaxed lemons, halved and zested",
      "6 cloves fresh garlic, crushed",
      "3 sprigs fresh rosemary, chopped",
      "4 sprigs garden thyme",
      "2 tbsp olive oil",
      "1 tsp cracked black peppercorns",
      "Sea salt"
    ],
    steps: [
      {
        title: "Dry and season poultry",
        instruction: "Thoroughly pat chicken dry with towels and season liberally with fine sea salt inside and under the skin."
      },
      {
        title: "Make citrus-herb paste",
        instruction: "Mash lemon zest, crushed garlic, rosemary, thyme, olive oil, and black pepper into a fragrant wet rub."
      },
      {
        title: "Apply marinade under skin",
        instruction: "Gently separate skin from the breasts and thighs, sliding herb paste directly against the meat."
      },
      {
        title: "High heat roast",
        instruction: "Roast in a preheated cast iron pan at 220°C (425°F) alongside lemon halves for 45 minutes until internal temp reaches 74°C."
      },
      {
        title: "Rest and carve",
        instruction: "Rest 10 minutes on cutting board, squeeze charred lemon juice over crispy skin, and carve into portions."
      }
    ]
  },
  {
    id: "REC-04",
    slug: "miso-glazed-eggplant",
    title: "Miso Glazed Eggplant",
    description: "Cross-hatched roasted eggplant broiled with red miso, mirin, and unrefined cane sugar until blistered.",
    longDescription: "Traditional Nasu Dengaku featuring plump Japanese eggplants scored diamond-pattern, pan-seared and broiled under sweet savory fermented red miso glaze.",
    cuisine: "Japanese",
    subCuisine: "Japanese Tradition",
    prepTime: "25 mins",
    difficulty: "Easy",
    category: "plant-based",
    servings: "4 Servings",
    badge: "Umami Focus",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "2 medium globe or Japanese eggplants, halved",
      "3 tbsp red or awase miso paste",
      "2 tbsp mirin sweet rice wine",
      "1 tbsp sake cooking wine",
      "1 tbsp raw cane sugar",
      "1 tbsp sesame oil for pan searing",
      "1 tbsp toasted white and black sesame seeds",
      "1 scallion, finely sliced"
    ],
    steps: [
      {
        title: "Cross-hatch eggplant flesh",
        instruction: "Score the cut surface of eggplant halves in a 1/2-inch diamond cross-hatch pattern taking care not to pierce the skin."
      },
      {
        title: "Sear flesh side down",
        instruction: "Heat sesame oil in skillet over medium heat; place eggplant cut-side down and sear for 5 minutes until browned and softened."
      },
      {
        title: "Whisk Dengaku glaze",
        instruction: "In a small bowl combine miso, mirin, sake, and cane sugar until completely smooth and emulsified."
      },
      {
        title: "Glaze and broil",
        instruction: "Turn eggplant skin-side down on baking tray, brush generous coat of miso glaze over scored tops, and broil 4 minutes until bubbling."
      },
      {
        title: "Garnish and serve",
        instruction: "Sprinkle with toasted sesame seeds and sliced scallions while sizzling hot."
      }
    ]
  },
  {
    id: "REC-05",
    slug: "classic-lentil-dahl",
    title: "Classic Lentil Dahl",
    description: "Yellow split lentils simmered with turmeric and finished with a sizzling cumin-mustard seed tadka.",
    longDescription: "Comforting Indian yellow split lentil stew simmered slowly with fresh turmeric, ginger, and garlic, elevated with a fragrant whole-spice tadka finish.",
    cuisine: "Indian",
    prepTime: "35 mins",
    difficulty: "Easy",
    category: "plant-based",
    servings: "4 portions",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "200g yellow split lentils (moong or toor dal)",
      "1 tsp ground turmeric",
      "1 tbsp freshly grated ginger",
      "3 cloves garlic, sliced",
      "2 tbsp ghee or mustard oil",
      "1 tsp whole cumin seeds",
      "1 tsp black mustard seeds",
      "2 dried red chilies",
      "Fresh cilantro and lime wedges"
    ],
    steps: [
      {
        title: "Simmer lentils",
        instruction: "Rinse lentils thoroughly and simmer with 4 cups water, turmeric, salt, and ginger for 25 minutes until creamy."
      },
      {
        title: "Whisk dal consistency",
        instruction: "Beat lentils lightly with a wooden whisk to create a velvet smooth consistency with pleasant texture."
      },
      {
        title: "Heat tadka aromatics",
        instruction: "Heat ghee in small skillet, crackle cumin seeds, mustard seeds, and dried red chilies until fragrant."
      },
      {
        title: "Temper garlic",
        instruction: "Add sliced garlic to ghee and fry for 45 seconds until pale golden."
      },
      {
        title: "Infuse and finish",
        instruction: "Pour hot sizzling tadka directly over the lentils, cover instantly for 2 minutes to trap aroma, stir and serve."
      }
    ]
  },
  {
    id: "REC-06",
    slug: "sourdough-focaccia",
    title: "Sourdough Focaccia",
    description: "High-hydration open crumb focaccia steeped in extra virgin olive oil, flaky sea salt, and fresh herbs.",
    longDescription: "Liguria-inspired high-hydration artisan sourdough focaccia with bubbly blistered crust, steeped in cold-pressed olive oil brine.",
    cuisine: "Italian",
    prepTime: "60 mins",
    difficulty: "Hard",
    category: "baking-grains",
    servings: "8 portions",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "400g strong bread flour",
      "340ml lukewarm water (85% hydration)",
      "80g active sourdough starter",
      "8g fine sea salt",
      "50ml high quality extra virgin olive oil",
      "2 tbsp warm water + 1 tsp salt for brine wash",
      "Fresh rosemary needles and Maldon salt flakes"
    ],
    steps: [
      {
        title: "Mix and autolyse",
        instruction: "Combine flour, water, and starter into shaggy dough and rest 30 minutes before folding in salt."
      },
      {
        title: "Perform stretch and folds",
        instruction: "Execute 4 sets of stretch and folds separated by 30-minute intervals until gluten develops structure."
      },
      {
        title: "Proof in oiled sheet pan",
        instruction: "Pour dough into generous layer of olive oil in a non-stick tin and let ferment until doubled and jiggly."
      },
      {
        title: "Dimple with saline wash",
        instruction: "Pour warm saltwater brine over dough and press fingers down into dough bed creating deep dimples."
      },
      {
        title: "High heat bake",
        instruction: "Bake at 230°C (450°F) for 25 minutes until golden brown with crisp bottom. Finish with rosemary."
      }
    ]
  },
  {
    id: "REC-07",
    slug: "smoky-black-bean-soup",
    title: "Smoky Black Bean Soup",
    description: "Deep chipotle broth with tender simmered black turtle beans, cumin, lime, and avocado crema.",
    longDescription: "Rich Latin American black bean broth simmered with charred onions, chipotle en adobo, ground toasted cumin, and spiked with fresh lime.",
    cuisine: "Latin American",
    prepTime: "30 mins",
    difficulty: "Easy",
    category: "soups-stews",
    servings: "4 portions",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "2 cans cooked black turtle beans with liquid",
      "1 yellow onion, finely diced",
      "2 canned chipotle chilies in adobo, minced",
      "1 tbsp ground cumin",
      "1 tsp Mexican oregano",
      "3 cups vegetable or chicken broth",
      "Juice of 1 fresh lime",
      "Diced ripe avocado and cilantro"
    ],
    steps: [
      {
        title: "Saute aromatic base",
        instruction: "Cook onions in olive oil over medium heat until translucent, about 5 minutes."
      },
      {
        title: "Toast spices and chipotle",
        instruction: "Add minced chipotle, cumin, and oregano, stirring constantly for 1 minute until fragrant."
      },
      {
        title: "Simmer broth and beans",
        instruction: "Add black beans and broth, bring to gentle boil and simmer uncovered for 20 minutes."
      },
      {
        title: "Blend partial soup",
        instruction: "Immersion blend half the soup to achieve a thick, creamy broth while keeping whole beans intact."
      },
      {
        title: "Season and garnish",
        instruction: "Stir in lime juice, adjust salt, and ladle into warm bowls with avocado cubes and fresh cilantro."
      }
    ]
  },
  {
    id: "REC-08",
    slug: "sesame-tahini-noodles",
    title: "Sesame Tahini Noodles",
    description: "Cold wheat noodles tossed in roasted sesame paste, garlic-chili oil, crushed peanuts, and fresh scallions.",
    longDescription: "Chilled chewy wheat noodles dressed in roasted sesame paste, black vinegar, garlic chili crisp, and shaved cooling cucumbers.",
    cuisine: "Middle Eastern",
    prepTime: "15 mins",
    difficulty: "Easy",
    category: "quick-meals",
    servings: "2 portions",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "200g fresh wheat noodles",
      "3 tbsp roasted white sesame paste or pure tahini",
      "1.5 tbsp Chinese black vinegar or rice vinegar",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp chili crisp oil",
      "1 clove garlic, grated",
      "1 Persian cucumber, julienned",
      "2 tbsp crushed roasted peanuts"
    ],
    steps: [
      {
        title: "Boil and chill noodles",
        instruction: "Cook noodles in boiling water until springy, drain and immediately rinse under cold running water."
      },
      {
        title: "Emulsify sesame sauce",
        instruction: "Whisk sesame paste with vinegar, soy sauce, garlic, chili crisp, and 2 tbsp warm noodle water until silky."
      },
      {
        title: "Combine and toss",
        instruction: "Pour emulsified dressing over chilled noodles, tossing with chopsticks until thoroughly coated."
      },
      {
        title: "Plate and top",
        instruction: "Divide between bowls, top with julienned cucumber and roasted crushed peanuts."
      },
      {
        title: "Serve fresh",
        instruction: "Serve immediately with extra chili oil on the side."
      }
    ]
  },
  {
    id: "REC-09",
    slug: "brown-butter-garlic-noodles",
    title: "Brown-Butter Garlic Noodles",
    description: "Savory egg noodles emulsified with nut-browned butter, pulverized garlic, scallions, and toasted sesame.",
    longDescription: "Silky egg noodles coated in nut-browned butter, toasted garlic, parmesan, oyster sauce reduction, and fresh green scallions.",
    cuisine: "Pan-Asian",
    prepTime: "15 Mins",
    difficulty: "Easy",
    category: "quick-meals",
    servings: "2 servings",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "200g fresh thick egg noodles",
      "4 tbsp unsalted butter",
      "6 cloves fresh garlic, minced",
      "1 tbsp oyster sauce",
      "1 tbsp light soy sauce",
      "2 tbsp grated pecorino or parmesan",
      "2 scallions, sliced"
    ],
    steps: [
      {
        title: "Boil noodles",
        instruction: "Cook egg noodles in salted boiling water until al dente, reserving 1/4 cup pasta water."
      },
      {
        title: "Brown the butter",
        instruction: "Melt butter in wide skillet over medium heat until foam subsides and brown flecks appear."
      },
      {
        title: "Infuse garlic",
        instruction: "Add minced garlic to brown butter, stirring 40 seconds until fragrant and golden."
      },
      {
        title: "Emulsify sauces",
        instruction: "Stir in oyster sauce, soy sauce, and splash of pasta water creating glossy sauce."
      },
      {
        title: "Toss and finish",
        instruction: "Toss noodles with sauce, fold in cheese and scallions, serving warm."
      }
    ]
  },
  {
    id: "REC-10",
    slug: "skillet-shakshuka-with-feta",
    title: "Skillet Shakshuka with Feta",
    description: "Gentle poached farm eggs in a robust reduction of roasted peppers, crushed Roma tomatoes, and tangy sheep feta.",
    longDescription: "North African and Levantine breakfast staple of gently poached pasture-raised eggs nestled into a spiced tomato and bell pepper stew.",
    cuisine: "Levantine",
    prepTime: "20 Mins",
    difficulty: "Medium",
    category: "quick-meals",
    servings: "3 servings",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "4 large farm fresh eggs",
      "1 can crushed Italian plum tomatoes",
      "1 red bell pepper, diced",
      "1 yellow onion, sliced",
      "2 tsp ground cumin and smoked paprika",
      "80g sheep milk feta, crumbled",
      "Fresh cilantro or flat-leaf parsley"
    ],
    steps: [
      {
        title: "Cook pepper and onions",
        instruction: "Sweat onions and peppers in olive oil in cast iron skillet for 8 minutes."
      },
      {
        title: "Bloom spices",
        instruction: "Add cumin and paprika, cooking 1 minute until fragrant."
      },
      {
        title: "Simmer tomato reduction",
        instruction: "Add crushed tomatoes and simmer 10 minutes until thick and rich."
      },
      {
        title: "Poach eggs",
        instruction: "Create 4 wells in the sauce, crack eggs inside, cover skillet on low heat for 5 minutes."
      },
      {
        title: "Garnish with feta",
        instruction: "Crumble feta over top, finish with herbs and crusty bread."
      }
    ]
  },
  {
    id: "REC-11",
    slug: "silken-tofu-wakame-miso",
    title: "Silken Tofu & Wakame Miso",
    description: "Fast restorative soup utilizing fermented white miso, kombu dashi stock, and delicate tender silken curd.",
    longDescription: "Comforting classic Japanese soup prepared with simmered kombu-bonito dashi, dissolved sweet white miso, tender cubes of silken tofu, and hydrated wakame seaweed.",
    cuisine: "Japanese",
    prepTime: "10 Mins",
    difficulty: "Easy",
    category: "quick-meals",
    servings: "2 servings",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "3 cups dashi stock",
      "3 tbsp white shiro miso paste",
      "150g silken tofu, cut into 1/2 inch cubes",
      "1 tbsp dried cut wakame seaweed",
      "1 scallion, finely sliced"
    ],
    steps: [
      {
        title: "Warm dashi",
        instruction: "Bring dashi stock to gentle simmer in saucepan."
      },
      {
        title: "Add wakame and tofu",
        instruction: "Hydrate wakame in stock and gently drop in silken tofu cubes."
      },
      {
        title: "Dissolve miso paste",
        instruction: "Place miso in small strainer and whisk into soup without letting it boil."
      },
      {
        title: "Heat through",
        instruction: "Keep just below boil for 1 minute to preserve probiotic flavors."
      },
      {
        title: "Serve",
        instruction: "Ladle into ceramic bowls and top with scallions."
      }
    ]
  },
  {
    id: "REC-12",
    slug: "turmeric-chickpea-coconut-curry",
    title: "Turmeric Chickpea Coconut Curry",
    description: "Braised garbanzo beans with fresh ginger, baby spinach, cold-pressed coconut cream, and yellow spices.",
    longDescription: "Velvety South Asian coconut curry infused with fresh turmeric root, ground coriander, tender chickpeas, and wilted baby greens.",
    cuisine: "South Asian",
    prepTime: "30 Mins",
    difficulty: "Easy",
    category: "plant-based",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "2 cans cooked chickpeas, rinsed",
      "1 can full-fat coconut milk",
      "1 fresh onion, diced",
      "2 cloves garlic and 1 inch fresh ginger, grated",
      "1 tbsp ground turmeric and cumin",
      "3 cups baby spinach leaves",
      "Lime and jasmine rice"
    ],
    steps: [
      {
        title: "Aromatic foundation",
        instruction: "Saute onion, garlic, and ginger in coconut oil for 5 minutes."
      },
      {
        title: "Bloom turmeric",
        instruction: "Stir in turmeric and cumin, cooking 1 minute."
      },
      {
        title: "Simmer chickpeas in coconut",
        instruction: "Add chickpeas and coconut milk, simmering 15 minutes."
      },
      {
        title: "Wilt spinach",
        instruction: "Fold in baby spinach until just wilted and tender."
      },
      {
        title: "Finish with lime",
        instruction: "Squeeze fresh lime juice and serve with jasmine rice."
      }
    ]
  },
  {
    id: "REC-13",
    slug: "roasted-carrots-with-lemon-tahini",
    title: "Roasted Carrots with Lemon Tahini",
    description: "High-heat caramelized young root vegetables drizzled over a whipped sesame-lemon puree with za'atar.",
    longDescription: "Sweet caramelized whole rainbow carrots roasted with cumin and coriander seed, laid upon a bed of lemon-whipped tahini and topped with za'atar.",
    cuisine: "Middle Eastern",
    prepTime: "35 Mins",
    difficulty: "Medium",
    category: "plant-based",
    servings: "2 servings",
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "1 bunch slender young carrots, tops trimmed",
      "2 tbsp olive oil and 1 tsp cumin seeds",
      "4 tbsp pure tahini",
      "2 tbsp fresh lemon juice + ice water",
      "1 clove garlic, grated",
      "1 tbsp za'atar blend and fresh parsley"
    ],
    steps: [
      {
        title: "Toss carrots in oil and cumin",
        instruction: "Toss carrots with olive oil, salt, and whole cumin seeds."
      },
      {
        title: "Caramelize in oven",
        instruction: "Roast at 210°C (415°F) for 25 minutes until blistered and tender."
      },
      {
        title: "Whip lemon tahini",
        instruction: "Whisk tahini with lemon juice, garlic, and cold water until pale and fluffy."
      },
      {
        title: "Plate base",
        instruction: "Spoon whipped tahini over shallow serving platter."
      },
      {
        title: "Assemble and finish",
        instruction: "Arrange roasted carrots over cream and dust with za'atar."
      }
    ]
  },
  {
    id: "REC-14",
    slug: "warm-french-lentil-herb-salad",
    title: "Warm French Lentil & Herb Salad",
    description: "Tender Puy lentils tossed with Dijon vinaigrette, thinly shaved bulbs of fennel, capers, and Italian parsley.",
    longDescription: "Bistro-style warm salad featuring nutty green Puy lentils tossed in shallot-mustard vinaigrette with shaved fennel and chopped garden herbs.",
    cuisine: "French Bistro",
    prepTime: "25 Mins",
    difficulty: "Easy",
    category: "plant-based",
    servings: "2 servings",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "1 cup green Puy lentils",
      "1 small shallot, minced",
      "1 tbsp Dijon mustard",
      "2 tbsp sherry vinegar",
      "4 tbsp extra virgin olive oil",
      "1/2 fennel bulb, paper-thin shaved",
      "1 cup chopped fresh parsley and dill"
    ],
    steps: [
      {
        title: "Cook lentils",
        instruction: "Simmer Puy lentils in salted water with bay leaf for 20 minutes until tender with bite."
      },
      {
        title: "Make French vinaigrette",
        instruction: "Whisk shallot, Dijon mustard, vinegar, and olive oil with salt and pepper."
      },
      {
        title: "Dress while hot",
        instruction: "Drain lentils and toss immediately in vinaigrette to absorb flavor."
      },
      {
        title: "Fold fresh crunch",
        instruction: "Fold in shaved fennel, capers, and chopped herbs."
      },
      {
        title: "Serve warm",
        instruction: "Plate on shallow dish and serve warm or room temperature."
      }
    ]
  },
  {
    id: "REC-15",
    slug: "overnight-country-sourdough",
    title: "Overnight Country Sourdough",
    description: "High-hydration formula using 80% unbleached bread flour and 20% stone-ground rye with a 16-hour cold retard.",
    longDescription: "Traditional naturally leavened country sourdough boule featuring blistered mahogany crust, deep custardy crumb, and gentle lactic acidity.",
    cuisine: "Artisan",
    prepTime: "3 hrs",
    difficulty: "Advanced",
    category: "baking-grains",
    servings: "1 loaf (850g)",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "400g unbleached bread flour",
      "100g stone-ground whole rye flour",
      "380ml lukewarm water",
      "100g active sourdough levain",
      "10g fine sea salt"
    ],
    steps: [
      {
        title: "Autolyse",
        instruction: "Mix flours and water, resting 45 minutes before incorporating levain and salt."
      },
      {
        title: "Bulk fermentation",
        instruction: "Perform 4 sets of stretch and folds across 3 hours at 26°C."
      },
      {
        title: "Shape boule",
        instruction: "Pre-shape on wooden board, bench rest 20 minutes, and shape tightly into round banneton."
      },
      {
        title: "Cold retard",
        instruction: "Refrigerate dough in proofing basket for 16 hours overnight."
      },
      {
        title: "Dutch oven bake",
        instruction: "Score with razor, bake in preheated Dutch oven covered at 240°C for 20 minutes, then uncovered 20 minutes."
      }
    ]
  },
  {
    id: "REC-16",
    slug: "ligurian-olive-oil-focaccia",
    title: "Ligurian Olive Oil Focaccia",
    description: "Deep-dimpled dough brine-washed with unfiltered extra virgin olive oil, flaky Maldon sea salt, and rosemary.",
    longDescription: "Authentic Genovese-style soft focaccia bread with deep saline-dimpled wells holding golden puddles of unfiltered olive oil.",
    cuisine: "Italian",
    prepTime: "1 hr 15m",
    difficulty: "Medium",
    category: "baking-grains",
    servings: "8 portions",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "500g tipo 00 flour",
      "350ml water",
      "7g instant yeast",
      "10g sea salt",
      "60ml extra virgin olive oil",
      "Saline brine (warm water and salt)"
    ],
    steps: [
      {
        title: "Mix dough",
        instruction: "Combine flour, water, yeast, and oil into soft elastic dough."
      },
      {
        title: "First rise",
        instruction: "Let dough double in oiled container for 90 minutes."
      },
      {
        title: "Pan proofing",
        instruction: "Stretch gently into oiled baking sheet and let rise 45 minutes."
      },
      {
        title: "Saline wash and dimple",
        instruction: "Pour brine across surface and press fingertips down to pan floor."
      },
      {
        title: "Golden bake",
        instruction: "Bake at 220°C for 20 minutes until crisp underneath and golden on top."
      }
    ]
  },
  {
    id: "REC-17",
    slug: "toasted-farro-wild-mushrooms",
    title: "Toasted Farro with Wild Mushrooms",
    description: "Nutty ancient emmer wheat simmered with shallot aromatics, seared maitake mushrooms, and aged parmesan.",
    longDescription: "Hearty ancient grain risotto alternative featuring nutty toasted pearled farro, caramelized maitake and cremini mushrooms, and shaved Parmigiano-Reggiano.",
    cuisine: "Rustic Italian",
    prepTime: "40 Mins",
    difficulty: "Easy",
    category: "baking-grains",
    servings: "3 servings",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "1.5 cups pearled farro, rinsed",
      "300g mixed wild mushrooms (maitake, cremini), sliced",
      "2 shallots, finely minced",
      "3 cups hot vegetable broth",
      "3 tbsp unsalted butter",
      "1/2 cup grated Parmigiano-Reggiano",
      "Fresh thyme leaves"
    ],
    steps: [
      {
        title: "Toast farro",
        instruction: "Toast dry farro in wide saucepan for 3 minutes until nutty aroma emerges."
      },
      {
        title: "Sear mushrooms",
        instruction: "Sear sliced mushrooms in olive oil at high heat until browned and crisp."
      },
      {
        title: "Simmer farro in broth",
        instruction: "Add shallots, broth, and salt to farro; simmer 25 minutes until tender with bite."
      },
      {
        title: "Fold butter and cheese",
        instruction: "Vigorously beat in butter and parmesan into hot farro until creamy."
      },
      {
        title: "Top with mushrooms",
        instruction: "Spoon into warm bowls, top with seared mushrooms and fresh thyme."
      }
    ]
  },
  {
    id: "REC-18",
    slug: "scallion-pancakes",
    title: "Scallion Pancakes",
    description: "Laminated hot-water dough rolled with toasted sesame oil and fine spring greens, pan-fried to crisp perfection.",
    longDescription: "Crispy flaky Chinese and Taiwanese street food pancakes made from laminated hot water dough layered with sesame oil, salt, and freshly sliced spring scallions.",
    cuisine: "Taiwanese Tradition",
    subCuisine: "Taiwanese Tradition",
    prepTime: "45 MIN",
    difficulty: "Medium",
    category: "baking-grains",
    servings: "4 Discs",
    badge: "Technique Primer",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    ingredients: [
      "2 cups all-purpose flour",
      "3/4 cup boiling water + 2 tbsp cold water",
      "2 tbsp toasted sesame oil",
      "2 cups scallions, thinly sliced",
      "1 tsp salt",
      "Neutral oil for shallow frying"
    ],
    steps: [
      {
        title: "Make hot water dough",
        instruction: "Pour boiling water into flour, stir with chopsticks, add cold water, and knead into smooth dough."
      },
      {
        title: "Roll and oil",
        instruction: "Divide into 4 balls, roll each ball into thin circle, and brush with sesame oil and salt."
      },
      {
        title: "Scatter scallions and roll coil",
        instruction: "Scatter sliced scallions, roll into tight cigar, and coil inward like a snail."
      },
      {
        title: "Flatten pancake",
        instruction: "Flatten the snail coil with rolling pin into a 1/4-inch thick round disc."
      },
      {
        title: "Pan fry to crispness",
        instruction: "Fry in oil over medium heat for 3 minutes per side until golden, flaky, and crispy."
      }
    ]
  }
];

export const SUB_REGIONS: SubRegion[] = [
  {
    name: "Japanese Cuisine",
    recipesCount: 14,
    description: "Dashi bases, mirin, miso, and seasonal preservation techniques.",
    focus: "Kombu",
    focusLabel: "Primary base"
  },
  {
    name: "Chinese Regional Styles",
    recipesCount: 22,
    description: "Wok aromatics, Sichuan peppercorn, and delicate dim sum techniques.",
    focus: "Wok Hei",
    focusLabel: "Focus"
  },
  {
    name: "Korean Traditions",
    recipesCount: 11,
    description: "Gochujang ferments, toasted sesame oil, and balanced banchan side dishes.",
    focus: "Fermentation",
    focusLabel: "Focus"
  },
  {
    name: "Taiwanese Night Market",
    recipesCount: 9,
    description: "Braised broths, scallion crisps, and fragrant five-spice oil infusions.",
    focus: "Five-Spice",
    focusLabel: "Base"
  }
];
