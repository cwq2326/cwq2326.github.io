import React from "react";

export default function UseScrollIntoView(
  elementRef: React.RefObject<HTMLElement>
): boolean {
  const [doAnimation, setDoAnimation] = React.useState<boolean>(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) setDoAnimation(true);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (elementRef.current) observer.observe(elementRef.current);
  }, []);

  return doAnimation;
}
