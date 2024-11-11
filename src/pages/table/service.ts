import { data } from "../../assets/data";
import { OptionDataResponse } from "../../models/OptionData";

export const GetOptionData = (): Promise<OptionDataResponse> => {
  console.log("service");
  return fetch("http://192.168.31.58:9000/active_contracts_NF_V2", {
    method: "GET",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return Promise.resolve(data);
    });
};
