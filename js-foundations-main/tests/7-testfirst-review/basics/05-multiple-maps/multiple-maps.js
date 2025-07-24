function multipleMaps(mapper, maps) {
  let mapped = mapper.map((item) => {
    for (let map of maps) {
      //here map is an object inside an array
      if (map.hasOwnProperty(item)) {
        return map[item];
      }
    }
  });
  return mapped;
}
