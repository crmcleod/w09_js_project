use codebreaker;
db.dropDatabase();

db.gameStatus.insertMany([
  {
    gameOn: false,
    turn: "Red",
    cards: [],
    redScore: 9,
    blueScore: 8,
    round: 0
  }
])

db.prePlayCards.insertMany([
  {colour: 'Red'},
  {colour: 'Red'},
  {colour: 'Red'},
  {colour: 'Red'},
  {colour: 'Red'},
  {colour: 'Red'},
  {colour: 'Red'},
  {colour: 'Red'},
  {colour: 'Red'},
  {colour: 'Blue'},
  {colour: 'Blue'},
  {colour: 'Blue'},
  {colour: 'Blue'},
  {colour: 'Blue'},
  {colour: 'Blue'},
  {colour: 'Blue'},
  {colour: 'Blue'},
  {colour: 'Neutral'},
  {colour: 'Neutral'},
  {colour: 'Neutral'},
  {colour: 'Neutral'},
  {colour: 'Neutral'},
  {colour: 'Neutral'},
  {colour: 'Neutral'},
  {colour: 'Black'}
])

db.words.insertMany([
    {word:'Acne'},
    {word:'Acre'},
    {word:'Addendum'},
    {word:'Advertise'},
    {word:'Aisle'},
    {word:'Alligator'},
    // {word:'Alphabetize'},
    {word:'America'},
    {word:'Ankle'},
    {word:'Apathy'},
    {word:'Applause'},
    // {word:'Applesauce'},
    // {word:'Application'},
    // {word:'Archaeologist'},
    // {word:'Aristocrat'},
    {word:'Arm'},
    {word:'Armada'},
    {word:'Asleep'},
    {word:'Astronaut'},
    {word:'Athlete'},
    {word:'Atlantis'},
    {word:'Aunt'},
    {word:'Avocado'},
    // {word:'BabySitter'},
    {word:'Backbone'},
    {word:'Bag'},
    {word:'Baguette'},
    {word:'Bald'},
    {word:'Balloon'},
    {word:'Banana'},
    {word:'Banister'},
    {word:'Baseball'},
    {word:'Baseboard'},
    // {word:'Basketball'},
    {word:'Bat'},
    {word:'Battery'},
    {word:'Beach'},
    // {word:'Beanstalk'},
    {word:'Bedbug'},
    {word:'Beer'},
    // {word:'Beethoven'},
    {word:'Belt'},
    {word:'Bib'},
    {word:'Bicycle'},
    {word:'Big'},
    {word:'Bike'},
    {word:'Billboard'},
    {word:'Bird'},
    {word:'Birthday'},
    {word:'Bite'},
    {word:'Blacksmith'},
    {word:'Blanket'},
    {word:'Bleach'},
    {word:'Blimp'},
    {word:'Blossom'},
    {word:'Blueprint'},
    {word:'Blunt'},
    {word:'Blur'},
    {word:'Boa'},
    {word:'Boat'},
    {word:'Bob'},
    {word:'Bobsled'},
    {word:'Body'},
    {word:'Bomb'},
    {word:'Bonnet'},
    {word:'Book'},
    {word:'Booth'},
    {word:'Bowtie'},
    {word:'Box'},
    {word:'Boy'},
    // {word:'Brainstorm'},
    {word:'Brand'},
    {word:'Brave'},
    {word:'Bride'},
    {word:'Bridge'},
    {word:'Broccoli'},
    {word:'Broken'},
    {word:'Broom'},
    {word:'Bruise'},
    {word:'Brunette'},
    {word:'Bubble'},
    {word:'Buddy'},
    {word:'Buffalo'},
    {word:'Bulb'},
    {word:'Bunny'},
    {word:'Bus'},
    {word:'Buy'},
    {word:'Cabin'},
    {word:'Cafeteria'},
    {word:'Cake'},
    // {word:'Calculator'},
    {word:'Campsite'},
    {word:'Can'},
    {word:'Canada'},
    {word:'Candle'},
    {word:'Candy'},
    {word:'Cape'},
    // {word:'Capitalism'},
    {word:'Car'},
    {word:'Cardboard'},
    // {word:'Cartography'},
    {word:'Cat'},
    {word:'Cd'},
    {word:'Ceiling'},
    {word:'Cell'},
    {word:'Century'},
    {word:'Chair'},
    {word:'Chalk'},
    {word:'Champion'},
    {word:'Charger'},
    // {word:'Cheerleader'},
    {word:'Chef'},
    {word:'Chess'},
    {word:'Chew'},
    {word:'Chicken'},
    {word:'Chime'},
    {word:'China'},
    {word:'Chocolate'},
    {word:'Church'},
    {word:'Circus'},
    {word:'Clay'},
    {word:'Cliff'},
    {word:'Cloak'},
    {word:'Clockwork'},
    {word:'Clown'},
    {word:'Clue'},
    {word:'Coach'},
    {word:'Coal'},
    {word:'Coaster'},
    {word:'Cog'},
    {word:'Cold'},
    {word:'College'},
    {word:'Comfort'},
    {word:'Computer'},
    {word:'Cone'},
    // {word:'Constrictor'},
    {word:'Continuum'},
    // {word:'Conversation'},
    {word:'Cook'},
    {word:'Coop'},
    {word:'Cord'},
    {word:'Cot'},
    {word:'Cough'},
    {word:'Cow'},
    {word:'Cowboy'},
    {word:'Crayon'},
    {word:'Cream'},
    {word:'Crisp'},
    {word:'Criticize'},
    {word:'Crow'},
    {word:'Cruise'},
    {word:'Crumb'},
    {word:'Crust'},
    {word:'Cuff'},
    {word:'Curtain'},
    {word:'Cuticle'},
    {word:'Czar'},
    {word:'Dad'},
    {word:'Dart'},
    {word:'Dawn'},
    {word:'Day'},
    {word:'Deep'},
    {word:'Defect'},
    {word:'Dent'},
    {word:'Dentist'},
    {word:'Desk'},
    // {word:'Dictionary'},
    {word:'Dimple'},
    {word:'Dirty'},
    {word:'Dismantle'},
    {word:'Ditch'},
    {word:'Diver'},
    {word:'Doctor'},
    {word:'Dog'},
    {word:'Doghouse'},
    {word:'Doll'},
    {word:'Dominoes'},
    {word:'Door'},
    {word:'Dot'},
    {word:'Drain'},
    {word:'Draw'},
    {word:'Dream'},
    {word:'Dress'},
    {word:'Drink'},
    {word:'Drip'},
    {word:'Drums'},
    {word:'Dryer'},
    {word:'Duck'},
    {word:'Dump'},
    {word:'Dunk'},
    {word:'Dust'},
    {word:'Ear'},
    {word:'Eat'},
    {word:'Ebony'},
    {word:'Elbow'},
    // {word:'Electricity'},
    {word:'Elephant'},
    {word:'Elevator'},
    {word:'Elf'},
    {word:'Elm'},
    {word:'Engine'},
    {word:'England'},
    {word:'Ergonomic'},
    {word:'Escalator'},
    {word:'Eureka'},
    {word:'Europe'},
    {word:'Evolution'},
    {word:'Extension'},
    {word:'Eyebrow'},
    {word:'Fan'},
    {word:'Fancy'},
    {word:'Fast'},
    {word:'Feast'},
    {word:'Fence'},
    {word:'Fiddle'},
    {word:'Figment'},
    {word:'Finger'},
    {word:'Fire'},
    {word:'First'},
    {word:'Fishing'},
    {word:'Fix'},
    {word:'Fizz'},
    {word:'Flagpole'},
    {word:'Flannel'},
    // {word:'Flashlight'},
    {word:'Flock'},
    {word:'Flower'},
    {word:'Flu'},
    {word:'Flush'},
    {word:'Flutter'},
    {word:'Fog'},
    {word:'Foil'},
    {word:'Football'},
    {word:'Forehead'},
    {word:'Forever'},
    {word:'Fortnight'},
    {word:'France'},
    {word:'Freckle'},
    {word:'Freight'},
    {word:'Fringe'},
    {word:'Frog'},
    {word:'Frown'},
    {word:'Gallop'},
    {word:'Game'},
    {word:'Garbage'},
    {word:'Garden'},
    {word:'Gasoline'},
    {word:'Gem'},
    {word:'Ginger'},
    // {word:'Gingerbread'},
    {word:'Girl'},
    {word:'Glasses'},
    {word:'Goblin'},
    {word:'Gold'},
    {word:'Goodbye'},
    {word:'Grandpa'},
    {word:'Grape'},
    {word:'Grass'},
    {word:'Gratitude'},
    {word:'Gray'},
    {word:'Green'},
    {word:'Guitar'},
    {word:'Gum'},
    {word:'Gumball'},
    {word:'Hair'},
    {word:'Half'},
    {word:'Handle'},
    // {word:'Handwriting'},
    {word:'Hang'},
    {word:'Happy'},
    {word:'Hat'},
    {word:'Hatch'},
    {word:'Headache'},
    {word:'Heart'},
    {word:'Hedge'},
    // {word:'Helicopter'},
    {word:'Hem'},
    {word:'Hide'},
    {word:'Hill'},
    {word:'Hockey'},
    {word:'Homework'},
    {word:'Honk'},
    {word:'Hopscotch'},
    {word:'Horse'},
    {word:'Hose'},
    {word:'Hot'},
    {word:'House'},
    {word:'Houseboat'},
    {word:'Hug'},
    // {word:'Humidifier'},
    {word:'Hungry'},
    {word:'Hurdle'},
    {word:'Hurt'},
    {word:'Hut'},
    {word:'Ice'},
    {word:'Implode'},
    {word:'Inn'},
    // {word:'Inquisition'},
    {word:'Intern'},
    {word:'Internet'},
    // {word:'Invitation'},
    {word:'Ironic'},
    {word:'Ivory'},
    {word:'Ivy'},
    {word:'Jade'},
    {word:'Japan'},
    {word:'Jeans'},
    {word:'Jelly'},
    {word:'Jet'},
    {word:'Jig'},
    {word:'Jog'},
    {word:'Journal'},
    {word:'Jump'},
    {word:'Key'},
    {word:'Killer'},
    {word:'Kilogram'},
    {word:'King'},
    {word:'Kitchen'},
    {word:'Kite'},
    {word:'Knee'},
    {word:'Kneel'},
    {word:'Knife'},
    {word:'Knight'},
    {word:'Koala'},
    {word:'Lace'},
    {word:'Ladder'},
    {word:'Ladybug'},
    {word:'Lag'},
    {word:'Landfill'},
    {word:'Lap'},
    {word:'Laugh'},
    {word:'Laundry'},
    {word:'Law'},
    {word:'Lawn'},
    {word:'Lawnmower'},
    {word:'Leak'},
    {word:'Leg'},
    {word:'Letter'},
    {word:'Level'},
    {word:'Lifestyle'},
    {word:'Ligament'},
    {word:'Light'},
    // {word:'Lightsaber'},
    {word:'Lime'},
    {word:'Lion'},
    {word:'Lizard'},
    {word:'Log'},
    {word:'Loiterer'},
    {word:'Lollipop'},
    {word:'Loveseat'},
    {word:'Loyalty'},
    {word:'Lunch'},
    {word:'Lunchbox'},
    {word:'Lyrics'},
    {word:'Machine'},
    {word:'Macho'},
    {word:'Mailbox'},
    {word:'Mammoth'},
    {word:'Mark'},
    {word:'Mars'},
    {word:'Mascot'},
    {word:'Mast'},
    // {word:'Matchstick'},
    {word:'Mate'},
    {word:'Mattress'},
    {word:'Mess'},
    {word:'Mexico'},
    {word:'Midsummer'},
    {word:'Mine'},
    {word:'Mistake'},
    {word:'Modern'},
    {word:'Mold'},
    {word:'Mom'},
    {word:'Monday'},
    {word:'Money'},
    {word:'Monitor'},
    {word:'Monster'},
    {word:'Mooch'},
    {word:'Moon'},
    {word:'Mop'},
    {word:'Moth'},
    {word:'Motorbike'},
    {word:'Mountain'},
    {word:'Mouse'},
    {word:'Mower'},
    {word:'Mud'},
    {word:'Music'},
    {word:'Mute'},
    {word:'Nature'},
    {word:'Negotiate'},
    {word:'Neighbor'},
    {word:'Nest'},
    {word:'Neutron'},
    {word:'Niece'},
    {word:'Night'},
    {word:'Nightmare'},
    {word:'Nose'},
    {word:'Oar'},
    // {word:'Observatory'},
    {word:'Office'},
    {word:'Oil'},
    {word:'Old'},
    {word:'Olympian'},
    {word:'Opaque'},
    {word:'Opener'},
    {word:'Orbit'},
    {word:'Organ'},
    {word:'Organize'},
    {word:'Outer'},
    {word:'Outside'},
    {word:'Ovation'},
    {word:'Overture'},
    {word:'Pail'},
    {word:'Paint'},
    {word:'Pajamas'},
    {word:'Palace'},
    {word:'Pants'},
    {word:'Paper'},
    {word:'Paper'},
    {word:'Park'},
    {word:'Parody'},
    {word:'Party'},
    {word:'Password'},
    {word:'Pastry'},
    {word:'Pawn'},
    {word:'Pear'},
    {word:'Pen'},
    {word:'Pencil'},
    {word:'Penny'},
    {word:'Pepper'},
    {word:'Personal'},
    // {word:'Philosopher'},
    {word:'Phone'},
    // {word:'Photograph'},
    {word:'Piano'},
    {word:'Picnic'},
    {word:'Pigpen'},
    {word:'Pillow'},
    {word:'Pilot'},
    {word:'Pinch'},
    {word:'Ping'},
    {word:'Pinwheel'},
    {word:'Pirate'},
    {word:'Plaid'},
    {word:'Plan'},
    {word:'Plank'},
    {word:'Plate'},
    {word:'Platypus'},
    // {word:'Playground'},
    {word:'Plow'},
    {word:'Plumber'},
    {word:'Pocket'},
    {word:'Poem'},
    {word:'Point'},
    {word:'Pole'},
    {word:'Pomp'},
    {word:'Pong'},
    {word:'Pool'},
    {word:'Popsicle'},
    // {word:'Population'},
    {word:'Portfolio'},
    {word:'Positive'},
    {word:'Post'},
    {word:'Princess'},
    // {word:'Procrastinate'},
    // {word:'Protestant'},
    // {word:'Psychologist'},
    {word:'Publisher'},
    {word:'Punk'},
    {word:'Puppet'},
    {word:'Puppy'},
    {word:'Push'},
    {word:'Puzzle'},
    // {word:'Quarantine'},
    {word:'Queen'},
    {word:'Quicksand'},
    {word:'Quiet'},
    {word:'Race'},
    {word:'Radio'},
    {word:'Raft'},
    {word:'Rag'},
    {word:'Rainbow'},
    {word:'Rainwater'},
    {word:'Random'},
    {word:'Ray'},
    {word:'Recycle'},
    {word:'Red'},
    {word:'Regret'},
    // {word:'Reimbursement'},
    {word:'Retaliate'},
    {word:'Rib'},
    {word:'Riddle'},
    {word:'Rim'},
    {word:'Rink'},
    {word:'Roller'},
    {word:'Room'},
    {word:'Rose'},
    {word:'Round'},
    // {word:'Roundabout'},
    {word:'Rung'},
    {word:'Runt'},
    {word:'Rut'},
    {word:'Sad'},
    {word:'Safe'},
    {word:'Salmon'},
    {word:'Salt'},
    {word:'Sandbox'},
    // {word:'Sandcastle'},
    {word:'Sandwich'},
    {word:'Sash'},
    {word:'Satellite'},
    {word:'Scar'},
    {word:'Scared'},
    {word:'School'},
    {word:'Scoundrel'},
    {word:'Scramble'},
    {word:'Scuff'},
    {word:'Seashell'},
    {word:'Season'},
    {word:'Sentence'},
    {word:'Sequins'},
    {word:'Set'},
    {word:'Shaft'},
    {word:'Shallow'},
    {word:'Shampoo'},
    {word:'Shark'},
    {word:'Sheep'},
    {word:'Sheets'},
    {word:'Sheriff'},
    {word:'Shipwreck'},
    {word:'Shirt'},
    {word:'Shoelace'},
    {word:'Short'},
    {word:'Shower'},
    {word:'Shrink'},
    {word:'Sick'},
    {word:'Siesta'},
    // {word:'Silhouette'},
    {word:'Singer'},
    {word:'Sip'},
    {word:'Skate'},
    {word:'Skating'},
    {word:'Ski'},
    {word:'Slam'},
    {word:'Sleep'},
    {word:'Sling'},
    {word:'Slow'},
    {word:'Slump'},
    {word:'Smith'},
    {word:'Sneeze'},
    {word:'Snow'},
    {word:'Snuggle'},
    {word:'Song'},
    {word:'Space'},
    {word:'Spare'},
    {word:'Speakers'},
    {word:'Spider'},
    {word:'Spit'},
    {word:'Sponge'},
    {word:'Spool'},
    {word:'Spoon'},
    {word:'Spring'},
    {word:'Sprinkler'},
    {word:'Spy'},
    {word:'Square'},
    {word:'Squint'},
    {word:'Stairs'},
    {word:'Standing'},
    {word:'Star'},
    {word:'State'},
    {word:'Stick'},
    // {word:'Stockholder'},
    {word:'Stoplight'},
    {word:'Stout'},
    {word:'Stove'},
    {word:'Stowaway'},
    {word:'Straw'},
    {word:'Stream'},
    // {word:'Streamline'},
    {word:'Stripe'},
    {word:'Student'},
    {word:'Sun'},
    {word:'Sunburn'},
    {word:'Sushi'},
    {word:'Swamp'},
    {word:'Swarm'},
    {word:'Sweater'},
    {word:'Swimming'},
    {word:'Swing'},
    {word:'Talk'},
    {word:'Taxi'},
    {word:'Teacher'},
    {word:'Teapot'},
    {word:'Teenager'},
    {word:'Telephone'},
    {word:'Ten'},
    {word:'Tennis'},
    {word:'Thief'},
    {word:'Think'},
    {word:'Throne'},
    {word:'Through'},
    {word:'Thunder'},
    {word:'Tide'},
    {word:'Tiger'},
    {word:'Time'},
    {word:'Tinting'},
    {word:'Tiptoe'},
    {word:'Tiptop'},
    {word:'Tired'},
    {word:'Tissue'},
    {word:'Toast'},
    {word:'Toilet'},
    {word:'Tool'},
    // {word:'Toothbrush'},
    {word:'Tornado'},
    // {word:'Tournament'},
    {word:'Tractor'},
    {word:'Train'},
    {word:'Trash'},
    {word:'Treasure'},
    {word:'Tree'},
    {word:'Triangle'},
    {word:'Trip'},
    {word:'Truck'},
    {word:'Tub'},
    {word:'Tuba'},
    {word:'Tutor'},
    {word:'TV'},
    {word:'Twang'},
    {word:'Twig'},
    // {word:'Twitterpated'},
    {word:'Type'},
    // {word:'Unemployed'},
    {word:'Upgrade'},
    {word:'Vest'},
    {word:'Vision'},
    {word:'Wag'},
    {word:'Water'},
    // {word:'Watermelon'},
    {word:'Wax'},
    {word:'Wedding'},
    {word:'Weed'},
    {word:'Welder'},
    {word:'Whatever'},
    // {word:'Wheelchair'},
    {word:'Whiplash'},
    {word:'Whisk'},
    {word:'Whistle'},
    {word:'White'},
    {word:'Wig'},
    {word:'Will'},
    {word:'Windmill'},
    {word:'Winter'},
    {word:'Wish'},
    {word:'Wolf'},
    {word:'Wool'},
    {word:'World'},
    {word:'Worm'},
    // {word:'Wristwatch'},
    // {word:'Yardstick'},
    {word:'Zamboni'},
    {word:'Zen'},
    {word:'Zero'},
    {word:'Zipper'},
    {word:'Zone'},
    {word:'Zoo'}
]);  