method | route | description | returns | implemented ?
-------- | ------ | ---------- | ------- | -------
GET | / | get homepage | view EJS | 
GET | /subscribe | get subscribe page | view EJS | 
GET | /login | get login page | view EJS | 
GET | /watch | get watch page| view EJS | 
POST | /subscribe | if success, add a user in database, asking for a credentials | HTTP redirection to login page
POST | /login | if success, log user from database, asking for a credentials | HTTP redirection to home page