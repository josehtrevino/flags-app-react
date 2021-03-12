import React from 'react';
import styled from 'styled-components';
import Country from './Country';

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background-color: var(--background);
  justify-content: center;
  padding: 4em 2em;
`;

function CountryList() {
  return (
    <CountryListStyled>
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png"
        name="Mexico"
        population={126000000}
        region="America"
        capital="Mexico City"
      />
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png"
        name="Mexico"
        population={126000000}
        region="America"
        capital="Mexico City"
      />
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png"
        name="Mexico"
        population={126000000}
        region="America"
        capital="Mexico City"
      />
    </CountryListStyled>
  );
}

export default CountryList;
