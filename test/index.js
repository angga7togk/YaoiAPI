const { animasu } = require("../dist/index");

animasu.getAnime("tensei-shitara-slime-datta-ken-s3").then(console.log).catch(console.error);
