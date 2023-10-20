import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

function Scene() {
  const { animations, scene } = useGLTF("./model/low_poly_flying_island.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions.esquive) {
      actions.esquive.play();
    }
  }, [actions.esquive]);

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}

export default Scene;
