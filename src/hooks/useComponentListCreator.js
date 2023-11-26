import { useMemo } from "react";

export const useComponentListCreator = (
  Component,
  n,
  indexedPropsGenerator = () => {}
) => {
  const collection = useMemo(
    () =>
      new Array(n).fill(null).map((_, index) => {
        const indexedProps = indexedPropsGenerator(index);
        return <Component key={index} {...indexedProps} index={index} />;
      }),
    [indexedPropsGenerator, n]
  );

  return collection;
};
