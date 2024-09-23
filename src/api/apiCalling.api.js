import axios from "axios"
import { resetApiStatus, setApiStatus } from "../store/slices/apiResonseHandler.slice"
export const apiCalling = ({method , url , contentType , formData }) => async (dispatch) =>{
    console.log("Api calling")
    const options = {
        method,
        url,
        headers: {
          Authorization: 'Bearer your-token',
          'Content-Type': contentType
        },
        data: formData,
        withCredentials: true,
      }
    try {
         dispatch(setApiStatus())
         const response = await axios(options)
         dispatch(resetApiStatus())
         return response.data
    }
    catch (err){
        dispatch(resetApiStatus())
        return err?.response?.data
    }
}