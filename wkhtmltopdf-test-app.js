if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  var fs = Npm.require('fs');
  Meteor.startup(function () {
    console.log(wkhtmltopdf.command);
    wkhtmltopdf('http://google.com/', function(code, signal) {
      console.log('worked!', fs.readFileSync('out.pdf').toString().slice(0, 100));
    }).pipe(fs.createWriteStream('out.pdf'));
  });
}
