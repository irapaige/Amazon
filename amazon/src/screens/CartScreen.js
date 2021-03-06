import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../Components/cartAction';
import MessageBox from '../Components/messageBox';
import { QtyContext } from '../Components/QtyContext';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';

export default function CartScreen(props) {
  const { setQty } = useContext(QtyContext);
  const { qty } = useContext(QtyContext);
  const params = useParams();
  const { id: productId } = params;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate('/signin?redirect=shipping');
  };
  return (
    <div>
      <title>Shopping Cart</title>

      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to='/'>Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item,i) => (
                <ListGroup.Item key={i}>
                  <Row className='align-items-center'>
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='img-fluid rounded img-thumbnail'
                      ></img>{' '}
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() => setQty(qty - 1)}
                        variant='light'
                        disabled={item.qty === 1}
                      >
                        <i className='fas fa-minus-circle'></i>
                      </Button>{' '}
                      <span>{qty}</span>{' '}
                      <Button
                        onClick={() => setQty(qty + 1)}
                        variant='light'
                        disabled={item.qty === item.countInStock}
                      >
                        <i className='fas fa-plus-circle'></i>
                      </Button>{' '}
                    </Col>
                    <Col md={3}>${item.price}</Col>
                    <Col md={2}>
                      <button
                        type='button'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </button>
                      {/* <Button onClick={()=> removeFromCartHandler(item.product)} variant="light">
                                                <i className="fas fa-trash"></i>
                                            </Button> */}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>
                    Subtotal ({cartItems.reduce((a, c) => a + qty, 0)} items) :
                    ${cartItems.reduce((a, c) => a + c.price * qty, 0)}
                  </h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='d-grid'>
                    <Button
                      type='button'
                      variant='primary'
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
