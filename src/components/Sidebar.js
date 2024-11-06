import React, { useState } from "react";
import { SvgIcon } from "@basetoolkit/ui";
import Logo from "../imgs/logo.svg";
import { SidebarData } from "../Data/Data";
import { useCSSClass } from "@basetoolkit/ui";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const classes = useCSSClass({
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      paddingTop: '3rem',
      height:"85%",
      transition: 'transform 300ms ease',
      '@media screen and (max-width: 768px)': {
        display:expanded?"flex":"none",
        transform: expanded ? 'translateX(0)' : 'translateX(-100%)', 
        position: 'fixed',
        zIndex: 9,
        paddingTop: '2rem',
        background: '#ffe0e0',
        width: '55%',
        paddingRight: '1rem',
        height: '100%',
      },
    },
    bars: {
      display: 'none',
      '@media screen and (max-width: 768px)': {
        display: 'flex',
        position: 'fixed',
        top: '2rem',
        left: expanded ? '65%' : '5%',
        background: '#ffe0e0',
        padding: '10px',
        borderRadius: '10px',
        zIndex: 10,
        cursor: 'pointer',
      },
    },
    logo: {
      display: 'flex',
      height: '5rem',
      fontWeight: 'bold',
      fontSize: '22px',
      alignItems: 'center',
      justifyContent: 'center',
      '& img': {
        width: '3rem',
        height: '3rem',
      },
      '& span > span': {
        color: 'var(--pink)',
      },
      '@media screen and (max-width: 1200px)': {
        display: 'none',
      },
      '@media screen and (max-width: 768px)': {
        display: 'flex',
      },
    },
    menu: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      height: '2.5rem',
      marginLeft: '2rem',
      position: 'relative',
      transition: 'all 300ms ease',
      borderRadius: '0.7rem',
      fontSize: '14px',
      '&:hover': {
        cursor: 'pointer',
      },
      '&:last-child': {
        position: 'absolute',
        bottom: '2.3rem',
        width: '100%',
      },
      '@media screen and (max-width: 1200px)': {
        '& span': {
          display: 'none',
        },
      },
      '@media screen and (max-width: 768px)': {
        '& span': {
          display: 'block',
        },
        '&:last-child': {
          position: 'relative',
          marginTop: '6rem',
        },
      },
    },
    active: {
      background: 'var(--activeItem)',
      marginLeft: 0,
      '&::before': {
        content: '""',
        width: '8px',
        height: '100%',
        background: 'var(--pink)',
        marginRight: 'calc(1rem - 8px)',
      },
    },
  });

  return (
    <>
      <div className={classes.bars} onClick={() => setExpanded(!expanded)}>
        <SvgIcon icon="menu" />
      </div>
      <div className={classes.sidebar}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
          <span>
            Ba<span>s</span>e
          </span>
        </div>

        <div className={classes.menu}>
          {SidebarData.map((item, index) => (
            <div
              className={`${classes.menuItem} ${selected === index ? classes.active : ''}`}
              key={index}
              onClick={() => setSelected(index)}
            >
              <SvgIcon icon={item.icon} color="#000" />
              <span>{item.heading}</span>
            </div>
          ))}
          <div className={classes.menuItem}>
            <SvgIcon icon="power_settings_new" color="black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
