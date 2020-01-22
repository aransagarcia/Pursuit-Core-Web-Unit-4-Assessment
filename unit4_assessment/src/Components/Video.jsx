import React from 'react'


class Video extends React.Component{
   constructor(props){
       super(props)
       this.state=({
           videoId:'',
           name: '',
           CommentBody: '',
           CommentId:''
       })
    }


 handleName= event=>{
console.log(event.target.value)
this.setState=({
    name : event.target.value
})
}
   
   handleComment = event =>{
      this.setState =({
           CommentBody : event.target.value
       })
   }



    render() {

        return (
            
<div>

<h1> Video Page</h1>

<form>
    
<p>Name</p> 
<input label='Name' type='text' onChange= {this.handleName} />
   <br></br>
   <br></br>
  <p>Comment</p> 
 <input label= 'body' type='text' onChange={this.handleComment} />
  <br></br>
  <br></br>
  <button type="submit"> Submit</button>
</form>



</div>



        )
    }
}
  

export default Video;