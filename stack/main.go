package main

import (
	"fmt"
	"izzy/queue/queue"
)

func main() {
	queue := queue.Init()

	queue.Enqueue("first")
	queue.Enqueue("second")
	queue.Show()
	size := queue.Size

	for i := 0; i < size; i++ {
		var shouldBeItem string

		if(i == 0) {
			shouldBeItem = "first"	
		} else {
			shouldBeItem = "second"
		}

		dequeuedItem, _ := queue.Dequeue()

		fmt.Println(dequeuedItem == shouldBeItem)
	}
	queue.Show()

	if queue.Size == 0 {
		_, err := queue.Dequeue()

		fmt.Println("returns err when size 0", err != nil)
		fmt.Println(err)
	}
}