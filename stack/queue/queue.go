package queue

import "fmt"

type Queue struct {
	items []string
	Size int
}

func Init() (*Queue) {
	return &Queue{items: make([] string, 0, 10) }
}

func (q *Queue) Enqueue(item string) {
	q.items = append(q.items, item) 
	q.Size = len(q.items)
}

type NothingToDequeueError struct{}

func (NothingToDequeueError) Error() string {
	return "Queue is empty, nothing to dequeue." 
}

func (q *Queue) Dequeue() (string, error) {
	if q.Size == 0 {
		return "", NothingToDequeueError{}
	}
	item := q.items[0]
	q.items = q.items[1:]
	q.Size = len(q.items) 
	
	return item, nil
}

func (q *Queue) Show() {
	fmt.Printf("Queue with Size of  %v: ", q.Size)
	fmt.Println(q.items)
}  
