(ns space-views.core
  (:require-macros [cljs.core.async.macros :as m :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :as a]
            [cljs-http.client :as http] ))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:pic ""}))

(go (reset! app-state assoc-in [:pic] (a/<! (http/get "https://api.nasa.gov/planetary/earth/assets"
                                                      {:with-credentials? false
                                                       :query-params
                                                       {"api_key" "TBcEHIi4gvvD9CxbSo1ZBkTnouINoSzV6VsY67g9"
                                                        "lat" 39.780889
                                                        "lon" -84.117724 }})))
    (println (:pic @app-state)))

;; (defn space-component []
;;   [:img {:src (:pic @app-state)}])
;; (defn new-pic-component

;;   )

;; (r/render [space-component] (.getElementById js/document "app"))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
