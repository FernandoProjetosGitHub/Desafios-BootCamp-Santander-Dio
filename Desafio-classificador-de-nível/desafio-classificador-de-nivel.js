
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões


// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante


let nomes = ["Blue", "Kenshin", "Medes", "Dinho", "Ley", "Ark", "Ró", "Bheg"];
let niveis = [1000, 2000, 5000, 7000, 8000, 9000, 10000, 10002 ];


for (let i = 0; i < nomes.length; i++) {

    let nome = nomes[i];
    let nivel = parseInt(niveis[i]);

    if (nivel <= 1000) {
        console.log(`"O Herói de nome ${nome}, está no nível de habilidade: Ferro"`);
    } else if (nivel >= 1001 && nivel <= 2000) {
        console.log(`"O Herói de nome ${nome}, está no nível de habilidade: Bronze"`);
    } else if (nivel >= 2001 && nivel <= 5000) {
        console.log(`"O Herói de nome ${nome}, está no nível de habilidade: Prata"`);
    } else if (nivel >= 5001 && nivel <= 7000) {
        console.log(`"O Herói de nome ${nome}, está no nível de habilidade: Ouro"`);
    } else if (nivel >= 7001 && nivel <= 8000) {
        console.log(`"O Herói de nome ${nome}, está no nível de habilidade: Platina"`);
    } else if (nivel >= 8001 && nivel <= 9000) {
        console.log(`"O Herói de nome ${nome}, está no nível de habilidade: Ascendente"`);
    } else if (nivel >= 9001 && nivel <= 10000) {
        console.log(`"O Herói de nome ${nome}, está no nível de habilidade: Imortal"`);
    } else if (nivel >= 10001) {
        console.log(`"O Herói de nome ${nome}, está no nível de habilidade: Radiante"`);
    } 
}

