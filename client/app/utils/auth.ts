const companyId = localStorage.getItem("userId")
  ? parseInt(localStorage.getItem("userId") || "")
  : undefined;
const role = localStorage.getItem("role");

let isAuth: boolean = false;

if (companyId) {
  isAuth = true;
}

const userConnected = { isAuth, companyId, role };

export default userConnected;
