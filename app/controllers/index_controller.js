'use strict';

const Nodal = require('nodal');

class IndexController extends Nodal.Controller {

  get() {

    this.respond({message: 'Welcome to the #DownWeek API.'});

  }

}

module.exports = IndexController;
