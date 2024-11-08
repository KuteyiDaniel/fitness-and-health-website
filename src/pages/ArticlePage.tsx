import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { articles } from '../ArticleData';
import { HiArrowNarrowRight } from 'react-icons/hi';
import '../scss/ArticlePage.scss';
import SocialMedia from '../components/SocialMedia';
import BackToTopButton from '../components/BackToTopButton';
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer';

interface CategoryColors {
  [category: string]: string;
}

const ArticlePage = () => {
  const [categoryColors, setCategoryColors] = useState<CategoryColors>({});

  useEffect(() => {
    const colors: CategoryColors = {
      'Mental Health': '#FFC0CB',
      'Nutrition': 'rgba(127, 255, 0, 0.3)',     
      'Fitness': 'rgba(107, 91, 255, 0.15)',
    };

    // Set the category colors state
    setCategoryColors(colors);
  }, []);

  return (
    <>
      <NavBar />
      <div className="article-section-page-width">
        <div className="article-section">
          {articles.map(article => (
            <div className="article-data" key={article.id}>
              <img className="article-preview-image" src={article.coverImagePath} alt="#" />
              <div className="article-preview-text">
                <span className="article-category" style={{ backgroundColor : categoryColors[article.articleCategory] }}>
                  {article.articleCategory}
                </span>
                <header className="article-title">{article.articleTitle}</header>
                <p>{article.articlePreview}</p>
              </div>
              <NavLink to={`/article/${article.id}`} className="read-more-button">
                Read More <HiArrowNarrowRight />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <SocialMedia/>
      <BackToTopButton/>
      <Footer/>
    </>
  );
};

export default ArticlePage;
