import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { artworks } from '../data'
import './ArtworkDetail.css'

export default function ArtworkDetail() {
  const { id } = useParams()
  const work = artworks.find(a => a.id === Number(id))
  const [zoomed, setZoomed] = useState(false)

  if (!work) {
    return (
      <div className="detail-404">
        <p>作品不存在</p>
        <Link to="/gallery" className="detail-404__back">返回作品馆</Link>
      </div>
    )
  }

  const related = artworks.filter(a => a.id !== work.id && a.category === work.category).slice(0, 3)

  return (
    <div className="detail page-wrapper">
      <div className="detail__main">
        {/* 左：大图 */}
        <div className="detail__image-zone">
          <div
            className={`detail__img-wrap ${zoomed ? 'detail__img-wrap--zoomed' : ''}`}
            onClick={() => setZoomed(!zoomed)}
          >
            <img
              src={work.image}
              alt={work.title}
              className="detail__img"
            />
            <div className="detail__zoom-hint">
              {zoomed ? '点击缩小' : '点击放大查看细节'}
            </div>
          </div>
        </div>

        {/* 右：信息 */}
        <div className="detail__info">
          <FadeIn direction="left">
            <Link to="/gallery" className="detail__back">← 返回作品馆</Link>

            <div className="detail__cat">{work.category}</div>
            <h1 className="detail__title">{work.title}</h1>
            <div className="divider" />

            <dl className="detail__meta">
              <div className="detail__meta-item">
                <dt>创作者</dt>
                <dd>{work.artist}</dd>
              </div>
              <div className="detail__meta-item">
                <dt>年代</dt>
                <dd>{work.year}</dd>
              </div>
              <div className="detail__meta-item">
                <dt>尺寸</dt>
                <dd>{work.size}</dd>
              </div>
              <div className="detail__meta-item">
                <dt>分类</dt>
                <dd>{work.category}题材</dd>
              </div>
            </dl>

            <div className="divider" />

            <div className="detail__appreciation">
              <h2 className="detail__appreciation-title">作品赏析</h2>
              <p className="detail__appreciation-text">{work.description}</p>
            </div>

            <div className="detail__actions">
              {work.id > 1 && (
                <Link to={`/gallery/${work.id - 1}`} className="detail__nav-btn">← 上一件</Link>
              )}
              {work.id < artworks.length && (
                <Link to={`/gallery/${work.id + 1}`} className="detail__nav-btn">下一件 →</Link>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 相关作品 */}
      {related.length > 0 && (
        <section className="detail__related">
          <div className="container">
            <FadeIn>
              <h2 className="detail__related-title">同类作品</h2>
              <div className="detail__related-grid">
                {related.map((r, i) => (
                  <FadeIn key={r.id} delay={i * 100}>
                    <Link to={`/gallery/${r.id}`} className="detail__related-item">
                      <div className="detail__related-img-wrap">
                        <img src={r.thumb} alt={r.title} />
                      </div>
                      <p className="detail__related-name">{r.title}</p>
                      <p className="detail__related-year">{r.year}</p>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}
    </div>
  )
}
