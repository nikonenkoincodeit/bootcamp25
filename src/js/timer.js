import { convertMs } from "../helpers/convertMs";
import { timerRef, inputDateRef } from "./refs";

const addTextElement = (elem, text = "") => {
  elem.textContent = text;
};

const addTime = (time = 1) => {
  const currentDate = new Date();
  const resultDate = currentDate - time;
  const { days, hours, minutes, seconds } = convertMs(resultDate);
  addTextElement(
    timerRef,
    `Ви народилися ${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`
  );
};

const updateTime = (date) => {
  setTimeout(() => {
    addTime(date);
    updateTime(date);
  }, 1000);
};

const getTime = (e) => {
  const { value } = e.target;

  const date = new Date(value);
  const currentDate = new Date();
  const resultDate = currentDate - date;
  if (resultDate < 0)
    return addTextElement(timerRef, "Ви ввели невірну дату! Виправте.");

  addTime(date);
  updateTime(date);
};

inputDateRef.addEventListener("change", getTime);
