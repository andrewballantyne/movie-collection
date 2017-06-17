import { NAME_ASC } from '/constants/sort';

const initialState = {
  sortOption: NAME_ASC,
};

const sort = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sort;
