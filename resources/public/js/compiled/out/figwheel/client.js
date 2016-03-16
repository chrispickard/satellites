// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__51204 = cljs.core._EQ_;
var expr__51205 = (function (){var or__39600__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__51204.call(null,"true",expr__51205))){
return true;
} else {
if(cljs.core.truth_(pred__51204.call(null,"false",expr__51205))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__51205)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51207__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__51207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51208__i = 0, G__51208__a = new Array(arguments.length -  0);
while (G__51208__i < G__51208__a.length) {G__51208__a[G__51208__i] = arguments[G__51208__i + 0]; ++G__51208__i;}
  args = new cljs.core.IndexedSeq(G__51208__a,0);
} 
return G__51207__delegate.call(this,args);};
G__51207.cljs$lang$maxFixedArity = 0;
G__51207.cljs$lang$applyTo = (function (arglist__51209){
var args = cljs.core.seq(arglist__51209);
return G__51207__delegate(args);
});
G__51207.cljs$core$IFn$_invoke$arity$variadic = G__51207__delegate;
return G__51207;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51210){
var map__51213 = p__51210;
var map__51213__$1 = ((((!((map__51213 == null)))?((((map__51213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51213):map__51213);
var message = cljs.core.get.call(null,map__51213__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51213__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__39600__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__39588__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__39588__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__39588__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__41758__auto___51375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___51375,ch){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___51375,ch){
return (function (state_51344){
var state_val_51345 = (state_51344[(1)]);
if((state_val_51345 === (7))){
var inst_51340 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51346_51376 = state_51344__$1;
(statearr_51346_51376[(2)] = inst_51340);

(statearr_51346_51376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (1))){
var state_51344__$1 = state_51344;
var statearr_51347_51377 = state_51344__$1;
(statearr_51347_51377[(2)] = null);

(statearr_51347_51377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (4))){
var inst_51297 = (state_51344[(7)]);
var inst_51297__$1 = (state_51344[(2)]);
var state_51344__$1 = (function (){var statearr_51348 = state_51344;
(statearr_51348[(7)] = inst_51297__$1);

return statearr_51348;
})();
if(cljs.core.truth_(inst_51297__$1)){
var statearr_51349_51378 = state_51344__$1;
(statearr_51349_51378[(1)] = (5));

} else {
var statearr_51350_51379 = state_51344__$1;
(statearr_51350_51379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (15))){
var inst_51304 = (state_51344[(8)]);
var inst_51319 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51304);
var inst_51320 = cljs.core.first.call(null,inst_51319);
var inst_51321 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51320);
var inst_51322 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_51321)].join('');
var inst_51323 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51322);
var state_51344__$1 = state_51344;
var statearr_51351_51380 = state_51344__$1;
(statearr_51351_51380[(2)] = inst_51323);

(statearr_51351_51380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (13))){
var inst_51328 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51352_51381 = state_51344__$1;
(statearr_51352_51381[(2)] = inst_51328);

(statearr_51352_51381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (6))){
var state_51344__$1 = state_51344;
var statearr_51353_51382 = state_51344__$1;
(statearr_51353_51382[(2)] = null);

(statearr_51353_51382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (17))){
var inst_51326 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51354_51383 = state_51344__$1;
(statearr_51354_51383[(2)] = inst_51326);

(statearr_51354_51383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (3))){
var inst_51342 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51344__$1,inst_51342);
} else {
if((state_val_51345 === (12))){
var inst_51303 = (state_51344[(9)]);
var inst_51317 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51303,opts);
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51317)){
var statearr_51355_51384 = state_51344__$1;
(statearr_51355_51384[(1)] = (15));

} else {
var statearr_51356_51385 = state_51344__$1;
(statearr_51356_51385[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (2))){
var state_51344__$1 = state_51344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51344__$1,(4),ch);
} else {
if((state_val_51345 === (11))){
var inst_51304 = (state_51344[(8)]);
var inst_51309 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51310 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51304);
var inst_51311 = cljs.core.async.timeout.call(null,(1000));
var inst_51312 = [inst_51310,inst_51311];
var inst_51313 = (new cljs.core.PersistentVector(null,2,(5),inst_51309,inst_51312,null));
var state_51344__$1 = state_51344;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51344__$1,(14),inst_51313);
} else {
if((state_val_51345 === (9))){
var inst_51304 = (state_51344[(8)]);
var inst_51330 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51331 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51304);
var inst_51332 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51331);
var inst_51333 = [cljs.core.str("Not loading: "),cljs.core.str(inst_51332)].join('');
var inst_51334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51333);
var state_51344__$1 = (function (){var statearr_51357 = state_51344;
(statearr_51357[(10)] = inst_51330);

return statearr_51357;
})();
var statearr_51358_51386 = state_51344__$1;
(statearr_51358_51386[(2)] = inst_51334);

(statearr_51358_51386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (5))){
var inst_51297 = (state_51344[(7)]);
var inst_51299 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51300 = (new cljs.core.PersistentArrayMap(null,2,inst_51299,null));
var inst_51301 = (new cljs.core.PersistentHashSet(null,inst_51300,null));
var inst_51302 = figwheel.client.focus_msgs.call(null,inst_51301,inst_51297);
var inst_51303 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51302);
var inst_51304 = cljs.core.first.call(null,inst_51302);
var inst_51305 = figwheel.client.autoload_QMARK_.call(null);
var state_51344__$1 = (function (){var statearr_51359 = state_51344;
(statearr_51359[(9)] = inst_51303);

(statearr_51359[(8)] = inst_51304);

return statearr_51359;
})();
if(cljs.core.truth_(inst_51305)){
var statearr_51360_51387 = state_51344__$1;
(statearr_51360_51387[(1)] = (8));

} else {
var statearr_51361_51388 = state_51344__$1;
(statearr_51361_51388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (14))){
var inst_51315 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51362_51389 = state_51344__$1;
(statearr_51362_51389[(2)] = inst_51315);

(statearr_51362_51389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (16))){
var state_51344__$1 = state_51344;
var statearr_51363_51390 = state_51344__$1;
(statearr_51363_51390[(2)] = null);

(statearr_51363_51390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (10))){
var inst_51336 = (state_51344[(2)]);
var state_51344__$1 = (function (){var statearr_51364 = state_51344;
(statearr_51364[(11)] = inst_51336);

return statearr_51364;
})();
var statearr_51365_51391 = state_51344__$1;
(statearr_51365_51391[(2)] = null);

(statearr_51365_51391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (8))){
var inst_51303 = (state_51344[(9)]);
var inst_51307 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51303,opts);
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51307)){
var statearr_51366_51392 = state_51344__$1;
(statearr_51366_51392[(1)] = (11));

} else {
var statearr_51367_51393 = state_51344__$1;
(statearr_51367_51393[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41758__auto___51375,ch))
;
return ((function (switch__41737__auto__,c__41758__auto___51375,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__41738__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__41738__auto____0 = (function (){
var statearr_51371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51371[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__41738__auto__);

(statearr_51371[(1)] = (1));

return statearr_51371;
});
var figwheel$client$file_reloader_plugin_$_state_machine__41738__auto____1 = (function (state_51344){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_51344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e51372){if((e51372 instanceof Object)){
var ex__41741__auto__ = e51372;
var statearr_51373_51394 = state_51344;
(statearr_51373_51394[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51395 = state_51344;
state_51344 = G__51395;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__41738__auto__ = function(state_51344){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__41738__auto____1.call(this,state_51344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__41738__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__41738__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___51375,ch))
})();
var state__41760__auto__ = (function (){var statearr_51374 = f__41759__auto__.call(null);
(statearr_51374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___51375);

return statearr_51374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___51375,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51396_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51396_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51403 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51403){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_51401 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_51402 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_51401,_STAR_print_newline_STAR_51402,base_path_51403){
return (function() { 
var G__51404__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__51404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51405__i = 0, G__51405__a = new Array(arguments.length -  0);
while (G__51405__i < G__51405__a.length) {G__51405__a[G__51405__i] = arguments[G__51405__i + 0]; ++G__51405__i;}
  args = new cljs.core.IndexedSeq(G__51405__a,0);
} 
return G__51404__delegate.call(this,args);};
G__51404.cljs$lang$maxFixedArity = 0;
G__51404.cljs$lang$applyTo = (function (arglist__51406){
var args = cljs.core.seq(arglist__51406);
return G__51404__delegate(args);
});
G__51404.cljs$core$IFn$_invoke$arity$variadic = G__51404__delegate;
return G__51404;
})()
;})(_STAR_print_fn_STAR_51401,_STAR_print_newline_STAR_51402,base_path_51403))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51402;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51401;
}}catch (e51400){if((e51400 instanceof Error)){
var e = e51400;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51403], null));
} else {
var e = e51400;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_51403))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51407){
var map__51414 = p__51407;
var map__51414__$1 = ((((!((map__51414 == null)))?((((map__51414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51414):map__51414);
var opts = map__51414__$1;
var build_id = cljs.core.get.call(null,map__51414__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51414,map__51414__$1,opts,build_id){
return (function (p__51416){
var vec__51417 = p__51416;
var map__51418 = cljs.core.nth.call(null,vec__51417,(0),null);
var map__51418__$1 = ((((!((map__51418 == null)))?((((map__51418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51418):map__51418);
var msg = map__51418__$1;
var msg_name = cljs.core.get.call(null,map__51418__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__51417,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51417,map__51418,map__51418__$1,msg,msg_name,_,map__51414,map__51414__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51417,map__51418,map__51418__$1,msg,msg_name,_,map__51414,map__51414__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51414,map__51414__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51424){
var vec__51425 = p__51424;
var map__51426 = cljs.core.nth.call(null,vec__51425,(0),null);
var map__51426__$1 = ((((!((map__51426 == null)))?((((map__51426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51426):map__51426);
var msg = map__51426__$1;
var msg_name = cljs.core.get.call(null,map__51426__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__51425,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51428){
var map__51438 = p__51428;
var map__51438__$1 = ((((!((map__51438 == null)))?((((map__51438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51438):map__51438);
var on_compile_warning = cljs.core.get.call(null,map__51438__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51438__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51438,map__51438__$1,on_compile_warning,on_compile_fail){
return (function (p__51440){
var vec__51441 = p__51440;
var map__51442 = cljs.core.nth.call(null,vec__51441,(0),null);
var map__51442__$1 = ((((!((map__51442 == null)))?((((map__51442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51442):map__51442);
var msg = map__51442__$1;
var msg_name = cljs.core.get.call(null,map__51442__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__51441,(1));
var pred__51444 = cljs.core._EQ_;
var expr__51445 = msg_name;
if(cljs.core.truth_(pred__51444.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51445))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51444.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51445))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51438,map__51438__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__,msg_hist,msg_names,msg){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__,msg_hist,msg_names,msg){
return (function (state_51661){
var state_val_51662 = (state_51661[(1)]);
if((state_val_51662 === (7))){
var inst_51585 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
if(cljs.core.truth_(inst_51585)){
var statearr_51663_51709 = state_51661__$1;
(statearr_51663_51709[(1)] = (8));

} else {
var statearr_51664_51710 = state_51661__$1;
(statearr_51664_51710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (20))){
var inst_51655 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51665_51711 = state_51661__$1;
(statearr_51665_51711[(2)] = inst_51655);

(statearr_51665_51711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (27))){
var inst_51651 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51666_51712 = state_51661__$1;
(statearr_51666_51712[(2)] = inst_51651);

(statearr_51666_51712[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (1))){
var inst_51578 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51661__$1 = state_51661;
if(cljs.core.truth_(inst_51578)){
var statearr_51667_51713 = state_51661__$1;
(statearr_51667_51713[(1)] = (2));

} else {
var statearr_51668_51714 = state_51661__$1;
(statearr_51668_51714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (24))){
var inst_51653 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51669_51715 = state_51661__$1;
(statearr_51669_51715[(2)] = inst_51653);

(statearr_51669_51715[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (4))){
var inst_51659 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51661__$1,inst_51659);
} else {
if((state_val_51662 === (15))){
var inst_51657 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51670_51716 = state_51661__$1;
(statearr_51670_51716[(2)] = inst_51657);

(statearr_51670_51716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (21))){
var inst_51616 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51671_51717 = state_51661__$1;
(statearr_51671_51717[(2)] = inst_51616);

(statearr_51671_51717[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (31))){
var inst_51640 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51661__$1 = state_51661;
if(cljs.core.truth_(inst_51640)){
var statearr_51672_51718 = state_51661__$1;
(statearr_51672_51718[(1)] = (34));

} else {
var statearr_51673_51719 = state_51661__$1;
(statearr_51673_51719[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (32))){
var inst_51649 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51674_51720 = state_51661__$1;
(statearr_51674_51720[(2)] = inst_51649);

(statearr_51674_51720[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (33))){
var inst_51638 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51675_51721 = state_51661__$1;
(statearr_51675_51721[(2)] = inst_51638);

(statearr_51675_51721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (13))){
var inst_51599 = figwheel.client.heads_up.clear.call(null);
var state_51661__$1 = state_51661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51661__$1,(16),inst_51599);
} else {
if((state_val_51662 === (22))){
var inst_51620 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51621 = figwheel.client.heads_up.append_message.call(null,inst_51620);
var state_51661__$1 = state_51661;
var statearr_51676_51722 = state_51661__$1;
(statearr_51676_51722[(2)] = inst_51621);

(statearr_51676_51722[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (36))){
var inst_51647 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51677_51723 = state_51661__$1;
(statearr_51677_51723[(2)] = inst_51647);

(statearr_51677_51723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (29))){
var inst_51631 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51678_51724 = state_51661__$1;
(statearr_51678_51724[(2)] = inst_51631);

(statearr_51678_51724[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (6))){
var inst_51580 = (state_51661[(7)]);
var state_51661__$1 = state_51661;
var statearr_51679_51725 = state_51661__$1;
(statearr_51679_51725[(2)] = inst_51580);

(statearr_51679_51725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (28))){
var inst_51627 = (state_51661[(2)]);
var inst_51628 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51629 = figwheel.client.heads_up.display_warning.call(null,inst_51628);
var state_51661__$1 = (function (){var statearr_51680 = state_51661;
(statearr_51680[(8)] = inst_51627);

return statearr_51680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51661__$1,(29),inst_51629);
} else {
if((state_val_51662 === (25))){
var inst_51625 = figwheel.client.heads_up.clear.call(null);
var state_51661__$1 = state_51661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51661__$1,(28),inst_51625);
} else {
if((state_val_51662 === (34))){
var inst_51642 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51661__$1 = state_51661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51661__$1,(37),inst_51642);
} else {
if((state_val_51662 === (17))){
var inst_51607 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51681_51726 = state_51661__$1;
(statearr_51681_51726[(2)] = inst_51607);

(statearr_51681_51726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (3))){
var inst_51597 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51661__$1 = state_51661;
if(cljs.core.truth_(inst_51597)){
var statearr_51682_51727 = state_51661__$1;
(statearr_51682_51727[(1)] = (13));

} else {
var statearr_51683_51728 = state_51661__$1;
(statearr_51683_51728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (12))){
var inst_51593 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51684_51729 = state_51661__$1;
(statearr_51684_51729[(2)] = inst_51593);

(statearr_51684_51729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (2))){
var inst_51580 = (state_51661[(7)]);
var inst_51580__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51661__$1 = (function (){var statearr_51685 = state_51661;
(statearr_51685[(7)] = inst_51580__$1);

return statearr_51685;
})();
if(cljs.core.truth_(inst_51580__$1)){
var statearr_51686_51730 = state_51661__$1;
(statearr_51686_51730[(1)] = (5));

} else {
var statearr_51687_51731 = state_51661__$1;
(statearr_51687_51731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (23))){
var inst_51623 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51661__$1 = state_51661;
if(cljs.core.truth_(inst_51623)){
var statearr_51688_51732 = state_51661__$1;
(statearr_51688_51732[(1)] = (25));

} else {
var statearr_51689_51733 = state_51661__$1;
(statearr_51689_51733[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (35))){
var state_51661__$1 = state_51661;
var statearr_51690_51734 = state_51661__$1;
(statearr_51690_51734[(2)] = null);

(statearr_51690_51734[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (19))){
var inst_51618 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51661__$1 = state_51661;
if(cljs.core.truth_(inst_51618)){
var statearr_51691_51735 = state_51661__$1;
(statearr_51691_51735[(1)] = (22));

} else {
var statearr_51692_51736 = state_51661__$1;
(statearr_51692_51736[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (11))){
var inst_51589 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51693_51737 = state_51661__$1;
(statearr_51693_51737[(2)] = inst_51589);

(statearr_51693_51737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (9))){
var inst_51591 = figwheel.client.heads_up.clear.call(null);
var state_51661__$1 = state_51661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51661__$1,(12),inst_51591);
} else {
if((state_val_51662 === (5))){
var inst_51582 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51661__$1 = state_51661;
var statearr_51694_51738 = state_51661__$1;
(statearr_51694_51738[(2)] = inst_51582);

(statearr_51694_51738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (14))){
var inst_51609 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51661__$1 = state_51661;
if(cljs.core.truth_(inst_51609)){
var statearr_51695_51739 = state_51661__$1;
(statearr_51695_51739[(1)] = (18));

} else {
var statearr_51696_51740 = state_51661__$1;
(statearr_51696_51740[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (26))){
var inst_51633 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51661__$1 = state_51661;
if(cljs.core.truth_(inst_51633)){
var statearr_51697_51741 = state_51661__$1;
(statearr_51697_51741[(1)] = (30));

} else {
var statearr_51698_51742 = state_51661__$1;
(statearr_51698_51742[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (16))){
var inst_51601 = (state_51661[(2)]);
var inst_51602 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51603 = figwheel.client.format_messages.call(null,inst_51602);
var inst_51604 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51605 = figwheel.client.heads_up.display_error.call(null,inst_51603,inst_51604);
var state_51661__$1 = (function (){var statearr_51699 = state_51661;
(statearr_51699[(9)] = inst_51601);

return statearr_51699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51661__$1,(17),inst_51605);
} else {
if((state_val_51662 === (30))){
var inst_51635 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51636 = figwheel.client.heads_up.display_warning.call(null,inst_51635);
var state_51661__$1 = state_51661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51661__$1,(33),inst_51636);
} else {
if((state_val_51662 === (10))){
var inst_51595 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51700_51743 = state_51661__$1;
(statearr_51700_51743[(2)] = inst_51595);

(statearr_51700_51743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (18))){
var inst_51611 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51612 = figwheel.client.format_messages.call(null,inst_51611);
var inst_51613 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51614 = figwheel.client.heads_up.display_error.call(null,inst_51612,inst_51613);
var state_51661__$1 = state_51661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51661__$1,(21),inst_51614);
} else {
if((state_val_51662 === (37))){
var inst_51644 = (state_51661[(2)]);
var state_51661__$1 = state_51661;
var statearr_51701_51744 = state_51661__$1;
(statearr_51701_51744[(2)] = inst_51644);

(statearr_51701_51744[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51662 === (8))){
var inst_51587 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51661__$1 = state_51661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51661__$1,(11),inst_51587);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41758__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__41737__auto__,c__41758__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto____0 = (function (){
var statearr_51705 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51705[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto__);

(statearr_51705[(1)] = (1));

return statearr_51705;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto____1 = (function (state_51661){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_51661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e51706){if((e51706 instanceof Object)){
var ex__41741__auto__ = e51706;
var statearr_51707_51745 = state_51661;
(statearr_51707_51745[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51746 = state_51661;
state_51661 = G__51746;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto__ = function(state_51661){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto____1.call(this,state_51661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__,msg_hist,msg_names,msg))
})();
var state__41760__auto__ = (function (){var statearr_51708 = f__41759__auto__.call(null);
(statearr_51708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_51708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__,msg_hist,msg_names,msg))
);

return c__41758__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__41758__auto___51809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___51809,ch){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___51809,ch){
return (function (state_51792){
var state_val_51793 = (state_51792[(1)]);
if((state_val_51793 === (1))){
var state_51792__$1 = state_51792;
var statearr_51794_51810 = state_51792__$1;
(statearr_51794_51810[(2)] = null);

(statearr_51794_51810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51793 === (2))){
var state_51792__$1 = state_51792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51792__$1,(4),ch);
} else {
if((state_val_51793 === (3))){
var inst_51790 = (state_51792[(2)]);
var state_51792__$1 = state_51792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51792__$1,inst_51790);
} else {
if((state_val_51793 === (4))){
var inst_51780 = (state_51792[(7)]);
var inst_51780__$1 = (state_51792[(2)]);
var state_51792__$1 = (function (){var statearr_51795 = state_51792;
(statearr_51795[(7)] = inst_51780__$1);

return statearr_51795;
})();
if(cljs.core.truth_(inst_51780__$1)){
var statearr_51796_51811 = state_51792__$1;
(statearr_51796_51811[(1)] = (5));

} else {
var statearr_51797_51812 = state_51792__$1;
(statearr_51797_51812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51793 === (5))){
var inst_51780 = (state_51792[(7)]);
var inst_51782 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51780);
var state_51792__$1 = state_51792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51792__$1,(8),inst_51782);
} else {
if((state_val_51793 === (6))){
var state_51792__$1 = state_51792;
var statearr_51798_51813 = state_51792__$1;
(statearr_51798_51813[(2)] = null);

(statearr_51798_51813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51793 === (7))){
var inst_51788 = (state_51792[(2)]);
var state_51792__$1 = state_51792;
var statearr_51799_51814 = state_51792__$1;
(statearr_51799_51814[(2)] = inst_51788);

(statearr_51799_51814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51793 === (8))){
var inst_51784 = (state_51792[(2)]);
var state_51792__$1 = (function (){var statearr_51800 = state_51792;
(statearr_51800[(8)] = inst_51784);

return statearr_51800;
})();
var statearr_51801_51815 = state_51792__$1;
(statearr_51801_51815[(2)] = null);

(statearr_51801_51815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__41758__auto___51809,ch))
;
return ((function (switch__41737__auto__,c__41758__auto___51809,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__41738__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__41738__auto____0 = (function (){
var statearr_51805 = [null,null,null,null,null,null,null,null,null];
(statearr_51805[(0)] = figwheel$client$heads_up_plugin_$_state_machine__41738__auto__);

(statearr_51805[(1)] = (1));

return statearr_51805;
});
var figwheel$client$heads_up_plugin_$_state_machine__41738__auto____1 = (function (state_51792){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_51792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e51806){if((e51806 instanceof Object)){
var ex__41741__auto__ = e51806;
var statearr_51807_51816 = state_51792;
(statearr_51807_51816[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51817 = state_51792;
state_51792 = G__51817;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__41738__auto__ = function(state_51792){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__41738__auto____1.call(this,state_51792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__41738__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__41738__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___51809,ch))
})();
var state__41760__auto__ = (function (){var statearr_51808 = f__41759__auto__.call(null);
(statearr_51808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___51809);

return statearr_51808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___51809,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__){
return (function (state_51838){
var state_val_51839 = (state_51838[(1)]);
if((state_val_51839 === (1))){
var inst_51833 = cljs.core.async.timeout.call(null,(3000));
var state_51838__$1 = state_51838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51838__$1,(2),inst_51833);
} else {
if((state_val_51839 === (2))){
var inst_51835 = (state_51838[(2)]);
var inst_51836 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51838__$1 = (function (){var statearr_51840 = state_51838;
(statearr_51840[(7)] = inst_51835);

return statearr_51840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51838__$1,inst_51836);
} else {
return null;
}
}
});})(c__41758__auto__))
;
return ((function (switch__41737__auto__,c__41758__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__41738__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__41738__auto____0 = (function (){
var statearr_51844 = [null,null,null,null,null,null,null,null];
(statearr_51844[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__41738__auto__);

(statearr_51844[(1)] = (1));

return statearr_51844;
});
var figwheel$client$enforce_project_plugin_$_state_machine__41738__auto____1 = (function (state_51838){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_51838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e51845){if((e51845 instanceof Object)){
var ex__41741__auto__ = e51845;
var statearr_51846_51848 = state_51838;
(statearr_51846_51848[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51849 = state_51838;
state_51838 = G__51849;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__41738__auto__ = function(state_51838){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__41738__auto____1.call(this,state_51838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__41738__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__41738__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__))
})();
var state__41760__auto__ = (function (){var statearr_51847 = f__41759__auto__.call(null);
(statearr_51847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_51847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__))
);

return c__41758__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51850){
var map__51857 = p__51850;
var map__51857__$1 = ((((!((map__51857 == null)))?((((map__51857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51857):map__51857);
var ed = map__51857__$1;
var formatted_exception = cljs.core.get.call(null,map__51857__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51857__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51857__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51859_51863 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51860_51864 = null;
var count__51861_51865 = (0);
var i__51862_51866 = (0);
while(true){
if((i__51862_51866 < count__51861_51865)){
var msg_51867 = cljs.core._nth.call(null,chunk__51860_51864,i__51862_51866);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51867);

var G__51868 = seq__51859_51863;
var G__51869 = chunk__51860_51864;
var G__51870 = count__51861_51865;
var G__51871 = (i__51862_51866 + (1));
seq__51859_51863 = G__51868;
chunk__51860_51864 = G__51869;
count__51861_51865 = G__51870;
i__51862_51866 = G__51871;
continue;
} else {
var temp__4657__auto___51872 = cljs.core.seq.call(null,seq__51859_51863);
if(temp__4657__auto___51872){
var seq__51859_51873__$1 = temp__4657__auto___51872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51859_51873__$1)){
var c__40403__auto___51874 = cljs.core.chunk_first.call(null,seq__51859_51873__$1);
var G__51875 = cljs.core.chunk_rest.call(null,seq__51859_51873__$1);
var G__51876 = c__40403__auto___51874;
var G__51877 = cljs.core.count.call(null,c__40403__auto___51874);
var G__51878 = (0);
seq__51859_51863 = G__51875;
chunk__51860_51864 = G__51876;
count__51861_51865 = G__51877;
i__51862_51866 = G__51878;
continue;
} else {
var msg_51879 = cljs.core.first.call(null,seq__51859_51873__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51879);

var G__51880 = cljs.core.next.call(null,seq__51859_51873__$1);
var G__51881 = null;
var G__51882 = (0);
var G__51883 = (0);
seq__51859_51863 = G__51880;
chunk__51860_51864 = G__51881;
count__51861_51865 = G__51882;
i__51862_51866 = G__51883;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51884){
var map__51887 = p__51884;
var map__51887__$1 = ((((!((map__51887 == null)))?((((map__51887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51887):map__51887);
var w = map__51887__$1;
var message = cljs.core.get.call(null,map__51887__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__39588__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__39588__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__39588__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51895 = cljs.core.seq.call(null,plugins);
var chunk__51896 = null;
var count__51897 = (0);
var i__51898 = (0);
while(true){
if((i__51898 < count__51897)){
var vec__51899 = cljs.core._nth.call(null,chunk__51896,i__51898);
var k = cljs.core.nth.call(null,vec__51899,(0),null);
var plugin = cljs.core.nth.call(null,vec__51899,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51901 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51895,chunk__51896,count__51897,i__51898,pl_51901,vec__51899,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51901.call(null,msg_hist);
});})(seq__51895,chunk__51896,count__51897,i__51898,pl_51901,vec__51899,k,plugin))
);
} else {
}

var G__51902 = seq__51895;
var G__51903 = chunk__51896;
var G__51904 = count__51897;
var G__51905 = (i__51898 + (1));
seq__51895 = G__51902;
chunk__51896 = G__51903;
count__51897 = G__51904;
i__51898 = G__51905;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51895);
if(temp__4657__auto__){
var seq__51895__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51895__$1)){
var c__40403__auto__ = cljs.core.chunk_first.call(null,seq__51895__$1);
var G__51906 = cljs.core.chunk_rest.call(null,seq__51895__$1);
var G__51907 = c__40403__auto__;
var G__51908 = cljs.core.count.call(null,c__40403__auto__);
var G__51909 = (0);
seq__51895 = G__51906;
chunk__51896 = G__51907;
count__51897 = G__51908;
i__51898 = G__51909;
continue;
} else {
var vec__51900 = cljs.core.first.call(null,seq__51895__$1);
var k = cljs.core.nth.call(null,vec__51900,(0),null);
var plugin = cljs.core.nth.call(null,vec__51900,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51910 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51895,chunk__51896,count__51897,i__51898,pl_51910,vec__51900,k,plugin,seq__51895__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51910.call(null,msg_hist);
});})(seq__51895,chunk__51896,count__51897,i__51898,pl_51910,vec__51900,k,plugin,seq__51895__$1,temp__4657__auto__))
);
} else {
}

var G__51911 = cljs.core.next.call(null,seq__51895__$1);
var G__51912 = null;
var G__51913 = (0);
var G__51914 = (0);
seq__51895 = G__51911;
chunk__51896 = G__51912;
count__51897 = G__51913;
i__51898 = G__51914;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args51915 = [];
var len__40658__auto___51918 = arguments.length;
var i__40659__auto___51919 = (0);
while(true){
if((i__40659__auto___51919 < len__40658__auto___51918)){
args51915.push((arguments[i__40659__auto___51919]));

var G__51920 = (i__40659__auto___51919 + (1));
i__40659__auto___51919 = G__51920;
continue;
} else {
}
break;
}

var G__51917 = args51915.length;
switch (G__51917) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51915.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__40665__auto__ = [];
var len__40658__auto___51926 = arguments.length;
var i__40659__auto___51927 = (0);
while(true){
if((i__40659__auto___51927 < len__40658__auto___51926)){
args__40665__auto__.push((arguments[i__40659__auto___51927]));

var G__51928 = (i__40659__auto___51927 + (1));
i__40659__auto___51927 = G__51928;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((0) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__40666__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51923){
var map__51924 = p__51923;
var map__51924__$1 = ((((!((map__51924 == null)))?((((map__51924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51924):map__51924);
var opts = map__51924__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51922){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51922));
});

//# sourceMappingURL=client.js.map?rel=1458155581252