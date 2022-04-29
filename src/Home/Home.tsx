import React from "react";
import User from "../User/User";
import useApi from "../utils/useApi";
import FileUpload from "../FileUpload/FileUpload";

const Home = () => {
  const [data, callToApi] = useApi({ url: "", method: "get" });
  const btnConfig = {
    onClick: () => {
      /* I can click button using getbyrole method which will invoke below 
      function but after invoking I want to mock useAPI/axios response
      or error so that I can cover the scenario related to the the api result */
      console.log("API call");
      callToApi();
    }
  };

  const fileUploaded = (success: boolean) => {
    // I am able to cover this part under unit test
    if (success) {
      console.log("here I am setting state after successful file upload");
    }
  };
  return (
    <div>
      <p>Home page</p>
      {data && data.data?.map(({ label }: any) => <p>{label}</p>)}
      <User btnConfig={btnConfig} />
      <FileUpload onUpdate={fileUploaded} />
    </div>
  );
};

export default Home;
