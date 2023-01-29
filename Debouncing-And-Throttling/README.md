## Debouncing & Throttling both are used to optimizing the performance tof the web-app. By limiting the rate of function call.

### Debouncing: if the diff betw 2 keystroke events is equal or greater than the time delay fixed, then its debouncing.

### Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, and API calls and improve performance.

In JavaScript, debouncing is a technique used to limit the rate at which a function can fire. It is a way of ensuring that a function is not called more often than a certain time period, by postponing its execution.

When a debounced function is invoked, it sets a timer and waits for a certain amount of time, called the "debounce time," before executing the function. If the function is called again before the timer expires, the previous timer is cancelled and a new one is set. This means that the function is only executed once, after the last call, after the debounce time has passed.

Debouncing is commonly used in web development to improve the performance of a website or application by preventing a function from being called too frequently. For example, it can be used to handle input events, such as key presses or mouse clicks, so that a function is only called after a user has finished typing or clicking, instead of on every keystroke or mouse click.

Examples of situations where debouncing is commonly used include:

Input fields, such as search boxes, to prevent multiple API calls while the user is still typing
Scroll events to prevent too many requests to the server while the user is scrolling
Resizing events to prevent too many layout recalculations while the user is resizing the window.

### Throttling: if the diff betw 2 func call is equal to the time delay fixed, then its debouncing.

### Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.

### Throttling functions generate function calls at a predetermined rate.

In JavaScript, throttling is a technique used to limit the rate at which a function can be called. It is a way of ensuring that a function is not called more often than a certain frequency, by allowing only a certain number of calls within a certain time period.

When a throttled function is invoked, it sets a timer and waits for a certain amount of time, called the "throttle time," before allowing the function to be called again. This means that the function is only executed at most once within the throttle time, regardless of how many times it was invoked.

Throttling is commonly used in web development to improve the performance of a website or application by preventing a function from being called too frequently. For example, it can be used to handle events such as scroll or resize, so that a function is only called a certain number of times per second, instead of on every scroll or resize event.

Examples of situations where throttling is commonly used include:

Scroll events to prevent too many layout recalculations while the user is scrolling
Resizing events to prevent too many layout recalculations while the user is resizing the window
Mouse move events to prevent too many calculations while the user is moving the mouse
Throttling can be implemented using a function that sets a timer and waits for a certain amount of time before allowing the original function to be called again. The timer is reset each time the function is called, so if the function is called again before the timer expires, the previous timer is cancelled and a new one is set.

It's worth noting that debouncing and throttling are closely related but have a subtle difference: debouncing waits for a certain period of time after the last call before executing a function, while throttling allows a certain number of calls within a certain time period.