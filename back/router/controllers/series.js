const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/series", async (req, res) => {
	axios.get(
		"https://api.themoviedb.org/3/discover/movie?api_key=7af6fec1654400ab9d1c906d527f2c25&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
	)
	.then(response => {
		res.json(response.data);
	}).catch(err => {
		console.log(err.message)
		res.json({error: err.message});		
	})

});

module.exports = router;
