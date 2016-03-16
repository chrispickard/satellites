// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50909_50923 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50910_50924 = null;
var count__50911_50925 = (0);
var i__50912_50926 = (0);
while(true){
if((i__50912_50926 < count__50911_50925)){
var f_50927 = cljs.core._nth.call(null,chunk__50910_50924,i__50912_50926);
cljs.core.println.call(null,"  ",f_50927);

var G__50928 = seq__50909_50923;
var G__50929 = chunk__50910_50924;
var G__50930 = count__50911_50925;
var G__50931 = (i__50912_50926 + (1));
seq__50909_50923 = G__50928;
chunk__50910_50924 = G__50929;
count__50911_50925 = G__50930;
i__50912_50926 = G__50931;
continue;
} else {
var temp__4657__auto___50932 = cljs.core.seq.call(null,seq__50909_50923);
if(temp__4657__auto___50932){
var seq__50909_50933__$1 = temp__4657__auto___50932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50909_50933__$1)){
var c__40403__auto___50934 = cljs.core.chunk_first.call(null,seq__50909_50933__$1);
var G__50935 = cljs.core.chunk_rest.call(null,seq__50909_50933__$1);
var G__50936 = c__40403__auto___50934;
var G__50937 = cljs.core.count.call(null,c__40403__auto___50934);
var G__50938 = (0);
seq__50909_50923 = G__50935;
chunk__50910_50924 = G__50936;
count__50911_50925 = G__50937;
i__50912_50926 = G__50938;
continue;
} else {
var f_50939 = cljs.core.first.call(null,seq__50909_50933__$1);
cljs.core.println.call(null,"  ",f_50939);

var G__50940 = cljs.core.next.call(null,seq__50909_50933__$1);
var G__50941 = null;
var G__50942 = (0);
var G__50943 = (0);
seq__50909_50923 = G__50940;
chunk__50910_50924 = G__50941;
count__50911_50925 = G__50942;
i__50912_50926 = G__50943;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50944 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__39600__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50944);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50944)))?cljs.core.second.call(null,arglists_50944):arglists_50944));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50913 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50914 = null;
var count__50915 = (0);
var i__50916 = (0);
while(true){
if((i__50916 < count__50915)){
var vec__50917 = cljs.core._nth.call(null,chunk__50914,i__50916);
var name = cljs.core.nth.call(null,vec__50917,(0),null);
var map__50918 = cljs.core.nth.call(null,vec__50917,(1),null);
var map__50918__$1 = ((((!((map__50918 == null)))?((((map__50918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50918):map__50918);
var doc = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__50945 = seq__50913;
var G__50946 = chunk__50914;
var G__50947 = count__50915;
var G__50948 = (i__50916 + (1));
seq__50913 = G__50945;
chunk__50914 = G__50946;
count__50915 = G__50947;
i__50916 = G__50948;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50913);
if(temp__4657__auto__){
var seq__50913__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50913__$1)){
var c__40403__auto__ = cljs.core.chunk_first.call(null,seq__50913__$1);
var G__50949 = cljs.core.chunk_rest.call(null,seq__50913__$1);
var G__50950 = c__40403__auto__;
var G__50951 = cljs.core.count.call(null,c__40403__auto__);
var G__50952 = (0);
seq__50913 = G__50949;
chunk__50914 = G__50950;
count__50915 = G__50951;
i__50916 = G__50952;
continue;
} else {
var vec__50920 = cljs.core.first.call(null,seq__50913__$1);
var name = cljs.core.nth.call(null,vec__50920,(0),null);
var map__50921 = cljs.core.nth.call(null,vec__50920,(1),null);
var map__50921__$1 = ((((!((map__50921 == null)))?((((map__50921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50921):map__50921);
var doc = cljs.core.get.call(null,map__50921__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__50921__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__50953 = cljs.core.next.call(null,seq__50913__$1);
var G__50954 = null;
var G__50955 = (0);
var G__50956 = (0);
seq__50913 = G__50953;
chunk__50914 = G__50954;
count__50915 = G__50955;
i__50916 = G__50956;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1458155580782