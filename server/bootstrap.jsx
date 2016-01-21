Meteor.startup(()=>{
    if (Meteor.users.find().count()===0){
        Accounts.createUser({
            email:'mark.robbins@mrobbinsassoc.com',
            password:'pass'
        });
    }else{
        console.log(Meteor.users.find().fetch());
    }
});
