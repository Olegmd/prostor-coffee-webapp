// ============================================
// TELEGRAM WEB APP - КОФЕЙНЯ "ПРОСТО"
// Профессиональная версия с фото
// ============================================

const tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

// ============================================
// 📸 ИНСТРУКЦИЯ ПО ЗАМЕНЕ ФОТО:
// 1. Загрузи фото на imgur.com/upload
// 2. Скопируй прямую ссылку (должна заканчиваться на .jpg)
// 3. Замени "YOUR_IMAGE_URL_HERE" на свою ссылку
// Пример: "photo": "https://i.imgur.com/abc123.jpg"
// ============================================

const MENU = {
    "c1": {
        "name": "Завтраки",
        "icon": "🌅",
        "color": "#FF6B6B",
        "items": {
            "i1": {
                "name": "Утренний бургер",
                "price": 580,
                "desc": "Бриошь, курица су-вид, цезарь, томаты, айсберг, пармезан, яйцо",
                "photo": "https://i.imgur.com/Ydy37iC.jpeg" // ← ЗАМЕНИ НА ССЫЛКУ С IMGUR
            },
            "i2": {
                "name": "Сырники",
                "price": 480,
                "desc": "Со сметаной, солёной карамелью и сезонными ягодами",
                "photo": "https://i.imgur.com/rOxY3JB.jpeg"
            },
            "i3": {
                "name": "Гречка с яйцом пашот",
                "price": 465,
                "desc": "Фермерская гречка, авокадо, вяленые томаты, пармезан",
                "photo": "https://i.imgur.com/r1KBrgV.jpeg"
            },
            "i4": {
                "name": "Ленивые вареники",
                "price": 480,
                "desc": "С вишневым соусом и сметаной",
                "photo": "https://i.imgur.com/XZ5ni0a.jpeg"
            },
            "i5": {
                "name": "Смузи-боул",
                "price": 490,
                "desc": "Голубика, банан, кокосовое молоко, фисташка, чиа",
                "photo": "https://i.imgur.com/PLACEHOLDER5.jpg"
            },
            "i6": {
                "name": "Завтрак из 2-х яиц",
                "price": 385,
                "desc": "Скрэмбл, омлет или глазунья с салатом и тостом",
                "photo": "https://i.imgur.com/PLACEHOLDER6.jpg"
            },
            "i7": {
                "name": "Круассан с курицей",
                "price": 600,
                "desc": "Круассан, курица су-вид, айсберг, помидор, пармезан",
                "photo": "https://i.imgur.com/PLACEHOLDER7.jpg"
            },
            "i8": {
                "name": "Овсяная каша",
                "price": 380,
                "desc": "С бананом и солёной карамелью на альтернативном молоке",
                "photo": "https://i.imgur.com/PLACEHOLDER8.jpg"
            }
        }
    },
    "c2": {
        "name": "Горячее",
        "icon": "🔥",
        "color": "#FF8E53",
        "items": {
            "i9": {
                "name": "Птитим с креветкой",
                "price": 520,
                "desc": "Креветка, помидоры черри, шпинат, сливки, соус песто",
                "photo": "https://i.imgur.com/PLACEHOLDER9.jpg"
            },
            "i10": {
                "name": "Орзо с говядиной",
                "price": 570,
                "desc": "Томлёная говядина, красный лук, шампиньоны, сливки",
                "photo": "https://i.imgur.com/PLACEHOLDER10.jpg"
            },
            "i11": {
                "name": "Бифштекс из индейки",
                "price": 620,
                "desc": "С салатом коул слоу",
                "photo": "https://i.imgur.com/PLACEHOLDER11.jpg"
            },
            "i12": {
                "name": "Роти с креветкой",
                "price": 590,
                "desc": "Пшеничная лепёшка, авокадо, томаты, соус свит-чили",
                "photo": "https://i.imgur.com/PLACEHOLDER12.jpg"
            },
            "i13": {
                "name": "Курица карри с рисом",
                "price": 580,
                "desc": "Курица су-вид, белый рис, болгарский перец, шампиньоны",
                "photo": "https://i.imgur.com/PLACEHOLDER13.jpg"
            }
        }
    },
    "c3": {
        "name": "Завтрак",
        "icon": "🍳",
        "color": "#FFA726",
        "items": {
            "i14": {
                "name": "Бриошь с креветкой",
                "price": 540,
                "desc": "Креветки, сыр творожный, скрембл из яиц, пармезан",
                "photo": "https://i.imgur.com/PLACEHOLDER14.jpg"
            },
            "i15": {
                "name": "Бриошь с лососем",
                "price": 630,
                "desc": "Лосось с/с, яйца пашот, творожный сыр, помидоры черри",
                "photo": "https://i.imgur.com/PLACEHOLDER15.jpg"
            },
            "i16": {
                "name": "Боул-завтрак",
                "price": 380,
                "desc": "Скрэмбл, микс зелени, помидор черри, авокадо",
                "photo": "https://i.imgur.com/PLACEHOLDER16.jpg"
            },
            "i17": {
                "name": "Авокадо тост",
                "price": 420,
                "desc": "С вялеными томатами на гречневом хлебе (веган)",
                "photo": "https://i.imgur.com/PLACEHOLDER17.jpg"
            }
        }
    },
    "c4": {
        "name": "Боул",
        "icon": "🥗",
        "color": "#66BB6A",
        "items": {
            "i18": {
                "name": "Боул с говядиной",
                "price": 590,
                "desc": "Белый рис, томлёная говядина унаги, скрэмбл, эдамаме",
                "photo": "https://i.imgur.com/PLACEHOLDER18.jpg"
            },
            "i19": {
                "name": "Боул с лососем",
                "price": 690,
                "desc": "Лосось с/с, белый рис, салат чука, огурец, авокадо",
                "photo": "https://i.imgur.com/PLACEHOLDER19.jpg"
            },
            "i20": {
                "name": "Боул с креветкой",
                "price": 550,
                "desc": "Креветка, киноа, авокадо, огурец, айсберг, кукуруза",
                "photo": "https://i.imgur.com/PLACEHOLDER20.jpg"
            }
        }
    },
    "c5": {
        "name": "Бургер",
        "icon": "🍔",
        "color": "#EF5350",
        "items": {
            "i21": {
                "name": "Бургер с индейкой",
                "price": 650,
                "desc": "Котлета из индейки, белый соус, красный соус, чеддер",
                "photo": "https://i.imgur.com/PLACEHOLDER21.jpg"
            },
            "i22": {
                "name": "Бургер с говядиной",
                "price": 650,
                "desc": "Томлёная говядина, белый соус, барбекю, айсберг",
                "photo": "https://i.imgur.com/PLACEHOLDER22.jpg"
            }
        }
    },
    "c6": {
        "name": "Детское меню",
        "icon": "👶",
        "color": "#AB47BC",
        "items": {
            "i23": {
                "name": "Блинчики",
                "price": 220,
                "desc": "Со сгущёнкой или сметаной",
                "photo": "https://i.imgur.com/PLACEHOLDER23.jpg"
            },
            "i24": {
                "name": "Разноцветные пельмешки",
                "price": 310,
                "desc": "С курицей и сметаной",
                "photo": "https://i.imgur.com/PLACEHOLDER24.jpg"
            }
        }
    },
    "c7": {
        "name": "Обед",
        "icon": "🍲",
        "color": "#29B6F6",
        "items": {
            "i25": {
                "name": "Окрошка",
                "price": 450,
                "desc": "На пряном йогурте с курицей су-вид",
                "photo": "https://i.imgur.com/PLACEHOLDER25.jpg"
            }
        }
    }
};

