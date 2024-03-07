package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	PORT := 8081
	http.Handle("/", http.FileServer(http.Dir("polymer")))
	// http.HandleFunc("/api/mahasiswa", user)
	fmt.Println("Server Running on Port", PORT)
	fmt.Printf("Server Running on Port %d", PORT)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil))
}

// type Lepkom struct {
// 	Nama   string `json:"nama_mahasiswa"`
// 	Kursus string `json:"kursus_mahasiswa"`
// 	Foto   string `json:"foto_mahasiswa"`
// }

// var data_mahasiswa = []Lepkom{
// 	{
// 		Nama:   "Antonius Silvianus Prasetyo",
// 		Kursus: "Golang For Beginner",
// 		Foto:   "img/anton.png",
// 	},
// }

// func user(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "application/json")
// 	if r.Method == http.MethodGet {
// 		result, err := json.Marshal(data_mahasiswa)

// 		if err != nil {
// 			http.Error(w, err.Error(), http.StatusInternalServerError)
// 			return
// 		}
// 		w.Write(result)
// 		return
// 	}
// }
