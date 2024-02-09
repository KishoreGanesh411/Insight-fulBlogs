import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "./../Images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post_detail">
      <div className="container post-detail_container">
        <div className="post-details_header">
          <PostAuthor />

          <div className="post-details_buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>

        <h1>THis is the Post Title</h1>

        <div className="post-details_thumbnails">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut
          accusantium sequi perferendis earum quod consequatur molestias aperiam
          similique soluta, minus, quidem debitis dignissimos quo, quam sed
          provident sunt quas voluptatum pariatur nemo voluptas sit? Ducimus
          laudantium iure consequuntur adipisci!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          tenetur reiciendis impedit voluptates laboriosam commodi vel velit
          aliquid, facere accusamus porro non omnis veritatis incidunt eum natus
          suscipit dicta quod nesciunt, labore dignissimos a beatae saepe
          accusantium. Voluptatibus in possimus doloremque amet nobis corrupti
          aliquid. Dolor iste cumque est minus vel recusandae eum obcaecati
          illum.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus omnis
          dolores consequatur vero sit perferendis facere aliquid. Voluptates
          aspernatur qui fuga tempore sit ratione rerum quis, facere amet nobis
          nesciunt quasi omnis tenetur labore delectus maxime debitis minus nisi
          quaerat odit. Quod, consequatur ex deserunt earum labore ipsa itaque
          sapiente! Consequuntur omnis aliquid aut dolorum unde assumenda
          maiores ea quam. Voluptas doloremque iure temporibus eligendi harum,
          debitis modi quisquam, consequuntur non labore necessitatibus dolor
          doloribus exercitationem totam consectetur, atque laborum quos sequi
          mollitia voluptate recusandae. Deserunt fugiat natus repellendus
          doloremque quaerat sint facilis corrupti iste animi veniam asperiores
          esse beatae distinctio quae laborum mollitia ullam autem totam error,
          minima aliquam. Quibusdam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe
          a aperiam deserunt earum ad animi. Enim iure dolorem harum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          voluptates, eveniet unde consectetur eius ut quasi enim tempora, earum
          velit magni distinctio deleniti nemo laboriosam ipsum voluptate
          dignissimos odit. Sapiente vero perspiciatis iste, deleniti itaque
          quisquam veniam molestiae culpa earum porro officiis dolor numquam
          soluta magnam consequatur hic dignissimos quas doloremque delectus
          maiores consequuntur. Tenetur voluptatum odio quas optio eveniet nobis
          nemo earum reprehenderit excepturi deleniti deserunt totam neque
          ullam, vel corporis facilis asperiores esse vitae aut maiores
          distinctio! Quasi, blanditiis tempore libero nam natus dolorum
          doloremque deserunt illum in maiores distinctio molestias assumenda
          deleniti quisquam? Debitis veritatis quidem ipsa nostrum doloremque
          quae excepturi commodi, sequi minus sit quisquam quasi veniam!
          Inventore laborum repellendus voluptas assumenda magnam sunt iusto
          fuga beatae non unde amet, quasi in reprehenderit dolorum et
          reiciendis sed. Qui ratione delectus amet aliquid nesciunt vero
          voluptates consequatur, sint aspernatur placeat. Aliquid et ipsum
          sapiente libero neque velit omnis blanditiis quod eaque animi expedita
          mollitia eveniet, quisquam voluptatum adipisci aut repudiandae
          reprehenderit provident ea! Suscipit quae similique cupiditate at fuga
          voluptatum minima ut adipisci ab labore impedit sequi libero, aliquam
          assumenda voluptate aspernatur omnis error mollitia. Dicta corporis in
          quasi deleniti accusantium quibusdam incidunt ducimus alias aut
          mollitia!
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
