import React from "react";
import { Canvas } from "@react-vertex/core";
import Scene from "./Scene";
import { useWindowSize } from "../../hooks/useWindowSize";

function VertexSphereDemo() {
  const { width, height } = useWindowSize();
  const canvasWidth = Math.max(320, Math.min(width - 80, 1100));
  const canvasHeight = Math.max(420, Math.min(height - 260, 720));

  return (
    <section className="page-panel">
      <div className="page-copy">
        <h2>React Vertex Sphere of Spheres</h2>
        <p>
          This keeps the original animated light orbit and camera controls, with
          the canvas sized to fit inside the shared app layout.
        </p>
      </div>

      <div className="demo-shell vertex-shell">
        <Canvas width={canvasWidth} height={canvasHeight}>
          <Scene />
        </Canvas>
      </div>
    </section>
  );
}

export default VertexSphereDemo;
