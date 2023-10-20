import { Link } from "@chakra-ui/react";
import {
  Environment,
  ScrollControls,
  ScrollControlsState,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject, val } from "@theatre/core";
import {
  PerspectiveCamera,
  SheetProvider,
  useCurrentSheet,
} from "@theatre/r3f";
import { Suspense } from "react";

/* import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio"; */

import {
  Scene as LandingScene,
  Loader,
  ScrollPage,
  MySpotLight as SpotLight,
} from "../../components/landing";
import { useAppDispatch, useAppSelector } from "../../hooks/useRTK";
import { setCurrentpage } from "../../rtk/features/currentPage";
import demo from "./demo.json";

const demoSheet = getProject("Demo Project", { state: demo }).sheet(
  "Demo Sheet"
);

/* studio.extend(extension);
studio.initialize(); */

function Theatre() {
  const { page } = useAppSelector((state) => state.currentPage);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {page === 1 && (
        <ScrollPage bg="#770056ff" title="Welcome Page 1">
          <Link style={{ pointerEvents: "all" }} href="/">
            home
          </Link>
        </ScrollPage>
      )}
      {page === 2 && <ScrollPage bg="#77aa56ff" title="Hello Page 2" />}
      {page === 3 && <ScrollPage bg="#074056ff" title="Welcome Page 3" />}
      {page === 4 && <ScrollPage bg="#e70a56ff" title="Hello Page 4" />}
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls
          pages={4}
          /* 
          distance={0.1}
          damping={1} 
          maxSpeed={0.5}
          */
        >
          <SheetProvider sheet={demoSheet}>
            <Suspense fallback={<Loader />}>
              <Scene />
            </Suspense>
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default Theatre;

const Scene = () => {
  const dispatch = useAppDispatch();
  // const [currentPage, setCurrentPage] = useState<number>(0);
  // const [scene1, setScene1] = useState<boolean>(false);
  // const [scene2, setScene2] = useState<boolean>(false);
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  // the length of our sequence
  const sequenceLength = val(sheet!.sequence.pointer.length);

  function logCurrentPageCallback(scroll: ScrollControlsState) {
    const currentPage = Math.floor(scroll.offset * scroll.pages) + 1;
    // callback(currentPage);
    dispatch(setCurrentpage(currentPage));
  }
  // our callback will run on every animation frame
  useFrame(() => {
    if (scroll) {
      logCurrentPageCallback(scroll);
      // update the "position" of the playhead in the sequence, as a fraction of its whole length
      sheet!.sequence.position = scroll.offset * sequenceLength;
    }
  });

  const bgColor = "#84a4f4";
  return (
    <>
      <Environment preset="sunset" />
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" color={bgColor} />
      <SpotLight
        showHelper={true}
        theatreKey="spot light 1"
        intensity={1}
        position={[0, 0, 0]}
      />
      <SpotLight
        showHelper={true}
        theatreKey="spot light 2"
        intensity={1}
        position={[0, 0, 0]}
      />
      <LandingScene />
      <PerspectiveCamera
        theatreKey="Camera"
        fov={50}
        near={0.1}
        far={10}
        position={[0, 0, 0]}
        makeDefault
      />
    </>
  );
};
