/*
 * =============================================================================
 *
 *      Filename:   app.js
 *
 *   Description:   Root server file, acts as the point of connection between
 *                  client and routing logic.
 *
 *       Version:   0.0.1
 *
 *        Author:   Collin Stedman
 *
 * =============================================================================
 */

/* Express */
var express = require('express');
var app = express();

/* Static file serving */
app.use(express.compress())
   .use(express.static(__dirname + '/public'));

app.listen(8008);
