import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const focusName = () => {
    nameRef.current.focus();
  };

  const focusEmail = () => {
    emailRef.current.focus();
  };

  const clearSelections = () => {
    nameRef.current.value = null;
  };

  const selectSelections = () => {
    nameRef.current.select();
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <>
      <div>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="text" placeholder="Email" ref={emailRef} />
        <div>
          <button onClick={() => focusName()}>Focus Name</button>
          <button onClick={() => focusEmail()}>Focus Email</button>
        </div>
        <div>
          <button onClick={() => clearSelections()}>Clear selections</button>
        </div>
        <div>
          <button onClick={() => selectSelections()}>Select selections</button>
        </div>
      </div>
    </>
  );
}
export default App;
