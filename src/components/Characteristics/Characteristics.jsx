import { useSelector } from 'react-redux';
import css from './Characteristics.module.css';
import { selectCurrentTruck } from '../../redux/filters/selectors';
import clsx from 'clsx';

export default function Characteristics() {
  const currentTruck = useSelector(selectCurrentTruck);

  const longFeatures = [
    { key: 'transmission', label: 'Automatic', icon: 'icon-diagram' },
    { key: 'engine', label: 'Petrol', icon: 'icon-fuel-pump' },
    { key: 'AC', label: 'AC', icon: 'icon-wind' },
    { key: 'bathroom', label: 'Bathroom', icon: 'icon-ph_shower' },
    { key: 'kitchen', label: 'Kitchen', icon: 'icon-cup-hot' },
    { key: 'TV', label: 'TV', icon: 'icon-tv' },
    { key: 'radio', label: 'Radio', icon: 'icon-radios' },
    { key: 'refrigerator', label: 'Refrigerator', icon: 'icon-fridge' },
    {
      key: 'microwave',
      label: 'Microwave',
      icon: 'icon-microwave',
      class: true,
    },
    { key: 'gas', label: 'Gas', icon: 'icon-gas-stove', class: true },
    { key: 'water', label: 'Water', icon: 'icon-water', class: true },
  ];

  const validFeatures = longFeatures.filter(
    feature => currentTruck[feature.key]
  );

  return (
    <div className={css.container}>
      <div className={css.parametersDiv}>
        <ul className={css.list}>
          {validFeatures.map(feature => {
            return (
              <li key={feature.key} className={css.item}>
                <svg
                  width="20px"
                  height="20px"
                  className={clsx(feature.class && css.icon)}
                >
                  <use href={'/sprite.svg#' + feature.icon}></use>
                </svg>
                <p className={css.label}>{feature.label}</p>
              </li>
            );
          })}
        </ul>
        <div className={css.detailsDiv}>
          <h2 className={css.h2Details}>Vehicle details</h2>
          <div className={css.lineDiv}></div>
          <ul className={css.descriptionList}>
            <li className={css.descriptionLi}>
              <p className={css.descriptionP}>Form</p>
              <p className={css.descriptionP}>{currentTruck.form}</p>
            </li>
            <li className={css.descriptionLi}>
              <p className={css.descriptionP}>Length</p>
              <p className={css.descriptionP}>{currentTruck.length}</p>
            </li>
            <li className={css.descriptionLi}>
              <p className={css.descriptionP}>Width</p>
              <p className={css.descriptionP}>{currentTruck.width}</p>
            </li>
            <li className={css.descriptionLi}>
              <p className={css.descriptionP}>Height</p>
              <p className={css.descriptionP}>{currentTruck.height}</p>
            </li>
            <li className={css.descriptionLi}>
              <p className={css.descriptionP}>Tank</p>
              <p className={css.descriptionP}>{currentTruck.tank}</p>
            </li>
            <li className={css.descriptionLi}>
              <p className={css.descriptionP}>Consumption</p>
              <p className={css.descriptionP}>{currentTruck.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
