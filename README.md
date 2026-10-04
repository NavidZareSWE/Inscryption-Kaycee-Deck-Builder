# The Carving Table

![Inscryption Kaycee's Mod](https://res.cloudinary.com/dyjew8iji/image/upload/v1791092926/kaycee-s-mod-feat-image_utt7ps.jpg)
A free, browser-based fan tool for building a **custom starting deck in Kaycee's Mod** (the roguelike mode of the game *Inscryption*) — and writing it straight into your save file, without editing any text by hand.

It runs entirely in your browser as a static website. Nothing is installed, and your save file is never uploaded anywhere — all the work happens on your own computer.

> **Unofficial fan project.** Not affiliated with or endorsed by the makers of Inscryption.

---

## Project goal

Kaycee's Mod normally gives you one of a few fixed starter hands. People who want a *different* starting deck usually have to hand-edit the game's save file, which is a large text file in a JSON-like format — fiddly and easy to break.

This tool is meant for people who:

- do not know how to use JSON,
- do not know how to manually edit save files,
- but still want to customise their starting deck.

You pick cards from a visual catalogue, optionally change their stats and sigils, and the tool rewrites the right part of your save file for you.

---

## Usage

> **⚠️ Back up your save file before making any changes.**
> Copy `SaveFile.gwsave` somewhere safe first. If anything goes wrong, putting the backup back undoes it completely.

1. **Start a Kaycee's Mod run first.** Open the game, start a run, then quit to the main menu (don't *end* the run). The deck you're about to change only exists once a run has been created.
2. **Build your deck** on the site: pick a ready-made deck from the shelf, or add cards from the catalogue and carve their stats/sigils.
3. **Patch your save** in the *Put it in your game* section: choose your `SaveFile.gwsave`, and download the rewritten copy.
4. **Put the file back** in your game folder (rename it to `SaveFile.gwsave` if your browser changed the name) and continue your run.

The save file lives in the game's install folder, not Documents. On Steam: right-click Inscryption → **Manage → Browse local files**, and look for `SaveFile.gwsave`. Leave the game's own `SaveFile-Backup.gwsave` alone.

**If something goes wrong** (the run won't load, the deck looks broken): close the game and put your backup copy of `SaveFile.gwsave` back in the folder.

---

## Advanced usage

An **Advanced** section on the site is available for people who prefer to work with the save file's text directly. It provides:

- copy-paste blocks for the `cardIds` and `cardIdModInfos` sections of the save,
- a complete raw modification record you can paste in,
- the type-number fields the raw block needs (filled in automatically when you open your save),
- reference tables of every sigil ID and every internal card file name.

It is collapsed by default and clearly labelled, so beginners don't need to go near it. None of the beginner workflow depends on it.

---

## GitHub Pages

This repository is a plain static website — HTML, CSS, JavaScript and image assets, with no build step and no server code. It can be hosted directly with GitHub Pages.

To host it, enable GitHub Pages for the repository in its settings and choose the branch and folder that contain `index.html` (the repository root). A `.nojekyll` file is included so the files are served exactly as they are.

All asset, script and style paths are relative, so the site works whether it is served from a user/organisation site or from a project subpath (e.g. `username.github.io/the-carving-table/`).

---

## Project structure

```
index.html        The page
css/styles.css    All styles
js/app.js         All behaviour (card data, builder, save patcher)
assets/           Sprite sheets + favicon (card faces and sigil glyphs)
.nojekyll         Serve files as-is on GitHub Pages
README.md         This file
```

---

## Feedback / contributions

Found a bug, or a card or sigil that behaves oddly? Please open an issue on this repository describing what you did and what happened. Pull requests that fix a clearly-described problem are welcome.

---

## Support the project

If this saved you some time:

- a ⭐ on the repository helps other people find it, and
- sharing it with another Kaycee's Mod player is appreciated.

No pressure — the tool is free either way.

---

## TODO

1. Investigate whether Act 2 and Act 3 cards can also be changed. *(Not verified — Act 2/3 cards can currently be added to the list, but it is not confirmed that they work correctly in a Kaycee's Mod run.)*
2. Investigate and fix remaining sigil-related bugs where possible.
3. Investigate possible workarounds for sigils that currently cannot be played or handled correctly.

These are open questions, not promises — none of them has been verified to be possible.

---

## Known limitations

Some things are limited by what the game's save data actually allows. What is known today:

- Only the **Kaycee's Mod** starting deck (Act I) is changed. The normal Act I story run, Act II and Act III are untouched.
- Cards from Act II and Act III can be added to the list, but many are uncastable or misbehave in Act I. This has not been verified to work and should be treated as experimental.
- Some sigils are built for one specific card or for a boss and can break the game on an ordinary card. The builder marks these with a caution sign and can filter them out.
- Sigil IDs above 106 are not defined. A negative final cost or final health can crash the game when the card is drawn.
- Kaycee's Mod nerfs some cards on purpose (e.g. Ouroboros resets to 1/1 each run; Stoat is 1/2, not the story mode's 1/3).

The site documents these limitations in its *Warnings & limitations* section as well.

---

## Disclaimer

You are responsible for your own save files. This is an unofficial fan tool, provided as-is with no warranty. The author is **not responsible for corrupted, lost, or otherwise damaged save files**. Always keep a backup of `SaveFile.gwsave` before making changes.

Inscryption is © Daniel Mullins Games. Card faces and some sigil glyphs are derived from community reference sheets of the game's cards; the other sigil icons, frames and textures are drawn by this project. See the site's *Credits & sources* for details.

---

Copyright © 2026 NavidZareSWE. All rights reserved. — [@NavidZareSWE](https://github.com/NavidZareSWE)
