import axios from "axios";

import { updateStart, updateSuccess, updateError } from "./userSlice";

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.post("http://locallhost:8000/user", user);
        dispatch(updateSuccess(res.data));
    } catch (err) {
        console.log(err.toJSON())
        dispatch(updateError(err.toJSON().message));
    }
}
