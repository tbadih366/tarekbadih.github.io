(() => {
  const project = {
    title: "Dead Shift 3D",
    desc: "A cinematic first-person horror prototype built in Godot 4. Designed objective flow, stockroom clue progression, VHS effects, gravity props, sword interaction, and a complete RUN ending scene.",
    tags: ["Godot 4", "GDScript", "3D Game Systems", "VHS FX"],
    github: "https://github.com/tbadih366/dead-shift-3d",
    badge: "Game Dev",
  };

  function appendDeadShiftCard() {
    if (document.querySelector("[data-project='dead-shift-3d']")) return true;
    const section = document.querySelector("#projects");
    const grid = section?.querySelector(".grid");
    if (!grid) return false;

    const card = document.createElement("div");
    card.dataset.project = "dead-shift-3d";
    card.className = "group flex flex-col rounded-2xl overflow-hidden transition-all duration-300";
    card.style.cssText = [
      "background:rgba(10,6,24,0.8)",
      "border:1px solid rgba(192,132,252,0.2)",
      "box-shadow:0 0 0 1px rgba(192,132,252,0.06),0 4px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.04)",
    ].join(";");

    card.innerHTML = `
      <div class="w-full overflow-hidden relative aspect-[16/7]" style="background:linear-gradient(135deg,#17111f,#4c1d95)">
        <div class="w-full h-full flex items-center justify-center">
          <span class="font-mono text-xs tracking-[0.2em] uppercase" style="color:rgba(255,255,255,0.55)">Dead Shift</span>
        </div>
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 text-xs font-mono rounded-full" style="background:rgba(8,5,21,0.8);border:1px solid rgba(192,132,252,0.35);color:#c084fc;backdrop-filter:blur(8px)">${project.badge}</span>
        </div>
      </div>
      <div class="flex flex-col flex-1 p-5">
        <h3 class="font-display font-bold mb-2 text-base">${project.title}</h3>
        <p class="text-muted-foreground flex-1 leading-relaxed mb-5 text-xs">${project.desc}</p>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${project.tags.map((tag) => `<span class="px-2 py-0.5 text-xs font-mono rounded border" style="background:rgba(192,132,252,0.1);border-color:rgba(192,132,252,0.25);color:#c084fc">${tag}</span>`).join("")}
        </div>
        <div class="flex items-center gap-4 pt-4 border-t border-[rgba(192,132,252,0.1)]">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">Source</a>
        </div>
      </div>
    `;
    grid.prepend(card);
    return true;
  }

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (appendDeadShiftCard() || attempts > 40) window.clearInterval(timer);
  }, 250);
})();
