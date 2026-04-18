let index = 1;

const randomNum = () => 20 + Math.floor(80 * Math.random());

function getInitialData() {
  const numItems = 10;
  let data = [];

  for (let i = 0; i < numItems; i += 1) {
    data = getAppendedData(data);
  }

  return data;
}

function getAppendedData(data) {
  const ret = data.map(d => d);

  ret.push({
    id: `id-${index}`,
    value: randomNum(),
    name: `Item ${index}`
  });

  index += 1;

  return ret;
}

function getTruncatedData(data) {
  return data.map(d => d).slice(1);
}

function getUpdatedData(data) {
  return data.map(d => ({ id: d.id, value: randomNum(), name: d.name }));
}

export { getInitialData, getAppendedData, getTruncatedData, getUpdatedData };

