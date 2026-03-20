import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { artworks, craftSteps } from '../data'
import './Home.css'

const featuredWorks = artworks.filter(a => a.featured).slice(0, 4)

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredWorks.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      {/* ── 英雄区：全屏沉浸 ── */}
      <section className="hero">
        {/* 背景幻灯片 */}
        <div className="hero__slides">
          {featuredWorks.map((work, i) => (
            <div
              key={work.id}
              className={`hero__slide ${i === currentSlide ? 'hero__slide--active' : ''}`}
              style={{ backgroundImage: `url(${work.image})` }}
            />
          ))}
          <div className="hero__overlay" />
          {/* 墨晕蒙版 */}
          <div className="hero__ink-wash" />
        </div>

        {/* 内容 */}
        <div className={`hero__content ${heroLoaded ? 'hero__content--visible' : ''}`}>
          <p className="hero__kicker">北京支 · 非物质文化遗产</p>
          <h1 className="hero__title">
            <span>捏塑</span>
            <span className="hero__title-accent">人间百态</span>
          </h1>
          <h1 className="hero__title">
            <span>彩绘</span>
            <span className="hero__title-accent">世间悲欢</span>
          </h1>
          <p className="hero__sub">近两百年传承 · 六代手艺相续</p>
          <div className="hero__actions">
            <Link to="/gallery" className="btn btn--primary">欣赏作品</Link>
            <Link to="/heritage" className="btn btn--ghost">了解传承</Link>
          </div>
        </div>

        {/* 幻灯片指示器 */}
        <div className="hero__dots">
          {featuredWorks.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === currentSlide ? 'hero__dot--active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`切换到第${i + 1}张`}
            />
          ))}
        </div>

        {/* 滚动提示 */}
        <div className="hero__scroll-hint">
          <span>向下探索</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── 品牌寄语 ── */}
      <section className="motto">
        <div className="container">
          <FadeIn>
            <div className="motto__inner">
              <div className="motto__ornament">—</div>
              <blockquote className="motto__text">
                一块寻常黄泥，经十指拿捏，<br />
                眉目间便生出了人世的悲欢。
              </blockquote>
              <div className="motto__ornament">—</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 精选作品 ── */}
      <section className="featured">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">精选作品</p>
              <h2 className="section-title">匠心之作</h2>
              <div className="divider divider--center" />
            </div>
          </FadeIn>

          <div className="featured__grid">
            {featuredWorks.map((work, i) => (
              <FadeIn key={work.id} delay={i * 100} className="featured__item-wrapper">
                <Link to={`/gallery/${work.id}`} className="featured__item">
                  <div className="featured__img-wrap">
                    <img
                      src={work.thumb}
                      alt={work.title}
                      className="featured__img"
                      loading="lazy"
                    />
                    <div className="featured__overlay">
                      <span className="featured__view">欣赏此作</span>
                    </div>
                  </div>
                  <div className="featured__meta">
                    <h3 className="featured__title">{work.title}</h3>
                    <p className="featured__info">{work.artist} · {work.year}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="featured__more">
              <Link to="/gallery" className="btn btn--outline">查看全部作品</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 工艺之道 ── */}
      <section className="craft">
        <div className="craft__bg" />
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">制作工艺</p>
              <h2 className="section-title">八道工序</h2>
              <div className="divider divider--center" />
              <p className="section-desc">一件泥人作品的诞生，需经历选泥、塑形、彩绘等八道工序，历时数月，方成一件。</p>
            </div>
          </FadeIn>

          <div className="craft__steps">
            {craftSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 80} direction="left">
                <div className="craft__step">
                  <div className="craft__step-num">0{step.step}</div>
                  <div className="craft__step-content">
                    <h3 className="craft__step-name">{step.name}</h3>
                    <p className="craft__step-desc">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 数字统计 ── */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {[
              { num: '六', unit: '代', label: '薪火相传' },
              { num: '198', unit: '年', label: '传承历史' },
              { num: '500+', unit: '件', label: '馆藏精品' },
              { num: '2006', unit: '年', label: '列入国家非遗' },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="stats__item">
                  <div className="stats__number">
                    <span className="stats__num">{stat.num}</span>
                    <span className="stats__unit">{stat.unit}</span>
                  </div>
                  <div className="stats__label">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 到访召唤 ── */}
      <section className="visit-cta">
        <div className="container">
          <FadeIn>
            <div className="visit-cta__inner">
              <p className="section-label">亲临感受</p>
              <h2 className="visit-cta__title">走进泥人张美术馆</h2>
              <p className="visit-cta__desc">
                _ _市_ _区，百年历史街区之中，<br />
                一座将传统与当代融合的彩塑艺术殿堂。
              </p>
              <Link to="/visit" className="btn btn--primary">规划到访</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 页脚 ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <span className="footer__brand-cn">泥人张</span>
              <span className="footer__brand-en">CLAY FIGURINE ZHANG</span>
            </div>
            <nav className="footer__nav">
              {[['首页','/'],['作品馆','/gallery'],['传承志','/heritage'],['到访','/visit']].map(([label, path]) => (
                <Link key={path} to={path} className="footer__link">{label}</Link>
              ))}
            </nav>
          </div>
          <div className="footer__divider" />
          <div className="footer__bottom">
            <p>© 2024 泥人张彩塑艺术馆 · 国家级非物质文化遗产</p>
            <p className="footer__addr">_ _市_ _区</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
