const eventDisplay = document.getElementById("eventDisplay");
const eventTabs = [...document.querySelectorAll(".event-tab")];

const discordUrl = "https://discord.gg/uFA8GJmq";

const eventThemes = {
  conversation: {
    label: "Thread 01 · Open conversation",
    title: "Lunch-table energy, signal over noise.",
    body: "People talking about what they're learning, what broke this week, what finally clicked. No keynotes, no panels, just useful conversation.",
    bullets: [
      "Bring a question, or a weird thing you saw this week",
      "Listening counts. Just show up and stay curious.",
      "Try to actually meet a couple of people before you leave"
    ]
  },
  builders: {
    label: "Thread 02 · Builders welcome",
    title: "For people elbow-deep in the work.",
    body: "Shipping something, prototyping, or just wiring up an API for the first time. This one's for the people in motion.",
    bullets: [
      "Prototypes, side projects, messy half-working demos",
      "Tool stacks, agent loops, eval war stories",
      "Trade tips with people actually shipping"
    ]
  },
  future: {
    label: "Thread 03 · Where AI is headed",
    title: "Forward-looking, but grounded.",
    body: "What's coming, what's overhyped, and what a small mountain valley should actually pay attention to next.",
    bullets: [
      "Local impact: work, school, community",
      "Honest takes on the latest model releases",
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
    <a class="inline-link" href="${discordUrl}" target="_blank" rel="noreferrer">Hop into the Discord</a>
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
