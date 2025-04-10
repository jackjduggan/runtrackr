package main

import (
	"github.com/jackjduggan/runtrackr/services/activities"
)

func main() {
	// r := chi.NewRouter()
	// r.Use(middleware.Logger)
	// r.Use(cors.Handler(cors.Options{
	// 	// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
	// 	AllowedOrigins: []string{"*"}, // Allow all origins (use with caution in production)
	// 	// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
	// 	AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
	// 	AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
	// 	ExposedHeaders:   []string{"Link"},
	// 	AllowCredentials: false,
	// 	MaxAge:           300, // Maximum value not ignored by any of major browsers
	// }))

	// r.Get("/api/v1/health", handlers.HealthCheck)

	// log.Println("Starting server on :8080")
	// if err := http.ListenAndServe(":8080", r); err != nil {
	// 	log.Fatalf("Failed to start server: %v", err)
	// }

	activities.ParseGPX()
}
