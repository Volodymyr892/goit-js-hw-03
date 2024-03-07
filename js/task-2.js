function makeArray(firstArray, secondArray, maxLength) {
    const allClients = firstArray.concat(secondArray);
    const len = allClients.length;
        if(len => maxLength) {
            return allClients.slice(0, maxLength);
        } else {
            return len;
        }
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)) //повертає ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))// повертає ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3))// повертає ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)) //повертає ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4))// повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)) //повертає []
console.log(makeArray())// з випадковими масивами і випадковим числом повертає правильний масив