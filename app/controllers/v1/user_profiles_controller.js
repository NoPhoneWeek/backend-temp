'use strict';

const Nodal = require('nodal');
const UserProfile = Nodal.require('app/models/user_profile.js');
const AuthController = Nodal.require('app/controllers/auth_controller.js');

class V1UserProfilesController extends AuthController {

  index() {

    UserProfile.query()
      .join('user')
      .where(this.params.query)
      .end((err, models) => {
        this.respond(err || models, ['name', 'location', 'traveltime', 'participating', {user: [ 'id', 'username', 'email']}]);
      });

  }

  show() {

    UserProfile.find(this.params.route.id, (err, model) => {

      this.respond(err || model, ['name', 'location', 'traveltime', 'participating', {user: [ 'id', 'username', 'email']}]);

    });

  }

  create() {
    this.authorize((err, accessToken, user) => {
      this.params.body.user_id = user.get('id')
      UserProfile.create(this.params.body, (err, model) => {
        this.respond(err || model);
      });
    });
  }

  update() {
    this.authorize((err, accessToken, user) => {
      UserProfile.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });
    });
  }

  destroy() {

    this.authorize((err, accessToken, user) => {
      if(err){
        return this.respond(err);
      }
      UserProfile.destroy(this.params.route.id, (err, model) => {
      this.respond(err || model);

      });
    });
  
  }

}

module.exports = V1UserProfilesController;
