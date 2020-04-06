# Treefrog CMS

This is a CMS created with Firebase and jQuery. We are just showing how to create a very simple CMS that will update a site's navigation and update the page content.

This is just the base HTML for the project. You will be creating the rest.

## Homework urls

[Homework 5 straight to addSave page](https://in-info-web4.informatics.iupui.edu/~smccalle/treefrog-cms-homework5/public/addSave.html)

[Homework 5 to web4 main](https://in-info-web4.informatics.iupui.edu/~smccalle/)

## Steps to turn this into a Firebase project

You need to plan your application you are creating and if you are going to include Firebase create a base project folder and then do all of this first before you start coding your project. It is easier, and also remember to put all of your files that you create for your application in the public folder that is created. So put your css, lib, app etc. in the public folder.

1. Create an app in the Firebase console on the web.

2. Enable Firestore as the database. Make sure you check start mode. Also, enable Google Auth in the authentication link on the left-hand side.

3. Load Firebase CLI Tools:

npm -g install firebase-tools

4. Verify:

firebase --version

5. Login and authorize Firebase:

firebase login

6. Create project then run:

firebase init

7. Associate with your project:

firebase use --add

8. Setup for local hosting:

firebase serve --only hosting

9. Bring in all the scripts for Firebase. You probably already have some. If you created the project before hand they are in the index.html file that was created by running

firebase init

10. If you are using sass make sure you have your package.json path for sass changed to public/sass

11. Deploy to Firebase:

<pre><code>firebase deploy --except functions</code></pre>
