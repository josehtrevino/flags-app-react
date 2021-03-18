import React, { useEffect } from 'react';
import styled from 'styled-components';
import Country from './Country';
import { useSelector, useDispatch } from 'react-redux';

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background-color: var(--background);
  justify-content: center;
  padding: 4em 2em;
`;

function CountryList() {
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.coutryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }
    return state.countryList;
  });
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list,
        });
      })
      .catch(() => {
        console.log('hubo un error :(');
      });
  }, [dispatch]);
  return (
    <CountryListStyled>
      {countryList.map(({ name, flag, population, capital, region }) => {
        return (
          <Country
            flag={flag}
            name={name}
            key={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
