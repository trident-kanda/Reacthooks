import { useRef, useState } from "react";

const ref = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState("テキスト");
  return (
    <div>
      <p>{text}</p>
      <input ref={inputRef} />
      <button
        onClick={() => {
          if (inputRef.current) {
            setText(inputRef.current.value);
          }
        }}
      >
        セット
      </button>
    </div>
  );
};

export default ref;
