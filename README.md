Bootstrap-Backbone-Notification
===============================

Bootstrap/Backbone view for displaying notifications

### Example usage
```js
var note = require('Bootstrap-Backbone-Notification');

new note({
	'header': 'This is a header',
	'message': 'This is the message',
	'type': 'info'
});
```

###Options
#### options.header
The header of the error. Title if you will

#### options.message
The body of the notification.

#### options.type
The type of notification you would like. Colors are in line with Bootstrap's default colors.

	Type: `String`
	Default: `info`
	Valid values: `info|success|warning|error`

#### options.animateInClass
If you have an animation class you would like to use.

	Type: `String`
	Default: ``

#### options.animateOutClass
If you have an animation you would like to use for when the message is dismissed

	Type: `String`
	Default: ``

#### options.speed
The speed at which the animation class runs.
fast === 300ms
normal === 500ms
slow === 1000ms

	Type: `String`
	Default: `fast`
	Valid values: `fast|normal|slow`

