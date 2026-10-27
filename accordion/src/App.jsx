import { useState } from "react";
import "./App.css";
function App() {
  const initalData = [
    {
      id: 1,
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
      isHidden: true,
    },
    {
      id: 2,
      title: "What is useState?",
      content: "useState is a React Hook used to manage component state.",
      isHidden: false,
    },
    {
      id: 3,
      title: "What is useEffect?",
      content: "useEffect is used to perform side effects in a component.",
      isHidden: true,
    },
  ];
  const [accordionData, setAccordionData] = useState(initalData);
  const setIsHidden = (isHidden, index) => {
    const updatedData = accordionData.map((el, currentIndex) => {
      if (currentIndex === index) {
        return { ...el, isHidden: !isHidden };
      }
      return el;
    });
    setAccordionData(updatedData);
  };
  return (
    <>
      <div className="accordion-container">
        {accordionData.map((el, index) => (
          <div className="accordion-item" key={el.id}>
            <div
              className="accordion-header"
              onClick={() => setIsHidden(el.isHidden, index)}
            >
              <h3>{el.title}</h3>
              <span>{el.isHidden ? "−" : "+"}</span>
            </div>

            {el.isHidden && (
              <div className="accordion-content">
                <p>{el.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
