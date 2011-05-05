// Require modules {{{
var url = require("url"),
    http = require("http"),
    fs = require("fs");
// }}}

// init server {{{
var server = http.createServer(function (req, res) {
    var parsed_url = url.parse(req.url, true);

    fs.readFile(__dirname + "/docs" + parsed_url.pathname + ".html", "utf8", function (err, data) {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/html',
                'Content-Length': err.message.length
            });

            res.end(err.message);

            return;
        }

        response_body = JSON.stringify(data);

        if (typeof parsed_url.query.callback !== 'undefined') {
            response_body = parsed_url.query.callback + '(' + response_body + ')';
        }

        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': response_body.length
        });

        res.end(response_body);
    });
});

server.listen(80);
// }}}
