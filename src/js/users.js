import data from "../data/employees.json";

import { convertMs } from "../helpers/convertMs";
import { tableBodyRef } from "./refs";

const getYare = (birthDay) => {
  const currentDate = new Date();
  const birthDayDate = new Date(birthDay);
  const resultDate = currentDate - birthDayDate;
  const { years } = convertMs(resultDate);
  return years;
};

const getBirthDay = (birthDay) => {
  const currentDate = new Date();
  const birthDayDate = new Date(birthDay);
  const cM = currentDate.getMonth();
  const cD = currentDate.getDate();
  const bM = birthDayDate.getMonth();
  const bD = birthDayDate.getDate();

  return cM === bM && cD === bD;
};

const createMarkup = (data = []) => {
  return data.map(({ birthDay, username }, index) => {
    console.log("object :>> ", getBirthDay(birthDay));

    return `<tr>
    <th scope="row">${index + 1}</th>
    <td>${username}</td>
    <td>${getYare(birthDay)}</td>
    <td>${getBirthDay(birthDay) ? "Yes" : "No"}</td>
  </tr>`;
  });
};

const markup = createMarkup(data);
tableBodyRef.insertAdjacentHTML("beforeend", markup.join(""));
