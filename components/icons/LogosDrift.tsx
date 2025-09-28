import React from "react";

type LogosDriftProps =
  | ({ as: "h3" } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({ as: "svg" } & React.SVGProps<SVGSVGElement>);

export function LogosDrift(props: LogosDriftProps) {
  if (props.as === "svg") {
    const { as: _unused, ...svgProps } = props;
    return <svg {...svgProps}>{/* ... */}</svg>;
  }
  const { as: _unused, ...headingProps } = props as { as: "h3" } & React.HTMLAttributes<HTMLHeadingElement>;
  return <h3 {...headingProps}>HASHEM</h3>;
}

export default LogosDrift;
