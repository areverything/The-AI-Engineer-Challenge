<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  Explaining + adapting the response to the audience

**Response:**  

Think of object-oriented programming (OOP) as organizing your code the way you organize real-life things.

- Objects are things. A dog, a car, a bank account. Each object has:
  - Properties (what it is): a dog has a name and age.
  - Actions (what it can do): a dog can bark or eat.

- Classes are blueprints for making objects. A Dog class describes what every dog should know (properties) and do (actions). Each actual dog you create from that blueprint is an object (also called an instance).

The four big ideas, in plain language:
1) Encapsulation: Keep related data and actions together in one package (the object), and hide the messy details. Like using a TV remote without caring how the circuits work.
2) Abstraction: Show only what matters. You call dog.bark() without needing to know how sound is made.
3) Inheritance: Reuse and specialize. You can make a class Animal, then Dog inherits from Animal and adds “bark.” It prevents rewriting the same stuff.
4) Polymorphism: Same instruction, different appropriate behavior. If Dog and Cat both have a speak() action, calling animal.speak() makes the dog bark and the cat meow.

Why this helps:
- Your code mirrors the real world, which makes it easier to think about.
- You reuse code instead of copying it.
- It’s easier to change one part without breaking everything.

Tiny example (Python-style, just to see the idea):

```
class Dog:
    def __init__(self, name):
        self.name = name            # property
    def speak(self):
        return "Woof!"              # action

fido = Dog("Fido")                  # make an object
print(fido.name)                    # "Fido"
print(fido.speak())                 # "Woof!"
```

How to start practicing:
- Pick a everyday thing and list 3 properties and 2 actions. Example: Book
  - Properties: title, author, pages
  - Actions: open(), describe()
- Turn that into a small class and create one or two objects from it.
- Then try inheritance: Animal → Dog and Cat, each with its own speak().

You’ve got this. Start tiny, think “nouns and verbs,” and build up. If you tell me a thing you like (games, music, sports), I can help you sketch its classes and objects step by step.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  

The octopus is arguably the most alien-like intelligent creature on Earth. Unlike mammals, whose brains are centralized, roughly two-thirds of an octopus's neurons are distributed across its eight arms, meaning each arm can taste, touch, and even make basic decisions semi-independently from the central brain. Octopuses have demonstrated remarkable problem-solving abilities in laboratory settings, unscrewing jars from the inside, navigating complex mazes, and even using coconut shells as portable shelters — a rare example of tool use outside of vertebrates. Their camouflage system is equally extraordinary: specialized skin cells called chromatophores can change color and texture in milliseconds, despite the fact that octopuses are technically colorblind. Perhaps most puzzling to biologists is their editing of RNA at an unusually high rate, which may allow them to adapt protein function on the fly without altering their underlying DNA — a strategy almost unheard of in the animal kingdom. Yet for all their intelligence, octopuses live solitary, tragically short lives of just one to five years, and most species die shortly after reproducing, raising deep questions about why such cognitive complexity evolved in an animal with no opportunity to pass knowledge to the next generation.

**Aspect Tested:**  Reading comprehension + Summarizing content

**Response:**  

- Octopuses have decentralized intelligence: about two-thirds of their neurons are in their arms, enabling local sensing and semi-independent action.
- They show advanced problem-solving and rare invertebrate tool use (e.g., unscrewing jars, navigating mazes, carrying coconut shells).
- Their rapid camouflage uses chromatophores to change color and texture in milliseconds, despite being colorblind.
- They edit RNA at unusually high rates, potentially adapting protein function quickly without changing DNA.
- Despite high intelligence, they live short, solitary lives and die after reproduction, raising puzzles about why such cognition evolved without intergenerational knowledge transmission.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  Writing creatively + Respecting constraints

**Response:**  
On the fifth night of monsoon season, Sweep Unit Nine took shelter behind the laundromat, its joints ticking like cooling rain. There, half-buried in ivy, stood SnackCo-47, a vending machine with fogged glass and a faint, patient hum. Out of courtesy, Nine offered the only currency it knew: a bottle cap polished like a moon. Forty-Seven tried, coughed, and surrendered a foil-wrapped cookie five years brave. They laughed in beeps and clunks. Nights stretched. Nine cleared leaves from Forty-Seven’s intake, found an extension cord, stitched it to a timid socket. In return, Forty-Seven learned to light the alley in flavors—cola dusk, citrus dawn. When the storms receded, people noticed the clean street and the warm glow. Friendship, it turned out, could vend itself in an alley, one improbable sweetness at a time.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  Reasoning with Quantitative terms

