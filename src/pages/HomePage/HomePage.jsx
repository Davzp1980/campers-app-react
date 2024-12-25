import { useNavigate } from 'react-router';
import css from './HomePage.module.css';
function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/catalog');
  }
  return (
    <div className={css.container}>
      <div className={css.mainHomeDiv}>
        <div className={css.homeContent}>
          <h1 className={css.homeH1}>Campers of your dreams</h1>
          <p className={css.homeP}>
            You can find everything you want in our catalog
          </p>
          <button className={css.homeBtn} type="button" onClick={handleClick}>
            View Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
