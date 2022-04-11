export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    // for Node.js Express back-end
    return {
      "x-auth-token": user.token,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    };
  } else {
    return {};
  }
}
