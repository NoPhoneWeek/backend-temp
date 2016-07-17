'use strict';

const Nodal = require('nodal');

class CreateLocations extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016071705551968;
  }

  up() {

    return [
      this.createTable("locations", [{"name":"name","type":"string","properties":{"nullable":false}},{"name":"description","type":"string"},{"name":"image","type":"string"},{"name":"ginfo","type":"json"}])
    ];

  }

  down() {

    return [
      this.dropTable("locations")
    ];

  }

}

module.exports = CreateLocations;
