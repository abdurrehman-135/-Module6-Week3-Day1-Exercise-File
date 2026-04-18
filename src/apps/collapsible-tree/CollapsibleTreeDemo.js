import React from "react";
import data from "./data";
import Tree from "./Tree";
import { useWindowSize } from "../../hooks/useWindowSize";

function CollapsibleTreeDemo() {
  const { width, height } = useWindowSize();
  const treeWidth = Math.max(320, Math.min(width - 80, 1100));
  const treeHeight = Math.max(420, Math.min(height - 260, 720));

  return (
    <section className="page-panel">
      <div className="page-copy">
        <h2>Collapsible Tree with VX</h2>
        <p>
          The original hierarchy animation is preserved here with responsive
          bounds so the node toggles and link transitions stay usable on smaller
          screens too.
        </p>
      </div>

      <div className="demo-shell tree-shell">
        <Tree data={data} width={treeWidth} height={treeHeight} />
      </div>
    </section>
  );
}

export default CollapsibleTreeDemo;

