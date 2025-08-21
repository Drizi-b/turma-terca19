const nomes = [];

nomes.push("jose");
nomes.push("ricardo");
nomes.push("patricia");
nomes.push("alex", "carla"); //jose, ricardo, patricia, alex, carla
nomes.pop(); //jose, ricardo, patricia, alex
nomes.unshift("beto"); //beto, jose, ricardo, patricia, alex
nomes.unshift("fabiana"); //fabiana, beto, jose, ricardo, patricia, alex
nomes.shift(); //beto, jose, ricardo, patricia, alex
console.log(nomes);