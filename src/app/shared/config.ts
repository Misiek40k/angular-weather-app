export const config = Object({
  corsBypass: 'https://cors-anywhere.herokuapp.com/',
  api:{
    search: 'https://www.metaweather.com/api/location/search/?query='
  },
  header: {
    ico: 'cloud',
    txt: 'angular weather app',
  },
  title: {
    title: 'Choose your city',
    subtitle: 'and check the current weather',
  },
  input: {
    placeholder: 'City name...',
  }
})
