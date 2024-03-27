Sure, here's a concise summary:

- **Display: Block**
  - Starts on a new line.
  - Occupies the full width available.
  - Width and height can be set.
  - Used for structuring major parts of a webpage.

- **Display: Inline**
  - Does not start on a new line; appears in line with text or other inline elements.
  - Width and height settings do not apply.
  - Takes up only as much width as needed for its content.
  - Used for styling small sections of text or content without breaking the flow of a document.

Block elements are like boxes that stack vertically, each on a new line, while inline elements are like beads on a string, flowing in line with text and wrapping alongside other content.

Certainly, here’s a summary of CSS positioning:

- **Static**
  - The default position; elements flow in the normal document layout order.
  - Not affected by `top`, `right`, `bottom`, and `left` properties.

- **Relative**
  - Positioned relative to its normal position in the document flow.
  - Can be moved using `top`, `right`, `bottom`, and `left` properties, but still occupies its original space in the document flow.

- **Absolute**
  - Removed from the normal document flow; no space is created for the element in the page layout.
  - Positioned relative to its nearest positioned ancestor (not static). If no such ancestor exists, the document body is used.
  - Can be placed precisely within its containing element using `top`, `right`, `bottom`, and `left`.

- **Fixed**
  - Removed from the normal document flow; no space is created for the element in the page layout.
  - Positioned relative to the viewport, meaning it stays in the same place even if the page is scrolled.
  - Can be positioned using `top`, `right`, `bottom`, and `left`.

- **Sticky**
  - A hybrid of relative and fixed positioning.
  - An element is treated as relatively positioned until it crosses a specified point, then it is treated as fixed positioned.
  - Useful for elements that should scroll away until a certain point and then stick to the position in the viewport.