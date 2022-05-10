import React, { Component } from 'react'


class BlogForm extends Component {
    //Constructor created to capture props sent from the AddBlogPage and EditBlogPage component
    constructor(props){
        super(props);
        //This state is a special state created to house the organized information.
        this.state ={
            title: props.blog? props.blog.title:'',
            description: props.blog? props.blog.description:'',
            error: ''
        }
    }
    //The function to be triggered when the title information in the form is changed
    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(()=> ({
            title
        }))
    }
    //The function to be triggered when the description information in the form is changed
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(()=> ({
            description
        }))
    }
    //The function that submits the form when the save button is clicked
    formOnSubmit = (e) => {
        //Function that prevents the page from refreshing when the button is clicked
        e.preventDefault();

        if(!this.state.title || !this.state.description){
            this.setState({error: "Please fill in all fields"})
        }else {
            this.setState({error: ''})
            //Function definition where the state information to be sent into the function sent from the blog form is received
            this.props.formSubmit({
                title: this.state.title,
                description: this.state.description,
                dateAdded: Date.now()
            })
        }
    }

    render() {
        return (
            <div>
                {/*displaying error information on the page*/}
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formOnSubmit}>
                    <div>
                        <input placeholder="enter title" 
                        value={this.state.title}
                        onChange= {this.onTitleChange}/>
                    </div>
                    <div>
                        <textarea 
                            placeholder="enter description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}>                  
                        </textarea>
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        )
    }
}

export default BlogForm
