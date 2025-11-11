/**
 * Reachy Mini TurboWarp Extension
 * Entry point for extension registration
 */

import { ReachyMiniExtension } from './extension.js';

/**
 * Declare global Scratch object
 */
declare const Scratch: {
  extensions: {
    register: (extension: unknown) => void;
  };
};

/**
 * Register the extension with Scratch/TurboWarp
 */
(function (Scratch) {
  'use strict';

  if (!Scratch || !Scratch.extensions) {
    throw new Error('This extension must be run in a Scratch 3.0 environment');
  }

  // Register the extension
  Scratch.extensions.register(new ReachyMiniExtension());
})(Scratch);
