const tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

// МЕНЮ С ФОТО
const MENU = {
    "c1": {
        "name": "Завтраки",
        "icon": "🌅",
        "color": "#FF6B6B",
        "items": {
            "i1": {"name": "Утренний бургер", "price": 580, "desc": "Бриошь, курица су-вид, цезарь, томаты, айсберг, пармезан, яйцо", "photo": "https://i.imgur.com/PLACEHOLDER1.jpg"},
            "i2": {"name": "Сырники", "price": 480, "desc": "Со сметаной, солёной карамелью и сезонными ягодами", "photo": "https://i.imgur.com/PLACEHOLDER2.jpg"},
            "i3": {"name": "Гречка с яйцом пашот", "price": 465, "desc": "Фермерская гречка, авокадо, вяленые томаты, пармезан", "photo": "https://i.imgur.com/PLACEHOLDER3.jpg"},
            "i4": {"name": "Ленивые вареники", "price": 480, "desc": "С вишневым соусом и сметаной", "photo": "https://i.imgur.com/PLACEHOLDER4.jpg"},
            "i5": {"name": "Смузи-боул", "price": 490, "desc": "Голубика, банан, кокосовое молоко, фисташка, чиа", "photo": "https://i.imgur.com/PLACEHOLDER5.jpg"},
            "i6": {"name": "Завтрак из 2-х яиц", "price": 385, "desc": "Скрэмбл, омлет или глазунья с салатом и тостом", "photo": "https://i.imgur.com/PLACEHOLDER6.jpg"},
            "i7": {"name": "Круассан с курицей", "price": 600, "desc": "Круассан, курица су-вид, айсберг, помидор, пармезан", "photo": "https://i.imgur.com/PLACEHOLDER7.jpg"},
            "i8": {"name": "Овсяная каша", "price": 380, "desc": "С бананом и солёной карамелью на альтернативном молоке", "photo": "https://i.imgur.com/PLACEHOLDER8.jpg"}
        }
    },
    "c2": {
        "name": "Горячее",
        "icon": "🔥",
        "color": "#FF8E53",
        "items": {
            "i9": {"name": "Птитим с креветкой", "price": 520, "desc": "Креветка, помидоры черри, шпинат, сливки, соус песто", "photo": "https://i.imgur.com/PLACEHOLDER9.jpg"},
            "i10": {"name": "Орзо с говядиной", "price": 570, "desc": "Томлёная говядина, красный лук, шампиньоны, сливки", "photo": "https://i.imgur.com/PLACEHOLDER10.jpg"},
            "i11": {"name": "Бифштекс из индейки", "price": 620, "desc": "С салатом коул слоу", "photo": "https://i.imgur.com/PLACEHOLDER11.jpg"},
            "i12": {"name": "Роти с креветкой", "price": 590, "desc": "Пшеничная лепёшка, авокадо, томаты, соус свит-чили", "photo": "https://i.imgur.com/PLACEHOLDER12.jpg"},
            "i13": {"name": "Курица карри с рисом", "price": 580, "desc": "Курица су-вид, белый рис, болгарский перец, шампиньоны", "photo": "https://i.imgur.com/PLACEHOLDER13.jpg"}
        }
    },
    "c3": {
        "name": "Завтрак",
        "icon": "🍳",
        "color": "#FFA726",
        "items": {
            "i14": {"name": "Бриошь с креветкой", "price": 540, "desc": "Креветки, сыр творожный, скрембл из яиц, пармезан", "photo": "https://i.imgur.com/PLACEHOLDER14.jpg"},
            "i15": {"name": "Бриошь с лососем", "price": 630, "desc": "Лосось с/с, яйца пашот, творожный сыр, помидоры черри", "photo": "https://i.imgur.com/PLACEHOLDER15.jpg"},
            "i16": {"name": "Боул-завтрак", "price": 380, "desc": "Скрэмбл, микс зелени, помидор черри, авокадо", "photo": "https://i.imgur.com/PLACEHOLDER16.jpg"},
            "i17": {"name": "Авокадо тост", "price": 420, "desc": "С вялеными томатами на гречневом хлебе (веган)", "photo": "https://i.imgur.com/PLACEHOLDER17.jpg"}
        }
    },
    "c4": {
        "name": "Боул",
        "icon": "",
        "color": "#66BB6A",
        "items": {
            "i18": {"name": "Боул с говядиной", "price": 590, "desc": "Белый рис, томлёная говядина унаги, скрэмбл, эдамаме", "photo": "https://i.imgur.com/PLACEHOLDER18.jpg"},
            "i19": {"name": "Боул с лососем", "price": 690, "desc": "Лосось с/с, белый рис, салат чука, огурец, авокадо", "photo": "https://i.imgur.com/PLACEHOLDER19.jpg"},
            "i20": {"name": "Боул с креветкой", "price": 550, "desc": "Креветка, киноа, авокадо, огурец, айсберг, кукуруза", "photo": "https://i.imgur.com/PLACEHOLDER20.jpg"}
        }
    },
    "c5": {
        "name": "Бургер",
        "icon": "🍔",
        "color": "#EF5350",
        "items": {
            "i21": {"name": "Бургер с индейкой", "price": 650, "desc": "Котлета из индейки, белый соус, красный соус, чеддер", "photo": "https://i.imgur.com/PLACEHOLDER21.jpg"},
            "i22": {"name": "Бургер с говядиной", "price": 650, "desc": "Томлёная говядина, белый соус, барбекю, айсберг", "photo": "https://i.imgur.com/PLACEHOLDER22.jpg"}
        }
    },
    "c6": {
        "name": "Детское",
        "icon": "👶",
        "color": "#AB47BC",
        "items": {
            "i23": {"name": "Блинчики", "price": 220, "desc": "Со сгущёнкой или сметаной", "photo": "https://i.imgur.com/PLACEHOLDER23.jpg"},
            "i24": {"name": "Разноцветные пельмешки", "price": 310, "desc": "С курицей и сметаной", "photo": "https://i.imgur.com/PLACEHOLDER24.jpg"}
        }
    },
    "c7": {
        "name": "Обед",
        "icon": "🍲",
        "color": "#29B6F6",
        "items": {
            "i25": {"name": "Окрошка", "price": 450, "desc": "На пряном йогурте с курицей су-вид", "photo": "https://i.imgur.com/PLACEHOLDER25.jpg"}
        }
    }
};

