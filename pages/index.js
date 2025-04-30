import React, { useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");

  const [posts, setPosts] = useState([
    {
      title: "嫌われる勇気",
      author: "岸見一郎",
      quote: "人は変われる。世界はシンプルである。",
      image: "https://images-fe.ssl-images-amazon.com/images/I/81tLZ2QzPZL._AC_UL320_.jpg"
    },
    {
      title: "やばい日本史",
      author: "田中ひかる",
      quote: "教科書には載らない、もう一つの日本史。",
      image: "https://images-fe.ssl-images-amazon.com/images/I/81ICvdN9wfL._AC_UL320_.jpg"
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, author, quote, image };
    setPosts([newPost, ...posts]);
    setTitle(""); setAuthor(""); setQuote(""); setImage("");
    setCurrentIndex(0);
  };

  const current = posts[currentIndex];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Quotica</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
        <input placeholder="書名" value={title} onChange={e => setTitle(e.target.value)} required style={{ width: '100%', marginBottom: '8px' }} />
        <input placeholder="著者名" value={author} onChange={e => setAuthor(e.target.value)} required style={{ width: '100%', marginBottom: '8px' }} />
        <textarea placeholder="引用文" value={quote} onChange={e => setQuote(e.target.value)} required style={{ width: '100%', marginBottom: '8px' }} />
        <input placeholder="画像URL" value={image} onChange={e => setImage(e.target.value)} required style={{ width: '100%', marginBottom: '8px' }} />
        <button type="submit" style={{ width: '100%' }}>投稿</button>
      </form>

      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center', marginBottom: '16px' }}>
        <img src={current.image} alt="書影" style={{ width: '120px', marginBottom: '8px' }} />
        <h2>{current.title}</h2>
        <p><strong>著者：</strong>{current.author}</p>
        <blockquote style={{ fontStyle: 'italic' }}>{current.quote}</blockquote>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <button onClick={goPrev}>前へ</button>
        <button onClick={goNext}>次へ</button>
      </div>

      <div>
        <h3>投稿一覧</h3>
        {posts.map((p, i) => (
          <div key={i} style={{ marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
            <strong>{p.title}</strong> by {p.author}<br />
            <em>{p.quote}</em>
          </div>
        ))}
      </div>
    </div>
  );
}
