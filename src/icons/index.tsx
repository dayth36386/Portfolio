import React from "react";

import Dark from "../../public/icons/moon.svg";
import Ligth from "../../public/icons/sun.svg";

const iconNames = {
  Dark,
  Ligth,
};

type IconProps = {
  name: keyof typeof iconNames;
} & React.SVGProps<SVGSVGElement>;

const Icons: React.FC<IconProps> = ({ name, ...props }) => {
  const SvgIcon = iconNames[name];
  if (!SvgIcon) {
    return null;
  }
  return <SvgIcon className="w-[1.5rem]" {...props} />;
};

export { Icons, iconNames };
