import { v4 as uuid } from 'uuid';

//ACTION CREATORS

export const addBlogAction = ({title="", description="", dateAdded=0})=>({
    type: "ADD_BLOG",
    blog: {
        id: uuid(),
        title: title,
        description: description,    
        dateAdded: dateAdded
    }
})

export const removeBlogAction = ({id}) => ({
    type: "REMOVE_BLOG", 
    id: id
})

export const editBlogAction = (id, updates) => ({
    type: "EDIT_BLOG",
    id, 
    updates
})