const getLocalState = state => state.sort;

export const getSortOption = state => getLocalState(state).sortOption;
