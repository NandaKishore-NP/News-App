import {
    Button,
    Card,
    Link,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { createPost } from "../api/posts";
  import ErrorAlert from "./ErrorAlert";
  import { isLoggedIn } from "../helpers/authHelper";
  import HorizontalStack from "../components/util/HorizontalStack";
  import UserAvatar from "./UserAvatar";
 
import axios from "axios";
// import { Redirect } from "react-router-dom";
  const PostEditor = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    // const [formData, setFormData] = useState({
    //   title: "",
    //   content: "",
    //   image: null,
    // });
    const [serverError, setServerError] = useState("");
    const [errors, setErrors] = useState({});
    const user = isLoggedIn();
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      setFormData({
        ...formData,
        [name]: name === "image" ? files[0] : value,
      });
      const errors = validate();
      setErrors(errors);
    };
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
  
    //   setLoading(true);
  
    //   // If there's an image to upload
    //   if (formData.image) {
    //     const imageData = new FormData();
    //     imageData.append("image", formData.image);
    //     try {
    //       const response = await fetch("/upload", {
    //         method: "POST",
    //         body: imageData,
    //       });
    //       if (response.ok) {
    //         const imagePath = await response.text();
    //         // Set the image path in formData
    //         setFormData({ ...formData, image: imagePath });
    //       } else {
    //         throw new Error("Failed to upload image");
    //       }
    //     } catch (error) {
    //       console.error("Error uploading image:", error);
    //       setServerError("Failed to upload image. Please try again.");
    //       setLoading(false);
    //       return;
    //     }
    //   }
  
      // Create the post with updated formData (including image path)
    //   const data = await createPost(formData, isLoggedIn());
    //   setLoading(false);
    //   if (data && data.error) {
    //     setServerError(data.error);
    //   } else {
    //     navigate("/");
    //   }
    // };
  
    const validate = () => {
      const errors = {};
      // Add validation logic if needed
      return errors;
    };
    const [formData, setFormData] = useState({
      heading: "",
      description: "",
      image: null,
    });
   
    const [image, setImage] = useState(null);
   
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    };
   
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
   
      reader.onloadend = () => {
        setImage(reader.result);
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: reader.result,
        }));
      };
   
      if (file) {
        reader.readAsDataURL(file);
      }
    };
   
    const handleSubmit = async (e) => {
      e.preventDefault();
   
      try {
       await axios.post("http://localhost:4000/api/formdata", formData); 
       navigate("/"); 
      } catch (error) {
         
        console.error("Error submitting form:", error);
        
      }
    };
    return (
      <Card>
        <Stack spacing={1}>
          {user && (
            <HorizontalStack spacing={2}>
              <UserAvatar width={50} height={50} username={user.username} />
              <Typography variant="h5">
                What would you like to post today, {user.username}?
              </Typography>
            </HorizontalStack>
          )}
  
          <Typography>
            <a href="https://commonmark.org/help/" target="_blank">
              Markdown Help
            </a>
          </Typography>
  
          {/* <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              required
              name="title"
              margin="normal"
              onChange={handleChange}
              error={errors.title !== undefined}
              helperText={errors.title}
            />
            <TextField
              fullWidth
              label="Content"
              multiline
              rows={10}
              name="content"
              margin="normal"
              onChange={handleChange}
              error={errors.content !== undefined}
              helperText={errors.content}
              required
            />
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange}
              style={{ marginTop: "10px" }}
            />
            <ErrorAlert error={serverError} />
            <Button
              variant="outlined"
              type="submit"
              fullWidth
              disabled={loading}
              sx={{
                mt: 2,
              }}
            >
              {loading ? <>Submitting</> : <>Submit</>}
            </Button>
          </Box> */}

<form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="heading" className="form-label">
            Heading
          </label>
          <input
            type="text"
            className="form-control"
            id="heading"
            onChange={handleInputChange}
            value={formData.heading}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUpload" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
           
          />
        </div>
        {image && (
          <div className="mb-3">
            <img
              src={image}
              alt="Uploaded"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={handleInputChange}
            value={formData.description}
          />
        </div>
 
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </Stack>
      </Card>
    );
  };
  
  export default PostEditor;
  

  