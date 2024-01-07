import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Cart } from "../models/cart";
import { Product } from "../models/product";
import Swal from "sweetalert2";
@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor() {}
  private selectedUser!: User;
  private cartList: Cart[] = [];
  

  getSelectedUser(): User | undefined {
    return this.selectedUser;
  }
  setSelectedUser(user: User) {
    this.selectedUser = user;
    if (this.getUserCart() == undefined) {
      this.cartList.push({
        userId: user.id,
        id: this.cartList.length + 1,
        items: [],
      });
    }
    Swal.fire({
      position: "top-end",
      title: "Selected User",
      text: user.fullName + " is selected for shop",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  getUserCart(): Cart | undefined {
    return this.cartList.find((cart) => cart.userId == this.selectedUser.id);
  }
  cartControl() {
    let cart = this.getUserCart();
    if (cart == undefined ) {
      Swal.fire({
        position: "top-end",
        title: "Uups",
        text: "Please select user.",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    }
    return true;
  }
  addProductInCart(product: Product) {
    let cart = this.getUserCart();
    let cartcontrol = this.cartControl();
    if (cart == undefined || cartcontrol == false)
      return;
    let cartItem = cart.items.find((item) => item.productId == product.id);
    if (cartItem == undefined) {
      cartItem = {
        cartId: cart.id,
        productId: product.id,
        count: 0,
      };
      cart.items.push(cartItem);

    }
    cartItem.count++;
    Swal.fire({
      position: "top-end",
      title: "Added product",
      text: product.name + " added in cart",
      showConfirmButton: false,
      timer: 1500,
    });
    // this.notifierService.notify('Added product',product.name+' added in cart');
  }
  decreaseProductInCart(product: Product){
    let cart = this.getUserCart();
    let cartcontrol = this.cartControl();
    if (cart == undefined || cartcontrol == false) return;
    let cartItem = cart.items.find((item) => item.productId == product.id);
    cartItem ? cartItem.count-- : 0;
    cartItem?.count == 0 ? cart.items.splice(cart.items.indexOf(cartItem), 1) : 0;

  }
  }
