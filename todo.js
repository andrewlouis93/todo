Tasks = new Meteor.Collection("tasks");

if (Meteor.isClient) {

  Template.search_bar.events({
    'keypress .search_bar':function(evt,template){
      if (evt.which === 13){

        if ($(".search_bar").val()){
          Tasks.insert({task_item:$(".search_bar").val()});
        }

        $(".search_bar").val('');

      }
    }
  });

  Template.list.events({
    'click .remove':function(evt,template){
        Tasks.remove(this._id);
    }
  });

  Template.list.task_list = function(){
    return Tasks.find();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
