Razoss Content Server
=====================

For requests of the form::

    /path/to/file?callback=cb

the server returns the content of::

    /docs/path/to/file.html

in the jsonp format.

Missing files returns 500 error
