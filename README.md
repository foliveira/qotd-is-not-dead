#Quote of the day Server

[![npm package](https://nodei.co/npm/qotd-is-not-dead.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/qotd-is-not-dead/)

This server runs on port 17 and sends a quote wheh a client connects to it. It is an implementation of [RFC 865](https://tools.ietf.org/html/rfc865)

##Install

```sh
$ npm install -g qotd-is-not-dead
```

##Run

You'll need to run it with elevated privileges since it uses a reserved port.


You need to specify a filename with the QOTD environment variable. That file should contain your quote of the day

```sh
$ sudo QOTD=fancy-quotes.txt qotd-is-not-dead
```

You can then update the file while the server is running and the newer version will be served on the following request.
