/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Classic theme.
 * Contains multi-coloured border to create shadow effect.
 */
'use strict';

goog.provide('Blockly.Themes.Classic');

goog.require('Blockly.Theme');


// Temporary holding object.
Blockly.Themes.Classic = {};

Blockly.Themes.Classic.defaultBlockStyles = {
  "colour_blocks": {
    "colourPrimary": "#f2a72c",
    "colourSecondary": "#f1c172",
    "colourTertiary": "#da921c"
  },
  "list_blocks": {
    "colourPrimary": "#70a1ff",
    "colourSecondary": "#608bdb",
    "colourTertiary": "#608bdb"
  },
  "logic_blocks": {
    "colourPrimary": "#2f3542",
    "colourSecondary": "#1a1a1a",
    "colourTertiary": "#1a1a1a"
  },
  "loop_blocks": {
    "colourPrimary": "#ffab19",
    "colourSecondary": "#da9d34",
    "colourTertiary": "#cf8b17"
  },
  "math_blocks": {
    "colourPrimary": "#59c059",
    "colourSecondary": "#4bae4b",
    "colourTertiary": "#4bae4b"
  },
  "procedure_blocks": {
    "colourPrimary": "#058863",
    "colourSecondary": "#5ecfaf",
    "colourTertiary": "#5ecfaf"
  },
  "text_blocks": {
    "colourPrimary": "#f26849",
    "colourSecondary": "#cc573d",
    "colourTertiary": "#cc573d"
  },
  "variable_blocks": {
    "colourPrimary": "#d65cd6",
    "colourSecondary": "#cc51cc",
    "colourTertiary": "#cc51cc"
  },
  "variable_dynamic_blocks": {
    "colourPrimary": "#47025a",
    "colourSecondary": "#820fa1",
    "colourTertiary": "#8e579d"
  }
};

Blockly.Themes.Classic.categoryStyles = {
  "colour_category": {
    "colour": "#f2a72c"
  },
  "list_category": {
    "colour": "#7d65ab"
  },
  "logic_category": {
    "colour": "#9fd2f1"
  },
  "loop_category": {
    "colour": "#795a07"
  },
  "math_category": {
    "colour": "#e6da39"
  },
  "procedure_category": {
    "colour": "#590721"
  },
  "text_category": {
    "colour": "#058863"
  },
  "variable_category": {
    "colour": "#47025a"
  },
  "variable_dynamic_category": {
    "colour": "#47025a"
  }
};

Blockly.Themes.Classic =
    new Blockly.Theme('classic', Blockly.Themes.Classic.defaultBlockStyles,
        Blockly.Themes.Classic.categoryStyles);
