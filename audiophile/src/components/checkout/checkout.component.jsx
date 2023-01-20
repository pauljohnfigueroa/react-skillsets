import { Fragment } from 'react'
import { useSelector } from 'react-redux'
//import { CartContext } from '../../contexts/cart.context';
import { useFormik } from 'formik'

import { selectCartItems, selectCartTotalAmount } from '../../store/cart/cart.selector'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import CartItem from '../cart/cart-item/cart-item.component'

/* 
We can split this component into two and keep the code in this file.
This is not always considered best practice because it seems more obvious to split the
component into smaller ones. However, sometimes it helps to keep the
render method cleaner.

    const renderUserMenu = () => {
    // JSX for user menu
    }
    const renderAdminMenu = () => {
    // JSX for admin menu
    }
    return (
        <div>
        <h1>Welcome back!</h1>
        {userExists && renderUserMenu()}
        {userIsAdmin && renderAdminMenu()}
        </div>
    )
*/
const CheckOut = () => {
  // const { cartItems, cartTotalAmount } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems)
  const cartTotalAmount = useSelector(selectCartTotalAmount)

  let cartItemsArray = cartItems.length ? (
    cartItems.map(cartItem => <CartItem cartItem={cartItem} />)
  ) : (
    <h2 class="text-align-center">Your Cart is Empty.</h2>
  )

  // if (cartItems.length) {
  //     cartItemsArray = cartItems.map(cartItem => <CartItem cartItem={cartItem} />);
  // } else {
  //     cartItemsArray = <h2 class="text-align-center">Your Cart is Empty.</h2>
  // }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zipcode: '',
      city: '',
      country: '',
      eMoneyNum: '',
      eMoneyPin: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <Fragment>
      <section className="checkout">
        <section className="checkout-form">
          <h2>Checkout</h2>
          <form onSubmit={formik.handleSubmit}>
            <fieldset className="billing-details">
              <legend>Billing Details</legend>
              <div className="text-input">
                <FormInput
                  label="Name"
                  type="text"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              <div className="text-input">
                <FormInput
                  label="Email Address"
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div className="text-input">
                <FormInput
                  label="Phone Number"
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </div>
            </fieldset>

            <fieldset className="shipping-info">
              <legend>Shipping info</legend>
              <div className="text-input address">
                <FormInput label="Address" type="text" name="address" id="address" />
              </div>
              <div className="address-details">
                <div className="text-input">
                  <FormInput label="Zip Code" type="text" name="zipcode" id="zipcode" />
                </div>
                <div className="text-input">
                  <FormInput label="City" type="text" name="city" id="city" />
                </div>
                <div className="text-input">
                  <FormInput label="Country" type="text" name="country" id="country" />
                </div>
              </div>
            </fieldset>

            <fieldset className="payment-details">
              <legend>Payment Details</legend>
              <div className="text-input">
                <label htmlFor="">Payment Method</label>
              </div>
              <div className="radio-group">
                <div className="radio-item">
                  <FormInput
                    label="e-Money"
                    type="radio"
                    id="e-money"
                    name="payment-method"
                    value="e-money"
                    onChange={() => {}}
                    checked
                  />
                </div>
                <div className="radio-item">
                  <FormInput
                    label="Cash on Delivery"
                    type="radio"
                    id="cod"
                    name="payment-method"
                    onChange={() => {}}
                    value="cod"
                  />
                </div>
              </div>
              <div className="text-input">
                <FormInput label="e-Money Number" type="text" id="eMoneyNum" name="eMoneyNum" />
              </div>
              <div className="text-input">
                <FormInput label="e-Money PIN" type="text" id="eMoneyPin" name="eMoneyPin" />
              </div>
            </fieldset>

            <div className="button-container">
              <Button type="submit" label="Continue & Pay" />
            </div>
          </form>
        </section>

        <section className="checkout-summary">
          <h2 className="heading">Summary</h2>

          {cartItemsArray}

          <div className="price-details mt-2rem">
            <div className="price-row">
              <p className="label">Total</p>
              <p className="price">$ {cartTotalAmount.toFixed(2).toLocaleString()}</p>
            </div>
            <div className="price-row">
              <p className="label">Shipping</p>
              <p className="price">$ {(cartTotalAmount * 0.05).toFixed(2).toLocaleString()}</p>
            </div>
            <div className="price-row">
              <p className="label">VAT</p>
              <p className="price">$ {(cartTotalAmount * 0.12).toFixed(2).toLocaleString()}</p>
            </div>
            <div className="price-row">
              <p className="label">Grand Total</p>
              <p className="price">
                ${' '}
                {(cartTotalAmount * 1.12 + cartTotalAmount * 0.05).toFixed(2).toLocaleString('en')}
              </p>
            </div>
          </div>
          <div className="button-container">
            <Button type="button" label="Continue & Pay" />
          </div>
        </section>
      </section>
    </Fragment>
  )
}
export default CheckOut
