import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixs] = useState(0);

  const handleSingle = () => {
    const updatedRun = runs + 1;
    setRuns(updatedRun);
  };
  const handleFour = () => {
    const updatedRun = runs + 4;
    setRuns(updatedRun);
  };
  const handleSix = () => {
    const updatedRun = runs + 6;
    const countSixs = sixes + 1;
    setSixs(countSixs);
    setRuns(updatedRun);
  };
  return (
    <div>
      <h3>Player: Bangladashi</h3>
      <p>six: {sixes}</p>
      {runs >= 50 && <p>Congrats you score 50</p>}
      {runs >= 100 && <p>Congrats you score 100</p>}
      <h1>Score: {runs}</h1>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
