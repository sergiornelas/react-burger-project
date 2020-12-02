import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggler/DrawerToggler'

const toolbar = (props) => {
  return(
    <header className={classes.Toolbar}>
      {/*Tres rayitas de la esquina VISTA MOVIL*/}
      <DrawerToggle clicked={props.drawerToggleClicked}/>

      <div className={classes.Logo}>
        <Logo />
        {/*<Logo height="11%"/>*/}
      </div>

      <nav className={classes.DesktopOnly}>
        <NavigationItems/>
      </nav>
      
    </header>
  )
};

export default toolbar