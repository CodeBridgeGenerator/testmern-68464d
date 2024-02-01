const users = require("./users/users.service.js");
const laravelJson = require("./laravelJson/laravelJson.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(laravelJson);
    // ~cb-add-configure-service-name~
};
