(ns space-views.core
  (:require-macros [cljs.core.async.macros :as m :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :as a]
            [cljs-time.format :as f :refer [parse unparse formatters]]
            [cljs-http.client :as http] ))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (r/atom {:address ""}))
(def in-format (f/formatters :date-hour-minute-second))
(def out-format (f/formatters :year))

(defn by-id [id]
  (.getElementById js/document id))

(defn perform-request
  ""
  [lat lon]
  (http/get
   "https://api.nasa.gov/planetary/earth/assets"
   {:with-credentials? false
    :query-params
    {"api_key" "TBcEHIi4gvvD9CxbSo1ZBkTnouINoSzV6VsY67g9"
     "lat" lat
     "lon" lon}})
  )

(defn perform-request-geocode
  ""
  [placename]
  (http/get
   "http://api.opencagedata.com/geocode/v1/json"
   {:with-credentials? false
    :query-params
    {"key" "886be0e3768c1f8d8f03333e60130d54"
     "q" placename}})
  )

(defn swap-to
  ""
  [value name target]
  (swap! value assoc (keyword name) target))


(defn most-recent-date
  ""
  [result]
  (:date (last result)))

(defn input-element
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

(defn address-input
  ""
  [address-atom]
  (input-element "address" "address" "text" address-atom))


(defn swap-with-new-input
  ""
  [lat lon]
  (go (swap! app-state assoc-in [:location]
             (:body (a/<! (perform-request lat lon))))))

(defn format-date
  ""
  [iso-date]
  (when iso-date
    (let [in-date (parse in-format iso-date)]
      (when in-date
        (unparse out-format in-date)))))

(defn get-iso-date
  ""
  [m]
  (most-recent-date (:results (:location m))))

(defn to-float
  "converts a numeric string to a float"
  [s]
  (js/parseFloat s))

(defn space-component []
  [:h2 (format-date (get-iso-date @app-state))])

(defn click-button
  ""
  []
  (go (let [m (a/<! (perform-request-geocode (:address @app-state)))]
        (when (:success m)
          (let [geometry (-> m
                             :body
                             :results
                             first
                             :geometry)]
            (swap-with-new-input
             (to-float (:lat geometry))
             (to-float (:lng geometry))))))))

(defn button-component []
  (fn []
    [:form
     [address-input app-state]
     [:input {:type "button"
              :value "submit"
              :on-click click-button}]]))


(defn ^:export run []
  (r/render [space-component] (by-id "app"))
  (r/render [button-component] (by-id "button")))

(run)
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
