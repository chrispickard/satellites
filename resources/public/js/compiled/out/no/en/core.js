// Compiled by ClojureScript 1.7.170 {}
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.crypt.base64');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"http","http",382524695),(80),new cljs.core.Keyword(null,"https","https",-1983909665),(443),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),(3306),new cljs.core.Keyword(null,"postgresql","postgresql",-1568339962),(5432),new cljs.core.Keyword(null,"rabbitmq","rabbitmq",1046897371),(5672)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
 * Split the string `s` by the regex `pattern`.
 */
no.en.core.split_by_regex = (function no$en$core$split_by_regex(s,pattern){
if(cljs.core.sequential_QMARK_.call(null,s)){
return s;
} else {
if(!(clojure.string.blank_QMARK_.call(null,s))){
return clojure.string.split.call(null,s,pattern);
} else {
return null;
}
}
});
/**
 * Split the string `s` by comma.
 */
no.en.core.split_by_comma = (function no$en$core$split_by_comma(s){
return no.en.core.split_by_regex.call(null,s,/\s*,\s*/);
});
/**
 * Returns `bytes` as an UTF-8 encoded string.
 */
no.en.core.utf8_string = (function no$en$core$utf8_string(bytes){
throw cljs.core.ex_info.call(null,"utf8-string not implemented yet",bytes);
});
/**
 * Returns `s` as a Base64 encoded string.
 */
no.en.core.base64_encode = (function no$en$core$base64_encode(bytes){
if(cljs.core.truth_(bytes)){
return goog.crypt.base64.encodeString(bytes,false);
} else {
return null;
}
});
/**
 * Returns `s` as a Base64 decoded string.
 */
