


async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const countries = await response.json();
    console.log(countries)
    printCountries(countries)
    return countries;

 
  }
  fetchCountries().catch(error => {
    error.message; // 'An error has occurred: 404'
    console.log(error)
  });

  function printCountries(country) {
    const selectDrop = document.getElementById('countries');
    country.forEach(el => {

      var opt = document.createElement('option');
      opt.value = el.name.common;
      opt.innerHTML = el.name.common;
      selectDrop.appendChild(opt);

    })
  }



  