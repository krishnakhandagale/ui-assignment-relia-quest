import React from 'react';
import { createUseStyles } from 'react-jss';
import { useLayout, useToggleNav } from '../../contexts';
import clsx from 'clsx';
import { NavOption } from './NavOption';
import { useStyles } from './Nav.styled';

export const Nav = () => {
  const { navCollapsed } = useLayout();
  const classes = useStyles({ navCollapsed });
  const toggleNav = useToggleNav();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.title}>
            <img src="/pokeball-white.png" className={classes.img} />
            <h3>Pokémon</h3>
          </div>
          <NavOption to="/" icon="assignment" name="Home">
            Home
          </NavOption>
          <NavOption to="/pokemon" icon="apps" name="List">
            List
          </NavOption>
        </div>
        <div className={classes.bottom}>
          <button className={classes.expandBtn} onClick={() => toggleNav()}>
            <span
              title={navCollapsed ? 'Expand' : 'Collapse'}
              className={clsx(classes.btnIcon, 'material-icons')}
            >
              {navCollapsed ? 'unfold_more' : 'unfold_less'}
            </span>
            <span className={classes.btnTxt}>Collapse</span>
          </button>
        </div>
      </div>
      <div className={classes.spacer} />
    </>
  );
};
