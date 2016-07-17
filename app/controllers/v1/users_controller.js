'use strict';

const Nodal = require('nodal');
const User = Nodal.require('app/models/user.js');

let responsemodel = ['id', 'username', 'email', 'created_at'];

class V1UsersController extends Nodal.Controller {

  index() {

    User.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models, responsemodel);

      });

  }

  show() {

    User.find(this.params.route.id, (err, model) => {

      this.respond(err || model, responsemodel);

    });

  }

  create() {

    User.create(this.params.body, (err, model) => {

      this.respond(err || model, responsemodel);

    });

  }

  update() {

    User.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model, responsemodel);

    });

  }

  destroy() {

    User.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model, responsemodel);

    });

  }

}

module.exports = V1UsersController;
