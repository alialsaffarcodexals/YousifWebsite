package main

import (
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("./"))

	mux.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" {
			http.ServeFile(w, r, "login.html")
			return
		}
		fs.ServeHTTP(w, r)
	}))

	log.Println("Serving on 0.0.0.0:1234")
	if err := http.ListenAndServe("0.0.0.0:1234", mux); err != nil {
		log.Fatal(err)
	}
}
