import { useDispatch, useSelector } from 'react-redux';
import TruckItem from '../TruckItem/TruckItem';
import css from './TrucksList.module.css';
import { useEffect, useState } from 'react';
import { fetchTrucks } from '../../redux/operations';
import { selectAllTrucks, selectTotalTrucks } from '../../redux/selectors';
import {
  selectAC,
  selectBathroom,
  selectFilter,
  selectForm,
  selectKitchen,
  selectTransmission,
  selectTV,
} from '../../redux/filters/selectors';

function TrucksList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const allTrucks = useSelector(selectAllTrucks);
  const totalTrucks = useSelector(selectTotalTrucks);

  const transmission = useSelector(selectTransmission);
  const AC = useSelector(selectAC);
  const bathroom = useSelector(selectBathroom);
  const kitchen = useSelector(selectKitchen);
  const TV = useSelector(selectTV);
  const form = useSelector(selectForm);

  const maxPages = Math.ceil(totalTrucks / 4);

  const [currentPage, setCurrentPage] = useState(1);

  const isVisible = currentPage >= maxPages;

  const filteredTrucks = allTrucks.filter(truck =>
    truck.location.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(
      fetchTrucks({
        limit: 4,
        page: currentPage,
        transmission: transmission,
        AC: AC,
        bathroom: bathroom,
        kitchen: kitchen,
        TV: TV,
        form: form,
      })
    );
  }, [dispatch, currentPage, transmission, AC, bathroom, kitchen, TV, form]);

  function loadMore() {
    setCurrentPage(currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className={css.trucksListContainer}>
      <ul className={css.trucksList}>
        {filteredTrucks.map(truck => (
          <li key={truck.id}>
            <TruckItem truck={truck} />
          </li>
        ))}
      </ul>

      {!isVisible && (
        <button
          className={css.loadMoreBtn}
          type="button"
          onClick={loadMore}
          disabled={currentPage >= maxPages}
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default TrucksList;
