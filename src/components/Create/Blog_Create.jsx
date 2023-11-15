import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import "./create.scss"

const Blog_Create = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="login-content">
          <div className="section-title">
            <h3 className="title">Create Blog Here!</h3>
          </div>
          <FormControl className="form_group">
            <FormLabel>Title:</FormLabel>
            <Input style={{ backgroundColor: "#bbb" , padding:'0.7rem' , borderRadius:'5px' }} type="email" />
            
          </FormControl>

          <FormControl>
            <FormLabel>Description:</FormLabel>
            <Textarea cols={30} rows={20} style={{ backgroundColor: "#bbb" , padding:'0.7rem' , borderRadius:'5px' }} type="email" />
          </FormControl>

          <Button className="btn">Create</Button>

        </div>
      </div>
    </section>
  );
};

export default Blog_Create;
