function w(r){window.enmity.plugins.registerPlugin(r)}var g;(function(r){r[r.BuiltIn=0]="BuiltIn",r[r.Guild=1]="Guild",r[r.DM=2]="DM"})(g||(g={}));var u;(function(r){r[r.Chat=1]="Chat",r[r.User=2]="User",r[r.Message=3]="Message"})(u||(u={}));var l;(function(r){r[r.BuiltIn=0]="BuiltIn",r[r.BuiltInText=1]="BuiltInText",r[r.BuiltInIntegration=2]="BuiltInIntegration",r[r.Bot=3]="Bot",r[r.Placeholder=4]="Placeholder"})(l||(l={}));var v;(function(r){r[r.Role=1]="Role",r[r.User=2]="User"})(v||(v={}));var t;(function(r){r[r.SubCommand=1]="SubCommand",r[r.SubCommandGroup=2]="SubCommandGroup",r[r.String=3]="String",r[r.Integer=4]="Integer",r[r.Boolean=5]="Boolean",r[r.User=6]="User",r[r.Channel=7]="Channel",r[r.Role=8]="Role",r[r.Mentionnable=9]="Mentionnable",r[r.Number=10]="Number",r[r.Attachment=11]="Attachment"})(t||(t={}));var B;(function(r){r[r.ApplicationCommand=2]="ApplicationCommand",r[r.MessageComponent=3]="MessageComponent"})(B||(B={}));function f(r){return window.enmity.patcher.create(r)}var b="NotCatGirls",M="1.0.1",R="it's not cat girls",U=[{name:"sprunk",id:"258799464062386187"}],d="#00007d",n={name:b,version:M,description:R,authors:U,color:d};function G(r,h,e,s){window.enmity.clyde.sendReply(r,h,e,s)}function S(...r){return window.enmity.modules.getByProps(...r)}window.enmity.modules.common;const P=S("transitionToGuild","openURL"),x=f("HelloWorldPlugin"),N={...n,name:"HelloWorld",commands:[],onStart(){const r={id:"hello-world-command",name:"hello",displayName:"hello",description:"Simple hello world command.",displayDescription:"Simple hello world command.",type:u.Chat,inputType:l.BuiltInText,execute:async function(h,e){var s;G((s=e==null?void 0:e.channel.id)!=null?s:"0","Hello, world!"),P.openURL("https://google.com")}};this.commands.push(r)},onStop(){x.unpatchAll(),this.commands=[]}};w(N);
