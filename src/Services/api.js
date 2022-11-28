import axios from "axios"

const api = axios.create({
    base_URL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
    timeout: 20000,
})

export default api;

// ESTE CÓDIGO FOI FEITO PARA SER UTILIZADO NA RESPONSIÇÃO
// COM OS MÉTODOS TRY / CATCH, PORÉM NÃO FUNCIONOU!

// O CÓDIGO REALIZADO QUE NÃO FUNCIONOU ESTÁ ABAIXO APENAS PARA REGISTRO
// SE PUDER ME AJUDAR A FAZER DA FORMA CORRETA EU AGRADEÇO!




// useEffect(() => {
//     async function getHamburguerApi() {
//         try {
//             const response = await api.get("/products");
//             console.log(response);
//         } catch (err) {
//             console.error(err);
//         } finally {
//             console.log("efeito aconteceu");
//         }
//     }

//     getHamburguerApi();
// }, []);