no.en.core.base64_decode = (function no$en$core$base64_decode(s){
if(cljs.core.truth_(s)){
return goog.crypt.base64.decodeString(s,false);
} else {
return null;
}
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
no.en.core.compact_map = (function no$en$core$compact_map(m){
return cljs.core.reduce.call(null,(function (m__$1,k){
var v = cljs.core.get.call(null,m__$1,k);
if(((v == null)) || (((cljs.core.map_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))) && (cljs.core.empty_QMARK_.call(null,v)))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
/**
 * Returns `s` as an URL encoded string.
 */
no.en.core.url_encode = (function no$en$core$url_encode(var_args){
var args__40665__auto__ = [];
var len__40658__auto___46077 = arguments.length;
var i__40659__auto___46078 = (0);
while(true){
if((i__40659__auto___46078 < len__40658__auto___46077)){
args__40665__auto__.push((arguments[i__40659__auto___46078]));

var G__46079 = (i__40659__auto___46078 + (1));
i__40659__auto___46078 = G__46079;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__46075){
var vec__46076 = p__46075;
var encoding = cljs.core.nth.call(null,vec__46076,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join('')),"*","%2A");
} else {
return null;
}
});

no.en.core.url_encode.cljs$lang$maxFixedArity = (1);

no.en.core.url_encode.cljs$lang$applyTo = (function (seq46073){
var G__46074 = cljs.core.first.call(null,seq46073);
var seq46073__$1 = cljs.core.next.call(null,seq46073);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__46074,seq46073__$1);
});
/**
 * Returns `s` as an URL decoded string.
 */
no.en.core.url_decode = (function no$en$core$url_decode(var_args){
var args__40665__auto__ = [];
var len__40658__auto___46084 = arguments.length;
var i__40659__auto___46085 = (0);
while(true){
if((i__40659__auto___46085 < len__40658__auto___46084)){
args__40665__auto__.push((arguments[i__40659__auto___46085]));

var G__46086 = (i__40659__auto___46085 + (1));
i__40659__auto___46085 = G__46086;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__46082){
var vec__46083 = p__46082;
var encoding = cljs.core.nth.call(null,vec__46083,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

no.en.core.url_decode.cljs$lang$maxFixedArity = (1);

no.en.core.url_decode.cljs$lang$applyTo = (function (seq46080){
var G__46081 = cljs.core.first.call(null,seq46080);
var seq46080__$1 = cljs.core.next.call(null,seq46080);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__46081,seq46080__$1);
});
no.en.core.pow = (function no$en$core$pow(n,x){
return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow.call(null,(1024),(4)),no.en.core.pow.call(null,(1024),(1)),no.en.core.pow.call(null,(1024),(3)),no.en.core.pow.call(null,(1024),(2)),no.en.core.pow.call(null,(1024),(8)),no.en.core.pow.call(null,(1024),(7)),no.en.core.pow.call(null,(1024),(6)),no.en.core.pow.call(null,(1024),(0)),no.en.core.pow.call(null,(1024),(5))]);
no.en.core.apply_unit = (function no$en$core$apply_unit(number,unit){
if(typeof unit === 'string'){
var G__46089 = clojure.string.upper_case.call(null,unit);
switch (G__46089) {
default:
var G__46090 = unit;
switch (G__46090) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unit)].join('')));

}

}
} else {
return number;
}
});
no.en.core.parse_number = (function no$en$core$parse_number(s,parse_fn){
var temp__4655__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,[cljs.core.str(s)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
var number = parse_fn.call(null,cljs.core.nth.call(null,matches,(1)));
var unit = cljs.core.nth.call(null,matches,(3));
if(cljs.core.not.call(null,isNaN(number))){
return no.en.core.apply_unit.call(null,number,unit);
} else {
return null;
}
} else {
return null;
}
});
no.en.core.parse_bytes = (function no$en$core$parse_bytes(s){
var temp__4655__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,[cljs.core.str(s)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
var number = cljs.reader.read_string.call(null,cljs.core.nth.call(null,matches,(1)));
var unit = cljs.core.nth.call(null,matches,(3));
return cljs.core.long$.call(null,(cljs.core.long$.call(null,cljs.reader.read_string.call(null,[cljs.core.str(cljs.core.nth.call(null,matches,(1)))].join(''))) * cljs.core.get.call(null,no.en.core.byte_scale,clojure.string.upper_case.call(null,(function (){var or__39600__auto__ = unit;
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return "";
}
})()),(1))));
} else {
return null;
}
});
/**
 * Parse `s` as a integer number.
 */
no.en.core.parse_integer = (function no$en$core$parse_integer(s){
return no.en.core.parse_number.call(null,s,(function (p1__46093_SHARP_){
return parseInt(p1__46093_SHARP_);
}));
});
/**
 * Parse `s` as a long number.
 */
no.en.core.parse_long = (function no$en$core$parse_long(s){
return no.en.core.parse_number.call(null,s,(function (p1__46094_SHARP_){
return parseInt(p1__46094_SHARP_);
}));
});
/**
 * Parse `s` as a double number.
 */
no.en.core.parse_double = (function no$en$core$parse_double(s){
return no.en.core.parse_number.call(null,s,(function (p1__46095_SHARP_){
return parseFloat(p1__46095_SHARP_);
}));
});
/**
 * Parse `s` as a float number.
 */
no.en.core.parse_float = (function no$en$core$parse_float(s){
return no.en.core.parse_number.call(null,s,(function (p1__46096_SHARP_){
return parseFloat(p1__46096_SHARP_);
}));
});
/**
 * Format the map `m` into a query parameter string.
 */
no.en.core.format_query_params = (function no$en$core$format_query_params(m){
var params = clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__46099_SHARP_){
return clojure.string.join.call(null,"=",p1__46099_SHARP_);
}),cljs.core.map.call(null,(function (p1__46098_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode.call(null,cljs.core.name.call(null,cljs.core.first.call(null,p1__46098_SHARP_))),no.en.core.url_encode.call(null,cljs.core.second.call(null,p1__46098_SHARP_))],null));
}),cljs.core.remove.call(null,(function (p1__46097_SHARP_){
return clojure.string.blank_QMARK_.call(null,[cljs.core.str(cljs.core.second.call(null,p1__46097_SHARP_))].join(''));
}),cljs.core.sort_by.call(null,cljs.core.first,cljs.core.seq.call(null,m))))));
if(!(clojure.string.blank_QMARK_.call(null,params))){
return params;
} else {
return null;
}
});
/**
 * Format the Ring map as an url.
 */
