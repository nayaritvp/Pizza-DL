import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import pizzasData from "../json/pizzas.json";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/PizzaContext';
import IconCart from '../components/IconCard';

export default function Home() {
  const { pizzas, addCart, monedaLocal } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Container>
      <Row xs={1} md={3} lg={4} className="g-3 mb-3">
        {pizzasData.map((pizza) => (
          <Col key={pizza.id}>
            <Card>
              <Card.Img src={pizza.img} alt={pizza.name} />
              <Card.Header>
                <span className="text-capitalize fw-bold">{pizza.name}</span>
              </Card.Header>
              <Card.Body>
                Ingredientes:
                <ul>
                  {pizza.ingredients.map((ingrediente, index) => (
                    <li key={index}>🍕 {ingrediente}</li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer className="text-center">
                <Card.Text className="fw-bold mb-2">
                  {monedaLocal(pizza.price)}
                </Card.Text>
                <Card.Text className="d-flex justify-content-around">
                <Button className="ver-mas bg-primary" onClick={() => navigate(`/desafio-mammamia/pizza/${pizza.id}`)}>
                  Ver más
                </Button>
                  <Button onClick={() => addCart(pizza)}>
                    Añadir <IconCart tamaño=".9rem" color="white" />{' '}
                  </Button>
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}