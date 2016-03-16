// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args46392 = [];
var len__40658__auto___46398 = arguments.length;
var i__40659__auto___46399 = (0);
while(true){
if((i__40659__auto___46399 < len__40658__auto___46398)){
args46392.push((arguments[i__40659__auto___46399]));

var G__46400 = (i__40659__auto___46399 + (1));
i__40659__auto___46399 = G__46400;
continue;
} else {
}
break;
}

var G__46394 = args46392.length;
switch (G__46394) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46392.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async46395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46395 = (function (f,blockable,meta46396){
this.f = f;
this.blockable = blockable;
this.meta46396 = meta46396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46397,meta46396__$1){
var self__ = this;
var _46397__$1 = this;
return (new cljs.core.async.t_cljs$core$async46395(self__.f,self__.blockable,meta46396__$1));
});

cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46397){
var self__ = this;
var _46397__$1 = this;
return self__.meta46396;
});

cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46396","meta46396",-1136796715,null)], null);
});

cljs.core.async.t_cljs$core$async46395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46395";

cljs.core.async.t_cljs$core$async46395.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async46395");
});

cljs.core.async.__GT_t_cljs$core$async46395 = (function cljs$core$async$__GT_t_cljs$core$async46395(f__$1,blockable__$1,meta46396){
return (new cljs.core.async.t_cljs$core$async46395(f__$1,blockable__$1,meta46396));
});

}

return (new cljs.core.async.t_cljs$core$async46395(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args46404 = [];
var len__40658__auto___46407 = arguments.length;
var i__40659__auto___46408 = (0);
while(true){
if((i__40659__auto___46408 < len__40658__auto___46407)){
args46404.push((arguments[i__40659__auto___46408]));

var G__46409 = (i__40659__auto___46408 + (1));
i__40659__auto___46408 = G__46409;
continue;
} else {
}
break;
}

var G__46406 = args46404.length;
switch (G__46406) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46404.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args46411 = [];
var len__40658__auto___46414 = arguments.length;
var i__40659__auto___46415 = (0);
while(true){
if((i__40659__auto___46415 < len__40658__auto___46414)){
args46411.push((arguments[i__40659__auto___46415]));

var G__46416 = (i__40659__auto___46415 + (1));
i__40659__auto___46415 = G__46416;
continue;
} else {
}
break;
}

var G__46413 = args46411.length;
switch (G__46413) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46411.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args46418 = [];
var len__40658__auto___46421 = arguments.length;
var i__40659__auto___46422 = (0);
while(true){
if((i__40659__auto___46422 < len__40658__auto___46421)){
args46418.push((arguments[i__40659__auto___46422]));

var G__46423 = (i__40659__auto___46422 + (1));
i__40659__auto___46422 = G__46423;
continue;
} else {
}
break;
}

var G__46420 = args46418.length;
switch (G__46420) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46418.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46425 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46425);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46425,ret){
return (function (){
return fn1.call(null,val_46425);
});})(val_46425,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args46426 = [];
var len__40658__auto___46429 = arguments.length;
var i__40659__auto___46430 = (0);
while(true){
if((i__40659__auto___46430 < len__40658__auto___46429)){
args46426.push((arguments[i__40659__auto___46430]));

var G__46431 = (i__40659__auto___46430 + (1));
i__40659__auto___46430 = G__46431;
continue;
} else {
}
break;
}

var G__46428 = args46426.length;
switch (G__46428) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46426.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__40503__auto___46433 = n;
var x_46434 = (0);
while(true){
if((x_46434 < n__40503__auto___46433)){
(a[x_46434] = (0));

var G__46435 = (x_46434 + (1));
x_46434 = G__46435;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__46436 = (i + (1));
i = G__46436;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46440 = (function (alt_flag,flag,meta46441){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta46441 = meta46441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46442,meta46441__$1){
var self__ = this;
var _46442__$1 = this;
return (new cljs.core.async.t_cljs$core$async46440(self__.alt_flag,self__.flag,meta46441__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46442){
var self__ = this;
var _46442__$1 = this;
return self__.meta46441;
});})(flag))
;

cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46440.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46441","meta46441",-1125006788,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46440";

cljs.core.async.t_cljs$core$async46440.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async46440");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46440 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46440(alt_flag__$1,flag__$1,meta46441){
return (new cljs.core.async.t_cljs$core$async46440(alt_flag__$1,flag__$1,meta46441));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46440(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46446 = (function (alt_handler,flag,cb,meta46447){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta46447 = meta46447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46448,meta46447__$1){
var self__ = this;
var _46448__$1 = this;
return (new cljs.core.async.t_cljs$core$async46446(self__.alt_handler,self__.flag,self__.cb,meta46447__$1));
});

cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46448){
var self__ = this;
var _46448__$1 = this;
return self__.meta46447;
});

cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46447","meta46447",-150354885,null)], null);
});

cljs.core.async.t_cljs$core$async46446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46446";

cljs.core.async.t_cljs$core$async46446.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async46446");
});

cljs.core.async.__GT_t_cljs$core$async46446 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46446(alt_handler__$1,flag__$1,cb__$1,meta46447){
return (new cljs.core.async.t_cljs$core$async46446(alt_handler__$1,flag__$1,cb__$1,meta46447));
});

}

