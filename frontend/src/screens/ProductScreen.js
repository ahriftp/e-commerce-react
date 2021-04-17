// Packages
import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'

// Components
import Rating from '../components/Rating'

// Dummy Data
import products from '../products'

const ProductScreen = ({match}) => {
    // match.params.id => This id is fetched from the URL. Defined in App.js "/product/:id".
    const product = products.find(p => p._id === match.params.id)
    
    return (
        <>
            <Link className = 'btn btn-light my-3' to ='/'>
                Go Back
            </Link>

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

                                    <ListGroup.Item>
                                        <Button className = 'btn-block' type = 'button' disabled = {product.countInStock === 0}>Add to Cart</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
