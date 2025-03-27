import { useState } from "react";

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  /*const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    });
  };

  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    });
  };
  */

  const [allClicks, setAll] = useState([]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updateRight = right + 1;
    setRight(updateRight);
    setTotal(left + updateRight);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
      <p>total clicks: {total}</p>
    </div>
  );
};

export default App;
