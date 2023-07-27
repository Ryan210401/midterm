# midterm

#i
Database memiliki nama Songs dengan 3 collectiion (sampleSongs, sampleArtist dan samplePopularSong)
Masing- masing dari collection tersebut memiliki 10 data

#ii
terdapat beberapa API yang diset untuk melakukan testing project simple spotify, diantaranya yaitu :
- get songs/id => medapatkan data 
- post songs => melakukan post penambahan data
- put songs/id =>  melakukan edit data
- delete/songs => melakukan delete data

#iii
- GET/Songs/id
URL Params
None
Data Params
None
Headers
Content-Type: application/json
uccess Response:
Code:
500 (internal server error)
404 (song not found)
  
-POST/Songs/id
None
Data Params
None
Headers
Content-Type: application/json
Success Response:
Code:
400 (Bad Request)

-PUT/Songs/id
None
Data Params
None
Headers
Content-Type: application/json
Success Response:
Code:
400 (Bad Request)
404 (song not found)

-DELETE/Songs/id
None
Data Params
None
Headers
Content-Type: application/json
Success Response:
Code:
500 (internal server error)

#iV how to run
- npm init
- npm install express mongoose body-parser --save
- npm install node
- npm run start
- test in postman

