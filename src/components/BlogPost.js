import React from 'react'
import {Link} from 'react-router-dom'

const BlogPost = ({post}) => {

    // If we don't have a post, return null
    if (!post) return null

    const linkStyles = {
        textDecoration: 'none',
        color: 'black' 
	}

    const {title, modified_date, category, content} = post 

    return (
        <div>
            <Link style={linkStyles} to={`/posts/${post._id}`}>
                <h1>{title}</h1>
            </Link>
			<p>{modified_date.toLocaleString()}</p>
			<p>{category}</p>
			<p>{content}</p>
        </div>
    )
}

export default BlogPost