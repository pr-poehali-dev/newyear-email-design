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

const FireplaceFlame = () => (
  <div className="relative w-full h-48 bg-gradient-to-t from-[#8B4513] via-[#D2691E] to-[#CD853F] rounded-t-3xl overflow-hidden">
    <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#FF4500] via-[#FF6347] to-transparent animate-flicker" />
    <div className="absolute bottom-0 left-1/4 w-20 h-24 bg-gradient-to-t from-[#FFD700] via-[#FFA500] to-transparent rounded-full blur-xl animate-glow" />
    <div className="absolute bottom-0 right-1/4 w-24 h-28 bg-gradient-to-t from-[#FFD700] via-[#FFA500] to-transparent rounded-full blur-xl animate-glow" style={{ animationDelay: '1s' }} />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-20 bg-gradient-to-t from-[#FFFF00] via-[#FFD700] to-transparent rounded-full blur-lg animate-flicker" style={{ animationDelay: '0.5s' }} />
  </div>
);

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
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-[#B4D4E1] relative overflow-hidden">
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
          <h1 className="text-6xl font-bold text-[#8B4513] mb-4">
            🎄 С Новым Годом! 🎄
          </h1>
          <p className="text-xl text-[#4A4A4A]">Пусть в новом году сбудутся все мечты</p>
        </header>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-2xl border-[#D2691E]/30">
            <FireplaceFlame />
            <div className="mt-6 space-y-4">
              <h2 className="text-3xl font-semibold text-center text-[#8B4513]">
                Уютный очаг новогодних поздравлений
              </h2>
            </div>
          </Card>
        </div>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Sparkles" className="text-[#FFD700]" size={32} />
              <h2 className="text-4xl font-semibold text-[#8B4513]">Поздравление</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Дорогие друзья! От всего сердца поздравляю вас с наступающим Новым Годом! 
              Пусть этот праздник принесет в ваш дом тепло, уют и радость. Желаю вам крепкого 
              здоровья, семейного благополучия и исполнения самых заветных желаний. Пусть каждый 
              день нового года будет наполнен счастьем, любовью и приятными сюрпризами!
            </p>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Star" className="text-[#FFD700]" size={32} />
              <h2 className="text-4xl font-semibold text-[#8B4513]">Пожелания</h2>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <span className="text-gray-700">Крепкого здоровья и неиссякаемой энергии</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💫</span>
                <span className="text-gray-700">Успехов во всех начинаниях и достижении целей</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌟</span>
                <span className="text-gray-700">Радости, любви и понимания в семье</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💖</span>
                <span className="text-gray-700">Ярких впечатлений и незабываемых моментов</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <span className="text-gray-700">Благополучия и процветания в новом году</span>
              </li>
            </ul>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Calendar" className="text-[#8B4513]" size={32} />
              <h2 className="text-4xl font-semibold text-[#8B4513]">Итоги года</h2>
            </div>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Уходящий год был наполнен яркими событиями и важными достижениями. Мы прошли 
                большой путь, преодолели трудности и достигли новых высот.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-gradient-to-br from-[#FFE4B5] to-[#FFDAB9] rounded-lg">
                  <div className="text-3xl mb-2">🏆</div>
                  <h3 className="font-semibold text-[#8B4513] mb-2">Достижения</h3>
                  <p className="text-sm">Реализовано множество проектов и достигнуты поставленные цели</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] rounded-lg">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold text-[#8B4513] mb-2">Новые навыки</h3>
                  <p className="text-sm">Освоены новые знания и умения, которые пригодятся в будущем</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#FEE2E2] to-[#FECACA] rounded-lg">
                  <div className="text-3xl mb-2">❤️</div>
                  <h3 className="font-semibold text-[#8B4513] mb-2">Отношения</h3>
                  <p className="text-sm">Укрепили связи с близкими и завели новых друзей</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#E9D5FF] to-[#D8B4FE] rounded-lg">
                  <div className="text-3xl mb-2">🌱</div>
                  <h3 className="font-semibold text-[#8B4513] mb-2">Развитие</h3>
                  <p className="text-sm">Работали над собой и становились лучше с каждым днем</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Rocket" className="text-[#FF6347]" size={32} />
              <h2 className="text-4xl font-semibold text-[#8B4513]">Планы на новый год</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#FFE4B5]/50 to-transparent rounded-lg hover:from-[#FFE4B5] transition-colors">
                <div className="text-2xl mt-1">📚</div>
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-1">Обучение и развитие</h3>
                  <p className="text-gray-700">Освоить новые профессиональные навыки и получить дополнительное образование</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#E0F2FE]/50 to-transparent rounded-lg hover:from-[#E0F2FE] transition-colors">
                <div className="text-2xl mt-1">💪</div>
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-1">Здоровье</h3>
                  <p className="text-gray-700">Начать заниматься спортом регулярно и вести здоровый образ жизни</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#FEE2E2]/50 to-transparent rounded-lg hover:from-[#FEE2E2] transition-colors">
                <div className="text-2xl mt-1">✈️</div>
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-1">Путешествия</h3>
                  <p className="text-gray-700">Посетить новые места и получить незабываемые впечатления</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#E9D5FF]/50 to-transparent rounded-lg hover:from-[#E9D5FF] transition-colors">
                <div className="text-2xl mt-1">🎨</div>
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-1">Творчество</h3>
                  <p className="text-gray-700">Реализовать творческие проекты и развить свои таланты</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Camera" className="text-[#8B4513]" size={32} />
              <h2 className="text-4xl font-semibold text-[#8B4513]">Фотогалерея</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-[#FFE4B5] to-[#D2691E] rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-lg"
                >
                  <div className="text-center">
                    <Icon name="Image" size={48} className="text-white/70 mx-auto mb-2" />
                    <p className="text-white/90 text-sm">Фото {i}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              Воспоминания уходящего года в ярких моментах
            </p>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Card className="p-8 bg-gradient-to-br from-[#8B4513] to-[#D2691E] text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Mail" size={32} />
              <h2 className="text-4xl font-semibold">Контакты</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={24} />
                <span className="text-lg">+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={24} />
                <span className="text-lg">newyear@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={24} />
                <span className="text-lg">Москва, Россия</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <footer className="text-center py-8 text-[#4A4A4A]">
          <p className="text-lg">С наилучшими пожеланиями! 🎅✨</p>
          <p className="text-sm mt-2 opacity-75">© 2025 Новогоднее письмо</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
