import { hiscores } from "runescape-api"

hiscores.getPlayer("Zentaa").then(data => {
    console.log(data)
});