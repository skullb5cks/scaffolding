const initialState = {
    navigation: []
};

const navigation = (state = initialState, action) => {
    const {
        type,
        label,
        index
    } = action;

    switch (type) {
    case 'ADD_ITEM':
        return [
            ...state,
            {
                label,
                index
            }
        ];
    default:
        return state;
    }
};

export default navigation;
