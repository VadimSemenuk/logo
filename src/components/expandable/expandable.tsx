import { ReactNode, useRef } from "react";

interface ExpandableProps {
  children?: ReactNode;
  isOpen: boolean;
}

const Expandable = ({ children, isOpen }: ExpandableProps) => {
  const root = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={root}
      style={{
        overflow: "hidden",
        transition: "max-height 150ms linear",
        maxHeight: isOpen ? root.current?.scrollHeight + "px" : "0px",
      }}
    >
      {children}
    </div>
  );
};

export default Expandable;
