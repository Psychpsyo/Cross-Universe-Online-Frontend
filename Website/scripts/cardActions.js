// This file holds info about actions that need to be accessible to specific cards.

let cardActions = {
	"I00040": {
		"roll": function() {
			let result = Math.floor(Math.random() * 6) + 1;
			putChatMessage(locale["cardActions"]["I00040"]["yourRoll"].replace("{#RESULT}", result), "notice");
			socket.send("[dice]" + result);
		}
	}
}