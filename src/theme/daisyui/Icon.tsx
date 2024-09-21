import { Button, type ButtonProps } from './Button';
import type { IconProps as CIconProps } from '../../components';
import { Icon as CIcon } from '../../components';

export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string;
  };

export const Icon = ({ name, iconClassName, className, ...buttonProps }: IconProps) => {
  const btnClassName = ['btn-circle', className].join(' ');
  return (
    <Button className={btnClassName} {...buttonProps}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  );
};
