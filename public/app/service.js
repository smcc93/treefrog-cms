var SERVICE = (function () {
  document.addEventListener("DOMContentLoaded", function () {
    // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 //
    // The Firebase SDK is initialized and available here! //
    // firebase.auth().onAuthStateChanged(user => {});
    // firebase
    //   .database()
    //   .ref("/contacts")
    //   .on("value", snapshot => {});
    // firebase.firestore().collection("contacts");
    // firebase
    //   .messaging()
    //   .requestPermission()
    //   .then(() => {});
    // firebase
    //   .storage()
    //   .ref("/path/to/ref")
    //   .getDownloadURL()
    //   .then(() => {});
    // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥//
    try {
      let app = firebase.app();
      let features = ["auth", "database", "messaging", "storage"].filter(
        (feature) => typeof app[feature] === "function"
      );
      //document.getElementById("load");
    } catch (e) {
      console.error(e);
    }
  });

  var _db;
  var _initFirebase = function () {
    firebase
      .auth()
      .signInAnonymously()
      .then(function (result) {
        console.log("connected");
        _db = firebase.firestore();
      });
  };

  var _addContact = function () {
    let data = { fName: "Joe", lName: "Smith" };
    _db
      .collection("contacts")
      .add(data)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  var _saveData = function (pageData) {
    _db
      .collection("pages")
      .add(pageData)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  var _checkMainNavName = function (mainNavName, callback) {
    console.log("here");
    _db
      .collection("Pages")
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.empty) {
          callback(mainNavName);
        } else {
          _db
            .collection("Pages")
            .where("navName", "==", mainNavName)
            .get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                console.log(doc.id, "=>", doc.data());
              });
            });
        }
      })

      .catch(function (error) {
        console.log("error");
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      });
  };
  // _db
  //   .collection("Pages")
  //   .where("navName", "==", mainNavName)
  //   .get()
  //   .then(function(querySnapshot) {
  //     querySnapshot.forEach(function(doc) {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //     });
  //   })
  //   .catch(function(error) {
  //     console.log("Error getting documents: ", error);
  //  });

  var _getGetStartedContent = function () {
    let contentStr = `<h1>Treefrog CMS</h1><p>This is the screen where you will create your navigation and page content.</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;

    return contentStr;
  };

  var _getCreateNavButtons = function () {
    let buttonString = `<span class="btn btn-dark main-nav ">Create Main Nav</span><span  class="btn btn-dark sub-nav ">Create Sub Nav</span>`;
    return buttonString;
  };

  var _getHomeContent = function () {
    let homeContent = ` <h1>Welcome to the Treefrog CMS</h1>
    <p>
      Here you will create your content for your webpages. You won't be able
      to create all page elements but only the content for the page.
    </p>

    <p>
      You must first create the navigation. Once you have the navigation
      created you can add page content and publish the page. You can even
      add sub navigation as well.
    </p>

    <p>
      Your fist step is to click on the Add Navigation link and add your
      first navigation link.
    </p>`;

    return homeContent;
  };

  var _getHomeStartButton = function () {
    let srtButton = `<span class="btn btn-dark get-started">Get Started</span>`;
    return srtButton;
  };

  var _getMainNavContent = function () {
    let mainNav = `<h2>Use this box to create navigation links</h2><p>You can create main navigation and sub navigation. To create a sub-navigation you will need to first select a main nav and then create the sub-nav.</p><p>Using the text box below enter the name of your main navigation</p><div><input class="navTitle"></div><div><span class="btn btn-tan createMain">Create Main Nav</span><span  class="btn btn-tan closeModal">Cancel</span></div>`;

    return mainNav;
  };

  var _getSubNavContent = function () {
    let subNav = `<h2>Create Sub Navigation</h2><p>In order to create a sub navigation you need to select a main nav.</p><p>Select a main navigation</p><select></select><p>Using the text box below enter the name of your sub navigation.</p><div><input></div><div><span class="btn btn-tan">Create Main Nav</span><span  class="btn btn-tan closeModal">Cancel</span></div>`;

    return subNav;
  };

  var _getQuillEditor = function () {
    let quillEditor = `<h1>Treefrog CMS</h1><p>Now that you have your navigation set, you can create your content. Below you will see your navigation name and a text editor. Create your content in the text editor and then click on "Save Page Info". Once you have done that click on "PREVIEW SITE" to see what your web page looks like.</p><h2 class="tag"></h2><div id="editor" class="quill"></div><button id="saveData" class= "btn btn-dark btn-spacing">Save Page Info</button>`;
    return quillEditor;
  };
  return {
    getGetStartedContent: _getGetStartedContent,
    getCreateNavButtons: _getCreateNavButtons,
    getHomeStartButton: _getHomeStartButton,
    getHomeContent: _getHomeContent,
    getMainNavContent: _getMainNavContent,
    getSubNavContent: _getSubNavContent,
    getQuillEditor: _getQuillEditor,
    initFirebase: _initFirebase,
    checkMainNavName: _checkMainNavName,
    saveData: _saveData,
  };
})();
