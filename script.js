let categoryFruits = document.querySelector(".fruits")
let categoryDrinks = document.querySelector(".drinks")
let categoryHygiene = document.querySelector(".hygiene")

let category = {
    frutas: [],
    bebidas: [],
    higiene: []
}

for (let i = 0; i < products.length; i++) {
    if (products[i].category == "Frutas") {
        category.frutas.push(products[i])
    } else if (products[i].category == "Bebidas") {
        category.bebidas.push(products[i])
    } else if (products[i].category == "Higiene") {
        category.higiene.push(products[i])
    }
}

for (let key in category) {
    if (category[key].length > 0) {
        let ul = document.createElement("ul")

        for (let i = 0; i < category[key].length; i++) {
            let li = document.createElement("li")
            li.classList.add("product")

            let img = document.createElement("img")
            img.classList.add("product-img")
            if (category[key][i].image == undefined) {
                img.src = "./img/products/no-img.svg"
            } else {
                img.src = `${category[key][i].image}`
            }

            let main = document.createElement("main")
            main.classList.add("product-main")

            let h1 = document.createElement("h1")
            h1.classList.add("product-title")
            h1.innerText = category[key][i].title

            let h5 = document.createElement("h5")
            h5.classList.add("product-category")
            h5.innerText = category[key][i].category

            let strong = document.createElement("strong")
            strong.classList.add("product-price")
            let preco = category[key][i].price
            strong.innerText = preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

            ul.appendChild(li)
            li.append(img, main)
            main.append(h1, h5, strong)
        }
        if (key == "frutas") {
            categoryFruits.appendChild(ul)
        } else if (key == "bebidas") {
            categoryDrinks.appendChild(ul)
        } else if (key == "higiene") {
            categoryHygiene.appendChild(ul)
        }
    }
}
