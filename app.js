// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand();

// Меню с заглушками для фото
const MENU = {
    "c1": {
        "name": "🌅 Завтраки",
        "items": {
            "i1": {
                "name": "Утренний бургер", 
                "price": 580, 
                "desc": "Бриошь, курица су-вид, цезарь, томаты, айсберг, пармезан, яйцо",
                "photo": "https://imgur.com/Ydy37iC" // ← Замени на ссылку фото утреннего бургера
            },
            "i2": {
                "name": "Сырники", 
                "price": 480, 
                "desc": "Со сметаной, солёной карамелью и сезонными ягодами",
                "photo": "https://imgur.com/YoXvNPN" // ← Замени на ссылку фото сырников
            },
            "i3": {
                "name": "Гречка с яйцом", 
                "price": 465, 
                "desc": "Фермерская гречка с яйцом пашот, авокадо, томаты, пармезан",
                "photo": "https://imgur.com/r1KBrgV" // ← Замени на ссылку фото гречки
            },
            "i4": {
                "name": "Вареники", 
                "price": 480, 
                "desc": "Ленивые вареники с вишневым соусом и сметаной",
                "photo": "https://imgur.com/XZ5ni0a" // ← Замени на ссылку фото вареников
            },
            "i5": {
                "name": "Смузи-боул", 
                "price": 490, 
                "desc": "Голубика, банан, кокосовое молоко, фисташка, чиа",
                "photo": "https://imgur.com/hgkcwBv" // ← Замени на ссылку фото смузи-боула
            },
            "i6": {
                "name": "Завтрак 2 яйца", 
                "price": 385, 
                "desc": "Скрэмбл/омлет/глазунья с салатом и тостом",
                "photo": "https://imgur.com/BF74mcO" // ← Замени на ссылку фото завтрака с яйцами
            },
            "i7": {
                "name": "Круассан с курицей", 
                "price": 600, 
                "desc": "Круассан, курица су-вид, айсберг, помидор, пармезан, цезарь",
                "photo": "https://imgur.com/5gxavcZ" // ← Замени на ссылку фото круассана
            },
            "i8": {
                "name": "Овсянка", 
                "price": 380, 
                "desc": "Овсяная каша с бананом и солёной карамелью",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото овсянки
            }
        }
    },
    "c2": {
        "name": "🔥 Горячее",
        "items": {
            "i9": {
                "name": "Птитим с креветкой", 
                "price": 520, 
                "desc": "Птитим, креветки, помидоры черри, шпинат, сливки, песто",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото птитима
            },
            "i10": {
                "name": "Орзо с говядиной", 
                "price": 570, 
                "desc": "Паста орзо, говядина, красный лук, шампиньоны, сливки, пармезан",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото орзо
            },
            "i11": {
                "name": "Бифштекс", 
                "price": 620, 
                "desc": "Бифштекс из индейки с салатом коул слоу",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото бифштекса
            },
            "i12": {
                "name": "Роти с креветкой", 
                "price": 590, 
                "desc": "Лепешка роти, авокадо, томаты, креветки, соус чили, кинза",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото роти
            },
            "i13": {
                "name": "Курица карри", 
                "price": 580, 
                "desc": "Курица су-вид, рис, болгарский перец, шампиньоны, карри, кинза",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото карри
            }
        }
    },
    "c3": {
        "name": "🍳 Бранч",
        "items": {
            "i14": {
                "name": "Бриошь с креветкой", 
                "price": 540, 
                "desc": "Бриошь, креветки, творожный сыр, скрембл, пармезан",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото бриоши с креветкой
            },
            "i15": {
                "name": "Бриошь с лососем", 
                "price": 630, 
                "desc": "Бриошь, лосось с/с, яйца пашот, творожный сыр, помидоры черри",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото бриоши с лососем
            },
            "i16": {
                "name": "Боул завтрак", 
                "price": 380, 
                "desc": "Скрэмбл, микс зелени, помидоры черри, авокадо",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото боул-завтрака
            },
            "i17": {
                "name": "Авокадо тост", 
                "price": 420, 
                "desc": "Авокадо тост с вялеными томатами на гречневом хлебе (веган)",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото авокадо тоста
            }
        }
    },
    "c4": {
        "name": "🥗 Боулы",
        "items": {
            "i18": {
                "name": "Боул с говядиной", 
                "price": 590, 
                "desc": "Рис, томленая говядина унаги, скрэмбл, эдамаме, зеленый лук, чили",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото боула с говядиной
            },
            "i19": {
                "name": "Боул с лососем", 
                "price": 690, 
                "desc": "Лосось с/с, рис, салат чука, огурец, авокадо, творожный сыр",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото боула с лососем
            },
            "i20": {
                "name": "Боул с креветкой", 
                "price": 550, 
                "desc": "Креветка, киноа, авокадо, огурец, айсберг, кукуруза, соус азия",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото боула с креветкой
            }
        }
    },
    "c5": {
        "name": "🍔 Бургеры",
        "items": {
            "i21": {
                "name": "Бургер индейка", 
                "price": 650, 
                "desc": "Бриошь, котлета из индейки, белый соус, красный соус, помидор, огурец, айсберг, лук, чеддер",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото бургера с индейкой
            },
            "i22": {
                "name": "Бургер говядина", 
                "price": 650, 
                "desc": "Бриошь, томленая говядина, белый соус, красный соус, барбекю, помидор, огурец, айсберг, лук",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото бургера с говядиной
            }
        }
    },
    "c6": {
        "name": "👶 Детское",
        "items": {
            "i23": {
                "name": "Блинчики", 
                "price": 220, 
                "desc": "Блинчики со сгущенкой или сметаной",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото блинчиков
            },
            "i24": {
                "name": "Пельмени", 
                "price": 310, 
                "desc": "Разноцветные пельмени с курицей и сметаной",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото пельменей
            }
        }
    },
    "c7": {
        "name": "🍲 Супы",
        "items": {
            "i25": {
                "name": "Окрошка", 
                "price": 450, 
                "desc": "Окрошка на пряном йогурте с курицей су-вид",
                "photo": "YOUR_PHOTO_URL_HERE" // ← Замени на ссылку фото окрошки
            }
        }
    }
};

// Корзина
let cart = {};
let currentCategory = 'c1';

// Иконки для категорий
const categoryIcons = {
    "c1": "🌅",
    "c2": "🔥",
    "c3": "🍳",
    "c4": "🥗",
    "c5": "🍔",
    "c6": "👶",
    "c7": "🍲"
};

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
            <img src="${item.photo}" alt="${item.name}" class="item-image" onerror="this.style.display='none'; this.nextElementSibling.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'">
            <div class="item-content" style="min-height: 200px;">
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
    
    const btn = event.target;
    btn.textContent = '✓';
    setTimeout(() => {
        btn.textContent = 'В корзину';
    }, 1000);
}

// Обновить счётчик
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

// Увеличить qty
function increaseQty(key) {
    cart[key].qty++;
    updateCartCount();
    showCart();
}

// Уменьшить qty
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
    Object.keys(cart).forEach(key => {
        total += cart[key].price * cart[key].qty;
    });
    
    const data = {
        action: 'order',
        cart: cart,
        total: total
    };
    
    tg.sendData(JSON.stringify(data));
    alert('✅ Заказ отправлен! Проверьте бота.');
    hideCart();
    cart = {};
    updateCartCount();
}

// Закрытие модалки
document.getElementById('cartModal').addEventListener('click', (e) => {
    if (e.target.id === 'cartModal') {
        hideCart();
    }
});
