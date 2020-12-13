import config from "../config";
import TokenService from "./token-service";

export default {
  postUser(user) {
    return fetch(`https://warm-springs-30260.herokuapp.com/api/admin`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  loginUser(user) {
    return fetch(`https://warm-springs-30260.herokuapp.com/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};
