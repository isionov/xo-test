export const objKeyLength = (obj) => Object.keys(obj).length;
export const getObjSingleKey = (obj) => Object.keys(obj)[0];

const getRow = (position) => {
  return Number(position.split("-")[0]);
};
const getColumn = (position) => {
  return Number(position.split("-")[1]);
};

const getBoundary = (position, length, size) => {
  const min = position - length + 1 >= 0 ? position - length + 1 : 0;
  const max =
    position + length - 1 <= size - 1 ? position + length - 1 : size - 1;

  return [min, max];
};

const findWinner = ({ position, person }, state, size, length) => {
  const row = getRow(position);
  const column = getColumn(position);

  // Считаем клетки подряд
  let count = 0;

  // Границы поиска
  const [rowBoundaryMin, rowBoundaryMax] = getBoundary(row, length, size);
  const [columnBoundaryMin, columnBoundaryMax] = getBoundary(
    column,
    length,
    size
  );

  // Вертикаль
  for (let index = rowBoundaryMin; index <= rowBoundaryMax; index++) {
    if (count === length) {
      return person;
    }

    const id = `${index}-${column}`;

    if (state[id] === person) {
      count++;
    } else {
      count = 0;
    }

    if (index === rowBoundaryMax) count = 0;
  }

  // Горизонталь
  for (let index = columnBoundaryMin; index <= columnBoundaryMax; index++) {
    if (count === length) {
      return person;
    }

    const id = `${row}-${index}`;

    if (state[id] === person) {
      count++;
    } else {
      count = 0;
    }

    if (index === columnBoundaryMax) count = 0;
  }

  // Первая диагональ
  for (let index = 0; index <= length * 2 - 1; index++) {
    if (count === length) {
      return person;
    }

    const id = `${rowBoundaryMin + index}-${columnBoundaryMin + index}`;

    if (state[id] === person) {
      count++;
    } else {
      count = 0;
    }

    if (index === columnBoundaryMax) count = 0;
  }

  // Вторая диагональ
  for (let index = 0; index <= length * 2 - 1; index++) {
    if (count === length) {
      return person;
    }

    if (
      rowBoundaryMin + index > rowBoundaryMax ||
      columnBoundaryMax - index < columnBoundaryMin
    ) {
      count = 0;
      break;
    }

    const id = `${rowBoundaryMin + index}-${columnBoundaryMax - index}`;

    if (state[id] === person) {
      count++;
    } else {
      count = 0;
    }

    if (index === columnBoundaryMax) count = 0;
  }

  return null;
};

export const checkAllPersons = (state, size, length) => {
  for (const key in state) {
    if (Object.hasOwnProperty.call(state, key)) {
      const position = key;
      const person = state[key];

      const winner = findWinner({ position, person }, state, size, length);

      if (winner !== null) return winner;
    }
  }
};
