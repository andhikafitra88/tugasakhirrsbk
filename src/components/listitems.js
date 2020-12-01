import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublicIcon from '@material-ui/icons/Public';
import PeopleIcon from '@material-ui/icons/People';
import LanguageIcon from '@material-ui/icons/Language';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';

import { NavLink } from 'react-router-dom';

export const mainListItems = (
  <div>
    <base href="/"/>

    <ListItem button component={NavLink} to='/CountryStyled'>
      <ListItemIcon>
        <LanguageIcon />
      </ListItemIcon>
      <ListItemText primary="Semua Negara" />
    </ListItem>
    <ListItem button component="a" href="Region/europe">
      <ListItemIcon>
        <Filter1Icon />
      </ListItemIcon>
      <ListItemText primary="Eropa" />
    </ListItem>
    <ListItem button component="a" href="Region/americas">
      <ListItemIcon>
        <Filter2Icon />
      </ListItemIcon>
      <ListItemText primary="Amerika" />
    </ListItem>
    <ListItem button component="a" href="Region/asia">
      <ListItemIcon>
        <Filter3Icon />
      </ListItemIcon>
      <ListItemText primary="Asia" />
    </ListItem>
    <ListItem button component="a" href="Region/africa">
      <ListItemIcon>
        <Filter4Icon />
      </ListItemIcon>
      <ListItemText primary="Afrika" />
    </ListItem>
    <ListItem button component="a" href="Region/oceania">
      <ListItemIcon>
        <Filter5Icon />
      </ListItemIcon>
      <ListItemText primary="Oseania" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button component={NavLink} to='/AboutUS'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>
  </div>
);