console.log("pilas e tal")
const navbar = document.querySelector('.navbar');
navbar.innerHTML += `
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
    <button class="btn-sm" style="background-color: #543780; border: none;" onclick="
        function myFunction(item, index) {
          console.log(item.children);
        }

        function parsePage() {
          let array = document.getElementsByTagName('tr');
          let filteredArray = Array.from(array).filter(tr => {
            let children = Array.from(tr.children);
            return children.some(child => child.tagName.toLowerCase() === 'td');
          });
          let arr = (filteredArray.map((x) => {
            let arr = (Array.from(x.getElementsByTagName('td')))
            return ({ course: arr[1].textContent.replace('(Teórica)', '').trim(), shift: arr[2].textContent.trim() })
          }));
        
          // Define the Object.groupBy function
          Object.groupBy = function (array, key) {
            return array.reduce(function (rv, x) {
              (rv[x[key]] = rv[x[key]] || []).push(x.shift);
              return rv;
            }, {});
          };
        
          // Group by course and output the result
          let groupedByCourse = Object.groupBy(arr, 'course');
          console.log(groupedByCourse);
        }
        parsePage();
        navigator.clipboard.writeText('TEXTO');
        alert('Copied the text: ' + 'TEXTO');
        
        ">
        <img src="https://calendario.cesium.di.uminho.pt/favicon-calendarium.ico" alt="Calendar Icon" style="height: 2rem;">
    </button>
    </li>
  </ul>
`;


function parsePage() {
  let array = document.getElementsByTagName('tr');
  let filteredArray = Array.from(array).filter(tr => {
    let children = Array.from(tr.children);
    return children.some(child => child.tagName.toLowerCase() === 'td');
  });
  let objs = (filteredArray.map((x) => {
    let arr = (Array.from( x.getElementsByTagName('td')))
    return ({course:arr[1].textContent.trim(),shift:arr[2].textContent})
  }));

}  