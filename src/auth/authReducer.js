import { types } from "../types/types";

/*El reducer no es mas que una simple función que por medio de el action modifcara 
 el state y react redibujara todo */

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true,
            };
        case types.logout:
            return {
                logged: false,
            };
        default:
            return state;
    }
};
