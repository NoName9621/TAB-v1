document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

let idTab = 1;

function iniciarApp(){
    resaltarTab();
    cambiarTab();
}

function resaltarTab(){
    const tabActual = document.querySelector(`[data-paso="${idTab}"]`);
    tabActual.classList.add('actual');
}

function cambiarTab(){
    const tabs = document.querySelectorAll('button.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', e => {
            const idTab = parseInt(e.target.dataset.paso);
            console.log(idTab);

            //Eliminamos la clase de tabActual
            document.querySelector('button.tab.actual').classList.remove('actual');
            //Resaltamos el tab al dar click
            const tab = document.querySelector(`[data-paso="${idTab}"]`);
            tab.classList.add('actual')
        })
    })
}