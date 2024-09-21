import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = ReactButtonProps & {};

export const Button = ({ className: _className, ...buttonProps }: ButtonProps) => {
  const className = ['btn', _className].join(' ');
  return <button {...buttonProps} className={className} />;
};
