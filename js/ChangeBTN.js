function changeContent(event) {

    const btnChange = document.querySelectorAll('.services__header-button button');
    btnChange.forEach(knopka => {
        knopka.classList.remove('active');
    });

    const tableChange = document.querySelectorAll('.services__footer-Table');
    tableChange.forEach(tabel => {
        tabel.classList.remove('active');
    });

    const item = event.target.closest('.button');
    const table = document.getElementsByClassName(item.getAttribute('data-table'))[0];
    item.classList.add('active');
    table.classList.add('active');

}

const btnChange = document.querySelectorAll('.services__header-button button');
btnChange.forEach(knopka => {
    knopka.addEventListener('click', changeContent);
});
