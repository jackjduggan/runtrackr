package main

import (
	"log"
	"net/http"

	"github.com/jackjduggan/runtrackr/handlers"
)

func main() {
	http.HandleFunc("/api/v1/health", handlers.HealthCheck)

	log.Println("Starting server on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
