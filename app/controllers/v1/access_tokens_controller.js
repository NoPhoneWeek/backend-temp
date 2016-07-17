'use strict';

const Nodal = require('nodal');
const AccessToken = Nodal.require('app/models/access_token.js');

class V1AccessTokensController extends Nodal.Controller {
  create() {

    AccessToken.login(this.params, (err, model) => {
      this.respond(err || model, ['access_token', 'token_type', 'created_at', 'expires_at']);
    });

  }

  destroy(){
    AccessToken.logout(this.params, (err, accessToken) => {
      this.respond(err || accessToken, ['access_token'])
    });
  }

}

module.exports = V1AccessTokensController;
