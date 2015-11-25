# Simple Android Snackbar
A Framer Studio module for adding Android Material Design Snackbars to your project

## Installation

1. Download the androidSnackbar.coffee file.
2. Create a new Framer project and add androidSnackbar.coffee to your /modules folder.
3. Add `android = require 'androidSnackbar'` at the top of your document.

[Sample Project can be found here.](http://share.framerjs.com/x3pwga3rbpt4/)

More info about modules for Framer Studio: [FramerJS Docs - Modules](http://framerjs.com/docs/#modules)

![TextLayer](https://raw.githubusercontent.com/imaaronjames/Simple-Android-Snackbar/master/androidSnackbar-Sample-Project.framer/images/sample-code.png)

## How to use this module
You only need one line of code to make Simple Android Snackbars work. It looks a little something like this:

&nbsp;&nbsp;&nbsp;&nbsp;`android.snackbar("Snackbar is one line by default.", null, null, false)`

### Simple yet powerful customization
There are three parameters you can change: keyboardType, keyboardTheme, and hasAutoCorrect

&nbsp;&nbsp;&nbsp;&nbsp;**snackbarMessage** (string) -- Add your custom message

&nbsp;&nbsp;&nbsp;&nbsp;**actionText** (string) -- Add your custom action text. if null, the button will be turned off.

&nbsp;&nbsp;&nbsp;&nbsp;**textColor** (string) -- You can change the color of the action button using rgba()

&nbsp;&nbsp;&nbsp;&nbsp;**twoLines** (boolean) -- true = multi-line snackbar, false = single-line snackbar

## Adding Events to the action button
Any Event can be assigned to the snackbar action button. To do this, use this line:

&nbsp;&nbsp;&nbsp;&nbsp;`snackbarActionBTN.on Events.Click, ->`

___
That's it! the snackbar layers will automatically animate in and out for you. When the layers animate out, they will be destroyed for you. Simple.
