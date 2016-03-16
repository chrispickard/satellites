// Compiled by ClojureScript 1.7.170 {}
goog.provide('space_views.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
space_views.core.by_id = (function space_views$core$by_id(id){
return document.getElementById(id);
});
if(typeof space_views.core.app_state !== 'undefined'){
} else {
space_views.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * 
 */
space_views.core.perform_request = (function space_views$core$perform_request(lat,lon){
cljs.core.println.call(null,"requesting");

return cljs_http.client.get.call(null,"https://api.nasa.gov/planetary/earth/assets",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 3, ["api_key","TBcEHIi4gvvD9CxbSo1ZBkTnouINoSzV6VsY67g9","lat",lat,"lon",lon], null)], null));
});
/**
 * 
 */
space_views.core.last_date = (function space_views$core$last_date(result){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(result)));
});
/**
 * 
 */
space_views.core.swap_with_new_input = (function space_views$core$swap_with_new_input(lat,lon){
cljs.core.println.call(null,lat,lon);

var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__){
return (function (state_49869){
var state_val_49870 = (state_49869[(1)]);
if((state_val_49870 === (1))){
var inst_49859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49860 = [new cljs.core.Keyword(null,"location","location",1815599388)];
var inst_49861 = (new cljs.core.PersistentVector(null,1,(5),inst_49859,inst_49860,null));
var inst_49862 = space_views.core.perform_request.call(null,lat,lon);
var state_49869__$1 = (function (){var statearr_49871 = state_49869;
(statearr_49871[(7)] = inst_49861);

return statearr_49871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49869__$1,(2),inst_49862);
} else {
if((state_val_49870 === (2))){
var inst_49861 = (state_49869[(7)]);
var inst_49864 = (state_49869[(2)]);
var inst_49865 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49864);
var inst_49866 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(inst_49865);
var inst_49867 = cljs.core.swap_BANG_.call(null,space_views.core.app_state,cljs.core.assoc_in,inst_49861,inst_49866);
var state_49869__$1 = state_49869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49869__$1,inst_49867);
} else {
return null;
}
}
});})(c__41758__auto__))
;
return ((function (switch__41737__auto__,c__41758__auto__){
return (function() {
var space_views$core$swap_with_new_input_$_state_machine__41738__auto__ = null;
var space_views$core$swap_with_new_input_$_state_machine__41738__auto____0 = (function (){
var statearr_49875 = [null,null,null,null,null,null,null,null];
(statearr_49875[(0)] = space_views$core$swap_with_new_input_$_state_machine__41738__auto__);

(statearr_49875[(1)] = (1));

return statearr_49875;
});
var space_views$core$swap_with_new_input_$_state_machine__41738__auto____1 = (function (state_49869){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_49869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e49876){if((e49876 instanceof Object)){
var ex__41741__auto__ = e49876;
var statearr_49877_49879 = state_49869;
(statearr_49877_49879[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49880 = state_49869;
state_49869 = G__49880;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
space_views$core$swap_with_new_input_$_state_machine__41738__auto__ = function(state_49869){
switch(arguments.length){
case 0:
return space_views$core$swap_with_new_input_$_state_machine__41738__auto____0.call(this);
case 1:
return space_views$core$swap_with_new_input_$_state_machine__41738__auto____1.call(this,state_49869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
space_views$core$swap_with_new_input_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = space_views$core$swap_with_new_input_$_state_machine__41738__auto____0;
space_views$core$swap_with_new_input_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = space_views$core$swap_with_new_input_$_state_machine__41738__auto____1;
return space_views$core$swap_with_new_input_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__))
})();
var state__41760__auto__ = (function (){var statearr_49878 = f__41759__auto__.call(null);
(statearr_49878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_49878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__))
);

return c__41758__auto__;
});
space_views.core.space_component = (function space_views$core$space_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$2(cljs.core.last.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,space_views.core.app_state))),"nothing")], null);
});
space_views.core.button_component = (function space_views$core$button_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"new pic bro",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return space_views.core.swap_with_new_input.call(null,(39),(-45));
})], null)], null);
});
space_views.core.run = (function space_views$core$run(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [space_views.core.space_component], null),space_views.core.by_id.call(null,"app"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [space_views.core.button_component], null),space_views.core.by_id.call(null,"button"));
});
goog.exportSymbol('space_views.core.run', space_views.core.run);
space_views.core.run.call(null);
space_views.core.on_js_reload = (function space_views$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1458155580196