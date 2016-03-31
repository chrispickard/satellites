(ns space-views.core
  (:require-macros [cljs.core.async.macros :as m :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :as a]
            [cljs-time.format :as f :refer [parse unparse formatters]]
            [cljs-http.client :as http] ))

(enable-console-print!)
(defn by-id [id]
  (.getElementById js/document id))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (r/atom {}))
(defonce in-format (f/formatters :date-hour-minute-second))
(defonce out-format (f/formatters :date-hour-minute-second))

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

(defn swap-to
  ""
  [value name target]
  (println target)
  (swap! value assoc (keyword name) target)
  (println @value))


(defn last-date
  ""
  [result]
  (:date (last result)))

(defn input-elem
  "an input elem that updates on change"
  [id name type value]
  [:input {:id id
           :name name
           :class "form-control"
           :type type
           :placeholder name
           :required ""
           :value ((keyword id) @app-state)
           :on-change #(swap! value assoc (keyword id) (-> % .-target .-value))}])

(defn lat-input
  ""
  [email-address-atom]
  (input-elem "lat" "lat" "text" email-address-atom)
  )

(defn lon-input
  ""
  [email-address-atom]
  (input-elem "lon" "lon" "text" email-address-atom)
  )


(defn swap-with-new-input
  ""
  [lat lon]
  (println lat lon)
  (go (swap! app-state assoc-in [:location]
             (:body (a/<! (perform-request lat lon))))))

(defn space-component []
  [:h2 (str (last-date (:results (:location @app-state))))])

(defn to-float
  "converts a numeric string to a float"
  [s]
  (js/parseFloat s)
  )

(defn click-button
  ""
  []
  (swap-with-new-input (js/parseFloat (:lat @app-state)) (js/parseFloat (:lon @app-state)))
  )

(defn button-component []
  (fn []
    [:form
     [lat-input app-state]
     [lon-input app-state]
     [:input {:type "button" :value "submit"
              :on-click click-button}]]))


(defn ^:export run []
  (r/render [space-component] (by-id "app"))
  (r/render [button-component] (by-id "button"))
  )

(run)
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
