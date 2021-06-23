import { useCallback, useState } from "react";

const callback = () => {
  const [count, setCount] = useState<number>(0);
  const setCountCallback = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <Button onClick={setCountCallback} />
    </div>
  );
};

export default callback;
type props = {
  onClick: () => void;
};
export const Button = ({ onClick }: props) => {
  return <button onClick={onClick}>PLUS</button>;
};
