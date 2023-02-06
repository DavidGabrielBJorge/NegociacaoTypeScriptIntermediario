//Dentro de TS existe o enum que serve para criar uma variavel
//constante que poode ser usada no projeto inteiro, nesse caso
//vai criar uma variavel para pegar os números do dia da semana
export var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["DOMINGO"] = 0] = "DOMINGO";
    DiasDaSemana[DiasDaSemana["SEGUNDA"] = 1] = "SEGUNDA";
    DiasDaSemana[DiasDaSemana["TER\u00C7A"] = 2] = "TER\u00C7A";
    DiasDaSemana[DiasDaSemana["QUARTA"] = 3] = "QUARTA";
    DiasDaSemana[DiasDaSemana["QUINTA"] = 4] = "QUINTA";
    DiasDaSemana[DiasDaSemana["SEXTA"] = 5] = "SEXTA";
    DiasDaSemana[DiasDaSemana["SABADO"] = 6] = "SABADO";
})(DiasDaSemana || (DiasDaSemana = {}));
/*O TS classifica de forma auromatica os valores das variaveis como:
0 = DOMINGO
1 = SEGUNDA
2 = TERÇA
3 = QUARTA
4 = QUINTA
5 = SEXTA
6 = SABADO
*/ 
