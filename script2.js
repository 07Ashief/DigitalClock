// Selecting the HTML element with the id 'clock'
const time = document.querySelector('#clock');

// Setting up an interval to update the time every second
setInterval(() => {
    // Creating a new Date object to get the current date and time
    const date = new Date();

    // Updating the innerHTML of the selected element with the formatted time
    time.innerHTML = date.toLocaleTimeString();
}, 1000);


/* Notes

```javascript
// Selecting the HTML element with the id 'clock'
const time = document.querySelector('#clock');

// Setting up an interval to update the time every second
setInterval(() => {
    // Creating a new Date object to get the current date and time
    const date = new Date();

    // Updating the innerHTML of the selected element with the formatted time
    time.innerHTML = date.toLocaleTimeString();
}, 1000);
```

Explanation:

1. **Selecting Element:** `const time = document.querySelector('#clock')` - Selects the HTML element with the id 'clock' and stores it in the variable 'time'.

2. **Set Interval:** `setInterval(() => {...}, 1000)` - Executes the provided function every 1000 milliseconds (1 second), creating an interval to update the time.

3. **Date Object:** `const date = new Date()` - Creates a new Date object representing the current date and time.

4. **Updating InnerHTML:** `time.innerHTML = date.toLocaleTimeString()` - Sets the innerHTML of the selected element ('#clock') to the formatted time using `toLocaleTimeString()` method.

Additional Date Methods:

- `getMilliseconds()`: Returns the milliseconds (0-999).
- `getSeconds()`: Returns the seconds (0-59).
- `getMinutes()`: Returns the minutes (0-59).
- `getHours()`: Returns the hours in 24-hour format (0-23).
- `getDate()`: Returns the day of the month (1-31).
- `getMonth()`: Returns the month (0-11).
- `getFullYear()`: Returns the year.
- `getDay()`: Returns the day of the week (0-6, where 0 is Sunday).

These methods can be used to extract specific components of the date and time. For example, `date.getHours()` would return the current hour.

*/