import Mouse from "./Mouse";
import Cat from "./Cat";

export default function MouseTracker() {
  return (
    <div>
      <Mouse render={(mouse) => <Cat position={mouse} />} />
    </div>
  );
}
