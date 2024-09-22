# :checkered_flag: J’adore

Um site destinado a ser vitrine e loja de perfumes franceses.

## :technologist: Membros da equipe

548316, Damião Gomes da Silva Neto, Ciência da Computação

548317, Heric da Silva Cruz, Ciência da Computação

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário não registrado
- Usuário registrado
- Administrador

## :spiral_calendar: Entidades ou tabelas do sistema

- Usuário
- Perfume
- Comentários

## :triangular_flag_on_post: Principais funcionalidades da aplicação

- Usuário não registrado pode ver perfumes e datalhes sobre o mesmo
- Usuário registrado pode fazer comentarios.
- Administrador pode remover, adicionar ou modificar perfumes

---

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:

---

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.
- Vue
- HTML
- Css
- Javascript
- Axios
- Pinia
 
**Backend:**
- Strapi
## :shipit: Operações implementadas para cada entidade da aplicação

| Entidade    | Criação | Leitura | Atualização | Remoção |
| ----------- | ------- | ------- | ----------- | ------- |
| Usuários    | X       | X       |             | X       |
| Perfumes    | X       | x       | X           | X       |
| Comentários | X       | X       |             |         |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## Informações de login do STRAPI

- E-mail: <admin@gmail.com>
- Senha: AdminAdmin01

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL                         |
| ----------- | ----------------------------|
| POST        | api/comentarios             |
| GET         | api/comentarios             |
| GET         | api/comentarios/:id         |
| POST        | api/perfumes                |
| GET         | api/perfumes                |
| PUT         | api/perfumes/:id            |
| DELETE      | api/perfumes/:id            |
| GET         | api/perfumes/:id            |
| DELETE      | api/upload/files/:id        |
| GET         | api/upload/files/:id        |
| GET         | api/upload/files            |
| POST        | api/upload/                 |
| GET         | api/users-permissions/roles |
| GET        | api/users-permissions/roles/:id    |
| GET        | api/users/me                 |
