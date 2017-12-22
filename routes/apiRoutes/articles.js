const router = require("express").Router();
const articleController = require("../../controllers/articleController");
router.route("/")
    // .get(articleController.findAll)
    .post(articleController.insert);

// router
//   .route("/:id")
  

module.exports = router;