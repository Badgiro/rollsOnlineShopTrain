function toggleCartStatus() {
  console.log("toggleCartStatus");

  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartEmptyBage = document.querySelector("[data-cart-empty]");

  const orderForm = document.querySelector("#order-form");

  if (cartWrapper.children.length > 0) {
    cartEmptyBage.classList.add("none");

    orderForm.classList.remove("none");
  } else {
    orderForm.classList.add("none");

    cartEmptyBage.classList.remove("none");
  }
}
