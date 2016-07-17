TXRX Magic Mirror Project
=========

## Getting Started

Open the file `config/config.js` in a text editor and define the modules you want to use. Copy and paste any modules you wish to use inbetween the specified lines. The first module (compliments) is already in there. Feel free to change the compliments. These are strings (text inside of `'single quotes'` or `"double quotes"`) separated by commas.

Open the mirror by clicking on the terminal (black screen icon in the top left corner of the desktop), typing `npm start`, then pressing enter. You can close this by pressing `ctrl+w` or by pressing `alt+tab` to pull up the terminal and then pressing `ctrl+c`.

## Add other modules

### Clock

Copy and past the following code in between the two specified lines in `config/config.js`. This gives a clock.

```javascript
		{
			module: 'clock',
			position: 'top_left',
			config: {
				// config options here
			}
		},
```

You can change the position of the clock to any of the following:

| **Option** | **Description** |
| --- | --- |
| `position` | The location of the module in which the module will be loaded. Possible values are `top_ bar`, `top_left`, `top_center`, `top_right`, `upper_third`, `middle_center`, `lower_third`, `bottom_left`, `bottom_center`, `bottom_right`, `bottom_bar`, `fullscreen_above`, and `fullscreen_below`. This field is optional but most modules require this field to set. Check the documentation of the module for more information. Multiple modules with the same position will be ordered based on the order in the configuration file. |

### Calendar

Calendar module config:

```javascript
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

### Current Weather

```javascript
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Houston',
				locationID: '',
				appid: '3dc9d16750474387b0a3ddd96d55b15c'
			}
		},
```

### Weather Forecast

```javascript
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'Houston',
				locationID: '5128581',
				appid: '3dc9d16750474387b0a3ddd96d55b15c'
			}
		},
```

### Twitter Feed

```javascript
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

If you do not have a twitter account you will need to make one and follow a few people to use this.

Once you have a twitter account you will need to log into twitter and get a private key. This unique code tells twitter that you have given any program posessing these keys permission to access your account.

1) *Create Application* - Go to https://apps.twitter.com/, login, click "Create new app" (top right corner), and fill out the form. If you don't have a website, just enter "http://example.com".

2) *Generate Keys* - You should be redirected to the settings page for your new application. Click the "Keys and Access Tokens" tab. Scroll down to "Token Actions" and click "Create Token".

3) *Configure mirror* - Open your application config file, `config/config.js`, in your favorite codeeditor. And add the module config from the previou section to the list of modules.

4) *Copy Tokens to the Config* - Copy the consumer key, consumer secret, access token, and access token secret to the appropriate places in the module config you copied from step 3.

### News Module

```
		{
			module: 'newsfeed',
			position: 'bottom_bar', // This can be any of the regions. Best results in center regions.
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
					},
					{
						title: "BBC",
						url: "http://feeds.bbci.co.uk/news/video_and_audio/news_front_page/rss.xml?edition=uk",
					},
				]
			}
		},
```

### Word of the day

```javascript
		{
			module: 'MMM-wordnik',
			position: 'bottom_right',
			config: {
				api_key: '77aa061be1b9573118507993c5a055761c9d0d3e885ccd419'
			}
		},
```

### Todo list

```javascript
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

To use the todo list you must create a Wunderlist account and then generate an API key.

1) Go to https://www.wunderlist.com click "create a free account" (top right button) and fill out the form.

2) Select any lists you want to start with.

3) Create a few todo items.

4) Go to https://developer.wunderlist.com/apps/new in a new tab - you should already be logged in with the account created above

5) Enter any name ("Magic Mirror", for example) and enter `http://example.com` for the APP URL and `http://example.com/callback` for the APP CALLBACK. Hit create app.

6) Copy the CLIENT ID into the `clientID` field in the todo list config.

7) Press "Create Access Token". Copy the access token at the top of the last page into the `accessToken` field in the todo list config.

8) Enter any lists you added in the `lists` config value for the wonderlist app. For example, if you added a "Work" todo list, the config value should read `lists: ["inbox","Work"],`. NOTE: This is case sensetive.

9) Load the Magic Mirror from the terminal and the todo list should appear.

## Alarm Clock

A simple alarm clock for magic mirror. Any keypress shuts off the alarm. Clone this repo to your modules directory and replace the alarm.mp3 file with your own. Then copy the config over, change the position, and set the times for each of the days. Times can be set at the weekday level or bulk times are available for all_days, weekdays, and weekends. Most time formats should be acceptable. The rules for time formats are:

* A number before the (optional) colon is the hour. '8:00' and '8' both are parsed as "eight in the morning"

* The number after the (optional) colon is the minute.

* If the string contains a "p" anywhere, 12 is added to the hour.

* Error catching on times may not be great, so weird times may break the mirror or wake you up at odd hours. Caveat emptor.      

```javascript
    {
      module: 'MM-alarm',
      position: "lower_third",
      sounds: ['/modules/MM-alarm/alarm.mp3'],
      config: {
        times: {
          sunday: [],
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          weekdays: [],
          weekends: [],
          all_week: ['10:15','10:55p'],
        }
      },
    },
```

Advanced Options
========

Compliments: https://github.com/MichMich/MagicMirror/tree/master/modules/default/compliments#compliment-configuration

Clock: https://github.com/MichMich/MagicMirror/tree/master/modules/default/clock#configuration-options

Calendar: https://github.com/MichMich/MagicMirror/tree/master/modules/default/calendar#configuration-options

Current Weather: https://github.com/MichMich/MagicMirror/tree/master/modules/default/currentweather#configuration-options

Weather Forecast: https://github.com/MichMich/MagicMirror/tree/master/modules/default/weatherforecast#configuration-options

News Feed: https://github.com/MichMich/MagicMirror/tree/master/modules/default/newsfeed#configuration-options

Todo List: https://github.com/paviro/MMM-Wunderlist#configuration-options
