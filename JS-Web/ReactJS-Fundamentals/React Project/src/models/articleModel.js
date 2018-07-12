export default {
    defaultState: {
        title: '',
        author: sessionStorage.getItem('username'),
        content: '',
        genre: '',
    },
    validate: data => {
        const {title, content, author} = data;

        if (!title) {
            return "Title is required";
        }
        if (!content) {
            return "Content is required.";
        }
    }
};