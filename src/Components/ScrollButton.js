import React from "react";
import { handleScrollTop } from "../hooks/ScrollToTop";

const ScrollButton = () => {
  //   const [showComponent, setShowComponent] = useState(false);
  //   const { scrollY } = useScrollPosition();
  return (
    <button
      onClick={handleScrollTop}
      className="fixed w-[50px] h-[50px] border-2 border-blue-500 rounded-full bottom-[20px] right-[20px] z-[100]
      bg-[#151515] text-white"
    >
      <i class="fa-solid fa-arrow-up-long"></i>
    </button>
  );
};

export default ScrollButton;
