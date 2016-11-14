class articleController {

    constructor(articleService) {
        this.articleService = articleService;
        this.load();
    }

    load() {
        this.articleService.getAll().then((res) => {
            this.articles = res.data;
        })
    }

    create() {
        this.articleService.create(this.article).then(() => {
            this.article = {};
            this.load()
        })
    }

    update(article) {
        this.articleService.update(article._id, article.description).then(() => {
            this.load()
        })
    }

    delete(article) {
        this.articleService.delete(article._id).then(() => {
            this.load()
        })
    }

}
