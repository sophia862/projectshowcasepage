"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Sophia Harlos
   Date:   April 9, 2026
   
   Filename: tc_cart.js
*/

/*initial order value*/
var orderTotal = 0;

/*cartHTML initial value*/
var cartHTML = "<table>"; 
cartHTML += "<tr>"; 
cartHTML += "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>";
cartHTML += "</tr>";

/*calculate the total cost*/
for (var i = 0; i < item.length; i++) {
   cartHTML += "<tr>";
   cartHTML += "<td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   orderTotal += itemCost;
}

/*display order total*/
cartHTML += "<tr>";
cartHTML += "<td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td>";
cartHTML += "</tr>";
cartHTML += "</table>";

/*update "cart" div*/
document.getElementById("cart").innerHTML = cartHTML;