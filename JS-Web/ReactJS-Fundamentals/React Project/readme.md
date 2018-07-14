So basically it is a glorified version of the Article Blog from the Tech Module.

As per requirements, it is seperated into a public (anonymous) area, a private (user) area and an administrator area.

As Kinvey does not allow get requests from unauthenticated users, I made a fake user that is logged in upon visiting the homepage as a user without a username or an authtoken. 
This user does not have rights to do anything but view the homepage and the details of articles.

Upon registering and sequentially logging in, the view is redirected into the homepage and access to the login page is restricted. The user gains access to Create Article and My Articles.
Once the article has been created successfully, it is uploaded to the Kinvey database that the homepage gets data from. The My Articles section is basically the homepage but the response from the get request is filtered to return only articles with an author that matches the current user's username. The user is then redirected to the homepage and another get request is forced in order to update the list.

Henceforth, only a user can edit his own articles unless authorized to edit others. A user cannot delete his own articles.

This brings us to the admin section. An admin can delete or edit other articles and delete users.

Article Details also changes the document title to the title of the article. And provides information such as the author and when the post was submitted.
Article Edit allows the user or the admin to change the title, content or the genre but the author will remain the original creator through out the article's lifespan.
Access to editing an article is given only if the user's username matches the article's author name or the user has the admin role.
Any user has access to the details of an article, even anonymous.