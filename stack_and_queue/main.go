package main

import (
	"fmt"
	"izzy/queue/queue"
	"izzy/queue/stack"
)

func main() {
	queue := queue.Init()

	queue.Enqueue("first")
	queue.Enqueue("second")
	queue.Show()
	size := queue.Size

	for i := 0; i < size; i++ {
		var shouldBeItem string

		if i == 0 {
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

	fmt.Println("Testing Stack...")
	stack := stack.Init(10)
	stack.Show()

	item1, item2 := "first", "second"

	stack.Push(item1)
	stack.Push(item2)
	stack.Show()
	shouldBeItem2, _ := stack.Pop()

	fmt.Println(shouldBeItem2 == item2)
	fmt.Println(stack.Size == 1)
	stack.Show()

	for i := 0; i < 10; i++ {
		err := stack.Push(fmt.Sprint(i))

		if i < 9 {
			fmt.Println(err == nil)
		} else {
			fmt.Println(err != nil)
			fmt.Println(err)
		}
	}

	fmt.Println(stack.Size)
	stack.Show()

	stackSize := stack.Size

	for i := 0; i < stackSize; i++ {
		fmt.Println(stack.Pop())
	}

	fmt.Println(stack.Size == 0)
	stack.Show()
}
