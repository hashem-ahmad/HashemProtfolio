import React from "react";

type LogosDriftProps =
  | ({ as: "h3" } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({ as: "svg" } & React.SVGProps<SVGSVGElement>);

export function LogosDrift(props: LogosDriftProps) {
  if (props.as === "svg") {
    const svgProps = { ...props };
    delete (svgProps as Record<string, unknown>).as;
    return <svg {...svgProps}>{/* ... */}</svg>;
  }
  // Default to heading
  const { as, ...headingProps } = props;
  return <h3 {...headingProps}>HASHEM</h3>;
}

export default LogosDrift;
