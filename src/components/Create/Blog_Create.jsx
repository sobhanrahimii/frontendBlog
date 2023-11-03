import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";

const Blog_Create = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="login-content">
          <div className="section-title">
            <h3>Create Blog Here!</h3>
          </div>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input style={{ backgroundColor: "#bbb" }} type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input style={{ backgroundColor: "#bbb" }} type="email" />
            <FormHelperText>Write Your Description Here.</FormHelperText>
          </FormControl>

          <FormControl>
            <Select></Select>
          </FormControl>
        </div>
      </div>
    </section>
  );
};

export default Blog_Create;
