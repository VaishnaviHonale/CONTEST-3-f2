// function getMenu(){
//    fetch(
//     "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
//    )
//    .then((response)=>
//    response.json())
//    .then((data) => {
//     const cardContainer = document.getElementById("card-container");
//     for(let i=1; i<=6 ; i++){
//         const card = data.find((item) => item.id===i);

//         // create card Element
//         const cardElememt=document.createElement("div");
//         cardElememt.classList.add("card");

//         // create image Element
//         const imgElement = document.createElement("img");
//         imgElement.src=card.imgSrc;
//         cardElememt.appendChild(imgElement);

//         // create heading element
//         const  heading= document.createElement("h3");
//         heading.innerHTML=card.name;
//         heading.style.color="white";
//         cardElememt.appendChild(heading);

//         // create price element
//         const price = document.createElement("p");
//         price.innerHTML=card.price;
//         price.style.color="white";
//         price.style.display="inline";
        
//         const priceContainer=document.createElement("span");
//         priceContainer.innerHTML="$";
//         priceContainer.style.display="inline";
//         priceContainer.style.color="white";

//         const additionalText = document.createElement("span");
//         additionalText.innerHTML="/-";
//         additionalText.style.display="inline";
//         additionalText.style.color="white";

//         cardElememt.append(priceContainer,price,additionalText);

//         // Create button element 
//         const button = document.createElement("input");
//         button.type="button";
//         button.classList.add("add-button");
//         button.value="+";
//         button.style.backgroundColor="#363a43";
//         cardElememt.append(button);

//         // Append card element to the container

//         cardContainer.appendChild(cardElememt);

//     }
//    })
//    .catch((error)=>{
//     console.log("An error occurred:" , error);
//    });

// }
 
// // TakeOrder Function
// function takeOrder(){
// return new Promise((resolve,reject) =>
// {
//     setTimeout(()=>{
//         fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
//         .then((response) => response.json())
//         .then((data) => {
//             const order = [];
//             const len = data.length;
//             for(let i=0; i<3 ; i++){
//                 const rand = Math.floor(Math.random()*len);
//                 order.push(data[rand]);
//             }
//             resolve(order);
//         })
//         .catch((error)=> reject(error));
//     },2500);

    
// });
// }

// // Order preparation function
// function orderPrep(){
//     return new Promise((resolve,reject) =>
//     {
//     setTimeout(()=>{
//      resolve({order_status:true , paid: false});
//     },1500);
//     });
// }

// // Pay Order Function
// function payOrder(){
//     return new Promise((resolve, reject)=>
//     {
//      setTimeout(()=>{
//      resolve({order_status:true , paid : true});
//      },1000);
//     });
// }
 

// // ThankYOU Fucntion

// function thankyouFnc() {
//     alert("Thank you for eating with us today!");
// }

// window.onload = () => {
//     getMenu();
//     takeOrder()
//     .then((order) => {
//         console.log("Order placed:",order);
//         return orderPrep();

//     })
//     .then((status) => {
//         console.log("Order preparation status:",status);
//         return payOrder();
//     })
//     .then((paymentStatus)=>{
//         console.log("Payment Status",paymentStatus);
//         if(paymentStatus.paid){
//             thankyouFnc();
//         }
//     })
//     .catch((error) => {
//         console.log("Error occured while taking the order:",error);
//     });
// };




























