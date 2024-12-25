import { useNavigate } from 'react-router';
import css from './TruckItem.module.css';
import { setFavorite } from '../../redux/filters/slice';
import { useDispatch } from 'react-redux';

function TruckItem({ truck }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleShowMore() {
    navigate(`/catalog/${truck.id}`);
  }

  function handleAddToFavorite() {
    dispatch(
      setFavorite({
        id: truck.id,
        name: truck.name,
      })
    );
  }

  return (
    <div className={css.TruckItemContainer}>
      <img
        className={css.truckImg}
        src={truck.gallery[0].original}
        alt={truck.name}
      />
      <div className={css.TruckItemInfo}>
        <div className={css.TruckItemDescription}>
          <div className={css.TruckItemNamePrice}>
            <p className={css.name}>{truck.name.slice(0, 26)}</p>
            <div className={css.TruckItemPriceFavorite}>
              <p className={css.price}>&euro;{truck.price}.00</p>
              <button
                className={css.FavoriteBtn}
                type="button"
                onClick={handleAddToFavorite}
              >
                <svg className={css.FavoriteSVG}>
                  <use href="/sprite.svg#icon-heart" />
                </svg>
              </button>
            </div>
          </div>
          <div className={css.reviewsMapDiv}>
            <div className={css.reviewsDiv}>
              <svg width="16" height="16">
                <use href="/public/sprite.svg#icon-gold_star" />
              </svg>
              <span className={css.span}>
                {truck.rating}({truck.reviews.length} Reviews)
              </span>
            </div>
            <div>
              <svg className={css.starMap}>
                <use href="/sprite.svg#icon-Map" />
              </svg>
              <span className={css.span}>{truck.location}</span>
            </div>
          </div>
        </div>
        <p className={css.descriptionsP}>{truck.description}</p>
        <ul className={css.parametersList}>
          <li className={css.parametersLi}>
            <svg className={css.liIcon}>
              <use href="/sprite.svg#icon-diagram" />
            </svg>
            <p>Automatic</p>
          </li>
          <li className={css.parametersLi}>
            <svg className={css.liIcon}>
              <use href="/sprite.svg#icon-fuel-pump" />
            </svg>
            <p>Petrol</p>
          </li>
          <li className={css.parametersLi}>
            <svg className={css.liIcon}>
              <use href="/sprite.svg#icon-cup-hot" />
            </svg>
            <p>Kitchen</p>
          </li>
          <li className={css.parametersLi}>
            <svg className={css.liIcon}>
              <use href="/sprite.svg#icon-wind" />
            </svg>
            <p>AC</p>
          </li>
        </ul>
        <button
          className={css.showMoreBtn}
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      </div>
    </div>
  );
}

export default TruckItem;