// ============================================
// КОРЗИНА И СОСТОЯНИЕ
// ============================================
let cart = {};
let currentCategory = 'c1';

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu(currentCategory);
    updateCartCount();
});

// ============================================
// РЕНДЕР КАТЕГОРИЙ
// ============================================
function renderCategories() {
    const container = document.getElementById('categories');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.keys(MENU).forEach(key => {
        const cat = MENU[key];
        const btn = document.createElement('button');
        btn.className = `category-btn ${key === currentCategory ? 'active' : ''}`;
        btn.style.cssText = `
            background: ${key === currentCategory ? cat.color : '#f5f5f5'};
            color: ${key === currentCategory ? 'white' : '#333'};
        `;
        btn.innerHTML = `${cat.icon} ${cat.name}`;
        btn.onclick = () => {
            currentCategory = key;
            renderCategories();
            renderMenu(key);
            // Анимация прокрутки
            container.scrollLeft = 0;
        };
        container.appendChild(btn);
    });
}

// ============================================
// РЕНДЕР МЕНЮ
// ============================================
function renderMenu(categoryKey) {
    const container = document.getElementById('menu');
    if (!container) return;
    
    container.innerHTML = '';
    const category = MENU[categoryKey];
    
    // Анимация появления
    container.style.opacity = '0';
    
    setTimeout(() => {
        Object.keys(category.items).forEach((key, index) => {
            const item = category.items[key];
            const itemEl = createMenuItem(item, categoryKey, key, index);
            container.appendChild(itemEl);
        });
        
        container.style.transition = 'opacity 0.3s ease';
        container.style.opacity = '1';
    }, 100);
}

