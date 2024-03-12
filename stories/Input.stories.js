import React from "react";
import Input from "../components/Input/Input";
import TextArea from "../components/Input/TextArea";
export default { title: 'Input'}

export const input = () => <Input placeholder={"Enter your content..."}/>
export const textarea = () => <TextArea placeholder={"Enter your content..."}/>
