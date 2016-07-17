'use strict';

const Nodal = require('nodal');

class CreateUserProfiles extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016071706281805;
  }

  up() {

    return [
      this.createTable("user_profiles", [{"name":"user_id","type":"int"},{"name":"name","type":"string"},{"name":"location","type":"json"},{"name":"traveltime","type":"int"},{"name":"participating","type":"boolean"}])
    ];

  }

  down() {

    return [
      this.dropTable("user_profiles")
    ];

  }

}

module.exports = CreateUserProfiles;
