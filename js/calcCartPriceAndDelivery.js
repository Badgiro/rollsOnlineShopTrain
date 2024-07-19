function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll(".cart-item");
  const newPrice = document.querySelector(".total-price");
  const freeDelivery = document.querySelector(".delivery-cost");
  const deliveryVisibility = document.querySelector(".delivery-visibility");

  //общая стоимость товаров в корзине
  let totalPrice = 0;

  // обходим все блоки в корзине
  cartItems.forEach((item) => {
    //находим количество товара
    const amountEl = item.querySelector("[data-counter]");
    //Добавляем стоимость товара в общую стоимость (кол-во * цену)
    const priceEl = item.querySelector(".price__currency");
    const currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

    totalPrice += currentPrice;
  });
  //отображаем цену на странице
  newPrice.innerText = totalPrice;

  //стоимость доставки
  if (totalPrice >= 600) {
    freeDelivery.innerText = "Бесплатно";
    freeDelivery.classList.add("free");
    deliveryVisibility.classList.remove("none");
  } else if (totalPrice === 0) {
    freeDelivery.innerText = "";
  } else {
    freeDelivery.innerText = "250р ";
    freeDelivery.classList.remove("free");
    deliveryVisibility.classList.remove("none");
  }
}
