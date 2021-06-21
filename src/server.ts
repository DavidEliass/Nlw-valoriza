import express from "express";

const app = express();

/**
 * GET    =>  Buscar uma informação
 * POST   =>  Inserir (Criar) uma informação
 * PUT    =>  Alterar uma informação
 * DELETE =>  Remover um dado
 * PATCH  =>  Alterar uma informação especifica 
*/


app.get("/", (request, response) => {
    // Request => Entrando
    // Response => Saindo

    return response.send("Olá NW!")
});

app.post("/post", (request, response) => {
    return response.send("Olá NW  método POST!")
})



app.listen(3000, () => console.log("Server is Running"));