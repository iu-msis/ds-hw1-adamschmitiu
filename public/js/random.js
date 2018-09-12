var fetchUser = new Vue({
  el: '#random',
  data:
  {
    person:
    {
      name:{first:'',
     last:'',
    },
      dob: {age:''
    },
    email:'',
    picture:{medium:''
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
      Age: function(){
        return moment(this.birthdate).diff(moment(), 'years')
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
