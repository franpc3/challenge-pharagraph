# Phragraph Words Not Allowed

Given a string called "paragraph" and a list of strings called "words Not Allowed", it should be
returned the most frequent word within the paragraph that is not in the list of words Not
Allowed
 
## Install 
```sh
npm install
```
 
## Init 
```sh
npm run start
```


## Start local server

| Method | URL |
| ------ | ------ |
| POST | http://localhost:3000/pharagraph |

## Request 
pharagraph: Consist of letters of the alphabet, space '', or any of the following symbols: "!? ',;."
wordsNotAllowed: Is a word in "lowercase" that only contains letters of the alphabet (a-z)

```sh
POST body: 
  {
   pharagraph: 
   wordsNotAllowed: []
  }
```

