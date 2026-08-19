import { expect, test } from 'vitest';

import * as pdnd from '../index.cts';

test('exported symbols', () => {
  expect(Object.keys(pdnd).toSorted()).toMatchInlineSnapshot(`
    [
      "attachClosestEdge",
      "autoScrollForElements",
      "autoScrollWindowForElements",
      "combine",
      "draggable",
      "dropTargetForElements",
      "extractClosestEdge",
      "getReorderDestinationIndex",
      "monitorForElements",
      "pointerOutsideOfPreview",
      "reorder",
      "setCustomNativeDragPreview",
    ]
  `);
});

test('should export functions', () => {
  expect(typeof pdnd.combine).toBe('function');
});
