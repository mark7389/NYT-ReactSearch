const router = require("express").Router();
const articleController = require("../../controllers/articleController");
router.route("/")
    // .get(articleController.findAll)
    .post(articleController.query);

router.route("/save")
.post(articleController.save);
  

module.exports = router;