import React, { ReactNode, ElementType } from 'react';

interface WrapperProps {
  containerClassName?: string;
  bgColor?: string;
  isTop?: boolean;
  isTop2?: boolean;
  children: ReactNode;
  className?: string;
  isMaxWidthChangeRequired?: string;
  as?: ElementType;
  [key: string]: any;
}

export default function Wrapper({
  containerClassName = '',
  bgColor = 'bg-transparent',
  isTop = false,
  isTop2 = false,
  children,
  className = '',
  isMaxWidthChangeRequired = 'max-w-screen-2xl',
  as: Component = 'section',
  ...props
}: WrapperProps) {
  return (
    <Component
      className={` px-3 xl:px-20 mx-auto ${bgColor} ${containerClassName} ${
        isTop && 'pt-16 md:pt-36'
      } ${isTop2 && 'pt-20'} `}
      {...props}
    >
      <div className={`mx-auto  ${isMaxWidthChangeRequired} ${className}`}>
        {children}
      </div>
    </Component>
  );
}
