// Example 2

interface Post{
    title: string
    content: string
}

interface Comment{
    title: string
    content: string
}

interface PostCreator{
    createPost(post: Post): void
}

interface CommentCreator{
    createComment(comment: Comment): void 
}

interface PostSharer{
    sharePosts(post: Post): void
}

class Admin implements PostCreator, CommentCreator, PostSharer{
    createPost(post: Post): void {
        console.log('Admin is creating a post')
    }
    createComment(comment: Comment): void {
        console.log('Admin is creating a comment')
    }
    sharePosts(post: Post): void {
        console.log('Admin is sharing a post')
    }
}

class RegularUser implements CommentCreator, PostSharer {
    createComment(comment: Comment): void {
        console.log('Regular user is creating a comment')
    }
    sharePosts(post: Post): void {
        console.log('Regular user is sharing a post')
    }
}

// Exampe 1
interface Machine{
    print(document: Document): void
    scan(document: Document): void
    fax(document: Document): void
}

interface FaxMachine{
    fax(document: Document): void
}

interface Scanner{
    scan(document: Document): void
}

interface Printer{
    print(document: Document): void
}

class MultiFunctionPrinter implements Machine{
    print(document: Document): void {
        console.log('Machine is printing')
    }
    scan(document: Document): void {
        console.log('Machine is scanning')
    }
    fax(document: Document): void {
        console.log('Machine is sending a fax')
    }
}

class MultiFunctionPrinterVersion2 implements Printer, Scanner, FaxMachine{
    print(document: Document): void {
        console.log('Machine is printing')
    }
    scan(document: Document): void {
        console.log('Machine is scanning')
    }
    fax(document: Document): void {
        console.log('Machine is sending a fax')
    }
}

class SimplePrinter implements Printer{
    print(document: Document): void {
        console.log('Machine is printing')
    }
}

class SimplerScanner implements Scanner{
    scan(document: Document): void {
        console.log('Machine is scanning')
    }
}

class SimplerFax implements FaxMachine{
    fax(document: Document): void {
        console.log('Machine is sending a fax')
    }
}