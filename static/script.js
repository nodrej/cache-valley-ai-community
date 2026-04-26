const eventDisplay = document.getElementById("eventDisplay");
const eventTabs = [...document.querySelectorAll(".event-tab")];

const listingUrl =
  "https://www.cachevalley.co/posts/cache-valley-ai-meetup-large-lunch-meeting-april-2026/";

const eventThemes = {
  conversation: {
    label: "Thread 01 — Open conversation",
    title: "Lunch-table energy, signal over noise.",
    body: "People trading what they're learning, what broke this week, and what finally clicked. No keynotes, no panels, just useful conversation.",
    bullets: [
      "Bring a question or a recent weird result",
      "Listening counts — show up, stay curious",
      "Connect with two or three people before you leave"
    ]
  },
  builders: {
    label: "Thread 02 — Builders welcome",
    title: "For people elbow-deep in the work.",
    body: "Shipping something, prototyping, or just now wiring an API for the first time — this thread is for the people in motion.",
    bullets: [
      "Prototypes, side projects, and messy demos",
      "Tool stacks, agent loops, eval war stories",
      "Swap tips with people actually building"
    ]
  },
  future: {
    label: "Thread 03 — Where AI is headed",
    title: "Forward-looking, but grounded.",
    body: "What's coming, what's overhyped, and what a small mountain valley should pay attention to next.",
    bullets: [
      "Local impact — work, school, community",
      "Honest takes on frontier model releases",
      "What's worth learning next, and why"
    ]
  }
};

function renderEvent(themeKey) {
  const theme = eventThemes[themeKey];
  if (!theme) return;

  eventDisplay.innerHTML = `
    <p class="kicker">${theme.label}</p>
    <h3>${theme.title}</h3>
    <p>${theme.body}</p>
    <ul class="event-bullets">
      ${theme.bullets.map((b) => `<li><span class="bullet-glyph">→</span>${b}</li>`).join("")}
    </ul>
    <a class="inline-link" href="${listingUrl}" target="_blank" rel="noreferrer">Read the meetup listing</a>
  `;

  eventTabs.forEach((tab) => {
    const active = tab.dataset.theme === themeKey;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}

eventTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderEvent(tab.dataset.theme));
});

renderEvent("conversation");
