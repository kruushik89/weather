let city = cityId;
let select = document.querySelector('#wheatherSelect');
let selectBody = '';
city.forEach(el => {
    selectBody += `<option value="${el.id}">${el.name}</option>`;
});

select.innerHTML += selectBody;


