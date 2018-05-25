function posts(){
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        };
    }

    class SocialMediaPost extends Post{
        constructor(title, content, postLikes, postDislikes){
            super(title, content);
            this.comments = [];
            this.rating = +postLikes - +postDislikes;
        };

        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            let result = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.rating}`;
            if(this.comments.length > 0){
                result += `\nComments:`;
                for (let comment of this.comments) {
                    result += `\n * ${comment}`;
                }
            } else {
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.rating}`;
            }
            return result;
        };
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }
    return {Post, SocialMediaPost, BlogPost};
}

let post = new Post("Post1", "Content1");

console.log(post.toString());

// Post: Post1
// Content: Content1

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let blogpost = new BlogPost('how to ask a crush for a hug', 'him', 0);
blogpost.view();
blogpost.view();
blogpost.view();
blogpost.view();
console.log(blogpost.toString());