// ============================================
// СОЗДАНИЕ ЭЛЕМЕНТА МЕНЮ
// ============================================
function createMenuItem(item, catKey, itemKey, index) {
    const itemEl = document.createElement('div');
    itemEl.className = 'menu-item';
    itemEl.style.cssText = `
        animation: slideUp 0.4s ease ${index * 0.05}s both;
    `;
    
    itemEl.innerHTML = `
        <div class="item-image-wrapper">
            <img 
                src="${item.photo}" 
                alt="${item.name}" 
                class="item-image"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect fill=%22%23667eea%22 width=%22400%22 height=%22250%22/%3E%3Ctext fill=%22white%22 font-size=%2224%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${item.name.charAt(0)}%3C/text%3E%3C/svg%3E'"
                loading="lazy"
            >
            <div class="item-badge">${item.price} ₽</div>
        </div>
        <div class="item-content">
            <h3 class="item-name">${item.name}</h3>
            <p class="item-desc">${item.desc}</p>
            <button class="add-to-cart-btn" onclick="addToCart('${catKey}', '${itemKey}', this)">
                <span class="btn-text">В корзину</span>
                <span class="btn-icon">+</span>
            </button>
        </div>
    `;
    
    return itemEl;
}

// ============================================
// ДОБАВИТЬ В КОРЗИНУ
// ============================================
function addToCart(catKey, itemKey, btnElement) {
    const item = MENU[catKey].items[itemKey];
    
    if (cart[itemKey]) {
        cart[itemKey].qty++;
    } else {
        cart[itemKey] = {
            name: item.name,
            price: item.price,
            qty: 1,
            category: catKey
        };
    }
    
    updateCartCount();
    
    // Вибрация (если поддерживается)
    if (tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
    }
    
    // Анимация кнопки
    if (btnElement) {
        btnElement.classList.add('added');
        btnElement.querySelector('.btn-text').textContent = 'Добавлено';
        
        setTimeout(() => {
            btnElement.classList.remove('added');
            btnElement.querySelector('.btn-text').textContent = 'В корзину';
        }, 1500);
    }
    
    // Показываем уведомление
    showNotification(`${item.name} добавлен в корзину!`);
}

