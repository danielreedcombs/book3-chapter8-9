fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then( (parsedFoods) => {
        console.table(parsedFoods)
        parsedFoods.forEach( (food) => {
            const makeFoodBlockComponent = function (foods) {
            return `
                <div class="flexy">
                <h1> ${food.name}</h1>
                <br>
                <p>${food.type}</p>
                <br>
                <p>${food.ethnicity}</p>
                </div>
            `
        }
        document.querySelector(".entryLog").innerHTML += makeFoodBlockComponent("parsedFoods");
    })
})


const lenguine = "8076809523509"
const greenCurry = "0044738102353"
const massamanCurry = "0016229008635"
const ravioli= "8001665127585"
const tuscanSoup= "5000169116562"
barcode=""
ingrediantsShown = document.querySelector("#ingredients")
barCodeArray=[lenguine , greenCurry , massamanCurry, ravioli, tuscanSoup]

for(i=0; i < barCodeArray.length; i++){ 
    barcode = barCodeArray[i]
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then(response => response.json())
    .then(productInfo=> ShowIngrediantsComponent(productInfo))
}
// need to work it into the then statement,
// need to display information to the dom

ShowIngrediantsComponent = function (x) {
    return `
    <div> 
    <p> ${x.product.ingredients}</p>
    </div>
    `
    ingrediantsShown.innerHTML += ShowIngrediantsComponent()
}