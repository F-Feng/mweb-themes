const watch = require("./watch")
const build = require("./build")

const args = process.argv.slice(2);

if (args[0] === "watch") {
  watch.run(args)
} else {
  build.run(args)
}