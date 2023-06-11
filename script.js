/* https://nguyenhuuvui89.github.io/my_degree_api/my_degree.json */

/* Do assignment using fetch then */
function click() {
  const api = 'https://nguyenhuuvui89.github.io/my_degree_api/my_degree.json';
  fetch(api)
    .then((response) => response.json())
    .then((json) => {
      const table = document.querySelector('.academic');
      table.innerHTML = '';
      const header = document.createElement('tr');
      table.appendChild(header);
      const headerArr = [];
      /* get header data */
      json.forEach((element) => {
        Object.keys(element).forEach((key) => (
          !headerArr.includes(key) ? headerArr.push(key) : null));
      });
      /* write header data into DOM */
      headerArr.forEach((th) => {
        const headerData = document.createElement('th');
        const text = document.createTextNode(th);
        headerData.appendChild(text);
        header.appendChild(headerData);
      });
      /* create tr, td and write data into DOM */
      json.forEach((element) => {
        const row = document.createElement('tr');
        table.appendChild(row);
        headerArr.forEach((headerElement) => {
          const tableData = document.createElement('td');
          const text = document.createTextNode(element[headerElement]);
          tableData.appendChild(text);
          row.appendChild(tableData);
        });
      });
    })
    /* write error message into DOM */
    .catch((error) => {
      const h3 = document.querySelector('.errorMessage');
      h3.innerHTML = `There are something wrongs: ${error}`;
    });
}

/* re-do assignment using async and await */

// const loadData = async () => {
//   try {
//     const api = 'https://nguyenhuuvui89.github.io/my_degree_api/my_degree.json';
//     const response = await fetch(api);
//     const json = await response.json();
//     return json;
//   } catch (error) {
//     const h3 = document.querySelector('.errorMessage');
//     h3.innerHTML = `There are something wrongs: ${error}`;
//   }
// };
// function click() {
//   loadData().then((json) => {
//     const table = document.querySelector('.academic');
//     table.innerHTML = '';
//     const header = document.createElement('tr');
//     table.appendChild(header);
//     const headerArr = [];
//     json.forEach((element) => {
//       Object.keys(element).forEach((key) => (
//         !headerArr.includes(key) ? headerArr.push(key) : null));
//     });
//     headerArr.forEach((th) => {
//       const headerData = document.createElement('th');
//       const text = document.createTextNode(th);
//       headerData.appendChild(text);
//       header.appendChild(headerData);
//     });
//     json.forEach((element) => {
//       const row = document.createElement('tr');
//       table.appendChild(row);
//       headerArr.forEach((headerElement) => {
//         const tableData = document.createElement('td');
//         const text = document.createTextNode(element[headerElement]);
//         tableData.appendChild(text);
//         row.appendChild(tableData);
//       });
//     });
//   });
// }

document.querySelector('.btn').addEventListener('click', click);
