import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PublicIcon from '@material-ui/icons/Public';
import PeopleIcon from '@material-ui/icons/People';
import LanguageIcon from '@material-ui/icons/Language';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink } from 'react-router-dom';

export const mainListItems = (
  <div>
    {/* <ListItem button component={NavLink} to='/dashboard'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem> */}
    <ListItem button component={NavLink} to='/Countries'>
      <ListItemIcon>
        <PublicIcon />
      </ListItemIcon>
      <ListItemText primary="Semua Negara" />
    </ListItem>
    <ListItem button component={NavLink} to='/CountryStyled'>
      <ListItemIcon>
        <LanguageIcon />
      </ListItemIcon>
      <ListItemText primary="Semua Negara Pakai Styled" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button component={NavLink} to='/AboutUS'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="About Us Pakai Styled" />
    </ListItem>
  </div>
);