no.en.core.format_url = (function no$en$core$format_url(m){
if(!(cljs.core.empty_QMARK_.call(null,m))){
var query_params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(m);
return [cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m))?[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str("://")].join(''):null)),cljs.core.str((function (){var map__46102 = m;
var map__46102__$1 = ((((!((map__46102 == null)))?((((map__46102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46102):map__46102);
var user = cljs.core.get.call(null,map__46102__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var password = cljs.core.get.call(null,map__46102__$1,new cljs.core.Keyword(null,"password","password",417022471));
if(cljs.core.truth_(user)){
return [cljs.core.str((cljs.core.truth_(user)?user:null)),cljs.core.str((cljs.core.truth_(password)?[cljs.core.str(":"),cljs.core.str(password)].join(''):null)),cljs.core.str("@")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"server-name","server-name",-1012104295).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str((function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"server-port","server-port",663745648).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var port = temp__4655__auto__;
if(!(cljs.core._EQ_.call(null,port,no.en.core.port_number.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m))))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
} else {
return null;
}
})()),cljs.core.str(((((new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_.call(null,query_params))))?"/":new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str(((!(cljs.core.empty_QMARK_.call(null,query_params)))?[cljs.core.str("?"),cljs.core.str(no.en.core.format_query_params.call(null,query_params))].join(''):null)),cljs.core.str(((!(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m))))?[cljs.core.str("#"),cljs.core.str(new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m))].join(''):null))].join('');
} else {
return null;
}
});
/**
 * Parse `s` as a percentage.
 */
no.en.core.parse_percent = (function no$en$core$parse_percent(s){
return no.en.core.parse_double.call(null,clojure.string.replace.call(null,s,"%",""));
});
/**
 * Quote the special characters in `s` that are used in regular expressions.
 */
no.en.core.pattern_quote = (function no$en$core$pattern_quote(s){
return clojure.string.replace.call(null,cljs.core.name.call(null,s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
 * Returns the first string that separates the components in `s`.
 */
no.en.core.separator = (function no$en$core$separator(s){
var temp__4655__auto__ = cljs.core.re_matches.call(null,/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
return cljs.core.nth.call(null,matches,(2));
} else {
return null;
}
});
/**
 * Parse the query parameter string `s` and return a map.
 */
no.en.core.parse_query_params = (function no$en$core$parse_query_params(s){
if(cljs.core.truth_(s)){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__46106_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,no.en.core.url_decode.call(null,cljs.core.first.call(null,p1__46106_SHARP_))),no.en.core.url_decode.call(null,cljs.core.second.call(null,p1__46106_SHARP_))],null));
}),cljs.core.filter.call(null,(function (p1__46105_SHARP_){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,p1__46105_SHARP_));
}),cljs.core.map.call(null,(function (p1__46104_SHARP_){
return clojure.string.split.call(null,p1__46104_SHARP_,/=/);
}),clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/)))));
} else {
return null;
}
});
/**
 * Parse the url `s` and return a Ring compatible map.
 */
no.en.core.parse_url = (function no$en$core$parse_url(s){
var temp__4655__auto__ = cljs.core.re_matches.call(null,no.en.core.url_regex,[cljs.core.str(s)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
var scheme = cljs.core.keyword.call(null,cljs.core.nth.call(null,matches,(1)));
return no.en.core.compact_map.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"scheme","scheme",90199613)],[cljs.core.nth.call(null,matches,(4)),cljs.core.nth.call(null,matches,(14)),(function (){var or__39600__auto__ = no.en.core.parse_integer.call(null,cljs.core.nth.call(null,matches,(8)));
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return no.en.core.port_number.call(null,scheme);
}
})(),no.en.core.parse_query_params.call(null,cljs.core.nth.call(null,matches,(12))),cljs.core.nth.call(null,matches,(10)),cljs.core.nth.call(null,matches,(6)),cljs.core.nth.call(null,matches,(12)),cljs.core.nth.call(null,matches,(3)),scheme]));
} else {
return null;
}
});
/**
 * Executes thunk. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries_STAR_ = (function no$en$core$with_retries_STAR_(n,thunk){
var n__$1 = n;
while(true){
var temp__4655__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thunk.call(null)], null);
}catch (e46108){if((e46108 instanceof Error)){
var e = e46108;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e46108;

}
}})();
if(cljs.core.truth_(temp__4655__auto__)){
var result = temp__4655__auto__;
return result.call(null,(0));
} else {
var G__46109 = (n__$1 - (1));
n__$1 = G__46109;
continue;
}
break;
}
});
/**
 * Executes body. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries = (function no$en$core$with_retries(var_args){
var args__40665__auto__ = [];
var len__40658__auto___46114 = arguments.length;
var i__40659__auto___46115 = (0);
while(true){
if((i__40659__auto___46115 < len__40658__auto___46114)){
args__40665__auto__.push((arguments[i__40659__auto___46115]));

var G__46116 = (i__40659__auto___46115 + (1));
i__40659__auto___46115 = G__46116;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((3) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((3)),(0))):null);
return no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40666__auto__);
});

no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("no.en.core","with-retries*","no.en.core/with-retries*",172357687,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,n),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))))),body)))))));
});

no.en.core.with_retries.cljs$lang$maxFixedArity = (3);

no.en.core.with_retries.cljs$lang$applyTo = (function (seq46110){
var G__46111 = cljs.core.first.call(null,seq46110);
var seq46110__$1 = cljs.core.next.call(null,seq46110);
var G__46112 = cljs.core.first.call(null,seq46110__$1);
var seq46110__$2 = cljs.core.next.call(null,seq46110__$1);
var G__46113 = cljs.core.first.call(null,seq46110__$2);
var seq46110__$3 = cljs.core.next.call(null,seq46110__$2);
return no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic(G__46111,G__46112,G__46113,seq46110__$3);
});

no.en.core.with_retries.cljs$lang$macro = true;
no.en.core.editable_QMARK_ = (function no$en$core$editable_QMARK_(coll){
if(!((coll == null))){
if((false) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
no.en.core.reduce_map = (function no$en$core$reduce_map(f,coll){
if(cljs.core.truth_(no.en.core.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll)),coll));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll),coll);
}
});
/**
 * Maps a function over the keys of an associative collection.
 */
