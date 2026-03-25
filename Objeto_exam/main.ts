import { Exam, Answer, Weight } from "./Exam.js";

const gabaritoOficial = new Answer("Gabarito", ["a", "b", "c", "d"]);
const pesosDasQuestoes = new Weight([2, 2, 3, 3]);
//
const exame = new Exam(gabaritoOficial, pesosDasQuestoes);

const aluno1 = new Answer("Ludmilla", ["a", "b", "c", "d"]);
const aluno2 = new Answer("Rafael",   ["a", "x", "c", "x"]); 
const aluno3 = new Answer("Melquisedeque", ["x", "x", "x", "x"]);
const aluno4 = new Answer("Chico", ["a", "b", "x", "x"]); 
//
exame.add(aluno1);
exame.add(aluno2);
exame.add(aluno3);
exame.add(aluno4);
//
console.log("--- Testes do Exame ---");
console.log("Médias das notas:", exame.avg());
console.log("As 2 maiores notas:", exame.max(2)); 
console.log("As 2 menores notas:", exame.min(2));
console.log("Notas menores que 5:", exame.lt(5));
console.log("Notas maiores que 5:", exame.gt(5));