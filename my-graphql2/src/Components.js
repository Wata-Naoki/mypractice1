
import {
    
    useMutation,
    gql,
  } from "@apollo/client";

  import { useState } from "react";
  
  const CREATEPOST = gql`
  mutation (
    $input: CreatePostInput!
  ) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
  `;
  
  function Components() {
    let body;
    // let title;
  
    const [title, setTitle] = useState("hoge");
  
    // eslint-disable-next-line
    const [createPost, { loading, error }] = useMutation(CREATEPOST);
  
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
  
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createPost({
              variables: { input: { title: title, body: body.value } },
            });
             /* title.value = ""; 
             body.value = "";  */
          }}
        >
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input
            ref={(node) => {
              body = node;
            }}
          />
          {/*送信した時にhogeをクリアして、中の値を空にしたかったので、onClick={(e) => setTitle(e.target.value) */}
          <button type="submit" onClick={(e) => setTitle(e.target.value)}>submit</button> 
        </form>
      </div>
    );
  }
  
  export default Components;
  