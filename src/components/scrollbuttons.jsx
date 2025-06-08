import { useEffect, useState, useRef } from "react";

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.pageYOffset > 300);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-18 right-4 btn btn-circle"
        >
          ▲
        </button>
      )}
      <button
        onClick={scrollToBottom}
        className="fixed bottom-4 right-4 btn  btn-circle"
      >
        ▼
      </button>
      <div ref={bottomRef}></div>
    </>
  );
}
