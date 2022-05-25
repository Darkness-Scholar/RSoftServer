# NETLIFY SERVER TEMPLATE

| : : Author

    * Facebook: https://www.facebook.com/tlt69

    * Github: https://github.com/Darkness-Scholar

    * Production: https://royalsoft.netlify.app

| : : Install

    * git clone ttps://github.com/Darkness-Scholar/RSoftServer.git

    * npm install

| : : Running on local:

    * npm install netlify-cli -g

    * netlify dev


## METHOD:


### Audio:


1. `GET: /audio/stream <string>`

    - Query: { id: "youtube video id - require" }

    - Example: https://https://royalsoft.netlify.app/audio/stream?id=5Jm9g0YdGDU

2. `POST: /audio/search <object>`

    - Body: { keyword: "require", quantity: "require" }

    - Example: `await axios.post("https://https://royalsoft.netlify.app/audio/search", { keyword: "lac troi", quantity: 10 })`
