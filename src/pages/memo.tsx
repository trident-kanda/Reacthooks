import { useMemo, useState } from "react";

const memo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const sum = useMemo(() => {
    return count * count2;
  }, [count, count2]);
  return (
    <div>
      <p>{sum}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        COUNT1PLUS
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        COUNT2PLUS
      </button>
    </div>
  );
};

export default memo;
