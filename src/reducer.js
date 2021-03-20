export default function reducer(state, action) {
  switch (action.type) {
    // Lista completa de países
    case 'SET_COUNTRY_LIST': {
      return { ...state, countryList: action.payload };
    }
    // Retorna el país que coincida con el string ingresado
    case 'SET_COUNTRY_BY_NAME': {
      let list;
      if (state.filterByRegion !== '') {
        list = state.countryFilteredByRegion;
      } else {
        list = state.countryList;
      }
      const countryListByName = list.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, countryListByName };
    }
    // Filtra los países por región
    case 'FILTER_BY_REGION': {
      const { regionSelected } = action.payload;

      if ('' === regionSelected) {
        return { ...state, countryFilteredByRegion: [], filterByRegion: '' };
      }

      const countryFilteredByRegion = state.countryList.filter(
        (country) => country.region === regionSelected
      );

      return {
        ...state,
        countryFilteredByRegion,
        filterByRegion: regionSelected,
      };
    }

    default: {
      return state;
    }
  }
}
