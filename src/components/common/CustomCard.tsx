import { Card as MantineCard } from '@mantine/core';
import type { ReactNode } from 'react';

interface CustomCardProps {
  children: ReactNode;
  withBorder?: boolean;
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function CustomCard({
  children,
  withBorder = true,
  shadow = 'sm',
  radius = 'md',
  padding = 'md',
  className,
  onClick,
  style,
}: CustomCardProps) {
  return (
    <MantineCard
      withBorder={withBorder}
      shadow={shadow}
      radius={radius}
      padding={padding}
      className={className}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': onClick ? {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        } : {},
        ...style,
      }}
    >
      {children}
    </MantineCard>
  );
}
