import { expect, test } from 'vitest';

import * as pdnd from '../index.cts';

test('exported symbols', () => {
  expect(Object.keys(pdnd)).toMatchInlineSnapshot(`
    [
      "draggable",
      "dropTargetForElements",
      "attachClosestEdge",
      "extractClosestEdge",
      "combine",
      "setCustomNativeDragPreview",
      "pointerOutsideOfPreview",
      "getReorderDestinationIndex",
    ]
  `);
});

test('should export functions', () => {
  expect(typeof pdnd.combine).toBe('function');
});
