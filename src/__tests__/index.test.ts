import { expect, test } from 'vitest';

import * as pdnd from '../index.cts';

test('exported symbols', () => {
  expect(Object.keys(pdnd)).toMatchInlineSnapshot(`
    [
      "combine",
      "draggable",
      "dropTargetForElements",
      "monitorForElements",
      "pointerOutsideOfPreview",
      "setCustomNativeDragPreview",
      "autoScrollForElements",
      "attachClosestEdge",
      "extractClosestEdge",
      "getReorderDestinationIndex",
    ]
  `);
});

test('should export functions', () => {
  expect(typeof pdnd.combine).toBe('function');
});
