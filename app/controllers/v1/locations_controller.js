'use strict';

const Nodal = require('nodal');
const Location = Nodal.require('app/models/location.js');

class V1LocationsController extends Nodal.Controller {

  index() {

    Location.query()
      .where(this.params.query)
      .end((err, models) => {
        this.respond(err || models);

      });

  }

  show() {

    Location.find(this.params.route.id, (err, model) => {
      this.respond(err || model);

    });

  }

  create() {

    Location.create(this.params.body, (err, model) => {
      this.respond(err || model);

    });

  }

  update() {

    Location.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Location.destroy(this.params.route.id, (err, model) => {
      this.respond(err || model);

    });

  }

}

module.exports = V1LocationsController;
