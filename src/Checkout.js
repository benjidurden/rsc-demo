import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends Component {

    onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`Pleasure working with you, ${data.email}`);
            });
        });
    }
    render(){
        return (
            <StripeCheckout
                token = {this.onToken}
                stripeKey="pk_test_W8ELp0NoVyVpoSHKCs81PaxY"
                name = "Brian Kinnes"
                description = "Your Purchase"
                panelLable="Pay Brian"
                //Set the amount based on the amount in the cart
                amount={100}
                currency="USD"
                shippingAddress
                billingAddress
                zipCode
                >
                <button>
                Pay
                </button>
            </StripeCheckout>
        )
    }
}

export default Checkout;