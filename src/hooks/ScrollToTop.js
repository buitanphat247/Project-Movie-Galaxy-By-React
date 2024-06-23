import { animateScroll as scroll } from "react-scroll";

export const handleScrollTop = () => {
  scroll.scrollToTop({
    duration: 1000, // Thời gian cuộn lên đầu (milliseconds)
    smooth: "easeInOutQuint", // Kiểu cuộn mượt
    offset: 50,
  });
};
