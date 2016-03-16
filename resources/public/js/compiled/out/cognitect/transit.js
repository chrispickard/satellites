// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__46136_46140 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__46137_46141 = null;
var count__46138_46142 = (0);
var i__46139_46143 = (0);
while(true){
if((i__46139_46143 < count__46138_46142)){
var k_46144 = cljs.core._nth.call(null,chunk__46137_46141,i__46139_46143);
var v_46145 = (b[k_46144]);
(a[k_46144] = v_46145);

var G__46146 = seq__46136_46140;
var G__46147 = chunk__46137_46141;
var G__46148 = count__46138_46142;
var G__46149 = (i__46139_46143 + (1));
seq__46136_46140 = G__46146;
chunk__46137_46141 = G__46147;
count__46138_46142 = G__46148;
i__46139_46143 = G__46149;
continue;
} else {
var temp__4657__auto___46150 = cljs.core.seq.call(null,seq__46136_46140);
if(temp__4657__auto___46150){
var seq__46136_46151__$1 = temp__4657__auto___46150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46136_46151__$1)){
var c__40403__auto___46152 = cljs.core.chunk_first.call(null,seq__46136_46151__$1);
var G__46153 = cljs.core.chunk_rest.call(null,seq__46136_46151__$1);
var G__46154 = c__40403__auto___46152;
var G__46155 = cljs.core.count.call(null,c__40403__auto___46152);
var G__46156 = (0);
seq__46136_46140 = G__46153;
chunk__46137_46141 = G__46154;
count__46138_46142 = G__46155;
i__46139_46143 = G__46156;
continue;
} else {
var k_46157 = cljs.core.first.call(null,seq__46136_46151__$1);
var v_46158 = (b[k_46157]);
(a[k_46157] = v_46158);

var G__46159 = cljs.core.next.call(null,seq__46136_46151__$1);
var G__46160 = null;
var G__46161 = (0);
var G__46162 = (0);
seq__46136_46140 = G__46159;
chunk__46137_46141 = G__46160;
count__46138_46142 = G__46161;
i__46139_46143 = G__46162;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args46163 = [];
var len__40658__auto___46166 = arguments.length;
var i__40659__auto___46167 = (0);
while(true){
if((i__40659__auto___46167 < len__40658__auto___46166)){
args46163.push((arguments[i__40659__auto___46167]));

var G__46168 = (i__40659__auto___46167 + (1));
i__40659__auto___46167 = G__46168;
continue;
} else {
}
break;
}

var G__46165 = args46163.length;
switch (G__46165) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46163.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__46170 = (i + (2));
var G__46171 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__46170;
ret = G__46171;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__46172_46176 = cljs.core.seq.call(null,v);
var chunk__46173_46177 = null;
var count__46174_46178 = (0);
var i__46175_46179 = (0);
while(true){
if((i__46175_46179 < count__46174_46178)){
var x_46180 = cljs.core._nth.call(null,chunk__46173_46177,i__46175_46179);
ret.push(x_46180);

var G__46181 = seq__46172_46176;
var G__46182 = chunk__46173_46177;
var G__46183 = count__46174_46178;
var G__46184 = (i__46175_46179 + (1));
seq__46172_46176 = G__46181;
chunk__46173_46177 = G__46182;
count__46174_46178 = G__46183;
i__46175_46179 = G__46184;
continue;
} else {
var temp__4657__auto___46185 = cljs.core.seq.call(null,seq__46172_46176);
if(temp__4657__auto___46185){
var seq__46172_46186__$1 = temp__4657__auto___46185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46172_46186__$1)){
var c__40403__auto___46187 = cljs.core.chunk_first.call(null,seq__46172_46186__$1);
var G__46188 = cljs.core.chunk_rest.call(null,seq__46172_46186__$1);
var G__46189 = c__40403__auto___46187;
var G__46190 = cljs.core.count.call(null,c__40403__auto___46187);
var G__46191 = (0);
seq__46172_46176 = G__46188;
chunk__46173_46177 = G__46189;
count__46174_46178 = G__46190;
i__46175_46179 = G__46191;
continue;
} else {
var x_46192 = cljs.core.first.call(null,seq__46172_46186__$1);
ret.push(x_46192);

var G__46193 = cljs.core.next.call(null,seq__46172_46186__$1);
var G__46194 = null;
var G__46195 = (0);
var G__46196 = (0);
seq__46172_46176 = G__46193;
chunk__46173_46177 = G__46194;
count__46174_46178 = G__46195;
i__46175_46179 = G__46196;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__46197_46201 = cljs.core.seq.call(null,v);
var chunk__46198_46202 = null;
var count__46199_46203 = (0);
var i__46200_46204 = (0);
while(true){
if((i__46200_46204 < count__46199_46203)){
var x_46205 = cljs.core._nth.call(null,chunk__46198_46202,i__46200_46204);
ret.push(x_46205);

var G__46206 = seq__46197_46201;
var G__46207 = chunk__46198_46202;
var G__46208 = count__46199_46203;
var G__46209 = (i__46200_46204 + (1));
seq__46197_46201 = G__46206;
chunk__46198_46202 = G__46207;
count__46199_46203 = G__46208;
i__46200_46204 = G__46209;
continue;
} else {
var temp__4657__auto___46210 = cljs.core.seq.call(null,seq__46197_46201);
if(temp__4657__auto___46210){
var seq__46197_46211__$1 = temp__4657__auto___46210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46197_46211__$1)){
var c__40403__auto___46212 = cljs.core.chunk_first.call(null,seq__46197_46211__$1);
var G__46213 = cljs.core.chunk_rest.call(null,seq__46197_46211__$1);
var G__46214 = c__40403__auto___46212;
var G__46215 = cljs.core.count.call(null,c__40403__auto___46212);
var G__46216 = (0);
seq__46197_46201 = G__46213;
chunk__46198_46202 = G__46214;
count__46199_46203 = G__46215;
i__46200_46204 = G__46216;
continue;
} else {
var x_46217 = cljs.core.first.call(null,seq__46197_46211__$1);
ret.push(x_46217);

var G__46218 = cljs.core.next.call(null,seq__46197_46211__$1);
var G__46219 = null;
var G__46220 = (0);
var G__46221 = (0);
seq__46197_46201 = G__46218;
chunk__46198_46202 = G__46219;
count__46199_46203 = G__46220;
i__46200_46204 = G__46221;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__46222_46226 = cljs.core.seq.call(null,v);
var chunk__46223_46227 = null;
var count__46224_46228 = (0);
var i__46225_46229 = (0);
while(true){
if((i__46225_46229 < count__46224_46228)){
var x_46230 = cljs.core._nth.call(null,chunk__46223_46227,i__46225_46229);
ret.push(x_46230);

var G__46231 = seq__46222_46226;
var G__46232 = chunk__46223_46227;
var G__46233 = count__46224_46228;
var G__46234 = (i__46225_46229 + (1));
seq__46222_46226 = G__46231;
chunk__46223_46227 = G__46232;
count__46224_46228 = G__46233;
i__46225_46229 = G__46234;
continue;
} else {
var temp__4657__auto___46235 = cljs.core.seq.call(null,seq__46222_46226);
if(temp__4657__auto___46235){
var seq__46222_46236__$1 = temp__4657__auto___46235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46222_46236__$1)){
var c__40403__auto___46237 = cljs.core.chunk_first.call(null,seq__46222_46236__$1);
var G__46238 = cljs.core.chunk_rest.call(null,seq__46222_46236__$1);
var G__46239 = c__40403__auto___46237;
var G__46240 = cljs.core.count.call(null,c__40403__auto___46237);
var G__46241 = (0);
seq__46222_46226 = G__46238;
chunk__46223_46227 = G__46239;
count__46224_46228 = G__46240;
i__46225_46229 = G__46241;
continue;
} else {
var x_46242 = cljs.core.first.call(null,seq__46222_46236__$1);
ret.push(x_46242);

var G__46243 = cljs.core.next.call(null,seq__46222_46236__$1);
var G__46244 = null;
var G__46245 = (0);
var G__46246 = (0);
seq__46222_46226 = G__46243;
chunk__46223_46227 = G__46244;
count__46224_46228 = G__46245;
i__46225_46229 = G__46246;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args46247 = [];
var len__40658__auto___46258 = arguments.length;
var i__40659__auto___46259 = (0);
while(true){
if((i__40659__auto___46259 < len__40658__auto___46258)){
args46247.push((arguments[i__40659__auto___46259]));

var G__46260 = (i__40659__auto___46259 + (1));
i__40659__auto___46259 = G__46260;
continue;
} else {
}
break;
}

var G__46249 = args46247.length;
switch (G__46249) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46247.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__46250 = obj;
G__46250.push(kfn.call(null,k),vfn.call(null,v));

return G__46250;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x46251 = cljs.core.clone.call(null,handlers);
x46251.forEach = ((function (x46251,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__46252 = cljs.core.seq.call(null,coll);
var chunk__46253 = null;
var count__46254 = (0);
var i__46255 = (0);
while(true){
if((i__46255 < count__46254)){
var vec__46256 = cljs.core._nth.call(null,chunk__46253,i__46255);
var k = cljs.core.nth.call(null,vec__46256,(0),null);
var v = cljs.core.nth.call(null,vec__46256,(1),null);
f.call(null,v,k);

var G__46262 = seq__46252;
var G__46263 = chunk__46253;
var G__46264 = count__46254;
var G__46265 = (i__46255 + (1));
seq__46252 = G__46262;
chunk__46253 = G__46263;
count__46254 = G__46264;
i__46255 = G__46265;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46252);
if(temp__4657__auto__){
var seq__46252__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46252__$1)){
var c__40403__auto__ = cljs.core.chunk_first.call(null,seq__46252__$1);
var G__46266 = cljs.core.chunk_rest.call(null,seq__46252__$1);
var G__46267 = c__40403__auto__;
var G__46268 = cljs.core.count.call(null,c__40403__auto__);
var G__46269 = (0);
seq__46252 = G__46266;
chunk__46253 = G__46267;
count__46254 = G__46268;
i__46255 = G__46269;
continue;
} else {
var vec__46257 = cljs.core.first.call(null,seq__46252__$1);
var k = cljs.core.nth.call(null,vec__46257,(0),null);
var v = cljs.core.nth.call(null,vec__46257,(1),null);
f.call(null,v,k);

var G__46270 = cljs.core.next.call(null,seq__46252__$1);
var G__46271 = null;
var G__46272 = (0);
var G__46273 = (0);
seq__46252 = G__46270;
chunk__46253 = G__46271;
count__46254 = G__46272;
i__46255 = G__46273;
continue;
}
} else {
return null;
}
}
break;
}
});})(x46251,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x46251;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args46274 = [];
var len__40658__auto___46280 = arguments.length;
var i__40659__auto___46281 = (0);
while(true){
if((i__40659__auto___46281 < len__40658__auto___46280)){
args46274.push((arguments[i__40659__auto___46281]));

var G__46282 = (i__40659__auto___46281 + (1));
i__40659__auto___46281 = G__46282;
continue;
} else {
}
break;
}

var G__46276 = args46274.length;
switch (G__46276) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46274.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit46277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit46277 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta46278){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta46278 = meta46278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit46277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46279,meta46278__$1){
var self__ = this;
var _46279__$1 = this;
return (new cognitect.transit.t_cognitect$transit46277(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta46278__$1));
});

cognitect.transit.t_cognitect$transit46277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46279){
var self__ = this;
var _46279__$1 = this;
return self__.meta46278;
});

cognitect.transit.t_cognitect$transit46277.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit46277.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit46277.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit46277.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit46277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta46278","meta46278",-1897814425,null)], null);
});

cognitect.transit.t_cognitect$transit46277.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit46277.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit46277";

cognitect.transit.t_cognitect$transit46277.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cognitect.transit/t_cognitect$transit46277");
});

cognitect.transit.__GT_t_cognitect$transit46277 = (function cognitect$transit$__GT_t_cognitect$transit46277(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta46278){
return (new cognitect.transit.t_cognitect$transit46277(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta46278));
});

}

return (new cognitect.transit.t_cognitect$transit46277(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__39600__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1458155577125