import { useState, useEffect } from "react";

function SearchInput() {
  const texts = [
    "Search For Hair Care",
    "Search For Conditioner",
    "Search For Shampoo"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));

        if (displayText.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));

        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText]);

  return (
    <input
      type="text"
      placeholder={displayText}
      className="w-55 h-8
      pl-7 pr-4 py-3 text-sm font-semibold
       border border-gray-200 rounded-sm placeholder:text-gray-500"
    />
  );
}

export default SearchInput;
