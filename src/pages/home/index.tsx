import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <Link to="/post/new">글쓰기</Link>
          <Link to="/post">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>
      <div className="post-list">post list</div>
      <footer>
        <div>menu 1</div>
        <div>menu 2</div>
        <div>menu 3</div>
      </footer>
    </div>
  );
}
