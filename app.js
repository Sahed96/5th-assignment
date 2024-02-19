

// function setBgById(elementId) {
//     const element = document.getElementById(elementId);
//     console.log(sitColor);
//     element.classList.add("bg-[#27AE60]");
// }



const seats = document.querySelectorAll(".seat");
const tickets = document.querySelectorAll(".ticket")

let totalPrice = 0;
let seatCount =0;
let remainSeat =40;




for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    
    seat.addEventListener("click", function () {
        

      
        totalPrice += 550;

        seatCount += 1;

        remainSeat -= 1;


        setInnerText("price-count", totalPrice);
        setInnerText("grand-total", totalPrice);
        setInnerText("seat-count", seatCount);
        setInnerText("remain-seat", remainSeat);

        const title = seat.querySelector("p").innerText;
        
        
           
            
            seat.classList.add("bg-[#27AE60]");
        


        const ticketContainer = document.getElementById("ticket-container");
        

        const p = document.createElement("p");

        p.innerText = title +"       "+ "Economy" + "      " + 550 ;
       
        ticketContainer.appendChild(p);

        

        

    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {

    const couponElement = document.getElementById("coupon-code").value;
    const couponCode = couponElement;
    console.log(couponCode);

    if (totalPrice >= 2200) {
        if (couponCode === "NEW15" || couponCode === "Couple 20") {
            const discountElement = document.getElementById("price-discount");
            const discountAmount = totalPrice * 0.15;
            discountElement.innerText =discountAmount.toFixed(2) ;

            const restTotal =document.getElementById("grand-total");
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);

            document.getElementById("coupon-code").value = "";


        } else {
            alert("Invalid Coupon")
        }
    }
    else {
        alert("please at least buy 4 tickets")
    }
})



function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}





function popup(){
    showElementById('popup');
    
}
// --------------------------------------------------------------------------------------

