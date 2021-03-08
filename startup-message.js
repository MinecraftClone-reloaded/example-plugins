var api = Java.type("com.glowman554.block.plugin.PluginAPI");
var hook_api = Java.type("com.glowman554.block.discord.WebHookAPI");

var hook = "https://discord.com/api/webhooks/818509367837589597/xfaiBbeDkQNgdnbLaLTrQn2mgZRdtMxQAaLVzNsZ6DIR_AI6JyyqrO5ZMxctS9rMaFvc";


function load() {
	api.sendHookMessage(hook, "Server starting ...");
}

function enable() {
    var nice_hook = new hook_api(hook);

    var embed = new hook_api.EmbedObject();
    embed.setColor(Java.type("java.awt.Color").RED);
    embed.setTitle("Server started ._.");

    nice_hook.addEmbed(embed);
    nice_hook.execute();

	api.registerEvent("PlayerLogin", function(who) {
        	api.sendHookMessage(hook, "Player " + who + " Joined the game!");
	});
}

function disable() {
    api.sendHookMessage(hook, "Server stopping ...");
}