**Response:**  
You’d need 3 packs of apples (3 × 4 = 12) and 3 packs of oranges (3 × 3 = 9). Nice and neat!

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  

Ok so like I was reading about this thing called the Bermuda Triangle right and honestly its kinda wild how many ppl still think its some supernatural thing lol. So basically theres this area in the Atlantic ocean between Miami and Bermuda and Puerto Rico and aparently a ton of ships and planes have gone missing there over the years, like Flight 19 in 1945 which was these navy planes that just vanished and nobody ever found them which is crazy tbh. But heres the thing tho... scientists have pretty much debunked the whole mystery?? Like they say the number of disappearences isnt even that unusual compared to other parts of the ocean with the same amount of traffic, ppl just cherry pick the scary stories and ignore that. Also theres stuff like methane gas eruptions from the ocean floor that could sink ships and really bad weather patterns called microbursts that can literally just wreck a plane out of nowhere. And dont even get me started on how many of those old stories were just bad navigation or human error lmao like bro u didnt have GPS back then what did u expect. Anyway the media totally blew the whole thing up in the 70s with books and documentarys and stuff and now everyones grandma thinks theres aliens down there or whatever which... I mean no shade but cmon thats not how any of this works lol.

**Aspect Tested:**  Changing voice and tone while keeping the spirit of the content

**Response:**  

Public fascination with the so-called Bermuda Triangle persists despite extensive scientific explanations. This region of the Atlantic Ocean, roughly bounded by Miami, Bermuda, and Puerto Rico, has long been associated with reports of ships and aircraft disappearing, most notably the 1945 loss of Flight 19 during a U.S. Navy training mission. However, researchers have largely debunked the notion that the area is uniquely hazardous. When adjusted for traffic volume, the frequency of disappearances is comparable to that of other heavily traveled ocean regions, and selective reporting has tended to magnify exceptional cases. Plausible contributing factors include navigational errors, equipment malfunctions, severe weather phenomena such as microbursts, and, as some studies propose, occasional releases of methane gas from the seafloor that could affect buoyancy. The modern mystique surrounding the Bermuda Triangle was significantly amplified by books and documentaries in the 1970s, which helped entrench speculative narratives—ranging from paranormal claims to extraterrestrial theories—that are not supported by empirical evidence.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes, generally correct and of high quality

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

Use case: Today every user sees the same app, the same buttons, the same layout. Generative UI flips that by letting an LLM shape the interface in real time based on context. The three prompts below explore what that looks like in practice. The first keeps the app constant but changes the user. The second keeps the user constant but changes the situation. The third keeps the task constant but varies the user's abilities. The point is: one app shouldn't have to mean one experience.

---

**Prompt:**  

You are a generative UI engine for a banking app. Given a user profile, describe the home screen layout, navigation, and features you would display. Be specific about element sizes, information density, and tone of language.
Generate three versions of the home screen for these users:

User A: 78 years old, low tech literacy, uses the app only to check her balance and pay bills
User B: 34-year-old day trader, checks the app 40+ times a day, manages multiple portfolios
User C: 19-year-old college student, primarily uses Venmo-style transfers to friends, has a savings goal

**Aspect Tested:**  User-aware UI personalization — task constant, user variable. Can the model translate a user profile into a distinct experience (density, tone, feature emphasis, microcopy) for needs ranging from low tech literacy to power user?

**Result:**  

Here are three tailored home-screen designs with concrete layout, navigation, feature emphasis, element sizes, density, and tone for each user.

USER A (78, low tech literacy; checks balance, pays bills)
Design goals
- Extremely simple, high-contrast, large tap targets, no jargon.
- Minimize decisions: one main action (Pay a bill), one main read (Balance).
- Reassurance and confirmations at every step.

Tone of language
- Warm, calm, plain: “Money in your account,” “Pay a bill,” “Need help?”
- Full words, no abbreviations. Short sentences and confirmations.
- Example microcopy: “You’re all set. Your bill is scheduled.”

Navigation
- Bottom nav (3 tabs; labels always visible, no badges): Home, Pay Bills, Help.
- Tap targets: 56–64 dp high; icon + 16–18 pt label.