let cart = {};
let currentCategory = 'c1';

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu(currentCategory);
    updateCartCount();
});

function renderCategories() {
    const container = document.getElementById('categories');
    if (!container) return;
    container.innerHTML = '';
    
    Object.keys(MENU).forEach(key => {
        const cat = MENU[key];
        const btn = document.createElement('button');
        btn.className = `category-btn ${key === currentCategory ? 'active' : ''}`;
        if (key === currentCategory) {
            btn.style.background = cat.color;
        }
        btn.innerHTML = `${cat.icon} ${cat.name}`;
        btn.onclick = () => {
            currentCategory = key;
            renderCategories();
            renderMenu(key);
        };
        container.appendChild(btn);
    });
}

function renderMenu(categoryKey) {
    const container = document.getElementById('menu');
    if (!container) return;
    
    container.innerHTML = '';
    const category = MENU[categoryKey];
    
    Object.keys(category.items).forEach((key, index) => {
        const item = category.items[key];
        const itemEl = document.createElement('div');
        itemEl.className = 'menu-item';
        itemEl.style.animationDelay = `${index * 0.05}s`;
        
        // Красивая заглушка если фото нет
        const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:${encodeURIComponent(category.color)}'/%3E%3Cstop offset='100%25' style='stop-color:%23764ba2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='400' height='250'/%3E%3Ctext fill='white' font-size='80' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial'%3E${item.name.charAt(0)}%3C/text%3E%3C/svg%3E`;
        
        itemEl.innerHTML = `
            <div class="item-image-wrapper">
                <img 
                    src="${item.photo}" 
                    alt="${item.name}" 
                    class="item-image"
                    onerror="this.src='${fallbackSvg}'"
                    loading="lazy"
                >
                <div class="item-badge">${item.price} ₽</div>
            </div>
            <div class="item-content">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-desc">${item.desc}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${categoryKey}', '${key}', this)">
                    <span class="btn-text">В корзину</span>
                    <span class="btn-icon">+</span>
                </button>
            </div>
        `;
        
        container.appendChild(itemEl);
    });
}

function addToCart(catKey, itemKey, btnElement) {
    const item = MENU[catKey].items[itemKey];
    
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
    
    if (tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
    }
    
    if (btnElement) {
        btnElement.classList.add('added');
        btnElement.querySelector('.btn-text').textContent = 'Добавлено ✓';
        
        setTimeout(() => {
            btnElement.classList.remove('added');
            btnElement.querySelector('.btn-text').textContent = 'В корзину';
        }, 1500);
    }
}

function updateCartCount() {
    const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
    const cartCount = document.getElementById('cartCount');
    const cartFloat = document.getElementById('cartFloat');
    
    if (cartCount) {
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
    
    if (cartFloat) {
        cartFloat.classList.toggle('has-items', count > 0);
    }
}

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
        total += item.price * item.qty;
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
            </div>
        `;
    }
    
    cartTotal.innerHTML = `<strong>${total} ₽</strong>`;
    modal.classList.add('active');
}

function hideCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function increaseQty(key) {
    if (cart[key]) {
        cart[key].qty++;
        updateCartCount();
        showCart();
    }
}

function decreaseQty(key) {
    if (cart[key]) {
        cart[key].qty--;
        if (cart[key].qty <= 0) delete cart[key];
        updateCartCount();
        showCart();
    }
}

function sendOrder() {
    if (Object.keys(cart).length === 0) return;
    
    let total = 0;
    Object.keys(cart).forEach(key => {
        total += cart[key].price * cart[key].qty;
    });
    
    const data = {
        action: 'order',
        cart: cart,
        total: total
    };
    
    tg.sendData(JSON.stringify(data));
    cart = {};
    updateCartCount();
    hideCart();
}

document.getElementById('cartModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'cartModal') hideCart();
});