no.en.core.map_keys = (function no$en$core$map_keys(f,coll){
return no.en.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
no.en.core.map_vals = (function no$en$core$map_vals(f,coll){
return no.en.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
});
/**
 * Like merge, but merges maps recursively.
 */
no.en.core.deep_merge = (function no$en$core$deep_merge(var_args){
var args__40665__auto__ = [];
var len__40658__auto___46120 = arguments.length;
var i__40659__auto___46121 = (0);
while(true){
if((i__40659__auto___46121 < len__40658__auto___46120)){
args__40665__auto__.push((arguments[i__40659__auto___46121]));

var G__46122 = (i__40659__auto___46121 + (1));
i__40659__auto___46121 = G__46122;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((0) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((0)),(0))):null);
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__40666__auto__);
});

no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,no.en.core.deep_merge,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

no.en.core.deep_merge.cljs$lang$maxFixedArity = (0);

no.en.core.deep_merge.cljs$lang$applyTo = (function (seq46119){
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46119));
});
/**
 * Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 */
no.en.core.deep_merge_with = (function no$en$core$deep_merge_with(var_args){
var args__40665__auto__ = [];
var len__40658__auto___46125 = arguments.length;
var i__40659__auto___46126 = (0);
while(true){
if((i__40659__auto___46126 < len__40658__auto___46125)){
args__40665__auto__.push((arguments[i__40659__auto___46126]));

var G__46127 = (i__40659__auto___46126 + (1));
i__40659__auto___46126 = G__46127;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.call(null,(function() { 
var no$en$core$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.call(null,cljs.core.merge_with,no$en$core$m,maps__$1);
} else {
return cljs.core.apply.call(null,f,maps__$1);
}
};
var no$en$core$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__46128__i = 0, G__46128__a = new Array(arguments.length -  0);
while (G__46128__i < G__46128__a.length) {G__46128__a[G__46128__i] = arguments[G__46128__i + 0]; ++G__46128__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__46128__a,0);
} 
return no$en$core$m__delegate.call(this,maps__$1);};
no$en$core$m.cljs$lang$maxFixedArity = 0;
no$en$core$m.cljs$lang$applyTo = (function (arglist__46129){
var maps__$1 = cljs.core.seq(arglist__46129);
return no$en$core$m__delegate(maps__$1);
});
no$en$core$m.cljs$core$IFn$_invoke$arity$variadic = no$en$core$m__delegate;
return no$en$core$m;
})()
,maps);
});

no.en.core.deep_merge_with.cljs$lang$maxFixedArity = (1);

no.en.core.deep_merge_with.cljs$lang$applyTo = (function (seq46123){
var G__46124 = cljs.core.first.call(null,seq46123);
var seq46123__$1 = cljs.core.next.call(null,seq46123);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__46124,seq46123__$1);
});

//# sourceMappingURL=core.js.map?rel=1458155576948