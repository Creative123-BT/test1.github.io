"use client";
import React, { ReactNode, useRef } from "react";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mouseDownPosition = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownPosition.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseDownPosition.current !== null && scrollContainerRef.current) {
      const mouseDelta = mouseDownPosition.current - e.clientX;
      scrollContainerRef.current.scrollLeft += mouseDelta;
      mouseDownPosition.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    mouseDownPosition.current = null;
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll("right"),
    onSwipedRight: () => scroll("left"),
    trackMouse: true, // Enables mouse swipe support
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      {...handlers}
      ref={scrollContainerRef}
      className={`flex overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar cursor-grab gap-3 md:gap-5 `}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default Carousel;
