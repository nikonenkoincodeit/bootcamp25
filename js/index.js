// Зробіть всі зовнішні посилання помаранчевими, змінюючи їхню властивість style.

// Посилання є зовнішнім, якщо:

// Її href містить:
// Але не починається з http://internal.com.
// Приклад:

// <a name="list">the list</a>
// <ul>
//   <li><a href="http://google.com">http://google.com</a></li>
//   <li><a href="/tutorial">/tutorial.html</a></li>
//   <li><a href="local/path">local/path</a></li>
//   <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
//   <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//   <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>

const listHrefEl = document.querySelectorAll("[href]");

listHrefEl.forEach(elem => {
  console.dir(elem);
  if (elem.getAttribute("href").includes("://")) {
    elem.style.color = "green";
  }
})
