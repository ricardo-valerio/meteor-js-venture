// Set up login services
Meteor.startup(function() {

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    { $set: {
        appId: "858233914271151",
        secret: "ad3d5a202925ed8618056968ecdc4904"
      }
    }
  );


  // Add Google configuration entry
  // redirect_url:     http://localhost:3000/_oauth/google?close
  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    { $set: {
        clientId: "418615284150-jmhnmu0got8henle7uhpftftcr5fvpih.apps.googleusercontent.com",
        client_email: "418615284150-jmhnmu0got8henle7uhpftftcr5fvpih@developer.gserviceaccount.com",
        secret: "HhTaWvl_VCpke2iqEhveOoID"
      }
    }
  );


  // Add Twitter configuration entry
  ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    { $set: {
        consumerKey: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    }
  );


});
