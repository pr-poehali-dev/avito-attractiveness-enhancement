import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      title: 'Кирпич красный М-150',
      price: '12 ₽/шт',
      category: 'brick',
      views: '2 345',
      image: '🧱',
      tips: ['Яркое фото крупным планом', 'Указать количество в наличии']
    },
    {
      id: 2,
      title: 'Цемент М-500 50кг',
      price: '450 ₽/мешок',
      category: 'cement',
      views: '1 876',
      image: '🏗️',
      tips: ['Показать сертификат качества', 'Условия доставки в заголовке']
    },
    {
      id: 3,
      title: 'Профнастил С-21',
      price: '620 ₽/м²',
      category: 'metal',
      views: '3 120',
      image: '🔩',
      tips: ['Фото в деле', 'Указать гарантию']
    },
    {
      id: 4,
      title: 'Доска обрезная 25x150',
      price: '8 500 ₽/м³',
      category: 'wood',
      views: '1 543',
      image: '🪵',
      tips: ['Показать срез дерева', 'Влажность в описании']
    },
    {
      id: 5,
      title: 'Утеплитель Rockwool',
      price: '1 200 ₽/упак',
      category: 'insulation',
      views: '987',
      image: '🧊',
      tips: ['Указать площадь покрытия', 'Фото упаковки']
    },
    {
      id: 6,
      title: 'Песок строительный',
      price: '850 ₽/тонна',
      category: 'bulk',
      views: '2 654',
      image: '⛰️',
      tips: ['Фото песка крупно', 'Минимальный заказ']
    }
  ];

  const categories = [
    { id: 'all', name: 'Все', icon: 'Grid3x3' },
    { id: 'brick', name: 'Кирпич', icon: 'Box' },
    { id: 'cement', name: 'Цемент', icon: 'Package' },
    { id: 'metal', name: 'Металл', icon: 'Wrench' },
    { id: 'wood', name: 'Дерево', icon: 'Trees' },
    { id: 'insulation', name: 'Утеплитель', icon: 'Shield' },
    { id: 'bulk', name: 'Сыпучие', icon: 'Mountain' }
  ];

  const tips = [
    {
      icon: 'Camera',
      title: 'Качественные фото',
      desc: 'Минимум 5 фото с разных ракурсов, хорошее освещение'
    },
    {
      icon: 'FileText',
      title: 'Полное описание',
      desc: 'Укажите все характеристики: размеры, вес, марку, количество'
    },
    {
      icon: 'TrendingUp',
      title: 'Конкурентная цена',
      desc: 'Изучите цены конкурентов и предложите оптимальную'
    },
    {
      icon: 'Star',
      title: 'Отзывы и рейтинг',
      desc: 'Просите довольных клиентов оставлять отзывы'
    },
    {
      icon: 'Clock',
      title: 'Быстрые ответы',
      desc: 'Отвечайте на вопросы в течение 15 минут'
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      desc: 'Прикрепляйте документы качества и безопасности'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-xl font-bold">
              С
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">СтройМаркет Про</h1>
              <p className="text-xs text-gray-500">Продажи на Авито</p>
            </div>
          </div>
          <Button className="gap-2">
            <Icon name="Plus" size={18} />
            Создать объявление
          </Button>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1">🚀 Увеличьте продажи в 3 раза</Badge>
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Самые продаваемые объявления строительных материалов
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Платформа для создания эффективных объявлений на Авито. Больше просмотров, больше продаж.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2 text-lg px-8">
                <Icon name="Rocket" size={20} />
                Начать продавать
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                <Icon name="PlayCircle" size={20} />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">15K+</div>
              <div className="text-gray-600">Объявлений</div>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-gray-600">Довольных</div>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <div className="text-gray-600">Рост продаж</div>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Популярные товары</h3>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className="gap-2"
              >
                <Icon name={cat.icon} size={16} />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.map(product => (
              <Card 
                key={product.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-6xl">{product.image}</div>
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="Eye" size={14} />
                      {product.views}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-gray-700 mb-2">Советы для Авито:</div>
                    {product.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-4">Как создать топовое объявление</h3>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Проверенные советы для максимального количества просмотров
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, idx) => (
                <Card 
                  key={idx} 
                  className="bg-white hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon name={tip.icon} size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                    <CardDescription className="text-base">{tip.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-4xl font-bold mb-6">Готовы увеличить продажи?</h3>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам успешных продавцов стройматериалов на Авито
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
              <Icon name="MessageCircle" size={20} />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 СтройМаркет Про. Все права защищены.</p>
          <p className="text-xs mt-2 opacity-70">Платформа для эффективных продаж на Авито</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
