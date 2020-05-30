import React, { useState } from "react";
import { MDBInput, MDBFileInput } from "mdbreact";
const InputField = (props) => {
  const [label] = useState(props.label);
  return (
    <MDBInput label={label} />
  );
}
export const InputUpload = () => {
  return (
    <input type="file" />
  );
}
export default InputField;