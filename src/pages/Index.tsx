import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Snowflake = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
  <div
    className="absolute text-white opacity-80 pointer-events-none"
    style={{
      left,
      top: '-10vh',
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  >
    ❄
  </div>
);

const AuroraBorealis = () => {
  const [stars] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 60}%`,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }))
  );

  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] rounded-3xl overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#00ff87]/30 via-[#60efff]/30 to-[#a78bfa]/30 animate-aurora-wave" style={{ animationDuration: '12s' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#a78bfa]/40 via-[#ec4899]/40 to-[#00ff87]/40 animate-aurora-wave" style={{ animationDelay: '4s', animationDuration: '15s' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#60efff]/30 via-[#00ff87]/30 to-[#ec4899]/30 animate-aurora-wave" style={{ animationDelay: '8s', animationDuration: '18s' }} />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent" />
    </div>
  );
};

const Index = () => {
  const [snowflakes] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 20,
      left: `${Math.random() * 100}%`,
    }))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0f1729] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-50">
        {snowflakes.map((flake) => (
          <div
            key={`snow-${flake.id}`}
            className="absolute animate-snowfall"
            style={{
              left: flake.left,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#a78bfa] bg-clip-text text-transparent mb-4">
            ✨ С Новым Годом! ✨
          </h1>
          <p className="text-xl text-[#60efff]">Пусть в новом году сбудутся все мечты</p>
        </header>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6 bg-[#1a1f3a]/80 backdrop-blur-sm shadow-2xl border-[#00ff87]/20">
            <AuroraBorealis />
            <div className="mt-6 space-y-4">
              <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-[#60efff] to-[#a78bfa] bg-clip-text text-transparent">
                Северное сияние новогодних поздравлений
              </h2>
            </div>
          </Card>
        </div>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="p-8 bg-[#1a1f3a]/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow border-[#00ff87]/20">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Sparkles" className="text-[#00ff87]" size={32} />
              <h2 className="text-4xl font-semibold text-[#60efff]">Поздравление</h2>
            </div>
            <p className="text-lg leading-relaxed text-[#c7d2fe]">
              Дорогие друзья! От всего сердца поздравляю вас с наступающим Новым Годом! 
              Пусть этот праздник принесет в ваш дом тепло, уют и радость. Желаю вам крепкого 
              здоровья, семейного благополучия и исполнения самых заветных желаний. Пусть каждый 
              день нового года будет наполнен счастьем, любовью и приятными сюрпризами!
            </p>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="p-8 bg-[#1a1f3a]/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow border-[#60efff]/20">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Star" className="text-[#a78bfa]" size={32} />
              <h2 className="text-4xl font-semibold text-[#60efff]">Пожелания</h2>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <span className="text-[#c7d2fe]">Крепкого здоровья и неиссякаемой энергии</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💫</span>
                <span className="text-[#c7d2fe]">Успехов во всех начинаниях и достижении целей</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌟</span>
                <span className="text-[#c7d2fe]">Радости, любви и понимания в семье</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💖</span>
                <span className="text-[#c7d2fe]">Ярких впечатлений и незабываемых моментов</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <span className="text-[#c7d2fe]">Благополучия и процветания в новом году</span>
              </li>
            </ul>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="p-8 bg-[#1a1f3a]/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow border-[#a78bfa]/20">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Calendar" className="text-[#00ff87]" size={32} />
              <h2 className="text-4xl font-semibold text-[#60efff]">Итоги года</h2>
            </div>
            <div className="space-y-4 text-lg text-[#c7d2fe]">
              <p>
                Уходящий год был наполнен яркими событиями и важными достижениями. Мы прошли 
                большой путь, преодолели трудности и достигли новых высот.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-gradient-to-br from-[#00ff87]/20 to-[#00ff87]/10 rounded-lg border border-[#00ff87]/30">
                  <div className="text-3xl mb-2">🏆</div>
                  <h3 className="font-semibold text-[#00ff87] mb-2">Достижения</h3>
                  <p className="text-sm text-[#c7d2fe]">Реализовано множество проектов и достигнуты поставленные цели</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#60efff]/20 to-[#60efff]/10 rounded-lg border border-[#60efff]/30">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold text-[#60efff] mb-2">Новые навыки</h3>
                  <p className="text-sm text-[#c7d2fe]">Освоены новые знания и умения, которые пригодятся в будущем</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#a78bfa]/20 to-[#a78bfa]/10 rounded-lg border border-[#a78bfa]/30">
                  <div className="text-3xl mb-2">❤️</div>
                  <h3 className="font-semibold text-[#a78bfa] mb-2">Отношения</h3>
                  <p className="text-sm text-[#c7d2fe]">Укрепили связи с близкими и завели новых друзей</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/10 rounded-lg border border-[#ec4899]/30">
                  <div className="text-3xl mb-2">🌱</div>
                  <h3 className="font-semibold text-[#ec4899] mb-2">Развитие</h3>
                  <p className="text-sm text-[#c7d2fe]">Работали над собой и становились лучше с каждым днем</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="p-8 bg-[#1a1f3a]/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow border-[#ec4899]/20">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Rocket" className="text-[#ec4899]" size={32} />
              <h2 className="text-4xl font-semibold text-[#60efff]">Планы на новый год</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#00ff87]/20 to-transparent rounded-lg hover:from-[#00ff87]/30 transition-colors border border-[#00ff87]/20">
                <div className="text-2xl mt-1">📚</div>
                <div>
                  <h3 className="font-semibold text-[#00ff87] mb-1">Обучение и развитие</h3>
                  <p className="text-[#c7d2fe]">Освоить новые профессиональные навыки и получить дополнительное образование</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#60efff]/20 to-transparent rounded-lg hover:from-[#60efff]/30 transition-colors border border-[#60efff]/20">
                <div className="text-2xl mt-1">💪</div>
                <div>
                  <h3 className="font-semibold text-[#60efff] mb-1">Здоровье</h3>
                  <p className="text-[#c7d2fe]">Начать заниматься спортом регулярно и вести здоровый образ жизни</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#a78bfa]/20 to-transparent rounded-lg hover:from-[#a78bfa]/30 transition-colors border border-[#a78bfa]/20">
                <div className="text-2xl mt-1">✈️</div>
                <div>
                  <h3 className="font-semibold text-[#a78bfa] mb-1">Путешествия</h3>
                  <p className="text-[#c7d2fe]">Посетить новые места и получить незабываемые впечатления</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#ec4899]/20 to-transparent rounded-lg hover:from-[#ec4899]/30 transition-colors border border-[#ec4899]/20">
                <div className="text-2xl mt-1">🎨</div>
                <div>
                  <h3 className="font-semibold text-[#ec4899] mb-1">Творчество</h3>
                  <p className="text-[#c7d2fe]">Реализовать творческие проекты и развить свои таланты</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Card className="p-8 bg-[#1a1f3a]/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow border-[#00ff87]/20">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Camera" className="text-[#a78bfa]" size={32} />
              <h2 className="text-4xl font-semibold text-[#60efff]">Фотогалерея</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-[#00ff87]/20 via-[#60efff]/20 to-[#a78bfa]/20 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-lg border border-[#60efff]/30"
                >
                  <div className="text-center">
                    <Icon name="Image" size={48} className="text-[#60efff]/70 mx-auto mb-2" />
                    <p className="text-[#c7d2fe]/90 text-sm">Фото {i}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-[#c7d2fe] mt-6 italic">
              Воспоминания уходящего года в ярких моментах
            </p>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Card className="p-8 bg-gradient-to-br from-[#00ff87]/20 via-[#60efff]/20 to-[#a78bfa]/20 backdrop-blur-sm shadow-xl border-[#00ff87]/30">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Mail" size={32} className="text-[#00ff87]" />
              <h2 className="text-4xl font-semibold text-[#60efff]">Контакты</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={24} className="text-[#a78bfa]" />
                <span className="text-lg text-[#c7d2fe]">+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={24} className="text-[#a78bfa]" />
                <span className="text-lg text-[#c7d2fe]">newyear@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={24} className="text-[#a78bfa]" />
                <span className="text-lg text-[#c7d2fe]">Москва, Россия</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" className="bg-[#00ff87]/10 hover:bg-[#00ff87]/20 border-[#00ff87]/30 text-[#00ff87]">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" className="bg-[#60efff]/10 hover:bg-[#60efff]/20 border-[#60efff]/30 text-[#60efff]">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" className="bg-[#a78bfa]/10 hover:bg-[#a78bfa]/20 border-[#a78bfa]/30 text-[#a78bfa]">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <footer className="text-center py-8 text-[#c7d2fe]">
          <p className="text-lg">С наилучшими пожеланиями! ✨🌌</p>
          <p className="text-sm mt-2 opacity-75">© 2025 Новогоднее письмо</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;