/* =============================================================================
   WONDER STORY LAB - shared SVG icon set
   icon(name) returns markup; hydrateIcons(root) fills every [data-icon].
   ========================================================================== */
/* ------------------------------------------- 3D COLORFUL SVG ICONS ---- */
/* Magical UI style: plump shapes, soft gradients, highlight + depth.   */
let iconUid = 0;

function icon(name, cls = "") {
  const draw = ICON_DRAW[name] || ICON_DRAW.sparkle;
  const className = cls ? `ico ${cls}` : "ico";
  const uid = `i${++iconUid}`;
  const markup = draw(uid).replace(/\bid="([^"]+)"/g, `id="$1-${uid}"`)
    .replace(/url\(#([^)]+)\)/g, `url(#$1-${uid})`);
  return `<svg class="${className}" viewBox="0 0 48 48" aria-hidden="true" focusable="false">${markup}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => {
    if (el.dataset.iconHydrated === "1") return;
    const name = el.dataset.icon;
    if (!name) return;
    el.innerHTML = icon(name);
    el.dataset.iconHydrated = "1";
  });
}

const ICON_DRAW = {
  keyboard() {
    /* Plump body, white keys - reads at button size without going muddy. */
    return `
      <defs>
        <linearGradient id="kbBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F1EBFF"/>
          <stop offset="1" stop-color="#C9B4F8"/>
        </linearGradient>
      </defs>
      <rect x="3" y="11" width="42" height="26" rx="7" fill="url(#kbBody)"
            stroke="#6C4BD8" stroke-width="2.6"/>
      <g fill="#FFFFFF">
        <rect x="9"    y="17" width="6" height="5" rx="1.8"/>
        <rect x="17.5" y="17" width="6" height="5" rx="1.8"/>
        <rect x="26"   y="17" width="6" height="5" rx="1.8"/>
        <rect x="34.5" y="17" width="4.5" height="5" rx="1.8"/>
        <rect x="9"    y="25" width="4.5" height="5" rx="1.8"/>
        <rect x="16"   y="25" width="16" height="5" rx="2.2"/>
        <rect x="34.5" y="25" width="4.5" height="5" rx="1.8"/>
      </g>`;
  },
  check() {
    /* Round-capped tick, weighted like the chevrons so it sits with a label. */
    return `
      <defs>
        <linearGradient id="gChk" x1="12" y1="16" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E6DCFF"/>
        </linearGradient>
      </defs>
      <path d="M12 25.5 20.5 34 36 15" fill="none" stroke="url(#gChk)" stroke-width="7.4"
            stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  pencil() {
    /* Plump pencil on the diagonal: warm body, pale wood, dark graphite - reads
       on a grey button without needing an outline. */
    return `
      <defs>
        <linearGradient id="gPenBody" x1="17" y1="30" x2="31" y2="9" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFD98A"/><stop offset="1" stop-color="#F0A21C"/>
        </linearGradient>
      </defs>
      <g transform="rotate(-45 24 24)">
        <rect x="17.5" y="8" width="13" height="23" rx="4.5" fill="url(#gPenBody)"/>
        <rect x="17.5" y="8" width="13" height="6.5" rx="3.2" fill="#C9B4F8"/>
        <path d="M17.5 29.5h13L25.7 39a2.2 2.2 0 0 1-3.4 0Z" fill="#FBEBD0"/>
        <path d="M21.7 35.6h4.6L25.7 39a2.2 2.2 0 0 1-3.4 0Z" fill="#4A3220"/>
      </g>`;
  },
  swap() {
    /* Two round-capped arrows trading places, weighted like the chevrons. */
    return `
      <path d="M9 18h26l-7.5-7.5" fill="none" stroke="currentColor" stroke-width="5.2"
            stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M39 30H13l7.5 7.5" fill="none" stroke="currentColor" stroke-width="5.2"
            stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  close() {
    /* Round-capped cross, matching the chevrons on the action bars. */
    return `
      <path d="M15 15l18 18M33 15L15 33" fill="none" stroke="currentColor" stroke-width="6"
            stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  chevronLeft() {
    /* An open chevron, not a filled triangle: rounded caps and joins, and a
       stroke weight that sits with the button label. */
    return `
      <path d="M29 12 17 24l12 12" fill="none" stroke="currentColor" stroke-width="8.4"
            stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  chevronRight() {
    return `
      <path d="M19 12l12 12-12 12" fill="none" stroke="currentColor" stroke-width="8.4"
            stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  arrowLeft() {
    /* Wider filled chevron with softer rounded tip + base corners. */
    return `
      <path d="M34 7.5 13.2 21.2c-2.1 1.6-2.1 4.2 0 5.8L34 40.5c2.2 1.7 5.2.3 5.2-2.4V9.9c0-2.7-3-4.1-5.2-2.4Z"
            fill="currentColor"/>`;
  },
  arrowRight() {
    return `
      <path d="M14 7.5 34.8 21.2c2.1 1.6 2.1 4.2 0 5.8L14 40.5c-2.2 1.7-5.2.3-5.2-2.4V9.9c0-2.7 3-4.1 5.2-2.4Z"
            fill="currentColor"/>`;
  },
  who() {
    return `
      <defs>
        <linearGradient id="gWho" x1="12" y1="8" x2="36" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#C9AEFF"/><stop offset=".55" stop-color="#9B6BF5"/><stop offset="1" stop-color="#6C4BD8"/>
        </linearGradient>
        <radialGradient id="gWhoHi" cx="18" cy="14" r="14" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="24" cy="42" rx="13" ry="3.2" fill="#6C4BD8" opacity=".18"/>
      <circle cx="24" cy="16.5" r="8.2" fill="url(#gWho)"/>
      <path d="M10.5 39.5c1.2-9.2 6.4-13.8 13.5-13.8S46.8 30.3 37.5 39.5Z" fill="url(#gWho)"/>
      <circle cx="24" cy="16.5" r="8.2" fill="url(#gWhoHi)"/>
      <path d="M10.5 39.5c1.2-9.2 6.4-13.8 13.5-13.8 2.4 0 4.6.5 6.5 1.5 1.8 4.2 1.4 8.8-.4 12.3H10.5Z" fill="#fff" opacity=".18"/>`;
  },
  pin() {
    return `
      <defs>
        <linearGradient id="gPin" x1="14" y1="6" x2="34" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#C6F25A"/><stop offset=".5" stop-color="#8EDB1F"/><stop offset="1" stop-color="#5FB000"/>
        </linearGradient>
        <radialGradient id="gPinHi" cx="18" cy="12" r="12" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="24" cy="43" rx="7" ry="2.4" fill="#5FB000" opacity=".2"/>
      <path d="M24 4.5c7.4 0 13.4 5.9 13.4 13.2 0 9.4-10.2 18.8-12.5 20.9a1.4 1.4 0 0 1-1.8 0C20.8 36.5 10.6 27.1 10.6 17.7 10.6 10.4 16.6 4.5 24 4.5Z" fill="url(#gPin)"/>
      <path d="M24 4.5c7.4 0 13.4 5.9 13.4 13.2 0 2.4-.7 5-1.8 7.6-2.2-1.6-5.5-2.5-9.2-2.5-4.8 0-8.9 1.5-11 3.8.4-7.3 5.2-13.1 11.6-13.1 2.4 0 4.6.7 6.4 2Z" fill="url(#gPinHi)"/>
      <circle cx="24" cy="17.2" r="5.1" fill="#fff"/>
      <circle cx="24" cy="17.2" r="2.6" fill="#7AC814"/>`;
  },
  star() {
    return `
      <defs>
        <linearGradient id="gStar" x1="10" y1="6" x2="38" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFD24A"/><stop offset=".45" stop-color="#FF9F0A"/><stop offset="1" stop-color="#E06A00"/>
        </linearGradient>
        <radialGradient id="gStarHi" cx="18" cy="14" r="14" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="24" cy="43.5" rx="10" ry="2.6" fill="#F08A00" opacity=".2"/>
      <!-- Every corner is rounded by stroking the outline in its own gradient with
           a round join: the points and the notches both soften, so the star stops
           looking cut out of card. The group scales down to give the stroke the
           room it adds back, keeping the star the size it was. -->
      <g transform="translate(24 22.5) scale(.88) translate(-24 -22.5)">
        <path d="M24 5.2 28.4 16.4l12.1 1.2-9.1 8.1 2.7 11.8L24 31.4l-10.1 6.1 2.7-11.8-9.1-8.1 12.1-1.2Z"
              fill="url(#gStar)" stroke="url(#gStar)" stroke-width="5.6" stroke-linejoin="round"/>
        <!-- Fill only: stroking a fade-to-transparent gradient gave the sheen a
             hard edge of its own. -->
        <path d="M24 5.2 28.4 16.4l8.4.8c-2.8.9-6.4 1.4-10.2 1.2-4.6-.2-8.7-1.5-11.4-3.5L24 5.2Z"
              fill="url(#gStarHi)"/>
        <path d="M21.6 22.2c1.1-2.4 3.7-3.2 5.4-2.1.3 1.9-.3 4.2-1.8 5.8-1.8.4-3.3-.8-3.6-3.7Z" fill="#fff" opacity=".35"/>
      </g>`;
  },
  clock() {
    return `
      <defs>
        <linearGradient id="gClock" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#8ADBFF"/><stop offset=".5" stop-color="#2EA8FF"/><stop offset="1" stop-color="#1176E0"/>
        </linearGradient>
        <radialGradient id="gClockHi" cx="17" cy="14" r="14" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="24" cy="43.5" rx="11" ry="2.6" fill="#1176E0" opacity=".18"/>
      <circle cx="24" cy="24" r="16.5" fill="url(#gClock)"/>
      <circle cx="24" cy="24" r="16.5" fill="url(#gClockHi)"/>
      <circle cx="24" cy="24" r="12.2" fill="#F4FBFF"/>
      <circle cx="24" cy="24" r="12.2" fill="#fff" opacity=".35"/>
      <path d="M24 14.2v10.4l7.2 4.2" fill="none" stroke="#1A7FE8" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="24" cy="24" r="2.2" fill="#1A7FE8"/>
      <circle cx="24" cy="11.2" r="1.3" fill="#7AC8FF"/><circle cx="36.8" cy="24" r="1.3" fill="#7AC8FF"/>
      <circle cx="24" cy="36.8" r="1.3" fill="#7AC8FF"/><circle cx="11.2" cy="24" r="1.3" fill="#7AC8FF"/>`;
  },
  heart() {
    return `
      <defs>
        <linearGradient id="gHeart" x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FF9EC4"/><stop offset=".5" stop-color="#FF4F93"/><stop offset="1" stop-color="#E01F6C"/>
        </linearGradient>
        <radialGradient id="gHeartHi" cx="17" cy="14" r="12" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="24" cy="43.5" rx="10" ry="2.4" fill="#E01F6C" opacity=".18"/>
      <path d="M24 41.2C12.8 33.2 7.2 26.2 7.2 18.8c0-5.5 4.1-9.5 9.2-9.5 3.1 0 5.8 1.5 7.6 3.9 1.8-2.4 4.5-3.9 7.6-3.9 5.1 0 9.2 4 9.2 9.5 0 7.4-5.6 14.4-16.8 22.4Z" fill="url(#gHeart)"/>
      <path d="M16.4 9.3c3.1 0 5.8 1.5 7.6 3.9.4 1.8.2 4-.8 6.1-2.6.3-5.4-.6-7.4-2.6-1.6-1.6-2.4-3.6-2.5-5.5 1-1.2 2.1-1.9 3.1-1.9Z" fill="url(#gHeartHi)"/>
      <ellipse cx="17.5" cy="17" rx="3.2" ry="2.2" fill="#fff" opacity=".35" transform="rotate(-28 17.5 17)"/>`;
  },
  sparkle() {
    return `
      <defs>
        <linearGradient id="gSpk" x1="10" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFE98A"/><stop offset=".5" stop-color="#FFC93A"/><stop offset="1" stop-color="#FF9A1F"/>
        </linearGradient>
        <linearGradient id="gSpk2" x1="28" y1="6" x2="44" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#E4C7FF"/><stop offset="1" stop-color="#B07CFF"/>
        </linearGradient>
      </defs>
      <path d="M22 6.5c.7 5.8 3.5 9.6 9.5 11.2-6 1.6-8.8 5.4-9.5 11.2-.7-5.8-3.5-9.6-9.5-11.2 6-1.6 8.8-5.4 9.5-11.2Z" fill="url(#gSpk)"/>
      <path d="M36.5 8.5c.4 3.2 1.9 5.2 5.1 6.1-3.2.9-4.7 2.9-5.1 6.1-.4-3.2-1.9-5.2-5.1-6.1 3.2-.9 4.7-2.9 5.1-6.1Z" fill="url(#gSpk2)"/>
      <path d="M35 28c.35 2.6 1.5 4.2 4.1 5-2.6.8-3.75 2.4-4.1 5-.35-2.6-1.5-4.2-4.1-5 2.6-.8 3.75-2.4 4.1-5Z" fill="#8B6BF0" opacity=".9"/>
      <circle cx="13" cy="34" r="2.2" fill="#FFB4E0"/>`;
  },
  sparkle2() {
    return `
      <defs>
        <linearGradient id="gSpkB" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#F0D6FF"/><stop offset="1" stop-color="#A56BFF"/>
        </linearGradient>
      </defs>
      <path d="M24 5c.8 7 4.2 11.5 11.4 13.4C28.2 20.3 24.8 24.8 24 31.8c-.8-7-4.2-11.5-11.4-13.4C19.8 16.5 23.2 12 24 5Z" fill="url(#gSpkB)"/>
      <circle cx="37" cy="34" r="3" fill="#FFD76A"/>
      <circle cx="10" cy="30" r="2" fill="#FF8EC8"/>`;
  },
  glow() {
    return `
      <defs>
        <radialGradient id="gGlow" cx="24" cy="24" r="16" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFF6B0"/><stop offset=".45" stop-color="#FFD45A"/><stop offset="1" stop-color="#FFD45A" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="16" fill="url(#gGlow)"/>
      <circle cx="24" cy="24" r="5.5" fill="#FFE56A"/>
      <circle cx="24" cy="24" r="2.5" fill="#fff" opacity=".7"/>`;
  },
  wand() {
    return `
      <defs>
        <linearGradient id="gWand" x1="10" y1="38" x2="34" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#7C5BE6"/><stop offset="1" stop-color="#C9A8FF"/>
        </linearGradient>
        <linearGradient id="gWandStar" x1="26" y1="4" x2="44" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFE56A"/><stop offset="1" stop-color="#FFB020"/>
        </linearGradient>
      </defs>
      <path d="M12.5 39.5 31 14.5l4.2 3.2L16.7 42.7a2.4 2.4 0 0 1-3.4.1l-.9-.9a2.4 2.4 0 0 1 .1-3.4Z" fill="url(#gWand)"/>
      <path d="M12.5 39.5 31 14.5l1.6 1.2L14.4 41.2Z" fill="#fff" opacity=".25"/>
      <path d="M34.2 5.5 36.4 12l6.6 1.2-5.1 4.6 1.5 6.6-5.2-3.4-5.2 3.4 1.5-6.6-5.1-4.6 6.6-1.2Z" fill="url(#gWandStar)"/>
      <path d="M18 8.5c.25 2 1.1 3.3 3.1 3.9-2 .6-2.85 1.9-3.1 3.9-.25-2-1.1-3.3-3.1-3.9 2-.6 2.85-1.9 3.1-3.9Z" fill="#FFB4E0"/>
      <circle cx="41" cy="28" r="1.8" fill="#8ADBFF"/>`;
  },
  bulb() {
    return `
      <defs>
        <linearGradient id="gBulb" x1="14" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFF3A8"/><stop offset=".55" stop-color="#FFD24A"/><stop offset="1" stop-color="#F0A010"/>
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="43" rx="7" ry="2.2" fill="#F0A010" opacity=".18"/>
      <path d="M24 4.5c7.2 0 13 5.6 13 12.5 0 4.6-2.4 8.5-6.1 10.7l-.7 1.3h-12.4l-.7-1.3C13.4 25.5 11 21.6 11 17 11 10.1 16.8 4.5 24 4.5Z" fill="url(#gBulb)"/>
      <path d="M18.8 30.2h10.4v3.2c0 1.2-.9 2.1-2.1 2.1h-6.2c-1.2 0-2.1-.9-2.1-2.1v-3.2Z" fill="#E8D4A8"/>
      <rect x="19.4" y="35.2" width="9.2" height="3.2" rx="1.4" fill="#D4B88A"/>
      <path d="M20 14.5c2.1-2.4 6.2-3.2 9.2-1.4" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".65"/>
      <path d="M24 18.5v5.2M21.2 21.1h5.6" fill="none" stroke="#F08A00" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>`;
  },
  puzzle() {
    return `
      <defs>
        <linearGradient id="gPuz" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#C7B0FF"/><stop offset=".5" stop-color="#8B6BF0"/><stop offset="1" stop-color="#5B3CC4"/>
        </linearGradient>
      </defs>
      <path d="M10 16.5c0-2.5 2-4.5 4.5-4.5h6.2c.4-2.3 2.5-4 5-4s4.6 1.7 5 4h6.8c2.5 0 4.5 2 4.5 4.5v6.2c2.3.4 4 2.5 4 5s-1.7 4.6-4 5v6.8c0 2.5-2 4.5-4.5 4.5h-6.8c-.4 2.3-2.5 4-5 4s-4.6-1.7-5-4H14.5c-2.5 0-4.5-2-4.5-4.5v-6.8c-2.3-.4-4-2.5-4-5s1.7-4.6 4-5v-6.2Z" fill="url(#gPuz)"/>
      <path d="M14.5 14h7.3c.7 2.6 3.1 4.4 5.9 4.1 1.4-.2 2.5-.8 3.4-1.7V22c2.4.8 4 3 4 5.6 0 .8-.2 1.6-.5 2.3H14.5V14Z" fill="#fff" opacity=".22"/>`;
  },
  robot() {
    return `
      <defs>
        <linearGradient id="gBot" x1="10" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#D8C8FF"/><stop offset=".5" stop-color="#A78BFA"/><stop offset="1" stop-color="#6C4BD8"/>
        </linearGradient>
      </defs>
      <rect x="14" y="4" width="4" height="8" rx="2" fill="#8B6BF0"/>
      <circle cx="16" cy="4.5" r="2.4" fill="#FFD76A"/>
      <rect x="10" y="12" width="28" height="24" rx="9" fill="url(#gBot)"/>
      <rect x="14.5" y="17.5" width="19" height="10" rx="5" fill="#2A1B5E"/>
      <circle cx="20" cy="22.5" r="2.6" fill="#7CFFD4"/>
      <circle cx="28" cy="22.5" r="2.6" fill="#7CFFD4"/>
      <path d="M19 30.5h10" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>
      <rect x="7" y="20" width="4" height="8" rx="2" fill="#8B6BF0"/>
      <rect x="37" y="20" width="4" height="8" rx="2" fill="#8B6BF0"/>`;
  },
  search() {
    return `
      <defs>
        <linearGradient id="gSearch" x1="8" y1="8" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#9AD4FF"/><stop offset="1" stop-color="#2F7FE8"/>
        </linearGradient>
      </defs>
      <circle cx="20.5" cy="20.5" r="11.5" fill="url(#gSearch)"/>
      <circle cx="20.5" cy="20.5" r="7.2" fill="#F2F9FF"/>
      <path d="M28.8 28.8 39 39" fill="none" stroke="#2F7FE8" stroke-width="5" stroke-linecap="round"/>
      <circle cx="17" cy="17" r="3" fill="#fff" opacity=".55"/>`;
  },
  eyes() {
    return `
      <defs>
        <linearGradient id="gEye" x1="6" y1="14" x2="42" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#B8E4FF"/><stop offset="1" stop-color="#5AA8F0"/>
        </linearGradient>
      </defs>
      <ellipse cx="15.5" cy="24" rx="9.5" ry="11" fill="url(#gEye)"/>
      <ellipse cx="32.5" cy="24" rx="9.5" ry="11" fill="url(#gEye)"/>
      <ellipse cx="15.5" cy="24" rx="5.8" ry="7" fill="#fff"/>
      <ellipse cx="32.5" cy="24" rx="5.8" ry="7" fill="#fff"/>
      <circle cx="16.5" cy="25" r="3.2" fill="#2A1B5E"/>
      <circle cx="33.5" cy="25" r="3.2" fill="#2A1B5E"/>
      <circle cx="15.2" cy="23.5" r="1.1" fill="#fff"/>
      <circle cx="32.2" cy="23.5" r="1.1" fill="#fff"/>`;
  },
  thought() {
    return `
      <defs>
        <linearGradient id="gThink" x1="8" y1="8" x2="40" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#E8DCFF"/><stop offset="1" stop-color="#9B7CFF"/>
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="20" rx="16" ry="12.5" fill="url(#gThink)"/>
      <circle cx="14" cy="34.5" r="3.4" fill="#B89BFF"/>
      <circle cx="9.5" cy="40" r="2.1" fill="#C9B2FF"/>
      <circle cx="17" cy="16" r="2.2" fill="#fff" opacity=".55"/>
      <circle cx="24" cy="18" r="1.8" fill="#6C4BD8" opacity=".35"/>
      <circle cx="30.5" cy="18" r="1.8" fill="#6C4BD8" opacity=".35"/>
      <circle cx="27.2" cy="23.5" r="1.8" fill="#6C4BD8" opacity=".35"/>`;
  },
  weather() {
    return `
      <defs>
        <linearGradient id="gCloud" x1="8" y1="10" x2="40" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#C9DFF8"/>
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="42" rx="10" ry="2.2" fill="#7AA8D8" opacity=".15"/>
      <path d="M16.5 28.5c-4.2 0-7.5-3.1-7.5-7s3.3-7 7.5-7c.8-3.4 3.9-6 7.6-6 3.5 0 6.5 2.2 7.5 5.3 3.8.4 6.9 3.5 6.9 7.4 0 4.1-3.4 7.3-7.6 7.3H16.5Z" fill="url(#gCloud)"/>
      <path d="M17 33.5 14.5 40M24 34v7.5M31 33.5 33.5 40" fill="none" stroke="#7EB6F0" stroke-width="2.8" stroke-linecap="round"/>
      <circle cx="14.5" cy="41.5" r="1.5" fill="#A8D2FF"/>
      <circle cx="24" cy="43" r="1.5" fill="#A8D2FF"/>
      <circle cx="33.5" cy="41.5" r="1.5" fill="#A8D2FF"/>`;
  },
  place() {
    return `
      <defs>
        <linearGradient id="gPlace" x1="10" y1="8" x2="38" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#7EE7C8"/><stop offset=".55" stop-color="#22C7A9"/><stop offset="1" stop-color="#0B9A7E"/>
        </linearGradient>
      </defs>
      <path d="M9 20.5 24 7.5l15 13V39a2.5 2.5 0 0 1-2.5 2.5h-25A2.5 2.5 0 0 1 9 39V20.5Z" fill="url(#gPlace)"/>
      <path d="M9 20.5 24 7.5l8 7V24H9v-3.5Z" fill="#fff" opacity=".22"/>
      <rect x="20" y="26" width="8" height="15.5" rx="1.5" fill="#E8FFF8"/>
      <rect x="13" y="24" width="5" height="5" rx="1" fill="#E8FFF8"/>
      <rect x="30" y="24" width="5" height="5" rx="1" fill="#E8FFF8"/>
      <rect x="13" y="32" width="5" height="5" rx="1" fill="#E8FFF8"/>
      <rect x="30" y="32" width="5" height="5" rx="1" fill="#E8FFF8"/>`;
  },
  problem() {
    return `
      <defs>
        <linearGradient id="gProb" x1="12" y1="6" x2="36" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFB0C8"/><stop offset=".5" stop-color="#FF6B9A"/><stop offset="1" stop-color="#E0346C"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="16.5" fill="url(#gProb)"/>
      <path d="M24 13.5c3.8 0 6.4 2.3 6.4 5.6 0 2.3-1.2 3.8-3.1 5.1-1.1.8-1.5 1.4-1.5 2.6v.7h-3.6v-1c0-2.1.9-3.4 2.9-4.8 1.5-1 2.1-1.7 2.1-2.7 0-1.2-.9-2-2.2-2s-2.3.9-2.4 2.3h-3.7c.2-3.4 2.8-5.8 6.1-5.8Z" fill="#fff"/>
      <circle cx="24" cy="34.2" r="2.2" fill="#fff"/>`;
  },
  book() {
    return `
      <defs>
        <linearGradient id="gBook" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#C7B0FF"/><stop offset="1" stop-color="#6C4BD8"/>
        </linearGradient>
      </defs>
      <path d="M8.5 12.5c0-1.7 1.3-3 3-3H22v29H11.5c-1.7 0-3-1.3-3-3v-23Z" fill="url(#gBook)"/>
      <path d="M39.5 12.5c0-1.7-1.3-3-3-3H26v29h10.5c1.7 0 3-1.3 3-3v-23Z" fill="url(#gBook)"/>
      <path d="M22 9.5h2v29h-2z" fill="#EDE4FF"/>
      <path d="M12.5 16h7M12.5 21h7M29 16h7M29 21h7" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".55"/>`;
  },
  books() {
    return `
      <defs>
        <linearGradient id="gBooks" x1="8" y1="10" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFD76A"/><stop offset="1" stop-color="#F0A010"/>
        </linearGradient>
        <linearGradient id="gBooks2" x1="16" y1="8" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#B8E4FF"/><stop offset="1" stop-color="#3B8DE0"/>
        </linearGradient>
        <linearGradient id="gBooks3" x1="20" y1="6" x2="42" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFB4D8"/><stop offset="1" stop-color="#E4557F"/>
        </linearGradient>
      </defs>
      <rect x="8" y="14" width="10" height="26" rx="2.5" fill="url(#gBooks)" transform="rotate(-8 13 27)"/>
      <rect x="18" y="11" width="11" height="28" rx="2.5" fill="url(#gBooks2)"/>
      <rect x="30" y="9" width="10" height="30" rx="2.5" fill="url(#gBooks3)" transform="rotate(8 35 24)"/>
      <path d="M20.5 18h6M20.5 23h6" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>`;
  },
  image() {
    return `
      <defs>
        <linearGradient id="gImg" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#D8C8FF"/><stop offset="1" stop-color="#7C5BE6"/>
        </linearGradient>
        <linearGradient id="gImgSky" x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#B8E8FF"/><stop offset="1" stop-color="#7EC8F0"/>
        </linearGradient>
      </defs>
      <rect x="7" y="10" width="34" height="28" rx="7" fill="url(#gImg)"/>
      <rect x="11" y="14" width="26" height="20" rx="4" fill="url(#gImgSky)"/>
      <circle cx="18" cy="20" r="3" fill="#FFE56A"/>
      <path d="M12.5 30.5 19 24l5 4.5 4.5-5.5 7 7.5H12.5Z" fill="#6C4BD8" opacity=".55"/>
      <path d="M12.5 30.5 19 24l5 4.5 2.2-2.7v4.7H12.5Z" fill="#fff" opacity=".25"/>`;
  },
  clipboard() {
    return `
      <defs>
        <linearGradient id="gClip" x1="12" y1="6" x2="36" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFE29A"/><stop offset="1" stop-color="#E9A010"/>
        </linearGradient>
      </defs>
      <rect x="12" y="10" width="24" height="32" rx="5" fill="url(#gClip)"/>
      <rect x="16" y="16" width="16" height="22" rx="3" fill="#FFF8E8"/>
      <rect x="18" y="6" width="12" height="8" rx="3" fill="#8B6BF0"/>
      <rect x="20.5" y="8.5" width="7" height="3.2" rx="1.5" fill="#D8C8FF"/>
      <path d="M19.5 22h9M19.5 27h9M19.5 32h6" stroke="#E9A010" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>`;
  },
  speaker() {
    /* One wave, not two, and the cone taking the room the second one gave up.
       The corners are rounded by stroking the cone in its own fill with a round
       join, which also grows the shape - so the glyph reads at button size
       instead of thinning out into a small mark. */
    return `
      <defs>
        <linearGradient id="gSpkVol" x1="6" y1="10" x2="40" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#8B6BF0"/><stop offset="1" stop-color="#4A2BA8"/>
        </linearGradient>
      </defs>
      <path d="M7.2 18h7.44l11.16-9v30L14.64 30H7.2a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Z"
            fill="url(#gSpkVol)" stroke="url(#gSpkVol)" stroke-width="2.6"
            stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M32.5 14c4.4 3.5 7 7.8 7 10s-2.6 6.5-7 10" fill="none" stroke="#5634C0"
            stroke-width="4.2" stroke-linecap="round"/>`;
  },
  muted() {
    /* The speaker in full - cone and both waves - with one line drawn across the
       whole of it. Muted is the same object silenced, not a different object, and
       the cross that used to sit where the waves go read as a small mark beside
       the cone rather than a state of it. The slash is masked out of the artwork
       so it cuts a real gap, which holds on any button colour. */
    return `
      <defs>
        <linearGradient id="gMute" x1="6" y1="10" x2="40" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#8B6BF0"/><stop offset="1" stop-color="#4A2BA8"/>
        </linearGradient>
        <mask id="mMuteCut">
          <rect x="0" y="0" width="48" height="48" fill="#FFFFFF"/>
          <path d="M8.5 8.5 39.5 39.5" fill="none" stroke="#000000" stroke-width="8"
                stroke-linecap="round"/>
        </mask>
      </defs>
      <g mask="url(#mMuteCut)">
        <path d="M7.2 18h7.44l11.16-9v30L14.64 30H7.2a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Z"
              fill="url(#gMute)" stroke="url(#gMute)" stroke-width="2.6"
              stroke-linejoin="round" stroke-linecap="round"/>
        <path d="M32.5 14c4.4 3.5 7 7.8 7 10s-2.6 6.5-7 10" fill="none" stroke="#5634C0"
              stroke-width="4.2" stroke-linecap="round"/>
      </g>
      <path d="M8.5 8.5 39.5 39.5" fill="none" stroke="#FF6B9A" stroke-width="3.6"
            stroke-linecap="round"/>`;
  },
  mic() {
    return `
      <defs>
        <linearGradient id="gMic" x1="16" y1="6" x2="32" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#E4D6FF"/>
        </linearGradient>
        <linearGradient id="gMicBase" x1="12" y1="26" x2="36" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#C7B0FF"/><stop offset="1" stop-color="#6C4BD8"/>
        </linearGradient>
      </defs>
      <rect x="18" y="6" width="12" height="20" rx="6" fill="url(#gMic)"/>
      <path d="M14 22.5a10 10 0 0 0 20 0" fill="none" stroke="url(#gMicBase)" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M24 32.5v6.5" stroke="#8B6BF0" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M17 41.5h14" stroke="#8B6BF0" stroke-width="3.4" stroke-linecap="round"/>
      <ellipse cx="21" cy="12" rx="2.2" ry="3" fill="#fff" opacity=".7"/>`;
  },
  stop() {
    /* The recording button's other face. One rounded square, nothing else - it
       has to be readable at a glance by a child who is mid-sentence, and it sits
       on the crimson the listening button already turns, so it is drawn in the
       same white the mic's head is. */
    return `
      <defs>
        <linearGradient id="gStop" x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#FFE7EE"/>
        </linearGradient>
      </defs>
      <rect x="14" y="14" width="20" height="20" rx="6" fill="url(#gStop)"/>`;
  },
  headset() {
    /* Headphones - the band over the top and a cup each side. It says "listen"
       to a child who cannot read the label under it. */
    return `
      <defs>
        <linearGradient id="gHead" x1="10" y1="12" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#8B6BF0"/><stop offset="1" stop-color="#4A2BA8"/>
        </linearGradient>
      </defs>
      <path d="M10 30v-5a14 14 0 0 1 28 0v5" fill="none" stroke="url(#gHead)"
            stroke-width="4" stroke-linecap="round"/>
      <rect x="6" y="26" width="10" height="14" rx="5" fill="url(#gHead)"/>
      <rect x="32" y="26" width="10" height="14" rx="5" fill="url(#gHead)"/>`;
  }
};
