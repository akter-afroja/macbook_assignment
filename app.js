const memoryBtn8gb = document.getElementById("memory1");
const memoryBtn16gb = document.getElementById("memory2");
const storageBtn256gb = document.getElementById("storage1");
const storageBtn512gb = document.getElementById("storage2");
const storageBtn1tb = document.getElementById("storage3");
const deliveryBtnFree = document.getElementById("delivery1");
const deliveryBtnCharge = document.getElementById("delivery2");
// const btnAll = document.querySelectorAll(".btn");

const bestPrice = document.getElementById("best-price");
const memoryPrice = document.getElementById("memory-cost");
const storagePrice = document.getElementById("storage-cost");
const deliveryPrice = document.getElementById("delivery-cost");
const totalPrice = document.getElementById("total-cost");

const promoCode = document.getElementById("promo-text");
const promoBtn = document.getElementById("promo-add");

const netTotal = document.getElementById("net-price");

let discount = 0.2;
const cost = [bestPrice, memoryPrice, storagePrice, deliveryPrice];

for (const btn of btnAll) {
    btn.addEventListener("click", function(e){
        updateCost(e);
        totalCostCalculation(cost);
    })
}

function updateCost(e) {
    if (e.target == memoryBtn8gb) memoryPrice.innerText = 0;
    if (e.target == memoryBtn16gb) memoryPrice.innerText = 180;
    if (e.target == storageBtn256gb) storagePrice.innerText = 0;
    if (e.target == storageBtn512gb) storagePrice.innerText = 100;
    if (e.target == storageBtn1tb) storagePrice.innerText = 180;
    if (e.target == deliveryBtnFree) deliveryPrice.innerText = 0;
    if (e.target == deliveryBtnCharge) deliveryPrice.innerText = 20;
}


function totalCostCalculation(cost) {
    let totalOrderAmount = 0;
    for (const value of cost) {
        totalOrderAmount = totalOrderAmount + parseInt(value.innerText);
        totalPrice.innerText = totalOrderAmount;
        applyPromo();
        Total(totalOrderAmount);
    }
    return totalOrderAmount;
}
totalCostCalculation(cost);

function applyPromo() {
    promoBtn.addEventListener("click", function() {
        if (promoField.value === "stevekaku") {
            discount = 20;
            netTotal(totalCostCalculation(cost));
        }
        promoCode.value = "";
    })
}

function netTotalCalculation(totalProductPrice) {
    const netCost = totalProductPrice - (totalProductPrice * discount);
}