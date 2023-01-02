## async & defer

`async` and `defer` are boolean attributes that can be added to `script elements in HTML`. They allow you to specify **when the script should be executed in relation to the loading of the page**. And they can speed up your JavaScript load times.

<br>

When we load a webpage, then there are 2 major things happens in the browser -

1. HTML parsing
2. Loading the scripts, it have two parts - A. Fetching the scripts from network, B. Actually executing the scripts line-by-line

### Normal script tag

Suppose the browser parsing the HTML line-by-line, and suddenly encounters script tag. Then the browser stops/pauses the parsing at that line. Then fetches the scripts. Then excutes the scripts fully. Then the parsing of remaining HTML resumes.
This is why many times developers will put their script tags at the bottom of the HTML body so they do not delay the parsing of the HTML.

```
<script src="script.js"></script>
```

<br>

### script tag with `async`

In this case, while the HTML parsing is going on, any of the script with async tag are fetch from the network asynchronously, in parallel along with the HTML parsing. Now as soon as the scripts get fetched and available in the browser, the HTML parsing stops/pauses, and the scripts are executed there. Once the scripts executing over then the HTML parsing resumes/starts again.

`async` attribute **doesn't guarantee the order of executions of the scripts**.

#### Usecase:

To load some external scripts (google analytics ... etc.) which are independent to our normal code, in that case we should use **async** attribute.

#### Example-1

One common use case for the async attribute is to load scripts that are not critical to the initial rendering of the page, but that you want to load as soon as possible. For example, you might use async to load scripts that provide additional functionality or tracking for your site, such as analytics or social media widgets.

Here is an example of how you might use async to load a script that adds Google Analytics to a page:

```
<head>
  <title>My Page</title>
  <script src="analytics.js" async></script>
</head>
<body>
  <!-- page content goes here -->
</body>
```

In this example, the script analytics.js will be loaded as soon as it is downloaded, in parallel with other resources. This means that the page will be rendered and displayed to the user as quickly as possible, and the script will be loaded in the background, ready to add tracking and analytics when it is needed.

Using async in this way can improve the performance of your page by allowing the browser to render the content and start loading other resources while the script is being downloaded. It can also help to ensure that your scripts are loaded and run as quickly as possible, since async scripts are given priority over other resources.

However, it's important to note that async scripts may not always run in the order that they appear in the HTML, so you should be careful when using async if you need to ensure that your scripts are run in a specific order. In such cases, you might want to use the defer attribute instead.

<br>

### script tag with `defer`

In this case, the HTML parsing continues to goes on, and the scripts are fetched in parallel. Here HTML parsing will not stop/pause even if the scripts get fetched. Once the HTML parsing over, only then the scripts get executed.

`defer` attribute **guarantee the order of executions of the scripts**.

#### Usecase:

If one script is dependent on another script, then it's good to use **defer**.

#### Example-1

```
<!-- Dependent Scripts -->
<script src="script1.js" defer></script>
<script src="script2.js" defer></script>
<script src="script3.js" async></script>
```

<br>

#### Example-2

One common use case for the defer attribute is to load scripts that are not critical to the initial rendering of the page. For example, you might use defer to load scripts that add interactive features to the page, such as form validation or click handlers. By loading these scripts after the page has finished parsing, you can ensure that the page is rendered as quickly as possible and that the user can start interacting with the page more quickly.

Here is an example of how you might use defer to load a script that adds form validation to a page:

```
<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" required><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" required><br><br>
  <input type="submit" value="Submit">
</form>

<script src="form-validation.js" defer></script>
```

In this example, the script form-validation.js will be loaded after the page has finished parsing, but before the load event is fired. This means that the form will be rendered and displayed to the user as quickly as possible, and the script will be loaded in the background, ready to add form validation when it is needed.

Using defer in this way can improve the performance of your page by allowing the browser to render the content and start loading other resources while the script is being downloaded. It can also help to ensure that your scripts are run in the order that you expect, since defer scripts are guaranteed to run in the order that they appear in the HTML.

<br>

#### The important thing to note is that the browser does not stop parsing the HTML to get the img or other resources. (downloaded in background)

#### Order: HTML > Stylesheets > Resources/Assets (images, videos etc.) > Scripts
