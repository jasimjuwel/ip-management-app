import axios from "axios";
import Cookies from "js-cookie";
import { alertPop } from "./helper";

const base_url = process.env.REACT_APP_BASE;
const token = Cookies.get("IPToken") || "";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const alert = (messages) => {
  alertPop("error", messages ? messages : "Something went wrong");
};

/* query ---> api url to query with
   no_token ---> acts as a flag for no need to use token */
export const getData = async (query, no_token) => {
  try {
    let data = await axios.get(`${base_url}${query}`, {
      headers: no_token
        ? {}
        : {
          'Authorization': `Bearer ${token}`,
        },
    });
    return data;
  } catch (error) {
    let errors = error.response?.data?.errors;

    if (error.response?.data?.message) {
      alert(error.response?.data?.message);
    } else if (errors.length) {
      if (errors && Object.keys(errors).length) {
        for (var key of Object.keys(errors)) {
          // console.log(key + " -> " + errors[key]);
          alert(errors[key]);
        }
      }
    } else {
      alert();
    }
  }
};

/* query ---> api url to query with
     data ---> data to be posted
     no_token ---> acts as a flag for no need to use token */
export const postData = async (query, data, no_token, form) => {
  try {
    console.log(`${base_url}${query}`);
    let res = await axios({
      method: "post",
      url: `${base_url}${query}`,
      headers: no_token
        ? {}
        : {
          'Authorization': `Bearer ${token}`,
        },
      data: data,
    });

    return res;
  } catch (error) {
    console.log(error)
    let errors = error.response?.data?.errors;


    if (errors && Object.keys(errors).length && form) {
      let errValue = [];
      for (var key of Object.keys(errors)) {
        var error_data = {
          name: key,
          errors: errors[key]
        }
        errValue.push(error_data);
      }
      form.setFields(errValue);
    }
    else if (error.response?.data?.message) {
      alert(error.response?.data?.message);
    }
    else {
      alert();
    }


    return false;
  }
};

export const putData = async (query, data, no_token, form) => {
  try {
    console.log(`${base_url}${query}`);
    let res = await axios({
      method: "put",
      url: `${base_url}${query}`,
      headers: no_token
        ? {}
        : {
          'Authorization': `Bearer ${token}`,
        },
      data: data,
    });

    return res;
  } catch (error) {
    console.log(error)
    let errors = error.response?.data?.errors;


    if (errors && Object.keys(errors).length && form) {
      let errValue = [];
      for (var key of Object.keys(errors)) {
        var error_data = {
          name: key,
          errors: errors[key]
        }
        errValue.push(error_data);
      }
      form.setFields(errValue);
    }
    else if (error.response?.data?.message) {
      alert(error.response?.data?.message);
    }
    else {
      alert();
    }


    return false;
  }
};

export const deleteData = async (query, no_token) => {
  try {
    let data = await axios.delete(`${base_url}${query}`, {
      headers: no_token
        ? {}
        : {
          'Authorization': `Bearer ${token}`,
        },
    });
    return data;
  } catch (error) {
  }
};
