const shoplist = ["hand","grandma","farm","factory"]
function createItems(){
   shoplist.forEach(element => {
      let item = document.createElement("button");
      item.classList.add("upgrade")
      let container = document.getElementById("shop")
      container.appendChild(item);
   });
}
createItems();
function firstButton() {
   count = buyShopItem(15,count)
   rate = ratechange(1,rate)
   //  rate = rate +1
   //  count = count - 15
   update_counter();

}
function secondButton(){
   buyShopItem(100,count)
    setInterval(() => {
    count = count + 1
    update_counter();
    },1000 
  )
}
function buyShopItem(price,count){
   if(count >= price){
      count = count - price;
   }
   return count;
}
function ratechange(increment,rate){
   rate = rate + increment;
   return rate;
}
