package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Message struct {
	Name string      `json:"name"`
	Data interface{} `json:"data"`
}

type Client struct {
	send chan Message
}

func (client *Client) write() {
	for msg := range client.send {
		// TODO: socket.sendJSON(msg)
		fmt.Printf("%#v\n", msg)
	}
}

func (client *Client) subscribeChannels() {
	for {
		time.Sleep(r())
		client.send <- Message{"channel add", ""}
	}
}

func (client *Client) subscribeMessages() {
	for {
		time.Sleep(r())
		client.send <- Message{"message add", ""}
	}
}

func r() time.Duration {
	return time.Millisecond * time.Duration(rand.Intn(1000))
}

func NewClient() *Client {
	return &Client{
		make(chan Message),
	}
}

func main() {
	client := NewClient()
	go client.subscribeChannels()
	go client.subscribeMessages()
	client.write()
	// client := Client{
	// 	make(chan Message),
	// }

	// msgChan := make(chan string)
	// go func() {
	// 	msgChan <- "Hello"
	// }()

	// msg := <-msgChan
	// fmt.Println(msg)
}
