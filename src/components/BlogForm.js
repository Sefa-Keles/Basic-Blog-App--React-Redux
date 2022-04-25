import React, { Component } from 'react'

class BlogForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            title: props.blog? props.blog.title:'',
            description: props.blog? props.blog.description:'',
            error: ''
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(()=> ({
            title
        }))
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(()=> ({
            description
        }))
    }

    formOnSubmit = (e) => {
        e.preventDefault();

        if(!this.state.title || !this.state.description){
            this.setState({error: "Please fill in all fields"})
        }else {
            this.setState({error: ''})
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
