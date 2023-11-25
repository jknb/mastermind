import { useEffect, useRef } from "react";

export const usePropsLogger = (props) => {
  const prevProps = useRef({});
  useEffect(() => {
    const changes = {};

    for (const [key, value] of Object.entries(props)) {
      if (value !== prevProps.current[key]) {
        changes[key] = {
          prev: prevProps.current[key],
          cur: value,
        };
      }
    }

    if (Object.keys(changes).length) {
      console.log(changes);
    }

    console.log("prevProps", prevProps.current);

    prevProps.current = props;
  }, [props]);
};