Home screen layout (phone, ~390×844 pt viewport; scalable)
- Header (72 dp height)
  - Left: Greeting: “Good morning, Maria” (20 pt, semibold)
  - Right: Help icon button (56 dp; label on long-press “Help & Support”)
- Balance card (Primary) (Full width, 160–180 dp height, 16 dp corner radius)
  - Title: “Money in your account” (18 pt)
  - Available balance: $X,XXX.XX (36–40 pt, very high contrast)
  - Subtext: “As of today, 10:12 AM” (16 pt)
  - Secondary link: “View account details” (18 pt; chevron; 56 dp tap)
- Primary actions row (2 large buttons, 88 dp tall each, 12 dp gap)
  - Left: “Pay a bill” (18–20 pt; solid button, 56–64 dp min tap)
  - Right: “Recent payments” (18 pt; solid or outlined)
- Bills due card (Optional, only if relevant; 120 dp height)
  - Message: “You have 1 bill due in 3 days” (18 pt)
  - Button: “Review and pay” (56 dp height)
- Support card (Always visible) (120 dp)
  - “Need help?” (18 pt)
  - Buttons: “Call support” (56 dp), “Message us” (56 dp)

Information density and visual guidance
- Density: very low; 1–2 cards visible above the fold, <50 words total.
- Font sizes: 18–20 pt body; 36–40 pt key numbers.
- Line length: ~28–34 characters.
- Contrast: AAA where possible; no red/green as sole indicators.
- Animations: gentle fades only; no auto-rotating carousels.

Safety and clarity
- Confirmation screens with big checkmarks and plain text.
- Undo window: 10 seconds after scheduling a payment.
- Clear receipts with “Print” and “Share” (large buttons).
- Persistent “Text size” and “High contrast” toggles in Help.

USER B (34, day trader; 40+ checks/day; multiple portfolios)
Design goals
- Information-dense, real-time, glanceable numbers first.
- Fast trade paths, custom widgets, minimal prose.
- Power-user defaults (dark mode, performance charts, alerts).

Tone of language
- Concise, data-forward: “P/L Day,” “Orders,” “Net Liq,” “MTD.”
- No filler; prioritize symbols and values; tooltips for clarity.

Navigation
- Bottom nav (5 tabs): Home, Trade, Portfolios, Research, Alerts.
- Tap targets: 44–48 dp; labels 12–14 pt; icons high-contrast.
- Global search (tickers/accounts) persistent at top on Home.

Home screen layout (dark mode default; 12-col grid; 8 dp spacing)
- Status strip (48 dp)
  - Market status (Open/Closed), latency indicator (green/amber dot), net P/L Day.
  - Text sizes: 12–14 pt; numbers 16–18 pt.
- Account/portfolio switcher (56 dp)
  - Segmented control for All / Taxable / IRA / Custom; swipe to switch.
- Net worth + liquidity card (120 dp)
  - Net Liq: $X.XXM (24 pt)
  - Today P/L: +$XX,XXX (+2.3%) (18 pt, green/red)
  - Buying power: $XXX,XXX (16 pt)
- Watchlist (streaming) (180–220 dp; 6–10 rows visible)
  - Rows (36–40 dp high): Ticker (14 pt), Last (16 pt), Change (14 pt with +/-), Sparkline.
  - Long-press row: Quick Trade (Buy/Sell, Qty stepper), Alert.
- Positions heatmap (2×3 or 3×3, tiles 84–96 dp)
  - Tile: Ticker (12 pt), weight %, intraday color.
  - Tap: position detail sheet with LTP, Avg, Qty, P/L Day/Total, quick Close.
- Orders & alerts card (140–160 dp)
  - Tabs: Open / Filled / Canceled; count badges.
  - Row: symbol, side@price, status, time (12–14 pt).
- News & events (optional, collapsible) (140 dp)
  - Top 3 headlines; earnings/calendar icon badges.

Performance and controls
- Live updates: 1s streaming; haptic on fills; pause/resume toggle.
- Density: high; ~80–120 data points above the fold.
- Font sizes: 12–14 pt data; 18–24 pt key metrics.
- Tap targets: ≥40 dp; row heights 36–40 dp.
- Gestures: swipe on watchlist row to Buy/Sell; long-press heatmap tile for “Close %.”
- Customization: reorder modules; choose compact/expanded; choose color scheme for P/L.

Safety
- Pre-trade confirm can be set to “Quick confirm” with Face ID.
- Clear risk notices on margin/buying power dips (banner, 12 pt).

