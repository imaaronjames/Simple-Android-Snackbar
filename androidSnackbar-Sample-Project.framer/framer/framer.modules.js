require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"androidSnackbar":[function(require,module,exports){
exports.Snackbar = function(snackbarMessage, actionText, textColor, twoLines) {
  var createActionBTN, makeActionBTN, snackbarMult, snackbarText, textHeight;
  if (twoLines === true) {
    snackbarMult = 1.44;
  } else {
    snackbarMult = 1;
  }
  if (snackbarMult === 1.44) {
    textHeight = 120;
  } else {
    textHeight = 60;
  }
  if (actionText === null) {
    makeActionBTN = false;
  } else {
    makeActionBTN = true;
  }
  if (actionText === void 0) {
    makeActionBTN = false;
  }
  if (textColor === null) {
    textColor = "rgba(128,203,196,1)";
  }
  window["snackbarBG"] = new Layer({
    name: "snackbarBG",
    maxY: Screen.height + 168,
    width: Screen.width,
    height: 168 * snackbarMult,
    backgroundColor: "rgba(50,50,50,1)",
    opacity: 1,
    shadowX: 0,
    shadowY: 0,
    shadowBlur: 6,
    shadowColor: "rgba(0,0,0,0.5)"
  });
  snackbarBG.states.add({
    up: {
      maxY: Screen.height
    },
    down: {
      maxY: Screen.height + snackbarBG.height
    }
  });
  snackbarBG.states.animationOptions = {
    curve: "spring(300,45,0)"
  };
  snackbarText = new Layer({
    name: "snackbarText",
    superLayer: snackbarBG,
    x: 56,
    y: 56,
    width: 702,
    height: textHeight,
    backgroundColor: null,
    opacity: 0
  });
  snackbarText.html = snackbarMessage;
  snackbarText.style = {
    "font-size": "42px",
    "line-height": "60px",
    "font-family": "Roboto-Regular, Arial, sans-serif",
    "color": "#fff"
  };
  snackbarText.states.add({
    up: {
      opacity: 1
    }
  });
  snackbarText.states.animationOptions = {
    curve: "ease-in-out",
    time: 0.3,
    delay: 0.2
  };
  createActionBTN = function() {
    window["snackbarActionBTN"] = new Layer({
      name: "snackbarActionBTN",
      superLayer: snackbarBG,
      maxX: snackbarBG.width,
      width: 300,
      height: snackbarBG.height,
      backgroundColor: null,
      opacity: 0
    });
    snackbarActionBTN.states.add({
      up: {
        opacity: 1
      }
    });
    snackbarActionBTN.states.animationOptions = {
      curve: "ease-in-out",
      time: 0.3,
      delay: 0.2
    };
    window["snackbarActionText"] = new Layer({
      name: actionText,
      superLayer: snackbarActionBTN,
      midX: snackbarActionBTN.width / 2,
      midY: snackbarActionBTN.height / 2,
      width: snackbarActionBTN.width,
      height: 60,
      backgroundColor: null
    });
    snackbarActionText.html = actionText;
    snackbarActionText.style = {
      "font-size": "42px",
      "line-height": "60px",
      "font-family": "Roboto-Medium, Arial-Medium, sans-serif",
      "font-weight": "Medium",
      "text-transform": "uppercase",
      "color": textColor,
      "text-align": "center"
    };
    snackbarActionBTN.states["switch"]("up");
    return snackbarActionBTN.on(Events.Click, function() {
      snackbarBG.states["switch"]("down");
      return snackbarBG.on(Events.AnimationEnd, function() {
        return this.destroy();
      });
    });
  };
  if (makeActionBTN === true) {
    createActionBTN();
  } else {
    snackbarText.width = 956;
  }
  snackbarBG.states["switch"]("up");
  snackbarText.states["switch"]("up");
  return snackbarBG.on(Events.AnimationEnd, function() {
    return Utils.delay(8, function() {
      snackbarBG.states["switch"]("down");
      return snackbarBG.on(Events.AnimationEnd, function() {
        return this.destroy();
      });
    });
  });
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWFyb25qYW1lcy9Ecm9wYm94L0ZyYW1lci9TaW1wbGUtQW5kcm9pZC1TbmFja2Jhci9hbmRyb2lkU25hY2tiYXItU2FtcGxlLVByb2plY3QuZnJhbWVyL21vZHVsZXMvYW5kcm9pZFNuYWNrYmFyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ3dCQSxPQUFPLENBQUMsUUFBUixHQUFtQixTQUFDLGVBQUQsRUFBa0IsVUFBbEIsRUFBOEIsU0FBOUIsRUFBeUMsUUFBekM7QUFFbEIsTUFBQTtFQUFBLElBQUcsUUFBQSxLQUFZLElBQWY7SUFBeUIsWUFBQSxHQUFlLEtBQXhDO0dBQUEsTUFBQTtJQUFrRCxZQUFBLEdBQWUsRUFBakU7O0VBQ0EsSUFBRyxZQUFBLEtBQWdCLElBQW5CO0lBQTZCLFVBQUEsR0FBYSxJQUExQztHQUFBLE1BQUE7SUFBbUQsVUFBQSxHQUFhLEdBQWhFOztFQUNBLElBQUcsVUFBQSxLQUFjLElBQWpCO0lBQTJCLGFBQUEsR0FBZ0IsTUFBM0M7R0FBQSxNQUFBO0lBQXNELGFBQUEsR0FBZ0IsS0FBdEU7O0VBQ0EsSUFBRyxVQUFBLEtBQWMsTUFBakI7SUFBZ0MsYUFBQSxHQUFnQixNQUFoRDs7RUFDQSxJQUFHLFNBQUEsS0FBYSxJQUFoQjtJQUEwQixTQUFBLEdBQVksc0JBQXRDOztFQUdBLE1BQU8sQ0FBQSxZQUFBLENBQVAsR0FBMkIsSUFBQSxLQUFBLENBQzFCO0lBQUEsSUFBQSxFQUFNLFlBQU47SUFDQSxJQUFBLEVBQU0sTUFBTSxDQUFDLE1BQVAsR0FBZ0IsR0FEdEI7SUFFQSxLQUFBLEVBQU8sTUFBTSxDQUFDLEtBRmQ7SUFFcUIsTUFBQSxFQUFRLEdBQUEsR0FBTSxZQUZuQztJQUdBLGVBQUEsRUFBaUIsa0JBSGpCO0lBSUEsT0FBQSxFQUFTLENBSlQ7SUFLQSxPQUFBLEVB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NUIsRUFBbUMsU0FBQTtNQUNsQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQUQsQ0FBakIsQ0FBeUIsTUFBekI7YUFDQSxVQUFVLENBQUMsRUFBWCxDQUFjLE1BQU0sQ0FBQyxZQUFyQixFQUFtQyxTQUFBO2VBQ2xDLElBQUksQ0FBQyxPQUFMLENBQUE7TUFEa0MsQ0FBbkM7SUFGa0MsQ0FBbkM7RUEvQmlCO0VBb0NsQixJQUFHLGFBQUEsS0FBaUIsSUFBcEI7SUFBOEIsZUFBQSxDQUFBLEVBQTlCO0dBQUEsTUFBQTtJQUNLLFlBQVksQ0FBQyxLQUFiLEdBQXFCLElBRDFCOztFQUlBLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBRCxDQUFqQixDQUF5QixJQUF6QjtFQUNBLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBRCxDQUFuQixDQUEyQixJQUEzQjtTQUNBLFVBQVUsQ0FBQyxFQUFYLENBQWMsTUFBTSxDQUFDLFlBQXJCLEVBQW1DLFNBQUE7V0FDbEMsS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWUsU0FBQTtNQUNkLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBRCxDQUFqQixDQUF5QixNQUF6QjthQUNBLFVBQVUsQ0FBQyxFQUFYLENBQWMsTUFBTSxDQUFDLFlBQXJCLEVBQW1DLFNBQUE7ZUFDbEMsSUFBSSxDQUFDLE9BQUwsQ0FBQTtNQURrQyxDQUFuQztJQUZjLENBQWY7RUFEa0MsQ0FBbkM7QUF2RmtCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgTW9kdWxlIGNyZWF0ZWQgYnkgQWFyb24gSmFtZXMgfCBBcHJpbCAxNnRoLCAyMDE2XG4jXG4jIFBsZWFzZSBpbnN0YWxsIHRoZSBmb250IFJvYm90byBoZXJlOiBodHRwOi8vYml0Lmx5LzFQWncxVDBcbiNcbiMgSW5jbHVkZSB0aGlzIGZpbGUgaW4geW91ciBtb2R1bGVzIGZvbGRlci5cbiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSBhdCB0aGUgdG9wIG9mIHlvdXIgRnJhbWVyIHByb2plY3Q6XG4jIGFuZHJvaWQgPSByZXF1aXJlIFwiYW5kcm9pZFNuYWNrYmFyXCJcbiNcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSB1c2luZyB0aGlzIGZ1bmN0aW9uOlxuIyBhbmRyb2lkLnNuYWNrYmFyKFwiSXQgYWxzbyBzdXBwb3J0cyB0ZXh0LW9ubHkgc25hY2tiYXJzLlwiLCBudWxsLCBudWxsLCBmYWxzZSlcbiNcbiMgQXZhaWxhYmxlIG9wdGlvbnM6XG4jIHNuYWNrYmFyTWVzc2FnZTogYWRkIGFueSBzdHJpbmcgZm9yIHlvdXIgbWVzc2FnZVxuIyBhY3Rpb25UZXh0OiBhZGQgYSBzaG9ydCBzdHJpbmcgaWYgeW91ciBzbmFja2JhciBuZWVkcyBhbiBhY3Rpb24gYnV0dG9uIG9yIGxlYXZlIG51bGxcbiMgdGV4dENvbG9yOiBhZGQgYSBjb2xvciB0byBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBhY3Rpb24gYnV0dG9uIHRleHQgb3IgbGVhdmUgbnVsbFxuIyB0d29MaW5lczogaWYgeW91ciBtZXNzYWdlIGlzIGxvbmcsIHlvdSBjYW4gbWFrZSB0aGUgc25hY2tiYXIgbGFyZ2VyIHdpdGggdHJ1ZVxuI1xuIyBTYW1wbGVzOlxuIyBhbmRyb2lkLnNuYWNrYmFyKFwiVGhpcyBzbmFja2JhciBzdXBwb3J0cyB1cCB0byB0d28gbGluZXMgb2YgdGV4dC4gSGVyZSBpcyBhbiBleGFtcGxlLlwiLCBcImRvbmVcIiwgXCJyZ2JhKDMzLDE1MCwyNDMsMSlcIiwgdHJ1ZSlcbiMgYW5kcm9pZC5zbmFja2JhcihcIlNpbXBsZSBzbmFja2JhciBzdXBwb3J0cyBtdWx0aXBsZSBsaW5lcyBvZiB0ZXh0LlwiLCBudWxsLCBudWxsLCBmYWxzZSlcbiNcbiMgWW91IGNhbiBhZGQgYW4gRXZlbnQgdG8gdGhlIHNuYWNrYmFyQWN0aW9uQlROOlxuIyBzbmFja2JhckFjdGlvbkJUTi5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cbmV4cG9ydHMuU25hY2tiYXIgPSAoc25hY2tiYXJNZXNzYWdlLCBhY3Rpb25UZXh0LCB0ZXh0Q29sb3IsIHR3b0xpbmVzKSAtPlxuXG5cdGlmIHR3b0xpbmVzID09IHRydWUgdGhlbiBzbmFja2Jhck11bHQgPSAxLjQ0IGVsc2Ugc25hY2tiYXJNdWx0ID0gMVxuXHRpZiBzbmFja2Jhck11bHQgPT0gMS40NCB0aGVuIHRleHRIZWlnaHQgPSAxMjAgZWxzZSB0ZXh0SGVpZ2h0ID0gNjBcblx0aWYgYWN0aW9uVGV4dCA9PSBudWxsIHRoZW4gbWFrZUFjdGlvbkJUTiA9IGZhbHNlIGVsc2UgbWFrZUFjdGlvbkJUTiA9IHRydWVcblx0aWYgYWN0aW9uVGV4dCA9PSB1bmRlZmluZWQgdGhlbiBtYWtlQWN0aW9uQlROID0gZmFsc2Vcblx0aWYgdGV4dENvbG9yID09IG51bGwgdGhlbiB0ZXh0Q29sb3IgPSBcInJnYmEoMTI4LDIwMywxOTYsMSlcIlxuXG5cdCMgQ3JlYXRlIHNuYWNrYmFyIGxheWVyc1xuXHR3aW5kb3dbXCJzbmFja2JhckJHXCJdID0gbmV3IExheWVyXG5cdFx0bmFtZTogXCJzbmFja2JhckJHXCJcblx0XHRtYXhZOiBTY3JlZW4uaGVpZ2h0ICsgMTY4XG5cdFx0d2lkdGg6IFNjcmVlbi53aWR0aCwgaGVpZ2h0OiAxNjggKiBzbmFja2Jhck11bHRcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1MCw1MCw1MCwxKVwiXG5cdFx0b3BhY2l0eTogMVxuXHRcdHNoYWRvd1g6IDAsIHNoYWRvd1k6IDAsIHNoYWRvd0JsdXI6IDZcblx0XHRzaGFkb3dDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNSlcIlxuXHRzbmFja2JhckJHLnN0YXRlcy5hZGRcblx0XHR1cDogbWF4WTogU2NyZWVuLmhlaWdodFxuXHRcdGRvd246IG1heFk6IFNjcmVlbi5oZWlnaHQgKyBzbmFja2JhckJHLmhlaWdodFxuXHRzbmFja2JhckJHLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cblx0XHRjdXJ2ZTogXCJzcHJpbmcoMzAwLDQ1LDApXCJcblxuXHQjIENyZWF0ZSBzbmFja2JhciB0ZXh0XG5cdHNuYWNrYmFyVGV4dCA9IG5ldyBMYXllclxuXHRcdG5hbWU6IFwic25hY2tiYXJUZXh0XCJcblx0XHRzdXBlckxheWVyOiBzbmFja2JhckJHXG5cdFx0eDogNTYsIHk6IDU2XG5cdFx0d2lkdGg6IDcwMiwgaGVpZ2h0OiB0ZXh0SGVpZ2h0XG5cdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0b3BhY2l0eTogMFxuXHRzbmFja2JhclRleHQuaHRtbCA9IHNuYWNrYmFyTWVzc2FnZVxuXHRzbmFja2JhclRleHQuc3R5bGUgPVxuXHRcdFwiZm9udC1zaXplXCI6IFwiNDJweFwiXG5cdFx0XCJsaW5lLWhlaWdodFwiOiBcIjYwcHhcIlxuXHRcdFwiZm9udC1mYW1pbHlcIjogXCJSb2JvdG8tUmVndWxhciwgQXJpYWwsIHNhbnMtc2VyaWZcIlxuXHRcdFwiY29sb3JcIjogXCIjZmZmXCJcblx0c25hY2tiYXJUZXh0LnN0YXRlcy5hZGRcblx0XHR1cDogb3BhY2l0eTogMVxuXHRzbmFja2JhclRleHQuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRcdGN1cnZlOiBcImVhc2UtaW4tb3V0XCJcblx0XHR0aW1lOiAwLjNcblx0XHRkZWxheTogMC4yXG5cblx0IyBGdW5jdGlvbiB0byBjcmVhdGUgQWN0aW9uIGJ1dHRvbiBpZiBkZWZpbmVkXG5cdGNyZWF0ZUFjdGlvbkJUTiA9ICgpIC0+XG5cdFx0d2luZG93W1wic25hY2tiYXJBY3Rpb25CVE5cIl0gPSBuZXcgTGF5ZXJcblx0XHRcdG5hbWU6IFwic25hY2tiYXJBY3Rpb25CVE5cIlxuXHRcdFx0c3VwZXJMYXllcjogc25hY2tiYXJCR1xuXHRcdFx0bWF4WDogc25hY2tiYXJCRy53aWR0aFxuXHRcdFx0d2lkdGg6IDMwMCwgaGVpZ2h0OiBzbmFja2JhckJHLmhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0c25hY2tiYXJBY3Rpb25CVE4uc3RhdGVzLmFkZFxuXHRcdFx0dXA6IG9wYWNpdHk6IDFcblx0XHRzbmFja2JhckFjdGlvbkJUTi5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHRjdXJ2ZTogXCJlYXNlLWluLW91dFwiXG5cdFx0XHR0aW1lOiAwLjNcblx0XHRcdGRlbGF5OiAwLjJcblxuXHRcdHdpbmRvd1tcInNuYWNrYmFyQWN0aW9uVGV4dFwiXSA9IG5ldyBMYXllclxuXHRcdFx0bmFtZTogYWN0aW9uVGV4dFxuXHRcdFx0c3VwZXJMYXllcjogc25hY2tiYXJBY3Rpb25CVE5cblx0XHRcdG1pZFg6IHNuYWNrYmFyQWN0aW9uQlROLndpZHRoIC8gMiwgbWlkWTogc25hY2tiYXJBY3Rpb25CVE4uaGVpZ2h0IC8gMlxuXHRcdFx0d2lkdGg6IHNuYWNrYmFyQWN0aW9uQlROLndpZHRoLCBoZWlnaHQ6IDYwXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRzbmFja2JhckFjdGlvblRleHQuaHRtbCA9IGFjdGlvblRleHRcblx0XHRzbmFja2JhckFjdGlvblRleHQuc3R5bGUgPVxuXHRcdFx0XCJmb250LXNpemVcIjogXCI0MnB4XCJcblx0XHRcdFwibGluZS1oZWlnaHRcIjogXCI2MHB4XCJcblx0XHRcdFwiZm9udC1mYW1pbHlcIjogXCJSb2JvdG8tTWVkaXVtLCBBcmlhbC1NZWRpdW0sIHNhbnMtc2VyaWZcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiOiBcIk1lZGl1bVwiXG5cdFx0XHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblx0XHRcdFwiY29sb3JcIjogdGV4dENvbG9yXG5cdFx0XHRcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuXHRcdHNuYWNrYmFyQWN0aW9uQlROLnN0YXRlcy5zd2l0Y2goXCJ1cFwiKVxuXHRcdHNuYWNrYmFyQWN0aW9uQlROLm9uIEV2ZW50cy5DbGljaywgLT5cblx0XHRcdHNuYWNrYmFyQkcuc3RhdGVzLnN3aXRjaChcImRvd25cIilcblx0XHRcdHNuYWNrYmFyQkcub24gRXZlbnRzLkFuaW1hdGlvbkVuZCwgLT5cblx0XHRcdFx0dGhpcy5kZXN0cm95KClcblxuXHRpZiBtYWtlQWN0aW9uQlROID09IHRydWUgdGhlbiBjcmVhdGVBY3Rpb25CVE4oKVxuXHRlbHNlIHNuYWNrYmFyVGV4dC53aWR0aCA9IDk1NlxuXG5cdCMjIExvZ2ljIG9uIGxvYWRcblx0c25hY2tiYXJCRy5zdGF0ZXMuc3dpdGNoKFwidXBcIilcblx0c25hY2tiYXJUZXh0LnN0YXRlcy5zd2l0Y2goXCJ1cFwiKVxuXHRzbmFja2JhckJHLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsIC0+XG5cdFx0VXRpbHMuZGVsYXkgOCwgLT5cblx0XHRcdHNuYWNrYmFyQkcuc3RhdGVzLnN3aXRjaChcImRvd25cIilcblx0XHRcdHNuYWNrYmFyQkcub24gRXZlbnRzLkFuaW1hdGlvbkVuZCwgLT5cblx0XHRcdFx0dGhpcy5kZXN0cm95KClcbiJdfQ==
