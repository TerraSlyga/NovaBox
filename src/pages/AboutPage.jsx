export default function AboutPage() {
  return (
    <main className="main">
      <section className="text__section">
        <h2 className="main__text">Про NovaBox</h2>
      </section>

      <section className="about__content">
        <div className="about__section">
          <h3 className="about__section-title">Наша місія</h3>
          <p className="about__text">
            NovaBox присвячена тому, щоб надати найкращі рішення для зберігання
            та захисту ваших цінних речей. Ми розуміємо важливість безпеки та
            якості, тому кожна коробка створюється з особливою увагою до
            деталей.
          </p>
        </div>

        <div className="about__section">
          <h3 className="about__section-title">Наш досвід</h3>
          <p className="about__text">
            З більш ніж 10 років досвіду в галузі упаковки та логістики, NovaBox
            став надійним партнером для тисяч задоволених клієнтів. Ми постійно
            інвестуємо в технології та інновації, щоб удосконалювати наші
            послуги.
          </p>
        </div>

        <div className="about__section">
          <h3 className="about__section-title">Поточні сертифікати</h3>
          <ul className="about__certifications">
            <li>🏆 ISO 9001 - Управління якістю</li>
            <li>♻️ Екологічні сертифікати</li>
            <li>🔒 Міжнародні стандарти безпеки</li>
            <li>⭐ Рейтинг 4.9/5 від клієнтів</li>
          </ul>
        </div>

        <div className="about__section">
          <h3 className="about__section-title">Контакти</h3>
          <div className="about__contact-info">
            <p>
              <strong>Телефон:</strong> 📞 +38 (0XX) XXX-XX-XX
            </p>
            <p>
              <strong>Email:</strong> 📧 info@novabox.ua
            </p>
            <p>
              <strong>Адреса:</strong> 📍 м. Київ, вул. Логістична, 123
            </p>
            <p>
              <strong>Режим роботи:</strong> 🕐 Пн-Пт: 09:00 - 18:00 | Сб-Нд:
              вихідні
            </p>
          </div>
        </div>

        <div className="about__section">
          <h3 className="about__section-title">Технологія</h3>
          <p className="about__text">
            Цей вебсайт побудований на сучасних технологіях:
          </p>
          <ul className="about__technologies">
            <li>⚛️ React 19 - бібліотека для інтерфейсів</li>
            <li>🛣️ React Router - навігація між сторінками</li>
            <li>💾 localStorage - збереження даних клієнта</li>
            <li>🌐 REST API - інтеграція зовнішніх даних</li>
            <li>📱 Responsive Design - адаптивний дизайн</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
