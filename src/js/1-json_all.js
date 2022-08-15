/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users 

  Написать функцию getUsers, которая по нажатию кнопки посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 3-х столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город 
    Имя | Почта | Город 
    и так далее для каждого пользователя...
*/

// const createMarkup = users => {
//   const tableHead = `
//    <thead>
//     <tr>
//       <th>Name</th>
//       <th>Email</th>
//       <th>City</th>
//     </tr>
//   </thead>`;

//   const usersMarkup = users
//     .map(
//       ({ name, email, address }) => `
//       <tr>
//         <td>${name}</td>
//         <td>${email}</td>
//         <td>${address.city}</td>
//       </tr>
//   `,
//     )
//     .join('');

//   return tableHead + usersMarkup;
// };
