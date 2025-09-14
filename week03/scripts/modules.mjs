// Importa o objeto do curso (default export)
import byuiCourse from './course.mjs';

// Importa função de popular o select (named export)
import { populateSections } from './sections.mjs';

// Importa funções de renderização do DOM (named exports)
import { setTitle, renderSections } from './output.mjs';

// Inicializa título, select e tabela
setTitle(byuiCourse);
populateSections(byuiCourse.sections);
renderSections(byuiCourse.sections);

// Eventos dos botões
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    if (!sectionNum) return; // evita erro se nada estiver selecionado

    byuiCourse.changeEnrollment(sectionNum, true);
    renderSections(byuiCourse.sections); // atualiza tabela
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    if (!sectionNum) return;

    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections); // atualiza tabela
});
