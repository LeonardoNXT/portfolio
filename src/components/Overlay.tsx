import { RoundedBorder } from "./RoundedBorder";

type OverlayType = {
  children: React.ReactNode;
  props?: React.HTMLProps<HTMLDivElement>;
};

function OverlayRoot({ children }: OverlayType) {
  return <>{children}</>;
}

function Lines() {
  return (
    <>
      <div className="w-2.5 h-full bg-background"></div>
      <div className="absolute top-0 right-0 w-2.5 h-full bg-background"></div>
      <div className="w-full h-2.5 bg-background absolute top-0 left-0"></div>
      <div className="w-full h-2.5 bg-background absolute bottom-0 left-0"></div>
    </>
  );
}

function OverlayBorder() {
  return (
    <div className="w-full min-h-screen h-full z-50 fixed top-0 left-0 pointer-events-none">
      <Lines />
      <Borders />
    </div>
  );
}

function Borders() {
  return (
    <>
      <RoundedBorder
        size={30}
        pathclassName="fill-background"
        className="absolute top-2.5 left-2.5 rotate-90"
      />
      <RoundedBorder
        size={30}
        pathclassName="fill-background"
        className="absolute bottom-2.5 left-2.5"
      />
      <RoundedBorder
        size={30}
        pathclassName="fill-background"
        className="absolute bottom-2.5 right-2.5 rotate-270"
      />
      <RoundedBorder
        size={30}
        pathclassName="fill-background"
        className="absolute top-2.5 right-2.5 rotate-180"
      />
    </>
  );
}

const Overlay = {
  root: OverlayRoot,
  border: OverlayBorder,
};

export default Overlay;
