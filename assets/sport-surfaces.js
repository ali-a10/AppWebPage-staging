/*
 * LetsPlay default event banners: each sport's playing surface seen from above, in the sport's
 * colour, with the sport icon in the bottom-right disc. Used by event.js when an event has no
 * photo (and underneath a photo, in case it fails to load).
 *
 * The drawing part is generated from the app's mobile/lib/utils/sportSurfaces.ts so the website
 * and the app show the same banners. To regenerate it after changing that file, run in mobile/:
 *   npx esbuild@0.24.0 lib/utils/sportSurfaces.ts --bundle --format=iife  *     --global-name=LetsPlaySportSurfacesCore --target=es2017
 * and replace the generated block below.
 *
 * Icons are Material Design Icons (@mdi/js 7.4.47, Apache 2.0), the same set the app uses.
 */

/* ---------- generated from mobile/lib/utils/sportSurfaces.ts (do not edit by hand) ---------- */
"use strict";
var LetsPlaySportSurfacesCore = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // lib/utils/sportSurfaces.ts
  var sportSurfaces_exports = {};
  __export(sportSurfaces_exports, {
    ICON_DISC: () => ICON_DISC,
    SURFACE_HEIGHT: () => SURFACE_HEIGHT,
    SURFACE_WIDTH: () => SURFACE_WIDTH,
    sportSurfaceXml: () => sportSurfaceXml
  });
  var SURFACE_WIDTH = 360;
  var SURFACE_HEIGHT = 170;
  var ICON_DISC = { cx: 325, cy: 137, r: 23, iconSize: 29 };
  function channels(hex) {
    const h = hex.replace("#", "");
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  }
  function mix(a, b, t) {
    const x = channels(a);
    const y = channels(b);
    return "#" + x.map((v, i) => Math.round(Math.max(0, Math.min(255, v + (y[i] - v) * t))).toString(16).padStart(2, "0")).join("");
  }
  var dk = (c, t) => mix(c, "#000000", t);
  var lt = (c, t) => mix(c, "#FFFFFF", t);
  var L = (o = 0.55, w = 2) => `stroke="#fff" stroke-opacity="${o}" stroke-width="${w}" fill="none"`;
  var S = (col, o = 0.85, w = 2) => `stroke="${col}" stroke-opacity="${o}" stroke-width="${w}" fill="none"`;
  var mirror = (m) => `${m}<g transform="translate(360 0) scale(-1 1)">${m}</g>`;
  var grad = (c, a, b) => `<defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${dk(c, a)}"/><stop offset="1" stop-color="${dk(c, b)}"/></linearGradient></defs><rect width="360" height="170" fill="url(#bg)"/>`;
  var stripes = (w, o = 0.055) => {
    let s = "";
    for (let x = 0; x < 360; x += w * 2) s += `<rect x="${x + w}" y="0" width="${w}" height="170" fill="#fff" fill-opacity="${o}"/>`;
    return s;
  };
  var outside = (d, col, o) => `<path d="M0 0H360V170H0Z ${d}" fill="${col}" fill-opacity="${o}" fill-rule="evenodd"/>`;
  var stadium = (x, y, w, h) => {
    const r = h / 2;
    return `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
  };
  var SURFACES = {
    basketball: (c) => {
      let planks = "";
      for (let x = 0; x < 360; x += 9) {
        planks += `<line x1="${x}" y1="0" x2="${x}" y2="170" stroke="#000" stroke-opacity=".08" stroke-width="1"/><line x1="${x}" y1="${x * 7 % 170}" x2="${x + 9}" y2="${x * 7 % 170}" stroke="#000" stroke-opacity=".07" stroke-width="1"/>`;
      }
      const end = `<rect x="14" y="60" width="64" height="50" fill="#000" fill-opacity=".16"/><rect x="14" y="60" width="64" height="50" ${L()}/>
      <path d="M78 60A25 25 0 0 1 78 110" ${L()}/><path d="M78 60A25 25 0 0 0 78 110" ${L(0.45)} stroke-dasharray="4 4"/>
      <path d="M14 22H56A70 70 0 0 1 56 148H14" ${L()}/>
      <line x1="20" y1="75" x2="20" y2="95" ${L(0.9, 3)}/><circle cx="26" cy="85" r="4.5" ${S("#FB923C", 1, 2)}/>`;
      return `${grad(c, 0.02, 0.28)}${planks}<rect x="14" y="12" width="332" height="146" ${L()}/>
      <line x1="180" y1="12" x2="180" y2="158" ${L()}/><circle cx="180" cy="85" r="22" ${L()}/>${mirror(end)}`;
    },
    soccer: (c) => {
      const end = `<rect x="14" y="40" width="52" height="90" ${L()}/><rect x="14" y="64" width="18" height="42" ${L()}/>
      <circle cx="50" cy="85" r="1.8" fill="#fff" fill-opacity=".7"/><path d="M66 58.5A30 30 0 0 1 66 111.5" ${L()}/>
      <rect x="8" y="75" width="6" height="20" ${L(0.7, 1.5)}/><path d="M14 18A6 6 0 0 0 20 12M14 152A6 6 0 0 1 20 158" ${L()}/>`;
      return `${grad(c, 0.02, 0.3)}${stripes(30)}<rect x="14" y="12" width="332" height="146" ${L()}/>
      <line x1="180" y1="12" x2="180" y2="158" ${L()}/><circle cx="180" cy="85" r="28" ${L()}/><circle cx="180" cy="85" r="2" fill="#fff" fill-opacity=".7"/>${mirror(end)}`;
    },
    swimming: (c) => {
      const lane = 170 / 6;
      let s = "";
      for (let k = 0; k < 6; k++) {
        const y = lane * k + lane / 2;
        s += `<line x1="38" y1="${y}" x2="322" y2="${y}" stroke="${dk(c, 0.55)}" stroke-opacity=".45" stroke-width="4"/>
        <line x1="38" y1="${y - 7}" x2="38" y2="${y + 7}" stroke="${dk(c, 0.55)}" stroke-opacity=".45" stroke-width="4"/>
        <line x1="322" y1="${y - 7}" x2="322" y2="${y + 7}" stroke="${dk(c, 0.55)}" stroke-opacity=".45" stroke-width="4"/>`;
      }
      for (let k = 1; k < 6; k++) {
        const y = lane * k;
        s += `<line x1="8" y1="${y}" x2="352" y2="${y}" stroke="#fff" stroke-opacity=".75" stroke-width="3.5" stroke-dasharray="5 4"/>
        <line x1="8" y1="${y}" x2="352" y2="${y}" stroke="${lt(c, 0.3)}" stroke-opacity=".9" stroke-width="3.5" stroke-dasharray="5 4" stroke-dashoffset="4.5"/>`;
      }
      const ripples = [[90, 40], [230, 68], [150, 124], [290, 150]].map(([x, y]) => `<path d="M${x} ${y}q8 -4 16 0t16 0" ${L(0.22, 1.5)}/>`).join("");
      return `${grad(lt(c, 0.05), 0, 0.3)}${s}${ripples}
      <line x1="62" y1="0" x2="62" y2="170" ${L(0.3, 1)} stroke-dasharray="2 5"/><line x1="298" y1="0" x2="298" y2="170" ${L(0.3, 1)} stroke-dasharray="2 5"/>
      <rect x="0" y="0" width="8" height="170" fill="#fff" fill-opacity=".35"/><rect x="352" y="0" width="8" height="170" fill="#fff" fill-opacity=".35"/>`;
    },
    tennis: (c) => {
      const end = `<line x1="104" y1="36" x2="104" y2="134" ${L()}/><line x1="104" y1="85" x2="180" y2="85" ${L()}/><line x1="39" y1="85" x2="45" y2="85" ${L()}/>`;
      return `${grad(c, 0.3, 0.5)}<rect x="39" y="20" width="282" height="130" fill="${c}"/>
      <rect x="39" y="20" width="282" height="130" ${L(0.75)}/><line x1="39" y1="36" x2="321" y2="36" ${L(0.75)}/><line x1="39" y1="134" x2="321" y2="134" ${L(0.75)}/>
      ${mirror(end)}
      <line x1="180" y1="12" x2="180" y2="158" ${L(0.95, 3)}/><circle cx="180" cy="12" r="2.5" fill="#fff"/><circle cx="180" cy="158" r="2.5" fill="#fff"/>`;
    },
    volleyball: (c) => `${grad(c, 0.3, 0.5)}<rect x="50" y="20" width="260" height="130" fill="${c}"/><rect x="137" y="20" width="86" height="130" fill="#fff" fill-opacity=".1"/>
      <rect x="50" y="20" width="260" height="130" ${L(0.8)}/><line x1="137" y1="20" x2="137" y2="150" ${L(0.8)}/><line x1="223" y1="20" x2="223" y2="150" ${L(0.8)}/>
      <line x1="180" y1="10" x2="180" y2="160" ${L(0.95, 3)}/><circle cx="180" cy="10" r="3" fill="#fff"/><circle cx="180" cy="160" r="3" fill="#fff"/>`,
    running: (c) => {
      let lanes = "";
      for (let i = 0; i <= 6; i++) {
        const n = i * 9;
        lanes += `<path d="${stadium(20 + n, 10 + n, 320 - 2 * n, 150 - 2 * n)}" ${L(i === 0 || i === 6 ? 0.75 : 0.5, 1.3)}/>`;
      }
      return `<rect width="360" height="170" fill="${dk(c, 0.4)}"/><path d="${stadium(20, 10, 320, 150)}" fill="${c}"/>
      <path d="${stadium(74, 64, 212, 42)}" fill="${dk(c, 0.45)}"/><path d="${stadium(74, 64, 212, 42)}" fill="#fff" fill-opacity=".04"/>${lanes}
      <line x1="232" y1="106" x2="232" y2="160" stroke="#fff" stroke-width="3"/><line x1="128" y1="10" x2="128" y2="64" ${L(0.6, 1.5)}/>`;
    },
    golf: (c) => {
      let mow = "";
      for (let k = -6; k < 14; k++) {
        mow += `<rect x="${k * 36}" y="-60" width="18" height="300" fill="#fff" fill-opacity=".05" transform="rotate(25 180 85)"/>`;
      }
      const green = "M128 92C126 52 188 34 240 44C292 54 304 102 272 128C240 152 158 148 138 122C131 112 129 102 128 92Z";
      return `${grad(c, 0.05, 0.32)}${mow}
      <path d="${green}" fill="${lt(c, 0.22)}" stroke="${lt(c, 0.4)}" stroke-width="7" stroke-opacity=".55"/>
      <path d="M62 122C52 100 86 90 102 104C116 116 108 142 86 142C72 142 66 132 62 122Z" fill="#EADFB8"/>
      <path d="M296 30C312 22 336 30 334 46C332 60 310 62 300 54C292 48 288 36 296 30Z" fill="#EADFB8"/>
      <ellipse cx="229" cy="94" rx="10" ry="3" fill="#000" fill-opacity=".15"/>
      <circle cx="224" cy="92" r="3.5" fill="#0B2227"/><line x1="224" y1="92" x2="224" y2="48" stroke="#fff" stroke-width="2"/>
      <path d="M224 48L250 55L224 62Z" fill="#fff"/>`;
    },
    hockey: (c) => {
      const red = "#DC2626";
      const blue = "#2563EB";
      const end = `<line x1="40" y1="16" x2="40" y2="154" ${S(red, 0.8, 1.5)}/>
      <path d="M40 76A10 10 0 0 1 40 94Z" fill="#93C5FD" fill-opacity=".8" stroke="${red}" stroke-opacity=".8" stroke-width="1"/><rect x="32" y="79" width="8" height="12" ${S(red, 0.9, 1.5)}/>
      <circle cx="82" cy="48" r="19" ${S(red, 0.8, 1.5)}/><circle cx="82" cy="48" r="2.5" fill="${red}"/>
      <circle cx="82" cy="122" r="19" ${S(red, 0.8, 1.5)}/><circle cx="82" cy="122" r="2.5" fill="${red}"/>
      <circle cx="132" cy="48" r="2.5" fill="${red}"/><circle cx="132" cy="122" r="2.5" fill="${red}"/>
      <line x1="122" y1="12" x2="122" y2="158" ${S(blue, 0.8, 4)}/>`;
      return `<rect width="360" height="170" fill="${dk(c, 0.45)}"/>
      <rect x="14" y="12" width="332" height="146" rx="42" fill="${lt(c, 0.78)}"/>${mirror(end)}
      <line x1="180" y1="12" x2="180" y2="158" ${S(red, 0.85, 4)}/><circle cx="180" cy="85" r="21" ${S(blue, 0.85, 1.5)}/><circle cx="180" cy="85" r="2.5" fill="${blue}"/>
      <rect x="14" y="12" width="332" height="146" rx="42" ${S(dk(c, 0.2), 1, 4)}/>`;
    },
    padel: (c) => {
      const end = `<line x1="90" y1="20" x2="90" y2="150" ${L(0.75)}/><line x1="90" y1="85" x2="180" y2="85" ${L(0.75)}/>
      <path d="M58 20H50V150H58M50 20V30M50 140V150" ${L(0.45, 6)}/><path d="M50 20H96M50 150H96" ${L(0.45, 6)}/>`;
      return `${grad(c, 0.3, 0.5)}<rect x="50" y="20" width="260" height="130" fill="${c}"/>${mirror(end)}
      <rect x="50" y="20" width="260" height="130" ${L(0.3, 1)}/>
      <line x1="180" y1="14" x2="180" y2="156" ${L(0.95, 3)}/>`;
    },
    pickleball: (c) => {
      const end = `<line x1="48" y1="85" x2="138" y2="85" ${L(0.8)}/><line x1="138" y1="25" x2="138" y2="145" ${L(0.8)}/>`;
      return `${grad(c, 0.3, 0.5)}<rect x="48" y="25" width="264" height="120" fill="${c}"/><rect x="138" y="25" width="84" height="120" fill="#fff" fill-opacity=".14"/>
      <rect x="48" y="25" width="264" height="120" ${L(0.8)}/>${mirror(end)}
      <line x1="180" y1="16" x2="180" y2="154" ${L(0.95, 3)}/><circle cx="180" cy="16" r="2.5" fill="#fff"/><circle cx="180" cy="154" r="2.5" fill="#fff"/>`;
    },
    football: (c) => {
      let lines = "";
      let ticks = "";
      for (let k = 0; k <= 20; k++) {
        const x = 38 + k * 14.2;
        lines += `<line x1="${x}" y1="10" x2="${x}" y2="160" ${L(k % 10 === 0 ? 0.8 : 0.45, k === 0 || k === 20 ? 3 : 1.5)}/>`;
      }
      for (let k = 1; k < 100; k++) {
        const x = 38 + k * 2.84;
        if (k % 5) ticks += `<line x1="${x}" y1="66" x2="${x}" y2="71" ${L(0.45, 1)}/><line x1="${x}" y1="99" x2="${x}" y2="104" ${L(0.45, 1)}/>`;
      }
      return `<rect width="360" height="170" fill="${dk(c, 0.4)}"/><rect x="10" y="10" width="340" height="150" fill="${c}"/>${stripes(14.2, 0.04)}
      <rect x="10" y="10" width="28" height="150" fill="#000" fill-opacity=".2"/><rect x="322" y="10" width="28" height="150" fill="#000" fill-opacity=".2"/>
      ${lines}${ticks}<rect x="10" y="10" width="340" height="150" ${L(0.8)}/>
      <line x1="10" y1="76" x2="10" y2="94" stroke="#FACC15" stroke-width="4"/><line x1="350" y1="76" x2="350" y2="94" stroke="#FACC15" stroke-width="4"/>`;
    },
    baseball: (c) => {
      const dirt = "#D6A577";
      const base = (x, y) => `<rect x="${x - 3.5}" y="${y - 3.5}" width="7" height="7" fill="#fff" transform="rotate(45 ${x} ${y})"/>`;
      let mow = "";
      for (let k = 0; k < 12; k++) {
        mow += `<circle cx="180" cy="158" r="${40 + k * 24}" fill="none" stroke="#fff" stroke-opacity=".05" stroke-width="12"/>`;
      }
      return `${grad(c, 0.15, 0.4)}${mow}
      <path d="M46 24A190 190 0 0 1 314 24" fill="none" stroke="${dk(c, 0.55)}" stroke-width="8"/>
      <path d="M180 158L99 77A115 115 0 0 1 261 77Z" fill="${dirt}"/>
      <path d="M180 146L222 106L180 66L138 106Z" fill="${dk(c, 0.15)}"/>
      <line x1="180" y1="158" x2="20" y2="-2" ${L(0.85, 1.5)}/><line x1="180" y1="158" x2="340" y2="-2" ${L(0.85, 1.5)}/>
      <circle cx="180" cy="110" r="8" fill="${dirt}"/><rect x="176" y="109" width="8" height="2" fill="#fff"/>
      <circle cx="180" cy="158" r="13" fill="${dirt}"/>${base(230, 108)}${base(180, 58)}${base(130, 108)}
      <path d="M176 154H184V158L180 162L176 158Z" fill="#fff"/>`;
    },
    table_tennis: (c) => `<rect width="360" height="170" fill="${dk(c, 0.55)}"/>${stripes(20, 0.03)}
      <rect x="87" y="38" width="198" height="110" rx="3" fill="#000" fill-opacity=".3"/>
      <rect x="81" y="30" width="198" height="110" rx="3" fill="${c}"/>
      <rect x="83" y="32" width="194" height="106" ${L(0.95, 3)}/><line x1="83" y1="85" x2="277" y2="85" ${L(0.85, 1.5)}/>
      <line x1="180" y1="22" x2="180" y2="148" stroke="#fff" stroke-width="3.5"/>
      <rect x="177" y="19" width="6" height="6" fill="${dk(c, 0.6)}"/><rect x="177" y="145" width="6" height="6" fill="${dk(c, 0.6)}"/>`,
    cricket: (c) => {
      const oval = "M12 85A168 78 0 1 0 348 85A168 78 0 1 0 12 85Z";
      const stumps = (x) => [80, 85, 90].map((y) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fff"/>`).join("");
      return `${grad(c, 0.05, 0.32)}${stripes(24)}${outside(oval, dk(c, 0.6), 0.7)}
      <path d="${oval}" ${L(0.8, 2.5)}/><ellipse cx="180" cy="85" rx="104" ry="54" ${L(0.5, 1.5)} stroke-dasharray="5 5"/>
      <rect x="136" y="77" width="88" height="16" fill="#E2CF9E"/>
      <line x1="146" y1="71" x2="146" y2="99" ${L(0.95, 1.5)}/><line x1="214" y1="71" x2="214" y2="99" ${L(0.95, 1.5)}/>
      <line x1="141" y1="77" x2="141" y2="93" ${L(0.95, 1.2)}/><line x1="219" y1="77" x2="219" y2="93" ${L(0.95, 1.2)}/>
      ${stumps(141)}${stumps(219)}`;
    },
    badminton: (c) => {
      const end = `<line x1="44" y1="85" x2="140" y2="85" ${L(0.8)}/><line x1="140" y1="23" x2="140" y2="147" ${L(0.8)}/><line x1="59" y1="23" x2="59" y2="147" ${L(0.8)}/>`;
      return `${grad(c, 0.3, 0.5)}<rect x="44" y="23" width="272" height="124" fill="${c}"/>
      <rect x="44" y="23" width="272" height="124" ${L(0.8)}/><line x1="44" y1="32" x2="316" y2="32" ${L(0.8)}/><line x1="44" y1="138" x2="316" y2="138" ${L(0.8)}/>${mirror(end)}
      <line x1="180" y1="14" x2="180" y2="156" ${L(0.95, 3)}/><circle cx="180" cy="14" r="2.5" fill="#fff"/><circle cx="180" cy="156" r="2.5" fill="#fff"/>`;
    },
    squash: (c) => {
      const red = "#EF4444";
      let planks = "";
      for (let y = 6; y < 164; y += 8) planks += `<line x1="60" y1="${y}" x2="300" y2="${y}" stroke="#000" stroke-opacity=".07" stroke-width="1"/>`;
      return `<rect width="360" height="170" fill="${dk(c, 0.5)}"/><rect x="60" y="6" width="240" height="158" fill="${lt(c, 0.12)}"/>${planks}
      <rect x="50" y="6" width="10" height="158" fill="#fff" fill-opacity=".45"/><line x1="60" y1="6" x2="60" y2="164" ${S(red, 0.9, 3)}/>
      <rect x="60" y="2" width="240" height="4" fill="#fff" fill-opacity=".3"/><rect x="60" y="164" width="240" height="4" fill="#fff" fill-opacity=".3"/>
      <rect x="300" y="2" width="5" height="166" fill="#fff" fill-opacity=".6"/>
      <line x1="194" y1="6" x2="194" y2="164" ${S(red, 0.9, 2)}/><line x1="194" y1="85" x2="300" y2="85" ${S(red, 0.9, 2)}/>
      <rect x="194" y="6" width="39" height="39" ${S(red, 0.9, 2)}/><rect x="194" y="125" width="39" height="39" ${S(red, 0.9, 2)}/>`;
    },
    cycling: (c) => `<rect width="360" height="170" fill="${dk(c, 0.5)}"/>
      <path d="${stadium(14, 8, 332, 154)}" fill="${lt(c, 0.18)}"/>
      <path d="${stadium(14, 8, 332, 154)}" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="16"/>
      <path d="${stadium(32, 26, 296, 118)}" ${S("#2563EB", 0.85, 1.8)}/>
      <path d="${stadium(46, 40, 268, 90)}" ${S("#DC2626", 0.9, 1.8)}/>
      <path d="${stadium(51, 45, 258, 80)}" ${S("#0B2227", 0.8, 1.5)}/>
      <path d="${stadium(56, 50, 248, 70)}" fill="#7DD3FC" fill-opacity=".75"/>
      <path d="${stadium(68, 62, 224, 46)}" fill="${dk(c, 0.3)}"/>
      <rect x="236" y="120" width="4" height="42" fill="#fff"/><line x1="238" y1="120" x2="238" y2="162" stroke="#0B2227" stroke-width="1.5"/>`
  };
  var genericSurface = (c) => `${grad(c, 0.02, 0.32)}${stripes(30)}`;
  function sportSurfaceXml(sport, sportColor) {
    var _a;
    const draw = (_a = SURFACES[sport == null ? void 0 : sport.toLowerCase()]) != null ? _a : genericSurface;
    const color = sportColor.slice(0, 7);
    const { cx, cy, r } = ICON_DISC;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SURFACE_WIDTH} ${SURFACE_HEIGHT}" preserveAspectRatio="xMidYMid slice">${draw(color)}<circle cx="${cx}" cy="${cy}" r="${r}" fill="${dk(color, 0.55)}" fill-opacity=".9" stroke="#fff" stroke-opacity=".7" stroke-width="1.5"/></svg>`;
  }
  return __toCommonJS(sportSurfaces_exports);
})();
/* ---------- end of generated block ---------- */

