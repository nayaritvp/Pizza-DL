import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../context/PizzaContext';
import PizzasCarrito from '../components/PizzasCarrito';

export default function Carrito() {
  const { cart } = useContext(Context);

  return (
    <Container className="carrito p-0 mt-3">
      <h1 className="fs-4">Detalle del pedido:</h1>
      {cart.length === 0 ? (
        <p>Aun no añades pizzas al carrito.</p>
      ) : (
        <PizzasCarrito />
      )}
    </Container>
  );
}