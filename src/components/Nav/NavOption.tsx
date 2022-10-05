import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './NavOption.styled';

interface NavOptionProps {
  to: string;
  icon: string;
  name: string;
}

export const NavOption: React.FC<NavOptionProps> = ({
  to,
  icon,
  name,
  children,
}) => {
  const classes = useStyles();

  const getRootClassName = ({ isActive }: { isActive: boolean }) => {
    return clsx(classes.root, {
      [classes.active]: isActive,
    });
  };

  return (
    <NavLink to={to} className={getRootClassName} title={name}>
      <span className={clsx(classes.icon, 'material-icons')}>{icon}</span>
      <span className={classes.text}>{children}</span>
    </NavLink>
  );
};
