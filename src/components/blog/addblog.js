import React, { useState } from "react";
import axios from "axios"
// import {useAuth0} from '@auth0/auth0-react'



function Form() {

    const [Title, setTitle] = useState("");
    const [Subject, setSubject] = useState('');
    const [Content, setContent] = useState('');
    const [PhotoLink, setPhotoLink] = useState('');
    const [Writer, setWriter] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

        const newBlog = {
            Title,
            Subject,
            Content,
            PhotoLink,
            Dateofpost: date,
            Writer,
           

        }


        console.log(newBlog);
        axios.post("http://localhost:8089/blog/create", newBlog)
            .then(response => {
                alert("Blog posted suceesfully")
            }).catch((err) => {
                alert(err)
            })

    }

    return (
        <div class="container">
            <h1>Post Your Blog</h1>
            <form  >
                <div class="form-group">

                    <label class="form-label">Title</label>
                    <input type="type" class="form-control" onChange={(e) => { setTitle(e.target.value); }} />

                </div>

                <label for="floatingTextarea">Breif Idea or Main Subject about blog </label>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Type your blog content here" onChange={(e) => { setSubject(e.target.value); }}></textarea>
                    
                </div>

                <label for="floatingTextarea">Content</label>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Type your blog content here" onChange={(e) => { setContent(e.target.value); }}></textarea>
                    
                </div>

                <div class="form-group">

                    <label class="form-label">Photo Link</label>
                    <input type="type" class="form-control" onChange={(e) => { setPhotoLink(e.target.value); }} />

                </div>

                <div class="form-group">

                    <label class="form-label">Writer</label>
                    <input type="type" class="form-control" onChange={(e) => { setWriter(e.target.value); }} />

                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
                </div>

            </form>

        </div>
    );
}

export default Form;