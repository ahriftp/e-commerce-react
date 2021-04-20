// Packages
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

// Redux Components
import { listProductDetails } from '../actions/productActions'

// Components
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(0)

    // match.params.id => This id is fetched from the URL. Defined in App.js "/product/:id".
    const dispatch = useDispatch()
    
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))  
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <>
            <Link className = 'btn btn-light my-3' to ='/'>
                Go Back
            </Link>
            { loading ? <Loader /> : error ? <Message variant = 'danger'>{error}</Message> : (
                // Start of product HTML
                <Row>
                    <Col md = {6}>
                        <Image src = {product.image} alt = {product.name} fluid/>
                    </Col>

                    <Col md = {6}>
                        <ListGroup variant = 'flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating value = {product.rating} text = {`${product.numReviews} reviews`}/> 
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Card>
                                    <ListGroup variant = 'flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Price:
                                                </Col>
                                                <Col>
                                                    <strong>${product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Status:
                                                </Col>
                                                <Col>
                                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Quantity:</Col>

                                                    <Col>
                                                        <Form.Control as = 'select' value = {qty} onChange = {(e) => setQty(e.target.value)}>
                                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                                <option key = {x + 1} value = {x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )}

                                        <ListGroup.Item>
                                            <Button 
                                            onClick = {addToCartHandler}
                                            className = 'btn-block' 
                                            type = 'button' 
                                            disabled = {product.countInStock === 0}>
                                                Add to Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                </Row>
            )  // End of product HTML
            }
            
        </>
    )
}

export default ProductScreen
