package main

import (
	"fmt"
	"github.com/mitchellh/mapstructure"
)

func addChannel(client *Client, data interface{}) {
	var channel Channel
	mapstructure.Decode(data, &channel)
	fmt.Printf("%#v\n", channel)
	channel.Id = "ABC1234"
	message := Message{
		"channel add",
		channel,
	}
	client.send <- message
}
