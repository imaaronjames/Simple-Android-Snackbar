## Created by Aaron James - April 14th, 2016
android = require "androidSnackbar"

bg = new BackgroundLayer
	backgroundColor: "#eeeeee"

helpText = new Layer
	superLayer: bg
	width: Screen.width, height: 60
	backgroundColor: null
helpText.html = "Tap to see two-line snackbar."
helpText.style =
	"font-size": "42px"
	"line-height": "60px"
	"font-family": "Roboto-Regular, Arial, sans-serif"
	"color": "grey"
	"text-align": "center"
helpText.center()

# Single-line snackbar with no button
android.snackbar("Snackbar is one line by default.")

## Multi-line snackbar with action button
bg.on Events.Click, ->
	android.snackbar("This snackbar supports up to two lines of text. Here is an example.", "done", "rgba(33,150,243,1)", true)

	snackbarActionBTN.on Events.Click, ->
		helpText.style = "color": "green"
		snackbarBG.on Events.AnimationEnd, ->
			helpText.style = "color": "grey"