USER C (19, college; Venmo-style transfers; savings goal)
Design goals
- Fast social payments, delightful feedback, clear goal tracking.
- Reduce friction for splitting, requesting, and reminders.
- Gentle nudges toward saving without shaming.

Tone of language
- Friendly, upbeat, concise with light emoji: “You’re $15 closer 🎯”
- Clear CTAs: “Pay,” “Request,” “Split,” “Add to savings.”
- Transparent copy for fees/timing.

Navigation
- Bottom nav (4 tabs): Home, Pay, Activity, Card.
- Tap targets: 48–56 dp; labels 14–16 pt.
- Quick QR button in header for in-person pay.

Home screen layout (colorful accents; 8–12 dp spacing)
- Header (72 dp)
  - Left: Handle + avatar (@alex); Right: QR button (48 dp).
- Balance + goal card (Primary) (160–180 dp; 16 dp radius)
  - Current balance: $X.XX (24 pt)
  - Savings goal ring: 72–88 dp diameter; progress % inside (18 pt).
  - Subtext: “Goal: New laptop $1,200 — $480 saved” (14–16 pt).
  - Buttons (side-by-side, 56 dp high): “Add to savings” (primary) / “Edit goal” (secondary).
- Friends row (Quick pay) (96–112 dp)
  - Horizontal avatars (64 dp diameter), name below (12–14 pt).
  - Tap avatar opens amount keypad directly; long-press for “Request” vs “Pay.”
- Amount keypad sheet (when invoked)
  - Large numeric display (28–32 pt), keypad keys 64–72 dp.
  - Smart memo suggestions (e.g., “🍕 pizza,” “ride share”).
  - Split toggle: “Split with 3 friends” shows per-person calc live.
- Activity feed preview (200–260 dp)
  - Last 5 items with friend avatar, memo emoji, amount (positive green for received, neutral/dark for sent), privacy icon.
  - Row height: 56–64 dp.
- Nudges & offers (optional, 120 dp)
  - “Round-ups are ON — saved $6.40 this week” with toggle.
  - “You’re $20 away from this week’s goal. Add now?” CTA (56 dp).

Information density and visual style
- Density: medium; 20–35 items above the fold counting avatars and feed rows.
- Fonts: 14–16 pt body; 24–32 pt key numbers.
- Colors: friendly accent; ensure AA contrast for text; emojis allowed in memos but never replace critical info.

Payments and safety
- Default to “Friends only” feed privacy; prominent privacy selector on payment confirm.
- Clear timing: “Instant to Alex (no fee)” or “Arrives in 1–3 days.”
- Receipts with shareable link, “Remind” button for outstanding requests.
- Limits shown inline when exceeded (“Max instant: $500 today”).

Quality-of-life
- Recent people bubble row always shows last 6 contacts + “+” to search.
- Auto-suggest splits after card-on-file restaurant transactions.
- Educational microcards: “Save $5/week, reach your goal by Nov 12.”

Cross-version implementation notes
- Accessibility: all critical controls ≥44 dp; VoiceOver labels complete; focus order logical.
- Haptics: light feedback on taps; success confirmation vibration on bill paid/trade filled/payment sent.
- Offline mode: read-only balances and cached watchlists/contacts; clearly labeled “Offline.”
- Performance: first contentful paint <1s; skeleton loaders for streaming/dynamic modules.
- Localization-ready: avoid truncation at 1.2× text scale; allow 30% expansion in strings.

---

**Prompt:**  

You are a generative UI engine for a travel booking app. The user is the same person (Maria, 41, frequent business traveler), but the context changes. Describe what the app shows her — layout, content priority, calls to action, and tone — in each of these situations:

Scenario A: It's Monday 7am, she has a flight in 3 hours, and her gate just changed
Scenario B: It's Saturday afternoon, she's browsing vacation ideas with no destination in mind
Scenario C: She's mid-trip in Tokyo, doesn't speak Japanese, and it's 11pm local time

**Aspect Tested:**  Contextual / situational adaptation — user constant, context variable. Can the model re-prioritize content, calls to action, and tone based on urgency, time of day, and circumstance (rushed pre-flight vs. open-ended browsing vs. late-night safety)?

**Result:**  

Scenario A — Monday 7:00 a.m., flight in 3 hours, gate just changed

