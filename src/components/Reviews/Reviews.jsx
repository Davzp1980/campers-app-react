import { useSelector } from 'react-redux';
import css from './Reviews.module.css';
import { selectCurrentTruck } from '../../redux/filters/selectors';

export default function Reviews() {
  // console.log(currentTruck.reviews);

  const currentTruck = useSelector(selectCurrentTruck);

  console.log(currentTruck.reviews);

  if (!currentTruck || !currentTruck.reviews) {
    return <p>No reviews available</p>;
  }

  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        {currentTruck.reviews?.map(review => {
          let ratingGold = [];

          for (let i = 0; i < review.reviewer_rating; i++) {
            ratingGold.push(1);
          }

          let ratingGray = [];

          for (let i = 0; i < 5 - review.reviewer_rating; i++) {
            ratingGray.push(1);
          }
          return (
            <li className={css.reviewLi} key={review.reviewer_name}>
              <div className={css.reviewDiv}>
                <p className={css.userLogo}>
                  {review.reviewer_name.slice(0, 1)}
                </p>
                <div className={css.ratingUserName}>
                  <p className={css.userName}>{review.reviewer_name}</p>
                  <div className={css.ratingsDiv}>
                    <ul className={css.ratingGold}>
                      {ratingGold.map((item, index) => (
                        <li key={index}>
                          <svg width="16" height="16">
                            <use href="/public/sprite.svg#icon-gold_star" />
                          </svg>
                        </li>
                      ))}
                    </ul>

                    <ul className={css.ratingGray}>
                      {ratingGray.map((item, index) => (
                        <li key={index}>
                          <svg width="16" height="16">
                            <use href="/public/sprite.svg#icon-star" />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
