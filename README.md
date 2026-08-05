# Wonder Story Lab

An AI story-writing lesson for seven-year-olds, in two classes.

**Class 1 · Image Maker** — the child looks at two scenes, puts them in order,
answers five questions about the scene they want, and an AI draws it.
**Class 2 · Story Builder** — they tell the story of each scene out loud, one
sentence at a time, and hand the finished story card in.

Built for tablets and PCs. No screen scrolls: every layout divides the height it
is given, so the whole activity is on screen at once.

---

## Running it

The pages are plain HTML with no build step, but they must be **served over
HTTP** — not opened from the file system:

```bash
# any static server will do
npx serve .
# or
python -m http.server 8000
```

Then open:

| | |
|---|---|
| `teacher.html` | teacher view — start a class, see results, export story cards |
| `student.html` | the lesson itself |

Opening the files directly (`file://`) mostly works, but the teacher's PDF export
cannot: reading pixels back out of a canvas that has drawn a local image is
blocked unless the page and the image share an origin.

`student.html` accepts a starting screen in the hash, which is how the teacher
view opens straight into Class 2:

```
student.html                 → the cover
student.html#storyBuilder    → Class 2, with a finished Class 1 storyboard ready
```

---

## Files

```
teacher.html      teacher view. Screen markup, its own CSS, all of its logic.
student.html      the lesson. Eleven screens, the speech sheets, the AI stand-in.
wsl-core.css      the design system and every shared screen. Both pages load it.
wsl-icons.js      the icon set, drawn as inline SVG.
assets/           pictures, fonts, audio, the intro video
docs/             the developer spec and the design references
```

Both pages keep their JavaScript inline and share nothing but `wsl-core.css` and
`wsl-icons.js`. That is deliberate: the two views are used by different people at
different times, and a shared script would have coupled them for no gain.

### The design system

`wsl-core.css` opens with the tokens everything else is written in — colour,
spacing, radii, shadows, and a two-audience type scale:

* `--fs-micro` / `--fs-sm` — chrome. Labels, counts, captions.
* `--fs-body` / `--fs-read` / `--fs-lg` — anything a seven-year-old has to read
  or tap.

If you are adding a screen, take sizes from that scale rather than picking px.
The same goes for `--action-btn-h`, which keeps every decision button the same
height whether it sits in an action bar, a full-screen sheet, or on the finish
screen.

---

## What is stubbed

Three things stand in for services that do not exist yet. Each is marked `TODO`
in the source.

**Image generation** (`student.html`, `generateSingleAiScene`) — a timeout, then
one of two prepared pictures. The loading ring loops rather than filling: the
real service will not say how far along it is, and a percentage would promise a
finish time nobody can keep. Replacing the call needs nothing else changed — the
ring runs until `state.aiGenerating` goes false.

**Sentence checking** (`student.html`, `applyStoryJudgement`) — a local pass that
fixes the spelling and grammar it recognises. Capital letters and full stops are
applied silently, because speech recognition never returns either and a child who
spoke a perfect sentence should not be told it was corrected.

**Which outcome the check returns** (`student.html`, `SCRIPTED_OUTCOMES`) — fixed
by which slot the sentence is in, so every state of the *Let's Check!* screen can
be walked in one run. Delete that table and the check's own answer stands.

The class roster (`teacher.html`, `CLASS_ROSTER`) and the results shown for every
student (`RESULT_SCENES`, `RESULT_STORY`) are also placeholders. The names in
there are invented — **do not commit real student data.**

---

## The export

The teacher can save story cards as PDFs: one child from their detail page, or
several at once from the results page, zipped.

It is written out by hand rather than pulled from a library, so the page keeps
working with no network and nothing vendored:

* the card is drawn on a canvas, so there are no PDF fonts to embed
* the canvas goes into the PDF as a single JPEG (`DCTDecode`)
* the ZIP is stored rather than deflated, which needs only a CRC32

The page is sized to the card, so a short story does not come out with a hand's
width of blank paper under it.

---

## Speech

Both classes use the Web Speech API, at `en-US`, with a shared twenty-second
clock. Three things about it are easy to get wrong and are fixed here:

* `continuous` must be on, or Chrome closes the session the moment the first
  utterance ends — the microphone died a few seconds in no matter what the
  countdown said.
* `no-speech` and `aborted` are not failures while the clock is still running.
  Treating them as fatal ended the session about half way through.
* restarting after Chrome hangs up must not reset the countdown.

Where speech is unavailable, every sheet offers typing instead.
