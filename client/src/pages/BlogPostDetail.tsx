import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { blogService } from "../services/blogService";
import type { Post } from "../types/blog";
import { formatDate } from "../utils/formatDate";
import "./Blog.css";

export default function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>(); // Récupération du slug depuis l'URL
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        setLoading(true);
        if (slug) {
          const data = await blogService.getPostBySlug(slug);
          setPost(data);
        }
      } catch (err) {
        console.error("Erreur chargement de l'article:", err);
        setError("Impossible de charger cet article.");
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [slug]);

  return (
    <div className="blog-page-container">
      <NavBar />
      <main className="blog-main-content" style={{ marginTop: "40px" }}>
        <button
          className="blog-btn-read-more"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          ← Retour
        </button>

        {loading && <p style={{ textAlign: "center" }}>Chargement de l'article...</p>}
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

        {post && (
          <article className="blog-card" style={{ opacity: 1, padding: "30px" }}>
            <h1 className="blog-card-title" style={{ fontSize: "2rem" }}>{post.titre}</h1>
            <p style={{ color: "var(--blog-text-gray)", marginBottom: "20px" }}>
              <strong>{formatDate(post.datePublication || post.created_at)}</strong>
            </p>
            <img
              src={post.imageBlog || post.image}
              alt={post.titre}
              style={{ width: "100%", maxHeight: "450px", objectFit: "cover", borderRadius: "4px", marginBottom: "20px" }}
            />
            <div dangerouslySetInnerHTML={{ __html: post.contenu }} style={{ lineHeight: "1.6" }} />
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
}