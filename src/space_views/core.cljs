(ns space-views.core
  (:require-macros [cljs.core.async.macros :as m :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :as a]
            [cljs-http.client :as http] ))

(enable-console-print!)
(defn by-id [id]
  (.getElementById js/document id))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (r/atom {}))

(defn perform-request
  ""
  [lat lon]
  (println "requesting")
  (http/get
   "https://api.nasa.gov/planetary/earth/assets"
   {:with-credentials? false
    :query-params
    {"api_key" "TBcEHIi4gvvD9CxbSo1ZBkTnouINoSzV6VsY67g9"
     "lat" lat
     "lon" lon}})
  )

(defn last-date
  ""
  [result]
  (:date (last (:location result))))

(defn swap-with-new-input
  ""
  [lat lon]
  (println lat lon)
  (go (swap! app-state assoc-in [:location]
             (:results (:body (a/<! (perform-request lat lon)))))))

(defn space-component []
  [:h2 (fnil (:date (last (:location @app-state))) "nothing")])

(defn button-component []
  [:input {:type "button" :value "new pic bro"
           :on-click #(swap-with-new-input 39 -45)}])


(defn ^:export run []
  (r/render [space-component] (by-id "app"))
  (r/render [button-component] (by-id "button")))

(run)
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
