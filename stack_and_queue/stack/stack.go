package stack

import "fmt"

type Stack struct {
	items   []string
	Size    int
	MaxSize int
}

func Init(maxSize int) *Stack {
	return &Stack{items: make([]string, 0, maxSize), MaxSize: maxSize}
}

type CannotPushError struct{}

func (CannotPushError) Error() string {
	return "Stack is full, cannot push."
}

func (s *Stack) Push(item string) error {
	if s.Size == s.MaxSize {
		return CannotPushError{}
	}
	s.items = append(s.items, item)
	s.Size = len(s.items)

	return nil
}

type NothingToPopError struct{}

func (NothingToPopError) Error() string {
	return "Stack is empty, nothing to top."
}

func (s *Stack) Pop() (string, error) {
	if s.Size == 0 {
		return "", NothingToPopError{}
	}
	item := s.items[len(s.items)-1]
	s.items = s.items[:len(s.items)-1]
	s.Size = len(s.items)

	return item, nil
}

func (s *Stack) Show() {
	fmt.Printf("Stack with Size of  %v: ", s.Size)
	fmt.Println(s.items)
}