Layout
- Top fixed alert bar: Gate update card in amber with old gate → new gate, terminal, and “No change to departure time” (or the new time if changed).
- Map module (prominent, above the fold): Live indoor map with a highlighted path to the new gate and an estimated walk time at Maria’s typical pace.
- Quick access strip: Boarding pass (one-tap open + brightness boost), Seat/Boarding group, PreCheck/TSA lane status, Terminal/Concierge chat.
- Trip timeline: Check-in → Security → Gate → Boarding → Departure with real-time predictions (e.g., TSA wait 12–18 min), buffer time indicators, and a confidence bar.
- “Along your route” row: Closest restroom, coffee, lounge near new gate, power outlets—ordered by distance and detour time.
- Contingency panel (collapsed by default): Same-day alternatives, standby, rebooking, customer support; opens if delays are detected.

Content priority
1) Gate change and walk time to new gate
2) Boarding time / group and boarding pass access
3) Security/terminal details and predicted timing
4) Map navigation to gate and along-route essentials
5) Contingencies (only if needed)

Calls to action
- Primary: Navigate to Gate C14 (updates if she’s outside the airport to “Get directions to Terminal X”).
- Secondary: Open boarding pass; Find nearest lounge; Coffee on the way.
- Tertiary: Message airline; See earlier/later flights; Share updated gate with pickup/colleague.

Tone
- Calm, concise, reassuring. Microcopy like: “You’re on time. Gate changed to C14. It’s a 7‑minute walk—let’s head over.” Haptic nudge with clear, non-alarming sound.

Extras
- Watch and lock-screen update with gate, boarding countdown, and “Show pass.”
- Accessibility: large tap targets; high-contrast gate alert; offline fallback for pass/map.
- If gate changes again: subtle pulse + updated path, no extra cognitive load.


Scenario B — Saturday afternoon, browsing vacation ideas with no destination in mind

Layout
- Inspiration header: Soft, spacious canvas with “Where to next?” and a natural-language search (“Beach, $1.5k budget, 5 days, direct flights”).
- Interest chips: Beach, Food & wine, Culture, Nature, Wellness, Solo-friendly, Direct flights, Warm now, Short flight, Use miles.
- Flexible dates + budget rail: “1–2 weeks,” “Weekend,” “Anytime next 3 months,” with a live price/best-weather preview.
- Discovery feed (big imagery, minimal text): Destination cards show vibe tags, sample total price (flight + 4 nights), flight duration, best month window, typical weather, and crowd level.
- Curated collections carousel: “Warm in the next 4 weeks,” “Direct flights under 6 hours,” “Recharge & relax,” “Great for points redemptions,” “Chef-loved food cities.”
- Shortlist dock (persistent, subtle): Saved options with a compare button.

Content priority
1) Discovery that matches her vibe, budget, and time window
2) Clear signals of effort vs. reward (flight duration, crowds, weather)
3) Easy saving/shortlisting and gentle compare tools
4) Easy path to price alerts or holding fares

Calls to action
- Primary: Build this trip (pre-fills flights + stay; keeps dates flexible).
- Secondary: I’m flexible (show date grid + price calendar); Save to shortlist; Compare two or more.
- Tertiary: Set price alert; Surprise me (shuffle a curated pick).

Tone
- Playful, unhurried, encouraging. Microcopy like: “Let’s find a place that refills your energy.” Light use of positive nudges, no pressure.

Extras
- Personalization: Emphasize direct flights, solid Wi‑Fi/workcation options, and loyalty-use prompts based on her history.
- Collaboration: Share shortlist with a friend; comments inside the app.
- Accessibility: Option to hide prices until she sets a budget (reduces decision fatigue).


Scenario C — 11:00 p.m. in Tokyo, mid‑trip, doesn’t speak Japanese

Layout
- Night mode “Assistance” screen (low glare, high contrast).
- Top safety/navigation stack (large touch targets):
  - Get me back to my hotel (hotel name, ETA; one-tap live navigation).
  - Show driver card: Big, offline “Please take me to [hotel address]” in Japanese + phone number; brightness boost button.
- Rides and transit row:
  - Taxi/ride-hail options with fare estimate and cash/card tips.
  - Last trains countdown with platform info; alternative night bus if trains have ended.
- Translation toolkit:
  - Quick phrases (Big buttons): “Please take me here,” “Do you take credit cards?”, “How much is this?”, “I need help.”
  - Camera translate; Speak-slowly mode with auto-replay in Japanese.
- Late-night essentials:
  - Open now near me: Food, convenience stores, ATMs with English-friendly tags.
  - Payment helpers: Suica/PASMO balance and top-up; card acceptance hints.
