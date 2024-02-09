import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditPost = () => {
  const [title, settitle] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [thumbnail, setThumbnail] = useState()

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+!' }],
      ['link', 'image'],
      ['clean']
    ],



  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = [
    "Agriculture",
    "Medical",
    "Farmer",
    "Business",
    "Education",
    "Technology",
    "Art",
    "Food",
    "Environment",
    "Travel",
    "Weather",
    "Uncategorized",

  ];


  return (
    <section className='create-post'>
      <div className="container">

        <h2>Edit Post</h2>

        <p className='form_error-message'>This is an error Message</p>
        <form className="form create-post_form">
          <input type="text" placeholder='title' value={title} onChange={e => settitle(e.target.value)} autoFocus />
          <select name="category" value={category} onChange={e =>
            setCategory(e.target.value)}>

            {

              POST_CATEGORIES.map(cat => <option key={cat} >

                {cat} </option>)

            }
           
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />
            <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
            <button type='submit' className='btn primary'>Update</button>
        </form>
      </div>
    </section>
  )
}

export default EditPost
