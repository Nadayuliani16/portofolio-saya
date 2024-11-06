import profilePicture from '../assets/profile-picture (2).png';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} alt="Profile" />
        <div className="text-container">
          <h1>Hello, I am Nada Yuliani</h1>
          <p>Programmer | Passionate about creating intuitive and efficient web applications</p>
          <div className="button-container">
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
