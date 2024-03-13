import homeImage from '../assets/imgs/Home.jpg';

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${homeImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '2rem', 
    textAlign: 'center' 
  };

  return (
    <header style={headerStyle}>
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡ A comer delicioso!</p>
      <hr style={{width: "80%", margin: "auto"}} />
    </header>
  );
}

export default Header;