(function () {
  "use strict";

  /** Sport icon shapes (24 x 24), matching the app's getSportIcon choices. */
  var ICON_PATHS = {
      "basketball": "M2.34,14.63C2.94,14.41 3.56,14.3 4.22,14.3C5.56,14.3 6.73,14.72 7.73,15.56L4.59,18.7C3.53,17.5 2.78,16.13 2.34,14.63M15.56,9.8C17.53,11.27 19.66,11.63 21.94,10.88C21.97,11.09 22,11.47 22,12C22,13.03 21.75,14.18 21.28,15.45C20.81,16.71 20.23,17.73 19.55,18.5L13.22,12.19L15.56,9.8M8.77,16.64C9.83,18.17 10.05,19.84 9.42,21.66C8,21.25 6.73,20.61 5.67,19.73L8.77,16.64M12.19,13.22L18.5,19.55C16.33,21.45 13.78,22.25 10.88,21.94C11.09,21.28 11.2,20.56 11.2,19.78C11.2,19.16 11.06,18.43 10.78,17.6C10.5,16.77 10.17,16.09 9.8,15.56L12.19,13.22M8.81,14.5C7.88,13.67 6.8,13.15 5.58,12.91C4.36,12.68 3.19,12.75 2.06,13.13C2.03,12.91 2,12.53 2,12C2,10.97 2.25,9.82 2.72,8.55C3.19,7.29 3.77,6.27 4.45,5.5L11.11,12.19L8.81,14.5M15.56,7.73C14.22,6.08 13.91,4.28 14.63,2.34C15.25,2.5 15.96,2.8 16.76,3.26C17.55,3.71 18.2,4.16 18.7,4.59L15.56,7.73M21.66,9.38C21.06,9.59 20.44,9.7 19.78,9.7C18.69,9.7 17.64,9.38 16.64,8.72L19.73,5.67C20.61,6.77 21.25,8 21.66,9.38M12.19,11.11L5.5,4.45C7.67,2.55 10.22,1.75 13.13,2.06C12.91,2.72 12.8,3.44 12.8,4.22C12.8,4.94 12.96,5.75 13.29,6.66C13.62,7.56 14,8.28 14.5,8.81L12.19,11.11Z",
      "soccer": "M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12M9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75M12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03M5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21M11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66S8.87 4.57 9.65 4.35L11 5.29M14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35M4.93 4.93C3 6.89 2 9.25 2 12S3 17.11 4.93 19.07 9.25 22 12 22 17.11 21 19.07 19.07 22 14.75 22 12 21 6.89 19.07 4.93 14.75 2 12 2 6.89 3 4.93 4.93Z",
      "swimming": "M2,18C4.22,17 6.44,16 8.67,16C10.89,16 13.11,18 15.33,18C17.56,18 19.78,16 22,16V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V18M8.67,13C7.89,13 7.12,13.12 6.35,13.32L11.27,9.88L10.23,8.64C10.09,8.47 10,8.24 10,8C10,7.66 10.17,7.35 10.44,7.17L16.16,3.17L17.31,4.8L12.47,8.19L17.7,14.42C16.91,14.75 16.12,15 15.33,15C13.11,15 10.89,13 8.67,13M18,7A2,2 0 0,1 20,9A2,2 0 0,1 18,11A2,2 0 0,1 16,9A2,2 0 0,1 18,7Z",
      "tennis": "M18,15A4,4 0 0,1 22,19A4,4 0 0,1 18,23A4,4 0 0,1 14,19A4,4 0 0,1 18,15M18,17A2,2 0 0,0 16,19A2,2 0 0,0 18,21A2,2 0 0,0 20,19A2,2 0 0,0 18,17M6.05,14.54C6.05,14.54 7.46,13.12 7.47,10.3C7.11,8.11 7.97,5.54 9.94,3.58C12.87,0.65 17.14,0.17 19.5,2.5C21.83,4.86 21.35,9.13 18.42,12.06C16.46,14.03 13.89,14.89 11.7,14.53C8.88,14.54 7.46,15.95 7.46,15.95L3.22,20.19L1.81,18.78L6.05,14.54M18.07,3.93C16.5,2.37 13.5,2.84 11.35,5C9.21,7.14 8.73,10.15 10.29,11.71C11.86,13.27 14.86,12.79 17,10.65C19.16,8.5 19.63,5.5 18.07,3.93Z",
      "volleyball": "M19.04 4.85C17.34 3.2 15.33 2.25 13 2V5.62L22 10.8C21.72 8.5 20.73 6.5 19.04 4.85M12 22C15.44 22 18.16 20.62 20.17 17.86L17.06 16L8.07 21.2C9.32 21.73 10.64 22 12 22M13 11.41L21.15 16.07C21.59 15.13 21.88 14.14 22 13.11L13 7.93V11.41M3.88 17.81C4.54 18.72 5.26 19.46 6.05 20L15.04 14.9L12 13.15L3.88 17.81M11.04 2C10 2.09 9 2.36 8 2.8V13.15L11.04 11.41V2M2 12C2 13.39 2.3 14.77 2.89 16.12L6 14.28V4C3.33 6 2 8.65 2 12Z",
      "running": "M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z",
      "golf": "M19.5,18A1.5,1.5 0 0,1 21,19.5A1.5,1.5 0 0,1 19.5,21A1.5,1.5 0 0,1 18,19.5A1.5,1.5 0 0,1 19.5,18M17,5.92L11,9V18.03C13.84,18.19 16,19 16,20C16,21.1 13.31,22 10,22C6.69,22 4,21.1 4,20C4,19.26 5.21,18.62 7,18.27V20H9V2L17,5.92Z",
      "hockey": "M17.68 4H14.3L12.56 8C12.53 8.04 12.45 8.22 12.31 8.5S12.06 9.04 12 9.19L9.7 4H6.32L10.41 12.84C10.5 13.06 10.73 13.59 11.11 14.43C11.5 15.28 11.78 15.91 12 16.35L13.41 19.44C13.6 19.78 13.89 19.95 14.3 19.95L19 20V16H15L13.6 12.84L17.68 4M20.03 16V20H22V17C22 16.73 21.91 16.5 21.72 16.28C21.53 16.08 21.3 16 21 16H20.03M5 16V20L9.7 19.95C10.11 19.95 10.4 19.78 10.59 19.44L11.44 17.5L9.84 14.06L9 16H5M2 20H3.97V16H3C2.7 16 2.47 16.08 2.28 16.28C2.09 16.5 2 16.73 2 17V20Z",
      "padel": "M18,15A4,4 0 0,1 22,19A4,4 0 0,1 18,23A4,4 0 0,1 14,19A4,4 0 0,1 18,15M18,17A2,2 0 0,0 16,19A2,2 0 0,0 18,21A2,2 0 0,0 20,19A2,2 0 0,0 18,17M6.05,14.54C6.05,14.54 7.46,13.12 7.47,10.3C7.11,8.11 7.97,5.54 9.94,3.58C12.87,0.65 17.14,0.17 19.5,2.5C21.83,4.86 21.35,9.13 18.42,12.06C16.46,14.03 13.89,14.89 11.7,14.53C8.88,14.54 7.46,15.95 7.46,15.95L3.22,20.19L1.81,18.78L6.05,14.54M18.07,3.93C16.5,2.37 13.5,2.84 11.35,5C9.21,7.14 8.73,10.15 10.29,11.71C11.86,13.27 14.86,12.79 17,10.65C19.16,8.5 19.63,5.5 18.07,3.93Z",
      "pickleball": "M18.5,14C19.9,14 21,15.1 21,16.5C21,17.9 19.9,19 18.5,19C17.1,19 16,17.9 16,16.5C16,15.1 17.1,14 18.5,14M7,15C7,15 8,16 8,17V20.5C8,21.3 8.7,22 9.5,22C10.3,22 11,21.3 11,20.5V17C11,16 12,15 12,15H7M8,14H11C11,14 16,14 16,9C16,4 12,2 9.5,2C7,2 3,4 3,9C3,14 8,14 8,14Z",
      "football": "M8.39 21L3 15.61C3 16.7 3.04 17.71 3.2 18.63C3.35 19.55 3.5 20.1 3.71 20.29C3.9 20.5 4.44 20.65 5.35 20.81S7.27 21 8.39 21M15.5 9.89L9.89 15.5L8.5 14.11L14.11 8.5L15.5 9.89M3.29 13.08L10.92 20.71C13.7 20.21 15.9 19.15 17.53 17.53C19.15 15.9 20.21 13.7 20.71 10.92L13.08 3.29C10.3 3.79 8.1 4.85 6.47 6.47S3.79 10.3 3.29 13.08M15.61 3L21 8.39C21 7.3 20.96 6.29 20.81 5.37C20.65 4.45 20.5 3.9 20.29 3.71C20.1 3.5 19.56 3.35 18.65 3.2S16.73 3 15.61 3Z",
      "baseball": "M12,2C9.5,2 7.25,2.9 5.5,4.4C6,4.81 6.41,5.27 6.8,5.76L7.89,5.13L8.89,6.87L7.89,7.44C8.45,8.53 8.82,9.73 8.95,11H10V12L10,13H8.95C8.82,14.27 8.45,15.47 7.89,16.56L8.89,17.13L7.89,18.87L6.8,18.24C6.41,18.73 6,19.19 5.5,19.6C7.25,21.1 9.5,22 12,22C14.5,22 16.75,21.1 18.5,19.6C18,19.19 17.59,18.73 17.19,18.24L16.11,18.87L15.11,17.13L16.11,16.55C15.55,15.47 15.18,14.27 15.05,13H14V11H15.05C15.18,9.73 15.55,8.53 16.11,7.45L15.11,6.87L16.11,5.13L17.19,5.76C17.59,5.27 18,4.81 18.5,4.4C16.75,2.9 14.5,2 12,2M4.12,5.85C2.79,7.55 2,9.68 2,12C2,14.32 2.79,16.45 4.12,18.15C4.46,17.87 4.76,17.55 5.05,17.22L4.43,16.87L5.43,15.13L6.16,15.56C6.55,14.77 6.82,13.91 6.93,13H6V12L6,11H6.93C6.82,10.09 6.55,9.23 6.16,8.44L5.43,8.87L4.43,7.13L5.05,6.78C4.76,6.45 4.46,6.13 4.12,5.85M19.88,5.85C19.54,6.13 19.24,6.45 18.95,6.78L19.57,7.13L18.57,8.87L17.84,8.44C17.45,9.23 17.18,10.09 17.07,11H18V13H17.07C17.18,13.91 17.45,14.77 17.84,15.56L18.57,15.13L19.57,16.87L18.95,17.22C19.24,17.55 19.54,17.87 19.88,18.15C21.21,16.45 22,14.32 22,12C22,9.68 21.21,7.55 19.88,5.85Z",
      "table_tennis": "M18.5,14C19.9,14 21,15.1 21,16.5C21,17.9 19.9,19 18.5,19C17.1,19 16,17.9 16,16.5C16,15.1 17.1,14 18.5,14M7,15C7,15 8,16 8,17V20.5C8,21.3 8.7,22 9.5,22C10.3,22 11,21.3 11,20.5V17C11,16 12,15 12,15H7M8,14H11C11,14 16,14 16,9C16,4 12,2 9.5,2C7,2 3,4 3,9C3,14 8,14 8,14Z",
      "cricket": "M14.34,17.77L15.75,16.36L20,20.58L18.56,22L14.34,17.77M18.5,2A3.5,3.5 0 0,1 22,5.5A3.5,3.5 0 0,1 18.5,9A3.5,3.5 0 0,1 15,5.5A3.5,3.5 0 0,1 18.5,2M2.24,7.11L5.07,4.28C5.46,3.89 6.09,3.89 6.5,4.28L14.97,12.77C15.36,13.16 15.36,13.79 14.97,14.18L12.14,17C11.75,17.4 11.12,17.4 10.72,17L2.24,8.53C1.85,8.13 1.85,7.5 2.24,7.11Z",
      "badminton": "M12.3,2C11.33,2.03 10.58,2.84 10.61,3.8C10.62,4.04 10.67,4.27 10.77,4.5L11.06,5.14V5.14C11.1,5.27 11.03,5.41 10.89,5.45C10.8,5.5 10.7,5.45 10.63,5.37L10.21,4.82C9.88,4.4 9.38,4.14 8.85,4.13C7.88,4.11 7.08,4.88 7.06,5.84C7.05,6.26 7.19,6.66 7.45,7L7.87,7.5H7.88C7.96,7.63 7.93,7.79 7.82,7.87C7.73,7.94 7.61,7.94 7.53,7.87L7,7.45C6.66,7.19 6.25,7.05 5.84,7.06C4.88,7.08 4.11,7.88 4.13,8.85C4.14,9.38 4.4,9.88 4.82,10.21L5.39,10.65C5.5,10.75 5.5,10.91 5.38,11C5.31,11.07 5.21,11.09 5.12,11.05H5.11L4.5,10.77C4.27,10.68 4.04,10.62 3.8,10.61C2.84,10.58 2.03,11.34 2,12.31C2,13.03 2.4,13.69 3.06,13.97L14.45,19.04L19.04,14.45L13.97,3.06C13.69,2.39 13,1.97 12.3,2M13.13,6.1C13.55,6.09 13.93,6.33 14.09,6.71L17.14,13.55L13.19,9.61L12.26,7.5C11.96,6.87 12.42,6.12 13.13,6.1M9.85,8.85C10.12,8.85 10.37,8.95 10.56,9.15L15.37,13.96C15.77,14.34 15.78,14.97 15.4,15.37C15,15.77 14.38,15.78 13.96,15.37L9.15,10.56C8.75,10.18 8.74,9.54 9.13,9.15C9.32,8.95 9.58,8.85 9.85,8.85M7.13,12.17C7.26,12.17 7.4,12.21 7.5,12.26L9.63,13.2L13.57,17.14L6.71,14.09C5.69,13.65 6.03,12.14 7.13,12.17M20.28,16.04L16.04,20.28L16.89,21.13C17.65,21.88 18.75,22.17 19.78,21.9C20.81,21.62 21.62,20.81 21.9,19.78C22.17,18.75 21.88,17.65 21.13,16.89L20.28,16.04Z",
      "squash": "M18.5,16C19.9,16 21,17.1 21,18.5C21,19.9 19.9,21 18.5,21C17.1,21 16,19.9 16,18.5C16,17.1 17.1,16 18.5,16M10.5,1C3,1 3,3.7 3,9.8C3,13.2 6.4,16.9 9,18.1V23H12V18.1C14.6,16.9 18,13.2 18,9.8C18,3.6 18,1 10.5,1M15.4,4.2C15.7,4.6 15.8,5.2 15.9,6H15V3.8C15.2,3.9 15.3,4.1 15.4,4.2M16,9.8C16,9.9 16,10 16,10H15V7H16C16,7.8 16,8.7 16,9.8M14,14H11V11H14V14M7,14V11H10V14H7M5,9.8C5,8.8 5,7.9 5,7H6V10H5C5,9.9 5,9.8 5,9.8M7,7H10V10H7V7M11,3C12.4,3 13.4,3.2 14,3.3V6H11V3M10,6H7V3.4C7.6,3.2 8.6,3 10,3V6M11,10V7H14V10H11M6,3.8V6H5.1C5.2,5.2 5.3,4.6 5.6,4.2C5.7,4.1 5.8,4 6,3.8M5.2,11H6V12.7C5.7,12.1 5.4,11.6 5.2,11M8,15H10V16.3L9.8,16.2C9.2,16 8.6,15.5 8,15M11.2,16.3H11V15H13C12.4,15.5 11.8,16 11.2,16.3M15,12.7V11H15.8C15.6,11.5 15.3,12.1 15,12.7Z",
      "cycling": "M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,9.85L13.07,7.5M19,20.5A3.5,3.5 0 0,1 15.5,17A3.5,3.5 0 0,1 19,13.5A3.5,3.5 0 0,1 22.5,17A3.5,3.5 0 0,1 19,20.5M19,12A5,5 0 0,0 14,17A5,5 0 0,0 19,22A5,5 0 0,0 24,17A5,5 0 0,0 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z",
      "default": "M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z"
  };

  var core = window.LetsPlaySportSurfacesCore;

  /**
   * Returns the banner artwork for a sport as an <svg> element. The markup is built only from the
   * constants in this file (the sport name is used as a lookup key, never written into it), and
   * parsed with DOMParser rather than innerHTML.
   */
  function svg(sport, color) {
    var key = String(sport || "").toLowerCase();
    var disc = core.ICON_DISC;
    var path = ICON_PATHS[key] || ICON_PATHS["default"];
    var iconMarkup =
      '<g transform="translate(' + disc.cx + " " + disc.cy + ") scale(" + disc.iconSize / 24 +
      ') translate(-12 -12)"><path d="' + path + '" fill="#fff"/></g>';
    var markup = core.sportSurfaceXml(key, color).replace("</svg>", iconMarkup + "</svg>");
    var doc = new DOMParser().parseFromString(markup, "image/svg+xml");
    var el = document.importNode(doc.documentElement, true);
    el.setAttribute("aria-hidden", "true");
    el.setAttribute("focusable", "false");
    return el;
  }

  window.LetsPlaySportSurfaces = { svg: svg };
})();
