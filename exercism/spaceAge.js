function age(planet, seconds) {
    const planetSeconds = getPlanetSeconds(planet) * 31557600
    let planetYears = 0
    let remainder
    while(seconds > 0) {
        if(seconds >= planetSeconds) {
            seconds -= planetSeconds
            planetYears += 1
        } else {
            remainder = (seconds / planetSeconds)
            .toFixed(2)
            .split('.')
            .pop()
            break
        }
    }
    const planetAge = parseFloat([planetYears,remainder].join('.'))
    console.log(planetAge)
  }

  age('mercury',2134835688)
  
  function getPlanetSeconds(planet) {
    let planetSeconds = 0
    switch(planet) {
        case 'mercury':
            planetSeconds = 0.2408467
            break;
        case 'venus':
            planetSeconds = 0.61519726
            break;
        case 'earth':
            planetSeconds = 1
            break;
        case 'mars':
            planetSeconds = 1.8808158
            break;
        case 'jupiter':
            planetSeconds = 11.862615
            break;
        case 'saturn':
            planetSeconds = 29.447498
            break;
        case 'uranus':
            planetSeconds = 84.016846
            break;
        case 'neptune':
            planetSeconds = 164.79132
            break;
    }
    return planetSeconds
  }
