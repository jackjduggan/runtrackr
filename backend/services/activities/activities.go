package activities

import (
	"encoding/xml"
	"fmt"
	"io"
	"os"

	"github.com/jackjduggan/runtrackr/utilities"
)

type GPX struct {
	XMLName  xml.Name `xml:"gpx"`
	Metadata Metadata `xml:"metadata"`
	Trk      Track    `xml:"trk"`
}

type Metadata struct {
	Time string `xml:"time"`
}

type Track struct {
	Name  string       `xml:"name"`
	Route TrackSegment `xml:"trkseg"`
}

type TrackSegment struct {
	Points []TrackPoint `xml:"trkpt"`
}

type TrackPoint struct {
	Latitude  float64 `xml:"lat,attr"`
	Longitude float64 `xml:"lon,attr"`
	Elevation float64 `xml:"ele"`
	Time      string  `xml:"time"`
}

func ParseGPX() {
	// choose a file from the /strava/activities directory to ingest
	// strava/activities/3697621250.gpx

	// ingest the xml file and transform into json
	gpxFile, err := os.Open("../strava/activities/3697621250.gpx")
	utilities.Check(err)
	fmt.Println("File opened successfully")
	defer gpxFile.Close()

	// read xml as byte array
	byteValue, _ := io.ReadAll(gpxFile)
	var gpxData GPX
	xml.Unmarshal(byteValue, &gpxData)
	fmt.Println("XML unmarshalled successfully")
	fmt.Println("Metadata time:", gpxData.Metadata.Time)

	// // convert to json
	// jsonData, err := json.Marshal(gpxData)
	// utilities.Check(err)
	// fmt.Println("JSON marshalled successfully")

	// fmt.Println(jsonData)

}
