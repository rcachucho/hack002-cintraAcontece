CintraAcontece

LANDING PAGE - Aparece-nos simples uma descrição da API e duas opções: “Sou um espaço cultural e quero promover os meus eventos” / “Quero saber o que acontece em Cintra”

Espaço cultural:

Registo / Criar conta (espaços culturais, companhias, promotores de eventos, cafés, restaurantes)
Registar (mongoDB/ base de dados)
Formulário para o registo, Nome, nome do utilizador, NIF, Morada, Sitio habitual de apresentação (não obrigatório), password, e-mail, concordância de termos e registos/parte legal (formik)
Login (nome de utilizador e faz login com a correspondência à base de dados => página principal

Zé povinho - Vai directo à pagina principal


COMPONENTES:
Registo
Login

(Comum aos dois utilizadores) Página principal: 
Apresenta o calendário. Se for utilizador registado significa que é um grupo e tem acesso a um botão para criar um novo evento.
Em baixo do calendário, vamos ter a descrição de um evento. Quando o utilizador chega, é o próximo evento / aleatório e quando ele clica passa a ser o showEvento que ele clicou


(Utilizadores registados) Criar novo evento:
Formulário para criar um novo evento em que vamos precisar de Nome/Título, tag/tipo , local, horas, preço e gravamos isso na base de dados


// A fazer se der tempo
Filtrar por tag/tipo
(Comum aos dois) Página de descrição de evento 

// Implementações futuras:
Criar um perfil de utlizador, guardar os eventos a que queremos ir, partilhar com as nossas redes, etc

Pages:
Registo .jsx
Login.jsx
Página Principal.jsx 
Criar novo evento.jsx- Formulário para criar novo evento

Componentes:
 { calendário.jsx, evento.jsx} - Página principal

Base de dados:
GrupoCultural - { Nome, nome do utilizador, NIF, Morada, Sitio habitual de apresentação (não obrigatório), password, e-mail, concordância de termos e registos/parte legal }

EVENTOS -
 São uma colecção à parte em que cada evento tem associado um id próprio e um id da entidade
{Nome/Título, tag/tipo , local, horas, preço}


Partes difíceis:
 Encontrar uma boa biblioteca de calendário e interagir com ela através do Mongo. 
Require
npx create-react-app CintraAcontece
npm install formik 
npm install --save express mongodb
npm install --save-dev nodemon
bCrypt

Ligação front-end/backend:
Quando faz um registo, POST  para criar um novo utilizador
Login, usa GET para verificar a autenticidade do utilizador

Página inicial:
STATE = event, setEvent[{evento}]

Vai buscar (GET) a data actual e mostra a semana correspondente
Vai buscar (GET) um evento à base de dados e mostra-o.
Vai buscar os eventos todos dessa semana e insere-os no calendário
Quando o utilizador clica, setEvento(fetchEventById(id))


Para criar um novo evento:
Existe um formulário, 