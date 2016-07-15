/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'compliments',
			position: 'lower_third',
			config: {
				compliments: {
					morning: [
						"Good morning!",
						"Enjoy your day!",
						"How was your sleep?"
					],
					afternoon: [
						"Good afternoon!",
						"Looking sharp today!"
					],
					evening: [
						"hi jo",
					]
				}
			}
		},
		// Paste other modules below this line
		// Paste other modules above this line
	]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
