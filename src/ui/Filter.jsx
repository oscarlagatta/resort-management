import styled, { css } from "styled-components";
import {useSearchParams} from "react-router-dom";
import SortBy from "./SortBy.jsx";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const Filter = ({filterField, options}) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
      searchParams.set(filterField,  value);
      setSearchParams(searchParams);
  }

  return (
      <StyledFilter>
          {
              options.map((option)=> (
                  <FilterButton
                      key={option.value}
                      onClick={() => handleClick(option.value)}
                        active={option.value === currentFilter}
                      disabled={option.value === currentFilter}
                  >
                      {option.label}
                  </FilterButton>
                  )
              )
          }
          <SortBy options={[
              {value: 'name-asc', label: 'Sort by name (A-Z)'},
              {value: 'name-desc', label: 'Sort by name (Z-A)'},
              {value: 'startDate-asc', label: 'Sort by Date ascending'},
              {value: 'startDate-desc', label: 'Sort by Date descending'},
              {value: 'regularPrice-asc', label: 'Sort by price (low first)'},
              {value: 'regularPrice-desc', label: 'Sort by price (high first)'},
              {value: 'maxCapacity-asc', label: 'Sort by capacity (low first)'},
              {value: 'maxCapacity-desc', label: 'Sort by capacity (high first)'},
          ]} />

      </StyledFilter>
  )
}

export default Filter;
