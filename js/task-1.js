function slugify(title) {
    const newmas = title.split(" ");
    const newString = newmas.join('-');
    const slug =newString.toLowerCase()
    return slug;
}
console.log(slugify("Arrays for begginers")) //повертає "arrays-for-begginers"
console.log(slugify("English for developer"))// повертає "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")) //повертає "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")) //повертає "how-to-become-a-junior-developer-in-two-weeks"