package main

import (
	"fmt"
	"os"
	"strings"
	"text/template"

	"github.com/gocolly/colly"
)

type Book struct {
	Category string
	Image    string
}

// Make template from data
func makePug(books []Book) {

	template, _ := template.ParseFiles("template.tmpl")
	newPug, _ := os.Create("best-books.pug")
	err := template.Execute(newPug, books)

	if err != nil {
		panic(err)
	}
}

func main() {
	products := []Book{}
	var bookCategorys []string
	var bookImages []string

	c := colly.NewCollector()

	// Get Book Categorys
	c.OnHTML("h4.category__copy", func(e *colly.HTMLElement) {
		bookCategorys = append(bookCategorys, strings.TrimSpace(e.Text))
	})

	// Get Book image urls
	c.OnHTML("div.category__winnerImageContainer", func(e *colly.HTMLElement) {
		imgSrc := e.ChildAttr("img", "src")
		bookImages = append(bookImages, imgSrc)
	})

	// informs you it's visiting the URL
	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL.String())
	})

	// visits given URL
	c.Visit("https://www.goodreads.com/choiceawards/best-books-2021")

	for i := 0; i < len(bookCategorys); i++ {
		// fmt.Println(BookImages[i])
		bookData := Book{Category: bookCategorys[i], Image: bookImages[i]}
		products = append(products, bookData)
	}

	// Pass data to HTML generator
	makePug(products)
}
