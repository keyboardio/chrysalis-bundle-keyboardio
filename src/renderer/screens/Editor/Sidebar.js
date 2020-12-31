// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2020  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from "react";
import i18n from "i18next";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Configuration from "./Sidebar/Configuration";
import Colormap from "./Sidebar/Colormap";
import KeyPicker from "./Sidebar/KeyPicker";
import LayerKeys from "./Sidebar/LayerKeys";
import ConsumerKeys from "./Sidebar/ConsumerKeys";
import LeaderKeys from "./Sidebar/LeaderKeys";
import LEDKeys from "./Sidebar/LEDKeys";
import MacroKeys from "./Sidebar/MacroKeys";
import MouseKeys from "./Sidebar/MouseKeys";
import SpaceCadetKeys from "./Sidebar/SpaceCadetKeys";
import StenoKeys from "./Sidebar/StenoKeys";
import TapDanceKeys from "./Sidebar/TapDanceKeys";
import BlankKeys from "./Sidebar/BlankKeys";

import { KeymapDB } from "../../../api/keymap";

const sidebarWidth = 360;

const styles = theme => ({
  drawer: {
    width: sidebarWidth,
    flexShrink: 0
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  drawerPaper: {
    width: sidebarWidth
  },
  drawerContainer: {
    overflow: "auto",
    padding: theme.spacing(3)
  }
});

class Sidebar extends React.Component {
  render() {
    const {
      classes,
      keymap,
      selectedKey,
      selectedLed,
      layer,
      layout,
      colormap
    } = this.props;

    const db = new KeymapDB();
    const label = db.format(keymap.custom[layer][selectedKey], "full");

    const widgets = [
      KeyPicker,
      Colormap,
      LayerKeys,
      BlankKeys,
      ConsumerKeys,
      MouseKeys,
      LEDKeys,
      MacroKeys,
      TapDanceKeys,
      SpaceCadetKeys,
      LeaderKeys,
      StenoKeys
    ];
    const categories = widgets.map((Widget, index) => {
      return (
        <Widget
          key={`sidebar-category-${index}`}
          keymap={keymap}
          colormap={colormap}
          selectedKey={selectedKey}
          selectedLed={selectedLed}
          layer={layer}
          layout={layout}
          setLayout={this.props.setLayout}
          onKeyChange={this.props.onKeyChange}
          onLedChange={this.props.onLedChange}
          onPaletteChange={this.props.onPaletteChange}
        />
      );
    });

    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="right"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Typography variant="h6" className={classes.title}>
            {label.hint} {label.main} (#{selectedKey}) {" - "}
            {i18n.t("components.layer", { index: layer })}
          </Typography>
          <Configuration
            keymap={keymap}
            colormap={colormap}
            selectedKey={selectedKey}
            selectedLed={selectedLed}
            layer={layer}
            setLayer={this.props.setLayer}
            onKeymapChange={this.props.onKeymapChange}
          />
          {categories}
        </div>
      </Drawer>
    );
  }
}

const StyledSidebar = withStyles(styles, { withTheme: true })(Sidebar);

export { StyledSidebar as default, sidebarWidth };
