var api = Java.type("com.glowman554.block.plugin.PluginAPI");

var timer = 0;

function load() {
}

function autoSave() {
	timer++;
	if(timer > 60) {
	timer = 0;
		var today = new Date();
		var time =  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
		api.save("backup/" + time + ".msave");
	}
}

function enable() {
	api.addCommand("backup", "Trigger backup", function (event) {
		if(event.args.length != 0) {
			event.CommandFail();
		} else {
			print("OK!");
			var today = new Date();
			var time =  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
			api.save("backup/" + time + ".msave");
		}
	});

	api.registerEvent("Timer", autoSave);
}

function disable() {
}