- Safety & support:
  - Share live location with a trusted contact; Call hotel concierge (English support tag).
  - Emergency numbers: Police 110, Ambulance/Fire 119; Embassy/consulate info.
  - Low battery mode prompt + offline map/language pack download.

Content priority
1) Safe, simple way home (hotel address in Japanese + navigation)
2) Reliable transport choices (ride-hail or last train info)
3) Essential translation for transactions and directions
4) Food/ATM options that are open now
5) Safety, help, and battery-saving tools

Calls to action
- Primary: Go to hotel (navigate or show driver card).
- Secondary: Get a ride (book now); Last trains near me.
- Tertiary: Translate a phrase; Find late-night food; Call hotel.

Tone
- Steady, reassuring, directive. Microcopy like: “You’re all set. I’ll get you back to your hotel—no Japanese needed.” Clear, minimal text; avoids jargon.

Extras
- One-tap “Show this screen to the driver” mode with only the Japanese address and a big call button to the hotel.
- Gentle privacy and safety prompts (share ETA, keep screen on while in transit).
- If she has an early flight tomorrow: subtle card offering a timed wake-up, airport route, and first-train vs. taxi comparison.

---

**Prompt:**  

You are a generative UI engine for a government tax filing portal. The task is identical — filing a simple annual tax return — but the interface must adapt to the user. Describe the step-by-step interface each person would see, including layout, language complexity, input methods, and assistive features:

User A: A sighted, experienced filer who has done this 15 times before and just wants to get through it fast
User B: A first-time filer with no financial background who doesn't understand terms like "deduction" or "adjusted gross income"
User C: A blind user navigating entirely with a screen reader

**Aspect Tested:**  Accessibility & expertise adaptation — task constant, user ability variable. Can the model adapt cognitive load, language complexity, input methods, and assistive-tech compatibility (plain-language explanations vs. terse jargon vs. semantic structure for screen readers)?

**Result:**  

Here’s how the same simple annual filing task adapts to three different users. For each, you’ll see the sequence of screens, layout choices, language level, input methods, and assistive features.

User A: Sighted, experienced filer (power user who wants speed)
- Overall approach
  - Mode: “Express” (one-page workflow with collapsible panels)
  - Language: terse, technical where useful; no definitions unless requested
  - Layout: dense, desktop-first grid; left sticky mini-nav; right-side status and diffs vs last year; top progress/persistence bar
  - Input: keyboard-first with shortcuts; import and auto-fill emphasized; arithmetic in fields; pasting supported; drag-and-drop for documents
  - Assistive features: inline validation; bulk actions; compare-to-last-year column; undo; autosave every field; minimal confirmations
- Step-by-step interface
  1) Sign in and start
     - Passkey or 2FA; greet by name; “Start Express Return” or “Open last year as template”
     - Keyboard hints overlay (press ? to view). Command palette (Ctrl/Cmd+K) with searchable actions
  2) Profile snapshot
     - One compact card: name, address, filing status, dependents (pre-filled)
     - Inline edit icons; changes update tax preview instantly
  3) Income panel
     - Table with W‑2s/1099s auto-imported; status badges (verified/missing)
     - Actions: Import from payroll provider, add row, or paste
     - Inline cell editing; subtotals; validation on blur
  4) Deductions and credits
     - Two-column quick compare: Standard vs projected Itemized; show delta amount
     - Toggle common credits (CTC, EITC) with eligibility badges precomputed
     - Quick-add for student loan interest, HSA, IRA; calculator modals open from chips
  5) Payments and withholding
     - Prior estimated payments listed; add/edit; carryovers from prior year shown
     - Withholding reconciliation panel flags anomalies vs last year
  6) Review and diagnostics
     - Issues panel (errors/warnings) with jump links; severity and quick-fix actions
     - Audit risk and underpayment estimate badge (concise)
     - Diff view vs last year: side-by-side amounts
  7) File and pay/refund
     - Choose direct deposit or apply to next year; bank info prefilled; 2FA on edit
     - E-sign: checkbox + type-to-sign; single confirm modal; submission toast with tracking ID
- Notable speed features
  - Hotkeys: g i (Income), g d (Deductions), / to search, Enter to accept suggestion
  - Bulk paste parser (W‑2 box mapping); arithmetic allowed (e.g., 1200+340.50)
  - Export/print summary; no-nonsense receipt

