import FadeIn from '../components/FadeIn'
import { timeline, heritagePersons } from '../data'
import './Heritage.css'

export default function Heritage() {
  return (
    <div className="heritage page-wrapper">
      {/* 页头 */}
      <header className="heritage__header">
        <div className="heritage__header-bg" />
        <div className="container">
          <FadeIn>
            <p className="section-label">人文脉络</p>
            <h1 className="heritage__title">传承志</h1>
            <p className="heritage__subtitle">六代传人，近两百年薪火相续</p>
          </FadeIn>
        </div>
      </header>

      {/* 传承人像 */}
      <section className="masters">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">历代传人</p>
              <h2 className="section-title">匠人肖像</h2>
              <div className="divider divider--center" />
            </div>
          </FadeIn>
          <div className="masters__grid">
            {heritagePersons.map((person, i) => (
              <FadeIn key={person.name} delay={i * 150}>
                <div className="masters__card">
                  <div className="masters__img-wrap">
                    <img src={person.image} alt={person.name} className="masters__img" loading="lazy" />
                    <div className="masters__img-overlay" />
                  </div>
                  <div className="masters__info">
                    <span className="masters__generation">{person.generation}</span>
                    <h3 className="masters__name">{person.name}</h3>
                    <p className="masters__years">{person.years}</p>
                    <div className="masters__title-badge">{person.title}</div>
                    <p className="masters__desc">{person.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 时间轴 */}
      <section className="timeline-section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">历史脉络</p>
              <h2 className="section-title">传承时间轴</h2>
              <div className="divider divider--center" />
            </div>
          </FadeIn>
          <div className="timeline">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 80} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
                  <div className="timeline__dot" />
                  <div className="timeline__card">
                    <span className="timeline__era">{item.era}</span>
                    <h3 className="timeline__event">{item.event}</h3>
                    <p className="timeline__detail">{item.detail}</p>
                  </div>
                  <div className="timeline__year">{item.year}</div>
                </div>
              </FadeIn>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* 传承宣言 */}
      <section className="declaration">
        <div className="container">
          <FadeIn>
            <div className="declaration__inner">
              <div className="declaration__ornament">
                <div className="declaration__ornament-line" />
                <span>传承</span>
                <div className="declaration__ornament-line" />
              </div>
              <blockquote className="declaration__text">
                手艺不只是技术，更是一代代人对生活的观察，<br />
                对世间百态的体悟，凝固在方寸泥土之间的，<br />
                是中国人数百年来不变的审美与温情。
              </blockquote>
              <p className="declaration__author">—— 泥人张第六代传人 张昊</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
