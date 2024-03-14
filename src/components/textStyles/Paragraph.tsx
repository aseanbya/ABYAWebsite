import type { ReactNode } from "react";

export default function Paragraph(props: ParagraphProps) {
  return (
    <p className={`text-sm font-normal sm:text-base ${props.className ?? ""}`}>
      {props.children}
    </p>
  );
}

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};
