### Similarities between localStorage, sessionStorage & cookie

> 1.  All three methods of storage are used to store information on the user's browser which can be accessed even after navigating to new pages on your site. This data is also saved to the user's exact browser they are using so if they have your site open in Chrome it will only save the information to their Chrome browser on the device they are currently on. This means if they open your site later in a different browser the data will no longer be there.

> 2.  All of 3 supports String data-type.
> 3.  Browser support for all 3 are very high.

### Cookies vs. Web Storage

**Q:1** : Cookies vs. Web Storage

> Cookies are intended to be read by the server, whereas localStorage can only be read by the browser. Thus, cookies are restricted to small data volumes(4KB), while localStorage can store more data(10MB).

> **1. Sent with requests**: Only cookies are, not Web Storage (localStorage, sessionStorage)
> 
> **2. Storage Location**: Cookies => Browser & Server, Web Storage(localStorage, sessionStorage) => Browser
> 
> **3. Editable & Blockable by users**: All of them
> 
> **4. Expiration**: Cookies => Manually set, localStorage => Never, sessionStorage => On tab close
