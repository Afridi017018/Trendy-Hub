function card_1() {
    cartElements("card_1_name");
    cartCalculation("card_1_taka");


}

function card_2() {
    cartElements("card_2_name");
    cartCalculation("card_2_taka");


}


function card_3() {
    cartElements("card_3_name");
    cartCalculation("card_3_taka");


}


function card_4() {
    cartElements("card_4_name");
    cartCalculation("card_4_taka");


}

function card_5() {
    cartElements("card_5_name");
    cartCalculation("card_5_taka");


}

function card_6() {
    cartElements("card_6_name");
    cartCalculation("card_6_taka");


}



function applyCoupon() {
    const coupon = document.getElementById("coupon_input").value;

    if (coupon === "SELL200") {
        const total_price = document.getElementById("total_price");
        const newDiscount = parseFloat((20 / 200) * total_price.innerText).toFixed(2);
        console.log(newDiscount);

        document.getElementById("discount").innerText = newDiscount;
        total.innerText = (parseFloat(total_price.innerText) - newDiscount).toFixed(2);
    }
}



function clearAll() {
    const elements = document.getElementById('list_items');

    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }


    document.getElementById("total_price").innerText = "0.00";
    document.getElementById("discount").innerText = "0.00";
    document.getElementById("total").innerText = "0.00";

    document.getElementById("coupon_input").value = "";

    document.getElementById("purchase_button").disabled = true;

    document.getElementById("apply_button").disabled = true;

}


function cartElements(cardName) {
    const name = document.getElementById(cardName).innerText;

    const lists = document.getElementById("list_items")

    const newListItem = document.createElement("li")
    newListItem.innerText = name;

    lists.appendChild(newListItem);
}


function cartCalculation(cardTaka) {
    const taka = parseFloat(document.getElementById(cardTaka).innerText);
    const total_price = document.getElementById("total_price");
    total_price.innerText = (parseFloat(total_price.innerText) + taka).toFixed(2);


    const discount = parseFloat(document.getElementById("discount").innerText);
    const total = document.getElementById("total");

    total.innerText = (parseFloat(total_price.innerText) - discount).toFixed(2);

    if (parseFloat(total_price.innerText) > 0) {
        document.getElementById("purchase_button").removeAttribute("disabled");
    }

    if (parseFloat(total_price.innerText) >= 200) {
        document.getElementById("apply_button").removeAttribute("disabled");
    }

}