import React, { useEffect } from 'react';
import styled from 'styled-components';
import Country from './Country';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from './Wrapper';

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 40px;
  grid-template-columns: repeat(auto-fill, 270px);
  background-color: var(--background);
  justify-content: center;
  padding: 3em 0;
`;

function CountryList() {
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.countryFilteredByRegion;
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
    <Wrapper>
      <CountryListStyled>
        {countryList.map(
          ({
            name,
            flag,
            population,
            capital,
            region,
            nativeName,
            cioc,
            alpha2Code,
          }) => {
            return (
              <Country
                flag={flag}
                name={name}
                key={name}
                population={population}
                region={region}
                capital={capital}
                nativeName={nativeName}
                cioc={cioc}
                alpha2Code={alpha2Code}
              />
            );
          }
        )}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
