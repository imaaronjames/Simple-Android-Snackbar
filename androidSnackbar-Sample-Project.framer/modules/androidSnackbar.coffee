# Module created by Aaron James | November 25th, 2015
#
# Please install the font Roboto here: http://bit.ly/1PZw1T0
#
# Include this file in your modules folder.
# Add the following line at the top of your Framer project:
# android = require "androidSnackbar"
#
# Reference the contents by using this function:
# android.snackbar("It also supports text-only snackbars.", null, null, false)
#
# Available options:
# snackbarMessage: add any string for your message
# actionText: add a short string if your snackbar needs an action button or leave null
# textColor: add a color to change the color of the action button text or leave null
# twoLines: if your message is long, you can make the snackbar larger with true
#
# Samples:
# android.snackbar("This snackbar supports up to two lines of text. Here is an example.", "done", "rgba(33,150,243,1)", true)
# android.snackbar("Simple snackbar supports multiple lines of text.", null, null, false)
#
# You can add an Event to the snackbarActionBTN:
# snackbarActionBTN.on Events.Click, ->

exports.snackbar = (snackbarMessage, actionText, textColor, twoLines) ->

	if twoLines == true then snackbarMult = 1.44 else snackbarMult = 1
	if snackbarMult == 1.44 then textHeight = 120 else textHeight = 60
	if actionText == null then makeActionBTN = false else makeActionBTN = true
	if actionText == undefined then makeActionBTN = false
	if textColor == null then textColor = "rgba(128,203,196,1)"

	# Create snackbar layers
	window["snackbarBG"] = new Layer
		name: "snackbarBG"
		maxY: Screen.height + 168
		width: Screen.width, height: 168 * snackbarMult
		backgroundColor: "rgba(50,50,50,1)"
		opacity: 1
		shadowX: 0, shadowY: 0, shadowBlur: 6
		shadowColor: "rgba(0,0,0,0.5)"
	snackbarBG.states.add
		up: maxY: Screen.height
		down: maxY: Screen.height + snackbarBG.height
	snackbarBG.states.animationOptions =
		curve: "spring(300,45,0)"

	# Create snackbar text
	snackbarText = new Layer
		name: "snackbarText"
		superLayer: snackbarBG
		x: 56, y: 56
		width: 702, height: textHeight
		backgroundColor: null
		opacity: 0
	snackbarText.html = snackbarMessage
	snackbarText.style =
		"font-size": "42px"
		"line-height": "60px"
		"font-family": "Roboto-Regular, Arial, sans-serif"
		"color": "#fff"
	snackbarText.states.add
		up: opacity: 1
	snackbarText.states.animationOptions =
		curve: "ease-in-out"
		time: 0.3
		delay: 0.2

	# Function to create Action button if defined
	createActionBTN = () ->
		window["snackbarActionBTN"] = new Layer
			name: "snackbarActionBTN"
			superLayer: snackbarBG
			maxX: snackbarBG.width
			width: 300, height: snackbarBG.height
			backgroundColor: null
			opacity: 0
		snackbarActionBTN.states.add
			up: opacity: 1
		snackbarActionBTN.states.animationOptions =
			curve: "ease-in-out"
			time: 0.3
			delay: 0.2

		window["snackbarActionText"] = new Layer
			name: actionText
			superLayer: snackbarActionBTN
			midX: snackbarActionBTN.width / 2, midY: snackbarActionBTN.height / 2
			width: snackbarActionBTN.width, height: 60
			backgroundColor: null
		snackbarActionText.html = actionText
		snackbarActionText.style =
			"font-size": "42px"
			"line-height": "60px"
			"font-family": "Roboto-Medium, Arial-Medium, sans-serif"
			"font-weight": "Medium"
			"text-transform": "uppercase"
			"color": textColor
			"text-align": "center"
		snackbarActionBTN.states.switch("up")
		snackbarActionBTN.on Events.Click, ->
			snackbarBG.states.switch("down")
			snackbarBG.on Events.AnimationEnd, ->
				this.destroy()

	if makeActionBTN == true then createActionBTN()
	else snackbarText.width = 956

	## Logic on load
	snackbarBG.states.switch("up")
	snackbarText.states.switch("up")
	snackbarBG.on Events.AnimationEnd, ->
		Utils.delay 8, ->
			snackbarBG.states.switch("down")
			snackbarBG.on Events.AnimationEnd, ->
				this.destroy()
