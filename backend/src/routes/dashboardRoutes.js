const r=require("express").Router(), c=require("../controllers/dashboardController"), {protect}=require("../middleware/authMiddleware"); r.get("/stats",protect,c.stats); module.exports=r;
