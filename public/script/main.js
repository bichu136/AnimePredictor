// const { CollectionReference } = require("@google-cloud/firestore")

// const { FirstCall } = require("../../functions")
function createSpan(_class,information)
{
    var span = document.createElement('span')
    span.className=_class
    var checkbox =document.createElement('input')
    checkbox.type='checkbox'
    span.appendChild(checkbox)
    span.append(information)
    
    return span
}
var functions = firebase.functions()
var database = firebase.database()
var firestore = firebase.firestore()
var genre_collection = document.getElementById('genre_collection')
for (let index = 0; index < 20  ; index++) {
    genre_collection.appendChild(createSpan('Genre','genre'+index))
}
var collection = document.evaluate("//span[@class='Genre']/input",genre_collection)
var x = collection.iterateNext()
var genres = []
while (x!=null) {
    genres.push(x.checked)
    x = collection.iterateNext()
}
var FirstCall =functions.httpsCallable('FirstCall');
// FirstCall({user:"Khoa"}).then(function(result){console.log(result)}).catch(function(error) {console.log(error)})
console.log(FirstCall({genres}))