import { NavLink, Outlet, useParams } from 'react-router';
import css from './Details.module.css';
import { useEffect } from 'react';
import { getList } from '../../app';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTruck, setReviewsLength } from '../../redux/filters/slice';
import {
  selectCurrentTruck,
  selectReviewsLength,
} from '../../redux/filters/selectors';
import clsx from 'clsx';
import BookingForm from '../../components/BookingForm/BookingForm';

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const currentTruck = useSelector(selectCurrentTruck);
  const reviewsLength = useSelector(selectReviewsLength);

  const truckId = parseInt(id);

  useEffect(() => {
    if (truckId === 'undefined') return;
    async function getDetails(id) {
      const res = await getList(id);

      dispatch(setCurrentTruck(res));
      dispatch(setReviewsLength(res.reviews.length));
    }

    getDetails(truckId);
  }, [truckId, dispatch]);

  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  return (
    <div className={css.container}>
      <div className={css.headerDiv}>
        <h2 className={css.truckName}>{currentTruck.name}</h2>
        <div className={css.revLocPrice}>
          <div className={css.reviewsLocation}>
            <p className={css.reviews}>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.55778 0.838169C7.74538 0.482595 8.25462 0.482596 8.44222 0.838169L10.3305 4.41705C10.4028 4.55417 10.5347 4.64997 10.6874 4.67641L14.6747 5.36629C15.0708 5.43484 15.2282 5.91915 14.948 6.20745L12.1277 9.10921C12.0197 9.22039 11.9693 9.3754 11.9914 9.52886L12.5674 13.5341C12.6246 13.932 12.2126 14.2314 11.8519 14.054L8.22062 12.2685C8.0815 12.2001 7.9185 12.2001 7.77938 12.2685L4.14815 14.054C3.78737 14.2314 3.37539 13.932 3.43262 13.5341L4.00861 9.52886C4.03068 9.3754 3.98031 9.22039 3.87226 9.10921L1.05204 6.20745C0.771841 5.91915 0.929206 5.43484 1.32535 5.36629L5.31256 4.67641C5.46533 4.64997 5.59719 4.55417 5.66954 4.41705L7.55778 0.838169Z"
                  fill="#FFC531"
                />
              </svg>
              <span className={css.span}>
                {currentTruck.rating}({reviewsLength} Reviews)
              </span>
            </p>
            <p className={css.location}>
              <svg className={css.starMap}>
                <use href="/sprite.svg#icon-Map" />
              </svg>
              <span className={css.span}>{currentTruck.location}</span>
            </p>
          </div>
          <p className={css.price}>&euro;{currentTruck.price}.00</p>
        </div>
        <ul className={css.photosList}>
          {currentTruck.gallery?.map((item, index) => (
            <li className={css.photoLi} key={index}>
              <img
                className={css.photo}
                src={item.original}
                alt={currentTruck.name}
              />
            </li>
          ))}
        </ul>
        <p className={css.photoDescription}>{currentTruck.description}</p>
      </div>
      <div className={css.featuresReviews}>
        <ul className={css.featuresReviewsLinks}>
          <li>
            <NavLink className={activeLink} to="features">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink className={activeLink} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
        <div className={css.line}></div>
      </div>
      <div className={css.wrapper}>
        <Outlet />
        <BookingForm />
      </div>
    </div>
  );
}
