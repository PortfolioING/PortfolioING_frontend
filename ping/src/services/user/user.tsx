import GetPortfolios from "../../apis/getPortolios.js";
import GetUser from "../../apis/getUser.js";
function ajaxPortfolios(userId) {
  let portfolios = null;
  const suspender = GetPortfolios(userId).then((data) => {
    portfolios = data;
  });

  return {
    read() {
      if (portfolios === null) {
        throw suspender; // 데이터가 아직 로드되지 않았으면 suspender를 던짐
      } else {
        return portfolios; // 데이터가 로드되었으면 반환
      }
    },
  };
}
function ajaxUser(userId) {
  let user = null;
  const suspender = GetUser(userId).then((data) => {
    user = data;
  });

  return {
    read() {
      if (user === null) {
        throw suspender; // 데이터가 아직 로드되지 않았으면 suspender를 던짐
      } else {
        return user; // 데이터가 로드되었으면 반환
      }
    },
  };
}
function fetchData(userId) {
  return {
    user: ajaxUser(userId),
    portfolios: ajaxPortfolios(userId),
  };
}

export default fetchData;
