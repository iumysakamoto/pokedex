import React from "react";
import Button from "../../components/Button";
import PostList from "../../components/PostList";
import PostText from "../../components/PostText";

function App() {
  return (
    <>
      <div className="dv-line dv-center">
        <div className="dv-column">
          <div className="dv-padding-hdpi dv-full-width">
            <p className="dv-bold dv-purple">Comentários e anotações</p>
            <h4 className="dv-bold">
              Um bloco de notas para te lembrar tudo o que você precisar!
            </h4>
            <PostText />
            <div className="dv-horizontal-align-right">
              <Button type="submit">Anotar</Button>
            </div>
            <PostList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