let foodarr = [
    {
      "id": 1,
      "name": "Cheeseburger",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
    },
    {
      "id": 3,
      "name": "Tacos",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
    },
    {
      "id": 4,
      "name": "Sushi",
      "price": 11.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
    },
    {
      "id": 5,
      "name": "Pasta",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
    },
    {
      "id": 6,
      "name": "Fried Chicken",
      "price": 7.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
    },
    {
      "id": 7,
      "name": "Grilled Cheese Sandwich",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
    },
    {
      "id": 8,
      "name": "Steak",
      "price": 15.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
    },
    {
      "id": 9,
      "name": "Caesar Salad",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
    },
    {
      "id": 10,
      "name": "Fish and Chips",
      "price": 8.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
    },
    {
      "id": 11,
      "name": "Ramen",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
    },
    {
      "id": 12,
      "name": "Burrito",
      "price": 7.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
    },
    {
      "id": 13,
      "name": "Pho",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
    },
    {
      "id": 14,
      "name": "Pad Thai",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
    },
    {
      "id": 15,
      "name": "Gyro",
      "price": 6.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
    },
    {
      "id": 16,
      "name": "Ice Cream",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
    },
    {
      "id": 17,
      "name": "Smoothie",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
    },
    {
      "id": "18",
      "name": "Apple Pie",
      "price": 4.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
    },
    {
      "id": 19,
      "name": "Chocolate Cake",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
    },
    {
      "id": 20,
      "name": "Pancakes",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
    },
    {
      "id": 21,
      "name": "Cupcake",
      "price": 2.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
    },
    {
      "id": 22,
      "name": "Crepes",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
    },
    {
      "id": 23,
      "name": "Club Sandwich",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
    },
    {
      "id": 24,
      "name": "Falafel",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
    },
    {
      "id": 25,
      "name": "Curry",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
    }
];
let mycards = document.getElementsByClassName("mycards")[0]; //
function getMenu(){
    foodarr.forEach((v,k) => {
        let card = document.createElement("div");
        let cardimg = document.createElement("img");
        let cardtitle = document.createElement("div");
        let cardtext = document.createElement("div");
        let cardtext1 = document.createElement("div");
        let cardtext2 = document.createElement("div");
        let cardtext3 = document.createElement("div");
        cardimg.src = v.imgSrc;
        cardtext1.innerHTML = v.name;
        cardtext2.innerHTML = "$" + v.price + "/-";
        cardtext3.innerHTML = "+";
        card.classList.add("card");
        cardtitle.classList.add("cardtitle");
        cardimg.classList.add("cardimg");
        cardtext.classList.add("cardtext");
        cardtext1.classList.add("cardtext1");
        cardtext2.classList.add("cardtext1");
        cardtext3.classList.add("plus");
        cardtext.appendChild(cardtext1);
        cardtext.appendChild(cardtext2);
        cardtitle.appendChild(cardtext);
        cardtitle.appendChild(cardtext3);
        card.appendChild(cardimg);
        card.appendChild(cardtitle);
        console.log(card);
        mycards.appendChild(card);
    })
    
}


  // Function to take an order
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Veggie Burger', 'Chicken Burger'];
        const order = {
          burgers: burgers.slice(0, 3) // Randomly choose 3 burgers
        };
        console.log('Order:', order);
        resolve(order);
      }, 2500);
    });
  }
  
  // Function to prepare the order
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = { order_status: true, paid: false };
        console.log('Order Preparation:', orderStatus);
        resolve(orderStatus);
      }, 1500);
    });
  }
  
  // Function to pay the order
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = { order_status: true, paid: true };
        console.log('Payment:', orderStatus);
        resolve(orderStatus);
      }, 1000);
    });
  }
  
  // Function to show thank you message
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Async function to handle the process
  async function restaurantProcess() {
    
    const order = await takeOrder();
    const preparationStatus = await orderPrep();
    const paymentStatus = await payOrder();
  
    if (paymentStatus.paid) {
      thankyouFnc();
    }
  }
  
  // Call the main async function to start the process
  restaurantProcess();
  































// function takeOrder(){
// return new Promise((resolve,reject) =>
// {
//     setTimeout(()=>{
//         fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
//         .then((response) => response.json())
//         .then((data) => {
//             const order = [];
//             const len = data.length;
//             for(let i=0; i<3 ; i++){
//                 const rand = Math.floor(Math.random()*len);
//                 order.push(data[rand]);
//             }
//             resolve(order);
//         })
//         .catch((error)=> reject(error));
//     },2500);

    
// });
// }

// // Order preparation function
// function orderPrep(){
//     return new Promise((resolve,reject) =>
//     {
//     setTimeout(()=>{
//      resolve({order_status:true , paid: false});
//     },1500);
//     });
// }

// // Pay Order Function
// function payOrder(){
//     return new Promise((resolve, reject)=>
//     {
//      setTimeout(()=>{
//      resolve({order_status:true , paid : true});
//      },1000);
//     });
// }
 

// // ThankYOU Fucntion

// function thankyouFnc() {
//     alert("Thank you for eating with us today!");
// }

// window.onload = () => {
//     getMenu();
//     takeOrder()
//     .then((order) => {
//         console.log("Order placed:",order);
//         return orderPrep();

//     })
//     .then((status) => {
//         console.log("Order preparation status:",status);
//         return payOrder();
//     })
//     .then((paymentStatus)=>{
//         console.log("Payment Status",paymentStatus);
//         if(paymentStatus.paid){
//             thankyouFnc();
//         }
//     })
//     .catch((error) => {
//         console.log("Error occured while taking the order:",error);
//     });
// };