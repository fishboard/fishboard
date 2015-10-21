if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
    //passwordSignupFields: 'USERNAME_AND_EMAIL'
    //passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    //passwordSignupFields: 'EMAIL_ONLY' // deafult
  });  
}

Meteor.startup(function () {
    AccountsEntry.config({
      homeRoute: '/',
      dashboardRoute: '/',
      passwordSignupFields: 'EMAIL_ONLY'
    });
});
