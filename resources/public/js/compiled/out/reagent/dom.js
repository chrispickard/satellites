// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__39600__auto__ = (function (){var and__39588__auto__ = typeof ReactDOM !== 'undefined';
if(and__39588__auto__){
return ReactDOM;
} else {
return and__39588__auto__;
}
})();
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
var and__39588__auto__ = typeof require !== 'undefined';
if(and__39588__auto__){
return require("react-dom");
} else {
return and__39588__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_49555 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_49555){
return (function (){
var _STAR_always_update_STAR_49556 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_49556;
}});})(_STAR_always_update_STAR_49555))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_49555;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args49557 = [];
var len__40658__auto___49560 = arguments.length;
var i__40659__auto___49561 = (0);
while(true){
if((i__40659__auto___49561 < len__40658__auto___49560)){
args49557.push((arguments[i__40659__auto___49561]));

var G__49562 = (i__40659__auto___49561 + (1));
i__40659__auto___49561 = G__49562;
continue;
} else {
}
break;
}

var G__49559 = args49557.length;
switch (G__49559) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49557.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__49568_49572 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__49569_49573 = null;
var count__49570_49574 = (0);
var i__49571_49575 = (0);
while(true){
if((i__49571_49575 < count__49570_49574)){
var v_49576 = cljs.core._nth.call(null,chunk__49569_49573,i__49571_49575);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_49576);

var G__49577 = seq__49568_49572;
var G__49578 = chunk__49569_49573;
var G__49579 = count__49570_49574;
var G__49580 = (i__49571_49575 + (1));
seq__49568_49572 = G__49577;
chunk__49569_49573 = G__49578;
count__49570_49574 = G__49579;
i__49571_49575 = G__49580;
continue;
} else {
var temp__4657__auto___49581 = cljs.core.seq.call(null,seq__49568_49572);
if(temp__4657__auto___49581){
var seq__49568_49582__$1 = temp__4657__auto___49581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49568_49582__$1)){
var c__40403__auto___49583 = cljs.core.chunk_first.call(null,seq__49568_49582__$1);
var G__49584 = cljs.core.chunk_rest.call(null,seq__49568_49582__$1);
var G__49585 = c__40403__auto___49583;
var G__49586 = cljs.core.count.call(null,c__40403__auto___49583);
var G__49587 = (0);
seq__49568_49572 = G__49584;
chunk__49569_49573 = G__49585;
count__49570_49574 = G__49586;
i__49571_49575 = G__49587;
continue;
} else {
var v_49588 = cljs.core.first.call(null,seq__49568_49582__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_49588);

var G__49589 = cljs.core.next.call(null,seq__49568_49582__$1);
var G__49590 = null;
var G__49591 = (0);
var G__49592 = (0);
seq__49568_49572 = G__49589;
chunk__49569_49573 = G__49590;
count__49570_49574 = G__49591;
i__49571_49575 = G__49592;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1458155579817