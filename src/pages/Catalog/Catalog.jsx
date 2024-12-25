import CatalogFilters from '../../components/CatalogFilters/CatalogFilters';
import TrucksList from '../../components/TrucksList/TrucksList';
import css from './Catalog.module.css';

function Catalog() {
  return (
    <div className={css.catalogContainer}>
      <CatalogFilters />
      <TrucksList />
    </div>
  );
}

export default Catalog;
