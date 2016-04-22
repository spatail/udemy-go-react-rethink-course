package main

import (
	"net/http"
)

type Channel struct {
	Id   string `json:"id"` // field tag to specify special encoding, json is the package we are providing tagging for
	Name string `json:"name"`
}

func main() {
	router := NewRouter()

	router.Handle("channel add", addChannel)

	http.Handle("/", router)
	http.ListenAndServe(":4000", nil)
}
