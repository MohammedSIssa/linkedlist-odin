# LinkedList Project
Made While Studying The Odin Project's Curriculum

## Testing

``` JS 
let list = new LinkedList()

list.append(100)
list.append(200)
list.append(300)
list.append(400)

list.toString() 
// (100) -> (200) -> (300) -> (400) -> null

list.insertAt(250, 3)
console.log(list.find(250)) // 3
list.toString()
// (100) -> (200) -> (300) -> (250) -> (400) -> null

list.pop()
list.toString()
// (100) -> (200) -> (300) -> (250) -> null

list.removeAt(1) // deletes 200
console.log(list.contains(200)) // false
list.toString()
// (100) -> (300) -> (250) -> null

console.log(list.find(300))
// 1

console.log(list.contains(250))
// true

```
