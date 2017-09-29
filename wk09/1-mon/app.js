
$(document).ready(function(){

  var items = [
  {
    title: 'Web Design',
    icon: 'fa fa-database',
    first: "something1",
    second: "something2",
    third: "something3",
    fourth: "something4"
  },
  {
    title: 'Coding',
    icon: 'fa fa-code',
    first: "something5",
    second: "something6",
    third: "something7",
    fourth: "something8"
  },
  {
    title: 'Devices',
    icon: 'fa fa-mobile',
    first: "something1",
    second: "something2",
    third: "something3",
    fourth: "something4"
  },
  {
    title: 'Global',
    icon: 'fa fa-globe',
    first: "something1",
    second: "something2",
    third: "something3",
    fourth: "something4"
  }
  ];

  var QuoteItemView = Backbone.View.extend({
    template: Handlebars.compile($('#accordian-template').html()),
    events: {
    'click h2': 'showList'
  },
  showList: function(event){
    var display = false;
    $(event.target).closest('div').find('h2').removeClass('fa fa-angle-up')
    $(event.target).closest('div').find("ul").toggleClass('hidden');
  },
    render: function(){
      var html = this.template(this.model);
      this.$el.html(html);
      return this;
    }
  });

  _.each(items, function(item){
  var newView = new QuoteItemView({model: item});
  $('#app').append(newView.render().el);
  })

})
