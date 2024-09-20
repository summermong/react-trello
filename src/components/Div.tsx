import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import type { WidthHeight } from './WidthHeight';
import type { LeftRightTopBottom } from './LeftRigthTopBottom';
import type { MinMaxWidthHeight } from './MinMaxWidthHeight';

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom &
  MinMaxWidthHeight & {
    src?: string;
  };

export const Div = ({
  width,
  height,
  style: _style,
  src,
  className: _className,
  left,
  right,
  top,
  bottom,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  ...props
}: DivProps) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
    left,
    right,
    top,
    bottom,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
  };
  const className = ['box-border', src && 'bg-gray-300', _className].join(' ');
  return <div {...props} className={className} style={style} />;
};
