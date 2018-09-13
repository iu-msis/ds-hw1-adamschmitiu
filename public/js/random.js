var fetchUser = new Vue({
  el: '#random',
  data:
  {
    person:
    {
      name:{first:'',
     last:'',
    },
    dob: '',
    email:'',
    picture:{medium:''
    }
  },
    computed: {
      personAge: function() {
        return moment().diff(moment(this.person.dob.date),'years');
      },
      realDob: function() {
        return moment(this.person.dob.date).format("MMM Do YYYY");
      }
    }
  },
  methods: {
    randomUser: function() {
      fetch('https://randomuser.me/api/')
      .then(function(response) {
         return response.json();
       })
       .then(function(json) {

         fetchUser.person = json.results[0];
         console.log(this.person);
       }
     );
     },
       shuffleUser: function(event) {
         this.randomUser();
       },
       pretty_date: function(x) {
         return moment(x).format('1');
       },
       personAge: function() {
         return moment().diff(moment(this.person.dob.date),'years');
       },
       realDob: function() {
         return moment(this.person.dob.date).format("MMM Do YYYY");
       }

  },
  created() {
    this.randomUser()
  }
});
//$.ajax({
  //url: 'https://randomuser.me/api/',
  //dataType: 'json',
  //success: function(data) {
    //console.log(data);
  //}
//});
