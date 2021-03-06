var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var contatos = [
	{serial: '^#GT!', id : 1, nome : "leonardo de sousA", telefone : "99887755", data: new Date("07/27/1985"), operadora: {nome: "Tim", codigo: 41}},
	{serial: '^%!@2', id : 2, nome : "caroline minetto", telefone : "12345678", data: new Date(), operadora: {nome: "Oi", codigo: 14}},
	{serial: '@(#*¨', id : 3, nome : "conchita cahorro", telefone : "98787998", data: new Date(), operadora: {nome: "Oi", codigo: 14}},
	{serial: '@¨#$@', id : 4, nome : "kenai CACHORRO", telefone : "13467985", data: new Date(), operadora: {nome: "Vivo", codigo: 15}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/contatos', function(req, res) {
	res.json(contatos);
});

app.get('/detalhesContato/:id', function(req, res) {
	var id = req.params.id;
	var pessoa = contatos.filter(function(p) {
		if(p.id == id){
			return p;
		}
	});
	res.json(pessoa[0]);
});

app.post('/contatos', function(req, res) {
	contatos.push(req.body);
	res.json(true);
});

app.get('/operadoras', function(req, res) {
	res.json(operadoras);
});