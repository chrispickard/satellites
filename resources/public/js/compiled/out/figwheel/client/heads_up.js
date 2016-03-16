// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__40665__auto__ = [];
var len__40658__auto___50970 = arguments.length;
var i__40659__auto___50971 = (0);
while(true){
if((i__40659__auto___50971 < len__40658__auto___50970)){
args__40665__auto__.push((arguments[i__40659__auto___50971]));

var G__50972 = (i__40659__auto___50971 + (1));
i__40659__auto___50971 = G__50972;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((2) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__40666__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__50962_50973 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__50963_50974 = null;
var count__50964_50975 = (0);
var i__50965_50976 = (0);
while(true){
if((i__50965_50976 < count__50964_50975)){
var k_50977 = cljs.core._nth.call(null,chunk__50963_50974,i__50965_50976);
e.setAttribute(cljs.core.name.call(null,k_50977),cljs.core.get.call(null,attrs,k_50977));

var G__50978 = seq__50962_50973;
var G__50979 = chunk__50963_50974;
var G__50980 = count__50964_50975;
var G__50981 = (i__50965_50976 + (1));
seq__50962_50973 = G__50978;
chunk__50963_50974 = G__50979;
count__50964_50975 = G__50980;
i__50965_50976 = G__50981;
continue;
} else {
var temp__4657__auto___50982 = cljs.core.seq.call(null,seq__50962_50973);
if(temp__4657__auto___50982){
var seq__50962_50983__$1 = temp__4657__auto___50982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50962_50983__$1)){
var c__40403__auto___50984 = cljs.core.chunk_first.call(null,seq__50962_50983__$1);
var G__50985 = cljs.core.chunk_rest.call(null,seq__50962_50983__$1);
var G__50986 = c__40403__auto___50984;
var G__50987 = cljs.core.count.call(null,c__40403__auto___50984);
var G__50988 = (0);
seq__50962_50973 = G__50985;
chunk__50963_50974 = G__50986;
count__50964_50975 = G__50987;
i__50965_50976 = G__50988;
continue;
} else {
var k_50989 = cljs.core.first.call(null,seq__50962_50983__$1);
e.setAttribute(cljs.core.name.call(null,k_50989),cljs.core.get.call(null,attrs,k_50989));

var G__50990 = cljs.core.next.call(null,seq__50962_50983__$1);
var G__50991 = null;
var G__50992 = (0);
var G__50993 = (0);
seq__50962_50973 = G__50990;
chunk__50963_50974 = G__50991;
count__50964_50975 = G__50992;
i__50965_50976 = G__50993;
continue;
}
} else {
}
}
break;
}

var seq__50966_50994 = cljs.core.seq.call(null,children);
var chunk__50967_50995 = null;
var count__50968_50996 = (0);
var i__50969_50997 = (0);
while(true){
if((i__50969_50997 < count__50968_50996)){
var ch_50998 = cljs.core._nth.call(null,chunk__50967_50995,i__50969_50997);
e.appendChild(ch_50998);

var G__50999 = seq__50966_50994;
var G__51000 = chunk__50967_50995;
var G__51001 = count__50968_50996;
var G__51002 = (i__50969_50997 + (1));
seq__50966_50994 = G__50999;
chunk__50967_50995 = G__51000;
count__50968_50996 = G__51001;
i__50969_50997 = G__51002;
continue;
} else {
var temp__4657__auto___51003 = cljs.core.seq.call(null,seq__50966_50994);
if(temp__4657__auto___51003){
var seq__50966_51004__$1 = temp__4657__auto___51003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50966_51004__$1)){
var c__40403__auto___51005 = cljs.core.chunk_first.call(null,seq__50966_51004__$1);
var G__51006 = cljs.core.chunk_rest.call(null,seq__50966_51004__$1);
var G__51007 = c__40403__auto___51005;
var G__51008 = cljs.core.count.call(null,c__40403__auto___51005);
var G__51009 = (0);
seq__50966_50994 = G__51006;
chunk__50967_50995 = G__51007;
count__50968_50996 = G__51008;
i__50969_50997 = G__51009;
continue;
} else {
var ch_51010 = cljs.core.first.call(null,seq__50966_51004__$1);
e.appendChild(ch_51010);

var G__51011 = cljs.core.next.call(null,seq__50966_51004__$1);
var G__51012 = null;
var G__51013 = (0);
var G__51014 = (0);
seq__50966_50994 = G__51011;
chunk__50967_50995 = G__51012;
count__50968_50996 = G__51013;
i__50969_50997 = G__51014;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq50959){
var G__50960 = cljs.core.first.call(null,seq50959);
var seq50959__$1 = cljs.core.next.call(null,seq50959);
var G__50961 = cljs.core.first.call(null,seq50959__$1);
var seq50959__$2 = cljs.core.next.call(null,seq50959__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__50960,G__50961,seq50959__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__40513__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__40514__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__40515__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__40516__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__40517__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__40513__auto__,prefer_table__40514__auto__,method_cache__40515__auto__,cached_hierarchy__40516__auto__,hierarchy__40517__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__40513__auto__,prefer_table__40514__auto__,method_cache__40515__auto__,cached_hierarchy__40516__auto__,hierarchy__40517__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__40517__auto__,method_table__40513__auto__,prefer_table__40514__auto__,method_cache__40515__auto__,cached_hierarchy__40516__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_51015 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_51015.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_51015.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_51015.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_51015);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__51016,st_map){
var map__51021 = p__51016;
var map__51021__$1 = ((((!((map__51021 == null)))?((((map__51021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51021):map__51021);
var container_el = cljs.core.get.call(null,map__51021__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__51021,map__51021__$1,container_el){
return (function (p__51023){
var vec__51024 = p__51023;
var k = cljs.core.nth.call(null,vec__51024,(0),null);
var v = cljs.core.nth.call(null,vec__51024,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__51021,map__51021__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__51025,dom_str){
var map__51028 = p__51025;
var map__51028__$1 = ((((!((map__51028 == null)))?((((map__51028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51028):map__51028);
var c = map__51028__$1;
var content_area_el = cljs.core.get.call(null,map__51028__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__51030){
var map__51033 = p__51030;
var map__51033__$1 = ((((!((map__51033 == null)))?((((map__51033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51033):map__51033);
var content_area_el = cljs.core.get.call(null,map__51033__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__){
return (function (state_51076){
var state_val_51077 = (state_51076[(1)]);
if((state_val_51077 === (1))){
var inst_51061 = (state_51076[(7)]);
var inst_51061__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_51062 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_51063 = ["10px","10px","100%","68px","1.0"];
var inst_51064 = cljs.core.PersistentHashMap.fromArrays(inst_51062,inst_51063);
var inst_51065 = cljs.core.merge.call(null,inst_51064,style);
var inst_51066 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51061__$1,inst_51065);
var inst_51067 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_51061__$1,msg);
var inst_51068 = cljs.core.async.timeout.call(null,(300));
var state_51076__$1 = (function (){var statearr_51078 = state_51076;
(statearr_51078[(7)] = inst_51061__$1);

(statearr_51078[(8)] = inst_51066);

(statearr_51078[(9)] = inst_51067);

return statearr_51078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51076__$1,(2),inst_51068);
} else {
if((state_val_51077 === (2))){
var inst_51061 = (state_51076[(7)]);
var inst_51070 = (state_51076[(2)]);
var inst_51071 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_51072 = ["auto"];
var inst_51073 = cljs.core.PersistentHashMap.fromArrays(inst_51071,inst_51072);
var inst_51074 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51061,inst_51073);
var state_51076__$1 = (function (){var statearr_51079 = state_51076;
(statearr_51079[(10)] = inst_51070);

return statearr_51079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51076__$1,inst_51074);
} else {
return null;
}
}
});})(c__41758__auto__))
;
return ((function (switch__41737__auto__,c__41758__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto____0 = (function (){
var statearr_51083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51083[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto__);

(statearr_51083[(1)] = (1));

return statearr_51083;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto____1 = (function (state_51076){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_51076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e51084){if((e51084 instanceof Object)){
var ex__41741__auto__ = e51084;
var statearr_51085_51087 = state_51076;
(statearr_51085_51087[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51088 = state_51076;
state_51076 = G__51088;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto__ = function(state_51076){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto____1.call(this,state_51076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__))
})();
var state__41760__auto__ = (function (){var statearr_51086 = f__41759__auto__.call(null);
(statearr_51086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_51086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__))
);

return c__41758__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__51090 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__51090,(0),null);
var ln = cljs.core.nth.call(null,vec__51090,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__51093 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__51093,(0),null);
var file_line = cljs.core.nth.call(null,vec__51093,(1),null);
var file_column = cljs.core.nth.call(null,vec__51093,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__51093,file_name,file_line,file_column){
return (function (p1__51091_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__51091_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__51093,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__39600__auto__ = file_line;
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
var and__39588__auto__ = cause;
if(cljs.core.truth_(and__39588__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__39588__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__51096 = figwheel.client.heads_up.ensure_container.call(null);
var map__51096__$1 = ((((!((map__51096 == null)))?((((map__51096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51096):map__51096);
var content_area_el = cljs.core.get.call(null,map__51096__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__){
return (function (state_51144){
var state_val_51145 = (state_51144[(1)]);
if((state_val_51145 === (1))){
var inst_51127 = (state_51144[(7)]);
var inst_51127__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_51128 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_51129 = ["0.0"];
var inst_51130 = cljs.core.PersistentHashMap.fromArrays(inst_51128,inst_51129);
var inst_51131 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51127__$1,inst_51130);
var inst_51132 = cljs.core.async.timeout.call(null,(300));
var state_51144__$1 = (function (){var statearr_51146 = state_51144;
(statearr_51146[(7)] = inst_51127__$1);

(statearr_51146[(8)] = inst_51131);

return statearr_51146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51144__$1,(2),inst_51132);
} else {
if((state_val_51145 === (2))){
var inst_51127 = (state_51144[(7)]);
var inst_51134 = (state_51144[(2)]);
var inst_51135 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_51136 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_51137 = cljs.core.PersistentHashMap.fromArrays(inst_51135,inst_51136);
var inst_51138 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51127,inst_51137);
var inst_51139 = cljs.core.async.timeout.call(null,(200));
var state_51144__$1 = (function (){var statearr_51147 = state_51144;
(statearr_51147[(9)] = inst_51138);

(statearr_51147[(10)] = inst_51134);

return statearr_51147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51144__$1,(3),inst_51139);
} else {
if((state_val_51145 === (3))){
var inst_51127 = (state_51144[(7)]);
var inst_51141 = (state_51144[(2)]);
var inst_51142 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_51127,"");
var state_51144__$1 = (function (){var statearr_51148 = state_51144;
(statearr_51148[(11)] = inst_51141);

return statearr_51148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51144__$1,inst_51142);
} else {
return null;
}
}
}
});})(c__41758__auto__))
;
return ((function (switch__41737__auto__,c__41758__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__41738__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__41738__auto____0 = (function (){
var statearr_51152 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51152[(0)] = figwheel$client$heads_up$clear_$_state_machine__41738__auto__);

(statearr_51152[(1)] = (1));

return statearr_51152;
});
var figwheel$client$heads_up$clear_$_state_machine__41738__auto____1 = (function (state_51144){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_51144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e51153){if((e51153 instanceof Object)){
var ex__41741__auto__ = e51153;
var statearr_51154_51156 = state_51144;
(statearr_51154_51156[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51157 = state_51144;
state_51144 = G__51157;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__41738__auto__ = function(state_51144){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__41738__auto____1.call(this,state_51144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__41738__auto____0;
figwheel$client$heads_up$clear_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__41738__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__))
})();
var state__41760__auto__ = (function (){var statearr_51155 = f__41759__auto__.call(null);
(statearr_51155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_51155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__))
);

return c__41758__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__){
return (function (state_51189){
var state_val_51190 = (state_51189[(1)]);
if((state_val_51190 === (1))){
var inst_51179 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_51189__$1 = state_51189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51189__$1,(2),inst_51179);
} else {
if((state_val_51190 === (2))){
var inst_51181 = (state_51189[(2)]);
var inst_51182 = cljs.core.async.timeout.call(null,(400));
var state_51189__$1 = (function (){var statearr_51191 = state_51189;
(statearr_51191[(7)] = inst_51181);

return statearr_51191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51189__$1,(3),inst_51182);
} else {
if((state_val_51190 === (3))){
var inst_51184 = (state_51189[(2)]);
var inst_51185 = figwheel.client.heads_up.clear.call(null);
var state_51189__$1 = (function (){var statearr_51192 = state_51189;
(statearr_51192[(8)] = inst_51184);

return statearr_51192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51189__$1,(4),inst_51185);
} else {
if((state_val_51190 === (4))){
var inst_51187 = (state_51189[(2)]);
var state_51189__$1 = state_51189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51189__$1,inst_51187);
} else {
return null;
}
}
}
}
});})(c__41758__auto__))
;
return ((function (switch__41737__auto__,c__41758__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto____0 = (function (){
var statearr_51196 = [null,null,null,null,null,null,null,null,null];
(statearr_51196[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto__);

(statearr_51196[(1)] = (1));

return statearr_51196;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto____1 = (function (state_51189){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_51189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e51197){if((e51197 instanceof Object)){
var ex__41741__auto__ = e51197;
var statearr_51198_51200 = state_51189;
(statearr_51198_51200[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51201 = state_51189;
state_51189 = G__51201;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto__ = function(state_51189){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto____1.call(this,state_51189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__))
})();
var state__41760__auto__ = (function (){var statearr_51199 = f__41759__auto__.call(null);
(statearr_51199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_51199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__))
);

return c__41758__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1458155580923