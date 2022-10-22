const express = require("express");
const userControllers = require("../../controllers/user.controllers");

const router = express.Router();


router
.route("/all")
.get(userControllers.getAllUsers)


router
.route("/random")
.get(userControllers.getRandomUser)

router
.route("/bluk-update")
.patch(userControllers.blukUpdated)

router
.route("/")
/**
   * @api {get} /user All user
   * @apiDescription Get all the user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
.post(userControllers.savAUser)

router
.route("/:id")
.get(userControllers.getAUserWithId)
.patch(userControllers.updateAUser)
.delete(userControllers.deleteAUser)

module.exports = router;