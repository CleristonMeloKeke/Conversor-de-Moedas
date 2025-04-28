const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyOrigin = document.querySelector(".currency-origin")
const currencyConverted = document.querySelector(".currency-value")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToCovert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const real = 1
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.56
    const bitcoinToday = 93495.7

    if(currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / real)
    }

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    } 

    if(currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }). format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToCovert.innerHTML = new Intl.NumberFormat("pr-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeOrigin(){
    const currencyOriginValorToConvert = document.querySelector(".currency-value-to-convert").value
    const currencyOriginName = document.getElementById("currency-origin-name")
    const currencyOriginImage = document.querySelector(".currency-origin-img")

    if(currencyOrigin.value == "real"){
        currencyOriginName.innerHTML = "Real"
        currencyOriginImage.src = "./assets/real.png"
    }

    if(currencyOrigin.value == "dolar"){
        currencyOriginName.innerHTML = "Dólar Americano"
        currencyOriginImage.src = "./assets/dolar.png"
    }

    if(currencyOrigin.value == "euro"){
        currencyOriginName.innerHTML = "Euro"
        currencyOriginImage.src = "./assets/euro.png"
    }

    if(currencyOrigin.value == "libra"){
        currencyOriginName.innerHTML = "Libra Esterlina"
        currencyOriginImage.src = "./assets/libra.png"
    }

    if(currencyOrigin.value == "bitcoin"){
        currencyOriginName.innerHTML = "Bitcoin"
        currencyOriginImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    
    convertValues()
}

currencyOrigin.addEventListener("change", changeOrigin)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)