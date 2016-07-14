TXRX Magic Mirror Project
=========

## Getting Started

Open the file `config/config.js` in a text editor and define the modules you want to use. Copy and paste any modules you wish to use inbetween the specified lines. The first module (compliments) is already in there. Feel free to change the compliments. These are strings (text inside of `'single quotes'` or `"double quotes"`) separated by commas.

Open the mirror by clicking on the terminal (black screen icon in the top left corner of the desktop), typing `npm start`, then pressing enter. You can close this by pressing `ctrl+w` or by pressing `alt+tab` to pull up the terminal and then pressing `ctrl+c`.

## Add other modules

### Clock

Copy and past the following code in between the two specified lines in `config/config.js`. This gives a clock.

```
		{
			module: 'clock',
			position: 'top_left'
			config: {
				// config options here
			}
		},
```

You can change the position of the clock to any of the following:

| `position` | The location of the module in which the module will be loaded. Possible values are `top_ bar`, `top_left`, `top_center`, `top_right`, `upper_third`, `middle_center`, `lower_third`, `bottom_left`, `bottom_center`, `bottom_right`, `bottom_bar`, `fullscreen_above`, and `fullscreen_below`. This field is optional but most modules require this field to set. Check the documentation of the module for more information. Multiple modules with the same position will be ordered based on the order in the configuration file. |

_ADVANCED_: Please come back to this later if you wish to further customize the clock. Additional clock options can be found at the following URL. 

https://github.com/MichMich/MagicMirror/tree/master/modules/default/clock#configuration-options

### Calendar

Calendar module config:

```
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
```

_ADVANCED OPTIONS_: https://github.com/MichMich/MagicMirror/tree/master/modules/default/calendar#configuration-options

### Current Weather

```
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Houston',
				locationID: '',  //ID from bulk.openweather.org/sample/
				appid: OPEN_WEATHER_APP_ID
			}
		},
```

_ADVANCED OPTIONS_:

### Weather Forecast

```
{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
							location: 'Houston',
							locationID: '5128581',  //ID from bulk.openweather.org/sample/
							appid: OPEN_WEATHER_APP_ID
			}
		},
```

### Twitter Feed

```
		{
			module: 'tweet_feed',
			position: 'bottom_left',
			width: 500,
			config: {
				keys: {
					consumer_key: '',
					consumer_secret: '',
					access_token_key: '',
					access_token_secret: ''
				}
			}
		},
```

_ADVANCED OPTIONS_:

### Word of the day

```
		{
			module: 'MMM-wordnik',
			position: 'bottom_right',
			config: {
				api_key: '77aa061be1b9573118507993c5a055761c9d0d3e885ccd419'
			}
		},
```

_ADVANCED OPTIONS_:

### Todo list

```
		{
			module: 'MMM-Wunderlist',
			position: 'top_right',
			header: 'Wunderlist', // This is optional
			config: {
				accessToken: "",
				clientID: "",
				lists: ["inbox"],
			}
		},
```

_ADVANCED OPTIONS_:

};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
