const locations = [
    {
      state: 'São Paulo',
      country: 'Brasil',
      population: {
        estimate: '44.9 mi',
        density: '184,99 hab/km2',
      },
    },
    {
      state: 'Rio Grande do Sul',
      country: 'Brasil',
      population: {
        estimate: '11.377 mi',
        density: '40,38 ab/km2',
      },
    },
    {
      state: 'Rio de Janeiro',
      country: 'Brasil',
      population: {
        estimate: '17.366 mi',
        density: '396,67 hab/km2',
      },
    },
  ];
  for (let { state, population: { estimate } } of locations) {
    console.log(`State: ${state} - Population ${estimate}`);
  }