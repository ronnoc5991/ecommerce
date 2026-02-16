import { useEffect, useState } from "react";

export function useIsSticky(ref: React.RefObject<HTMLElement | null>) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const topOffset = parseInt(
        window.getComputedStyle(element).top || "0",
        10,
      );

      const { top } = element.getBoundingClientRect();
      setIsSticky(top <= topOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isSticky;
}
