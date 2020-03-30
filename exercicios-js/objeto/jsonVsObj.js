const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": 2.35, "c": "texto teste", "d": { "a1": [{"b1": 3, "c1": 41}, "cd", true, "Texto apóstrofo"]}, "e": []}'))

