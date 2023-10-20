import { extend, useThree, SpotLightProps } from "@react-three/fiber";
import { editable as e } from "@theatre/r3f";
import { RefObject, useEffect, useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";

extend({ SpotLightHelper });

interface Props extends SpotLightProps {
  showHelper: boolean;
  theatreKey: string;
}

function MySpotLight({ showHelper, ...props }: Props) {
  const { scene } = useThree();
  const ref = useRef<RefObject<SpotLight>>();
  const helperRef = useRef<SpotLightHelper>();
  useEffect(() => {
    if (showHelper && ref.current?.current && helperRef.current) {
      scene.add(helperRef.current);
      helperRef.current = new SpotLightHelper(ref.current.current);
    }

    return () => {
      if (helperRef.current) {
        scene.remove(helperRef.current);
        helperRef.current.dispose();
      }
    };
  }, [showHelper, scene]);

  return (
    <e.spotLight
      {...props}
      ref={ref.current}
      intensity={1}
      position={[0, 0, 0]}
    />
  );
}
export default MySpotLight;
