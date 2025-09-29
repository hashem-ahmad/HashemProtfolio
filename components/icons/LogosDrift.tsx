import React from "react";

type LogosDriftProps =
  | ({ as: "h3" } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({ as: "svg" } & React.SVGProps<SVGSVGElement>);

export function LogosDrift({ as = "h3", ...props }: LogosDriftProps) {
  if (as === "svg") {
    const { /* as, */ ...svgProps } = props as React.SVGProps<SVGSVGElement>;
    return <svg {...svgProps}>{/* ... */}</svg>;
  }

  const { /* as, */ ...headingProps } = props as React.HTMLAttributes<HTMLHeadingElement>;
  return <h3 {...headingProps}>HASHEM</h3>;
}

export default LogosDrift;
