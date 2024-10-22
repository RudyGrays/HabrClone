import { useCallback, useMemo, useState } from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => setIsHovered(true), [isHovered]);
  const onMouseLeave = useCallback(() => setIsHovered(false), [isHovered]);

  return useMemo(() => {
    return {
      isHovered,
      onMouseEnter,
      onMouseLeave,
    };
  }, [isHovered, onMouseEnter, onMouseLeave]);
};
