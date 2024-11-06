import { useParams } from "react-router-dom";
import '../styles/DetailPortfolio.css';
import { portfolioList } from '../data/DataPortfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DetailPortfolio() {
  const { id } = useParams();
  const data = portfolioList.find((item) => item.id === id);

  if (!data) {
    return <p>Project not found.</p>;
  }

  return (
    <>
      <Navbar/>
      <section id="detail-portfolio">
        <div className="wrapper">
          <h1>{data.title}</h1>
          <img src={data.image} alt={data.title} />
          <p className="portfolio-description">{data.description}</p>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default DetailPortfolio;
