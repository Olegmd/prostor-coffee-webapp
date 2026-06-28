// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand();

// Меню (дублируем из bot.py)
const MENU = {
    "c1": {
        "name": "🌅 Завтраки",
        "items": {
            "i1": {"name": "Утренний бургер", "price": 580, "desc": "Бриошь, курица су-вид, цезарь", "photo": "https://picsum.photos/400/200?random=1"},
            "i2": {"name": "Сырники", "price": 480, "desc": "Со сметаной и карамелью", "photo": "https://picsum.photos/400/200?random=2"},
            "i3": {"name": "Гречка с яйцом", "price": 465, "desc": "Гречка, яйцо пашот, авокадо", "photo": "https://picsum.photos/400/200?random=3"},
            "i4": {"name": "Вареники", "price": 480, "desc": "С вишневым соусом", "photo": "https://picsum.photos/400/200?random=4"},
            "i5": {"name": "Смузи-боул", "price": 490, "desc": "Голубика, банан, кокос", "photo": "https://picsum.photos/400/200?random=5"},
            "i6": {"name": "Завтрак 2 яйца", "price": 385, "desc": "Яйца, салат, тост", "photo": "https://picsum.photos/400/200?random=6"},
            "i7": {"name": "Круассан с курицей", "price": 600, "desc": "Круассан, курица, цезарь", "photo": "https://picsum.photos/400/200?random=7"},
            "i8": {"name": "Овсянка", "price": 380, "desc": "С бананом и карамелью", "photo": "https://picsum.photos/400/200?random=8"}
        }
    },
    "c2": {
        "name": "🔥 Горячее",
        "items": {
            "i9": {"name": "Птитим с креветкой", "price": 520, "desc": "Птитим, креветки, песто", "photo": "https://picsum.photos/400/200?random=9"},
            "i10": {"name": "Орзо с говядиной", "price": 570, "desc": "Орзо, говядина, грибы", "photo": "https://picsum.photos/400/200?random=10"},
            "i11": {"name": "Бифштекс", "price": 620, "desc": "Индейка, коул слоу", "photo": "https://picsum.photos/400/200?random=11"},
            "i12": {"name": "Роти с креветкой", "price": 590, "desc": "Лепешка, креветки, авокадо", "photo": "https://picsum.photos/400/200?random=12"},
            "i13": {"name": "Курица карри", "price": 580, "desc": "Курица, рис, карри", "photo": "https://picsum.photos/400/200?random=13"}
        }
    },
    "c3": {
        "name": "🍳 Бранч",
        "items": {
            "i14": {"name": "Бриошь с креветкой", "price": 540, "desc": "Бриошь, креветки, скрембл", "photo": "https://picsum.photos/400/200?random14"},
            "i15": {"name": "Бриошь с лососем", "price": 630, "desc": "Бриошь, лосось, пашот", "photo": "https://picsum.photos/400/200?random=15"},
            "i16": {"name": "Боул завтрак", "price": 380, "desc": "Скрэмбл, авокадо, зелень", "photo": "https://picsum.photos/400/200?random=16"},
            "i17": {"name": "Авокадо тост", "price": 420, "desc": "Авокадо, томаты, хлеб", "photo": "https://picsum.photos/400/200?random=17"}
        }
    },
    "c4": {
        "name": "🥗 Боулы",
        "items": {
            "i18": {"name": "Боул с говядиной", "price": 590, "desc": "Рис, говядина, унаги", "photo": "https://picsum.photos/400/200?random=18"},
            "i19": {"name": "Боул с лососем", "price": 690, "desc": "Лосось, рис, чука", "photo": "https://picsum.photos/400/200?random=19"},
            "i20": {"name": "Боул с креветкой", "price": 550, "desc": "Креветка, киноа, авокадо", "photo": "https://picsum.photos/400/200?random=20"}
        }
    },
    "c5": {
        "name": "🍔 Бургеры",
        "items": {
            "i21": {"name": "Бургер индейка", "price": 650, "desc": "Индейка, бриошь, чеддер", "photo": "https://picsum.photos/400/200?random=21"},
            "i22": {"name": "Бургер говядина", "price": 650, "desc": "Говядина, бриошь, барбекю", "photo": "https://picsum.photos/400/200?random=22"}
        }
    },
    "c6": {
        "name": "👶 Детское",
        "items": {
            "i23": {"name": "Блинчики", "price": 220, "desc": "Со сгущенкой или сметаной", "photo": "https://picsum.photos/400/200?random=23"},
            "i24": {"name": "Пельмени", "price": 310, "desc": "Цветные пельмени", "photo": "https://picsum.photos/400/200?random=24"}
        }
    },
    "c7": {
        "name": "🍲 Супы",
        "items": {
            "i25": {"name": "Окрошка", "price": 450, "desc": "На йогурте с курицей", "photo": "https://picsum.photos/400/200?random=25"}
        }
    }
};

