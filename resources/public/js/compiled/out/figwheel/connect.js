// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('space_views.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__51931__delegate = function (x){
if(cljs.core.truth_(space_views.core.on_js_reload)){
return cljs.core.apply.call(null,space_views.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'space-views.core/on-js-reload' is missing");
}
};
var G__51931 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__51932__i = 0, G__51932__a = new Array(arguments.length -  0);
while (G__51932__i < G__51932__a.length) {G__51932__a[G__51932__i] = arguments[G__51932__i + 0]; ++G__51932__i;}
  x = new cljs.core.IndexedSeq(G__51932__a,0);
} 
return G__51931__delegate.call(this,x);};
G__51931.cljs$lang$maxFixedArity = 0;
G__51931.cljs$lang$applyTo = (function (arglist__51933){
var x = cljs.core.seq(arglist__51933);
return G__51931__delegate(x);
});
G__51931.cljs$core$IFn$_invoke$arity$variadic = G__51931__delegate;
return G__51931;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1458155581289