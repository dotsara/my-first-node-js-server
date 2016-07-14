// this is the usage example from nodejs.org with my added notes

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // ----------
  // stuff I'm adding while reading Node.js docs

  var method = req.method;
  var url = req.url;

  // ----------
  
  if (req.url === '/hello') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bonjour le monde!');
  } else {
    res.statusCode = 404;
    res.end('Move along, nothing to see here!');
  }

  // ha! that worked (: 
});

/*
  below is only running when I run the command in Terminal
  $ node usage-example-from-node.js
  console.log here means the Terminal console, not the _browser_

  - and based on what I'm finding via Googling… in order to output to
    the browser js console, I'd need a module called node-monkey
    * from its page on npm:
      NodeMonkey runs a simple server and uses Socket.IO to create a 
      websocket connection between the browser and server. Its primary
      feature captures anything that would normally be logged to the
      terminal and passes it to the browser for inspection.

    I think that's a bit heavier than what I want just now.

    But now I know!

*/
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Oh hello. You want http://${hostname}:${port}/hello for the good stuff`);
});