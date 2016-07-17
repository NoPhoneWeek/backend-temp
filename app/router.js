'use strict';

const Nodal = require('nodal');
const router = new Nodal.Router();

/* Middleware */
/* executed *before* Controller-specific middleware */

const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
// const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
// const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
// const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

router.middleware.use(CORSMiddleware);
// router.middleware.use(CORSAuthorizationMiddleware);
// router.middleware.use(ForceWWWMiddleware);
// router.middleware.use(ForceHTTPSMiddleware);

/* Renderware */
/* executed *after* Controller-specific renderware */

const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

router.renderware.use(GzipRenderware);

/* Routes */

const IndexController = Nodal.require('app/controllers/index_controller.js');

/* generator: begin imports */

const V1UsersController = Nodal.require('app/controllers/v1/users_controller.js');
const V1LocationsController = Nodal.require('app/controllers/v1/locations_controller.js');
const V1UserProfilesController = Nodal.require('app/controllers/v1/user_profiles_controller.js');
const V1AccessTokensController = Nodal.require('app/controllers/v1/access_tokens_controller.js');

/* generator: end imports */

router.route('/').use(IndexController);

/* generator: begin routes */

router.route('/v1/users/{id}').use(V1UsersController);
router.route('/v1/locations/{id}').use(V1LocationsController);
router.route('/v1/user_profiles/{id}').use(V1UserProfilesController);
router.route('/v1/login').use(V1AccessTokensController);

/* generator: end routes */

module.exports = router;