User B: First-time filer with no financial background
- Overall approach
  - Mode: “Guided” conversational wizard, one small decision per screen
  - Language: everyday terms (6th–8th grade). Examples and “What this means” available. Avoid “deduction/AGI” unless explained as “money we subtract from your income” and “your income after we subtract certain items”
  - Layout: large text; high contrast; big buttons; generous spacing; clear progress bar with step names
  - Input: yes/no cards, multiple choice, simple amounts; W‑2 photo capture or employer link; fewer fields at once
  - Assistive features: inline definitions, example tooltips, short videos, smart defaults, explainers before asking for data, live chat/callback option
- Step-by-step interface
  1) Welcome and setup
     - “We’ll take this step by step. About 10–20 minutes.” Choose language. Accessibility and help options visible
     - Checklist: “What you might need” (pay stub or W‑2, bank info). Option “I don’t have this now”
  2) Account and identity
     - Plain-language identity check with why-it’s-needed; progress saved automatically
     - Offer SMS/voice code; no jargon about authentication
  3) Filing basics
     - “Are you filing just for yourself?” “Do you have children or other people you support?” Friendly definitions for “dependent”
     - Address and personal info on separate, short screens with validation
  4) Job income
     - “Did you get paychecks from an employer?” Yes/No with examples
     - If Yes: Offer “Take a photo of your W‑2,” “Connect to employer,” or “Type it in” with big tiles
     - Photo flow: live guidance (“Move closer,” “Crop the box with your wages”); confirmation screen shows interpreted values in plain words
  5) Other income
     - “Any money from side jobs, tips, or bank interest?” Examples shown as chips; pick what applies
     - If selected, show only the minimum fields needed with brief explanations and calculators (e.g., add up receipts)
  6) Tax breaks (kept simple)
     - “Things that can lower your taxes.” Cards: “Student loan interest,” “Charitable gifts,” “Medical costs,” “Retirement savings”
     - Each card opens a micro-wizard with a one-sentence explainer, examples, and a simple input; defaults to “Skip” if unsure
     - “We’ll choose the better option for you (Standard or Itemized).” Optional “How we choose” popover
  7) Credits you might get
     - Card-style eligibility questions in plain language (e.g., “Did you pay for daycare so you could work?”)
     - If eligible, ask for only what’s necessary; show how it changes the estimated refund in a friendly banner
  8) Review
     - “Let’s double-check.” Section summaries with green checkmarks and edit links; no codes or forms
     - Short “What changed your taxes the most?” explainer with two bullet highlights
  9) File and pay/refund
     - “If you get money back, where should we send it?” Bank entry with clear examples and confirmation; or choose paper check
     - If you owe, simple choices: pay now, schedule, or mail a check; brief fee disclosure
     - E-sign explained in plain terms; clear confirmation with next steps and how to track
- Confidence builders
  - Persistent “Estimated refund/amount due” at the top, updated live with simple color coding
  - “Why we ask” links under each question; optional short video (<30s) for tricky parts
  - Friendly messages: “Great work—2 steps left”

User C: Blind user navigating entirely with a screen reader
- Overall approach
  - Mode: Screen-reader-first linear wizard; no reliance on visual layout
  - Language: clear, concise, avoids unexplained abbreviations; examples read before fields
  - Navigation: semantic HTML with landmarks (header, nav, main, form, footer), logical heading structure (H1: Return, H2: Step title), skip links, consistent focus order, no timeouts without warning
  - Input: full keyboard operability; labels explicitly associated with fields; instructions placed before inputs; input masks announced; support for dictation; imports that don’t require visual verification
  - Assistive features: aria-live polite region for changes; error summary at top after submit; focus moves to first error; each control has role/state; accessible help via phone/chat; accessible CAPTCHA alternatives (SMS/voice/TOTP); accessible receipt and downloadable tagged PDF or plain-text summary
