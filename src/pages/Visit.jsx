import FadeIn from '../components/FadeIn'
import './Visit.css'

const openHours = [
  { day: '周二 — 周五', time: '09:00 — 17:00', note: '' },
  { day: '周六 — 周日', time: '09:00 — 18:00', note: '节假日延长开放' },
  { day: '周一', time: '闭馆休息', note: '法定节假日除外' },
]

const tickets = [
  { type: '普通票', price: '60', desc: '成人全价票' },
  { type: '优惠票', price: '30', desc: '学生、老人、军人' },
  { type: '儿童免票', price: '免费', desc: '1.2米以下儿童' },
  { type: '讲解服务', price: '150', desc: '专业讲解员，约60分钟' },
]

const faqs = [
  { q: '如何前往美术馆？', a: '地铁_号线至_ _站，步行约8分钟。公交多路可达，详见"交通路线"。' },
  { q: '馆内可以拍照吗？', a: '允许非商业拍摄，部分珍贵藏品区域禁止使用闪光灯，请遵守馆内规定。' },
  { q: '有团体参观预约服务吗？', a: '接受20人以上团体预约，可安排专属讲解，请提前3个工作日电话或邮件联系。' },
  { q: '馆内有餐饮设施吗？', a: '设有茶室，提供传统茶饮及点心，不提供正餐。周边200米内有多家餐厅。' },
]

export default function Visit() {
  return (
    <div className="visit page-wrapper">
      {/* 页头 */}
      <header className="visit__header">
        <div className="visit__header-bg" />
        <div className="container">
          <FadeIn>
            <p className="section-label">线下体验</p>
            <h1 className="visit__title">到访</h1>
            <p className="visit__subtitle">走进美术馆，与泥土和色彩面对面</p>
          </FadeIn>
        </div>
      </header>

      {/* 地图占位 + 地址 */}
      <section className="visit__location">
        <div className="visit__map-placeholder">
          <div className="visit__map-inner">
            {/* 装饰性地图元素 */}
            <div className="visit__map-pin">
              <div className="visit__map-pin-icon">📍</div>
              <div className="visit__map-pin-label">泥人张美术馆</div>
            </div>
            <div className="visit__map-streets">
              <div className="visit__map-street visit__map-street--h" style={{top:'35%'}} />
              <div className="visit__map-street visit__map-street--h" style={{top:'60%'}} />
              <div className="visit__map-street visit__map-street--v" style={{left:'30%'}} />
              <div className="visit__map-street visit__map-street--v" style={{left:'65%'}} />
            </div>
            <p className="visit__map-hint">嵌入高德/百度地图（实际部署时替换）</p>
          </div>
        </div>

        <div className="visit__address-card">
          <FadeIn direction="left">
            <div className="visit__address-section">
              <h2 className="visit__address-title">馆址信息</h2>
              <div className="divider" />

              <div className="visit__address-item">
                <span className="visit__address-icon">📍</span>
                <div>
                  <p className="visit__address-label">地址</p>
                  <p className="visit__address-value">_ _市_ _区_ _路 · 泥人张彩塑工作室</p>
                </div>
              </div>

              <div className="visit__address-item">
                <span className="visit__address-icon">📞</span>
                <div>
                  <p className="visit__address-label">电话预约</p>
                  <p className="visit__address-value">022 - XXXX - XXXX</p>
                </div>
              </div>

              <div className="visit__address-item">
                <span className="visit__address-icon">✉️</span>
                <div>
                  <p className="visit__address-label">邮件</p>
                  <p className="visit__address-value">visit@nirenzhang.com</p>
                </div>
              </div>

              <div className="visit__address-item">
                <span className="visit__address-icon">🚇</span>
                <div>
                  <p className="visit__address-label">地铁</p>
                  <p className="visit__address-value">_号线 · _ _站 _出口步行约_分钟</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 开放时间 */}
      <section className="visit__hours">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">参观信息</p>
              <h2 className="section-title">开放时间</h2>
              <div className="divider divider--center" />
            </div>
          </FadeIn>
          <div className="visit__hours-grid">
            {openHours.map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="visit__hours-card">
                  <p className="visit__hours-day">{item.day}</p>
                  <p className="visit__hours-time">{item.time}</p>
                  {item.note && <p className="visit__hours-note">{item.note}</p>}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 票价 */}
      <section className="visit__tickets">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">入场须知</p>
              <h2 className="section-title">票价信息</h2>
              <div className="divider divider--center" />
            </div>
          </FadeIn>
          <div className="visit__tickets-grid">
            {tickets.map((t, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="visit__ticket-card">
                  <div className="visit__ticket-type">{t.type}</div>
                  <div className="visit__ticket-price">
                    {t.price === '免费' ? (
                      <span className="visit__ticket-free">免费</span>
                    ) : (
                      <>
                        <span className="visit__ticket-currency">¥</span>
                        <span className="visit__ticket-num">{t.price}</span>
                      </>
                    )}
                  </div>
                  <p className="visit__ticket-desc">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="visit__faq">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">参观须知</p>
              <h2 className="section-title">常见问题</h2>
              <div className="divider divider--center" />
            </div>
          </FadeIn>
          <div className="visit__faq-list">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="visit__faq-item">
                  <h3 className="visit__faq-q">{faq.q}</h3>
                  <p className="visit__faq-a">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="visit__cta">
        <div className="container">
          <FadeIn>
            <div className="visit__cta-inner">
              <p className="visit__cta-text">期待在美术馆与您相遇</p>
              <p className="visit__cta-sub">如需团体参观或定制服务，请提前与我们联系</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
