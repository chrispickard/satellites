// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__39600__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__39600__auto__){
return or__39600__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__39600__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49885_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49885_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49890 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49891 = null;
var count__49892 = (0);
var i__49893 = (0);
while(true){
if((i__49893 < count__49892)){
var n = cljs.core._nth.call(null,chunk__49891,i__49893);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49894 = seq__49890;
var G__49895 = chunk__49891;
var G__49896 = count__49892;
var G__49897 = (i__49893 + (1));
seq__49890 = G__49894;
chunk__49891 = G__49895;
count__49892 = G__49896;
i__49893 = G__49897;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49890);
if(temp__4657__auto__){
var seq__49890__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49890__$1)){
var c__40403__auto__ = cljs.core.chunk_first.call(null,seq__49890__$1);
var G__49898 = cljs.core.chunk_rest.call(null,seq__49890__$1);
var G__49899 = c__40403__auto__;
var G__49900 = cljs.core.count.call(null,c__40403__auto__);
var G__49901 = (0);
seq__49890 = G__49898;
chunk__49891 = G__49899;
count__49892 = G__49900;
i__49893 = G__49901;
continue;
} else {
var n = cljs.core.first.call(null,seq__49890__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49902 = cljs.core.next.call(null,seq__49890__$1);
var G__49903 = null;
var G__49904 = (0);
var G__49905 = (0);
seq__49890 = G__49902;
chunk__49891 = G__49903;
count__49892 = G__49904;
i__49893 = G__49905;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49944_49951 = cljs.core.seq.call(null,deps);
var chunk__49945_49952 = null;
var count__49946_49953 = (0);
var i__49947_49954 = (0);
while(true){
if((i__49947_49954 < count__49946_49953)){
var dep_49955 = cljs.core._nth.call(null,chunk__49945_49952,i__49947_49954);
topo_sort_helper_STAR_.call(null,dep_49955,(depth + (1)),state);

var G__49956 = seq__49944_49951;
var G__49957 = chunk__49945_49952;
var G__49958 = count__49946_49953;
var G__49959 = (i__49947_49954 + (1));
seq__49944_49951 = G__49956;
chunk__49945_49952 = G__49957;
count__49946_49953 = G__49958;
i__49947_49954 = G__49959;
continue;
} else {
var temp__4657__auto___49960 = cljs.core.seq.call(null,seq__49944_49951);
if(temp__4657__auto___49960){
var seq__49944_49961__$1 = temp__4657__auto___49960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49944_49961__$1)){
var c__40403__auto___49962 = cljs.core.chunk_first.call(null,seq__49944_49961__$1);
var G__49963 = cljs.core.chunk_rest.call(null,seq__49944_49961__$1);
var G__49964 = c__40403__auto___49962;
var G__49965 = cljs.core.count.call(null,c__40403__auto___49962);
var G__49966 = (0);
seq__49944_49951 = G__49963;
chunk__49945_49952 = G__49964;
count__49946_49953 = G__49965;
i__49947_49954 = G__49966;
continue;
} else {
var dep_49967 = cljs.core.first.call(null,seq__49944_49961__$1);
topo_sort_helper_STAR_.call(null,dep_49967,(depth + (1)),state);

var G__49968 = cljs.core.next.call(null,seq__49944_49961__$1);
var G__49969 = null;
var G__49970 = (0);
var G__49971 = (0);
seq__49944_49951 = G__49968;
chunk__49945_49952 = G__49969;
count__49946_49953 = G__49970;
i__49947_49954 = G__49971;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49948){
var vec__49950 = p__49948;
var x = cljs.core.nth.call(null,vec__49950,(0),null);
var xs = cljs.core.nthnext.call(null,vec__49950,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49950,x,xs,get_deps__$1){
return (function (p1__49906_SHARP_){
return clojure.set.difference.call(null,p1__49906_SHARP_,x);
});})(vec__49950,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49984 = cljs.core.seq.call(null,provides);
var chunk__49985 = null;
var count__49986 = (0);
var i__49987 = (0);
while(true){
if((i__49987 < count__49986)){
var prov = cljs.core._nth.call(null,chunk__49985,i__49987);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49988_49996 = cljs.core.seq.call(null,requires);
var chunk__49989_49997 = null;
var count__49990_49998 = (0);
var i__49991_49999 = (0);
while(true){
if((i__49991_49999 < count__49990_49998)){
var req_50000 = cljs.core._nth.call(null,chunk__49989_49997,i__49991_49999);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50000,prov);

var G__50001 = seq__49988_49996;
var G__50002 = chunk__49989_49997;
var G__50003 = count__49990_49998;
var G__50004 = (i__49991_49999 + (1));
seq__49988_49996 = G__50001;
chunk__49989_49997 = G__50002;
count__49990_49998 = G__50003;
i__49991_49999 = G__50004;
continue;
} else {
var temp__4657__auto___50005 = cljs.core.seq.call(null,seq__49988_49996);
if(temp__4657__auto___50005){
var seq__49988_50006__$1 = temp__4657__auto___50005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49988_50006__$1)){
var c__40403__auto___50007 = cljs.core.chunk_first.call(null,seq__49988_50006__$1);
var G__50008 = cljs.core.chunk_rest.call(null,seq__49988_50006__$1);
var G__50009 = c__40403__auto___50007;
var G__50010 = cljs.core.count.call(null,c__40403__auto___50007);
var G__50011 = (0);
seq__49988_49996 = G__50008;
chunk__49989_49997 = G__50009;
count__49990_49998 = G__50010;
i__49991_49999 = G__50011;
continue;
} else {
var req_50012 = cljs.core.first.call(null,seq__49988_50006__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50012,prov);

var G__50013 = cljs.core.next.call(null,seq__49988_50006__$1);
var G__50014 = null;
var G__50015 = (0);
var G__50016 = (0);
seq__49988_49996 = G__50013;
chunk__49989_49997 = G__50014;
count__49990_49998 = G__50015;
i__49991_49999 = G__50016;
continue;
}
} else {
}
}
break;
}

var G__50017 = seq__49984;
var G__50018 = chunk__49985;
var G__50019 = count__49986;
var G__50020 = (i__49987 + (1));
seq__49984 = G__50017;
chunk__49985 = G__50018;
count__49986 = G__50019;
i__49987 = G__50020;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49984);
if(temp__4657__auto__){
var seq__49984__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49984__$1)){
var c__40403__auto__ = cljs.core.chunk_first.call(null,seq__49984__$1);
var G__50021 = cljs.core.chunk_rest.call(null,seq__49984__$1);
var G__50022 = c__40403__auto__;
var G__50023 = cljs.core.count.call(null,c__40403__auto__);
var G__50024 = (0);
seq__49984 = G__50021;
chunk__49985 = G__50022;
count__49986 = G__50023;
i__49987 = G__50024;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49984__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49992_50025 = cljs.core.seq.call(null,requires);
var chunk__49993_50026 = null;
var count__49994_50027 = (0);
var i__49995_50028 = (0);
while(true){
if((i__49995_50028 < count__49994_50027)){
var req_50029 = cljs.core._nth.call(null,chunk__49993_50026,i__49995_50028);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50029,prov);

var G__50030 = seq__49992_50025;
var G__50031 = chunk__49993_50026;
var G__50032 = count__49994_50027;
var G__50033 = (i__49995_50028 + (1));
seq__49992_50025 = G__50030;
chunk__49993_50026 = G__50031;
count__49994_50027 = G__50032;
i__49995_50028 = G__50033;
continue;
} else {
var temp__4657__auto___50034__$1 = cljs.core.seq.call(null,seq__49992_50025);
if(temp__4657__auto___50034__$1){
var seq__49992_50035__$1 = temp__4657__auto___50034__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49992_50035__$1)){
var c__40403__auto___50036 = cljs.core.chunk_first.call(null,seq__49992_50035__$1);
var G__50037 = cljs.core.chunk_rest.call(null,seq__49992_50035__$1);
var G__50038 = c__40403__auto___50036;
var G__50039 = cljs.core.count.call(null,c__40403__auto___50036);
var G__50040 = (0);
seq__49992_50025 = G__50037;
chunk__49993_50026 = G__50038;
count__49994_50027 = G__50039;
i__49995_50028 = G__50040;
continue;
} else {
var req_50041 = cljs.core.first.call(null,seq__49992_50035__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50041,prov);

var G__50042 = cljs.core.next.call(null,seq__49992_50035__$1);
var G__50043 = null;
var G__50044 = (0);
var G__50045 = (0);
seq__49992_50025 = G__50042;
chunk__49993_50026 = G__50043;
count__49994_50027 = G__50044;
i__49995_50028 = G__50045;
continue;
}
} else {
}
}
break;
}

