#Quote of the day Server

This server runs on port 17 and echoes whatever a client sends to it. It is an implementation of [RFC 865](https://tools.ietf.org/html/rfc865)

##Install

npm install -g qotd-is-not-dead

##Run

You'll need to run it with elevated privileges since it uses a reserved port.

```sh
$ sudo qotd-is-not-dead
```

##Quotes source

There's a file (qotd.txt) that can be updated with your quote of the day. You can update it while the server is running and the newer version will be served on the next request.

You can also specify a filename with the QOTD environment variable and that will be served.

```sh
$ sudo QOTD=fancy-quotes.txt qotd-is-not-dead
```

The same applies, you can update the file while the server is running and the newer version will be served on the following request.
