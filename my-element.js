/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
        this.shortCode = 'welleniederrhein';
    }
    render() {
        return html `
      <link rel="stylesheet" href="https://www.radiokoeln.de/assets/themes/${this.shortCode}/${this.shortCode}.css" />
      
      <div class="bg min-h-full" style="min-height: 100%; background-color: #F5F5F5;">
				<div class="w-full bg-white px-4 py-8 .news-teaser" style="width: 100%; background-color: #fff; padding: 16px 32px;" >
					<h2 class="news-teaser__title mb-1 font-bold text-lg">Kommende Veranstaltungen</h2>
					<p>
						Aufgrund der aktuellen Corona-Lage kann es sein, dass einzelne Veranstaltungen nicht stattfinden können. Wir übernehmen keine Gewähr für die Einträge.
					</p>
					<p>
						Über den Button "Eigene einreichen" könnt ihr uns auch Events von euch melden. Diese müssen von der Redaktion noch freigeschaltet werden, bevor sie für alle sichtbar sind.
					</p>
					<button class="w-full py-2 mt-4 font-bold border-2 button primary-text text-darken-1 primary-border">
						Eigene Veranstaltung einreichen
					</button>
				</div>

				<div id="veranstaltungskalender-sticky-nav" class="sticky -top-1 flex flex-col z-[100]">
					<div class="flex flex-row justify-between px-4 py-1">
						<span class="font-bold">14. Januar</span>
						<button type="button" onClick="">
							<span class="text-primary-color primary-text text-darken-1 font-bold">Filter</span>
						</button>
					</div>
					<div class="w-full h-[4px] primary button mt-1" />
				</div>

				<div class="bg-white card mb-4">
					<div class="w-full aspect-[1.5/1]">
						<img src="//www.radioessen.de/externalimages/?source=jpg529/kennedyplatz-sonntagabend.jpg&crop=0x242x4031x2520&resize=640x400&dt=202305142120270" alt="" class="w-full h-full min-h-full min-w-full opject-cover" />
					</div>
					<div class="w-full p-4 flex flex-col ">
						<h3 class="text-lg font-bold">Rock im Park</h3>
						<p>Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße...</p>
						<p class="mt-8 self-end text-sm primary-text text-darken-1 font-bold">Mehr erfahren</p>
					</div>
				</div>

				<div class="bg-white card mb-4">
					<div class="w-full aspect-[1.5/1]">
						<img src="//www.radioessen.de/externalimages/?source=jpg529/kennedyplatz-sonntagabend.jpg&crop=0x242x4031x2520&resize=640x400&dt=202305142120270" alt="" class="w-full h-full min-h-full min-w-full opject-cover" />
					</div>
					<div class="w-full p-4 flex flex-col">
						<h3 class="text-lg font-bold">Rock im Park</h3>
						<p>Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße...</p>
						<p class="mt-8 self-end text-sm primary-text text-darken-1 font-bold">Mehr erfahren</p>
					</div>
				</div>

				<div class="bg-white card mb-4">
					<div class="w-full aspect-[1.5/1]">
						<img src="//www.radioessen.de/externalimages/?source=jpg529/kennedyplatz-sonntagabend.jpg&crop=0x242x4031x2520&resize=640x400&dt=202305142120270" alt="" class="w-full h-full min-h-full min-w-full opject-cover" />
					</div>
					<div class="w-full p-4 flex flex-col">
						<h3 class="text-lg font-bold">Rock im Park</h3>
						<p>Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße...</p>
						<p class="mt-8 self-end text-sm primary-text text-darken-1 font-bold">Mehr erfahren</p>
					</div>
				</div>

				<div class="bg-white card mb-4">
					<div class="w-full aspect-[1.5/1]">
						<img src="//www.radioessen.de/externalimages/?source=jpg529/kennedyplatz-sonntagabend.jpg&crop=0x242x4031x2520&resize=640x400&dt=202305142120270" alt="" class="w-full h-full min-h-full min-w-full opject-cover" />
					</div>
					<div class="w-full p-4 flex flex-col">
						<h3 class="text-lg font-bold">Rock im Park</h3>
						<p>Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße...</p>
						<p class="mt-8 self-end text-sm primary-text text-darken-1 font-bold">Mehr erfahren</p>
					</div>
				</div>
			</div>
			<div id="veranstaltungskalender-sidebar-overlay" />
			<div id="veranstaltungskalender-sidebar">
				<div class="primary w-full p-4">
					<button type="button" @click="setSidebarOpen(false)">
						<p class="text-white text-lg">X</p>
					</button>
				</div>
				<div class="p-4 ">
					<input type="search" placeholder="Suchbegriff eingeben..." />
				</div>

				<div class="flex flex-col">
					<div class="border-b font-bold border-black border-opacity-20 p-4 flex flex-row justify-between">
						Zeitraum
						<p>S</p>
					</div>
					<div class="border-b font-bold border-black border-opacity-20 p-4 flex flex-row justify-between">
						Kategorien
						<p>S</p>
					</div>
					<div class="border-b font-bold border-black border-opacity-20 p-4 flex flex-row justify-between">
						Kosten
						<p>S</p>
					</div>
				</div>
			</div>
      <slot></slot>
    `;
    }
    /* private _onClick() {
      this.count++;
      this.dispatchEvent(new CustomEvent('count-changed'));
    } */
    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name) {
        return `Hello, ${name}`;
    }
};
MyElement.styles = css `
    /*
! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
*/

    body {
      margin: 0;
      font-family: Arial, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
    /*
	1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
	2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
	*/

    *,
    ::before,
    ::after {
      box-sizing: border-box;
      /* 1 */
      border-width: 0;
      /* 2 */
      border-style: solid;
      /* 2 */
      border-color: #e5e7eb;
      /* 2 */
    }

    ::before,
    ::after {
      --tw-content: '';
    }

    /*
	1. Use a consistent sensible line-height in all browsers.
	2. Prevent adjustments of font size after orientation changes in iOS.
	3. Use a more readable tab size.
	4. Use the user's configured \`sans\` font-family by default.
	5. Use the user's configured \`sans\` font-feature-settings by default.
	6. Use the user's configured \`sans\` font-variation-settings by default.
	*/

    html {
      line-height: 1.5;
      /* 1 */
      -webkit-text-size-adjust: 100%;
      /* 2 */
      /* 3 */
      tab-size: 4;
      /* 3 */
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      /* 4 */
      -webkit-font-feature-settings: normal;
      font-feature-settings: normal;
      /* 5 */
      font-variation-settings: normal;
      /* 6 */
    }
    article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}html,button,input,select,textarea{font-family:sans-serif;}body{margin:0;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}h2{font-size:1.5em;margin:0.83em 0;}h3{font-size:1.17em;margin:1em 0;}h4{font-size:1em;margin:1.33em 0;}h5{font-size:0.83em;margin:1.67em 0;}h6{font-size:0.75em;margin:2.33em 0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}blockquote{margin:1em 40px;}dfn{font-style:italic;}mark{background:#ff0;color:#000;}p,pre{margin:1em 0;}code,kbd,pre,samp{font-family:monospace,serif;_font-family:'courier new',monospace;font-size:1em;}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word;}q{quotes:none;}q:before,q:after{content:'';content:none;}small{font-size:75%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}dl,menu,ol,ul{margin:1em 0;}dd{margin:0 0 0 40px;}menu,ol,ul{padding:0 0 0 40px;}nav ul,nav ol{list-style:none;list-style-image:none;}img{border:0;-ms-interpolation-mode:bicubic;}svg:not(:root){overflow:hidden;}figure{margin:0;}form{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;white-space:normal;*margin-left:-7px;}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle;}button,input{line-height:normal;}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;*overflow:visible;}button[disabled],input[disabled]{cursor:default;}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;*height:13px;*width:13px;}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}

    /*
	1. Remove the margin in all browsers.
	2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
	*/

    body {
      margin: 0;
      /* 1 */
      line-height: inherit;
      /* 2 */
    }

    /*
	1. Add the correct height in Firefox.
	2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
	3. Ensure horizontal rules are visible by default.
	*/

    hr {
      height: 0;
      /* 1 */
      color: inherit;
      /* 2 */
      border-top-width: 1px;
      /* 3 */
    }

    /*
	Add the correct text decoration in Chrome, Edge, and Safari.
	*/

    abbr:where([title]) {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }

    /*
	Remove the default font size and weight for headings.
	*/

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    /*
	Reset links to optimize for opt-in styling instead of opt-out.
	*/

    a {
      color: inherit;
      text-decoration: inherit;
    }

    /*
	Add the correct font weight in Edge and Safari.
	*/

    b,
    strong {
      font-weight: bolder;
    }

    /*
	1. Use the user's configured \`mono\` font family by default.
	2. Correct the odd \`em\` font sizing in all browsers.
	*/

    code,
    kbd,
    samp,
    pre {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      /* 1 */
      font-size: 1em;
      /* 2 */
    }

    /*
	Add the correct font size in all browsers.
	*/

    small {
      font-size: 80%;
    }

    /*
	Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
	*/

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    /*
	1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
	2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
	3. Remove gaps between table borders by default.
	*/

    table {
      text-indent: 0;
      /* 1 */
      border-color: inherit;
      /* 2 */
      border-collapse: collapse;
      /* 3 */
    }

    /*
	1. Change the font styles in all browsers.
	2. Remove the margin in Firefox and Safari.
	3. Remove default padding in all browsers.
	*/

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      /* 1 */
      font-size: 100%;
      /* 1 */
      font-weight: inherit;
      /* 1 */
      line-height: inherit;
      /* 1 */
      color: inherit;
      /* 1 */
      margin: 0;
      /* 2 */
      padding: 0;
      /* 3 */
    }

    /*
	Remove the inheritance of text transform in Edge and Firefox.
	*/

    button,
    select {
      text-transform: none;
    }

    /*
	1. Correct the inability to style clickable types in iOS and Safari.
	2. Remove default button styles.
	*/

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      -webkit-appearance: button;
      /* 1 */
      background-color: transparent;
      /* 2 */
      background-image: none;
      /* 2 */
    }

    /*
	Use the modern Firefox focus style for all focusable elements.
	*/

    :-moz-focusring {
      outline: auto;
    }

    /*
	Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
	*/

    :-moz-ui-invalid {
      box-shadow: none;
    }

    /*
	Add the correct vertical alignment in Chrome and Firefox.
	*/

    progress {
      vertical-align: baseline;
    }

    /*
	Correct the cursor style of increment and decrement buttons in Safari.
	*/

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      height: auto;
    }

    /*
	1. Correct the odd appearance in Chrome and Safari.
	2. Correct the outline style in Safari.
	*/

    [type='search'] {
      -webkit-appearance: textfield;
      /* 1 */
      outline-offset: -2px;
      /* 2 */
    }

    /*
	Remove the inner padding in Chrome and Safari on macOS.
	*/

    ::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    /*
	1. Correct the inability to style clickable types in iOS and Safari.
	2. Change font properties to \`inherit\` in Safari.
	*/

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      /* 1 */
      font: inherit;
      /* 2 */
    }

    /*
	Add the correct display in Chrome and Safari.
	*/

    summary {
      display: list-item;
    }

    /*
	Removes the default spacing and border for appropriate elements.
	*/

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    fieldset {
      margin: 0;
      padding: 0;
    }

    legend {
      padding: 0;
    }

    ol,
    ul,
    menu {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    :root, :host, html, body, p {
      font-size: 16px;
    }

    /*
	Prevent resizing textareas horizontally by default.
	*/

    textarea {
      resize: vertical;
    }

    /*
	1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
	2. Set the default placeholder color to the user's configured gray 400 color.
	*/

    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
      opacity: 1;
      /* 1 */
      color: #9ca3af;
      /* 2 */
    }

    input::placeholder,
    textarea::placeholder {
      opacity: 1;
      /* 1 */
      color: #9ca3af;
      /* 2 */
    }

    /*
	Set the default cursor for buttons.
	*/

    button,
    [role="button"] {
      cursor: pointer;
    }

    /*
	Make sure disabled buttons don't get the pointer cursor.
	*/

    :disabled {
      cursor: default;
    }

    /*
	1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
	2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
	   This can trigger a poorly considered lint error in some tools but is included by design.
	*/

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      /* 1 */
      vertical-align: middle;
      /* 2 */
    }

    /*
	Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
	*/

    img,
    video {
      max-width: 100%;
      height: auto;
    }

    /* Make elements with the HTML hidden attribute stay hidden by default */

    [hidden] {
      display: none;
    }

    *, ::before, ::after {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
    }

    ::-webkit-backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
    }

    ::backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
    }

    .sticky {
      position: -webkit-sticky;
      position: sticky;
    }

    .-top-1 {
      top: -0.25rem;
    }

    .z-\\[100\\] {
      z-index: 100;
    }

    .mb-1 {
      margin-bottom: 0.25rem;
    }

    .mb-4 {
      margin-bottom: 1rem;
    }

    .mt-1 {
      margin-top: 0.25rem;
    }

    .mt-4 {
      margin-top: 1rem;
    }

    .mt-8 {
      margin-top: 2rem;
    }

    .flex {
      display: flex;
    }

    .aspect-\\[1\\.5\\/1\\] {
      aspect-ratio: 1.5/1;
    }

    .h-\\[4px\\] {
      height: 4px;
    }

    .h-full {
      height: 100%;
    }

    .min-h-full {
      min-height: 100%;
    }

    .w-full {
      width: 100%;
    }

    .min-w-full {
      min-width: 100%;
    }

    .resize {
      resize: both;
    }

    .flex-row {
      flex-direction: row;
    }

    .flex-col {
      flex-direction: column;
    }

    .justify-between {
      justify-content: space-between;
    }

    .self-end {
      align-self: flex-end;
    }

    .border-2 {
      border-width: 2px;
    }

    .border-b {
      border-bottom-width: 1px;
    }

    .border-black {
      --tw-border-opacity: 1;
      border-color: rgb(0 0 0 / var(--tw-border-opacity));
    }

    .border-opacity-20 {
      --tw-border-opacity: 0.2;
    }

    .bg-white {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }

    .p-4 {
      padding: 1rem;
    }

    .px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .py-1 {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }

    .py-2 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .py-8 {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    .text-sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    .font-bold {
      font-weight: 700;
    }

    .text-white {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }

    html, body {
      background: #f5f5f5;
    }

    .bg {
      background-color: #F5F5F5;
    }

    .button {
      border-color: currentColor;
    }

    #veranstaltungskalender-sticky-nav {
      margin-top: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    #veranstaltungskalender-sticky-nav.is-pinned {
      padding-top: 0px;
      padding-bottom: 0px;
      padding-top: 1.5rem;
      background-color: #fff;
    }

    #veranstaltungskalender-sidebar-overlay {
      pointer-events: none;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 110;
      height: 100%;
      min-height: 100%;
      width: 100%;
      overflow: hidden;
      background-color: rgb(0 0 0 / var(--tw-bg-opacity));
      --tw-bg-opacity: 0.5;
      opacity: 0;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    #veranstaltungskalender-sidebar-overlay.is-open {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 110;
      height: 100%;
      min-height: 100%;
      width: 100%;
      overflow: hidden;
      background-color: rgb(0 0 0 / var(--tw-bg-opacity));
      --tw-bg-opacity: 0.5;
      opacity: 1;
    }

    #veranstaltungskalender-sidebar {
      position: fixed;
      top: 0px;
      right: -100%;
      bottom: 0px;
      z-index: 120;
      height: 100%;
      width: 90%;
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    #veranstaltungskalender-sidebar.is-open {
      position: fixed;
      top: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 120;
      height: 100%;
      width: 90%;
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
  `;
__decorate([
    property()
], MyElement.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
__decorate([
    property()
], MyElement.prototype, "shortCode", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=my-element.js.map