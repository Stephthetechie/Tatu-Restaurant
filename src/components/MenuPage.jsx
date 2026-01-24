import { Link, useParams, useNavigate } from 'react-router-dom'
import { foodItems} from './FoodItems'
// import { NavContext } from './NavContext'
const MenuPage = () => {
    const {category} = useParams();
    const navigate = useNavigate();
    // const {toggleMenu} = useContext(NavContext);
    const dishes = foodItems[category];
   

    if(!dishes){
        return <h2>Food not found!</h2>
    }
    const handleBackMenuClick =(sectionId)=>{
      navigate('/');
      setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({behavior:'smooth'})
      }, 300);
      
    }
  return (
    <div className="container mt-5 text-center">
        <div className="menu-heading">
          <div className="back-menu">
            <i className='fas fa-arrow-left	'></i>
            <Link className="back-menu-link" to="/" onClick={()=>handleBackMenuClick('menu')}>Back to Menu</Link>
          </div>
          <h1>{category} Menu</h1>
        </div>

        <div className=" menu-card-section row">
          {dishes.map((dish, index) => (
            <div className="col-md-4" key={index}>
              <div className="menu-card mb-4">
                <img src={dish.src} className="card-img-top" alt={dish.alt} />
                <div className="menu-card-body">
                  <h5 className="menu-card-title">{dish.name}</h5>
                  <p className="menu-card-text">{dish.description}</p>
                  <p className="menu-card-text">Price: ${dish.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
            
    </div>
  )
}

export default MenuPage
