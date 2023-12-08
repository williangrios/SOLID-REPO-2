class BlogPost{
    title: string
    content: string
    constructor(title: string, content: string){
        this.title = title
        this.content = content
    }
    createPost(){}
    updatePost(){}
    deletePost(){}
}

class BlogPostDisplay{
    blogPost: BlogPost
    constructor( blogPost: BlogPost){
        this.blogPost = blogPost   
    }
    displayHTML(){
        return '<h1></h1>'
    }
}