// ============================================
// ОБНОВИТЬ СЧЁТЧИК КОРЗИНЫ
// ============================================
function updateCartCount() {
    const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
    const cartCount = document.getElementById('cartCount');
    const cartFloat = document.getElementById('cartFloat');
    
    if (cartCount) {
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
    
    if (cartFloat) {
        if (count > 0) {
            cartFloat.classList.add('has-items');
        } else {
            cartFloat.classList.remove('has-items');
        }
    }
}

// ============================================
// ПОКАЗАТЬ КОРЗИНУ
// ============================================
function showCart() {
    const modal = document.getElementById('cartModal');
    const itemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!modal || !itemsContainer) return;
    
    itemsContainer.innerHTML = '';
    let total = 0;
    let isEmpty = true;
    
    Object.keys(cart).forEach(key => {
        const item = cart[key];
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        isEmpty = false;
        
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} ₽</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn minus" onclick="decreaseQty('${key}')">−</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn plus" onclick="increaseQty('${key}')">+</button>
            </div>
        `;
        itemsContainer.appendChild(itemEl);
    });
    
    if (isEmpty) {
        itemsContainer.innerHTML = `
            <div class="cart-empty">
                <div style="font-size: 64px; margin-bottom: 10px;">🛒</div>
                <div style="color: #999; font-size: 16px;">Корзина пуста</div>
                <div style="color: #bbb; font-size: 14px; margin-top: 5px;">Добавьте блюда из меню</div>
            </div>
        `;
        cartTotal.innerHTML = '<strong>0 ₽</strong>';
    } else {
        cartTotal.innerHTML = `<strong>${total} ₽</strong>`;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================
// СКРЫТЬ КОРЗИНУ
// ============================================
function hideCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// УВЕЛИЧИТЬ КОЛИЧЕСТВО
// ============================================
function increaseQty(key) {
    if (cart[key]) {
        cart[key].qty++;
        updateCartCount();
        showCart();
    }
}

// ============================================
// УМЕНЬШИТЬ КОЛИЧЕСТВО
// ============================================
function decreaseQty(key) {
    if (cart[key]) {
        cart[key].qty--;
        if (cart[key].qty <= 0) {
            delete cart[key];
        }
        updateCartCount();
        showCart();
    }
}

// ============================================
// ОФОРМИТЬ ЗАКАЗ
// ============================================
function sendOrder() {
    if (Object.keys(cart).length === 0) {
        showNotification('Корзина пуста!', 'error');
        return;
    }
    
    let total = 0;
    let orderText = '📋 *Новый заказ:*\n\n';
    
    Object.keys(cart).forEach(key => {
        const item = cart[key];
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        orderText += `• ${item.name} × ${item.qty} = ${itemTotal} ₽\n`;
    });
    
    orderText += `\n*Итого: ${total} ₽*`;
    
    const data = {
        action: 'order',
        cart: cart,
        total: total,
        timestamp: new Date().toISOString()
    };
    
    // Отправляем данные боту
    tg.sendData(JSON.stringify(data));
    
    // Показываем успех
    showNotification('✅ Заказ отправлен!', 'success');
    
    // Очищаем корзину
    cart = {};
    updateCartCount();
    hideCart();
    
    // Возвращаемся на главную
    setTimeout(() => {
        currentCategory = 'c1';
        renderCategories();
        renderMenu('c1');
    }, 1000);
}

// ============================================
// УВЕДОМЛЕНИЕ
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'error' ? '#ef5350' : type === 'success' ? '#66bb6a' : '#667eea'};
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// ============================================
// ЗАКРЫТИЕ МОДАЛКИ ПО КЛИКУ ВНЕ
// ============================================
document.getElementById('cartModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'cartModal') {
        hideCart();
    }
});

// ============================================
// CSS АНИМАЦИИ (добавляем динамически)
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    .menu-item {
        animation: slideUp 0.4s ease both;
    }
    
    .add-to-cart-btn.added {
        background: #66bb6a !important;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);
