class articleService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/articles', {
            titre1: data.titre1,
            titre2: data.titre2,
            texte: data.texte
        })
    }

    getAll() {
        return this.$http.get('/api/articles')
    }

    getOne(id) {
        return this.$http.get('/api/articles/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/articles/' + id, {
          titre1: data.titre1,
          titre2: data.titre2,
          texte: data.texte
        })
    }

    delete(id) {
        return this.$http.delete('/api/articles/' + id)
    }

}
