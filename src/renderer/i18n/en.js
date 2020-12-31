// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2018, 2019, 2020  Keyboardio, Inc.
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

const English = {
  language: "English",
  errors: {
    deviceDisconnected: "Keyboard disconnected"
  },
  components: {
    layer: "Layer {{index}}",
    layerRaw: "Layer",
    none: "None",
    save: {
      success: "Saved!",
      saveChanges: "Save Changes"
    },
    pickerColorButton: "Change color",
    loading: "Reading data from device..."
  },
  dialog: {
    ok: "Ok",
    cancel: "Cancel"
  },
  app: {
    device: "Keyboard",
    menu: {
      welcome: "Welcome",
      systemInfo: "System Information",
      editor: "Layout & Colormap Editor",
      layoutEditor: "Layout Editor",
      colormapEditor: "Colormap Editor",
      firmwareUpdate: "Firmware Update",
      keyboardSettings: "Keyboard Settings",
      preferences: "Preferences",
      selectAKeyboard: "Select a keyboard",
      selectAnotherKeyboard: "Select another keyboard",
      chat: "Real-time chat",
      feedback: "Send feedback",
      exit: "Exit Chrysalis",
      keyboardSection: "Keyboard",
      chrysalisSection: "Chrysalis",
      miscSection: "Miscellaneous",
      upgradeAvailable: "An upgrade is available!"
    },
    deviceMenu: {
      Homepage: "Homepage",
      Forum: "Forum",
      Chat: "Chat"
    },
    cancelPending: {
      title: "Discard pending changes?",
      content: "You have unsaved changes. If you proceed, they will be lost."
    }
  },
  editor: {
    keyType: "Key type",
    keyCode: "Key code",
    sidebar: {
      blanks: {
        title: "Blanks"
      },
      config: {
        title: "Configuration",
        key: "Key #{{index}}",
        color: "Color",
        hideEmptyLayers: "Hide empty layers...",
        showEmptyLayers: "Show empty layers..."
      },
      colors: {
        title: "Colors"
      },
      consumer: {
        title: "Consumer control",
        volume: "Volume",
        media: "Media control",
        brightness: "Brightness"
      },
      keypicker: {
        title: "Standard keys",
        mods: "Modifiers",
        modsHelp: `Choose modifier keys that are automatically pressed as you press this key.`,
        hostLayout: "{{hostos}} layout",
        hostHelp: "Lorem Ipsum...",
        oneshot: {
          label: "Active for next key only",
          tooltip: `Tap to activate for next key only, hold for modifier, double tap to toggle modifier.`
        }
      },
      layer: {
        title: "Layer"
      },
      leader: {
        title: "Leader"
      },
      ledcontrol: {
        title: "LED control"
      },
      macros: {
        title: "Macros"
      },
      mousekeys: {
        title: "Mouse control",
        help: `Mouse control keys make it possible to perform mouse actions with your keyboard's keys.`,
        movement: "Movement",
        buttons: "Buttons",
        wheel: "Wheel",
        warp: "Warp"
      },
      oneshot: {
        title: "OneShot"
      },
      spacecadet: {
        title: "SpaceCadet"
      },
      steno: {
        title: "Stenography"
      },
      tapdance: {
        title: "TapDance"
      }
    },
    groups: {
      Letters: "Letters",
      Digits: "Digits",
      Punctuation: "Punctuation",
      Spacing: "Spacing",
      Modifiers: "Modifiers",
      Navigation: "Navigation",
      "Fx keys": "Fx keys",
      Numpad: "Numpad",
      Miscellaneous: "Miscellaneous",
      "Shift to layer": "Shift to layer",
      "Lock layer to": "Lock layer to",
      "LED Effect": "LED Effect",
      Macros: "Macros",
      Media: "Media",
      "Mouse movement": "Mouse movement",
      "Mouse button": "Mouse button",
      "Mouse wheel": "Mouse wheel",
      "Mouse warp": "Mouse warp",
      "OneShot modifiers": "OneShot modifiers",
      "OneShot layers": "OneShot layers",
      TapDance: "TapDance",
      Leader: "Leader",
      Steno: "Steno",
      SpaceCadet: "SpaceCadet",
      Blank: "Blank",
      "Unknown keycodes": "Unknown keycodes"
    },
    tabs: {
      keyboard: "Keyboard",
      consumer: "Consumer",
      features: "Features",
      dualuse: "DualUse",
      others: "Others...",
      _features: {
        layer: "Layer switch",
        macro: "Macro",
        tapdance: "TapDance",
        leader: "Leader",
        leds: "LEDs",
        spacecadet: "SpaceCadet",
        steno: "Steno",
        oneshot: "OneShot",
        mouse: "Mouse"
      }
    },
    dualuse: {
      none: "None"
    },
    layerswitch: {
      type: "Type",
      shiftTo: "Shift To Layer",
      lockTo: "Lock To Layer",
      moveTo: "Move To Layer",
      oneshot: "OneShot",
      target: "Target Layer"
    },
    clearLayer: "Clear layer...",
    clearLayerQuestion: "Clear layer?",
    clearLayerPrompt: "This will reset the layer to its default state.",
    copyFrom: "Copy from layer...",
    pleaseSelectLayer: "Please select a layer...",
    dualUse: "Modifier when held, normal key otherwise",
    dualUseLayer: "Layer shift when held, normal key otherwise",
    layoutMode: "Edit the keyboard layout",
    colormapMode: "Edit the colormap",
    importExport: "Import/Export the current layer",
    importExportDescription:
      "The data below can be freely edited, or copied elsewhere to be pasted back for importing. This is the internal representation of Chrysalis state, handle with care.",
    loadDefault: "Load a default:",
    loadDefaultSuccess: "Default loaded!",
    copyToClipboard: "Copy to clipboard",
    copySuccess: "Copied!",
    pasteFromClipboard: "Paste from clipboard",
    pasteSuccess: "Pasted!",
    onlyCustom: {
      warning: `Chrysalis no longer supports configurations containing a mix of hardcoded and EEPROM layers. If this is a feature you need, we'd love to hear more about your use case.`,
      fixItButton: "Fix it",
      openFR: "Open a feature request"
    }
  },
  preferences: {
    devtools: "Developer tools",
    language: "Language",
    interface: "Interface",
    advanced: "Advanced",
    darkMode: "Dark mode",
    verboseFocus: "Verbose logging"
  },
  keyboardSettings: {
    advanced: "Advanced",
    keymap: {
      title: "Keymap settings",
      noDefault: "No default",
      showHardcoded: "Show hardcoded layers",
      onlyCustom: "Use custom layers only",
      defaultLayer: "Default layer"
    },
    led: {
      brightness: "Adjust LED brightness",
      idleDisabled: "Disabled",
      idleTimeLimit: "Idle time before LEDs turn off",
      idle: {
        oneMinute: "1 minute",
        twoMinutes: "2 minutes",
        threeMinutes: "3 minutes",
        fourMinutes: "4 minutes",
        fiveMinutes: "5 minutes",
        tenMinutes: "10 minutes",
        fifteenMinutes: "15 minutes",
        twentyMinutes: "20 minutes",
        thirtyMinutes: "30 minutes",
        sixtyMinutes: "60 minutes"
      }
    },
    advancedOps: "Advanced keyboard settings & operations",
    flash: {
      preferExternal: "Use an external program for flashing"
    },
    resetEEPROM: {
      button: "Reset EEPROM to factory defaults",
      dialogTitle: "Reset EEPROM to factory defaults?",
      dialogContents: `This will reset the EEPROM to factory defaults.
 You will lose all customizations made.`
    }
  },
  keyboardSelect: {
    unknown: "Unknown",
    selectPrompt: "Please select a keyboard:",
    noDevices: "No keyboards found!",
    connect: "Connect",
    disconnect: "Disconnect",
    scan: "Scan keyboards",
    installUdevRules: "Fix it",
    permissionError: `Your computer won't let Chrysalis talk to your keyboard. (You do not have read/write permissions to {{path}}.)`,
    permissionErrorSuggestion: `Chrysalis can fix this by installing a udev rules file into /etc/udev/rules.d/.`
  },
  firmwareUpdate: {
    dialog: {
      selectFirmware: "Select a firmware",
      firmwareFiles: "Firmware files",
      allFiles: "All files"
    },
    options: {
      onFlash: "Restore to factory defaults when flashing",
      title: "Firmware update options"
    },
    flashing: {
      error: "Error flashing the firmware",
      troubleshooting: "Troubleshooting",
      success: "Firmware flashed successfully!",
      button: "Update",
      buttonSuccess: "Updated!",
      steps: {
        factoryRestore: "Restoring factory defaults",
        bootloaderTrigger: "Triggering bootloader",
        bootloaderWait: "Waiting for bootloader",
        flash: "Flashing"
      }
    },
    confirmDialog: {
      title: "Replace the firmware and reset to factory defaults?",
      contents: `This will replace the firmware on the device, and reset all settings to factory defaults. You will lose all customizations made.`
    },
    defaultFirmware: "Chrysalis {{version}} default",
    defaultFirmwareDescription: "Minimal, without bells and whistles",
    experimentalFirmware: "Chrysalis {{version}} experimental",
    experimentalFirmwareDescription: "Experimental, with more plugins enabled",
    selected: "Selected firmware",
    custom: "Custom firmware",
    description: `Updating or "flashing" your keyboard's firmware is how we teach it new tricks. Chrysalis will install a new version of your keyboard's firmware which includes support for customizing the key layout, as well as other features. If you've previously customized your keyboard's firmware, this will overwrite your custom firmware. You can always find the source code of the firmware Chrysalis is installing here:`,
    postUpload: `Once the upload is done, Chrysalis will take you back to the keyboard selection screen.`
  },
  welcome: {
    title: "Welcome to Chrysalis",
    contents: `Chrysalis recognizes your keyboard, but needs to update its firmware before you can continue.`,
    gotoUpdate: "Update Firmware",
    reconnect: "Reconnect",
    reconnectDescription: `There's a possibility that we misdetected the capabilities of the keyboard, or that the keyboard was starting up while we connected. In this case, you can try clicking the "{{buttonName}}" button to attempt a reconnect, and look for the necessary features again. Reconnecting is useful if you're sure there was a temporary failure upon previous attempts, and the problem has been resolved.`
  },
  systeminfo: {
    title: "System Information",
    intro: `If you're having trouble with Chrysalis, the development team may ask you to send them some debugging information. Chrysalis can help you collect and package up everything you might need to share. This includes error logs, as well as a bit of information about this computer's operating system, connected devices, and Chrysalis itself. Keyboard information will include information about the keyboard's current firmware, as well as key layouts and LED configuration.`,
    privacyNote: `We try hard not to include private information in this bundle, but recommend you read through it before sharing it.`,
    createBundle: "Create Bundle",
    viewBundle: "View Bundle",
    saveBundle: "Save Bundle",
    dialog: {
      title: "Save Chrysalis Debug Bundle",
      bundleFiles: "Debug bundle files"
    },
    bundleSaved: `Chrysalis debug bundle saved.`
  },
  devices: {
    Dygma: {
      Raise: {
        updateInstructions: `To update the firmware, the keyboard needs a special reset. When you see the light on the Neuron go off, press and hold the Escape key. The Neuron's light should start a blue pulsing pattern.`
      }
    },
    "SOFT/HRUF": {
      Splitography: {
        updateInstructions: `After clicking the Update button, reset your keyboard (by pressing the small
reset button beside the USB port) to put it into programmable mode, within ten
seconds.`
      }
    },
    Keyboardio: {
      Atreus: {
        updateInstructions: `Hold down the ESC key (in the lower left corner of the keyboard), and continue holding it while you click the Update button.`
      },
      Model01: {
        updateInstructions: `Hold down the PROG key (in the upper left corner of the keyboard), and continue holding it while you click the Update button. Once the keys start flashing red across the board, you can release the PROG key.`
      }
    },
    PJRC: {
      Teensy: {
        updateInstructions: `Since this is a Teensy-powered device in programmable mode already, Chrysalis has no way of detecting what kind of keyboard it is. Please select a custom firmware appropriate for your keyboard, and continue.`
      }
    }
  }
};

export { English as default };
