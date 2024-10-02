import { createContext, FC, PropsWithChildren, ReactNode, useContext } from 'react';
import { useWindowResize } from '../hooks';

type ContextType = {
  breakpoint: string;
};

const defaultContextValue: ContextType = {
  breakpoint: ''
};

export const ResponsiveContext = createContext<ContextType>(defaultContextValue);

type ResponsiveProviderProps = {
  children: ReactNode;
};

export const ResponsiveProvider = ({ children, ...props }: ResponsiveProviderProps) => {
  const [width] = useWindowResize();
  console.log(width);

  const breakpoint =
    width < 640
      ? 'sm'
      : width < 768
      ? 'md'
      : width < 1024
      ? 'lg'
      : width < 1280
      ? 'xl'
      : '2xl';

  const value = {
    breakpoint
  };
  return <ResponsiveContext.Provider value={value} children={children} />;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useResponsive = () => {
  const { breakpoint } = useContext(ResponsiveContext);
  return breakpoint;
};
