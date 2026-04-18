import React, { useEffect, useState } from "react";
import { timer } from "d3-timer";
import { useCanvasSize, usePointLight, useRender } from "@react-vertex/core";
import { useVector3 } from "@react-vertex/math-hooks";
import { useOrbitCamera, useOrbitControls } from "@react-vertex/orbit-camera";
import LightOrb from "./LightOrb";
import Spheres from "./Spheres";

function Scene() {
  const { width, height } = useCanvasSize();
  const camera = useOrbitCamera(35, width / height, 1, 5000, c => {
    c.setPosition([0, 0, 600]);
  });

  useOrbitControls(camera);

  const [groupRotation, setGroupRotation] = useState([0, 0, 0]);
  const [lightPosition, setLightPosition] = useState([0, 0, 0]);
  const lightColor = useVector3(0.2, 0.9, 0.9);

  usePointLight(lightColor, lightPosition);

  const renderScene = useRender();

  useEffect(() => {
    const timerLoop = timer(elapsed => {
      const a = elapsed * 0.0006;
      const y = Math.cos(a) * 150;
      const z = Math.sin(a) * 150;

      setLightPosition([0, y, z]);
      setGroupRotation([0, a, 0]);
      renderScene();
    });

    return () => timerLoop.stop();
  }, [renderScene]);

  return (
    <camera view={camera.view} projection={camera.projection}>
      <group rotation={groupRotation}>
        <Spheres layoutRadius={100} sphereCount={50} sphereRadius={10} />
      </group>
      <LightOrb color={lightColor} position={lightPosition} radius={3} />
    </camera>
  );
}

export default Scene;

