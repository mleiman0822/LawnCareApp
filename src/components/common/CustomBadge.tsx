import { Badge as MantineBadge } from '@mantine/core';
import type { ReactNode } from 'react';

interface CustomBadgeProps {
  children: ReactNode;
  color?: string;
  variant?: 'light' | 'filled' | 'outline' | 'dot';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

export function CustomBadge({
  children,
  color = 'blue',
  variant = 'light',
  size = 'sm',
  radius = 'md',
  className,
  leftSection,
  rightSection,
}: CustomBadgeProps) {
  return (
    <MantineBadge
      color={color}
      variant={variant}
      size={size}
      radius={radius}
      className={className}
      leftSection={leftSection}
      rightSection={rightSection}
    >
      {children}
    </MantineBadge>
  );
}