var G__50046 = cljs.core.next.call(null,seq__49984__$1);
var G__50047 = null;
var G__50048 = (0);
var G__50049 = (0);
seq__49984 = G__50046;
chunk__49985 = G__50047;
count__49986 = G__50048;
i__49987 = G__50049;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__50054_50058 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50055_50059 = null;
var count__50056_50060 = (0);
var i__50057_50061 = (0);
while(true){
if((i__50057_50061 < count__50056_50060)){
var ns_50062 = cljs.core._nth.call(null,chunk__50055_50059,i__50057_50061);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50062);

var G__50063 = seq__50054_50058;
var G__50064 = chunk__50055_50059;
var G__50065 = count__50056_50060;
var G__50066 = (i__50057_50061 + (1));
seq__50054_50058 = G__50063;
chunk__50055_50059 = G__50064;
count__50056_50060 = G__50065;
i__50057_50061 = G__50066;
continue;
} else {
var temp__4657__auto___50067 = cljs.core.seq.call(null,seq__50054_50058);
if(temp__4657__auto___50067){
var seq__50054_50068__$1 = temp__4657__auto___50067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50054_50068__$1)){
var c__40403__auto___50069 = cljs.core.chunk_first.call(null,seq__50054_50068__$1);
var G__50070 = cljs.core.chunk_rest.call(null,seq__50054_50068__$1);
var G__50071 = c__40403__auto___50069;
var G__50072 = cljs.core.count.call(null,c__40403__auto___50069);
var G__50073 = (0);
seq__50054_50058 = G__50070;
chunk__50055_50059 = G__50071;
count__50056_50060 = G__50072;
i__50057_50061 = G__50073;
continue;
} else {
var ns_50074 = cljs.core.first.call(null,seq__50054_50068__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50074);

var G__50075 = cljs.core.next.call(null,seq__50054_50068__$1);
var G__50076 = null;
var G__50077 = (0);
var G__50078 = (0);
seq__50054_50058 = G__50075;
chunk__50055_50059 = G__50076;
count__50056_50060 = G__50077;
i__50057_50061 = G__50078;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__39600__auto__ = goog.require__;
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__50079__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50080__i = 0, G__50080__a = new Array(arguments.length -  0);
while (G__50080__i < G__50080__a.length) {G__50080__a[G__50080__i] = arguments[G__50080__i + 0]; ++G__50080__i;}
  args = new cljs.core.IndexedSeq(G__50080__a,0);
} 
return G__50079__delegate.call(this,args);};
G__50079.cljs$lang$maxFixedArity = 0;
G__50079.cljs$lang$applyTo = (function (arglist__50081){
var args = cljs.core.seq(arglist__50081);
return G__50079__delegate(args);
});
G__50079.cljs$core$IFn$_invoke$arity$variadic = G__50079__delegate;
return G__50079;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50083 = cljs.core._EQ_;
var expr__50084 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50083.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50084))){
var path_parts = ((function (pred__50083,expr__50084){
return (function (p1__50082_SHARP_){
return clojure.string.split.call(null,p1__50082_SHARP_,/[\/\\]/);
});})(pred__50083,expr__50084))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__50083,expr__50084){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50086){if((e50086 instanceof Error)){
var e = e50086;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50086;

}
}})());
});
;})(path_parts,sep,root,pred__50083,expr__50084))
} else {
if(cljs.core.truth_(pred__50083.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50084))){
return ((function (pred__50083,expr__50084){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__50083,expr__50084){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__50083,expr__50084))
);

return deferred.addErrback(((function (deferred,pred__50083,expr__50084){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__50083,expr__50084))
);
});
;})(pred__50083,expr__50084))
} else {
return ((function (pred__50083,expr__50084){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50083,expr__50084))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50087,callback){
var map__50090 = p__50087;
var map__50090__$1 = ((((!((map__50090 == null)))?((((map__50090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50090):map__50090);
var file_msg = map__50090__$1;
var request_url = cljs.core.get.call(null,map__50090__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__50090,map__50090__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50090,map__50090__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__){
return (function (state_50114){
var state_val_50115 = (state_50114[(1)]);
if((state_val_50115 === (7))){
var inst_50110 = (state_50114[(2)]);
var state_50114__$1 = state_50114;
var statearr_50116_50136 = state_50114__$1;
(statearr_50116_50136[(2)] = inst_50110);

(statearr_50116_50136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50115 === (1))){
var state_50114__$1 = state_50114;
var statearr_50117_50137 = state_50114__$1;
(statearr_50117_50137[(2)] = null);

(statearr_50117_50137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50115 === (4))){
var inst_50094 = (state_50114[(7)]);
var inst_50094__$1 = (state_50114[(2)]);
var state_50114__$1 = (function (){var statearr_50118 = state_50114;
(statearr_50118[(7)] = inst_50094__$1);

return statearr_50118;
})();
if(cljs.core.truth_(inst_50094__$1)){
var statearr_50119_50138 = state_50114__$1;
(statearr_50119_50138[(1)] = (5));

} else {
var statearr_50120_50139 = state_50114__$1;
(statearr_50120_50139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50115 === (6))){
var state_50114__$1 = state_50114;
var statearr_50121_50140 = state_50114__$1;
(statearr_50121_50140[(2)] = null);

(statearr_50121_50140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50115 === (3))){
var inst_50112 = (state_50114[(2)]);
var state_50114__$1 = state_50114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50114__$1,inst_50112);
} else {
if((state_val_50115 === (2))){
var state_50114__$1 = state_50114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50114__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50115 === (11))){
var inst_50106 = (state_50114[(2)]);
var state_50114__$1 = (function (){var statearr_50122 = state_50114;
(statearr_50122[(8)] = inst_50106);

return statearr_50122;
})();
var statearr_50123_50141 = state_50114__$1;
(statearr_50123_50141[(2)] = null);

(statearr_50123_50141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50115 === (9))){
var inst_50098 = (state_50114[(9)]);
var inst_50100 = (state_50114[(10)]);
var inst_50102 = inst_50100.call(null,inst_50098);
var state_50114__$1 = state_50114;
var statearr_50124_50142 = state_50114__$1;
(statearr_50124_50142[(2)] = inst_50102);

(statearr_50124_50142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50115 === (5))){
var inst_50094 = (state_50114[(7)]);
var inst_50096 = figwheel.client.file_reloading.blocking_load.call(null,inst_50094);
var state_50114__$1 = state_50114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50114__$1,(8),inst_50096);
} else {
if((state_val_50115 === (10))){
var inst_50098 = (state_50114[(9)]);
var inst_50104 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50098);
var state_50114__$1 = state_50114;
var statearr_50125_50143 = state_50114__$1;
(statearr_50125_50143[(2)] = inst_50104);

(statearr_50125_50143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50115 === (8))){
var inst_50100 = (state_50114[(10)]);
var inst_50094 = (state_50114[(7)]);
var inst_50098 = (state_50114[(2)]);
var inst_50099 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50100__$1 = cljs.core.get.call(null,inst_50099,inst_50094);
var state_50114__$1 = (function (){var statearr_50126 = state_50114;
(statearr_50126[(9)] = inst_50098);

(statearr_50126[(10)] = inst_50100__$1);

return statearr_50126;
})();
if(cljs.core.truth_(inst_50100__$1)){
var statearr_50127_50144 = state_50114__$1;
(statearr_50127_50144[(1)] = (9));

} else {
var statearr_50128_50145 = state_50114__$1;
(statearr_50128_50145[(1)] = (10));

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
});})(c__41758__auto__))
;
return ((function (switch__41737__auto__,c__41758__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__41738__auto__ = null;
var figwheel$client$file_reloading$state_machine__41738__auto____0 = (function (){
var statearr_50132 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50132[(0)] = figwheel$client$file_reloading$state_machine__41738__auto__);

(statearr_50132[(1)] = (1));

return statearr_50132;
});
var figwheel$client$file_reloading$state_machine__41738__auto____1 = (function (state_50114){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_50114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e50133){if((e50133 instanceof Object)){
var ex__41741__auto__ = e50133;
var statearr_50134_50146 = state_50114;
(statearr_50134_50146[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50147 = state_50114;
state_50114 = G__50147;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__41738__auto__ = function(state_50114){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__41738__auto____1.call(this,state_50114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__41738__auto____0;
figwheel$client$file_reloading$state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__41738__auto____1;
return figwheel$client$file_reloading$state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__))
})();
var state__41760__auto__ = (function (){var statearr_50135 = f__41759__auto__.call(null);
(statearr_50135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_50135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__))
);

return c__41758__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50148,callback){
var map__50151 = p__50148;
var map__50151__$1 = ((((!((map__50151 == null)))?((((map__50151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50151):map__50151);
var file_msg = map__50151__$1;
var namespace = cljs.core.get.call(null,map__50151__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50151,map__50151__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50151,map__50151__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50153){
var map__50156 = p__50153;
var map__50156__$1 = ((((!((map__50156 == null)))?((((map__50156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50156):map__50156);
var file_msg = map__50156__$1;
var namespace = cljs.core.get.call(null,map__50156__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__39588__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__39588__auto__){
var or__39600__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39600__auto__)){
return or__39600__auto__;
} else {
var or__39600__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39600__auto____$1)){
return or__39600__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__39588__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50158,callback){
var map__50161 = p__50158;
var map__50161__$1 = ((((!((map__50161 == null)))?((((map__50161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50161):map__50161);
var file_msg = map__50161__$1;
var request_url = cljs.core.get.call(null,map__50161__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50161__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__41758__auto___50249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto___50249,out){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto___50249,out){
return (function (state_50231){
var state_val_50232 = (state_50231[(1)]);
if((state_val_50232 === (1))){
var inst_50209 = cljs.core.nth.call(null,files,(0),null);
var inst_50210 = cljs.core.nthnext.call(null,files,(1));
var inst_50211 = files;
var state_50231__$1 = (function (){var statearr_50233 = state_50231;
(statearr_50233[(7)] = inst_50210);

(statearr_50233[(8)] = inst_50209);

(statearr_50233[(9)] = inst_50211);

return statearr_50233;
})();
var statearr_50234_50250 = state_50231__$1;
(statearr_50234_50250[(2)] = null);

(statearr_50234_50250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (2))){
var inst_50214 = (state_50231[(10)]);
var inst_50211 = (state_50231[(9)]);
var inst_50214__$1 = cljs.core.nth.call(null,inst_50211,(0),null);
var inst_50215 = cljs.core.nthnext.call(null,inst_50211,(1));
var inst_50216 = (inst_50214__$1 == null);
var inst_50217 = cljs.core.not.call(null,inst_50216);
var state_50231__$1 = (function (){var statearr_50235 = state_50231;
(statearr_50235[(11)] = inst_50215);

(statearr_50235[(10)] = inst_50214__$1);

return statearr_50235;
})();
if(inst_50217){
var statearr_50236_50251 = state_50231__$1;
(statearr_50236_50251[(1)] = (4));

} else {
var statearr_50237_50252 = state_50231__$1;
(statearr_50237_50252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (3))){
var inst_50229 = (state_50231[(2)]);
var state_50231__$1 = state_50231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50231__$1,inst_50229);
} else {
if((state_val_50232 === (4))){
var inst_50214 = (state_50231[(10)]);
var inst_50219 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50214);
var state_50231__$1 = state_50231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50231__$1,(7),inst_50219);
} else {
if((state_val_50232 === (5))){
var inst_50225 = cljs.core.async.close_BANG_.call(null,out);
var state_50231__$1 = state_50231;
var statearr_50238_50253 = state_50231__$1;
(statearr_50238_50253[(2)] = inst_50225);

(statearr_50238_50253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (6))){
var inst_50227 = (state_50231[(2)]);
var state_50231__$1 = state_50231;
var statearr_50239_50254 = state_50231__$1;
(statearr_50239_50254[(2)] = inst_50227);

(statearr_50239_50254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (7))){
var inst_50215 = (state_50231[(11)]);
var inst_50221 = (state_50231[(2)]);
var inst_50222 = cljs.core.async.put_BANG_.call(null,out,inst_50221);
var inst_50211 = inst_50215;
var state_50231__$1 = (function (){var statearr_50240 = state_50231;
(statearr_50240[(12)] = inst_50222);

(statearr_50240[(9)] = inst_50211);

return statearr_50240;
})();
var statearr_50241_50255 = state_50231__$1;
(statearr_50241_50255[(2)] = null);

(statearr_50241_50255[(1)] = (2));


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
});})(c__41758__auto___50249,out))
;
return ((function (switch__41737__auto__,c__41758__auto___50249,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto____0 = (function (){
var statearr_50245 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50245[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto__);

(statearr_50245[(1)] = (1));

return statearr_50245;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto____1 = (function (state_50231){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_50231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e50246){if((e50246 instanceof Object)){
var ex__41741__auto__ = e50246;
var statearr_50247_50256 = state_50231;
(statearr_50247_50256[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50257 = state_50231;
state_50231 = G__50257;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto__ = function(state_50231){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto____1.call(this,state_50231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto___50249,out))
})();
var state__41760__auto__ = (function (){var statearr_50248 = f__41759__auto__.call(null);
(statearr_50248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto___50249);

return statearr_50248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto___50249,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50258,opts){
var map__50262 = p__50258;
var map__50262__$1 = ((((!((map__50262 == null)))?((((map__50262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50262):map__50262);
var eval_body__$1 = cljs.core.get.call(null,map__50262__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50262__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__39588__auto__ = eval_body__$1;
if(cljs.core.truth_(and__39588__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__39588__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e50264){var e = e50264;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__50265_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50265_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__50270){
var vec__50271 = p__50270;
var k = cljs.core.nth.call(null,vec__50271,(0),null);
var v = cljs.core.nth.call(null,vec__50271,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50272){
var vec__50273 = p__50272;
var k = cljs.core.nth.call(null,vec__50273,(0),null);
var v = cljs.core.nth.call(null,vec__50273,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50277,p__50278){
var map__50525 = p__50277;
var map__50525__$1 = ((((!((map__50525 == null)))?((((map__50525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50525):map__50525);
var opts = map__50525__$1;
var before_jsload = cljs.core.get.call(null,map__50525__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50525__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50525__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50526 = p__50278;
var map__50526__$1 = ((((!((map__50526 == null)))?((((map__50526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50526):map__50526);
var msg = map__50526__$1;
var files = cljs.core.get.call(null,map__50526__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50526__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50526__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__41758__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__41759__auto__ = (function (){var switch__41737__auto__ = ((function (c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50679){
var state_val_50680 = (state_50679[(1)]);
if((state_val_50680 === (7))){
var inst_50541 = (state_50679[(7)]);
var inst_50540 = (state_50679[(8)]);
var inst_50543 = (state_50679[(9)]);
var inst_50542 = (state_50679[(10)]);
var inst_50548 = cljs.core._nth.call(null,inst_50541,inst_50543);
var inst_50549 = figwheel.client.file_reloading.eval_body.call(null,inst_50548,opts);
var inst_50550 = (inst_50543 + (1));
var tmp50681 = inst_50541;
var tmp50682 = inst_50540;
var tmp50683 = inst_50542;
var inst_50540__$1 = tmp50682;
var inst_50541__$1 = tmp50681;
var inst_50542__$1 = tmp50683;
var inst_50543__$1 = inst_50550;
var state_50679__$1 = (function (){var statearr_50684 = state_50679;
(statearr_50684[(7)] = inst_50541__$1);

(statearr_50684[(8)] = inst_50540__$1);

(statearr_50684[(11)] = inst_50549);

(statearr_50684[(9)] = inst_50543__$1);

(statearr_50684[(10)] = inst_50542__$1);

return statearr_50684;
})();
var statearr_50685_50771 = state_50679__$1;
(statearr_50685_50771[(2)] = null);

(statearr_50685_50771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (20))){
var inst_50583 = (state_50679[(12)]);
var inst_50591 = figwheel.client.file_reloading.sort_files.call(null,inst_50583);
var state_50679__$1 = state_50679;
var statearr_50686_50772 = state_50679__$1;
(statearr_50686_50772[(2)] = inst_50591);

(statearr_50686_50772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (27))){
var state_50679__$1 = state_50679;
var statearr_50687_50773 = state_50679__$1;
(statearr_50687_50773[(2)] = null);

(statearr_50687_50773[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (1))){
var inst_50532 = (state_50679[(13)]);
var inst_50529 = before_jsload.call(null,files);
var inst_50530 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50531 = (function (){return ((function (inst_50532,inst_50529,inst_50530,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50274_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50274_SHARP_);
});
;})(inst_50532,inst_50529,inst_50530,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50532__$1 = cljs.core.filter.call(null,inst_50531,files);
var inst_50533 = cljs.core.not_empty.call(null,inst_50532__$1);
var state_50679__$1 = (function (){var statearr_50688 = state_50679;
(statearr_50688[(14)] = inst_50529);

(statearr_50688[(15)] = inst_50530);

(statearr_50688[(13)] = inst_50532__$1);

return statearr_50688;
})();
if(cljs.core.truth_(inst_50533)){
var statearr_50689_50774 = state_50679__$1;
(statearr_50689_50774[(1)] = (2));

} else {
var statearr_50690_50775 = state_50679__$1;
(statearr_50690_50775[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (24))){
var state_50679__$1 = state_50679;
var statearr_50691_50776 = state_50679__$1;
(statearr_50691_50776[(2)] = null);

(statearr_50691_50776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (39))){
var inst_50633 = (state_50679[(16)]);
var state_50679__$1 = state_50679;
var statearr_50692_50777 = state_50679__$1;
(statearr_50692_50777[(2)] = inst_50633);

(statearr_50692_50777[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (46))){
var inst_50674 = (state_50679[(2)]);
var state_50679__$1 = state_50679;
var statearr_50693_50778 = state_50679__$1;
(statearr_50693_50778[(2)] = inst_50674);

(statearr_50693_50778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (4))){
var inst_50577 = (state_50679[(2)]);
var inst_50578 = cljs.core.List.EMPTY;
var inst_50579 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50578);
var inst_50580 = (function (){return ((function (inst_50577,inst_50578,inst_50579,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50275_SHARP_){
var and__39588__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50275_SHARP_);
if(cljs.core.truth_(and__39588__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50275_SHARP_));
} else {
return and__39588__auto__;
}
});
;})(inst_50577,inst_50578,inst_50579,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50581 = cljs.core.filter.call(null,inst_50580,files);
var inst_50582 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50583 = cljs.core.concat.call(null,inst_50581,inst_50582);
var state_50679__$1 = (function (){var statearr_50694 = state_50679;
(statearr_50694[(12)] = inst_50583);

(statearr_50694[(17)] = inst_50577);

(statearr_50694[(18)] = inst_50579);

return statearr_50694;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50695_50779 = state_50679__$1;
(statearr_50695_50779[(1)] = (16));

} else {
var statearr_50696_50780 = state_50679__$1;
(statearr_50696_50780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (15))){
var inst_50567 = (state_50679[(2)]);
var state_50679__$1 = state_50679;
var statearr_50697_50781 = state_50679__$1;
(statearr_50697_50781[(2)] = inst_50567);

(statearr_50697_50781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (21))){
var inst_50593 = (state_50679[(19)]);
var inst_50593__$1 = (state_50679[(2)]);
var inst_50594 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50593__$1);
var state_50679__$1 = (function (){var statearr_50698 = state_50679;
(statearr_50698[(19)] = inst_50593__$1);

return statearr_50698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50679__$1,(22),inst_50594);
} else {
if((state_val_50680 === (31))){
var inst_50677 = (state_50679[(2)]);
var state_50679__$1 = state_50679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50679__$1,inst_50677);
} else {
if((state_val_50680 === (32))){
var inst_50633 = (state_50679[(16)]);
var inst_50638 = inst_50633.cljs$lang$protocol_mask$partition0$;
var inst_50639 = (inst_50638 & (64));
var inst_50640 = inst_50633.cljs$core$ISeq$;
var inst_50641 = (inst_50639) || (inst_50640);
var state_50679__$1 = state_50679;
if(cljs.core.truth_(inst_50641)){
var statearr_50699_50782 = state_50679__$1;
(statearr_50699_50782[(1)] = (35));

} else {
var statearr_50700_50783 = state_50679__$1;
(statearr_50700_50783[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (40))){
var inst_50654 = (state_50679[(20)]);
var inst_50653 = (state_50679[(2)]);
var inst_50654__$1 = cljs.core.get.call(null,inst_50653,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50655 = cljs.core.get.call(null,inst_50653,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50656 = cljs.core.not_empty.call(null,inst_50654__$1);
var state_50679__$1 = (function (){var statearr_50701 = state_50679;
(statearr_50701[(20)] = inst_50654__$1);

(statearr_50701[(21)] = inst_50655);

return statearr_50701;
})();
if(cljs.core.truth_(inst_50656)){
var statearr_50702_50784 = state_50679__$1;
(statearr_50702_50784[(1)] = (41));

} else {
var statearr_50703_50785 = state_50679__$1;
(statearr_50703_50785[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (33))){
var state_50679__$1 = state_50679;
var statearr_50704_50786 = state_50679__$1;
(statearr_50704_50786[(2)] = false);

(statearr_50704_50786[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (13))){
var inst_50553 = (state_50679[(22)]);
var inst_50557 = cljs.core.chunk_first.call(null,inst_50553);
var inst_50558 = cljs.core.chunk_rest.call(null,inst_50553);
var inst_50559 = cljs.core.count.call(null,inst_50557);
var inst_50540 = inst_50558;
var inst_50541 = inst_50557;
var inst_50542 = inst_50559;
var inst_50543 = (0);
var state_50679__$1 = (function (){var statearr_50705 = state_50679;
(statearr_50705[(7)] = inst_50541);

(statearr_50705[(8)] = inst_50540);

(statearr_50705[(9)] = inst_50543);

(statearr_50705[(10)] = inst_50542);

return statearr_50705;
})();
var statearr_50706_50787 = state_50679__$1;
(statearr_50706_50787[(2)] = null);

(statearr_50706_50787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (22))){
var inst_50601 = (state_50679[(23)]);
var inst_50597 = (state_50679[(24)]);
var inst_50593 = (state_50679[(19)]);
var inst_50596 = (state_50679[(25)]);
var inst_50596__$1 = (state_50679[(2)]);
var inst_50597__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50596__$1);
var inst_50598 = (function (){var all_files = inst_50593;
var res_SINGLEQUOTE_ = inst_50596__$1;
var res = inst_50597__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50601,inst_50597,inst_50593,inst_50596,inst_50596__$1,inst_50597__$1,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50276_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50276_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50601,inst_50597,inst_50593,inst_50596,inst_50596__$1,inst_50597__$1,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50599 = cljs.core.filter.call(null,inst_50598,inst_50596__$1);
var inst_50600 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50601__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50600);
var inst_50602 = cljs.core.not_empty.call(null,inst_50601__$1);
var state_50679__$1 = (function (){var statearr_50707 = state_50679;
(statearr_50707[(23)] = inst_50601__$1);

(statearr_50707[(24)] = inst_50597__$1);

(statearr_50707[(26)] = inst_50599);

(statearr_50707[(25)] = inst_50596__$1);

return statearr_50707;
})();
if(cljs.core.truth_(inst_50602)){
var statearr_50708_50788 = state_50679__$1;
(statearr_50708_50788[(1)] = (23));

} else {
var statearr_50709_50789 = state_50679__$1;
(statearr_50709_50789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (36))){
var state_50679__$1 = state_50679;
var statearr_50710_50790 = state_50679__$1;
(statearr_50710_50790[(2)] = false);

(statearr_50710_50790[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (41))){
var inst_50654 = (state_50679[(20)]);
var inst_50658 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50659 = cljs.core.map.call(null,inst_50658,inst_50654);
var inst_50660 = cljs.core.pr_str.call(null,inst_50659);
var inst_50661 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_50660)].join('');
var inst_50662 = figwheel.client.utils.log.call(null,inst_50661);
var state_50679__$1 = state_50679;
var statearr_50711_50791 = state_50679__$1;
(statearr_50711_50791[(2)] = inst_50662);

(statearr_50711_50791[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (43))){
var inst_50655 = (state_50679[(21)]);
var inst_50665 = (state_50679[(2)]);
var inst_50666 = cljs.core.not_empty.call(null,inst_50655);
var state_50679__$1 = (function (){var statearr_50712 = state_50679;
(statearr_50712[(27)] = inst_50665);

return statearr_50712;
})();
if(cljs.core.truth_(inst_50666)){
var statearr_50713_50792 = state_50679__$1;
(statearr_50713_50792[(1)] = (44));

} else {
var statearr_50714_50793 = state_50679__$1;
(statearr_50714_50793[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (29))){
var inst_50601 = (state_50679[(23)]);
var inst_50633 = (state_50679[(16)]);
var inst_50597 = (state_50679[(24)]);
var inst_50593 = (state_50679[(19)]);
var inst_50599 = (state_50679[(26)]);
var inst_50596 = (state_50679[(25)]);
var inst_50629 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50632 = (function (){var all_files = inst_50593;
var res_SINGLEQUOTE_ = inst_50596;
var res = inst_50597;
var files_not_loaded = inst_50599;
var dependencies_that_loaded = inst_50601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50601,inst_50633,inst_50597,inst_50593,inst_50599,inst_50596,inst_50629,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50631){
var map__50715 = p__50631;
var map__50715__$1 = ((((!((map__50715 == null)))?((((map__50715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50715):map__50715);
var namespace = cljs.core.get.call(null,map__50715__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50601,inst_50633,inst_50597,inst_50593,inst_50599,inst_50596,inst_50629,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50633__$1 = cljs.core.group_by.call(null,inst_50632,inst_50599);
var inst_50635 = (inst_50633__$1 == null);
var inst_50636 = cljs.core.not.call(null,inst_50635);
var state_50679__$1 = (function (){var statearr_50717 = state_50679;
(statearr_50717[(16)] = inst_50633__$1);

(statearr_50717[(28)] = inst_50629);

return statearr_50717;
})();
if(inst_50636){
var statearr_50718_50794 = state_50679__$1;
(statearr_50718_50794[(1)] = (32));

} else {
var statearr_50719_50795 = state_50679__$1;
(statearr_50719_50795[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (44))){
var inst_50655 = (state_50679[(21)]);
var inst_50668 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50655);
var inst_50669 = cljs.core.pr_str.call(null,inst_50668);
var inst_50670 = [cljs.core.str("not required: "),cljs.core.str(inst_50669)].join('');
var inst_50671 = figwheel.client.utils.log.call(null,inst_50670);
var state_50679__$1 = state_50679;
var statearr_50720_50796 = state_50679__$1;
(statearr_50720_50796[(2)] = inst_50671);

(statearr_50720_50796[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (6))){
var inst_50574 = (state_50679[(2)]);
var state_50679__$1 = state_50679;
var statearr_50721_50797 = state_50679__$1;
(statearr_50721_50797[(2)] = inst_50574);

(statearr_50721_50797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (28))){
var inst_50599 = (state_50679[(26)]);
var inst_50626 = (state_50679[(2)]);
var inst_50627 = cljs.core.not_empty.call(null,inst_50599);
var state_50679__$1 = (function (){var statearr_50722 = state_50679;
(statearr_50722[(29)] = inst_50626);

return statearr_50722;
})();
if(cljs.core.truth_(inst_50627)){
var statearr_50723_50798 = state_50679__$1;
(statearr_50723_50798[(1)] = (29));

} else {
var statearr_50724_50799 = state_50679__$1;
(statearr_50724_50799[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (25))){
var inst_50597 = (state_50679[(24)]);
var inst_50613 = (state_50679[(2)]);
var inst_50614 = cljs.core.not_empty.call(null,inst_50597);
var state_50679__$1 = (function (){var statearr_50725 = state_50679;
(statearr_50725[(30)] = inst_50613);

return statearr_50725;
})();
if(cljs.core.truth_(inst_50614)){
var statearr_50726_50800 = state_50679__$1;
(statearr_50726_50800[(1)] = (26));

} else {
var statearr_50727_50801 = state_50679__$1;
(statearr_50727_50801[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (34))){
var inst_50648 = (state_50679[(2)]);
var state_50679__$1 = state_50679;
if(cljs.core.truth_(inst_50648)){
var statearr_50728_50802 = state_50679__$1;
(statearr_50728_50802[(1)] = (38));

} else {
var statearr_50729_50803 = state_50679__$1;
(statearr_50729_50803[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (17))){
var state_50679__$1 = state_50679;
var statearr_50730_50804 = state_50679__$1;
(statearr_50730_50804[(2)] = recompile_dependents);

(statearr_50730_50804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (3))){
var state_50679__$1 = state_50679;
var statearr_50731_50805 = state_50679__$1;
(statearr_50731_50805[(2)] = null);

(statearr_50731_50805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (12))){
var inst_50570 = (state_50679[(2)]);
var state_50679__$1 = state_50679;
var statearr_50732_50806 = state_50679__$1;
(statearr_50732_50806[(2)] = inst_50570);

(statearr_50732_50806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (2))){
var inst_50532 = (state_50679[(13)]);
var inst_50539 = cljs.core.seq.call(null,inst_50532);
var inst_50540 = inst_50539;
var inst_50541 = null;
var inst_50542 = (0);
var inst_50543 = (0);
var state_50679__$1 = (function (){var statearr_50733 = state_50679;
(statearr_50733[(7)] = inst_50541);

(statearr_50733[(8)] = inst_50540);

(statearr_50733[(9)] = inst_50543);

(statearr_50733[(10)] = inst_50542);

return statearr_50733;
})();
var statearr_50734_50807 = state_50679__$1;
(statearr_50734_50807[(2)] = null);

(statearr_50734_50807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (23))){
var inst_50601 = (state_50679[(23)]);
var inst_50597 = (state_50679[(24)]);
var inst_50593 = (state_50679[(19)]);
var inst_50599 = (state_50679[(26)]);
var inst_50596 = (state_50679[(25)]);
var inst_50604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50606 = (function (){var all_files = inst_50593;
var res_SINGLEQUOTE_ = inst_50596;
var res = inst_50597;
var files_not_loaded = inst_50599;
var dependencies_that_loaded = inst_50601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50601,inst_50597,inst_50593,inst_50599,inst_50596,inst_50604,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50605){
var map__50735 = p__50605;
var map__50735__$1 = ((((!((map__50735 == null)))?((((map__50735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50735):map__50735);
var request_url = cljs.core.get.call(null,map__50735__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50601,inst_50597,inst_50593,inst_50599,inst_50596,inst_50604,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50607 = cljs.core.reverse.call(null,inst_50601);
var inst_50608 = cljs.core.map.call(null,inst_50606,inst_50607);
var inst_50609 = cljs.core.pr_str.call(null,inst_50608);
var inst_50610 = figwheel.client.utils.log.call(null,inst_50609);
var state_50679__$1 = (function (){var statearr_50737 = state_50679;
(statearr_50737[(31)] = inst_50604);

return statearr_50737;
})();
var statearr_50738_50808 = state_50679__$1;
(statearr_50738_50808[(2)] = inst_50610);

(statearr_50738_50808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (35))){
var state_50679__$1 = state_50679;
var statearr_50739_50809 = state_50679__$1;
(statearr_50739_50809[(2)] = true);

(statearr_50739_50809[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (19))){
var inst_50583 = (state_50679[(12)]);
var inst_50589 = figwheel.client.file_reloading.expand_files.call(null,inst_50583);
var state_50679__$1 = state_50679;
var statearr_50740_50810 = state_50679__$1;
(statearr_50740_50810[(2)] = inst_50589);

(statearr_50740_50810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (11))){
var state_50679__$1 = state_50679;
var statearr_50741_50811 = state_50679__$1;
(statearr_50741_50811[(2)] = null);

(statearr_50741_50811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (9))){
var inst_50572 = (state_50679[(2)]);
var state_50679__$1 = state_50679;
var statearr_50742_50812 = state_50679__$1;
(statearr_50742_50812[(2)] = inst_50572);

(statearr_50742_50812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (5))){
var inst_50543 = (state_50679[(9)]);
var inst_50542 = (state_50679[(10)]);
var inst_50545 = (inst_50543 < inst_50542);
var inst_50546 = inst_50545;
var state_50679__$1 = state_50679;
if(cljs.core.truth_(inst_50546)){
var statearr_50743_50813 = state_50679__$1;
(statearr_50743_50813[(1)] = (7));

} else {
var statearr_50744_50814 = state_50679__$1;
(statearr_50744_50814[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (14))){
var inst_50553 = (state_50679[(22)]);
var inst_50562 = cljs.core.first.call(null,inst_50553);
var inst_50563 = figwheel.client.file_reloading.eval_body.call(null,inst_50562,opts);
var inst_50564 = cljs.core.next.call(null,inst_50553);
var inst_50540 = inst_50564;
var inst_50541 = null;
var inst_50542 = (0);
var inst_50543 = (0);
var state_50679__$1 = (function (){var statearr_50745 = state_50679;
(statearr_50745[(7)] = inst_50541);

(statearr_50745[(8)] = inst_50540);

(statearr_50745[(9)] = inst_50543);

(statearr_50745[(10)] = inst_50542);

(statearr_50745[(32)] = inst_50563);

return statearr_50745;
})();
var statearr_50746_50815 = state_50679__$1;
(statearr_50746_50815[(2)] = null);

(statearr_50746_50815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (45))){
var state_50679__$1 = state_50679;
var statearr_50747_50816 = state_50679__$1;
(statearr_50747_50816[(2)] = null);

(statearr_50747_50816[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (26))){
var inst_50601 = (state_50679[(23)]);
var inst_50597 = (state_50679[(24)]);
var inst_50593 = (state_50679[(19)]);
var inst_50599 = (state_50679[(26)]);
var inst_50596 = (state_50679[(25)]);
var inst_50616 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50618 = (function (){var all_files = inst_50593;
var res_SINGLEQUOTE_ = inst_50596;
var res = inst_50597;
var files_not_loaded = inst_50599;
var dependencies_that_loaded = inst_50601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50601,inst_50597,inst_50593,inst_50599,inst_50596,inst_50616,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50617){
var map__50748 = p__50617;
var map__50748__$1 = ((((!((map__50748 == null)))?((((map__50748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50748):map__50748);
var namespace = cljs.core.get.call(null,map__50748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50601,inst_50597,inst_50593,inst_50599,inst_50596,inst_50616,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50619 = cljs.core.map.call(null,inst_50618,inst_50597);
var inst_50620 = cljs.core.pr_str.call(null,inst_50619);
var inst_50621 = figwheel.client.utils.log.call(null,inst_50620);
var inst_50622 = (function (){var all_files = inst_50593;
var res_SINGLEQUOTE_ = inst_50596;
var res = inst_50597;
var files_not_loaded = inst_50599;
var dependencies_that_loaded = inst_50601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50601,inst_50597,inst_50593,inst_50599,inst_50596,inst_50616,inst_50618,inst_50619,inst_50620,inst_50621,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50601,inst_50597,inst_50593,inst_50599,inst_50596,inst_50616,inst_50618,inst_50619,inst_50620,inst_50621,state_val_50680,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50623 = setTimeout(inst_50622,(10));
var state_50679__$1 = (function (){var statearr_50750 = state_50679;
(statearr_50750[(33)] = inst_50621);

(statearr_50750[(34)] = inst_50616);

return statearr_50750;
})();
var statearr_50751_50817 = state_50679__$1;
(statearr_50751_50817[(2)] = inst_50623);

(statearr_50751_50817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (16))){
var state_50679__$1 = state_50679;
var statearr_50752_50818 = state_50679__$1;
(statearr_50752_50818[(2)] = reload_dependents);

(statearr_50752_50818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (38))){
var inst_50633 = (state_50679[(16)]);
var inst_50650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50633);
var state_50679__$1 = state_50679;
var statearr_50753_50819 = state_50679__$1;
(statearr_50753_50819[(2)] = inst_50650);

(statearr_50753_50819[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (30))){
var state_50679__$1 = state_50679;
var statearr_50754_50820 = state_50679__$1;
(statearr_50754_50820[(2)] = null);

(statearr_50754_50820[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (10))){
var inst_50553 = (state_50679[(22)]);
var inst_50555 = cljs.core.chunked_seq_QMARK_.call(null,inst_50553);
var state_50679__$1 = state_50679;
if(inst_50555){
var statearr_50755_50821 = state_50679__$1;
(statearr_50755_50821[(1)] = (13));

} else {
var statearr_50756_50822 = state_50679__$1;
(statearr_50756_50822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (18))){
var inst_50587 = (state_50679[(2)]);
var state_50679__$1 = state_50679;
if(cljs.core.truth_(inst_50587)){
var statearr_50757_50823 = state_50679__$1;
(statearr_50757_50823[(1)] = (19));

} else {
var statearr_50758_50824 = state_50679__$1;
(statearr_50758_50824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (42))){
var state_50679__$1 = state_50679;
var statearr_50759_50825 = state_50679__$1;
(statearr_50759_50825[(2)] = null);

(statearr_50759_50825[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (37))){
var inst_50645 = (state_50679[(2)]);
var state_50679__$1 = state_50679;
var statearr_50760_50826 = state_50679__$1;
(statearr_50760_50826[(2)] = inst_50645);

(statearr_50760_50826[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50680 === (8))){
var inst_50540 = (state_50679[(8)]);
var inst_50553 = (state_50679[(22)]);
var inst_50553__$1 = cljs.core.seq.call(null,inst_50540);
var state_50679__$1 = (function (){var statearr_50761 = state_50679;
(statearr_50761[(22)] = inst_50553__$1);

return statearr_50761;
})();
if(inst_50553__$1){
var statearr_50762_50827 = state_50679__$1;
(statearr_50762_50827[(1)] = (10));

} else {
var statearr_50763_50828 = state_50679__$1;
(statearr_50763_50828[(1)] = (11));

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
}
});})(c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__41737__auto__,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto____0 = (function (){
var statearr_50767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50767[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto__);

(statearr_50767[(1)] = (1));

return statearr_50767;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto____1 = (function (state_50679){
while(true){
var ret_value__41739__auto__ = (function (){try{while(true){
var result__41740__auto__ = switch__41737__auto__.call(null,state_50679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41740__auto__;
}
break;
}
}catch (e50768){if((e50768 instanceof Object)){
var ex__41741__auto__ = e50768;
var statearr_50769_50829 = state_50679;
(statearr_50769_50829[(5)] = ex__41741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50830 = state_50679;
state_50679 = G__50830;
continue;
} else {
return ret_value__41739__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto__ = function(state_50679){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto____1.call(this,state_50679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41738__auto__;
})()
;})(switch__41737__auto__,c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__41760__auto__ = (function (){var statearr_50770 = f__41759__auto__.call(null);
(statearr_50770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41758__auto__);

return statearr_50770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41760__auto__);
});})(c__41758__auto__,map__50525,map__50525__$1,opts,before_jsload,on_jsload,reload_dependents,map__50526,map__50526__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__41758__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50833,link){
var map__50836 = p__50833;
var map__50836__$1 = ((((!((map__50836 == null)))?((((map__50836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50836):map__50836);
var file = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__50836,map__50836__$1,file){
return (function (p1__50831_SHARP_,p2__50832_SHARP_){
if(cljs.core._EQ_.call(null,p1__50831_SHARP_,p2__50832_SHARP_)){
return p1__50831_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__50836,map__50836__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50842){
var map__50843 = p__50842;
var map__50843__$1 = ((((!((map__50843 == null)))?((((map__50843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50843):map__50843);
var match_length = cljs.core.get.call(null,map__50843__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50843__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50838_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50838_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args50845 = [];
var len__40658__auto___50848 = arguments.length;
var i__40659__auto___50849 = (0);
while(true){
if((i__40659__auto___50849 < len__40658__auto___50848)){
args50845.push((arguments[i__40659__auto___50849]));

var G__50850 = (i__40659__auto___50849 + (1));
i__40659__auto___50849 = G__50850;
continue;
} else {
}
break;
}

var G__50847 = args50845.length;
switch (G__50847) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50845.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50852_SHARP_,p2__50853_SHARP_){
return cljs.core.assoc.call(null,p1__50852_SHARP_,cljs.core.get.call(null,p2__50853_SHARP_,key),p2__50853_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__50854){
var map__50857 = p__50854;
var map__50857__$1 = ((((!((map__50857 == null)))?((((map__50857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50857):map__50857);
var f_data = map__50857__$1;
var file = cljs.core.get.call(null,map__50857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50859,files_msg){
var map__50866 = p__50859;
var map__50866__$1 = ((((!((map__50866 == null)))?((((map__50866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50866):map__50866);
var opts = map__50866__$1;
var on_cssload = cljs.core.get.call(null,map__50866__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__50868_50872 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__50869_50873 = null;
var count__50870_50874 = (0);
var i__50871_50875 = (0);
while(true){
if((i__50871_50875 < count__50870_50874)){
var f_50876 = cljs.core._nth.call(null,chunk__50869_50873,i__50871_50875);
figwheel.client.file_reloading.reload_css_file.call(null,f_50876);

var G__50877 = seq__50868_50872;
var G__50878 = chunk__50869_50873;
var G__50879 = count__50870_50874;
var G__50880 = (i__50871_50875 + (1));
seq__50868_50872 = G__50877;
chunk__50869_50873 = G__50878;
count__50870_50874 = G__50879;
i__50871_50875 = G__50880;
continue;
} else {
var temp__4657__auto___50881 = cljs.core.seq.call(null,seq__50868_50872);
if(temp__4657__auto___50881){
var seq__50868_50882__$1 = temp__4657__auto___50881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50868_50882__$1)){
var c__40403__auto___50883 = cljs.core.chunk_first.call(null,seq__50868_50882__$1);
var G__50884 = cljs.core.chunk_rest.call(null,seq__50868_50882__$1);
var G__50885 = c__40403__auto___50883;
var G__50886 = cljs.core.count.call(null,c__40403__auto___50883);
var G__50887 = (0);
seq__50868_50872 = G__50884;
chunk__50869_50873 = G__50885;
count__50870_50874 = G__50886;
i__50871_50875 = G__50887;
continue;
} else {
var f_50888 = cljs.core.first.call(null,seq__50868_50882__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_50888);

var G__50889 = cljs.core.next.call(null,seq__50868_50882__$1);
var G__50890 = null;
var G__50891 = (0);
var G__50892 = (0);
seq__50868_50872 = G__50889;
chunk__50869_50873 = G__50890;
count__50870_50874 = G__50891;
i__50871_50875 = G__50892;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__50866,map__50866__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__50866,map__50866__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1458155580694