import { Emprestimo_item } from './modelo/Emprestimo_item';
import { Emprestimo } from './modelo/Emprestimo';
import { Livro } from './modelo/Livro';
import { Sexo } from "./enum/Sexo"
import { Aluno } from "./modelo/Aluno"



const aluno = new Aluno('Diego', 25,Sexo.Masculino,123)

const livro1=  new Livro('MINDSET', new Date('2002-03-25'), 150,5,4)
const livro2=  new Livro('Inteligencia Emocional', new Date('2014-06-12'), 150,15,10)

const emprestimo1 = new Emprestimo()

const empItem1 = new Emprestimo_item(emprestimo1, livro1,)
const empItem2 = new Emprestimo_item(emprestimo1, livro2,)

emprestimo1.AddItemEmprestimo(empItem1)
emprestimo1.AddItemEmprestimo(empItem2)
emprestimo1.AddItemEmprestimo(empItem1)

console.log(emprestimo1)





