import { Button as MantineButton } from '@mantine/core';
import type { ReactNode } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'default' | 'gradient';
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  component?: any;
  to?: string;
}

export function CustomButton({
  children,
  variant = 'filled',
  color = 'blue',
  size = 'md',
  radius = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftSection,
  rightSection,
  onClick,
  type = 'button',
  className,
  component,
  to,
}: CustomButtonProps) {
  return (
    <MantineButton
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      loading={loading}
      disabled={disabled}
      fullWidth={fullWidth}
      leftSection={leftSection}
      rightSection={rightSection}
      onClick={onClick}
      type={type}
      className={className}
      component={component}
      to={to}
    >
      {children}
    </MantineButton>
  );
}