// Корзина
let cart = {};
let currentCategory = 'c1';

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu(currentCategory);
});

// Рендер категорий
function renderCategories() {
    const container = document.getElementById('categories');
    container.innerHTML = '';
    
    Object.keys(MENU).forEach(key => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${key === currentCategory ? 'active' : ''}`;
        btn.textContent = MENU[key].name;
        btn.onclick = () => {
            currentCategory = key;
            renderCategories();
            renderMenu(key);
        };
        container.appendChild(btn);
    });
}

// Рендер меню
function renderMenu(categoryKey) {
    const container = document.getElementById('menu');
    container.innerHTML = '';
    
    const category = MENU[categoryKey];
    Object.keys(category.items).forEach(key => {
        const item = category.items[key];
        const itemEl = document.createElement('div');
        itemEl.className = 'menu-item';
        itemEl.innerHTML = `
            <img src="${item.photo}" alt="${item.name}" class="item-image" onerror="this.src='https://via.placeholder.com/400x200?text=No+Photo'">
            <div class="item-content">
                <div class="item-name">${item.name}</div>
                <div class="item-desc">${item.desc}</div>
                <div class="item-footer">
                    <div class="item-price">${item.price}₽</div>
                    <button class="add-btn" onclick="addToCart('${categoryKey}', '${key}')">В корзину</button>
                </div>
            </div>
        `;
        container.appendChild(itemEl);
    });
}

// Добавить в корзину
function addToCart(categoryKey, itemKey) {
    const item = MENU[categoryKey].items[itemKey];
    
    if (cart[itemKey]) {
        cart[itemKey].qty++;
    } else {
        cart[itemKey] = {
            name: item.name,
            price: item.price,
            qty: 1
        };
    }
    
    updateCartCount();
    tg.HapticFeedback.impactOccurred('light');
    
    // Анимация кнопки
    const btn = event.target;
    btn.textContent = '✓ Добавлено';
    setTimeout(() => {
        btn.textContent = 'В корзину';
    }, 1000);
}

// Обновить счётчик корзины
function updateCartCount() {
    const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').textContent = count;
}

// Показать корзину
function showCart() {
    const modal = document.getElementById('cartModal');
    const itemsContainer = document.getElementById('cartItems');
    
    itemsContainer.innerHTML = '';
    let total = 0;
    
    Object.keys(cart).forEach(key => {
        const item = cart[key];
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price}₽</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="decreaseQty('${key}')">−</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="increaseQty('${key}')">+</button>
            </div>
        `;
        itemsContainer.appendChild(itemEl);
    });
    
    document.getElementById('cartTotal').textContent = total;
    modal.classList.add('active');
}

// Скрыть корзину
function hideCart() {
    document.getElementById('cartModal').classList.remove('active');
}

// Увеличить количество
function increaseQty(key) {
    cart[key].qty++;
    updateCartCount();
    showCart();
}

// Уменьшить количество
function decreaseQty(key) {
    cart[key].qty--;
    if (cart[key].qty <= 0) {
        delete cart[key];
    }
    updateCartCount();
    showCart();
}

// Отправить заказ
function sendOrder() {
    if (Object.keys(cart).length === 0) {
        alert('Корзина пуста!');
        return;
    }
    
    let total = 0;
    let orderText = '📋 **Новый заказ из Web App:**\n\n';
    
    Object.keys(cart).forEach(key => {
        const item = cart[key];
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        orderText += `• ${item.name} x${item.qty} = ${itemTotal}₽\n`;
    });
    
    orderText += `\n💰 **Итого: ${total}₽**`;
    
    // Отправляем данные боту
    const data = {
        action: 'order',
        cart: cart,
        total: total
    };
    
    tg.sendData(JSON.stringify(data));
    
    // Показываем успех
    alert('✅ Заказ отправлен! Проверьте бота.');
    hideCart();
    
    // Очищаем корзину
    cart = {};
    updateCartCount();
}

// Закрытие по клику вне модалки
document.getElementById('cartModal').addEventListener('click', (e) => {
    if (e.target.id === 'cartModal') {
        hideCart();
    }
});
