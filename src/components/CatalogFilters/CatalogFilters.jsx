import { useDispatch } from 'react-redux';
import css from './CatalogFilters.module.css';
import {
  setAC,
  setBathroom,
  setFilter,
  setForm,
  setKitchen,
  setTransmission,
  setTV,
} from '../../redux/filters/slice';
import { useState } from 'react';

function CatalogFilters() {
  const dispatch = useDispatch();

  const [AC, setACBox] = useState('');
  const [transmission, setTransmissionBox] = useState('');
  const [kitchen, setKitchenBox] = useState('');
  const [TV, setTVBox] = useState('');
  const [bathroom, setBathroomBox] = useState('');
  const [form, setFormBox] = useState('panelTruck');

  function handleSearch() {
    dispatch(setAC(AC));
    dispatch(setTransmission(transmission));
    dispatch(setKitchen(kitchen));
    dispatch(setTV(TV));
    dispatch(setBathroom(bathroom));
    dispatch(setForm(form));
  }

  function handleFilter(e) {
    dispatch(setFilter(e.target.value));
  }

  return (
    <div className={css.filtersContainer}>
      <div className={css.location}>
        <p className={css.locationP}>location</p>
        <input
          className={css.locationInput}
          name="cityName"
          type="text"
          placeholder="Kyiv, Ukraine"
          onChange={handleFilter}
        />
      </div>
      <div className={css.equipmentContainer}>
        <p className={css.filtersP}>Filters</p>
        <h2 className={css.VehicleH2}>Vehicle equipment</h2>
        <div className={css.line}></div>
        <div className={css.checkboxesContainer}>
          <div className={css.checkboxContainer}>
            <input
              className={css.checkboxInput}
              type="checkbox"
              id="AC"
              onChange={() => setACBox(true)}
            />
            <label htmlFor="AC" className={css.checkboxIcon}>
              <svg className={css.icon}>
                <use href="sprite.svg#icon-wind" />
              </svg>
              <p className={css.iconP}>AC</p>
            </label>
          </div>

          <div className={css.checkboxContainer}>
            <input
              className={css.checkboxInput}
              type="checkbox"
              id="Automatic"
              onChange={() => setTransmissionBox('automatic')}
            />
            <label htmlFor="Automatic" className={css.checkboxIcon}>
              <svg className={css.icon}>
                <use href="sprite.svg#icon-diagram" />
              </svg>
              <p className={css.iconP}>Automatic</p>
            </label>
          </div>

          <div className={css.checkboxContainer}>
            <input
              className={css.checkboxInput}
              type="checkbox"
              id="Kitchen"
              onChange={() => setKitchenBox(true)}
            />
            <label htmlFor="Kitchen" className={css.checkboxIcon}>
              <svg className={css.icon}>
                <use href="sprite.svg#icon-cup-hot" />
              </svg>
              <p className={css.iconP}>Kitchen</p>
            </label>
          </div>

          <div className={css.checkboxContainer}>
            <input
              className={css.checkboxInput}
              type="checkbox"
              id="TV"
              onChange={() => setTVBox(true)}
            />
            <label htmlFor="TV" className={css.checkboxIcon}>
              <svg className={css.icon}>
                <use href="sprite.svg#icon-tv" />
              </svg>
              <p className={css.iconP}>TV</p>
            </label>
          </div>

          <div className={css.checkboxContainer}>
            <input
              className={css.checkboxInput}
              type="checkbox"
              id="Bathroom"
              onChange={() => setBathroomBox(true)}
            />
            <label htmlFor="Bathroom" className={css.checkboxIcon}>
              <svg className={css.icon}>
                <use href="sprite.svg#icon-ph_shower" />
              </svg>
              <p className={css.iconP}>Bathroom</p>
            </label>
          </div>
        </div>
      </div>

      <div className={css.typeContainer}>
        <h2 className={css.VehicleH2}>Vehicle type</h2>
        <div className={css.line}></div>
        <div className={css.checkboxesContainer}>
          <div className={css.checkboxContainer}>
            <input
              className={css.checkboxInput}
              name="vehicle_type"
              type="radio"
              id="Van"
              onChange={() => setFormBox('panelTruck')}
            />
            <label htmlFor="Van" className={css.checkboxIcon}>
              <svg className={css.icon}>
                <use href="sprite.svg#icon-bi_grid-1x2" />
              </svg>
              <p className={css.iconP}>Van</p>
            </label>
          </div>

          <div className={css.checkboxContainer}>
            <input
              className={css.checkboxInput}
              name="vehicle_type"
              type="radio"
              id="Fully"
              onChange={() => setFormBox('fullyIntegrated')}
            />
            <label htmlFor="Fully" className={css.checkboxIcon}>
              <svg className={css.icon}>
                <use href="sprite.svg#icon-bi_grid" />
              </svg>
              <p className={css.iconP}>Fully Integrated</p>
            </label>
          </div>

          <div className={css.checkboxContainer}>
            <input
              className={css.checkboxInput}
              name="vehicle_type"
              type="radio"
              id="Alcove"
              onChange={() => setFormBox('alcove')}
            />
            <label htmlFor="Alcove" className={css.checkboxIcon}>
              <svg className={css.icon}>
                <use href="sprite.svg#icon-diagram" />
              </svg>
              <p className={css.iconP}>Alcove</p>
            </label>
          </div>
        </div>
      </div>
      <button className={css.searchBtn} type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default CatalogFilters;
