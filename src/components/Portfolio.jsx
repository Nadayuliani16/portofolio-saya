import { portfolioList } from '../data/DataPortfolio'
import {Link} from 'react-router-dom'
import '../styles/Portfolio.css'

function portofolio() {
    return (
      <section id="portfolio">
        <div className="portfolio-title-container">
          <h3 className="portfolio-title">Project</h3>
        </div>
        <div className="wrapper">
          <div className="grid">
            {
              portfolioList.map((item) => (
                <div className="item" key={item.id}>
                  <Link to={`/portfolio/${item.id}`}>
                    <img src={item.image} alt={item.title} className="portfolio-image" />
                  </Link>
                  <p className="item-title">{item.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
  
  
export default portofolio