import * as React from "react";

class Posts extends React.Component {
  render() {
    return (
      <main>
        <h1>Posts Page</h1>
        <ul>
          {this.props.posts.map((post, i) => {
            return (
              <div key={post.id}>
                <h6>{post.title}</h6>
                <p>{post.content}</p>
              </div>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Posts;
