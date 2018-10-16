var commentApp = new Vue({
  el: '#commentHTML',
  data:{
    commentForm: {
      comment:''
    },

    comList:[]
  },
   methods: {
     handleCommentForm(e) {
       const s = JSON.stringify(this.commentForm);
       console.log(s);

       fetch('api/comment.php', {
         method: "POST",
         headers: {
           "Content-Type":"application/json; charset=utf-8"
         },
         body: s
       })
       .then(response => response.json())
       .then(json => {this.comList.push(json)})
       .catch(err => {
         console.error('COMMENT POST ERROR');
         console.error(err);
       })
      this.commentForm = this.getEmptyCommentForm();
   },

   getEmptyCommentForm(){
     return {
       comment: null
     }
   }},
   created(){
     this.commentForm = this.getEmptyCommentForm();
     fetch('api/comment.php')
     .then(response => response.json())
     .then(json => {commentApp.comList = json})
     .catch(err => {
       console.log('COMMENT LIST ERROR:');
       console.log(err);
     })
   }

});
