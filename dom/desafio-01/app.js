new Vue({
    el: '#desafio',
    data: {
        nome: 'Luiz Carlos dos Santos',
        idade: '41',
        imagem:'./img/cachorro.jpg'
    },

    methods:{
        calculaIdade(){
            return this.idade*3
        },
        random(){
            return Math.random()
        }
    }
})