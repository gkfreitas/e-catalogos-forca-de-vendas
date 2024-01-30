import { useState } from 'react';
import downLine from '../../assets/icons/down-line.svg';
import filterIcon from '../../assets/icons/filter-icon.svg';
import { mockFilters } from '../../mocks/mockFilters';
import InputCheckbox from '../InputCheckbox';
import {
  FilterContainer,
  FilterContent,
  FilterIconContainer,
  FilterName,
  FilterSection,
  FilterTitle,
  InputsContainer,
  ShowCotentIcon,
  SubFilterContainer,
  SubFilterName,
  SubFilterNameContainer,
} from './styles';

export default function FilterAvaliableProducts({ setFilters, setSubFilters }) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [showSubFilter, setShowSubFilter] = useState({});

  const handleFilters = ({ target }, filterName) => {
    const { name, checked } = target;

    setFilters((prevState) => ({
      ...prevState,
      [filterName]: checked ? [...prevState[filterName] || [], name]
        : [...prevState[filterName]].filter((type) => type !== name),
    }));
  };

  const handleSubFilters = ({ target }, filterName) => {
    const { name, checked } = target;

    setSubFilters((prevState) => ({
      ...prevState,
      [filterName]: checked ? [...prevState[filterName] || [], name]
        : [...prevState[filterName]].filter((type) => type !== name),
    }));
  };

  const toggleSubFilter = (name) => {
    setShowSubFilter((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <FilterContainer $visible={ filterVisible }>
      <FilterContent>
        <FilterTitle>
          Filtrar
        </FilterTitle>
        {
          mockFilters.map(({ filterName, options, subFilters }) => (
            <div key={ filterName }>
              <FilterSection>
                <FilterName>{filterName}</FilterName>
                <InputsContainer>
                  {options && options.map((option) => (
                    <InputCheckbox
                      name={ option }
                      onClick={ (e) => handleFilters(e, filterName) }
                      key={ option }
                      text={ option }
                    />
                  ))}
                  {subFilters && subFilters.map((subFilter) => (
                    <div key={ subFilter.filterName }>
                      <SubFilterNameContainer
                        onClick={ (e) => toggleSubFilter(e.target.innerText) }
                      >
                        <SubFilterName>{subFilter.filterName}</SubFilterName>
                        <ShowCotentIcon
                          src={ downLine }
                          alt="seta para baixo"
                          onClick={ () => toggleSubFilter(subFilter.filterName) }
                          $visible={ showSubFilter[subFilter.filterName] }
                        />
                      </SubFilterNameContainer>
                      <SubFilterContainer
                        $visible={ showSubFilter[subFilter.filterName] }
                        key={ subFilter.filterName }
                      >
                        { subFilter.options.map((option) => (
                          <InputCheckbox
                            name={ option }
                            onClick={ (e) => handleSubFilters(e, subFilter.filterName) }
                            key={ option }
                            text={ option.replace(/├â/g, 'Ã') }
                          />
                        ))}
                      </SubFilterContainer>
                    </div>
                  ))}
                </InputsContainer>
              </FilterSection>
              <div style={ { width: '70%', height: '1px', backgroundColor: '#ccc' } } />
            </div>
          ))
        }
      </FilterContent>
      <FilterIconContainer
        onClick={ () => setFilterVisible(!filterVisible) }
      >
        <img
          src={ filterIcon }
          alt="icone de filtro"
        />
      </FilterIconContainer>
    </FilterContainer>
  );
}
