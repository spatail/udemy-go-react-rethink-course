package main

import (
	r "github.com/dancannon/gorethink"
	"log"
	"net/http"
)

type Channel struct {
	Id   string `json:"id" gorethink:"id,omitempty"` // field tag to specify special encoding, json is the package we are providing tagging for
	Name string `json:"name" gorethink:"name"`
}

type User struct {
	Id   string `gorethink:"id,omitempty"`
	Name string `gorethink:"name"`
}

func main() {
	session, err := r.Connect(r.ConnectOpts{
		Address:  "localhost:28015",
		Database: "rtsupport",
	})

	if err != nil {
		log.Panic(err.Error())
	}

	router := NewRouter(session)

	router.Handle("channel add", addChannel)
	router.Handle("channel subscribe", subscribeChannel)
	http.Handle("/", router)
	http.ListenAndServe(":4000", nil)
}
