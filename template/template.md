# Properties

```
{
  "id": string,
  "type": string,
  "category": string,
  "sub_category": string[] | null,
  "title": string,
  "description": string,
  "source": string[],

  "meta": {
    "width": integer,
    "height": integer,
    "frames": integer | null,
    "version": string
  },

  "overlays": [
    {
      "id": string,
      "frame": { "s": integer, "e": integer } | null,
      "bounds": { "x": integer, "y": integer, "w": integer, "h": integer },
      "bounds_end": bounds | null,
      "rotation": integer,
      "shear": integer,
      "text": string,
      "notes": string | null
    }, {
      ...
    }
  ]
}
```

## ID

Usually similar to file name, or the same as target image name in [assets/](/assets/) directory.

## Type

`types: "image", "video"`

## Category

`types: "illustration", "live2d", "battle_stage", "ui", "other"`

## Sub-Category

- illustration / live2d
  - background
  - character
  - disc
    - element `types: "aqua", "ignis", "terra", "ventus", "lux", "umbra"`
    - rarity (☆) `types: 3, 4, 5`
- battle_stage
  - monolith_ascension
    - domain `types: "battle", "choice", "trade", "rival", "boss"`
- UI
  - in_game
  - encyclopedia (guide)

## Title

Title of the content. Usually the name of the content specified inside the game.

## Description

Description of the content.

## Source

A path from root to target directory.
`assets/<category>/<sub_category>/<file>`

```
assets/
│
├ illustration/
│ ├ background/
│ ├ character/
│ └ disc/
│
├ live2d/
│ ├ background/
│ └ character/
│
├ battle_stage/
│ └ ascension/
│
├ ui/
│ ├ in_game/
│ └ encyclopedia/
│
└ other/
```

## Meta

Basic metadata for backend convenience

- `"width"` - full width of the content
- `"height"` - full height of the content
- `"frames"` - total frames of the content **(video only)**
- `"version"` - game version that the content was added to the game

## Overlays

Overlay part on the content to highlight Nova language text.

- `"id"` - unique id of an overlay
- `"frame"` - start/end frame when overlay applies **(video only)**
- `"bounds"` - bound of the overlay on the **image**, or start frame of the **video**
- `"bounds-end"` - bound of the overlay at end frame **(video only)**
- `"rotation"` - rotation value of the bound [-180, 180]
- `"shear"` - bending weight of the shape [-90, 90]
- `"text"` - text content inside the overlay bound
- `"notes"` - _optional_ context addition
