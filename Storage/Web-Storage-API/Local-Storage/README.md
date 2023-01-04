# localStorage

### localStorage is read-only property stored on the window object (global) of browser.

### How long does browser localStorage last?

> It does not expire even when the user closes the window or tab. Instead, the data remains in the browser until and unless the browser's memory is cleared manually by the user.

> localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.

### localStorage with TTL(Time to expiry) setup

TTL, or "Time to Live," is a value that can be set when storing data in localStorage. It specifies the maximum amount of time that the data should be considered valid. After the TTL has expired, the data is deleted from localStorage.

```
// Store data in localStorage with a TTL of 1 day
localStorage.setItem('key', 'value', 86400);

// Later, check if the data has expired
if (localStorage.getItem('key')) {
  console.log('Data has not expired');
} else {
  console.log('Data has expired');
}
```

Note that the TTL is not a precise timer - it is only checked when the page is loaded or when the data is accessed using localStorage.getItem(). Also, the TTL is specified in seconds, so in the example above, the data will expire after 1 day (86400 seconds).