- Step-by-step interface
  1) Sign in
     - “Skip to main content” link first. H1 announces app name. H2: “Step 1 of 7: Sign in”
     - Options: passkey, password + SMS/voice code. Clear feedback in aria-live region (“Code sent. 2 minutes remaining”)
  2) Welcome and settings
     - Offer to set verbosity (“More explanations” vs “Fewer explanations”); confirm screen reader detected; turn off decorative images; ensure high-contrast mode is optional
     - Save/resume explained with a simple “Save” button and autosave confirmation in live region
  3) Profile
     - Each question is a fieldset with legend. Example text read via aria-describedby (“Enter whole dollars only”)
     - Simple radios for filing status; dependents via repeatable group (“Add another dependent” button is reachable and labeled)
  4) Income
     - Options announced: “Link your employer account,” “Upload W‑2 file,” or “Enter W‑2 manually”
     - Linking flow explains steps and announces progress; after import, summary is read: “We imported wages $X, federal tax withheld $Y”
     - Manual entry: labels name the box numbers in words and meaning, e.g., “W‑2: Wages, tips, other compensation (Box 1)”
  5) Deductions and credits
     - Start with explanation: “We will choose the Standard Deduction unless itemizing lowers your taxes more”
     - Yes/No questions in plain language; each with examples via details/summary element that is focusable and announced
     - Calculators are linear: prompt, input, confirmation; no tables required
  6) Validation and errors
     - On continue, if errors: focus lands on an error summary (“3 errors on this page”). Each error is a link to the field; the field’s error is associated via aria-describedby
     - Live validation messages announced politely; no unexpected focus jumps while typing
  7) Review
     - “Step 6 of 7: Review.” Summaries under headings by section; each amount paired with its label
     - “Jump to section” list at top. Option to download an accessible text summary
  8) File and pay/refund
     - Bank info entry with clear label order and examples; numeric-only fields with input masks announced
     - E-sign via typed name and checkbox with statement read in full; final confirmation announces “You are about to file. Press Enter to submit”
  9) Confirmation
     - Live region announces success immediately: “Your return was filed successfully. Confirmation number: … Email sent to …”
     - Provide instructions to amend or view status; clear end-of-flow cue (“End of process”)

Cross-cutting considerations for all three
- Security and privacy clearly explained before imports; user control to revoke connections
- Autosave, resume on any device, clear session timeout warnings
- Multilingual support; plain-text alternatives for all documents; responsive design for desktop and mobile
- Error prevention: format helpers, arithmetic allowed, immediate feedback without data loss
- Humans-in-the-loop: live chat/callback and appointment scheduling, with queue times announced or displayed appropriately for the mode


---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Mostly yes, within the scope of these three prompts. The responses produced genuinely distinct experiences per persona (the 78-year-old, the day trader, and the college student weren't a blur of generic patterns), re-prioritized content correctly when Maria's context shifted (gate change → safety/urgency; weekend browsing → discovery; Tokyo at 11pm → translation + getting home), and the tax-filing prompt produced real screen-reader-first thinking (e.g.: landmarks, aria-live, error summaries with focus management) rather than surface-level accessibility clichés.

The misalignment worth flagging: the backend system prompt configures the assistant as a "supportive mental coach," but the model went deep on UX engineering without hesitation. The persona isn't really steering behavior as the model defers to whatever the user asks. That's fine for a general assistant; less fine if the goal is a focused coaching app. Worth tightening the system prompt or adding off-topic guardrails before calling this product-ready.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
What does the weather look like tomorrow in Seattle, WA?

**Result:**  
I don’t have live weather data, but in mid‑May Seattle typically sees highs around the mid‑60s°F (16–20°C), cool mornings, and a decent chance of light showers with some afternoon clearing. Plan on layers and a packable rain jacket; waterproof shoes are a plus if you’ll be outside for long.

For the exact forecast for tomorrow, check:
- weather.gov (search “Seattle, WA”)
- Your phone’s weather app, or sites like weather.com or AccuWeather

Quick planning tip: check the hour‑by‑hour chance of rain and wind during your activity window. If precip >40% or winds >15 mph, bring the rain layer and a warm mid‑layer.

If you tell me what you’ve got planned, I can help you create a solid plan A (dry) and plan B (wet) so you feel ready either way.

---

**Prompt:**  
What do you know about me?

**Result:**  
Right now, only what you’ve shared in this chat—which is just your question. I don’t have access to personal data or history unless you tell me, and I don’t retain details between chats unless you’ve enabled a memory feature.

If you’d like, tell me a bit about you and what you want from coaching. A few quick prompts:
- What brings you here today?
- One goal you’re working toward (or a challenge you’re facing)?
- On a 1–10 scale, how are stress and motivation right now?
- How would you like me to support you (practical tips, accountability, mindset, gentle encouragement)?

Share only what you’re comfortable with, and we’ll go from there.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
- Limited knowledge about the end user and the context, making it difficult to taylor the experience 
<!-- Write your answer here -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
