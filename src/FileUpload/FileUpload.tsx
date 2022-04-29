import axios from "axios";
import React, { useState } from "react";

const UserDetail = ({ onUpdate }: any) => {
  const [files, setFiles] = useState<any[]>([]);

  const onUploadFile = async () => {
    // I am not able to cover below code
    for (let i = 0; i < files.length; i += 1) {
      const { file } = files[i];
      const formData = new FormData();
      formData.append("files", file);
      await axios({
        headers: {
          "Content-Type": "multipart/form-data"
        },
        url: `apiurl`,
        method: "post",
        data: formData,
        onUploadProgress: (data) => {
          console.log(data);
        }
      })
        .then((data) => {
          // how to cover this part as I am setting some state after each success
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    onUpdate(true);
  };
  return (
    <div>
      <p>Get user details</p>
      <input
        type="file"
        onChange={(e) => {
          setFiles((prev) => [...prev, e.target.files]);
        }}
      />

      <button onClick={onUploadFile}>upload files</button>
    </div>
  );
};

export default UserDetail;
