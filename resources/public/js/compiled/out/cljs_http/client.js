// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__39588__auto__ = v;
if(cljs.core.truth_(and__39588__auto__)){
return (v > (0));
} else {
return and__39588__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__49663_SHARP_,p2__49662_SHARP_){
var vec__49665 = clojure.string.split.call(null,p2__49662_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__49665,(0),null);
var v = cljs.core.nth.call(null,vec__49665,(1),null);
return cljs.core.assoc.call(null,p1__49663_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__49666_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__49666_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__49667){
var vec__49669 = p__49667;
var k = cljs.core.nth.call(null,vec__49669,(0),null);
var v = cljs.core.nth.call(null,vec__49669,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__49670_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__49670_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__39588__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__39588__auto__){
var and__39588__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__39588__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__39588__auto____$1;
}
} else {
return and__39588__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__49671_SHARP_){
return cljs_http.client.decode_body.call(null,p1__49671_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49676 = arguments.length;
var i__40659__auto___49677 = (0);
while(true){
if((i__40659__auto___49677 < len__40658__auto___49676)){
args__40665__auto__.push((arguments[i__40659__auto___49677]));

var G__49678 = (i__40659__auto___49677 + (1));
i__40659__auto___49677 = G__49678;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__49674){
var vec__49675 = p__49674;
var default_headers = cljs.core.nth.call(null,vec__49675,(0),null);
return ((function (vec__49675,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__39600__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__49675,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq49672){
var G__49673 = cljs.core.first.call(null,seq49672);
var seq49672__$1 = cljs.core.next.call(null,seq49672);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__49673,seq49672__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49683 = arguments.length;
var i__40659__auto___49684 = (0);
while(true){
if((i__40659__auto___49684 < len__40658__auto___49683)){
args__40665__auto__.push((arguments[i__40659__auto___49684]));

var G__49685 = (i__40659__auto___49684 + (1));
i__40659__auto___49684 = G__49685;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__49681){
var vec__49682 = p__49681;
var accept = cljs.core.nth.call(null,vec__49682,(0),null);
return ((function (vec__49682,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__39600__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__49682,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq49679){
var G__49680 = cljs.core.first.call(null,seq49679);
var seq49679__$1 = cljs.core.next.call(null,seq49679);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__49680,seq49679__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49690 = arguments.length;
var i__40659__auto___49691 = (0);
while(true){
if((i__40659__auto___49691 < len__40658__auto___49690)){
args__40665__auto__.push((arguments[i__40659__auto___49691]));

var G__49692 = (i__40659__auto___49691 + (1));
i__40659__auto___49691 = G__49692;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__49688){
var vec__49689 = p__49688;
var content_type = cljs.core.nth.call(null,vec__49689,(0),null);
return ((function (vec__49689,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__39600__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__49689,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq49686){
var G__49687 = cljs.core.first.call(null,seq49686);
var seq49686__$1 = cljs.core.next.call(null,seq49686);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__49687,seq49686__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__49695 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__49695__$1 = ((((!((map__49695 == null)))?((((map__49695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49695):map__49695);
var encoding = cljs.core.get.call(null,map__49695__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__49695__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__49701 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__49701__$1 = ((((!((map__49701 == null)))?((((map__49701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49701):map__49701);
var decoding = cljs.core.get.call(null,map__49701__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__49701__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__49701,map__49701__$1,decoding,decoding_opts){
return (function (p1__49697_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__49697_SHARP_,decoding,decoding_opts);
});})(map__49701,map__49701__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__49701,map__49701__$1,decoding,decoding_opts,transit_decode){
return (function (p1__49698_SHARP_){
return cljs_http.client.decode_body.call(null,p1__49698_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__49701,map__49701__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__49703_SHARP_){
return cljs_http.client.decode_body.call(null,p1__49703_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__49707){
var map__49708 = p__49707;
var map__49708__$1 = ((((!((map__49708 == null)))?((((map__49708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49708):map__49708);
var req = map__49708__$1;
var query_params = cljs.core.get.call(null,map__49708__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__49713){
var map__49714 = p__49713;
var map__49714__$1 = ((((!((map__49714 == null)))?((((map__49714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49714):map__49714);
var request = map__49714__$1;
var form_params = cljs.core.get.call(null,map__49714__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__49714__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__49714__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__39588__auto__ = form_params;
if(cljs.core.truth_(and__39588__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__39588__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__49722_49728 = cljs.core.seq.call(null,params);
var chunk__49723_49729 = null;
var count__49724_49730 = (0);
var i__49725_49731 = (0);
while(true){
if((i__49725_49731 < count__49724_49730)){
var vec__49726_49732 = cljs.core._nth.call(null,chunk__49723_49729,i__49725_49731);
var k_49733 = cljs.core.nth.call(null,vec__49726_49732,(0),null);
var v_49734 = cljs.core.nth.call(null,vec__49726_49732,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_49734)){
form_data.append(cljs.core.name.call(null,k_49733),cljs.core.first.call(null,v_49734),cljs.core.second.call(null,v_49734));
} else {
form_data.append(cljs.core.name.call(null,k_49733),v_49734);
}

var G__49735 = seq__49722_49728;
var G__49736 = chunk__49723_49729;
var G__49737 = count__49724_49730;
var G__49738 = (i__49725_49731 + (1));
seq__49722_49728 = G__49735;
chunk__49723_49729 = G__49736;
count__49724_49730 = G__49737;
i__49725_49731 = G__49738;
continue;
} else {
var temp__4657__auto___49739 = cljs.core.seq.call(null,seq__49722_49728);
if(temp__4657__auto___49739){
var seq__49722_49740__$1 = temp__4657__auto___49739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49722_49740__$1)){
var c__40403__auto___49741 = cljs.core.chunk_first.call(null,seq__49722_49740__$1);
var G__49742 = cljs.core.chunk_rest.call(null,seq__49722_49740__$1);
var G__49743 = c__40403__auto___49741;
var G__49744 = cljs.core.count.call(null,c__40403__auto___49741);
var G__49745 = (0);
seq__49722_49728 = G__49742;
chunk__49723_49729 = G__49743;
count__49724_49730 = G__49744;
i__49725_49731 = G__49745;
continue;
} else {
var vec__49727_49746 = cljs.core.first.call(null,seq__49722_49740__$1);
var k_49747 = cljs.core.nth.call(null,vec__49727_49746,(0),null);
var v_49748 = cljs.core.nth.call(null,vec__49727_49746,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_49748)){
form_data.append(cljs.core.name.call(null,k_49747),cljs.core.first.call(null,v_49748),cljs.core.second.call(null,v_49748));
} else {
form_data.append(cljs.core.name.call(null,k_49747),v_49748);
}

var G__49749 = cljs.core.next.call(null,seq__49722_49740__$1);
var G__49750 = null;
var G__49751 = (0);
var G__49752 = (0);
seq__49722_49728 = G__49749;
chunk__49723_49729 = G__49750;
count__49724_49730 = G__49751;
i__49725_49731 = G__49752;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__49756){
var map__49757 = p__49756;
var map__49757__$1 = ((((!((map__49757 == null)))?((((map__49757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49757):map__49757);
var request = map__49757__$1;
var multipart_params = cljs.core.get.call(null,map__49757__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__49757__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__39588__auto__ = multipart_params;
if(cljs.core.truth_(and__39588__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__39588__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__49759_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__49759_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__49764){
var map__49765 = p__49764;
var map__49765__$1 = ((((!((map__49765 == null)))?((((map__49765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49765):map__49765);
var req = map__49765__$1;
var query_params = cljs.core.get.call(null,map__49765__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__49765,map__49765__$1,req,query_params){
return (function (p1__49760_SHARP_){
return cljs.core.merge.call(null,p1__49760_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__49765,map__49765__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49771 = arguments.length;
var i__40659__auto___49772 = (0);
while(true){
if((i__40659__auto___49772 < len__40658__auto___49771)){
args__40665__auto__.push((arguments[i__40659__auto___49772]));

var G__49773 = (i__40659__auto___49772 + (1));
i__40659__auto___49772 = G__49773;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__49769){
var vec__49770 = p__49769;
var credentials = cljs.core.nth.call(null,vec__49770,(0),null);
return ((function (vec__49770,credentials){
return (function (req){
var credentials__$1 = (function (){var or__39600__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__49770,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq49767){
var G__49768 = cljs.core.first.call(null,seq49767);
var seq49767__$1 = cljs.core.next.call(null,seq49767);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__49768,seq49767__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49778 = arguments.length;
var i__40659__auto___49779 = (0);
while(true){
if((i__40659__auto___49779 < len__40658__auto___49778)){
args__40665__auto__.push((arguments[i__40659__auto___49779]));

var G__49780 = (i__40659__auto___49779 + (1));
i__40659__auto___49779 = G__49780;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49776){
var vec__49777 = p__49776;
var req = cljs.core.nth.call(null,vec__49777,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq49774){
var G__49775 = cljs.core.first.call(null,seq49774);
var seq49774__$1 = cljs.core.next.call(null,seq49774);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__49775,seq49774__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49785 = arguments.length;
var i__40659__auto___49786 = (0);
while(true){
if((i__40659__auto___49786 < len__40658__auto___49785)){
args__40665__auto__.push((arguments[i__40659__auto___49786]));

var G__49787 = (i__40659__auto___49786 + (1));
i__40659__auto___49786 = G__49787;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49783){
var vec__49784 = p__49783;
var req = cljs.core.nth.call(null,vec__49784,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq49781){
var G__49782 = cljs.core.first.call(null,seq49781);
var seq49781__$1 = cljs.core.next.call(null,seq49781);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__49782,seq49781__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49792 = arguments.length;
var i__40659__auto___49793 = (0);
while(true){
if((i__40659__auto___49793 < len__40658__auto___49792)){
args__40665__auto__.push((arguments[i__40659__auto___49793]));

var G__49794 = (i__40659__auto___49793 + (1));
i__40659__auto___49793 = G__49794;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49790){
var vec__49791 = p__49790;
var req = cljs.core.nth.call(null,vec__49791,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq49788){
var G__49789 = cljs.core.first.call(null,seq49788);
var seq49788__$1 = cljs.core.next.call(null,seq49788);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__49789,seq49788__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49799 = arguments.length;
var i__40659__auto___49800 = (0);
while(true){
if((i__40659__auto___49800 < len__40658__auto___49799)){
args__40665__auto__.push((arguments[i__40659__auto___49800]));

var G__49801 = (i__40659__auto___49800 + (1));
i__40659__auto___49800 = G__49801;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49797){
var vec__49798 = p__49797;
var req = cljs.core.nth.call(null,vec__49798,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq49795){
var G__49796 = cljs.core.first.call(null,seq49795);
var seq49795__$1 = cljs.core.next.call(null,seq49795);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__49796,seq49795__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49806 = arguments.length;
var i__40659__auto___49807 = (0);
while(true){
if((i__40659__auto___49807 < len__40658__auto___49806)){
args__40665__auto__.push((arguments[i__40659__auto___49807]));

var G__49808 = (i__40659__auto___49807 + (1));
i__40659__auto___49807 = G__49808;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49804){
var vec__49805 = p__49804;
var req = cljs.core.nth.call(null,vec__49805,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq49802){
var G__49803 = cljs.core.first.call(null,seq49802);
var seq49802__$1 = cljs.core.next.call(null,seq49802);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__49803,seq49802__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49813 = arguments.length;
var i__40659__auto___49814 = (0);
while(true){
if((i__40659__auto___49814 < len__40658__auto___49813)){
args__40665__auto__.push((arguments[i__40659__auto___49814]));

var G__49815 = (i__40659__auto___49814 + (1));
i__40659__auto___49814 = G__49815;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49811){
var vec__49812 = p__49811;
var req = cljs.core.nth.call(null,vec__49812,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq49809){
var G__49810 = cljs.core.first.call(null,seq49809);
var seq49809__$1 = cljs.core.next.call(null,seq49809);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__49810,seq49809__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49820 = arguments.length;
var i__40659__auto___49821 = (0);
while(true){
if((i__40659__auto___49821 < len__40658__auto___49820)){
args__40665__auto__.push((arguments[i__40659__auto___49821]));

var G__49822 = (i__40659__auto___49821 + (1));
i__40659__auto___49821 = G__49822;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49818){
var vec__49819 = p__49818;
var req = cljs.core.nth.call(null,vec__49819,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq49816){
var G__49817 = cljs.core.first.call(null,seq49816);
var seq49816__$1 = cljs.core.next.call(null,seq49816);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__49817,seq49816__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49827 = arguments.length;
var i__40659__auto___49828 = (0);
while(true){
if((i__40659__auto___49828 < len__40658__auto___49827)){
args__40665__auto__.push((arguments[i__40659__auto___49828]));

var G__49829 = (i__40659__auto___49828 + (1));
i__40659__auto___49828 = G__49829;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49825){
var vec__49826 = p__49825;
var req = cljs.core.nth.call(null,vec__49826,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq49823){
var G__49824 = cljs.core.first.call(null,seq49823);
var seq49823__$1 = cljs.core.next.call(null,seq49823);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__49824,seq49823__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__40665__auto__ = [];
var len__40658__auto___49834 = arguments.length;
var i__40659__auto___49835 = (0);
while(true){
if((i__40659__auto___49835 < len__40658__auto___49834)){
args__40665__auto__.push((arguments[i__40659__auto___49835]));

var G__49836 = (i__40659__auto___49835 + (1));
i__40659__auto___49835 = G__49836;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49832){
var vec__49833 = p__49832;
var req = cljs.core.nth.call(null,vec__49833,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq49830){
var G__49831 = cljs.core.first.call(null,seq49830);
var seq49830__$1 = cljs.core.next.call(null,seq49830);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__49831,seq49830__$1);
});

//# sourceMappingURL=client.js.map?rel=1458155580145