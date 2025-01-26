const { animasu, event } = require("../dist/index");
event.on("get-animes", (r) => {
  console.log(r);
});