return (new cljs.core.async.t_cljs$core$async46446(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46449_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46449_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46450_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46450_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__39600__auto__ = wport;
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46451 = (i + (1));
i = G__46451;
continue;
}
} else {
return null;
}
break;
}
})();
var or__39600__auto__ = ret;
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__39588__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__39588__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__39588__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__40665__auto__ = [];
var len__40658__auto___46457 = arguments.length;
var i__40659__auto___46458 = (0);
while(true){
if((i__40659__auto___46458 < len__40658__auto___46457)){
args__40665__auto__.push((arguments[i__40659__auto___46458]));

var G__46459 = (i__40659__auto___46458 + (1));
i__40659__auto___46458 = G__46459;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((1) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40666__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46454){
var map__46455 = p__46454;
var map__46455__$1 = ((((!((map__46455 == null)))?((((map__46455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46455):map__46455);
var opts = map__46455__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46452){
var G__46453 = cljs.core.first.call(null,seq46452);
var seq46452__$1 = cljs.core.next.call(null,seq46452);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46453,seq46452__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args46460 = [];
var len__40658__auto___46510 = arguments.length;
var i__40659__auto___46511 = (0);
while(true){
if((i__40659__auto___46511 < len__40658__auto___46510)){
args46460.push((arguments[i__40659__auto___46511]));

var G__46512 = (i__40659__auto___46511 + (1));
i__40659__auto___46511 = G__46512;
continue;
} else {
}
break;
}

var G__46462 = args46460.length;
switch (G__46462) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46460.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41758__auto___46514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___46514){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___46514){
return (function (state_46486){
var state_val_46487 = (state_46486[(1)]);
if((state_val_46487 === (7))){
var inst_46482 = (state_46486[(2)]);
var state_46486__$1 = state_46486;
var statearr_46488_46515 = state_46486__$1;
(statearr_46488_46515[(2)] = inst_46482);

(statearr_46488_46515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (1))){
var state_46486__$1 = state_46486;
var statearr_46489_46516 = state_46486__$1;
(statearr_46489_46516[(2)] = null);

(statearr_46489_46516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (4))){
var inst_46465 = (state_46486[(7)]);
var inst_46465__$1 = (state_46486[(2)]);
var inst_46466 = (inst_46465__$1 == null);
var state_46486__$1 = (function (){var statearr_46490 = state_46486;
(statearr_46490[(7)] = inst_46465__$1);

return statearr_46490;
})();
if(cljs.core.truth_(inst_46466)){
var statearr_46491_46517 = state_46486__$1;
(statearr_46491_46517[(1)] = (5));

} else {
var statearr_46492_46518 = state_46486__$1;
(statearr_46492_46518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (13))){
var state_46486__$1 = state_46486;
var statearr_46493_46519 = state_46486__$1;
(statearr_46493_46519[(2)] = null);

(statearr_46493_46519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (6))){
var inst_46465 = (state_46486[(7)]);
var state_46486__$1 = state_46486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46486__$1,(11),to,inst_46465);
} else {
if((state_val_46487 === (3))){
var inst_46484 = (state_46486[(2)]);
var state_46486__$1 = state_46486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46486__$1,inst_46484);
} else {
if((state_val_46487 === (12))){
var state_46486__$1 = state_46486;
var statearr_46494_46520 = state_46486__$1;
(statearr_46494_46520[(2)] = null);

(statearr_46494_46520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (2))){
var state_46486__$1 = state_46486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46486__$1,(4),from);
} else {
if((state_val_46487 === (11))){
var inst_46475 = (state_46486[(2)]);
var state_46486__$1 = state_46486;
if(cljs.core.truth_(inst_46475)){
var statearr_46495_46521 = state_46486__$1;
(statearr_46495_46521[(1)] = (12));

} else {
var statearr_46496_46522 = state_46486__$1;
(statearr_46496_46522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (9))){
var state_46486__$1 = state_46486;
var statearr_46497_46523 = state_46486__$1;
(statearr_46497_46523[(2)] = null);

(statearr_46497_46523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (5))){
var state_46486__$1 = state_46486;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46498_46524 = state_46486__$1;
(statearr_46498_46524[(1)] = (8));

} else {
var statearr_46499_46525 = state_46486__$1;
(statearr_46499_46525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (14))){
var inst_46480 = (state_46486[(2)]);
var state_46486__$1 = state_46486;
var statearr_46500_46526 = state_46486__$1;
(statearr_46500_46526[(2)] = inst_46480);

(statearr_46500_46526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (10))){
var inst_46472 = (state_46486[(2)]);
var state_46486__$1 = state_46486;
var statearr_46501_46527 = state_46486__$1;
(statearr_46501_46527[(2)] = inst_46472);

(statearr_46501_46527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46487 === (8))){
var inst_46469 = cljs.core.async.close_BANG_.call(null,to);
var state_46486__$1 = state_46486;
var statearr_46502_46528 = state_46486__$1;
(statearr_46502_46528[(2)] = inst_46469);

(statearr_46502_46528[(1)] = (10));


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
});})(c__41758__auto___46514))
;
return ((function (switch__41737__auto__,c__41758__auto___46514){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_46506 = [null,null,null,null,null,null,null,null];
(statearr_46506[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_46506[(1)] = (1));

return statearr_46506;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_46486){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_46486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e46507){if((e46507 instanceof Object)){
var ex__41741__auto__ = e46507;
var statearr_46508_46529 = state_46486;
(statearr_46508_46529[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46530 = state_46486;
state_46486 = G__46530;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_46486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_46486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___46514))
})();
var state__41760__auto__ = (function (){var statearr_46509 = f__41759__auto__.call(null);
(statearr_46509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___46514);

return statearr_46509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___46514))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__46714){
var vec__46715 = p__46714;
var v = cljs.core.nth.call(null,vec__46715,(0),null);
var p = cljs.core.nth.call(null,vec__46715,(1),null);
var job = vec__46715;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41758__auto___46897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___46897,res,vec__46715,v,p,job,jobs,results){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___46897,res,vec__46715,v,p,job,jobs,results){
return (function (state_46720){
var state_val_46721 = (state_46720[(1)]);
if((state_val_46721 === (1))){
var state_46720__$1 = state_46720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46720__$1,(2),res,v);
} else {
if((state_val_46721 === (2))){
var inst_46717 = (state_46720[(2)]);
var inst_46718 = cljs.core.async.close_BANG_.call(null,res);
var state_46720__$1 = (function (){var statearr_46722 = state_46720;
(statearr_46722[(7)] = inst_46717);

return statearr_46722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46720__$1,inst_46718);
} else {
return null;
}
}
});})(c__41758__auto___46897,res,vec__46715,v,p,job,jobs,results))
;
return ((function (switch__41737__auto__,c__41758__auto___46897,res,vec__46715,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0 = (function (){
var statearr_46726 = [null,null,null,null,null,null,null,null];
(statearr_46726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__);

(statearr_46726[(1)] = (1));

return statearr_46726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1 = (function (state_46720){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_46720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e46727){if((e46727 instanceof Object)){
var ex__41741__auto__ = e46727;
var statearr_46728_46898 = state_46720;
(statearr_46728_46898[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46899 = state_46720;
state_46720 = G__46899;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = function(state_46720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1.call(this,state_46720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___46897,res,vec__46715,v,p,job,jobs,results))
})();
var state__41760__auto__ = (function (){var statearr_46729 = f__41759__auto__.call(null);
(statearr_46729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___46897);

return statearr_46729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___46897,res,vec__46715,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46730){
var vec__46731 = p__46730;
var v = cljs.core.nth.call(null,vec__46731,(0),null);
var p = cljs.core.nth.call(null,vec__46731,(1),null);
var job = vec__46731;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__40503__auto___46900 = n;
var __46901 = (0);
while(true){
if((__46901 < n__40503__auto___46900)){
var G__46732_46902 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__46732_46902) {
case "compute":
var c__41758__auto___46904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46901,c__41758__auto___46904,G__46732_46902,n__40503__auto___46900,jobs,results,process,async){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (__46901,c__41758__auto___46904,G__46732_46902,n__40503__auto___46900,jobs,results,process,async){
return (function (state_46745){
var state_val_46746 = (state_46745[(1)]);
if((state_val_46746 === (1))){
var state_46745__$1 = state_46745;
var statearr_46747_46905 = state_46745__$1;
(statearr_46747_46905[(2)] = null);

(statearr_46747_46905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (2))){
var state_46745__$1 = state_46745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46745__$1,(4),jobs);
} else {
if((state_val_46746 === (3))){
var inst_46743 = (state_46745[(2)]);
var state_46745__$1 = state_46745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46745__$1,inst_46743);
} else {
if((state_val_46746 === (4))){
var inst_46735 = (state_46745[(2)]);
var inst_46736 = process.call(null,inst_46735);
var state_46745__$1 = state_46745;
if(cljs.core.truth_(inst_46736)){
var statearr_46748_46906 = state_46745__$1;
(statearr_46748_46906[(1)] = (5));

} else {
var statearr_46749_46907 = state_46745__$1;
(statearr_46749_46907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (5))){
var state_46745__$1 = state_46745;
var statearr_46750_46908 = state_46745__$1;
(statearr_46750_46908[(2)] = null);

(statearr_46750_46908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (6))){
var state_46745__$1 = state_46745;
var statearr_46751_46909 = state_46745__$1;
(statearr_46751_46909[(2)] = null);

(statearr_46751_46909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (7))){
var inst_46741 = (state_46745[(2)]);
var state_46745__$1 = state_46745;
var statearr_46752_46910 = state_46745__$1;
(statearr_46752_46910[(2)] = inst_46741);

(statearr_46752_46910[(1)] = (3));


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
});})(__46901,c__41758__auto___46904,G__46732_46902,n__40503__auto___46900,jobs,results,process,async))
;
return ((function (__46901,switch__41737__auto__,c__41758__auto___46904,G__46732_46902,n__40503__auto___46900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0 = (function (){
var statearr_46756 = [null,null,null,null,null,null,null];
(statearr_46756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__);

(statearr_46756[(1)] = (1));

return statearr_46756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1 = (function (state_46745){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_46745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e46757){if((e46757 instanceof Object)){
var ex__41741__auto__ = e46757;
var statearr_46758_46911 = state_46745;
(statearr_46758_46911[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46912 = state_46745;
state_46745 = G__46912;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = function(state_46745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1.call(this,state_46745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__;
})()
;})(__46901,switch__41737__auto__,c__41758__auto___46904,G__46732_46902,n__40503__auto___46900,jobs,results,process,async))
})();
var state__41760__auto__ = (function (){var statearr_46759 = f__41759__auto__.call(null);
(statearr_46759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___46904);

return statearr_46759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(__46901,c__41758__auto___46904,G__46732_46902,n__40503__auto___46900,jobs,results,process,async))
);


break;
case "async":
var c__41758__auto___46913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46901,c__41758__auto___46913,G__46732_46902,n__40503__auto___46900,jobs,results,process,async){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (__46901,c__41758__auto___46913,G__46732_46902,n__40503__auto___46900,jobs,results,process,async){
return (function (state_46772){
var state_val_46773 = (state_46772[(1)]);
if((state_val_46773 === (1))){
var state_46772__$1 = state_46772;
var statearr_46774_46914 = state_46772__$1;
(statearr_46774_46914[(2)] = null);

(statearr_46774_46914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46773 === (2))){
var state_46772__$1 = state_46772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46772__$1,(4),jobs);
} else {
if((state_val_46773 === (3))){
var inst_46770 = (state_46772[(2)]);
var state_46772__$1 = state_46772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46772__$1,inst_46770);
} else {
if((state_val_46773 === (4))){
var inst_46762 = (state_46772[(2)]);
var inst_46763 = async.call(null,inst_46762);
var state_46772__$1 = state_46772;
if(cljs.core.truth_(inst_46763)){
var statearr_46775_46915 = state_46772__$1;
(statearr_46775_46915[(1)] = (5));

} else {
var statearr_46776_46916 = state_46772__$1;
(statearr_46776_46916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46773 === (5))){
var state_46772__$1 = state_46772;
var statearr_46777_46917 = state_46772__$1;
(statearr_46777_46917[(2)] = null);

(statearr_46777_46917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46773 === (6))){
var state_46772__$1 = state_46772;
var statearr_46778_46918 = state_46772__$1;
(statearr_46778_46918[(2)] = null);

(statearr_46778_46918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46773 === (7))){
var inst_46768 = (state_46772[(2)]);
var state_46772__$1 = state_46772;
var statearr_46779_46919 = state_46772__$1;
(statearr_46779_46919[(2)] = inst_46768);

(statearr_46779_46919[(1)] = (3));


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
});})(__46901,c__41758__auto___46913,G__46732_46902,n__40503__auto___46900,jobs,results,process,async))
;
return ((function (__46901,switch__41737__auto__,c__41758__auto___46913,G__46732_46902,n__40503__auto___46900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0 = (function (){
var statearr_46783 = [null,null,null,null,null,null,null];
(statearr_46783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__);

(statearr_46783[(1)] = (1));

return statearr_46783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1 = (function (state_46772){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_46772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e46784){if((e46784 instanceof Object)){
var ex__41741__auto__ = e46784;
var statearr_46785_46920 = state_46772;
(statearr_46785_46920[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46921 = state_46772;
state_46772 = G__46921;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = function(state_46772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1.call(this,state_46772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__;
})()
;})(__46901,switch__41737__auto__,c__41758__auto___46913,G__46732_46902,n__40503__auto___46900,jobs,results,process,async))
})();
var state__41760__auto__ = (function (){var statearr_46786 = f__41759__auto__.call(null);
(statearr_46786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___46913);

return statearr_46786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(__46901,c__41758__auto___46913,G__46732_46902,n__40503__auto___46900,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__46922 = (__46901 + (1));
__46901 = G__46922;
continue;
} else {
}
break;
}

var c__41758__auto___46923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___46923,jobs,results,process,async){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___46923,jobs,results,process,async){
return (function (state_46808){
var state_val_46809 = (state_46808[(1)]);
if((state_val_46809 === (1))){
var state_46808__$1 = state_46808;
var statearr_46810_46924 = state_46808__$1;
(statearr_46810_46924[(2)] = null);

(statearr_46810_46924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46809 === (2))){
var state_46808__$1 = state_46808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46808__$1,(4),from);
} else {
if((state_val_46809 === (3))){
var inst_46806 = (state_46808[(2)]);
var state_46808__$1 = state_46808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46808__$1,inst_46806);
} else {
if((state_val_46809 === (4))){
var inst_46789 = (state_46808[(7)]);
var inst_46789__$1 = (state_46808[(2)]);
var inst_46790 = (inst_46789__$1 == null);
var state_46808__$1 = (function (){var statearr_46811 = state_46808;
(statearr_46811[(7)] = inst_46789__$1);

return statearr_46811;
})();
if(cljs.core.truth_(inst_46790)){
var statearr_46812_46925 = state_46808__$1;
(statearr_46812_46925[(1)] = (5));

} else {
var statearr_46813_46926 = state_46808__$1;
(statearr_46813_46926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46809 === (5))){
var inst_46792 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46808__$1 = state_46808;
var statearr_46814_46927 = state_46808__$1;
(statearr_46814_46927[(2)] = inst_46792);

(statearr_46814_46927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46809 === (6))){
var inst_46794 = (state_46808[(8)]);
var inst_46789 = (state_46808[(7)]);
var inst_46794__$1 = cljs.core.async.chan.call(null,(1));
var inst_46795 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46796 = [inst_46789,inst_46794__$1];
var inst_46797 = (new cljs.core.PersistentVector(null,2,(5),inst_46795,inst_46796,null));
var state_46808__$1 = (function (){var statearr_46815 = state_46808;
(statearr_46815[(8)] = inst_46794__$1);

return statearr_46815;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46808__$1,(8),jobs,inst_46797);
} else {
if((state_val_46809 === (7))){
var inst_46804 = (state_46808[(2)]);
var state_46808__$1 = state_46808;
var statearr_46816_46928 = state_46808__$1;
(statearr_46816_46928[(2)] = inst_46804);

(statearr_46816_46928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46809 === (8))){
var inst_46794 = (state_46808[(8)]);
var inst_46799 = (state_46808[(2)]);
var state_46808__$1 = (function (){var statearr_46817 = state_46808;
(statearr_46817[(9)] = inst_46799);

return statearr_46817;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46808__$1,(9),results,inst_46794);
} else {
if((state_val_46809 === (9))){
var inst_46801 = (state_46808[(2)]);
var state_46808__$1 = (function (){var statearr_46818 = state_46808;
(statearr_46818[(10)] = inst_46801);

return statearr_46818;
})();
var statearr_46819_46929 = state_46808__$1;
(statearr_46819_46929[(2)] = null);

(statearr_46819_46929[(1)] = (2));


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
});})(c__41758__auto___46923,jobs,results,process,async))
;
return ((function (switch__41737__auto__,c__41758__auto___46923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0 = (function (){
var statearr_46823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46823[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__);

(statearr_46823[(1)] = (1));

return statearr_46823;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1 = (function (state_46808){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_46808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e46824){if((e46824 instanceof Object)){
var ex__41741__auto__ = e46824;
var statearr_46825_46930 = state_46808;
(statearr_46825_46930[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46931 = state_46808;
state_46808 = G__46931;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = function(state_46808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1.call(this,state_46808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___46923,jobs,results,process,async))
})();
var state__41760__auto__ = (function (){var statearr_46826 = f__41759__auto__.call(null);
(statearr_46826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___46923);

return statearr_46826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___46923,jobs,results,process,async))
);


var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__,jobs,results,process,async){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__,jobs,results,process,async){
return (function (state_46864){
var state_val_46865 = (state_46864[(1)]);
if((state_val_46865 === (7))){
var inst_46860 = (state_46864[(2)]);
var state_46864__$1 = state_46864;
var statearr_46866_46932 = state_46864__$1;
(statearr_46866_46932[(2)] = inst_46860);

(statearr_46866_46932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (20))){
var state_46864__$1 = state_46864;
var statearr_46867_46933 = state_46864__$1;
(statearr_46867_46933[(2)] = null);

(statearr_46867_46933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (1))){
var state_46864__$1 = state_46864;
var statearr_46868_46934 = state_46864__$1;
(statearr_46868_46934[(2)] = null);

(statearr_46868_46934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (4))){
var inst_46829 = (state_46864[(7)]);
var inst_46829__$1 = (state_46864[(2)]);
var inst_46830 = (inst_46829__$1 == null);
var state_46864__$1 = (function (){var statearr_46869 = state_46864;
(statearr_46869[(7)] = inst_46829__$1);

return statearr_46869;
})();
if(cljs.core.truth_(inst_46830)){
var statearr_46870_46935 = state_46864__$1;
(statearr_46870_46935[(1)] = (5));

} else {
var statearr_46871_46936 = state_46864__$1;
(statearr_46871_46936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (15))){
var inst_46842 = (state_46864[(8)]);
var state_46864__$1 = state_46864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46864__$1,(18),to,inst_46842);
} else {
if((state_val_46865 === (21))){
var inst_46855 = (state_46864[(2)]);
var state_46864__$1 = state_46864;
var statearr_46872_46937 = state_46864__$1;
(statearr_46872_46937[(2)] = inst_46855);

(statearr_46872_46937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (13))){
var inst_46857 = (state_46864[(2)]);
var state_46864__$1 = (function (){var statearr_46873 = state_46864;
(statearr_46873[(9)] = inst_46857);

return statearr_46873;
})();
var statearr_46874_46938 = state_46864__$1;
(statearr_46874_46938[(2)] = null);

(statearr_46874_46938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (6))){
var inst_46829 = (state_46864[(7)]);
var state_46864__$1 = state_46864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46864__$1,(11),inst_46829);
} else {
if((state_val_46865 === (17))){
var inst_46850 = (state_46864[(2)]);
var state_46864__$1 = state_46864;
if(cljs.core.truth_(inst_46850)){
var statearr_46875_46939 = state_46864__$1;
(statearr_46875_46939[(1)] = (19));

} else {
var statearr_46876_46940 = state_46864__$1;
(statearr_46876_46940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (3))){
var inst_46862 = (state_46864[(2)]);
var state_46864__$1 = state_46864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46864__$1,inst_46862);
} else {
if((state_val_46865 === (12))){
var inst_46839 = (state_46864[(10)]);
var state_46864__$1 = state_46864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46864__$1,(14),inst_46839);
} else {
if((state_val_46865 === (2))){
var state_46864__$1 = state_46864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46864__$1,(4),results);
} else {
if((state_val_46865 === (19))){
var state_46864__$1 = state_46864;
var statearr_46877_46941 = state_46864__$1;
(statearr_46877_46941[(2)] = null);

(statearr_46877_46941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (11))){
var inst_46839 = (state_46864[(2)]);
var state_46864__$1 = (function (){var statearr_46878 = state_46864;
(statearr_46878[(10)] = inst_46839);

return statearr_46878;
})();
var statearr_46879_46942 = state_46864__$1;
(statearr_46879_46942[(2)] = null);

(statearr_46879_46942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (9))){
var state_46864__$1 = state_46864;
var statearr_46880_46943 = state_46864__$1;
(statearr_46880_46943[(2)] = null);

(statearr_46880_46943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (5))){
var state_46864__$1 = state_46864;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46881_46944 = state_46864__$1;
(statearr_46881_46944[(1)] = (8));

} else {
var statearr_46882_46945 = state_46864__$1;
(statearr_46882_46945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (14))){
var inst_46844 = (state_46864[(11)]);
var inst_46842 = (state_46864[(8)]);
var inst_46842__$1 = (state_46864[(2)]);
var inst_46843 = (inst_46842__$1 == null);
var inst_46844__$1 = cljs.core.not.call(null,inst_46843);
var state_46864__$1 = (function (){var statearr_46883 = state_46864;
(statearr_46883[(11)] = inst_46844__$1);

(statearr_46883[(8)] = inst_46842__$1);

return statearr_46883;
})();
if(inst_46844__$1){
var statearr_46884_46946 = state_46864__$1;
(statearr_46884_46946[(1)] = (15));

} else {
var statearr_46885_46947 = state_46864__$1;
(statearr_46885_46947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (16))){
var inst_46844 = (state_46864[(11)]);
var state_46864__$1 = state_46864;
var statearr_46886_46948 = state_46864__$1;
(statearr_46886_46948[(2)] = inst_46844);

(statearr_46886_46948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (10))){
var inst_46836 = (state_46864[(2)]);
var state_46864__$1 = state_46864;
var statearr_46887_46949 = state_46864__$1;
(statearr_46887_46949[(2)] = inst_46836);

(statearr_46887_46949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (18))){
var inst_46847 = (state_46864[(2)]);
var state_46864__$1 = state_46864;
var statearr_46888_46950 = state_46864__$1;
(statearr_46888_46950[(2)] = inst_46847);

(statearr_46888_46950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46865 === (8))){
var inst_46833 = cljs.core.async.close_BANG_.call(null,to);
var state_46864__$1 = state_46864;
var statearr_46889_46951 = state_46864__$1;
(statearr_46889_46951[(2)] = inst_46833);

(statearr_46889_46951[(1)] = (10));


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
}
}
}
}
});})(c__41758__auto__,jobs,results,process,async))
;
return ((function (switch__41737__auto__,c__41758__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0 = (function (){
var statearr_46893 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__);

(statearr_46893[(1)] = (1));

return statearr_46893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1 = (function (state_46864){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_46864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e46894){if((e46894 instanceof Object)){
var ex__41741__auto__ = e46894;
var statearr_46895_46952 = state_46864;
(statearr_46895_46952[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46953 = state_46864;
state_46864 = G__46953;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__ = function(state_46864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1.call(this,state_46864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__,jobs,results,process,async))
})();
var state__41760__auto__ = (function (){var statearr_46896 = f__41759__auto__.call(null);
(statearr_46896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_46896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__,jobs,results,process,async))
);

return c__41758__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args46954 = [];
var len__40658__auto___46957 = arguments.length;
var i__40659__auto___46958 = (0);
while(true){
if((i__40659__auto___46958 < len__40658__auto___46957)){
args46954.push((arguments[i__40659__auto___46958]));

var G__46959 = (i__40659__auto___46958 + (1));
i__40659__auto___46958 = G__46959;
continue;
} else {
}
break;
}

var G__46956 = args46954.length;
switch (G__46956) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46954.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args46961 = [];
var len__40658__auto___46964 = arguments.length;
var i__40659__auto___46965 = (0);
while(true){
if((i__40659__auto___46965 < len__40658__auto___46964)){
args46961.push((arguments[i__40659__auto___46965]));

var G__46966 = (i__40659__auto___46965 + (1));
i__40659__auto___46965 = G__46966;
continue;
} else {
}
break;
}

var G__46963 = args46961.length;
switch (G__46963) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46961.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args46968 = [];
var len__40658__auto___47021 = arguments.length;
var i__40659__auto___47022 = (0);
while(true){
if((i__40659__auto___47022 < len__40658__auto___47021)){
args46968.push((arguments[i__40659__auto___47022]));

var G__47023 = (i__40659__auto___47022 + (1));
i__40659__auto___47022 = G__47023;
continue;
} else {
}
break;
}

var G__46970 = args46968.length;
switch (G__46970) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46968.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41758__auto___47025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___47025,tc,fc){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___47025,tc,fc){
return (function (state_46996){
var state_val_46997 = (state_46996[(1)]);
if((state_val_46997 === (7))){
var inst_46992 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_46998_47026 = state_46996__$1;
(statearr_46998_47026[(2)] = inst_46992);

(statearr_46998_47026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (1))){
var state_46996__$1 = state_46996;
var statearr_46999_47027 = state_46996__$1;
(statearr_46999_47027[(2)] = null);

(statearr_46999_47027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (4))){
var inst_46973 = (state_46996[(7)]);
var inst_46973__$1 = (state_46996[(2)]);
var inst_46974 = (inst_46973__$1 == null);
var state_46996__$1 = (function (){var statearr_47000 = state_46996;
(statearr_47000[(7)] = inst_46973__$1);

return statearr_47000;
})();
if(cljs.core.truth_(inst_46974)){
var statearr_47001_47028 = state_46996__$1;
(statearr_47001_47028[(1)] = (5));

} else {
var statearr_47002_47029 = state_46996__$1;
(statearr_47002_47029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (13))){
var state_46996__$1 = state_46996;
var statearr_47003_47030 = state_46996__$1;
(statearr_47003_47030[(2)] = null);

(statearr_47003_47030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (6))){
var inst_46973 = (state_46996[(7)]);
var inst_46979 = p.call(null,inst_46973);
var state_46996__$1 = state_46996;
if(cljs.core.truth_(inst_46979)){
var statearr_47004_47031 = state_46996__$1;
(statearr_47004_47031[(1)] = (9));

} else {
var statearr_47005_47032 = state_46996__$1;
(statearr_47005_47032[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (3))){
var inst_46994 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46996__$1,inst_46994);
} else {
if((state_val_46997 === (12))){
var state_46996__$1 = state_46996;
var statearr_47006_47033 = state_46996__$1;
(statearr_47006_47033[(2)] = null);

(statearr_47006_47033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (2))){
var state_46996__$1 = state_46996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46996__$1,(4),ch);
} else {
if((state_val_46997 === (11))){
var inst_46973 = (state_46996[(7)]);
var inst_46983 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46996__$1,(8),inst_46983,inst_46973);
} else {
if((state_val_46997 === (9))){
var state_46996__$1 = state_46996;
var statearr_47007_47034 = state_46996__$1;
(statearr_47007_47034[(2)] = tc);

(statearr_47007_47034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (5))){
var inst_46976 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46977 = cljs.core.async.close_BANG_.call(null,fc);
var state_46996__$1 = (function (){var statearr_47008 = state_46996;
(statearr_47008[(8)] = inst_46976);

return statearr_47008;
})();
var statearr_47009_47035 = state_46996__$1;
(statearr_47009_47035[(2)] = inst_46977);

(statearr_47009_47035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (14))){
var inst_46990 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47010_47036 = state_46996__$1;
(statearr_47010_47036[(2)] = inst_46990);

(statearr_47010_47036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (10))){
var state_46996__$1 = state_46996;
var statearr_47011_47037 = state_46996__$1;
(statearr_47011_47037[(2)] = fc);

(statearr_47011_47037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (8))){
var inst_46985 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
if(cljs.core.truth_(inst_46985)){
var statearr_47012_47038 = state_46996__$1;
(statearr_47012_47038[(1)] = (12));

} else {
var statearr_47013_47039 = state_46996__$1;
(statearr_47013_47039[(1)] = (13));

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
});})(c__41758__auto___47025,tc,fc))
;
return ((function (switch__41737__auto__,c__41758__auto___47025,tc,fc){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_47017 = [null,null,null,null,null,null,null,null,null];
(statearr_47017[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_47017[(1)] = (1));

return statearr_47017;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_46996){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_46996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e47018){if((e47018 instanceof Object)){
var ex__41741__auto__ = e47018;
var statearr_47019_47040 = state_46996;
(statearr_47019_47040[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47041 = state_46996;
state_46996 = G__47041;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_46996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_46996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___47025,tc,fc))
})();
var state__41760__auto__ = (function (){var statearr_47020 = f__41759__auto__.call(null);
(statearr_47020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___47025);

return statearr_47020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___47025,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__){
return (function (state_47105){
var state_val_47106 = (state_47105[(1)]);
if((state_val_47106 === (7))){
var inst_47101 = (state_47105[(2)]);
var state_47105__$1 = state_47105;
var statearr_47107_47128 = state_47105__$1;
(statearr_47107_47128[(2)] = inst_47101);

(statearr_47107_47128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (1))){
var inst_47085 = init;
var state_47105__$1 = (function (){var statearr_47108 = state_47105;
(statearr_47108[(7)] = inst_47085);

return statearr_47108;
})();
var statearr_47109_47129 = state_47105__$1;
(statearr_47109_47129[(2)] = null);

(statearr_47109_47129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (4))){
var inst_47088 = (state_47105[(8)]);
var inst_47088__$1 = (state_47105[(2)]);
var inst_47089 = (inst_47088__$1 == null);
var state_47105__$1 = (function (){var statearr_47110 = state_47105;
(statearr_47110[(8)] = inst_47088__$1);

return statearr_47110;
})();
if(cljs.core.truth_(inst_47089)){
var statearr_47111_47130 = state_47105__$1;
(statearr_47111_47130[(1)] = (5));

} else {
var statearr_47112_47131 = state_47105__$1;
(statearr_47112_47131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (6))){
var inst_47085 = (state_47105[(7)]);
var inst_47092 = (state_47105[(9)]);
var inst_47088 = (state_47105[(8)]);
var inst_47092__$1 = f.call(null,inst_47085,inst_47088);
var inst_47093 = cljs.core.reduced_QMARK_.call(null,inst_47092__$1);
var state_47105__$1 = (function (){var statearr_47113 = state_47105;
(statearr_47113[(9)] = inst_47092__$1);

return statearr_47113;
})();
if(inst_47093){
var statearr_47114_47132 = state_47105__$1;
(statearr_47114_47132[(1)] = (8));

} else {
var statearr_47115_47133 = state_47105__$1;
(statearr_47115_47133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (3))){
var inst_47103 = (state_47105[(2)]);
var state_47105__$1 = state_47105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47105__$1,inst_47103);
} else {
if((state_val_47106 === (2))){
var state_47105__$1 = state_47105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47105__$1,(4),ch);
} else {
if((state_val_47106 === (9))){
var inst_47092 = (state_47105[(9)]);
var inst_47085 = inst_47092;
var state_47105__$1 = (function (){var statearr_47116 = state_47105;
(statearr_47116[(7)] = inst_47085);

return statearr_47116;
})();
var statearr_47117_47134 = state_47105__$1;
(statearr_47117_47134[(2)] = null);

(statearr_47117_47134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (5))){
var inst_47085 = (state_47105[(7)]);
var state_47105__$1 = state_47105;
var statearr_47118_47135 = state_47105__$1;
(statearr_47118_47135[(2)] = inst_47085);

(statearr_47118_47135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (10))){
var inst_47099 = (state_47105[(2)]);
var state_47105__$1 = state_47105;
var statearr_47119_47136 = state_47105__$1;
(statearr_47119_47136[(2)] = inst_47099);

(statearr_47119_47136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (8))){
var inst_47092 = (state_47105[(9)]);
var inst_47095 = cljs.core.deref.call(null,inst_47092);
var state_47105__$1 = state_47105;
var statearr_47120_47137 = state_47105__$1;
(statearr_47120_47137[(2)] = inst_47095);

(statearr_47120_47137[(1)] = (10));


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
});})(c__41758__auto__))
;
return ((function (switch__41737__auto__,c__41758__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__41738__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41738__auto____0 = (function (){
var statearr_47124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47124[(0)] = cljs$core$async$reduce_$_state_machine__41738__auto__);

(statearr_47124[(1)] = (1));

return statearr_47124;
});
var cljs$core$async$reduce_$_state_machine__41738__auto____1 = (function (state_47105){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_47105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e47125){if((e47125 instanceof Object)){
var ex__41741__auto__ = e47125;
var statearr_47126_47138 = state_47105;
(statearr_47126_47138[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47139 = state_47105;
state_47105 = G__47139;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41738__auto__ = function(state_47105){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41738__auto____1.call(this,state_47105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41738__auto____0;
cljs$core$async$reduce_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41738__auto____1;
return cljs$core$async$reduce_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__))
})();
var state__41760__auto__ = (function (){var statearr_47127 = f__41759__auto__.call(null);
(statearr_47127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_47127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__))
);

return c__41758__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args47140 = [];
var len__40658__auto___47192 = arguments.length;
var i__40659__auto___47193 = (0);
while(true){
if((i__40659__auto___47193 < len__40658__auto___47192)){
args47140.push((arguments[i__40659__auto___47193]));

var G__47194 = (i__40659__auto___47193 + (1));
i__40659__auto___47193 = G__47194;
continue;
} else {
}
break;
}

var G__47142 = args47140.length;
switch (G__47142) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47140.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__){
return (function (state_47167){
var state_val_47168 = (state_47167[(1)]);
if((state_val_47168 === (7))){
var inst_47149 = (state_47167[(2)]);
var state_47167__$1 = state_47167;
var statearr_47169_47196 = state_47167__$1;
(statearr_47169_47196[(2)] = inst_47149);

(statearr_47169_47196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (1))){
var inst_47143 = cljs.core.seq.call(null,coll);
var inst_47144 = inst_47143;
var state_47167__$1 = (function (){var statearr_47170 = state_47167;
(statearr_47170[(7)] = inst_47144);

return statearr_47170;
})();
var statearr_47171_47197 = state_47167__$1;
(statearr_47171_47197[(2)] = null);

(statearr_47171_47197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (4))){
var inst_47144 = (state_47167[(7)]);
var inst_47147 = cljs.core.first.call(null,inst_47144);
var state_47167__$1 = state_47167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47167__$1,(7),ch,inst_47147);
} else {
if((state_val_47168 === (13))){
var inst_47161 = (state_47167[(2)]);
var state_47167__$1 = state_47167;
var statearr_47172_47198 = state_47167__$1;
(statearr_47172_47198[(2)] = inst_47161);

(statearr_47172_47198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (6))){
var inst_47152 = (state_47167[(2)]);
var state_47167__$1 = state_47167;
if(cljs.core.truth_(inst_47152)){
var statearr_47173_47199 = state_47167__$1;
(statearr_47173_47199[(1)] = (8));

} else {
var statearr_47174_47200 = state_47167__$1;
(statearr_47174_47200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (3))){
var inst_47165 = (state_47167[(2)]);
var state_47167__$1 = state_47167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47167__$1,inst_47165);
} else {
if((state_val_47168 === (12))){
var state_47167__$1 = state_47167;
var statearr_47175_47201 = state_47167__$1;
(statearr_47175_47201[(2)] = null);

(statearr_47175_47201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (2))){
var inst_47144 = (state_47167[(7)]);
var state_47167__$1 = state_47167;
if(cljs.core.truth_(inst_47144)){
var statearr_47176_47202 = state_47167__$1;
(statearr_47176_47202[(1)] = (4));

} else {
var statearr_47177_47203 = state_47167__$1;
(statearr_47177_47203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (11))){
var inst_47158 = cljs.core.async.close_BANG_.call(null,ch);
var state_47167__$1 = state_47167;
var statearr_47178_47204 = state_47167__$1;
(statearr_47178_47204[(2)] = inst_47158);

(statearr_47178_47204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (9))){
var state_47167__$1 = state_47167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47179_47205 = state_47167__$1;
(statearr_47179_47205[(1)] = (11));

} else {
var statearr_47180_47206 = state_47167__$1;
(statearr_47180_47206[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (5))){
var inst_47144 = (state_47167[(7)]);
var state_47167__$1 = state_47167;
var statearr_47181_47207 = state_47167__$1;
(statearr_47181_47207[(2)] = inst_47144);

(statearr_47181_47207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (10))){
var inst_47163 = (state_47167[(2)]);
var state_47167__$1 = state_47167;
var statearr_47182_47208 = state_47167__$1;
(statearr_47182_47208[(2)] = inst_47163);

(statearr_47182_47208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47168 === (8))){
var inst_47144 = (state_47167[(7)]);
var inst_47154 = cljs.core.next.call(null,inst_47144);
var inst_47144__$1 = inst_47154;
var state_47167__$1 = (function (){var statearr_47183 = state_47167;
(statearr_47183[(7)] = inst_47144__$1);

return statearr_47183;
})();
var statearr_47184_47209 = state_47167__$1;
(statearr_47184_47209[(2)] = null);

(statearr_47184_47209[(1)] = (2));


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
});})(c__41758__auto__))
;
return ((function (switch__41737__auto__,c__41758__auto__){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_47188 = [null,null,null,null,null,null,null,null];
(statearr_47188[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_47188[(1)] = (1));

return statearr_47188;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_47167){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_47167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e47189){if((e47189 instanceof Object)){
var ex__41741__auto__ = e47189;
var statearr_47190_47210 = state_47167;
(statearr_47190_47210[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47211 = state_47167;
state_47167 = G__47211;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_47167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_47167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__))
})();
var state__41760__auto__ = (function (){var statearr_47191 = f__41759__auto__.call(null);
(statearr_47191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_47191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__))
);

return c__41758__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__40255__auto__ = (((_ == null))?null:_);
var m__40256__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,_);
} else {
var m__40256__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__40255__auto__ = (((m == null))?null:m);
var m__40256__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__40256__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__40255__auto__ = (((m == null))?null:m);
var m__40256__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,m,ch);
} else {
var m__40256__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__40255__auto__ = (((m == null))?null:m);
var m__40256__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,m);
} else {
var m__40256__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47433 = (function (mult,ch,cs,meta47434){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta47434 = meta47434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47435,meta47434__$1){
var self__ = this;
var _47435__$1 = this;
return (new cljs.core.async.t_cljs$core$async47433(self__.mult,self__.ch,self__.cs,meta47434__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47435){
var self__ = this;
var _47435__$1 = this;
return self__.meta47434;
});})(cs))
;

cljs.core.async.t_cljs$core$async47433.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47433.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async47433.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47433.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47433.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47433.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47434","meta47434",-982915577,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47433";

cljs.core.async.t_cljs$core$async47433.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async47433");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47433 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47433(mult__$1,ch__$1,cs__$1,meta47434){
return (new cljs.core.async.t_cljs$core$async47433(mult__$1,ch__$1,cs__$1,meta47434));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47433(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__41758__auto___47654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___47654,cs,m,dchan,dctr,done){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___47654,cs,m,dchan,dctr,done){
return (function (state_47566){
var state_val_47567 = (state_47566[(1)]);
if((state_val_47567 === (7))){
var inst_47562 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47568_47655 = state_47566__$1;
(statearr_47568_47655[(2)] = inst_47562);

(statearr_47568_47655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (20))){
var inst_47467 = (state_47566[(7)]);
var inst_47477 = cljs.core.first.call(null,inst_47467);
var inst_47478 = cljs.core.nth.call(null,inst_47477,(0),null);
var inst_47479 = cljs.core.nth.call(null,inst_47477,(1),null);
var state_47566__$1 = (function (){var statearr_47569 = state_47566;
(statearr_47569[(8)] = inst_47478);

return statearr_47569;
})();
if(cljs.core.truth_(inst_47479)){
var statearr_47570_47656 = state_47566__$1;
(statearr_47570_47656[(1)] = (22));

} else {
var statearr_47571_47657 = state_47566__$1;
(statearr_47571_47657[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (27))){
var inst_47438 = (state_47566[(9)]);
var inst_47509 = (state_47566[(10)]);
var inst_47507 = (state_47566[(11)]);
var inst_47514 = (state_47566[(12)]);
var inst_47514__$1 = cljs.core._nth.call(null,inst_47507,inst_47509);
var inst_47515 = cljs.core.async.put_BANG_.call(null,inst_47514__$1,inst_47438,done);
var state_47566__$1 = (function (){var statearr_47572 = state_47566;
(statearr_47572[(12)] = inst_47514__$1);

return statearr_47572;
})();
if(cljs.core.truth_(inst_47515)){
var statearr_47573_47658 = state_47566__$1;
(statearr_47573_47658[(1)] = (30));

} else {
var statearr_47574_47659 = state_47566__$1;
(statearr_47574_47659[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (1))){
var state_47566__$1 = state_47566;
var statearr_47575_47660 = state_47566__$1;
(statearr_47575_47660[(2)] = null);

(statearr_47575_47660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (24))){
var inst_47467 = (state_47566[(7)]);
var inst_47484 = (state_47566[(2)]);
var inst_47485 = cljs.core.next.call(null,inst_47467);
var inst_47447 = inst_47485;
var inst_47448 = null;
var inst_47449 = (0);
var inst_47450 = (0);
var state_47566__$1 = (function (){var statearr_47576 = state_47566;
(statearr_47576[(13)] = inst_47450);

(statearr_47576[(14)] = inst_47449);

(statearr_47576[(15)] = inst_47448);

(statearr_47576[(16)] = inst_47484);

(statearr_47576[(17)] = inst_47447);

return statearr_47576;
})();
var statearr_47577_47661 = state_47566__$1;
(statearr_47577_47661[(2)] = null);

(statearr_47577_47661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (39))){
var state_47566__$1 = state_47566;
var statearr_47581_47662 = state_47566__$1;
(statearr_47581_47662[(2)] = null);

(statearr_47581_47662[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (4))){
var inst_47438 = (state_47566[(9)]);
var inst_47438__$1 = (state_47566[(2)]);
var inst_47439 = (inst_47438__$1 == null);
var state_47566__$1 = (function (){var statearr_47582 = state_47566;
(statearr_47582[(9)] = inst_47438__$1);

return statearr_47582;
})();
if(cljs.core.truth_(inst_47439)){
var statearr_47583_47663 = state_47566__$1;
(statearr_47583_47663[(1)] = (5));

} else {
var statearr_47584_47664 = state_47566__$1;
(statearr_47584_47664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (15))){
var inst_47450 = (state_47566[(13)]);
var inst_47449 = (state_47566[(14)]);
var inst_47448 = (state_47566[(15)]);
var inst_47447 = (state_47566[(17)]);
var inst_47463 = (state_47566[(2)]);
var inst_47464 = (inst_47450 + (1));
var tmp47578 = inst_47449;
var tmp47579 = inst_47448;
var tmp47580 = inst_47447;
var inst_47447__$1 = tmp47580;
var inst_47448__$1 = tmp47579;
var inst_47449__$1 = tmp47578;
var inst_47450__$1 = inst_47464;
var state_47566__$1 = (function (){var statearr_47585 = state_47566;
(statearr_47585[(13)] = inst_47450__$1);

(statearr_47585[(14)] = inst_47449__$1);

(statearr_47585[(18)] = inst_47463);

(statearr_47585[(15)] = inst_47448__$1);

(statearr_47585[(17)] = inst_47447__$1);

return statearr_47585;
})();
var statearr_47586_47665 = state_47566__$1;
(statearr_47586_47665[(2)] = null);

(statearr_47586_47665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (21))){
var inst_47488 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47590_47666 = state_47566__$1;
(statearr_47590_47666[(2)] = inst_47488);

(statearr_47590_47666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (31))){
var inst_47514 = (state_47566[(12)]);
var inst_47518 = done.call(null,null);
var inst_47519 = cljs.core.async.untap_STAR_.call(null,m,inst_47514);
var state_47566__$1 = (function (){var statearr_47591 = state_47566;
(statearr_47591[(19)] = inst_47518);

return statearr_47591;
})();
var statearr_47592_47667 = state_47566__$1;
(statearr_47592_47667[(2)] = inst_47519);

(statearr_47592_47667[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (32))){
var inst_47508 = (state_47566[(20)]);
var inst_47506 = (state_47566[(21)]);
var inst_47509 = (state_47566[(10)]);
var inst_47507 = (state_47566[(11)]);
var inst_47521 = (state_47566[(2)]);
var inst_47522 = (inst_47509 + (1));
var tmp47587 = inst_47508;
var tmp47588 = inst_47506;
var tmp47589 = inst_47507;
var inst_47506__$1 = tmp47588;
var inst_47507__$1 = tmp47589;
var inst_47508__$1 = tmp47587;
var inst_47509__$1 = inst_47522;
var state_47566__$1 = (function (){var statearr_47593 = state_47566;
(statearr_47593[(20)] = inst_47508__$1);

(statearr_47593[(21)] = inst_47506__$1);

(statearr_47593[(22)] = inst_47521);

(statearr_47593[(10)] = inst_47509__$1);

(statearr_47593[(11)] = inst_47507__$1);

return statearr_47593;
})();
var statearr_47594_47668 = state_47566__$1;
(statearr_47594_47668[(2)] = null);

(statearr_47594_47668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (40))){
var inst_47534 = (state_47566[(23)]);
var inst_47538 = done.call(null,null);
var inst_47539 = cljs.core.async.untap_STAR_.call(null,m,inst_47534);
var state_47566__$1 = (function (){var statearr_47595 = state_47566;
(statearr_47595[(24)] = inst_47538);

return statearr_47595;
})();
var statearr_47596_47669 = state_47566__$1;
(statearr_47596_47669[(2)] = inst_47539);

(statearr_47596_47669[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (33))){
var inst_47525 = (state_47566[(25)]);
var inst_47527 = cljs.core.chunked_seq_QMARK_.call(null,inst_47525);
var state_47566__$1 = state_47566;
if(inst_47527){
var statearr_47597_47670 = state_47566__$1;
(statearr_47597_47670[(1)] = (36));

} else {
var statearr_47598_47671 = state_47566__$1;
(statearr_47598_47671[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (13))){
var inst_47457 = (state_47566[(26)]);
var inst_47460 = cljs.core.async.close_BANG_.call(null,inst_47457);
var state_47566__$1 = state_47566;
var statearr_47599_47672 = state_47566__$1;
(statearr_47599_47672[(2)] = inst_47460);

(statearr_47599_47672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (22))){
var inst_47478 = (state_47566[(8)]);
var inst_47481 = cljs.core.async.close_BANG_.call(null,inst_47478);
var state_47566__$1 = state_47566;
var statearr_47600_47673 = state_47566__$1;
(statearr_47600_47673[(2)] = inst_47481);

(statearr_47600_47673[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (36))){
var inst_47525 = (state_47566[(25)]);
var inst_47529 = cljs.core.chunk_first.call(null,inst_47525);
var inst_47530 = cljs.core.chunk_rest.call(null,inst_47525);
var inst_47531 = cljs.core.count.call(null,inst_47529);
var inst_47506 = inst_47530;
var inst_47507 = inst_47529;
var inst_47508 = inst_47531;
var inst_47509 = (0);
var state_47566__$1 = (function (){var statearr_47601 = state_47566;
(statearr_47601[(20)] = inst_47508);

(statearr_47601[(21)] = inst_47506);

(statearr_47601[(10)] = inst_47509);

(statearr_47601[(11)] = inst_47507);

return statearr_47601;
})();
var statearr_47602_47674 = state_47566__$1;
(statearr_47602_47674[(2)] = null);

(statearr_47602_47674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (41))){
var inst_47525 = (state_47566[(25)]);
var inst_47541 = (state_47566[(2)]);
var inst_47542 = cljs.core.next.call(null,inst_47525);
var inst_47506 = inst_47542;
var inst_47507 = null;
var inst_47508 = (0);
var inst_47509 = (0);
var state_47566__$1 = (function (){var statearr_47603 = state_47566;
(statearr_47603[(20)] = inst_47508);

(statearr_47603[(21)] = inst_47506);

(statearr_47603[(10)] = inst_47509);

(statearr_47603[(11)] = inst_47507);

(statearr_47603[(27)] = inst_47541);

return statearr_47603;
})();
var statearr_47604_47675 = state_47566__$1;
(statearr_47604_47675[(2)] = null);

(statearr_47604_47675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (43))){
var state_47566__$1 = state_47566;
var statearr_47605_47676 = state_47566__$1;
(statearr_47605_47676[(2)] = null);

(statearr_47605_47676[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (29))){
var inst_47550 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47606_47677 = state_47566__$1;
(statearr_47606_47677[(2)] = inst_47550);

(statearr_47606_47677[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (44))){
var inst_47559 = (state_47566[(2)]);
var state_47566__$1 = (function (){var statearr_47607 = state_47566;
(statearr_47607[(28)] = inst_47559);

return statearr_47607;
})();
var statearr_47608_47678 = state_47566__$1;
(statearr_47608_47678[(2)] = null);

(statearr_47608_47678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (6))){
var inst_47498 = (state_47566[(29)]);
var inst_47497 = cljs.core.deref.call(null,cs);
var inst_47498__$1 = cljs.core.keys.call(null,inst_47497);
var inst_47499 = cljs.core.count.call(null,inst_47498__$1);
var inst_47500 = cljs.core.reset_BANG_.call(null,dctr,inst_47499);
var inst_47505 = cljs.core.seq.call(null,inst_47498__$1);
var inst_47506 = inst_47505;
var inst_47507 = null;
var inst_47508 = (0);
var inst_47509 = (0);
var state_47566__$1 = (function (){var statearr_47609 = state_47566;
(statearr_47609[(30)] = inst_47500);

(statearr_47609[(29)] = inst_47498__$1);

(statearr_47609[(20)] = inst_47508);

(statearr_47609[(21)] = inst_47506);

(statearr_47609[(10)] = inst_47509);

(statearr_47609[(11)] = inst_47507);

return statearr_47609;
})();
var statearr_47610_47679 = state_47566__$1;
(statearr_47610_47679[(2)] = null);

(statearr_47610_47679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (28))){
var inst_47525 = (state_47566[(25)]);
var inst_47506 = (state_47566[(21)]);
var inst_47525__$1 = cljs.core.seq.call(null,inst_47506);
var state_47566__$1 = (function (){var statearr_47611 = state_47566;
(statearr_47611[(25)] = inst_47525__$1);

return statearr_47611;
})();
if(inst_47525__$1){
var statearr_47612_47680 = state_47566__$1;
(statearr_47612_47680[(1)] = (33));

} else {
var statearr_47613_47681 = state_47566__$1;
(statearr_47613_47681[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (25))){
var inst_47508 = (state_47566[(20)]);
var inst_47509 = (state_47566[(10)]);
var inst_47511 = (inst_47509 < inst_47508);
var inst_47512 = inst_47511;
var state_47566__$1 = state_47566;
if(cljs.core.truth_(inst_47512)){
var statearr_47614_47682 = state_47566__$1;
(statearr_47614_47682[(1)] = (27));

} else {
var statearr_47615_47683 = state_47566__$1;
(statearr_47615_47683[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (34))){
var state_47566__$1 = state_47566;
var statearr_47616_47684 = state_47566__$1;
(statearr_47616_47684[(2)] = null);

(statearr_47616_47684[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (17))){
var state_47566__$1 = state_47566;
var statearr_47617_47685 = state_47566__$1;
(statearr_47617_47685[(2)] = null);

(statearr_47617_47685[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (3))){
var inst_47564 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47566__$1,inst_47564);
} else {
if((state_val_47567 === (12))){
var inst_47493 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47618_47686 = state_47566__$1;
(statearr_47618_47686[(2)] = inst_47493);

(statearr_47618_47686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (2))){
var state_47566__$1 = state_47566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47566__$1,(4),ch);
} else {
if((state_val_47567 === (23))){
var state_47566__$1 = state_47566;
var statearr_47619_47687 = state_47566__$1;
(statearr_47619_47687[(2)] = null);

(statearr_47619_47687[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (35))){
var inst_47548 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47620_47688 = state_47566__$1;
(statearr_47620_47688[(2)] = inst_47548);

(statearr_47620_47688[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (19))){
var inst_47467 = (state_47566[(7)]);
var inst_47471 = cljs.core.chunk_first.call(null,inst_47467);
var inst_47472 = cljs.core.chunk_rest.call(null,inst_47467);
var inst_47473 = cljs.core.count.call(null,inst_47471);
var inst_47447 = inst_47472;
var inst_47448 = inst_47471;
var inst_47449 = inst_47473;
var inst_47450 = (0);
var state_47566__$1 = (function (){var statearr_47621 = state_47566;
(statearr_47621[(13)] = inst_47450);

(statearr_47621[(14)] = inst_47449);

(statearr_47621[(15)] = inst_47448);

(statearr_47621[(17)] = inst_47447);

return statearr_47621;
})();
var statearr_47622_47689 = state_47566__$1;
(statearr_47622_47689[(2)] = null);

(statearr_47622_47689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (11))){
var inst_47467 = (state_47566[(7)]);
var inst_47447 = (state_47566[(17)]);
var inst_47467__$1 = cljs.core.seq.call(null,inst_47447);
var state_47566__$1 = (function (){var statearr_47623 = state_47566;
(statearr_47623[(7)] = inst_47467__$1);

return statearr_47623;
})();
if(inst_47467__$1){
var statearr_47624_47690 = state_47566__$1;
(statearr_47624_47690[(1)] = (16));

} else {
var statearr_47625_47691 = state_47566__$1;
(statearr_47625_47691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (9))){
var inst_47495 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47626_47692 = state_47566__$1;
(statearr_47626_47692[(2)] = inst_47495);

(statearr_47626_47692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (5))){
var inst_47445 = cljs.core.deref.call(null,cs);
var inst_47446 = cljs.core.seq.call(null,inst_47445);
var inst_47447 = inst_47446;
var inst_47448 = null;
var inst_47449 = (0);
var inst_47450 = (0);
var state_47566__$1 = (function (){var statearr_47627 = state_47566;
(statearr_47627[(13)] = inst_47450);

(statearr_47627[(14)] = inst_47449);

(statearr_47627[(15)] = inst_47448);

(statearr_47627[(17)] = inst_47447);

return statearr_47627;
})();
var statearr_47628_47693 = state_47566__$1;
(statearr_47628_47693[(2)] = null);

(statearr_47628_47693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (14))){
var state_47566__$1 = state_47566;
var statearr_47629_47694 = state_47566__$1;
(statearr_47629_47694[(2)] = null);

(statearr_47629_47694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (45))){
var inst_47556 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47630_47695 = state_47566__$1;
(statearr_47630_47695[(2)] = inst_47556);

(statearr_47630_47695[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (26))){
var inst_47498 = (state_47566[(29)]);
var inst_47552 = (state_47566[(2)]);
var inst_47553 = cljs.core.seq.call(null,inst_47498);
var state_47566__$1 = (function (){var statearr_47631 = state_47566;
(statearr_47631[(31)] = inst_47552);

return statearr_47631;
})();
if(inst_47553){
var statearr_47632_47696 = state_47566__$1;
(statearr_47632_47696[(1)] = (42));

} else {
var statearr_47633_47697 = state_47566__$1;
(statearr_47633_47697[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (16))){
var inst_47467 = (state_47566[(7)]);
var inst_47469 = cljs.core.chunked_seq_QMARK_.call(null,inst_47467);
var state_47566__$1 = state_47566;
if(inst_47469){
var statearr_47634_47698 = state_47566__$1;
(statearr_47634_47698[(1)] = (19));

} else {
var statearr_47635_47699 = state_47566__$1;
(statearr_47635_47699[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (38))){
var inst_47545 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47636_47700 = state_47566__$1;
(statearr_47636_47700[(2)] = inst_47545);

(statearr_47636_47700[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (30))){
var state_47566__$1 = state_47566;
var statearr_47637_47701 = state_47566__$1;
(statearr_47637_47701[(2)] = null);

(statearr_47637_47701[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (10))){
var inst_47450 = (state_47566[(13)]);
var inst_47448 = (state_47566[(15)]);
var inst_47456 = cljs.core._nth.call(null,inst_47448,inst_47450);
var inst_47457 = cljs.core.nth.call(null,inst_47456,(0),null);
var inst_47458 = cljs.core.nth.call(null,inst_47456,(1),null);
var state_47566__$1 = (function (){var statearr_47638 = state_47566;
(statearr_47638[(26)] = inst_47457);

return statearr_47638;
})();
if(cljs.core.truth_(inst_47458)){
var statearr_47639_47702 = state_47566__$1;
(statearr_47639_47702[(1)] = (13));

} else {
var statearr_47640_47703 = state_47566__$1;
(statearr_47640_47703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (18))){
var inst_47491 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47641_47704 = state_47566__$1;
(statearr_47641_47704[(2)] = inst_47491);

(statearr_47641_47704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (42))){
var state_47566__$1 = state_47566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47566__$1,(45),dchan);
} else {
if((state_val_47567 === (37))){
var inst_47525 = (state_47566[(25)]);
var inst_47438 = (state_47566[(9)]);
var inst_47534 = (state_47566[(23)]);
var inst_47534__$1 = cljs.core.first.call(null,inst_47525);
var inst_47535 = cljs.core.async.put_BANG_.call(null,inst_47534__$1,inst_47438,done);
var state_47566__$1 = (function (){var statearr_47642 = state_47566;
(statearr_47642[(23)] = inst_47534__$1);

return statearr_47642;
})();
if(cljs.core.truth_(inst_47535)){
var statearr_47643_47705 = state_47566__$1;
(statearr_47643_47705[(1)] = (39));

} else {
var statearr_47644_47706 = state_47566__$1;
(statearr_47644_47706[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (8))){
var inst_47450 = (state_47566[(13)]);
var inst_47449 = (state_47566[(14)]);
var inst_47452 = (inst_47450 < inst_47449);
var inst_47453 = inst_47452;
var state_47566__$1 = state_47566;
if(cljs.core.truth_(inst_47453)){
var statearr_47645_47707 = state_47566__$1;
(statearr_47645_47707[(1)] = (10));

} else {
var statearr_47646_47708 = state_47566__$1;
(statearr_47646_47708[(1)] = (11));

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
});})(c__41758__auto___47654,cs,m,dchan,dctr,done))
;
return ((function (switch__41737__auto__,c__41758__auto___47654,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__41738__auto__ = null;
var cljs$core$async$mult_$_state_machine__41738__auto____0 = (function (){
var statearr_47650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47650[(0)] = cljs$core$async$mult_$_state_machine__41738__auto__);

(statearr_47650[(1)] = (1));

return statearr_47650;
});
var cljs$core$async$mult_$_state_machine__41738__auto____1 = (function (state_47566){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_47566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e47651){if((e47651 instanceof Object)){
var ex__41741__auto__ = e47651;
var statearr_47652_47709 = state_47566;
(statearr_47652_47709[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47710 = state_47566;
state_47566 = G__47710;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41738__auto__ = function(state_47566){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41738__auto____1.call(this,state_47566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41738__auto____0;
cljs$core$async$mult_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41738__auto____1;
return cljs$core$async$mult_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___47654,cs,m,dchan,dctr,done))
})();
var state__41760__auto__ = (function (){var statearr_47653 = f__41759__auto__.call(null);
(statearr_47653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___47654);

return statearr_47653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___47654,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args47711 = [];
var len__40658__auto___47714 = arguments.length;
var i__40659__auto___47715 = (0);
while(true){
if((i__40659__auto___47715 < len__40658__auto___47714)){
args47711.push((arguments[i__40659__auto___47715]));

var G__47716 = (i__40659__auto___47715 + (1));
i__40659__auto___47715 = G__47716;
continue;
} else {
}
break;
}

var G__47713 = args47711.length;
switch (G__47713) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47711.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__40255__auto__ = (((m == null))?null:m);
var m__40256__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,m,ch);
} else {
var m__40256__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__40255__auto__ = (((m == null))?null:m);
var m__40256__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,m,ch);
} else {
var m__40256__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__40255__auto__ = (((m == null))?null:m);
var m__40256__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,m);
} else {
var m__40256__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__40255__auto__ = (((m == null))?null:m);
var m__40256__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,m,state_map);
} else {
var m__40256__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__40255__auto__ = (((m == null))?null:m);
var m__40256__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,m,mode);
} else {
var m__40256__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__40665__auto__ = [];
var len__40658__auto___47728 = arguments.length;
var i__40659__auto___47729 = (0);
while(true){
if((i__40659__auto___47729 < len__40658__auto___47728)){
args__40665__auto__.push((arguments[i__40659__auto___47729]));

var G__47730 = (i__40659__auto___47729 + (1));
i__40659__auto___47729 = G__47730;
continue;
} else {
}
break;
}

var argseq__40666__auto__ = ((((3) < args__40665__auto__.length))?(new cljs.core.IndexedSeq(args__40665__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40666__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47722){
var map__47723 = p__47722;
var map__47723__$1 = ((((!((map__47723 == null)))?((((map__47723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47723):map__47723);
var opts = map__47723__$1;
var statearr_47725_47731 = state;
(statearr_47725_47731[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__47723,map__47723__$1,opts){
return (function (val){
var statearr_47726_47732 = state;
(statearr_47726_47732[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47723,map__47723__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_47727_47733 = state;
(statearr_47727_47733[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47718){
var G__47719 = cljs.core.first.call(null,seq47718);
var seq47718__$1 = cljs.core.next.call(null,seq47718);
var G__47720 = cljs.core.first.call(null,seq47718__$1);
var seq47718__$2 = cljs.core.next.call(null,seq47718__$1);
var G__47721 = cljs.core.first.call(null,seq47718__$2);
var seq47718__$3 = cljs.core.next.call(null,seq47718__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47719,G__47720,G__47721,seq47718__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47897 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47898){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47898 = meta47898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47899,meta47898__$1){
var self__ = this;
var _47899__$1 = this;
return (new cljs.core.async.t_cljs$core$async47897(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47898__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47899){
var self__ = this;
var _47899__$1 = this;
return self__.meta47898;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47897.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47898","meta47898",-1102717074,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47897";

cljs.core.async.t_cljs$core$async47897.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async47897");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47897 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47897(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47898){
return (new cljs.core.async.t_cljs$core$async47897(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47898));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47897(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41758__auto___48060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___48060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___48060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47997){
var state_val_47998 = (state_47997[(1)]);
if((state_val_47998 === (7))){
var inst_47915 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
var statearr_47999_48061 = state_47997__$1;
(statearr_47999_48061[(2)] = inst_47915);

(statearr_47999_48061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (20))){
var inst_47927 = (state_47997[(7)]);
var state_47997__$1 = state_47997;
var statearr_48000_48062 = state_47997__$1;
(statearr_48000_48062[(2)] = inst_47927);

(statearr_48000_48062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (27))){
var state_47997__$1 = state_47997;
var statearr_48001_48063 = state_47997__$1;
(statearr_48001_48063[(2)] = null);

(statearr_48001_48063[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (1))){
var inst_47903 = (state_47997[(8)]);
var inst_47903__$1 = calc_state.call(null);
var inst_47905 = (inst_47903__$1 == null);
var inst_47906 = cljs.core.not.call(null,inst_47905);
var state_47997__$1 = (function (){var statearr_48002 = state_47997;
(statearr_48002[(8)] = inst_47903__$1);

return statearr_48002;
})();
if(inst_47906){
var statearr_48003_48064 = state_47997__$1;
(statearr_48003_48064[(1)] = (2));

} else {
var statearr_48004_48065 = state_47997__$1;
(statearr_48004_48065[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (24))){
var inst_47971 = (state_47997[(9)]);
var inst_47950 = (state_47997[(10)]);
var inst_47957 = (state_47997[(11)]);
var inst_47971__$1 = inst_47950.call(null,inst_47957);
var state_47997__$1 = (function (){var statearr_48005 = state_47997;
(statearr_48005[(9)] = inst_47971__$1);

return statearr_48005;
})();
if(cljs.core.truth_(inst_47971__$1)){
var statearr_48006_48066 = state_47997__$1;
(statearr_48006_48066[(1)] = (29));

} else {
var statearr_48007_48067 = state_47997__$1;
(statearr_48007_48067[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (4))){
var inst_47918 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
if(cljs.core.truth_(inst_47918)){
var statearr_48008_48068 = state_47997__$1;
(statearr_48008_48068[(1)] = (8));

} else {
var statearr_48009_48069 = state_47997__$1;
(statearr_48009_48069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (15))){
var inst_47944 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
if(cljs.core.truth_(inst_47944)){
var statearr_48010_48070 = state_47997__$1;
(statearr_48010_48070[(1)] = (19));

} else {
var statearr_48011_48071 = state_47997__$1;
(statearr_48011_48071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (21))){
var inst_47949 = (state_47997[(12)]);
var inst_47949__$1 = (state_47997[(2)]);
var inst_47950 = cljs.core.get.call(null,inst_47949__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47951 = cljs.core.get.call(null,inst_47949__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47952 = cljs.core.get.call(null,inst_47949__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47997__$1 = (function (){var statearr_48012 = state_47997;
(statearr_48012[(13)] = inst_47951);

(statearr_48012[(10)] = inst_47950);

(statearr_48012[(12)] = inst_47949__$1);

return statearr_48012;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47997__$1,(22),inst_47952);
} else {
if((state_val_47998 === (31))){
var inst_47979 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
if(cljs.core.truth_(inst_47979)){
var statearr_48013_48072 = state_47997__$1;
(statearr_48013_48072[(1)] = (32));

} else {
var statearr_48014_48073 = state_47997__$1;
(statearr_48014_48073[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (32))){
var inst_47956 = (state_47997[(14)]);
var state_47997__$1 = state_47997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47997__$1,(35),out,inst_47956);
} else {
if((state_val_47998 === (33))){
var inst_47949 = (state_47997[(12)]);
var inst_47927 = inst_47949;
var state_47997__$1 = (function (){var statearr_48015 = state_47997;
(statearr_48015[(7)] = inst_47927);

return statearr_48015;
})();
var statearr_48016_48074 = state_47997__$1;
(statearr_48016_48074[(2)] = null);

(statearr_48016_48074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (13))){
var inst_47927 = (state_47997[(7)]);
var inst_47934 = inst_47927.cljs$lang$protocol_mask$partition0$;
var inst_47935 = (inst_47934 & (64));
var inst_47936 = inst_47927.cljs$core$ISeq$;
var inst_47937 = (inst_47935) || (inst_47936);
var state_47997__$1 = state_47997;
if(cljs.core.truth_(inst_47937)){
var statearr_48017_48075 = state_47997__$1;
(statearr_48017_48075[(1)] = (16));

} else {
var statearr_48018_48076 = state_47997__$1;
(statearr_48018_48076[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (22))){
var inst_47956 = (state_47997[(14)]);
var inst_47957 = (state_47997[(11)]);
var inst_47955 = (state_47997[(2)]);
var inst_47956__$1 = cljs.core.nth.call(null,inst_47955,(0),null);
var inst_47957__$1 = cljs.core.nth.call(null,inst_47955,(1),null);
var inst_47958 = (inst_47956__$1 == null);
var inst_47959 = cljs.core._EQ_.call(null,inst_47957__$1,change);
var inst_47960 = (inst_47958) || (inst_47959);
var state_47997__$1 = (function (){var statearr_48019 = state_47997;
(statearr_48019[(14)] = inst_47956__$1);

(statearr_48019[(11)] = inst_47957__$1);

return statearr_48019;
})();
if(cljs.core.truth_(inst_47960)){
var statearr_48020_48077 = state_47997__$1;
(statearr_48020_48077[(1)] = (23));

} else {
var statearr_48021_48078 = state_47997__$1;
(statearr_48021_48078[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (36))){
var inst_47949 = (state_47997[(12)]);
var inst_47927 = inst_47949;
var state_47997__$1 = (function (){var statearr_48022 = state_47997;
(statearr_48022[(7)] = inst_47927);

return statearr_48022;
})();
var statearr_48023_48079 = state_47997__$1;
(statearr_48023_48079[(2)] = null);

(statearr_48023_48079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (29))){
var inst_47971 = (state_47997[(9)]);
var state_47997__$1 = state_47997;
var statearr_48024_48080 = state_47997__$1;
(statearr_48024_48080[(2)] = inst_47971);

(statearr_48024_48080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (6))){
var state_47997__$1 = state_47997;
var statearr_48025_48081 = state_47997__$1;
(statearr_48025_48081[(2)] = false);

(statearr_48025_48081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (28))){
var inst_47967 = (state_47997[(2)]);
var inst_47968 = calc_state.call(null);
var inst_47927 = inst_47968;
var state_47997__$1 = (function (){var statearr_48026 = state_47997;
(statearr_48026[(15)] = inst_47967);

(statearr_48026[(7)] = inst_47927);

return statearr_48026;
})();
var statearr_48027_48082 = state_47997__$1;
(statearr_48027_48082[(2)] = null);

(statearr_48027_48082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (25))){
var inst_47993 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
var statearr_48028_48083 = state_47997__$1;
(statearr_48028_48083[(2)] = inst_47993);

(statearr_48028_48083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (34))){
var inst_47991 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
var statearr_48029_48084 = state_47997__$1;
(statearr_48029_48084[(2)] = inst_47991);

(statearr_48029_48084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (17))){
var state_47997__$1 = state_47997;
var statearr_48030_48085 = state_47997__$1;
(statearr_48030_48085[(2)] = false);

(statearr_48030_48085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (3))){
var state_47997__$1 = state_47997;
var statearr_48031_48086 = state_47997__$1;
(statearr_48031_48086[(2)] = false);

(statearr_48031_48086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (12))){
var inst_47995 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47997__$1,inst_47995);
} else {
if((state_val_47998 === (2))){
var inst_47903 = (state_47997[(8)]);
var inst_47908 = inst_47903.cljs$lang$protocol_mask$partition0$;
var inst_47909 = (inst_47908 & (64));
var inst_47910 = inst_47903.cljs$core$ISeq$;
var inst_47911 = (inst_47909) || (inst_47910);
var state_47997__$1 = state_47997;
if(cljs.core.truth_(inst_47911)){
var statearr_48032_48087 = state_47997__$1;
(statearr_48032_48087[(1)] = (5));

} else {
var statearr_48033_48088 = state_47997__$1;
(statearr_48033_48088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (23))){
var inst_47956 = (state_47997[(14)]);
var inst_47962 = (inst_47956 == null);
var state_47997__$1 = state_47997;
if(cljs.core.truth_(inst_47962)){
var statearr_48034_48089 = state_47997__$1;
(statearr_48034_48089[(1)] = (26));

} else {
var statearr_48035_48090 = state_47997__$1;
(statearr_48035_48090[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (35))){
var inst_47982 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
if(cljs.core.truth_(inst_47982)){
var statearr_48036_48091 = state_47997__$1;
(statearr_48036_48091[(1)] = (36));

} else {
var statearr_48037_48092 = state_47997__$1;
(statearr_48037_48092[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (19))){
var inst_47927 = (state_47997[(7)]);
var inst_47946 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47927);
var state_47997__$1 = state_47997;
var statearr_48038_48093 = state_47997__$1;
(statearr_48038_48093[(2)] = inst_47946);

(statearr_48038_48093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (11))){
var inst_47927 = (state_47997[(7)]);
var inst_47931 = (inst_47927 == null);
var inst_47932 = cljs.core.not.call(null,inst_47931);
var state_47997__$1 = state_47997;
if(inst_47932){
var statearr_48039_48094 = state_47997__$1;
(statearr_48039_48094[(1)] = (13));

} else {
var statearr_48040_48095 = state_47997__$1;
(statearr_48040_48095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (9))){
var inst_47903 = (state_47997[(8)]);
var state_47997__$1 = state_47997;
var statearr_48041_48096 = state_47997__$1;
(statearr_48041_48096[(2)] = inst_47903);

(statearr_48041_48096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (5))){
var state_47997__$1 = state_47997;
var statearr_48042_48097 = state_47997__$1;
(statearr_48042_48097[(2)] = true);

(statearr_48042_48097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (14))){
var state_47997__$1 = state_47997;
var statearr_48043_48098 = state_47997__$1;
(statearr_48043_48098[(2)] = false);

(statearr_48043_48098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (26))){
var inst_47957 = (state_47997[(11)]);
var inst_47964 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47957);
var state_47997__$1 = state_47997;
var statearr_48044_48099 = state_47997__$1;
(statearr_48044_48099[(2)] = inst_47964);

(statearr_48044_48099[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (16))){
var state_47997__$1 = state_47997;
var statearr_48045_48100 = state_47997__$1;
(statearr_48045_48100[(2)] = true);

(statearr_48045_48100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (38))){
var inst_47987 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
var statearr_48046_48101 = state_47997__$1;
(statearr_48046_48101[(2)] = inst_47987);

(statearr_48046_48101[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (30))){
var inst_47951 = (state_47997[(13)]);
var inst_47950 = (state_47997[(10)]);
var inst_47957 = (state_47997[(11)]);
var inst_47974 = cljs.core.empty_QMARK_.call(null,inst_47950);
var inst_47975 = inst_47951.call(null,inst_47957);
var inst_47976 = cljs.core.not.call(null,inst_47975);
var inst_47977 = (inst_47974) && (inst_47976);
var state_47997__$1 = state_47997;
var statearr_48047_48102 = state_47997__$1;
(statearr_48047_48102[(2)] = inst_47977);

(statearr_48047_48102[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (10))){
var inst_47903 = (state_47997[(8)]);
var inst_47923 = (state_47997[(2)]);
var inst_47924 = cljs.core.get.call(null,inst_47923,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47925 = cljs.core.get.call(null,inst_47923,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47926 = cljs.core.get.call(null,inst_47923,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47927 = inst_47903;
var state_47997__$1 = (function (){var statearr_48048 = state_47997;
(statearr_48048[(16)] = inst_47924);

(statearr_48048[(17)] = inst_47925);

(statearr_48048[(18)] = inst_47926);

(statearr_48048[(7)] = inst_47927);

return statearr_48048;
})();
var statearr_48049_48103 = state_47997__$1;
(statearr_48049_48103[(2)] = null);

(statearr_48049_48103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (18))){
var inst_47941 = (state_47997[(2)]);
var state_47997__$1 = state_47997;
var statearr_48050_48104 = state_47997__$1;
(statearr_48050_48104[(2)] = inst_47941);

(statearr_48050_48104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (37))){
var state_47997__$1 = state_47997;
var statearr_48051_48105 = state_47997__$1;
(statearr_48051_48105[(2)] = null);

(statearr_48051_48105[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47998 === (8))){
var inst_47903 = (state_47997[(8)]);
var inst_47920 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47903);
var state_47997__$1 = state_47997;
var statearr_48052_48106 = state_47997__$1;
(statearr_48052_48106[(2)] = inst_47920);

(statearr_48052_48106[(1)] = (10));


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
});})(c__41758__auto___48060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__41737__auto__,c__41758__auto___48060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__41738__auto__ = null;
var cljs$core$async$mix_$_state_machine__41738__auto____0 = (function (){
var statearr_48056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48056[(0)] = cljs$core$async$mix_$_state_machine__41738__auto__);

(statearr_48056[(1)] = (1));

return statearr_48056;
});
var cljs$core$async$mix_$_state_machine__41738__auto____1 = (function (state_47997){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_47997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e48057){if((e48057 instanceof Object)){
var ex__41741__auto__ = e48057;
var statearr_48058_48107 = state_47997;
(statearr_48058_48107[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48108 = state_47997;
state_47997 = G__48108;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41738__auto__ = function(state_47997){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41738__auto____1.call(this,state_47997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41738__auto____0;
cljs$core$async$mix_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41738__auto____1;
return cljs$core$async$mix_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___48060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41760__auto__ = (function (){var statearr_48059 = f__41759__auto__.call(null);
(statearr_48059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___48060);

return statearr_48059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___48060,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__40255__auto__ = (((p == null))?null:p);
var m__40256__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__40256__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__40255__auto__ = (((p == null))?null:p);
var m__40256__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,p,v,ch);
} else {
var m__40256__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args48109 = [];
var len__40658__auto___48112 = arguments.length;
var i__40659__auto___48113 = (0);
while(true){
if((i__40659__auto___48113 < len__40658__auto___48112)){
args48109.push((arguments[i__40659__auto___48113]));

var G__48114 = (i__40659__auto___48113 + (1));
i__40659__auto___48113 = G__48114;
continue;
} else {
}
break;
}

var G__48111 = args48109.length;
switch (G__48111) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48109.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__40255__auto__ = (((p == null))?null:p);
var m__40256__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,p);
} else {
var m__40256__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__40255__auto__ = (((p == null))?null:p);
var m__40256__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__40255__auto__)]);
if(!((m__40256__auto__ == null))){
return m__40256__auto__.call(null,p,v);
} else {
var m__40256__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__40256__auto____$1 == null))){
return m__40256__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args48117 = [];
var len__40658__auto___48242 = arguments.length;
var i__40659__auto___48243 = (0);
while(true){
if((i__40659__auto___48243 < len__40658__auto___48242)){
args48117.push((arguments[i__40659__auto___48243]));

var G__48244 = (i__40659__auto___48243 + (1));
i__40659__auto___48243 = G__48244;
continue;
} else {
}
break;
}

var G__48119 = args48117.length;
switch (G__48119) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48117.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__39600__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__39600__auto__,mults){
return (function (p1__48116_SHARP_){
if(cljs.core.truth_(p1__48116_SHARP_.call(null,topic))){
return p1__48116_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48116_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__39600__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48120 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48121){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48121 = meta48121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48122,meta48121__$1){
var self__ = this;
var _48122__$1 = this;
return (new cljs.core.async.t_cljs$core$async48120(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48121__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48122){
var self__ = this;
var _48122__$1 = this;
return self__.meta48121;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48120.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48120.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async48120.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48120.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48120.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48120.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48120.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48121","meta48121",1014702321,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48120";

cljs.core.async.t_cljs$core$async48120.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async48120");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48120 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48120(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48121){
return (new cljs.core.async.t_cljs$core$async48120(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48121));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48120(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41758__auto___48246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___48246,mults,ensure_mult,p){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___48246,mults,ensure_mult,p){
return (function (state_48194){
var state_val_48195 = (state_48194[(1)]);
if((state_val_48195 === (7))){
var inst_48190 = (state_48194[(2)]);
var state_48194__$1 = state_48194;
var statearr_48196_48247 = state_48194__$1;
(statearr_48196_48247[(2)] = inst_48190);

(statearr_48196_48247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (20))){
var state_48194__$1 = state_48194;
var statearr_48197_48248 = state_48194__$1;
(statearr_48197_48248[(2)] = null);

(statearr_48197_48248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (1))){
var state_48194__$1 = state_48194;
var statearr_48198_48249 = state_48194__$1;
(statearr_48198_48249[(2)] = null);

(statearr_48198_48249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (24))){
var inst_48173 = (state_48194[(7)]);
var inst_48182 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48173);
var state_48194__$1 = state_48194;
var statearr_48199_48250 = state_48194__$1;
(statearr_48199_48250[(2)] = inst_48182);

(statearr_48199_48250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (4))){
var inst_48125 = (state_48194[(8)]);
var inst_48125__$1 = (state_48194[(2)]);
var inst_48126 = (inst_48125__$1 == null);
var state_48194__$1 = (function (){var statearr_48200 = state_48194;
(statearr_48200[(8)] = inst_48125__$1);

return statearr_48200;
})();
if(cljs.core.truth_(inst_48126)){
var statearr_48201_48251 = state_48194__$1;
(statearr_48201_48251[(1)] = (5));

} else {
var statearr_48202_48252 = state_48194__$1;
(statearr_48202_48252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (15))){
var inst_48167 = (state_48194[(2)]);
var state_48194__$1 = state_48194;
var statearr_48203_48253 = state_48194__$1;
(statearr_48203_48253[(2)] = inst_48167);

(statearr_48203_48253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (21))){
var inst_48187 = (state_48194[(2)]);
var state_48194__$1 = (function (){var statearr_48204 = state_48194;
(statearr_48204[(9)] = inst_48187);

return statearr_48204;
})();
var statearr_48205_48254 = state_48194__$1;
(statearr_48205_48254[(2)] = null);

(statearr_48205_48254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (13))){
var inst_48149 = (state_48194[(10)]);
var inst_48151 = cljs.core.chunked_seq_QMARK_.call(null,inst_48149);
var state_48194__$1 = state_48194;
if(inst_48151){
var statearr_48206_48255 = state_48194__$1;
(statearr_48206_48255[(1)] = (16));

} else {
var statearr_48207_48256 = state_48194__$1;
(statearr_48207_48256[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (22))){
var inst_48179 = (state_48194[(2)]);
var state_48194__$1 = state_48194;
if(cljs.core.truth_(inst_48179)){
var statearr_48208_48257 = state_48194__$1;
(statearr_48208_48257[(1)] = (23));

} else {
var statearr_48209_48258 = state_48194__$1;
(statearr_48209_48258[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (6))){
var inst_48173 = (state_48194[(7)]);
var inst_48175 = (state_48194[(11)]);
var inst_48125 = (state_48194[(8)]);
var inst_48173__$1 = topic_fn.call(null,inst_48125);
var inst_48174 = cljs.core.deref.call(null,mults);
var inst_48175__$1 = cljs.core.get.call(null,inst_48174,inst_48173__$1);
var state_48194__$1 = (function (){var statearr_48210 = state_48194;
(statearr_48210[(7)] = inst_48173__$1);

(statearr_48210[(11)] = inst_48175__$1);

return statearr_48210;
})();
if(cljs.core.truth_(inst_48175__$1)){
var statearr_48211_48259 = state_48194__$1;
(statearr_48211_48259[(1)] = (19));

} else {
var statearr_48212_48260 = state_48194__$1;
(statearr_48212_48260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (25))){
var inst_48184 = (state_48194[(2)]);
var state_48194__$1 = state_48194;
var statearr_48213_48261 = state_48194__$1;
(statearr_48213_48261[(2)] = inst_48184);

(statearr_48213_48261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (17))){
var inst_48149 = (state_48194[(10)]);
var inst_48158 = cljs.core.first.call(null,inst_48149);
var inst_48159 = cljs.core.async.muxch_STAR_.call(null,inst_48158);
var inst_48160 = cljs.core.async.close_BANG_.call(null,inst_48159);
var inst_48161 = cljs.core.next.call(null,inst_48149);
var inst_48135 = inst_48161;
var inst_48136 = null;
var inst_48137 = (0);
var inst_48138 = (0);
var state_48194__$1 = (function (){var statearr_48214 = state_48194;
(statearr_48214[(12)] = inst_48135);

(statearr_48214[(13)] = inst_48136);

(statearr_48214[(14)] = inst_48137);

(statearr_48214[(15)] = inst_48138);

(statearr_48214[(16)] = inst_48160);

return statearr_48214;
})();
var statearr_48215_48262 = state_48194__$1;
(statearr_48215_48262[(2)] = null);

(statearr_48215_48262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (3))){
var inst_48192 = (state_48194[(2)]);
var state_48194__$1 = state_48194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48194__$1,inst_48192);
} else {
if((state_val_48195 === (12))){
var inst_48169 = (state_48194[(2)]);
var state_48194__$1 = state_48194;
var statearr_48216_48263 = state_48194__$1;
(statearr_48216_48263[(2)] = inst_48169);

(statearr_48216_48263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (2))){
var state_48194__$1 = state_48194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48194__$1,(4),ch);
} else {
if((state_val_48195 === (23))){
var state_48194__$1 = state_48194;
var statearr_48217_48264 = state_48194__$1;
(statearr_48217_48264[(2)] = null);

(statearr_48217_48264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (19))){
var inst_48175 = (state_48194[(11)]);
var inst_48125 = (state_48194[(8)]);
var inst_48177 = cljs.core.async.muxch_STAR_.call(null,inst_48175);
var state_48194__$1 = state_48194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48194__$1,(22),inst_48177,inst_48125);
} else {
if((state_val_48195 === (11))){
var inst_48135 = (state_48194[(12)]);
var inst_48149 = (state_48194[(10)]);
var inst_48149__$1 = cljs.core.seq.call(null,inst_48135);
var state_48194__$1 = (function (){var statearr_48218 = state_48194;
(statearr_48218[(10)] = inst_48149__$1);

return statearr_48218;
})();
if(inst_48149__$1){
var statearr_48219_48265 = state_48194__$1;
(statearr_48219_48265[(1)] = (13));

} else {
var statearr_48220_48266 = state_48194__$1;
(statearr_48220_48266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (9))){
var inst_48171 = (state_48194[(2)]);
var state_48194__$1 = state_48194;
var statearr_48221_48267 = state_48194__$1;
(statearr_48221_48267[(2)] = inst_48171);

(statearr_48221_48267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (5))){
var inst_48132 = cljs.core.deref.call(null,mults);
var inst_48133 = cljs.core.vals.call(null,inst_48132);
var inst_48134 = cljs.core.seq.call(null,inst_48133);
var inst_48135 = inst_48134;
var inst_48136 = null;
var inst_48137 = (0);
var inst_48138 = (0);
var state_48194__$1 = (function (){var statearr_48222 = state_48194;
(statearr_48222[(12)] = inst_48135);

(statearr_48222[(13)] = inst_48136);

(statearr_48222[(14)] = inst_48137);

(statearr_48222[(15)] = inst_48138);

return statearr_48222;
})();
var statearr_48223_48268 = state_48194__$1;
(statearr_48223_48268[(2)] = null);

(statearr_48223_48268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (14))){
var state_48194__$1 = state_48194;
var statearr_48227_48269 = state_48194__$1;
(statearr_48227_48269[(2)] = null);

(statearr_48227_48269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (16))){
var inst_48149 = (state_48194[(10)]);
var inst_48153 = cljs.core.chunk_first.call(null,inst_48149);
var inst_48154 = cljs.core.chunk_rest.call(null,inst_48149);
var inst_48155 = cljs.core.count.call(null,inst_48153);
var inst_48135 = inst_48154;
var inst_48136 = inst_48153;
var inst_48137 = inst_48155;
var inst_48138 = (0);
var state_48194__$1 = (function (){var statearr_48228 = state_48194;
(statearr_48228[(12)] = inst_48135);

(statearr_48228[(13)] = inst_48136);

(statearr_48228[(14)] = inst_48137);

(statearr_48228[(15)] = inst_48138);

return statearr_48228;
})();
var statearr_48229_48270 = state_48194__$1;
(statearr_48229_48270[(2)] = null);

(statearr_48229_48270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (10))){
var inst_48135 = (state_48194[(12)]);
var inst_48136 = (state_48194[(13)]);
var inst_48137 = (state_48194[(14)]);
var inst_48138 = (state_48194[(15)]);
var inst_48143 = cljs.core._nth.call(null,inst_48136,inst_48138);
var inst_48144 = cljs.core.async.muxch_STAR_.call(null,inst_48143);
var inst_48145 = cljs.core.async.close_BANG_.call(null,inst_48144);
var inst_48146 = (inst_48138 + (1));
var tmp48224 = inst_48135;
var tmp48225 = inst_48136;
var tmp48226 = inst_48137;
var inst_48135__$1 = tmp48224;
var inst_48136__$1 = tmp48225;
var inst_48137__$1 = tmp48226;
var inst_48138__$1 = inst_48146;
var state_48194__$1 = (function (){var statearr_48230 = state_48194;
(statearr_48230[(12)] = inst_48135__$1);

(statearr_48230[(13)] = inst_48136__$1);

(statearr_48230[(14)] = inst_48137__$1);

(statearr_48230[(15)] = inst_48138__$1);

(statearr_48230[(17)] = inst_48145);

return statearr_48230;
})();
var statearr_48231_48271 = state_48194__$1;
(statearr_48231_48271[(2)] = null);

(statearr_48231_48271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (18))){
var inst_48164 = (state_48194[(2)]);
var state_48194__$1 = state_48194;
var statearr_48232_48272 = state_48194__$1;
(statearr_48232_48272[(2)] = inst_48164);

(statearr_48232_48272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48195 === (8))){
var inst_48137 = (state_48194[(14)]);
var inst_48138 = (state_48194[(15)]);
var inst_48140 = (inst_48138 < inst_48137);
var inst_48141 = inst_48140;
var state_48194__$1 = state_48194;
if(cljs.core.truth_(inst_48141)){
var statearr_48233_48273 = state_48194__$1;
(statearr_48233_48273[(1)] = (10));

} else {
var statearr_48234_48274 = state_48194__$1;
(statearr_48234_48274[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__41758__auto___48246,mults,ensure_mult,p))
;
return ((function (switch__41737__auto__,c__41758__auto___48246,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_48238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48238[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_48238[(1)] = (1));

return statearr_48238;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_48194){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_48194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e48239){if((e48239 instanceof Object)){
var ex__41741__auto__ = e48239;
var statearr_48240_48275 = state_48194;
(statearr_48240_48275[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48276 = state_48194;
state_48194 = G__48276;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_48194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_48194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___48246,mults,ensure_mult,p))
})();
var state__41760__auto__ = (function (){var statearr_48241 = f__41759__auto__.call(null);
(statearr_48241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___48246);

return statearr_48241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___48246,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args48277 = [];
var len__40658__auto___48280 = arguments.length;
var i__40659__auto___48281 = (0);
while(true){
if((i__40659__auto___48281 < len__40658__auto___48280)){
args48277.push((arguments[i__40659__auto___48281]));

var G__48282 = (i__40659__auto___48281 + (1));
i__40659__auto___48281 = G__48282;
continue;
} else {
}
break;
}

var G__48279 = args48277.length;
switch (G__48279) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48277.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args48284 = [];
var len__40658__auto___48287 = arguments.length;
var i__40659__auto___48288 = (0);
while(true){
if((i__40659__auto___48288 < len__40658__auto___48287)){
args48284.push((arguments[i__40659__auto___48288]));

var G__48289 = (i__40659__auto___48288 + (1));
i__40659__auto___48288 = G__48289;
continue;
} else {
}
break;
}

var G__48286 = args48284.length;
switch (G__48286) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48284.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args48291 = [];
var len__40658__auto___48362 = arguments.length;
var i__40659__auto___48363 = (0);
while(true){
if((i__40659__auto___48363 < len__40658__auto___48362)){
args48291.push((arguments[i__40659__auto___48363]));

var G__48364 = (i__40659__auto___48363 + (1));
i__40659__auto___48363 = G__48364;
continue;
} else {
}
break;
}

var G__48293 = args48291.length;
switch (G__48293) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48291.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__41758__auto___48366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___48366,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___48366,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48332){
var state_val_48333 = (state_48332[(1)]);
if((state_val_48333 === (7))){
var state_48332__$1 = state_48332;
var statearr_48334_48367 = state_48332__$1;
(statearr_48334_48367[(2)] = null);

(statearr_48334_48367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (1))){
var state_48332__$1 = state_48332;
var statearr_48335_48368 = state_48332__$1;
(statearr_48335_48368[(2)] = null);

(statearr_48335_48368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (4))){
var inst_48296 = (state_48332[(7)]);
var inst_48298 = (inst_48296 < cnt);
var state_48332__$1 = state_48332;
if(cljs.core.truth_(inst_48298)){
var statearr_48336_48369 = state_48332__$1;
(statearr_48336_48369[(1)] = (6));

} else {
var statearr_48337_48370 = state_48332__$1;
(statearr_48337_48370[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (15))){
var inst_48328 = (state_48332[(2)]);
var state_48332__$1 = state_48332;
var statearr_48338_48371 = state_48332__$1;
(statearr_48338_48371[(2)] = inst_48328);

(statearr_48338_48371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (13))){
var inst_48321 = cljs.core.async.close_BANG_.call(null,out);
var state_48332__$1 = state_48332;
var statearr_48339_48372 = state_48332__$1;
(statearr_48339_48372[(2)] = inst_48321);

(statearr_48339_48372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (6))){
var state_48332__$1 = state_48332;
var statearr_48340_48373 = state_48332__$1;
(statearr_48340_48373[(2)] = null);

(statearr_48340_48373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (3))){
var inst_48330 = (state_48332[(2)]);
var state_48332__$1 = state_48332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48332__$1,inst_48330);
} else {
if((state_val_48333 === (12))){
var inst_48318 = (state_48332[(8)]);
var inst_48318__$1 = (state_48332[(2)]);
var inst_48319 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48318__$1);
var state_48332__$1 = (function (){var statearr_48341 = state_48332;
(statearr_48341[(8)] = inst_48318__$1);

return statearr_48341;
})();
if(cljs.core.truth_(inst_48319)){
var statearr_48342_48374 = state_48332__$1;
(statearr_48342_48374[(1)] = (13));

} else {
var statearr_48343_48375 = state_48332__$1;
(statearr_48343_48375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (2))){
var inst_48295 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48296 = (0);
var state_48332__$1 = (function (){var statearr_48344 = state_48332;
(statearr_48344[(7)] = inst_48296);

(statearr_48344[(9)] = inst_48295);

return statearr_48344;
})();
var statearr_48345_48376 = state_48332__$1;
(statearr_48345_48376[(2)] = null);

(statearr_48345_48376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (11))){
var inst_48296 = (state_48332[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48332,(10),Object,null,(9));
var inst_48305 = chs__$1.call(null,inst_48296);
var inst_48306 = done.call(null,inst_48296);
var inst_48307 = cljs.core.async.take_BANG_.call(null,inst_48305,inst_48306);
var state_48332__$1 = state_48332;
var statearr_48346_48377 = state_48332__$1;
(statearr_48346_48377[(2)] = inst_48307);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (9))){
var inst_48296 = (state_48332[(7)]);
var inst_48309 = (state_48332[(2)]);
var inst_48310 = (inst_48296 + (1));
var inst_48296__$1 = inst_48310;
var state_48332__$1 = (function (){var statearr_48347 = state_48332;
(statearr_48347[(10)] = inst_48309);

(statearr_48347[(7)] = inst_48296__$1);

return statearr_48347;
})();
var statearr_48348_48378 = state_48332__$1;
(statearr_48348_48378[(2)] = null);

(statearr_48348_48378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (5))){
var inst_48316 = (state_48332[(2)]);
var state_48332__$1 = (function (){var statearr_48349 = state_48332;
(statearr_48349[(11)] = inst_48316);

return statearr_48349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48332__$1,(12),dchan);
} else {
if((state_val_48333 === (14))){
var inst_48318 = (state_48332[(8)]);
var inst_48323 = cljs.core.apply.call(null,f,inst_48318);
var state_48332__$1 = state_48332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48332__$1,(16),out,inst_48323);
} else {
if((state_val_48333 === (16))){
var inst_48325 = (state_48332[(2)]);
var state_48332__$1 = (function (){var statearr_48350 = state_48332;
(statearr_48350[(12)] = inst_48325);

return statearr_48350;
})();
var statearr_48351_48379 = state_48332__$1;
(statearr_48351_48379[(2)] = null);

(statearr_48351_48379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (10))){
var inst_48300 = (state_48332[(2)]);
var inst_48301 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48332__$1 = (function (){var statearr_48352 = state_48332;
(statearr_48352[(13)] = inst_48300);

return statearr_48352;
})();
var statearr_48353_48380 = state_48332__$1;
(statearr_48353_48380[(2)] = inst_48301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48333 === (8))){
var inst_48314 = (state_48332[(2)]);
var state_48332__$1 = state_48332;
var statearr_48354_48381 = state_48332__$1;
(statearr_48354_48381[(2)] = inst_48314);

(statearr_48354_48381[(1)] = (5));


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
});})(c__41758__auto___48366,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__41737__auto__,c__41758__auto___48366,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_48358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48358[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_48358[(1)] = (1));

return statearr_48358;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_48332){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_48332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e48359){if((e48359 instanceof Object)){
var ex__41741__auto__ = e48359;
var statearr_48360_48382 = state_48332;
(statearr_48360_48382[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48383 = state_48332;
state_48332 = G__48383;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_48332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_48332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___48366,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41760__auto__ = (function (){var statearr_48361 = f__41759__auto__.call(null);
(statearr_48361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___48366);

return statearr_48361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___48366,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args48385 = [];
var len__40658__auto___48441 = arguments.length;
var i__40659__auto___48442 = (0);
while(true){
if((i__40659__auto___48442 < len__40658__auto___48441)){
args48385.push((arguments[i__40659__auto___48442]));

var G__48443 = (i__40659__auto___48442 + (1));
i__40659__auto___48442 = G__48443;
continue;
} else {
}
break;
}

var G__48387 = args48385.length;
switch (G__48387) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48385.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41758__auto___48445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___48445,out){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___48445,out){
return (function (state_48417){
var state_val_48418 = (state_48417[(1)]);
if((state_val_48418 === (7))){
var inst_48396 = (state_48417[(7)]);
var inst_48397 = (state_48417[(8)]);
var inst_48396__$1 = (state_48417[(2)]);
var inst_48397__$1 = cljs.core.nth.call(null,inst_48396__$1,(0),null);
var inst_48398 = cljs.core.nth.call(null,inst_48396__$1,(1),null);
var inst_48399 = (inst_48397__$1 == null);
var state_48417__$1 = (function (){var statearr_48419 = state_48417;
(statearr_48419[(9)] = inst_48398);

(statearr_48419[(7)] = inst_48396__$1);

(statearr_48419[(8)] = inst_48397__$1);

return statearr_48419;
})();
if(cljs.core.truth_(inst_48399)){
var statearr_48420_48446 = state_48417__$1;
(statearr_48420_48446[(1)] = (8));

} else {
var statearr_48421_48447 = state_48417__$1;
(statearr_48421_48447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48418 === (1))){
var inst_48388 = cljs.core.vec.call(null,chs);
var inst_48389 = inst_48388;
var state_48417__$1 = (function (){var statearr_48422 = state_48417;
(statearr_48422[(10)] = inst_48389);

return statearr_48422;
})();
var statearr_48423_48448 = state_48417__$1;
(statearr_48423_48448[(2)] = null);

(statearr_48423_48448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48418 === (4))){
var inst_48389 = (state_48417[(10)]);
var state_48417__$1 = state_48417;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48417__$1,(7),inst_48389);
} else {
if((state_val_48418 === (6))){
var inst_48413 = (state_48417[(2)]);
var state_48417__$1 = state_48417;
var statearr_48424_48449 = state_48417__$1;
(statearr_48424_48449[(2)] = inst_48413);

(statearr_48424_48449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48418 === (3))){
var inst_48415 = (state_48417[(2)]);
var state_48417__$1 = state_48417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48417__$1,inst_48415);
} else {
if((state_val_48418 === (2))){
var inst_48389 = (state_48417[(10)]);
var inst_48391 = cljs.core.count.call(null,inst_48389);
var inst_48392 = (inst_48391 > (0));
var state_48417__$1 = state_48417;
if(cljs.core.truth_(inst_48392)){
var statearr_48426_48450 = state_48417__$1;
(statearr_48426_48450[(1)] = (4));

} else {
var statearr_48427_48451 = state_48417__$1;
(statearr_48427_48451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48418 === (11))){
var inst_48389 = (state_48417[(10)]);
var inst_48406 = (state_48417[(2)]);
var tmp48425 = inst_48389;
var inst_48389__$1 = tmp48425;
var state_48417__$1 = (function (){var statearr_48428 = state_48417;
(statearr_48428[(10)] = inst_48389__$1);

(statearr_48428[(11)] = inst_48406);

return statearr_48428;
})();
var statearr_48429_48452 = state_48417__$1;
(statearr_48429_48452[(2)] = null);

(statearr_48429_48452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48418 === (9))){
var inst_48397 = (state_48417[(8)]);
var state_48417__$1 = state_48417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48417__$1,(11),out,inst_48397);
} else {
if((state_val_48418 === (5))){
var inst_48411 = cljs.core.async.close_BANG_.call(null,out);
var state_48417__$1 = state_48417;
var statearr_48430_48453 = state_48417__$1;
(statearr_48430_48453[(2)] = inst_48411);

(statearr_48430_48453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48418 === (10))){
var inst_48409 = (state_48417[(2)]);
var state_48417__$1 = state_48417;
var statearr_48431_48454 = state_48417__$1;
(statearr_48431_48454[(2)] = inst_48409);

(statearr_48431_48454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48418 === (8))){
var inst_48398 = (state_48417[(9)]);
var inst_48396 = (state_48417[(7)]);
var inst_48389 = (state_48417[(10)]);
var inst_48397 = (state_48417[(8)]);
var inst_48401 = (function (){var cs = inst_48389;
var vec__48394 = inst_48396;
var v = inst_48397;
var c = inst_48398;
return ((function (cs,vec__48394,v,c,inst_48398,inst_48396,inst_48389,inst_48397,state_val_48418,c__41758__auto___48445,out){
return (function (p1__48384_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48384_SHARP_);
});
;})(cs,vec__48394,v,c,inst_48398,inst_48396,inst_48389,inst_48397,state_val_48418,c__41758__auto___48445,out))
})();
var inst_48402 = cljs.core.filterv.call(null,inst_48401,inst_48389);
var inst_48389__$1 = inst_48402;
var state_48417__$1 = (function (){var statearr_48432 = state_48417;
(statearr_48432[(10)] = inst_48389__$1);

return statearr_48432;
})();
var statearr_48433_48455 = state_48417__$1;
(statearr_48433_48455[(2)] = null);

(statearr_48433_48455[(1)] = (2));


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
});})(c__41758__auto___48445,out))
;
return ((function (switch__41737__auto__,c__41758__auto___48445,out){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_48437 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48437[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_48437[(1)] = (1));

return statearr_48437;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_48417){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_48417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e48438){if((e48438 instanceof Object)){
var ex__41741__auto__ = e48438;
var statearr_48439_48456 = state_48417;
(statearr_48439_48456[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48457 = state_48417;
state_48417 = G__48457;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_48417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_48417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___48445,out))
})();
var state__41760__auto__ = (function (){var statearr_48440 = f__41759__auto__.call(null);
(statearr_48440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___48445);

return statearr_48440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___48445,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args48458 = [];
var len__40658__auto___48507 = arguments.length;
var i__40659__auto___48508 = (0);
while(true){
if((i__40659__auto___48508 < len__40658__auto___48507)){
args48458.push((arguments[i__40659__auto___48508]));

var G__48509 = (i__40659__auto___48508 + (1));
i__40659__auto___48508 = G__48509;
continue;
} else {
}
break;
}

var G__48460 = args48458.length;
switch (G__48460) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48458.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41758__auto___48511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___48511,out){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___48511,out){
return (function (state_48484){
var state_val_48485 = (state_48484[(1)]);
if((state_val_48485 === (7))){
var inst_48466 = (state_48484[(7)]);
var inst_48466__$1 = (state_48484[(2)]);
var inst_48467 = (inst_48466__$1 == null);
var inst_48468 = cljs.core.not.call(null,inst_48467);
var state_48484__$1 = (function (){var statearr_48486 = state_48484;
(statearr_48486[(7)] = inst_48466__$1);

return statearr_48486;
})();
if(inst_48468){
var statearr_48487_48512 = state_48484__$1;
(statearr_48487_48512[(1)] = (8));

} else {
var statearr_48488_48513 = state_48484__$1;
(statearr_48488_48513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48485 === (1))){
var inst_48461 = (0);
var state_48484__$1 = (function (){var statearr_48489 = state_48484;
(statearr_48489[(8)] = inst_48461);

return statearr_48489;
})();
var statearr_48490_48514 = state_48484__$1;
(statearr_48490_48514[(2)] = null);

(statearr_48490_48514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48485 === (4))){
var state_48484__$1 = state_48484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48484__$1,(7),ch);
} else {
if((state_val_48485 === (6))){
var inst_48479 = (state_48484[(2)]);
var state_48484__$1 = state_48484;
var statearr_48491_48515 = state_48484__$1;
(statearr_48491_48515[(2)] = inst_48479);

(statearr_48491_48515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48485 === (3))){
var inst_48481 = (state_48484[(2)]);
var inst_48482 = cljs.core.async.close_BANG_.call(null,out);
var state_48484__$1 = (function (){var statearr_48492 = state_48484;
(statearr_48492[(9)] = inst_48481);

return statearr_48492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48484__$1,inst_48482);
} else {
if((state_val_48485 === (2))){
var inst_48461 = (state_48484[(8)]);
var inst_48463 = (inst_48461 < n);
var state_48484__$1 = state_48484;
if(cljs.core.truth_(inst_48463)){
var statearr_48493_48516 = state_48484__$1;
(statearr_48493_48516[(1)] = (4));

} else {
var statearr_48494_48517 = state_48484__$1;
(statearr_48494_48517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48485 === (11))){
var inst_48461 = (state_48484[(8)]);
var inst_48471 = (state_48484[(2)]);
var inst_48472 = (inst_48461 + (1));
var inst_48461__$1 = inst_48472;
var state_48484__$1 = (function (){var statearr_48495 = state_48484;
(statearr_48495[(10)] = inst_48471);

(statearr_48495[(8)] = inst_48461__$1);

return statearr_48495;
})();
var statearr_48496_48518 = state_48484__$1;
(statearr_48496_48518[(2)] = null);

(statearr_48496_48518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48485 === (9))){
var state_48484__$1 = state_48484;
var statearr_48497_48519 = state_48484__$1;
(statearr_48497_48519[(2)] = null);

(statearr_48497_48519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48485 === (5))){
var state_48484__$1 = state_48484;
var statearr_48498_48520 = state_48484__$1;
(statearr_48498_48520[(2)] = null);

(statearr_48498_48520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48485 === (10))){
var inst_48476 = (state_48484[(2)]);
var state_48484__$1 = state_48484;
var statearr_48499_48521 = state_48484__$1;
(statearr_48499_48521[(2)] = inst_48476);

(statearr_48499_48521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48485 === (8))){
var inst_48466 = (state_48484[(7)]);
var state_48484__$1 = state_48484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48484__$1,(11),out,inst_48466);
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
});})(c__41758__auto___48511,out))
;
return ((function (switch__41737__auto__,c__41758__auto___48511,out){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_48503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48503[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_48503[(1)] = (1));

return statearr_48503;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_48484){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_48484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e48504){if((e48504 instanceof Object)){
var ex__41741__auto__ = e48504;
var statearr_48505_48522 = state_48484;
(statearr_48505_48522[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48523 = state_48484;
state_48484 = G__48523;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_48484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_48484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___48511,out))
})();
var state__41760__auto__ = (function (){var statearr_48506 = f__41759__auto__.call(null);
(statearr_48506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___48511);

return statearr_48506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___48511,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48531 = (function (map_LT_,f,ch,meta48532){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48532 = meta48532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48533,meta48532__$1){
var self__ = this;
var _48533__$1 = this;
return (new cljs.core.async.t_cljs$core$async48531(self__.map_LT_,self__.f,self__.ch,meta48532__$1));
});

cljs.core.async.t_cljs$core$async48531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48533){
var self__ = this;
var _48533__$1 = this;
return self__.meta48532;
});

cljs.core.async.t_cljs$core$async48531.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48531.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48531.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48534 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48534 = (function (map_LT_,f,ch,meta48532,_,fn1,meta48535){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48532 = meta48532;
this._ = _;
this.fn1 = fn1;
this.meta48535 = meta48535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48536,meta48535__$1){
var self__ = this;
var _48536__$1 = this;
return (new cljs.core.async.t_cljs$core$async48534(self__.map_LT_,self__.f,self__.ch,self__.meta48532,self__._,self__.fn1,meta48535__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48536){
var self__ = this;
var _48536__$1 = this;
return self__.meta48535;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48524_SHARP_){
return f1.call(null,(((p1__48524_SHARP_ == null))?null:self__.f.call(null,p1__48524_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48534.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48532","meta48532",-579210468,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48531","cljs.core.async/t_cljs$core$async48531",-280864971,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48535","meta48535",-1848265556,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48534";

cljs.core.async.t_cljs$core$async48534.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async48534");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48534 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48534(map_LT___$1,f__$1,ch__$1,meta48532__$1,___$2,fn1__$1,meta48535){
return (new cljs.core.async.t_cljs$core$async48534(map_LT___$1,f__$1,ch__$1,meta48532__$1,___$2,fn1__$1,meta48535));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48534(self__.map_LT_,self__.f,self__.ch,self__.meta48532,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__39588__auto__ = ret;
if(cljs.core.truth_(and__39588__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__39588__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48531.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48532","meta48532",-579210468,null)], null);
});

cljs.core.async.t_cljs$core$async48531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48531";

cljs.core.async.t_cljs$core$async48531.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async48531");
});

cljs.core.async.__GT_t_cljs$core$async48531 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48531(map_LT___$1,f__$1,ch__$1,meta48532){
return (new cljs.core.async.t_cljs$core$async48531(map_LT___$1,f__$1,ch__$1,meta48532));
});

}

return (new cljs.core.async.t_cljs$core$async48531(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48540 = (function (map_GT_,f,ch,meta48541){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta48541 = meta48541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48542,meta48541__$1){
var self__ = this;
var _48542__$1 = this;
return (new cljs.core.async.t_cljs$core$async48540(self__.map_GT_,self__.f,self__.ch,meta48541__$1));
});

cljs.core.async.t_cljs$core$async48540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48542){
var self__ = this;
var _48542__$1 = this;
return self__.meta48541;
});

cljs.core.async.t_cljs$core$async48540.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48540.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48540.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48541","meta48541",-482183677,null)], null);
});

cljs.core.async.t_cljs$core$async48540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48540";

cljs.core.async.t_cljs$core$async48540.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async48540");
});

cljs.core.async.__GT_t_cljs$core$async48540 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48540(map_GT___$1,f__$1,ch__$1,meta48541){
return (new cljs.core.async.t_cljs$core$async48540(map_GT___$1,f__$1,ch__$1,meta48541));
});

}

return (new cljs.core.async.t_cljs$core$async48540(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48546 = (function (filter_GT_,p,ch,meta48547){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta48547 = meta48547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48548,meta48547__$1){
var self__ = this;
var _48548__$1 = this;
return (new cljs.core.async.t_cljs$core$async48546(self__.filter_GT_,self__.p,self__.ch,meta48547__$1));
});

cljs.core.async.t_cljs$core$async48546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48548){
var self__ = this;
var _48548__$1 = this;
return self__.meta48547;
});

cljs.core.async.t_cljs$core$async48546.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48546.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48546.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48546.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48547","meta48547",528936139,null)], null);
});

cljs.core.async.t_cljs$core$async48546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48546";

cljs.core.async.t_cljs$core$async48546.cljs$lang$ctorPrWriter = (function (this__40198__auto__,writer__40199__auto__,opt__40200__auto__){
return cljs.core._write.call(null,writer__40199__auto__,"cljs.core.async/t_cljs$core$async48546");
});

cljs.core.async.__GT_t_cljs$core$async48546 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48546(filter_GT___$1,p__$1,ch__$1,meta48547){
return (new cljs.core.async.t_cljs$core$async48546(filter_GT___$1,p__$1,ch__$1,meta48547));
});

}

return (new cljs.core.async.t_cljs$core$async48546(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args48549 = [];
var len__40658__auto___48593 = arguments.length;
var i__40659__auto___48594 = (0);
while(true){
if((i__40659__auto___48594 < len__40658__auto___48593)){
args48549.push((arguments[i__40659__auto___48594]));

var G__48595 = (i__40659__auto___48594 + (1));
i__40659__auto___48594 = G__48595;
continue;
} else {
}
break;
}

var G__48551 = args48549.length;
switch (G__48551) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48549.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41758__auto___48597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___48597,out){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___48597,out){
return (function (state_48572){
var state_val_48573 = (state_48572[(1)]);
if((state_val_48573 === (7))){
var inst_48568 = (state_48572[(2)]);
var state_48572__$1 = state_48572;
var statearr_48574_48598 = state_48572__$1;
(statearr_48574_48598[(2)] = inst_48568);

(statearr_48574_48598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48573 === (1))){
var state_48572__$1 = state_48572;
var statearr_48575_48599 = state_48572__$1;
(statearr_48575_48599[(2)] = null);

(statearr_48575_48599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48573 === (4))){
var inst_48554 = (state_48572[(7)]);
var inst_48554__$1 = (state_48572[(2)]);
var inst_48555 = (inst_48554__$1 == null);
var state_48572__$1 = (function (){var statearr_48576 = state_48572;
(statearr_48576[(7)] = inst_48554__$1);

return statearr_48576;
})();
if(cljs.core.truth_(inst_48555)){
var statearr_48577_48600 = state_48572__$1;
(statearr_48577_48600[(1)] = (5));

} else {
var statearr_48578_48601 = state_48572__$1;
(statearr_48578_48601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48573 === (6))){
var inst_48554 = (state_48572[(7)]);
var inst_48559 = p.call(null,inst_48554);
var state_48572__$1 = state_48572;
if(cljs.core.truth_(inst_48559)){
var statearr_48579_48602 = state_48572__$1;
(statearr_48579_48602[(1)] = (8));

} else {
var statearr_48580_48603 = state_48572__$1;
(statearr_48580_48603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48573 === (3))){
var inst_48570 = (state_48572[(2)]);
var state_48572__$1 = state_48572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48572__$1,inst_48570);
} else {
if((state_val_48573 === (2))){
var state_48572__$1 = state_48572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48572__$1,(4),ch);
} else {
if((state_val_48573 === (11))){
var inst_48562 = (state_48572[(2)]);
var state_48572__$1 = state_48572;
var statearr_48581_48604 = state_48572__$1;
(statearr_48581_48604[(2)] = inst_48562);

(statearr_48581_48604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48573 === (9))){
var state_48572__$1 = state_48572;
var statearr_48582_48605 = state_48572__$1;
(statearr_48582_48605[(2)] = null);

(statearr_48582_48605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48573 === (5))){
var inst_48557 = cljs.core.async.close_BANG_.call(null,out);
var state_48572__$1 = state_48572;
var statearr_48583_48606 = state_48572__$1;
(statearr_48583_48606[(2)] = inst_48557);

(statearr_48583_48606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48573 === (10))){
var inst_48565 = (state_48572[(2)]);
var state_48572__$1 = (function (){var statearr_48584 = state_48572;
(statearr_48584[(8)] = inst_48565);

return statearr_48584;
})();
var statearr_48585_48607 = state_48572__$1;
(statearr_48585_48607[(2)] = null);

(statearr_48585_48607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48573 === (8))){
var inst_48554 = (state_48572[(7)]);
var state_48572__$1 = state_48572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48572__$1,(11),out,inst_48554);
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
});})(c__41758__auto___48597,out))
;
return ((function (switch__41737__auto__,c__41758__auto___48597,out){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_48589 = [null,null,null,null,null,null,null,null,null];
(statearr_48589[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_48589[(1)] = (1));

return statearr_48589;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_48572){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_48572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e48590){if((e48590 instanceof Object)){
var ex__41741__auto__ = e48590;
var statearr_48591_48608 = state_48572;
(statearr_48591_48608[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48609 = state_48572;
state_48572 = G__48609;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_48572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_48572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___48597,out))
})();
var state__41760__auto__ = (function (){var statearr_48592 = f__41759__auto__.call(null);
(statearr_48592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___48597);

return statearr_48592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___48597,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args48610 = [];
var len__40658__auto___48613 = arguments.length;
var i__40659__auto___48614 = (0);
while(true){
if((i__40659__auto___48614 < len__40658__auto___48613)){
args48610.push((arguments[i__40659__auto___48614]));

var G__48615 = (i__40659__auto___48614 + (1));
i__40659__auto___48614 = G__48615;
continue;
} else {
}
break;
}

var G__48612 = args48610.length;
switch (G__48612) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48610.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__){
return (function (state_48782){
var state_val_48783 = (state_48782[(1)]);
if((state_val_48783 === (7))){
var inst_48778 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
var statearr_48784_48825 = state_48782__$1;
(statearr_48784_48825[(2)] = inst_48778);

(statearr_48784_48825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (20))){
var inst_48748 = (state_48782[(7)]);
var inst_48759 = (state_48782[(2)]);
var inst_48760 = cljs.core.next.call(null,inst_48748);
var inst_48734 = inst_48760;
var inst_48735 = null;
var inst_48736 = (0);
var inst_48737 = (0);
var state_48782__$1 = (function (){var statearr_48785 = state_48782;
(statearr_48785[(8)] = inst_48734);

(statearr_48785[(9)] = inst_48735);

(statearr_48785[(10)] = inst_48737);

(statearr_48785[(11)] = inst_48759);

(statearr_48785[(12)] = inst_48736);

return statearr_48785;
})();
var statearr_48786_48826 = state_48782__$1;
(statearr_48786_48826[(2)] = null);

(statearr_48786_48826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (1))){
var state_48782__$1 = state_48782;
var statearr_48787_48827 = state_48782__$1;
(statearr_48787_48827[(2)] = null);

(statearr_48787_48827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (4))){
var inst_48723 = (state_48782[(13)]);
var inst_48723__$1 = (state_48782[(2)]);
var inst_48724 = (inst_48723__$1 == null);
var state_48782__$1 = (function (){var statearr_48788 = state_48782;
(statearr_48788[(13)] = inst_48723__$1);

return statearr_48788;
})();
if(cljs.core.truth_(inst_48724)){
var statearr_48789_48828 = state_48782__$1;
(statearr_48789_48828[(1)] = (5));

} else {
var statearr_48790_48829 = state_48782__$1;
(statearr_48790_48829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (15))){
var state_48782__$1 = state_48782;
var statearr_48794_48830 = state_48782__$1;
(statearr_48794_48830[(2)] = null);

(statearr_48794_48830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (21))){
var state_48782__$1 = state_48782;
var statearr_48795_48831 = state_48782__$1;
(statearr_48795_48831[(2)] = null);

(statearr_48795_48831[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (13))){
var inst_48734 = (state_48782[(8)]);
var inst_48735 = (state_48782[(9)]);
var inst_48737 = (state_48782[(10)]);
var inst_48736 = (state_48782[(12)]);
var inst_48744 = (state_48782[(2)]);
var inst_48745 = (inst_48737 + (1));
var tmp48791 = inst_48734;
var tmp48792 = inst_48735;
var tmp48793 = inst_48736;
var inst_48734__$1 = tmp48791;
var inst_48735__$1 = tmp48792;
var inst_48736__$1 = tmp48793;
var inst_48737__$1 = inst_48745;
var state_48782__$1 = (function (){var statearr_48796 = state_48782;
(statearr_48796[(8)] = inst_48734__$1);

(statearr_48796[(9)] = inst_48735__$1);

(statearr_48796[(10)] = inst_48737__$1);

(statearr_48796[(12)] = inst_48736__$1);

(statearr_48796[(14)] = inst_48744);

return statearr_48796;
})();
var statearr_48797_48832 = state_48782__$1;
(statearr_48797_48832[(2)] = null);

(statearr_48797_48832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (22))){
var state_48782__$1 = state_48782;
var statearr_48798_48833 = state_48782__$1;
(statearr_48798_48833[(2)] = null);

(statearr_48798_48833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (6))){
var inst_48723 = (state_48782[(13)]);
var inst_48732 = f.call(null,inst_48723);
var inst_48733 = cljs.core.seq.call(null,inst_48732);
var inst_48734 = inst_48733;
var inst_48735 = null;
var inst_48736 = (0);
var inst_48737 = (0);
var state_48782__$1 = (function (){var statearr_48799 = state_48782;
(statearr_48799[(8)] = inst_48734);

(statearr_48799[(9)] = inst_48735);

(statearr_48799[(10)] = inst_48737);

(statearr_48799[(12)] = inst_48736);

return statearr_48799;
})();
var statearr_48800_48834 = state_48782__$1;
(statearr_48800_48834[(2)] = null);

(statearr_48800_48834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (17))){
var inst_48748 = (state_48782[(7)]);
var inst_48752 = cljs.core.chunk_first.call(null,inst_48748);
var inst_48753 = cljs.core.chunk_rest.call(null,inst_48748);
var inst_48754 = cljs.core.count.call(null,inst_48752);
var inst_48734 = inst_48753;
var inst_48735 = inst_48752;
var inst_48736 = inst_48754;
var inst_48737 = (0);
var state_48782__$1 = (function (){var statearr_48801 = state_48782;
(statearr_48801[(8)] = inst_48734);

(statearr_48801[(9)] = inst_48735);

(statearr_48801[(10)] = inst_48737);

(statearr_48801[(12)] = inst_48736);

return statearr_48801;
})();
var statearr_48802_48835 = state_48782__$1;
(statearr_48802_48835[(2)] = null);

(statearr_48802_48835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (3))){
var inst_48780 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48782__$1,inst_48780);
} else {
if((state_val_48783 === (12))){
var inst_48768 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
var statearr_48803_48836 = state_48782__$1;
(statearr_48803_48836[(2)] = inst_48768);

(statearr_48803_48836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (2))){
var state_48782__$1 = state_48782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48782__$1,(4),in$);
} else {
if((state_val_48783 === (23))){
var inst_48776 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
var statearr_48804_48837 = state_48782__$1;
(statearr_48804_48837[(2)] = inst_48776);

(statearr_48804_48837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (19))){
var inst_48763 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
var statearr_48805_48838 = state_48782__$1;
(statearr_48805_48838[(2)] = inst_48763);

(statearr_48805_48838[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (11))){
var inst_48734 = (state_48782[(8)]);
var inst_48748 = (state_48782[(7)]);
var inst_48748__$1 = cljs.core.seq.call(null,inst_48734);
var state_48782__$1 = (function (){var statearr_48806 = state_48782;
(statearr_48806[(7)] = inst_48748__$1);

return statearr_48806;
})();
if(inst_48748__$1){
var statearr_48807_48839 = state_48782__$1;
(statearr_48807_48839[(1)] = (14));

} else {
var statearr_48808_48840 = state_48782__$1;
(statearr_48808_48840[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (9))){
var inst_48770 = (state_48782[(2)]);
var inst_48771 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48782__$1 = (function (){var statearr_48809 = state_48782;
(statearr_48809[(15)] = inst_48770);

return statearr_48809;
})();
if(cljs.core.truth_(inst_48771)){
var statearr_48810_48841 = state_48782__$1;
(statearr_48810_48841[(1)] = (21));

} else {
var statearr_48811_48842 = state_48782__$1;
(statearr_48811_48842[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (5))){
var inst_48726 = cljs.core.async.close_BANG_.call(null,out);
var state_48782__$1 = state_48782;
var statearr_48812_48843 = state_48782__$1;
(statearr_48812_48843[(2)] = inst_48726);

(statearr_48812_48843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (14))){
var inst_48748 = (state_48782[(7)]);
var inst_48750 = cljs.core.chunked_seq_QMARK_.call(null,inst_48748);
var state_48782__$1 = state_48782;
if(inst_48750){
var statearr_48813_48844 = state_48782__$1;
(statearr_48813_48844[(1)] = (17));

} else {
var statearr_48814_48845 = state_48782__$1;
(statearr_48814_48845[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (16))){
var inst_48766 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
var statearr_48815_48846 = state_48782__$1;
(statearr_48815_48846[(2)] = inst_48766);

(statearr_48815_48846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (10))){
var inst_48735 = (state_48782[(9)]);
var inst_48737 = (state_48782[(10)]);
var inst_48742 = cljs.core._nth.call(null,inst_48735,inst_48737);
var state_48782__$1 = state_48782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48782__$1,(13),out,inst_48742);
} else {
if((state_val_48783 === (18))){
var inst_48748 = (state_48782[(7)]);
var inst_48757 = cljs.core.first.call(null,inst_48748);
var state_48782__$1 = state_48782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48782__$1,(20),out,inst_48757);
} else {
if((state_val_48783 === (8))){
var inst_48737 = (state_48782[(10)]);
var inst_48736 = (state_48782[(12)]);
var inst_48739 = (inst_48737 < inst_48736);
var inst_48740 = inst_48739;
var state_48782__$1 = state_48782;
if(cljs.core.truth_(inst_48740)){
var statearr_48816_48847 = state_48782__$1;
(statearr_48816_48847[(1)] = (10));

} else {
var statearr_48817_48848 = state_48782__$1;
(statearr_48817_48848[(1)] = (11));

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
}
}
}
}
}
}
});})(c__41758__auto__))
;
return ((function (switch__41737__auto__,c__41758__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41738__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41738__auto____0 = (function (){
var statearr_48821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48821[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41738__auto__);

(statearr_48821[(1)] = (1));

return statearr_48821;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41738__auto____1 = (function (state_48782){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_48782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e48822){if((e48822 instanceof Object)){
var ex__41741__auto__ = e48822;
var statearr_48823_48849 = state_48782;
(statearr_48823_48849[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48850 = state_48782;
state_48782 = G__48850;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41738__auto__ = function(state_48782){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41738__auto____1.call(this,state_48782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41738__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41738__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__))
})();
var state__41760__auto__ = (function (){var statearr_48824 = f__41759__auto__.call(null);
(statearr_48824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_48824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__))
);

return c__41758__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args48851 = [];
var len__40658__auto___48854 = arguments.length;
var i__40659__auto___48855 = (0);
while(true){
if((i__40659__auto___48855 < len__40658__auto___48854)){
args48851.push((arguments[i__40659__auto___48855]));

var G__48856 = (i__40659__auto___48855 + (1));
i__40659__auto___48855 = G__48856;
continue;
} else {
}
break;
}

var G__48853 = args48851.length;
switch (G__48853) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48851.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args48858 = [];
var len__40658__auto___48861 = arguments.length;
var i__40659__auto___48862 = (0);
while(true){
if((i__40659__auto___48862 < len__40658__auto___48861)){
args48858.push((arguments[i__40659__auto___48862]));

var G__48863 = (i__40659__auto___48862 + (1));
i__40659__auto___48862 = G__48863;
continue;
} else {
}
break;
}

var G__48860 = args48858.length;
switch (G__48860) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48858.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args48865 = [];
var len__40658__auto___48916 = arguments.length;
var i__40659__auto___48917 = (0);
while(true){
if((i__40659__auto___48917 < len__40658__auto___48916)){
args48865.push((arguments[i__40659__auto___48917]));

var G__48918 = (i__40659__auto___48917 + (1));
i__40659__auto___48917 = G__48918;
continue;
} else {
}
break;
}

var G__48867 = args48865.length;
switch (G__48867) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48865.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41758__auto___48920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___48920,out){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___48920,out){
return (function (state_48891){
var state_val_48892 = (state_48891[(1)]);
if((state_val_48892 === (7))){
var inst_48886 = (state_48891[(2)]);
var state_48891__$1 = state_48891;
var statearr_48893_48921 = state_48891__$1;
(statearr_48893_48921[(2)] = inst_48886);

(statearr_48893_48921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48892 === (1))){
var inst_48868 = null;
var state_48891__$1 = (function (){var statearr_48894 = state_48891;
(statearr_48894[(7)] = inst_48868);

return statearr_48894;
})();
var statearr_48895_48922 = state_48891__$1;
(statearr_48895_48922[(2)] = null);

(statearr_48895_48922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48892 === (4))){
var inst_48871 = (state_48891[(8)]);
var inst_48871__$1 = (state_48891[(2)]);
var inst_48872 = (inst_48871__$1 == null);
var inst_48873 = cljs.core.not.call(null,inst_48872);
var state_48891__$1 = (function (){var statearr_48896 = state_48891;
(statearr_48896[(8)] = inst_48871__$1);

return statearr_48896;
})();
if(inst_48873){
var statearr_48897_48923 = state_48891__$1;
(statearr_48897_48923[(1)] = (5));

} else {
var statearr_48898_48924 = state_48891__$1;
(statearr_48898_48924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48892 === (6))){
var state_48891__$1 = state_48891;
var statearr_48899_48925 = state_48891__$1;
(statearr_48899_48925[(2)] = null);

(statearr_48899_48925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48892 === (3))){
var inst_48888 = (state_48891[(2)]);
var inst_48889 = cljs.core.async.close_BANG_.call(null,out);
var state_48891__$1 = (function (){var statearr_48900 = state_48891;
(statearr_48900[(9)] = inst_48888);

return statearr_48900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48891__$1,inst_48889);
} else {
if((state_val_48892 === (2))){
var state_48891__$1 = state_48891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48891__$1,(4),ch);
} else {
if((state_val_48892 === (11))){
var inst_48871 = (state_48891[(8)]);
var inst_48880 = (state_48891[(2)]);
var inst_48868 = inst_48871;
var state_48891__$1 = (function (){var statearr_48901 = state_48891;
(statearr_48901[(7)] = inst_48868);

(statearr_48901[(10)] = inst_48880);

return statearr_48901;
})();
var statearr_48902_48926 = state_48891__$1;
(statearr_48902_48926[(2)] = null);

(statearr_48902_48926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48892 === (9))){
var inst_48871 = (state_48891[(8)]);
var state_48891__$1 = state_48891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48891__$1,(11),out,inst_48871);
} else {
if((state_val_48892 === (5))){
var inst_48868 = (state_48891[(7)]);
var inst_48871 = (state_48891[(8)]);
var inst_48875 = cljs.core._EQ_.call(null,inst_48871,inst_48868);
var state_48891__$1 = state_48891;
if(inst_48875){
var statearr_48904_48927 = state_48891__$1;
(statearr_48904_48927[(1)] = (8));

} else {
var statearr_48905_48928 = state_48891__$1;
(statearr_48905_48928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48892 === (10))){
var inst_48883 = (state_48891[(2)]);
var state_48891__$1 = state_48891;
var statearr_48906_48929 = state_48891__$1;
(statearr_48906_48929[(2)] = inst_48883);

(statearr_48906_48929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48892 === (8))){
var inst_48868 = (state_48891[(7)]);
var tmp48903 = inst_48868;
var inst_48868__$1 = tmp48903;
var state_48891__$1 = (function (){var statearr_48907 = state_48891;
(statearr_48907[(7)] = inst_48868__$1);

return statearr_48907;
})();
var statearr_48908_48930 = state_48891__$1;
(statearr_48908_48930[(2)] = null);

(statearr_48908_48930[(1)] = (2));


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
});})(c__41758__auto___48920,out))
;
return ((function (switch__41737__auto__,c__41758__auto___48920,out){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_48912 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48912[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_48912[(1)] = (1));

return statearr_48912;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_48891){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_48891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e48913){if((e48913 instanceof Object)){
var ex__41741__auto__ = e48913;
var statearr_48914_48931 = state_48891;
(statearr_48914_48931[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48932 = state_48891;
state_48891 = G__48932;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_48891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_48891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___48920,out))
})();
var state__41760__auto__ = (function (){var statearr_48915 = f__41759__auto__.call(null);
(statearr_48915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___48920);

return statearr_48915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___48920,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args48933 = [];
var len__40658__auto___49003 = arguments.length;
var i__40659__auto___49004 = (0);
while(true){
if((i__40659__auto___49004 < len__40658__auto___49003)){
args48933.push((arguments[i__40659__auto___49004]));

var G__49005 = (i__40659__auto___49004 + (1));
i__40659__auto___49004 = G__49005;
continue;
} else {
}
break;
}

var G__48935 = args48933.length;
switch (G__48935) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48933.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41758__auto___49007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___49007,out){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___49007,out){
return (function (state_48973){
var state_val_48974 = (state_48973[(1)]);
if((state_val_48974 === (7))){
var inst_48969 = (state_48973[(2)]);
var state_48973__$1 = state_48973;
var statearr_48975_49008 = state_48973__$1;
(statearr_48975_49008[(2)] = inst_48969);

(statearr_48975_49008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (1))){
var inst_48936 = (new Array(n));
var inst_48937 = inst_48936;
var inst_48938 = (0);
var state_48973__$1 = (function (){var statearr_48976 = state_48973;
(statearr_48976[(7)] = inst_48938);

(statearr_48976[(8)] = inst_48937);

return statearr_48976;
})();
var statearr_48977_49009 = state_48973__$1;
(statearr_48977_49009[(2)] = null);

(statearr_48977_49009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (4))){
var inst_48941 = (state_48973[(9)]);
var inst_48941__$1 = (state_48973[(2)]);
var inst_48942 = (inst_48941__$1 == null);
var inst_48943 = cljs.core.not.call(null,inst_48942);
var state_48973__$1 = (function (){var statearr_48978 = state_48973;
(statearr_48978[(9)] = inst_48941__$1);

return statearr_48978;
})();
if(inst_48943){
var statearr_48979_49010 = state_48973__$1;
(statearr_48979_49010[(1)] = (5));

} else {
var statearr_48980_49011 = state_48973__$1;
(statearr_48980_49011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (15))){
var inst_48963 = (state_48973[(2)]);
var state_48973__$1 = state_48973;
var statearr_48981_49012 = state_48973__$1;
(statearr_48981_49012[(2)] = inst_48963);

(statearr_48981_49012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (13))){
var state_48973__$1 = state_48973;
var statearr_48982_49013 = state_48973__$1;
(statearr_48982_49013[(2)] = null);

(statearr_48982_49013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (6))){
var inst_48938 = (state_48973[(7)]);
var inst_48959 = (inst_48938 > (0));
var state_48973__$1 = state_48973;
if(cljs.core.truth_(inst_48959)){
var statearr_48983_49014 = state_48973__$1;
(statearr_48983_49014[(1)] = (12));

} else {
var statearr_48984_49015 = state_48973__$1;
(statearr_48984_49015[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (3))){
var inst_48971 = (state_48973[(2)]);
var state_48973__$1 = state_48973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48973__$1,inst_48971);
} else {
if((state_val_48974 === (12))){
var inst_48937 = (state_48973[(8)]);
var inst_48961 = cljs.core.vec.call(null,inst_48937);
var state_48973__$1 = state_48973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48973__$1,(15),out,inst_48961);
} else {
if((state_val_48974 === (2))){
var state_48973__$1 = state_48973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48973__$1,(4),ch);
} else {
if((state_val_48974 === (11))){
var inst_48953 = (state_48973[(2)]);
var inst_48954 = (new Array(n));
var inst_48937 = inst_48954;
var inst_48938 = (0);
var state_48973__$1 = (function (){var statearr_48985 = state_48973;
(statearr_48985[(7)] = inst_48938);

(statearr_48985[(8)] = inst_48937);

(statearr_48985[(10)] = inst_48953);

return statearr_48985;
})();
var statearr_48986_49016 = state_48973__$1;
(statearr_48986_49016[(2)] = null);

(statearr_48986_49016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (9))){
var inst_48937 = (state_48973[(8)]);
var inst_48951 = cljs.core.vec.call(null,inst_48937);
var state_48973__$1 = state_48973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48973__$1,(11),out,inst_48951);
} else {
if((state_val_48974 === (5))){
var inst_48938 = (state_48973[(7)]);
var inst_48941 = (state_48973[(9)]);
var inst_48946 = (state_48973[(11)]);
var inst_48937 = (state_48973[(8)]);
var inst_48945 = (inst_48937[inst_48938] = inst_48941);
var inst_48946__$1 = (inst_48938 + (1));
var inst_48947 = (inst_48946__$1 < n);
var state_48973__$1 = (function (){var statearr_48987 = state_48973;
(statearr_48987[(11)] = inst_48946__$1);

(statearr_48987[(12)] = inst_48945);

return statearr_48987;
})();
if(cljs.core.truth_(inst_48947)){
var statearr_48988_49017 = state_48973__$1;
(statearr_48988_49017[(1)] = (8));

} else {
var statearr_48989_49018 = state_48973__$1;
(statearr_48989_49018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (14))){
var inst_48966 = (state_48973[(2)]);
var inst_48967 = cljs.core.async.close_BANG_.call(null,out);
var state_48973__$1 = (function (){var statearr_48991 = state_48973;
(statearr_48991[(13)] = inst_48966);

return statearr_48991;
})();
var statearr_48992_49019 = state_48973__$1;
(statearr_48992_49019[(2)] = inst_48967);

(statearr_48992_49019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (10))){
var inst_48957 = (state_48973[(2)]);
var state_48973__$1 = state_48973;
var statearr_48993_49020 = state_48973__$1;
(statearr_48993_49020[(2)] = inst_48957);

(statearr_48993_49020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48974 === (8))){
var inst_48946 = (state_48973[(11)]);
var inst_48937 = (state_48973[(8)]);
var tmp48990 = inst_48937;
var inst_48937__$1 = tmp48990;
var inst_48938 = inst_48946;
var state_48973__$1 = (function (){var statearr_48994 = state_48973;
(statearr_48994[(7)] = inst_48938);

(statearr_48994[(8)] = inst_48937__$1);

return statearr_48994;
})();
var statearr_48995_49021 = state_48973__$1;
(statearr_48995_49021[(2)] = null);

(statearr_48995_49021[(1)] = (2));


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
});})(c__41758__auto___49007,out))
;
return ((function (switch__41737__auto__,c__41758__auto___49007,out){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_48999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48999[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_48999[(1)] = (1));

return statearr_48999;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_48973){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_48973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e49000){if((e49000 instanceof Object)){
var ex__41741__auto__ = e49000;
var statearr_49001_49022 = state_48973;
(statearr_49001_49022[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49023 = state_48973;
state_48973 = G__49023;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_48973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_48973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___49007,out))
})();
var state__41760__auto__ = (function (){var statearr_49002 = f__41759__auto__.call(null);
(statearr_49002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___49007);

return statearr_49002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___49007,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args49024 = [];
var len__40658__auto___49098 = arguments.length;
var i__40659__auto___49099 = (0);
while(true){
if((i__40659__auto___49099 < len__40658__auto___49098)){
args49024.push((arguments[i__40659__auto___49099]));

var G__49100 = (i__40659__auto___49099 + (1));
i__40659__auto___49099 = G__49100;
continue;
} else {
}
break;
}

var G__49026 = args49024.length;
switch (G__49026) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49024.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41758__auto___49102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___49102,out){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___49102,out){
return (function (state_49068){
var state_val_49069 = (state_49068[(1)]);
if((state_val_49069 === (7))){
var inst_49064 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
var statearr_49070_49103 = state_49068__$1;
(statearr_49070_49103[(2)] = inst_49064);

(statearr_49070_49103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (1))){
var inst_49027 = [];
var inst_49028 = inst_49027;
var inst_49029 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49068__$1 = (function (){var statearr_49071 = state_49068;
(statearr_49071[(7)] = inst_49029);

(statearr_49071[(8)] = inst_49028);

return statearr_49071;
})();
var statearr_49072_49104 = state_49068__$1;
(statearr_49072_49104[(2)] = null);

(statearr_49072_49104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (4))){
var inst_49032 = (state_49068[(9)]);
var inst_49032__$1 = (state_49068[(2)]);
var inst_49033 = (inst_49032__$1 == null);
var inst_49034 = cljs.core.not.call(null,inst_49033);
var state_49068__$1 = (function (){var statearr_49073 = state_49068;
(statearr_49073[(9)] = inst_49032__$1);

return statearr_49073;
})();
if(inst_49034){
var statearr_49074_49105 = state_49068__$1;
(statearr_49074_49105[(1)] = (5));

} else {
var statearr_49075_49106 = state_49068__$1;
(statearr_49075_49106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (15))){
var inst_49058 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
var statearr_49076_49107 = state_49068__$1;
(statearr_49076_49107[(2)] = inst_49058);

(statearr_49076_49107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (13))){
var state_49068__$1 = state_49068;
var statearr_49077_49108 = state_49068__$1;
(statearr_49077_49108[(2)] = null);

(statearr_49077_49108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (6))){
var inst_49028 = (state_49068[(8)]);
var inst_49053 = inst_49028.length;
var inst_49054 = (inst_49053 > (0));
var state_49068__$1 = state_49068;
if(cljs.core.truth_(inst_49054)){
var statearr_49078_49109 = state_49068__$1;
(statearr_49078_49109[(1)] = (12));

} else {
var statearr_49079_49110 = state_49068__$1;
(statearr_49079_49110[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (3))){
var inst_49066 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49068__$1,inst_49066);
} else {
if((state_val_49069 === (12))){
var inst_49028 = (state_49068[(8)]);
var inst_49056 = cljs.core.vec.call(null,inst_49028);
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49068__$1,(15),out,inst_49056);
} else {
if((state_val_49069 === (2))){
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49068__$1,(4),ch);
} else {
if((state_val_49069 === (11))){
var inst_49036 = (state_49068[(10)]);
var inst_49032 = (state_49068[(9)]);
var inst_49046 = (state_49068[(2)]);
var inst_49047 = [];
var inst_49048 = inst_49047.push(inst_49032);
var inst_49028 = inst_49047;
var inst_49029 = inst_49036;
var state_49068__$1 = (function (){var statearr_49080 = state_49068;
(statearr_49080[(7)] = inst_49029);

(statearr_49080[(11)] = inst_49046);

(statearr_49080[(8)] = inst_49028);

(statearr_49080[(12)] = inst_49048);

return statearr_49080;
})();
var statearr_49081_49111 = state_49068__$1;
(statearr_49081_49111[(2)] = null);

(statearr_49081_49111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (9))){
var inst_49028 = (state_49068[(8)]);
var inst_49044 = cljs.core.vec.call(null,inst_49028);
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49068__$1,(11),out,inst_49044);
} else {
if((state_val_49069 === (5))){
var inst_49029 = (state_49068[(7)]);
var inst_49036 = (state_49068[(10)]);
var inst_49032 = (state_49068[(9)]);
var inst_49036__$1 = f.call(null,inst_49032);
var inst_49037 = cljs.core._EQ_.call(null,inst_49036__$1,inst_49029);
var inst_49038 = cljs.core.keyword_identical_QMARK_.call(null,inst_49029,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49039 = (inst_49037) || (inst_49038);
var state_49068__$1 = (function (){var statearr_49082 = state_49068;
(statearr_49082[(10)] = inst_49036__$1);

return statearr_49082;
})();
if(cljs.core.truth_(inst_49039)){
var statearr_49083_49112 = state_49068__$1;
(statearr_49083_49112[(1)] = (8));

} else {
var statearr_49084_49113 = state_49068__$1;
(statearr_49084_49113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (14))){
var inst_49061 = (state_49068[(2)]);
var inst_49062 = cljs.core.async.close_BANG_.call(null,out);
var state_49068__$1 = (function (){var statearr_49086 = state_49068;
(statearr_49086[(13)] = inst_49061);

return statearr_49086;
})();
var statearr_49087_49114 = state_49068__$1;
(statearr_49087_49114[(2)] = inst_49062);

(statearr_49087_49114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (10))){
var inst_49051 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
var statearr_49088_49115 = state_49068__$1;
(statearr_49088_49115[(2)] = inst_49051);

(statearr_49088_49115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (8))){
var inst_49036 = (state_49068[(10)]);
var inst_49028 = (state_49068[(8)]);
var inst_49032 = (state_49068[(9)]);
var inst_49041 = inst_49028.push(inst_49032);
var tmp49085 = inst_49028;
var inst_49028__$1 = tmp49085;
var inst_49029 = inst_49036;
var state_49068__$1 = (function (){var statearr_49089 = state_49068;
(statearr_49089[(7)] = inst_49029);

(statearr_49089[(14)] = inst_49041);

(statearr_49089[(8)] = inst_49028__$1);

return statearr_49089;
})();
var statearr_49090_49116 = state_49068__$1;
(statearr_49090_49116[(2)] = null);

(statearr_49090_49116[(1)] = (2));


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
});})(c__41758__auto___49102,out))
;
return ((function (switch__41737__auto__,c__41758__auto___49102,out){
return (function() {
var cljs$core$async$state_machine__41738__auto__ = null;
var cljs$core$async$state_machine__41738__auto____0 = (function (){
var statearr_49094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49094[(0)] = cljs$core$async$state_machine__41738__auto__);

(statearr_49094[(1)] = (1));

return statearr_49094;
});
var cljs$core$async$state_machine__41738__auto____1 = (function (state_49068){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_49068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e49095){if((e49095 instanceof Object)){
var ex__41741__auto__ = e49095;
var statearr_49096_49117 = state_49068;
(statearr_49096_49117[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49118 = state_49068;
state_49068 = G__49118;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
cljs$core$async$state_machine__41738__auto__ = function(state_49068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41738__auto____1.call(this,state_49068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41738__auto____0;
cljs$core$async$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41738__auto____1;
return cljs$core$async$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___49102,out))
})();
var state__41760__auto__ = (function (){var statearr_49097 = f__41759__auto__.call(null);
(statearr_49097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___49102);

return statearr_49097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___49102,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1458155578785