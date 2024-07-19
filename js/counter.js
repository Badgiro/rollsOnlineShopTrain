// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector("[data-counter]");

// btnMinus.addEventListener("click", function () {
//   if (parseInt(counter.innerText) > 1) {
//     counter.innerText = --counter.innerText;

//     console.log(counter);
//   }
// });

// btnPlus.addEventListener("click", function () {
//   counter.innerText = ++counter.innerText;
// });

window.addEventListener("click", incrementAndDecrement);
//здесь 45:00
function incrementAndDecrement(event) {
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");

    if (event.target.dataset.action === "plus") {
      counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === "minus") {
      if (parseInt(counter.innerText) > 1) {
        //изменяем текст в счетчике, уменьшая его на 1
        counter.innerText = --counter.innerText;
      } else if (
        event.target.closest(".cart-wrapper") &&
        parseInt(counter.innerText) === 1
      ) {
        //удаляем товар из корзны
        event.target.closest(".cart-item").remove();
        //отображение статуса корзины (пустая / полная)
        toggleCartStatus();
        //пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
      }
    }
    //проверяем клик на + или - внутри корзины
    if (
      event.target.hasAttribute("data-action") &&
      event.target.closest(".cart-wrapper")
    ) {
      //Пересчет общей стоимости товаров в корзине
      calcCartPriceAndDelivery();
    }
  }
}
