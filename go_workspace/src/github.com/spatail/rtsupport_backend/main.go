package main

import (
	"fmt"
	"github.com/gorilla/websocket"
	"github.com/mitchellh/mapstructure"
	"net/http"
	"time"
)

type Message struct {
	Name string      `json:"name"`
	Data interface{} `json:"data"`
}

type Channel struct {
	Id   string `json:"id"` // field tag to specify special encoding, json is the package we are providing tagging for
	Name string `json:"name"`
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":4000", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprintf(w, "Hello from go")
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println(err)
		return
	}
	for {
		var inMessage Message
		if err := socket.ReadJSON(&inMessage); err != nil {
			fmt.Println(err)
		}
		fmt.Printf("%#v\n", inMessage)
		switch inMessage.Name {
		case "channel add":
			err := addChannel(inMessage.Data)
			if err != nil {
				outMessage := Message{"error", err}
				if err := socket.WriteJSON(&outMessage); err != nil {
					fmt.Println(err)
					break
				}
			}
		case "channel subscribe":
			go subscribeChannel(socket)
		}
	}
}

func addChannel(data interface{}) error {
	var channel Channel
	// channelMap := data.(map[string]interface{})
	// channel.Name := channelMap["name"].(string)
	err := mapstructure.Decode(data, &channel)
	if err != nil {
		return err
	}
	channel.Id = "1"
	// fmt.Printf("%#v\n", channel)
	fmt.Println("Added channel")
	return nil
}

func subscribeChannel(socket *websocket.Conn) {
	// TODO: rethinkDB Query / changefeed
	for {
		time.Sleep(time.Second * 1)
		message := Message{"channel add", Channel{"1", "Software Support"}}
		socket.WriteJSON(message)
		fmt.Println("sent new channel")
	}
}
