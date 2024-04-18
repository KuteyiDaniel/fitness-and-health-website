import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom';
import { articles } from '../ArticleData'; // Import your articles data
import NavBar from '../components/NavBar';
import SocialMedia from '../components/SocialMedia';
import BackToTopButton from '../components/BackToTopButton';
import Footer from '../components/Footer';
import '../scss/ArticleDetailPage.scss';
import TextWriter from '../components/TextWriter';

interface CategoryColors {
    [category: string]: string;
}

const ArticleDetailPage = () => {

  ///let textWords = [article?.articleTitle]

const [inView, updateInView] = useState<boolean>(false);

let contentRef = useRef<HTMLElement | null>(null);
useEffect(() => {
        let config = {
            threshold: .5,
        }

        let callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    if (!inView) {
                        updateInView(true);
                        observer.unobserve(entry.target)
                    }
                }
            }
        }
        let target = contentRef.current as HTMLElement;
        let observer = new IntersectionObserver(callback, config);

        observer.observe(target);

        return () => {
            observer.unobserve(target);
        }
}, [inView])

    const [categoryColors, setCategoryColors] = useState<CategoryColors>({});

    useEffect(() => {
        const colors: CategoryColors = {
        'Mental Health': '#FFC0CB',
        'Nutrition': 'rgba(127, 255, 0, 0.3)',     
        'Fitness': 'rgb(107, 91, 255)',
    };

      // Set the category colors state
      setCategoryColors(colors);
    }, []);

    const { id } = useParams(); // Retrieve the article ID from URL parameters

    if (!id) {
      return <div>Invalid article ID</div>; 
    }

    const article = articles.find(article => article.id === parseInt(id)); // Find the article by ID


    if (!article) {
      return <div>Article not found</div>; // Handle case where article is not found
    }

  return (
    <>
        <NavBar/>
        <div className='article-detail-page-width'>
            <div className='article-detail'>
                <div className='article-detail-header' ref={el => contentRef.current = el}>
                    <header style={{ color : categoryColors[article.articleCategory] }} className='article-category'>{article.articleCategory}</header>
                    {
                    inView ? <div className='article-title'>
                      
                      <TextWriter words={article.articleTitle}
                                  cursorColor={"0, 0, 0"}
                                  writingSpeed={35}
                                  cursorWidth={4}
                                  //onComplete={() => updateShowSlider(true)}
                                  //className={styles.writerText}
                                 
                      />
                
                        
                    </div> : <></>
                  }
                </div>
              

                <div className="content-preview">
                    <p className='article-content-preview'>{article.articleContentPreview}</p>
                 
                </div>
             
               <div className="content-cover-image">
                    <img src={article.detailCoverImagePath} alt='#'/>

                    <div className="image-overlay">

                    </div>
               </div>

               <div className='article-content' dangerouslySetInnerHTML={{ __html: article.articleContent }}>
                 
               </div>

               <p className='content-writer'>{article.contentWriter}</p>
            </div>
        </div>  
        <SocialMedia/>
        <BackToTopButton/>
        <Footer/>
    </>
  );
};

export default ArticleDetailPage;
