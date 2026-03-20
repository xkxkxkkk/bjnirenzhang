import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { artworks } from '../data'
import './Gallery.css'

const categories = ['全部', '人物', '仕女', '戏曲', '神话', '风俗', '意境']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [hoveredId, setHoveredId] = useState(null)

  const filtered = activeCategory === '全部'
    ? artworks
    : artworks.filter(a => a.category === activeCategory)

  return (
    <div className="gallery page-wrapper">
      {/* 页头 */}
      <header className="gallery__header">
        <div className="gallery__header-bg" />
        <div className="container">
          <FadeIn>
            <p className="section-label">馆藏精品</p>
            <h1 className="gallery__title">作品馆</h1>
            <p className="gallery__subtitle">精选历代传承人代表作，一器一物，皆有故事</p>
          </FadeIn>
        </div>
      </header>

      {/* 分类筛选 */}
      <div className="gallery__filter">
        <div className="container">
          <div className="gallery__cats">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery__cat ${activeCategory === cat ? 'gallery__cat--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 作品网格 */}
      <main className="gallery__main">
        <div className="container">
          <div className="gallery__grid">
            {filtered.map((work, i) => (
              <FadeIn key={work.id} delay={i * 60} className="gallery__item-wrapper">
                <Link
                  to={`/gallery/${work.id}`}
                  className={`gallery__item ${hoveredId === work.id ? 'gallery__item--hovered' : ''}`}
                  onMouseEnter={() => setHoveredId(work.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="gallery__img-wrap">
                    <img
                      src={work.thumb}
                      alt={work.title}
                      className="gallery__img"
                      loading="lazy"
                    />
                    <div className="gallery__img-overlay">
                      <div className="gallery__img-info">
                        <p className="gallery__item-cat">{work.category}</p>
                        <p className="gallery__item-year">{work.year}</p>
                      </div>
                    </div>
                    {work.featured && (
                      <div className="gallery__badge">精选</div>
                    )}
                  </div>
                  <div className="gallery__item-meta">
                    <h3 className="gallery__item-title">{work.title}</h3>
                    <p className="gallery__item-artist">{work.artist}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery__empty">
              <p>暂无该分类作品</p>
            </div>
          )}
        </div>
      </main>

      {/* 底部装饰 */}
      <div className="gallery__footer">
        <div className="container">
          <p className="gallery__footer-text">
            以上为馆藏部分精品，如需了解更多，欢迎
            <Link to="/visit" className="gallery__footer-link">亲临参观</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
