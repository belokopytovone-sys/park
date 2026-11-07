(function initSplash() {
    const splash = document.getElementById('splash');
    if (!splash) return;
    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => splash.remove(), 800);
    }, 3800);
})();

const translations = {
    ru: { search: 'Поиск', currentLocation: 'Текущее местоположение', currentLocationDesc: 'Ваше текущее положение', emptyState: 'Добавьте точки<br>для быстрого доступа', addPoint: 'Добавить точку', settings: 'Настройки', support: 'Техподдержка', theme: 'Тема', themeDark: 'Тёмная', themeLight: 'Светлая', language: 'Язык', newPoint: 'Новая точка', editPoint: 'Редактировать точку', name: 'Название', namePlaceholder: 'Например: Дом', address: 'Адрес', addressPlaceholder: 'ул. Примерная, 10', searchDistance: 'Дистанция поиска', cancel: 'Отмена', savePoint: 'Сохранить точку', saveChanges: 'Сохранить изменения', noResults: 'Ничего не найдено', forQuery: 'по запросу', free: 'Свободно', occupied: 'Занято', yourCar: 'Ваш авто', show: 'Показать', hide: 'Скрыть', zone: 'Зона', edit: 'Редактировать', delete: 'Удалить', chatPlaceholder: 'Напишите сообщение...', welcomeMessage: 'Здравствуйте, мы компания РиТуИ! 👋\n\nЭто техническая поддержка GeoPark.\n\nРасскажите, пожалуйста, с какой проблемой вы столкнулись? Я постараюсь помочь вам как можно скорее.', today: 'Сегодня', paymentTitle: 'Оплата подписки', paymentSubtitle: 'Оформление подписки', premiumTitle: 'Премиум подписка', perMonth: 'в месяц', cancelAnytime: 'отмена в любое время', feature1: 'Безлимитный доступ ко всем функциям', feature2: 'Приоритетная поддержка 24/7', feature3: 'Эксклюзивный контент и обновления', discountTitle: 'У меня есть льгота', discountSubtitle: 'Для получения льготы необходимо подтвердить статус через портал Госуслуг', discountPrice: 'Скидка до', confirmGosuslugi: 'Подтвердить через Госуслуги', gosuslugiConfirmed: '✓ Льгота подтверждена', cardDetails: 'Данные карты', payButton: 'Оплатить 299,99 ₽', payButtonDiscount: 'Оплатить 199,99 ₽', securePayment: 'Безопасная оплата · данные защищены', paymentSuccessTitle: 'Оплата прошла успешно!', paymentSuccessSubtitle: 'Премиум подписка активирована', continue: 'Продолжить' },
    en: { search: 'Search', currentLocation: 'Current location', currentLocationDesc: 'Your current position', emptyState: 'Add points<br>for quick access', addPoint: 'Add point', settings: 'Settings', support: 'Support', theme: 'Theme', themeDark: 'Dark', themeLight: 'Light', language: 'Language', newPoint: 'New point', editPoint: 'Edit point', name: 'Name', namePlaceholder: 'For example: Home', address: 'Address', addressPlaceholder: '123 Example St', searchDistance: 'Search distance', cancel: 'Cancel', savePoint: 'Save point', saveChanges: 'Save changes', noResults: 'Nothing found', forQuery: 'for query', free: 'Free', occupied: 'Occupied', yourCar: 'Your car', show: 'Show', hide: 'Hide', zone: 'Zone', edit: 'Edit', delete: 'Delete', chatPlaceholder: 'Write a message...', welcomeMessage: 'Hello, we are RiTuI company! 👋\n\nThis is GeoPark technical support.\n\nPlease tell me what problem you\'re facing? I\'ll try to help you as soon as possible.', today: 'Today', paymentTitle: 'Subscription payment', paymentSubtitle: 'Subscribe now', premiumTitle: 'Premium subscription', perMonth: 'per month', cancelAnytime: 'cancel anytime', feature1: 'Unlimited access to all features', feature2: 'Priority support 24/7', feature3: 'Exclusive content and updates', discountTitle: 'I have a benefit', discountSubtitle: 'To receive a discount, confirm your status via Gosuslugi portal', discountPrice: 'Discount up to', confirmGosuslugi: 'Confirm via Gosuslugi', gosuslugiConfirmed: '✓ Benefit confirmed', cardDetails: 'Card details', payButton: 'Pay 299.99 ₽', payButtonDiscount: 'Pay 199.99 ₽', securePayment: 'Secure payment · data protected', paymentSuccessTitle: 'Payment successful!', paymentSuccessSubtitle: 'Premium subscription activated', continue: 'Continue' },
    es: { search: 'Buscar', currentLocation: 'Ubicación actual', currentLocationDesc: 'Tu posición actual', emptyState: 'Añade puntos<br>para acceso rápido', addPoint: 'Añadir punto', settings: 'Ajustes', support: 'Soporte', theme: 'Tema', themeDark: 'Oscuro', themeLight: 'Claro', language: 'Idioma', newPoint: 'Nuevo punto', editPoint: 'Editar punto', name: 'Nombre', namePlaceholder: 'Por ejemplo: Casa', address: 'Dirección', addressPlaceholder: 'Calle Ejemplo, 10', searchDistance: 'Distancia de búsqueda', cancel: 'Cancelar', savePoint: 'Guardar punto', saveChanges: 'Guardar cambios', noResults: 'No se encontró nada', forQuery: 'para la consulta', free: 'Libre', occupied: 'Ocupado', yourCar: 'Tu coche', show: 'Mostrar', hide: 'Ocultar', zone: 'Zona', edit: 'Editar', delete: 'Eliminar', chatPlaceholder: 'Escribe un mensaje...', welcomeMessage: '¡Hola, somos la empresa RiTuI! 👋\n\nEste es el soporte técnico de GeoPark.\n\nCuéntame, ¿qué problema tienes? Intentaré ayudarte lo antes posible.', today: 'Hoy', paymentTitle: 'Pago de suscripción', paymentSubtitle: 'Suscríbete ahora', premiumTitle: 'Suscripción Premium', perMonth: 'al mes', cancelAnytime: 'cancela cuando quieras', feature1: 'Acceso ilimitado a todas las funciones', feature2: 'Soporte prioritario 24/7', feature3: 'Contenido exclusivo y actualizaciones', discountTitle: 'Tengo un beneficio', discountSubtitle: 'Para obtener el descuento, confirma tu estado a través del portal Gosuslugi', discountPrice: 'Descuento hasta', confirmGosuslugi: 'Confirmar vía Gosuslugi', gosuslugiConfirmed: '✓ Beneficio confirmado', cardDetails: 'Datos de la tarjeta', payButton: 'Pagar 299,99 ₽', payButtonDiscount: 'Pagar 199,99 ₽', securePayment: 'Pago seguro · datos protegidos', paymentSuccessTitle: '¡Pago exitoso!', paymentSuccessSubtitle: 'Suscripción Premium activada', continue: 'Continuar' },
    zh: { search: '搜索', currentLocation: '当前位置', currentLocationDesc: '您的当前位置', emptyState: '添加地点<br>以便快速访问', addPoint: '添加地点', settings: '设置', support: '技术支持', theme: '主题', themeDark: '深色', themeLight: '浅色', language: '语言', newPoint: '新地点', editPoint: '编辑地点', name: '名称', namePlaceholder: '例如：家', address: '地址', addressPlaceholder: '示例路10号', searchDistance: '搜索距离', cancel: '取消', savePoint: '保存地点', saveChanges: '保存更改', noResults: '未找到结果', forQuery: '对于查询', free: '空闲', occupied: '已占用', yourCar: '您的车', show: '显示', hide: '隐藏', zone: '区域', edit: '编辑', delete: '删除', chatPlaceholder: '输入消息...', welcomeMessage: '您好，我们是RiTuiI公司！ 👋\n\n这是GeoPark技术支持。\n\n请告诉我您遇到了什么问题？我会尽快帮助您。', today: '今天', paymentTitle: '订阅付款', paymentSubtitle: '立即订阅', premiumTitle: '高级订阅', perMonth: '每月', cancelAnytime: '随时取消', feature1: '无限访问所有功能', feature2: '24/7优先支持', feature3: '独家内容和更新', discountTitle: '我有优惠', discountSubtitle: '要获得折扣，请通过Gosuslugi门户确认您的身份', discountPrice: '折扣至', confirmGosuslugi: '通过Gosuslugi确认', gosuslugiConfirmed: '✓ 优惠已确认', cardDetails: '卡信息', payButton: '支付 299.99 ₽', payButtonDiscount: '支付 199.99 ₽', securePayment: '安全支付 · 数据受保护', paymentSuccessTitle: '支付成功！', paymentSuccessSubtitle: '高级订阅已激活', continue: '继续' },
    hi: { search: 'खोज', currentLocation: 'वर्तमान स्थान', currentLocationDesc: 'आपकी वर्तमान स्थिति', emptyState: 'त्वरित पहुंच के लिए<br>बिंदु जोड़ें', addPoint: 'बिंदु जोड़ें', settings: 'सेटिंग्स', support: 'सहायता', theme: 'थीम', themeDark: 'गहरा', themeLight: 'हल्का', language: 'भाषा', newPoint: 'नया बिंदु', editPoint: 'बिंदु संपादित करें', name: 'नाम', namePlaceholder: 'उदाहरण: घर', address: 'पता', addressPlaceholder: 'उदाहरण सड़क, 10', searchDistance: 'खोज दूरी', cancel: 'रद्द करें', savePoint: 'बिंदु सहेजें', saveChanges: 'परिवर्तन सहेजें', noResults: 'कुछ नहीं मिला', forQuery: 'क्वेरी के लिए', free: 'खाली', occupied: 'व्यस्त', yourCar: 'आपकी कार', show: 'दिखाएं', hide: 'छुपाएं', zone: 'क्षेत्र', edit: 'संपादित', delete: 'हटाएं', chatPlaceholder: 'संदेश लिखें...', welcomeMessage: 'नमस्ते, हम RiTuI कंपनी हैं! 👋\n\nयह GeoPark तकनीकी सहायता है।\n\nकृपया बताएं आपको क्या समस्या है? मैं जल्द से जल्द मदद करने का प्रयास करूंगा।', today: 'आज', paymentTitle: 'सदस्यता भुगतान', paymentSubtitle: 'अभी सदस्यता लें', premiumTitle: 'प्रीमियम सदस्यता', perMonth: 'प्रति माह', cancelAnytime: 'कभी भी रद्द करें', feature1: 'सभी सुविधाओं तक असीमित पहुंच', feature2: '24/7 प्राथमिकता सहायता', feature3: 'विशेष सामग्री और अपडेट', discountTitle: 'मेरे पास लाभ है', discountSubtitle: 'छूट प्राप्त करने के लिए, Gosuslugi पोर्टल के माध्यम से अपनी स्थिति की पुष्टि करें', discountPrice: 'तक छूट', confirmGosuslugi: 'Gosuslugi के माध्यम से पुष्टि करें', gosuslugiConfirmed: '✓ लाभ की पुष्टि', cardDetails: 'कार्ड विवरण', payButton: '299.99 ₽ का भुगतान करें', payButtonDiscount: '199.99 ₽ का भुगतान करें', securePayment: 'सुरक्षित भुगतान · डेटा सुरक्षित', paymentSuccessTitle: 'भुगतान सफल!', paymentSuccessSubtitle: 'प्रीमियम सदस्यता सक्रिय', continue: 'जारी रखें' },
    ar: { search: 'بحث', currentLocation: 'الموقع الحالي', currentLocationDesc: 'موقعك الحالي', emptyState: 'أضف نقاطًا<br>للوصول السريع', addPoint: 'إضافة نقطة', settings: 'الإعدادات', support: 'الدعم', theme: 'السمة', themeDark: 'داكن', themeLight: 'فاتح', language: 'اللغة', newPoint: 'نقطة جديدة', editPoint: 'تعديل النقطة', name: 'الاسم', namePlaceholder: 'مثال: المنزل', address: 'العنوان', addressPlaceholder: 'شارع المثال، 10', searchDistance: 'مسافة البحث', cancel: 'إلغاء', savePoint: 'حفظ النقطة', saveChanges: 'حفظ التغييرات', noResults: 'لم يتم العثور على شيء', forQuery: 'للاستعلام', free: 'متاح', occupied: 'مشغول', yourCar: 'سيارتك', show: 'إظهار', hide: 'إخفاء', zone: 'منطقة', edit: 'تعديل', delete: 'حذف', chatPlaceholder: 'اكتب رسالة...', welcomeMessage: 'مرحبًا، نحن شركة RiTuI! 👋\n\nهذا هو الدعم الفني لـ GeoPark.\n\nأخبرني من فضلك ما المشكلة التي تواجهها؟ سأحاول مساعدتك في أقرب وقت ممكن.', today: 'اليوم', paymentTitle: 'دفع الاشتراك', paymentSubtitle: 'اشترك الآن', premiumTitle: 'اشتراك بريميوم', perMonth: 'شهريًا', cancelAnytime: 'إلغاء في أي وقت', feature1: 'وصول غير محدود لجميع الميزات', feature2: 'دعم ذو أولوية 24/7', feature3: 'محتوى حصري وتحديثات', discountTitle: 'لدي ميزة', discountSubtitle: 'للحصول على الخصم، أكد حالتك عبر بوابة Gosuslugi', discountPrice: 'خصم حتى', confirmGosuslugi: 'تأكيد عبر Gosuslugi', gosuslugiConfirmed: '✓ تم تأكيد الميزة', cardDetails: 'بيانات البطاقة', payButton: 'ادفع 299.99 ₽', payButtonDiscount: 'ادفع 199.99 ₽', securePayment: 'دفع آمن · البيانات محمية', paymentSuccessTitle: 'تم الدفع بنجاح!', paymentSuccessSubtitle: 'تم تفعيل اشتراك بريميوم', continue: 'متابعة' },
    pt: { search: 'Pesquisar', currentLocation: 'Localização atual', currentLocationDesc: 'Sua posição atual', emptyState: 'Adicione pontos<br>para acesso rápido', addPoint: 'Adicionar ponto', settings: 'Configurações', support: 'Suporte', theme: 'Tema', themeDark: 'Escuro', themeLight: 'Claro', language: 'Idioma', newPoint: 'Novo ponto', editPoint: 'Editar ponto', name: 'Nome', namePlaceholder: 'Por exemplo: Casa', address: 'Endereço', addressPlaceholder: 'Rua Exemplo, 10', searchDistance: 'Distância de pesquisa', cancel: 'Cancelar', savePoint: 'Salvar ponto', saveChanges: 'Salvar alterações', noResults: 'Nada encontrado', forQuery: 'para a consulta', free: 'Livre', occupied: 'Ocupado', yourCar: 'Seu carro', show: 'Mostrar', hide: 'Ocultar', zone: 'Zona', edit: 'Editar', delete: 'Excluir', chatPlaceholder: 'Escreva uma mensagem...', welcomeMessage: 'Olá, somos a empresa RiTuI! 👋\n\nEste é o suporte técnico do GeoPark.\n\nPor favor, me conte qual problema você está enfrentando? Tentarei ajudá-lo o mais rápido possível.', today: 'Hoje', paymentTitle: 'Pagamento de assinatura', paymentSubtitle: 'Assine agora', premiumTitle: 'Assinatura Premium', perMonth: 'por mês', cancelAnytime: 'cancele a qualquer momento', feature1: 'Acesso ilimitado a todos os recursos', feature2: 'Suporte prioritário 24/7', feature3: 'Conteúdo exclusivo e atualizações', discountTitle: 'Tenho um benefício', discountSubtitle: 'Para obter o desconto, confirme seu status pelo portal Gosuslugi', discountPrice: 'Desconto até', confirmGosuslugi: 'Confirmar via Gosuslugi', gosuslugiConfirmed: '✓ Benefício confirmado', cardDetails: 'Dados do cartão', payButton: 'Pagar 299,99 ₽', payButtonDiscount: 'Pagar 199,99 ₽', securePayment: 'Pagamento seguro · dados protegidos', paymentSuccessTitle: 'Pagamento bem-sucedido!', paymentSuccessSubtitle: 'Assinatura Premium ativada', continue: 'Continuar' },
    ja: { search: '検索', currentLocation: '現在地', currentLocationDesc: 'あなたの現在位置', emptyState: 'ポイントを追加して<br>クイックアクセス', addPoint: 'ポイントを追加', settings: '設定', support: 'サポート', theme: 'テーマ', themeDark: 'ダーク', themeLight: 'ライト', language: '言語', newPoint: '新しいポイント', editPoint: 'ポイントを編集', name: '名前', namePlaceholder: '例：自宅', address: '住所', addressPlaceholder: '例路10', searchDistance: '検索距離', cancel: 'キャンセル', savePoint: 'ポイントを保存', saveChanges: '変更を保存', noResults: '見つかりません', forQuery: 'クエリ', free: '空き', occupied: '使用中', yourCar: 'あなたの車', show: '表示', hide: '非表示', zone: 'ゾーン', edit: '編集', delete: '削除', chatPlaceholder: 'メッセージを書く...', welcomeMessage: 'こんにちは、私たちはRiTuiI社です！ \n\nGeoParkのテクニカルサポートです。\n\nどのような問題に直面していますか？できるだけ早くお手伝いします。', today: '今日', paymentTitle: 'サブスクリプション支払い', paymentSubtitle: '今すぐ購読', premiumTitle: 'プレミアムサブスクリプション', perMonth: '月額', cancelAnytime: 'いつでもキャンセル', feature1: 'すべての機能への無制限アクセス', feature2: '24/7優先サポート', feature3: '独占コンテンツとアップデート', discountTitle: '特典があります', discountSubtitle: '割引を受けるには、Gosuslugiポータルでステータスを確認してください', discountPrice: '最大割引', confirmGosuslugi: 'Gosuslugiで確認', gosuslugiConfirmed: '✓ 特典確認済み', cardDetails: 'カード情報', payButton: '299.99₽を支払う', payButtonDiscount: '199.99₽を支払う', securePayment: '安全な支払い·データ保護', paymentSuccessTitle: '支払い成功！', paymentSuccessSubtitle: 'プレミアムサブスクリプションが有効化されました', continue: '続ける' },
    de: { search: 'Suche', currentLocation: 'Aktueller Standort', currentLocationDesc: 'Ihre aktuelle Position', emptyState: 'Punkte hinzufügen<br>für schnellen Zugriff', addPoint: 'Punkt hinzufügen', settings: 'Einstellungen', support: 'Support', theme: 'Thema', themeDark: 'Dunkel', themeLight: 'Hell', language: 'Sprache', newPoint: 'Neuer Punkt', editPoint: 'Punkt bearbeiten', name: 'Name', namePlaceholder: 'Zum Beispiel: Zuhause', address: 'Adresse', addressPlaceholder: 'Beispielstr. 10', searchDistance: 'Suchentfernung', cancel: 'Abbrechen', savePoint: 'Punkt speichern', saveChanges: 'Änderungen speichern', noResults: 'Nichts gefunden', forQuery: 'für Anfrage', free: 'Frei', occupied: 'Belegt', yourCar: 'Ihr Auto', show: 'Anzeigen', hide: 'Ausblenden', zone: 'Zone', edit: 'Bearbeiten', delete: 'Löschen', chatPlaceholder: 'Nachricht schreiben...', welcomeMessage: 'Hallo, wir sind die Firma RiTuI! 👋\n\nDies ist der GeoPark Technical Support.\n\nBitte erzählen Sie mir, welches Problem Sie haben? Ich werde versuchen, Ihnen so schnell wie möglich zu helfen.', today: 'Heute', paymentTitle: 'Abonnementzahlung', paymentSubtitle: 'Jetzt abonnieren', premiumTitle: 'Premium-Abonnement', perMonth: 'pro Monat', cancelAnytime: 'jederzeit kündbar', feature1: 'Unbegrenzter Zugriff auf alle Funktionen', feature2: 'Prioritäts-Support 24/7', feature3: 'Exklusive Inhalte und Updates', discountTitle: 'Ich habe einen Vorteil', discountSubtitle: 'Um den Rabatt zu erhalten, bestätigen Sie Ihren Status über das Gosuslugi-Portal', discountPrice: 'Rabatt bis zu', confirmGosuslugi: 'Über Gosuslugi bestätigen', gosuslugiConfirmed: '✓ Vorteil bestätigt', cardDetails: 'Kartendaten', payButton: '299,99 ₽ bezahlen', payButtonDiscount: '199,99 ₽ bezahlen', securePayment: 'Sichere Zahlung · Daten geschützt', paymentSuccessTitle: 'Zahlung erfolgreich!', paymentSuccessSubtitle: 'Premium-Abonnement aktiviert', continue: 'Weiter' },
    fr: { search: 'Rechercher', currentLocation: 'Position actuelle', currentLocationDesc: 'Votre position actuelle', emptyState: 'Ajoutez des points<br>pour un accès rapide', addPoint: 'Ajouter un point', settings: 'Paramètres', support: 'Support', theme: 'Thème', themeDark: 'Sombre', themeLight: 'Clair', language: 'Langue', newPoint: 'Nouveau point', editPoint: 'Modifier le point', name: 'Nom', namePlaceholder: 'Par exemple : Maison', address: 'Adresse', addressPlaceholder: 'Rue Exemple, 10', searchDistance: 'Distance de recherche', cancel: 'Annuler', savePoint: 'Enregistrer le point', saveChanges: 'Enregistrer les modifications', noResults: 'Aucun résultat', forQuery: 'pour la requête', free: 'Libre', occupied: 'Occupé', yourCar: 'Votre voiture', show: 'Afficher', hide: 'Masquer', zone: 'Zone', edit: 'Modifier', delete: 'Supprimer', chatPlaceholder: 'Écrivez un message...', welcomeMessage: 'Bonjour, nous sommes la société RiTuI ! 👋\n\nC\'est le support technique GeoPark.\n\nDites-moi quel problème vous rencontrez ? J\'essaierai de vous aider le plus rapidement possible.', today: 'Aujourd\'hui', paymentTitle: 'Paiement d\'abonnement', paymentSubtitle: 'Abonnez-vous maintenant', premiumTitle: 'Abonnement Premium', perMonth: 'par mois', cancelAnytime: 'annulez à tout moment', feature1: 'Accès illimité à toutes les fonctionnalités', feature2: 'Support prioritaire 24/7', feature3: 'Contenu exclusif et mises à jour', discountTitle: 'J\'ai un avantage', discountSubtitle: 'Pour obtenir la réduction, confirmez votre statut via le portail Gosuslugi', discountPrice: 'Réduction jusqu\'à', confirmGosuslugi: 'Confirmer via Gosuslugi', gosuslugiConfirmed: '✓ Avantage confirmé', cardDetails: 'Détails de la carte', payButton: 'Payer 299,99 ₽', payButtonDiscount: 'Payer 199,99 ₽', securePayment: 'Paiement sécurisé · données protégées', paymentSuccessTitle: 'Paiement réussi !', paymentSuccessSubtitle: 'Abonnement Premium activé', continue: 'Continuer' }
};

function t(key) {
    const lang = translations[state.language] || translations.ru;
    return lang[key] || translations.ru[key] || key;
}

function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
    document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.getAttribute('data-i18n-title')); });
    renderPoints();
    renderDistanceLabels();
    if (state.isMapVisible) updateMapInfo();
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay && modalOverlay.classList.contains('visible')) {
        const modalTitle = document.getElementById('modalTitle');
        const btnSave = document.getElementById('btnSave');
        if (state.editingPointId) { modalTitle.textContent = t('editPoint'); btnSave.textContent = t('saveChanges'); }
        else { modalTitle.textContent = t('newPoint'); btnSave.textContent = t('savePoint'); }
    }
    const btnShow = document.getElementById('btnShow');
    if (btnShow) {
        const span = btnShow.querySelector('[data-i18n]');
        if (span) span.textContent = state.isMapVisible ? t('hide') : t('show');
    }
    if (document.getElementById('chatView') && document.getElementById('chatView').classList.contains('visible')) {
        renderChat();
    }
    updatePayButton();
}

const state = {
    points: [], selectedId: 'current', isMapVisible: false,
    isSettingsVisible: false, isChatVisible: false,
    nextId: 1, searchQuery: '', editingPointId: null,
    theme: 'dark', language: 'ru',
    chatMessages: [],
    isPaid: false,
    hasDiscount: false
};

const FULL_PRICE = '299,99 ₽';
const DISCOUNT_PRICE = '199,99 ₽';

const distances = [250, 500, 750, 1000];
let currentDistanceIndex = 1;

function getScrollbarThreshold() {
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768;
    return isMobile ? 4 : 3;
}

const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

const mapState = { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0, minScale: 1, maxScale: 2.5 };

// ===== ОПЛАТА =====
function openPayment() {
    const form = document.getElementById('paymentFormContent');
    const success = document.getElementById('paymentSuccess');
    if (!form || !success) return;
    form.style.display = 'block';
    success.classList.remove('visible');
    const cn = document.getElementById('cardNumber'); if(cn) cn.value = '';
    const ce = document.getElementById('cardExpiry'); if(ce) ce.value = '';
    const cc = document.getElementById('cardCvc'); if(cc) cc.value = '';
    if (!state.hasDiscount) resetDiscountUI();
    const overlay = document.getElementById('paymentOverlay');
    if(overlay) overlay.classList.add('visible');
}

function closePayment() {
    const overlay = document.getElementById('paymentOverlay');
    if(overlay) overlay.classList.remove('visible');
}

function formatCardNumber(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 16);
    let formatted = v.match(/.{1,4}/g)?.join(' ') || v;
    input.value = formatted;
}

function formatExpiry(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
    input.value = v;
}

function confirmGosuslugi() {
    const btn = document.getElementById('btnGosuslugi');
    if (!btn || btn.classList.contains('loading') || state.hasDiscount) return;
    btn.classList.add('loading');
    btn.disabled = true;
    setTimeout(() => {
        btn.classList.remove('loading');
        btn.disabled = false;
        state.hasDiscount = true;
        const textEl = btn.querySelector('.btn-gosuslugi-text');
        if(textEl) textEl.textContent = t('gosuslugiConfirmed');
        applyDiscount();
    }, 1500);
}

function applyDiscount() {
    const opi = document.getElementById('oldPriceInline'); if(opi) opi.style.display = 'inline';
    const odp = document.getElementById('oldDiscountPrice'); if(odp) odp.style.display = 'inline';
    const cp = document.getElementById('currentPrice'); if(cp) cp.textContent = DISCOUNT_PRICE;
    const dp = document.getElementById('discountPrice'); if(dp) dp.textContent = DISCOUNT_PRICE + '/мес';
    updatePayButton();
}

function resetDiscountUI() {
    const opi = document.getElementById('oldPriceInline'); if(opi) opi.style.display = 'none';
    const odp = document.getElementById('oldDiscountPrice'); if(odp) odp.style.display = 'none';
    const cp = document.getElementById('currentPrice'); if(cp) cp.textContent = FULL_PRICE;
    const dp = document.getElementById('discountPrice'); if(dp) dp.textContent = '199,99 ₽/мес';
    const btn = document.getElementById('btnGosuslugi');
    if (btn) {
        btn.classList.remove('loading');
        btn.disabled = false;
        const textEl = btn.querySelector('.btn-gosuslugi-text');
        if(textEl) textEl.textContent = t('confirmGosuslugi');
    }
    updatePayButton();
}

function updatePayButton() {
    const btn = document.getElementById('btnPay');
    if (!btn) return;
    btn.textContent = state.hasDiscount ? t('payButtonDiscount') : t('payButton');
}

function processPayment() {
    const cardNumber = document.getElementById('cardNumber')?.value.replace(/\s/g, '') || '';
    const cardExpiry = document.getElementById('cardExpiry')?.value || '';
    const cardCvc = document.getElementById('cardCvc')?.value || '';

    if (cardNumber.length < 16) { alert('Введите корректный номер карты'); return; }
    if (cardExpiry.length < 5) { alert('Введите срок действия карты'); return; }
    if (cardCvc.length < 3) { alert('Введите CVC код (3 цифры)'); return; }

    const btn = document.getElementById('btnPay');
    if(!btn) return;
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = 'Обработка...';

    setTimeout(() => {
        state.isPaid = true;
        btn.disabled = false;
        btn.textContent = originalText;
        const form = document.getElementById('paymentFormContent');
        const success = document.getElementById('paymentSuccess');
        if(form) form.style.display = 'none';
        if(success) success.classList.add('visible');
    }, 1200);
}

function continueAfterPayment() {
    closePayment();
    // Если мы на отдельной странице payment.html, перенаправляем на index.html
    if (window.location.pathname.includes('payment.html')) {
        window.location.href = 'index.html';
    } else {
        toggleMap(true);
    }
}

function openSettings() {
    if (state.isMapVisible) closeMapView();
    if (state.isChatVisible) closeChat();
    state.isSettingsVisible = true;
    const pv = document.getElementById('pointsView'); if(pv) pv.classList.add('hidden');
    const sv = document.getElementById('settingsView'); if(sv) sv.classList.add('visible');
    const ft = document.getElementById('footer'); if(ft) ft.classList.add('hidden');
}

function closeSettings() {
    state.isSettingsVisible = false;
    const sv = document.getElementById('settingsView'); if(sv) sv.classList.remove('visible');
    const pv = document.getElementById('pointsView'); if(pv) pv.classList.remove('hidden');
    const ft = document.getElementById('footer'); if(ft) ft.classList.remove('hidden');
}

function setTheme(theme) {
    state.theme = theme;
    document.body.classList.toggle('light-theme', theme === 'light');
    document.querySelectorAll('[data-theme]').forEach(el => el.classList.toggle('active', el.dataset.theme === theme));
}

function setLanguage(code) {
    state.language = code;
    document.querySelectorAll('[data-lang]').forEach(el => el.classList.toggle('active', el.dataset.lang === code));
    applyLanguage();
}

function renderLanguages() {
    const list = document.getElementById('languageList');
    if (!list) return;
    list.innerHTML = '';
    languages.forEach(lang => {
        const opt = document.createElement('div');
        opt.className = 'settings-option' + (lang.code === state.language ? ' active' : '');
        opt.dataset.lang = lang.code;
        opt.onclick = () => setLanguage(lang.code);
        opt.innerHTML = `
            <div class="settings-option-icon" style="font-size:16px">${lang.flag}</div>
            <div class="settings-option-label">${lang.name}</div>
            <div class="settings-option-check"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
        `;
        list.appendChild(opt);
    });
}

// ===== CHAT =====
function formatTime(timestamp) {
    const d = new Date(timestamp);
    return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}

function openChat() {
    if (state.isMapVisible) closeMapView();
    if (state.isSettingsVisible) closeSettings();
    state.isChatVisible = true;
    const pv = document.getElementById('pointsView'); if(pv) pv.classList.add('hidden');
    const cv = document.getElementById('chatView'); if(cv) cv.classList.add('visible');
    const ft = document.getElementById('footer'); if(ft) ft.classList.add('hidden');

    if (state.chatMessages.length === 0) {
        state.chatMessages.push({ id: 'welcome', role: 'support', text: t('welcomeMessage'), timestamp: Date.now() });
    }
    renderChat();
    scrollToBottom();
}

function closeChat() {
    state.isChatVisible = false;
    const cv = document.getElementById('chatView'); if(cv) cv.classList.remove('visible');
    const pv = document.getElementById('pointsView'); if(pv) pv.classList.remove('hidden');
    const ft = document.getElementById('footer'); if(ft) ft.classList.remove('hidden');
}

function renderChat() {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    container.innerHTML = '';
    const divider = document.createElement('div');
    divider.className = 'chat-date-divider';
    divider.textContent = t('today');
    container.appendChild(divider);
    state.chatMessages.forEach(msg => {
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble ' + msg.role;
        bubble.innerHTML = escapeHtml(msg.text).replace(/\n/g, '<br>') + `<span class="chat-bubble-time">${formatTime(msg.timestamp)}</span>`;
        container.appendChild(bubble);
    });
}

function scrollToBottom() {
    const container = document.getElementById('chatMessages');
    if(!container) return;
    requestAnimationFrame(() => { container.scrollTop = container.scrollHeight; });
}

function onChatInput() {
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');
    if(!input || !sendBtn) return;
    sendBtn.classList.toggle('active', input.value.trim().length > 0);
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 80) + 'px';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    if(!input) return;
    const text = input.value.trim();
    if (!text) return;
    state.chatMessages.push({ id: 'msg_' + Date.now(), role: 'user', text: text, timestamp: Date.now() });
    input.value = '';
    input.style.height = 'auto';
    const sendBtn = document.getElementById('chatSend');
    if(sendBtn) sendBtn.classList.remove('active');
    renderChat();
    scrollToBottom();
}

document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
});

// ===== SEARCH =====
function onSearchInput() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    if(!input) return;
    state.searchQuery = input.value.trim().toLowerCase();
    if(clearBtn) clearBtn.classList.toggle('visible', input.value.length > 0);
    renderPoints();
}

function clearSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    if(!input) return;
    input.value = '';
    state.searchQuery = '';
    if(clearBtn) clearBtn.classList.remove('visible');
    renderPoints();
    input.focus();
}

function getFilteredPoints() {
    if (!state.searchQuery) return state.points;
    return state.points.filter(p => p.name.toLowerCase().includes(state.searchQuery) || p.address.toLowerCase().includes(state.searchQuery));
}

function highlightText(text, query) {
    if (!query) return escapeHtml(text);
    const i = text.toLowerCase().indexOf(query.toLowerCase());
    if (i === -1) return escapeHtml(text);
    return escapeHtml(text.substring(0, i)) + '<span class="highlight">' + escapeHtml(text.substring(i, i + query.length)) + '</span>' + escapeHtml(text.substring(i + query.length));
}

// ===== MODAL =====
function openModal(editId) {
    state.editingPointId = editId || null;
    const modalTitle = document.getElementById('modalTitle');
    const btnSave = document.getElementById('btnSave');
    if(!modalTitle || !btnSave) return;

    if (state.editingPointId) {
        const point = state.points.find(p => p.id === state.editingPointId);
        if (!point) return;
        modalTitle.textContent = t('editPoint');
        btnSave.textContent = t('saveChanges');
        document.getElementById('inputName').value = point.name;
        document.getElementById('inputAddress').value = point.address;
        currentDistanceIndex = distances.indexOf(point.distance);
        if (currentDistanceIndex === -1) currentDistanceIndex = 1;
    } else {
        modalTitle.textContent = t('newPoint');
        btnSave.textContent = t('savePoint');
        document.getElementById('inputName').value = '';
        document.getElementById('inputAddress').value = '';
        currentDistanceIndex = 1;
    }
    const overlay = document.getElementById('modalOverlay');
    if(overlay) overlay.classList.add('visible');
    updateDistanceUI(); updateCharCount(); updateSaveButton();
    setTimeout(() => { const inp = document.getElementById('inputName'); if(inp) inp.focus(); }, 300);
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    if(overlay) overlay.classList.remove('visible');
    state.editingPointId = null;
}

function handleOverlayClick(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }

function updateCharCount() {
    const count = document.getElementById('charCount');
    const input = document.getElementById('inputName');
    if(count && input) count.textContent = `${input.value.length} / 100`;
    updateSaveButton();
}

function updateSaveButton() {
    const n = document.getElementById('inputName')?.value.trim() || '';
    const a = document.getElementById('inputAddress')?.value.trim() || '';
    const btnSave = document.getElementById('btnSave');
    if(btnSave) btnSave.disabled = !(n && a);
}

document.addEventListener('DOMContentLoaded', () => {
    const inputAddress = document.getElementById('inputAddress');
    if (inputAddress) inputAddress.addEventListener('input', updateSaveButton);
});

function setDistance(index) { currentDistanceIndex = index; updateDistanceUI(); }

function getDistanceLabels() {
    const map = {
        ru: ['250 м', '500 м', '750 м', '1 км'], en: ['250 m', '500 m', '750 m', '1 km'],
        es: ['250 m', '500 m', '750 m', '1 km'], zh: ['250米', '500米', '750米', '1公里'],
        hi: ['250 मी', '500 मी', '750 मी', '1 किमी'], ar: ['٢٥٠ م', '٥٠٠ م', '٧٥٠ م', '١ كم'],
        pt: ['250 m', '500 m', '750 m', '1 km'], ja: ['250m', '500m', '750m', '1km'],
        de: ['250 m', '500 m', '750 m', '1 km'], fr: ['250 m', '500 m', '750 m', '1 km']
    };
    return map[state.language] || map.ru;
}

function getDistanceValueLabel() { return getDistanceLabels()[currentDistanceIndex]; }

function renderDistanceLabels() {
    const container = document.getElementById('distanceLabels');
    if(!container) return;
    const labels = getDistanceLabels();
    container.innerHTML = '';
    labels.forEach((lbl, i) => {
        const span = document.createElement('span');
        span.className = 'distance-label' + (i === currentDistanceIndex ? ' active' : '');
        span.textContent = lbl;
        span.onclick = () => setDistance(i);
        container.appendChild(span);
    });
}

function updateDistanceUI() {
    const thumb = document.getElementById('distanceThumb');
    const fill = document.getElementById('distanceFill');
    const track = document.querySelector('.distance-track');
    if(!thumb || !fill || !track) return;
    const tw = track.offsetWidth;
    thumb.style.left = ((currentDistanceIndex / 3) * tw) + 'px';
    fill.style.width = ((currentDistanceIndex / 3) * 100) + '%';
    document.querySelectorAll('.distance-label').forEach((l, i) => l.classList.toggle('active', i === currentDistanceIndex));
    document.querySelectorAll('.distance-dot').forEach((d, i) => d.classList.toggle('active', i <= currentDistanceIndex));
    const dv = document.getElementById('distanceValue');
    if(dv) dv.textContent = getDistanceValueLabel();
}

(function initSliderDrag() {
    const thumb = document.getElementById('distanceThumb');
    const track = document.querySelector('.distance-track');
    if(!thumb || !track) return;
    let dragging = false;
    function start(e) { dragging = true; e.preventDefault(); try { thumb.setPointerCapture(e.pointerId); } catch(_) {} }
    function move(e) {
        if (!dragging) return;
        const rect = track.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const idx = Math.round(pct * 3);
        if (idx !== currentDistanceIndex) { currentDistanceIndex = idx; updateDistanceUI(); }
    }
    function end() { dragging = false; }
    thumb.addEventListener('pointerdown', start);
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', end);
    document.addEventListener('pointercancel', end);
})();

function savePoint() {
    const name = document.getElementById('inputName')?.value.trim() || '';
    const address = document.getElementById('inputAddress')?.value.trim() || '';
    if (!name || !address) return;
    const distLabels = getDistanceLabels();
    if (state.editingPointId) {
        const point = state.points.find(p => p.id === state.editingPointId);
        if (point) {
            point.name = name; point.address = address;
            point.distance = distances[currentDistanceIndex];
            point.distanceLabel = distLabels[currentDistanceIndex];
        }
    } else {
        state.points.push({ id: 'point_' + state.nextId++, name, address, distance: distances[currentDistanceIndex], distanceLabel: distLabels[currentDistanceIndex], status: 'active' });
    }
    closeModal(); renderPoints();
    // Если мы на отдельной странице add-point.html, перенаправляем на index.html
    if (window.location.pathname.includes('add-point.html')) {
        window.location.href = 'index.html';
    }
}

function deletePoint(pointId) {
    const item = document.querySelector(`.point-item[data-id="${pointId}"]`);
    if (item) {
        item.classList.add('deleting');
        setTimeout(() => {
            state.points = state.points.filter(p => p.id !== pointId);
            if (state.selectedId === pointId) state.selectedId = 'current';
            renderPoints();
        }, 300);
    }
}

function updateSelectionVisuals() {
    document.querySelectorAll('.point-item').forEach(item => {
        const point = state.points.find(p => p.id === item.dataset.id);
        if (!point) return;
        const indicator = item.querySelector('.point-indicator');
        if (point.status === 'selected') {
            item.classList.add('selected');
            indicator.classList.remove('circle-empty'); indicator.classList.add('circle-filled');
        } else {
            item.classList.remove('selected');
            indicator.classList.remove('circle-filled'); indicator.classList.add('circle-empty');
        }
    });
    const ci = document.getElementById('currentIndicator');
    if(ci) ci.classList.toggle('filled', state.selectedId === 'current');
}

function renderPoints() {
    const list = document.getElementById('pointsList');
    const empty = document.getElementById('emptyState');
    const currentLocation = document.getElementById('currentLocation');
    if(!list || !empty || !currentLocation) return;

    list.querySelectorAll('.point-item, .no-results').forEach(el => el.remove());
    const filtered = getFilteredPoints();
    const isSearching = state.searchQuery.length > 0;
    currentLocation.style.display = isSearching ? 'none' : 'flex';

    if (state.points.length === 0 && !isSearching) {
        empty.style.display = 'flex';
        updateScrollbar(); return;
    }
    empty.style.display = 'none';

    if (isSearching && filtered.length === 0) {
        const nr = document.createElement('div');
        nr.className = 'no-results';
        nr.innerHTML = `<div class="no-results-icon"><svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div><p>${t('noResults')}<br>${t('forQuery')} <span class="search-term">«${escapeHtml(state.searchQuery)}»</span></p>`;
        list.appendChild(nr);
        updateScrollbar(); return;
    }

    filtered.forEach(point => {
        const item = document.createElement('div');
        item.className = 'item point-item' + (point.status === 'selected' ? ' selected' : '');
        item.dataset.id = point.id;
        const ic = point.status === 'selected' ? 'point-indicator circle-filled' : 'point-indicator circle-empty';
        item.innerHTML = `
            <div class="${ic}" data-action="indicator"></div>
            <div class="item-info">
                <div class="item-name">${highlightText(point.name, state.searchQuery)}</div>
                <div class="item-addr">${highlightText(point.address, state.searchQuery)}</div>
                <div class="item-dist">📍 ${point.distanceLabel}</div>
            </div>
            <div class="point-actions">
                <button class="btn-edit" data-action="edit" title="${t('edit')}"><svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg></button>
                <button class="btn-delete" data-action="delete" title="${t('delete')}"><svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
            </div>
        `;
        item.querySelector('[data-action="indicator"]').addEventListener('click', e => { e.stopPropagation(); handleIndicatorClick(point.id); });
        item.querySelector('[data-action="edit"]').addEventListener('click', e => { e.stopPropagation(); openModal(point.id); });
        item.querySelector('[data-action="delete"]').addEventListener('click', e => { e.stopPropagation(); deletePoint(point.id); });
        list.appendChild(item);
    });
    updateCurrentIndicator();
    updateScrollbar();
}

function escapeHtml(text) { const d = document.createElement('div'); d.textContent = text; return d.innerHTML; }

function handleIndicatorClick(pointId) {
    const point = state.points.find(p => p.id === pointId);
    if (!point) return;
    if (point.status === 'selected') {
        point.status = 'active'; state.selectedId = 'current';
    } else {
        state.points.forEach(p => { if (p.status === 'selected') p.status = 'active'; });
        point.status = 'selected'; state.selectedId = pointId;
    }
    updateSelectionVisuals();
}

function selectCurrent() {
    state.points.forEach(p => { if (p.status === 'selected') p.status = 'active'; });
    state.selectedId = 'current';
    updateSelectionVisuals();
}

function updateCurrentIndicator() {
    const indicator = document.getElementById('currentIndicator');
    if(indicator) indicator.classList.toggle('filled', state.selectedId === 'current');
}

function updateScrollbar() {
    const list = document.getElementById('pointsList');
    const scrollbar = document.getElementById('customScrollbar');
    if(!list || !scrollbar) return;
    const filtered = getFilteredPoints();
    const threshold = getScrollbarThreshold();
    if (list.scrollHeight > list.clientHeight && filtered.length > threshold) {
        scrollbar.classList.add('visible');
        requestAnimationFrame(updateThumbPosition);
    } else {
        scrollbar.classList.remove('visible');
    }
}

function updateThumbPosition() {
    const list = document.getElementById('pointsList');
    const scrollbar = document.getElementById('customScrollbar');
    const thumb = document.getElementById('customScrollbarThumb');
    if(!list || !scrollbar || !thumb) return;
    const scrollRange = list.scrollHeight - list.clientHeight;
    if (scrollRange <= 0) return;
    const trackH = scrollbar.getBoundingClientRect().height;
    if (trackH <= 0) return;
    const thumbH = Math.max(24, (list.clientHeight / list.scrollHeight) * trackH);
    const ratio = list.scrollTop / scrollRange;
    thumb.style.height = thumbH + 'px';
    thumb.style.top = Math.max(0, ratio * (trackH - thumbH)) + 'px';
}

(function initScrollbarDrag() {
    const list = document.getElementById('pointsList');
    const scrollbar = document.getElementById('customScrollbar');
    const thumb = document.getElementById('customScrollbarThumb');
    if(!list || !scrollbar || !thumb) return;
    let dragging = false, grabOffsetY = 0, activePointerId = null;
    function startDrag(e) {
        dragging = true; activePointerId = e.pointerId;
        grabOffsetY = e.clientY - thumb.getBoundingClientRect().top;
        try { thumb.setPointerCapture(e.pointerId); } catch(_) {}
        e.preventDefault(); e.stopPropagation();
    }
    function onDrag(e) {
        if (!dragging || e.pointerId !== activePointerId) return;
        const scrollbarRect = scrollbar.getBoundingClientRect();
        const thumbH = thumb.getBoundingClientRect().height;
        const trackH = scrollbarRect.height;
        const maxTop = trackH - thumbH;
        let newTop = e.clientY - scrollbarRect.top - grabOffsetY;
        newTop = Math.max(0, Math.min(maxTop, newTop));
        const scrollRatio = maxTop > 0 ? newTop / maxTop : 0;
        list.scrollTop = scrollRatio * (list.scrollHeight - list.clientHeight);
    }
    function endDrag(e) { if (e && e.pointerId !== activePointerId) return; dragging = false; activePointerId = null; }
    thumb.addEventListener('pointerdown', startDrag);
    document.addEventListener('pointermove', onDrag);
    document.addEventListener('pointerup', endDrag);
    document.addEventListener('pointercancel', endDrag);
    list.addEventListener('scroll', () => { if (!dragging) updateThumbPosition(); });
})();

// ===== MAP =====
function closeMapView() {
    const pv = document.getElementById('pointsView');
    const mc = document.getElementById('mapContainer');
    const btn = document.getElementById('btnShow');
    if(!pv || !mc || !btn) return;
    state.isMapVisible = false;
    pv.classList.remove('hidden');
    mc.classList.remove('visible');
    document.getElementById('mapControls')?.classList.remove('visible');
    document.getElementById('mapInfo')?.classList.remove('visible');
    document.getElementById('legend')?.classList.remove('visible');
    btn.classList.remove('active');
    const span = btn.querySelector('[data-i18n]');
    if (span) span.textContent = t('show');
    if (state.selectedId !== 'current') {
        const idx = state.points.findIndex(p => p.id === state.selectedId);
        if (idx > 0) { const [pt] = state.points.splice(idx, 1); state.points.unshift(pt); }
    }
    renderPoints();
}

function toggleMap(force) {
    const pv = document.getElementById('pointsView');
    const mc = document.getElementById('mapContainer');
    const btn = document.getElementById('btnShow');
    if(!pv || !mc || !btn) return;

    if (state.isMapVisible) { closeMapView(); return; }
    if (!state.isPaid && !force) { openPayment(); return; }

    state.isMapVisible = true;
    pv.classList.add('hidden');
    mc.classList.add('visible');
    document.getElementById('mapControls')?.classList.add('visible');
    document.getElementById('mapInfo')?.classList.add('visible');
    document.getElementById('legend')?.classList.add('visible');
    btn.classList.add('active');
    const span = btn.querySelector('[data-i18n]');
    if (span) span.textContent = t('hide');
    updateMapInfo(); resetMap();
}

function updateMapInfo() {
    const tt = document.getElementById('mapInfoTitle');
    const s = document.getElementById('mapInfoSub');
    if(!tt || !s) return;
    if (state.selectedId === 'current') {
        tt.textContent = t('currentLocation');
        s.textContent = `${t('zone')}: 500 м`;
    } else {
        const p = state.points.find(p => p.id === state.selectedId);
        if (p) { tt.textContent = p.name; s.textContent = `${t('zone')}: ${p.distanceLabel}`; }
    }
    calculateMinScale();
}

function calculateMinScale() {
    const w = document.getElementById('mapWrapper');
    if(!w) return;
    const r = w.getBoundingClientRect();
    const sa = 360 / 480, wa = r.width / r.height;
    mapState.minScale = Math.max(1, wa > sa ? r.height / 480 : r.width / 360);
    mapState.maxScale = mapState.minScale + 2;
}

const mapWrapper = document.getElementById('mapWrapper');
const mapSvg = document.getElementById('mapSvg');

function updateMapTransform() { if(mapSvg) mapSvg.style.transform = `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.scale})`; }

if (mapWrapper) {
    mapWrapper.addEventListener('mousedown', e => {
        if (e.target.closest('.map-controls, .legend, .map-info')) return;
        mapState.isDragging = true;
        mapState.startX = e.clientX - mapState.x;
        mapState.startY = e.clientY - mapState.y;
        mapWrapper.style.cursor = 'grabbing';
    });
}

document.addEventListener('mousemove', e => {
    if (!mapState.isDragging) return;
    mapState.x = e.clientX - mapState.startX;
    mapState.y = e.clientY - mapState.startY;
    constrainPan(); updateMapTransform();
});

document.addEventListener('mouseup', () => { mapState.isDragging = false; if(mapWrapper) mapWrapper.style.cursor = 'grab'; });

let lastTouchDist = 0, lastTouchCenter = { x: 0, y: 0 };

if (mapWrapper) {
    mapWrapper.addEventListener('touchstart', e => {
        if (e.target.closest('.map-controls, .legend, .map-info')) return;
        if (e.touches.length === 1) {
            mapState.isDragging = true;
            mapState.startX = e.touches[0].clientX - mapState.x;
            mapState.startY = e.touches[0].clientY - mapState.y;
        } else if (e.touches.length === 2) {
            mapState.isDragging = false;
            lastTouchDist = getTouchDist(e.touches);
            lastTouchCenter = getTouchCenter(e.touches);
        }
    });

    mapWrapper.addEventListener('touchmove', e => {
        if (e.target.closest('.map-controls, .legend, .map-info')) return;
        e.preventDefault();
        if (e.touches.length === 1 && mapState.isDragging) {
            mapState.x = e.touches[0].clientX - mapState.startX;
            mapState.y = e.touches[0].clientY - mapState.startY;
            constrainPan(); updateMapTransform();
        } else if (e.touches.length === 2) {
            const d = getTouchDist(e.touches), c = getTouchCenter(e.touches);
            setScale(mapState.scale + (d - lastTouchDist) * 0.005);
            mapState.x += c.x - lastTouchCenter.x; mapState.y += c.y - lastTouchCenter.y;
            constrainPan(); updateMapTransform();
            lastTouchDist = d; lastTouchCenter = c;
        }
    });

    mapWrapper.addEventListener('touchend', () => { mapState.isDragging = false; });
    mapWrapper.addEventListener('wheel', e => { e.preventDefault(); setScale(mapState.scale + (e.deltaY > 0 ? -0.1 : 0.1)); updateMapTransform(); });
}

function getTouchDist(ts) { const dx = ts[0].clientX - ts[1].clientX, dy = ts[0].clientY - ts[1].clientY; return Math.sqrt(dx*dx + dy*dy); }
function getTouchCenter(ts) { return { x: (ts[0].clientX + ts[1].clientX) / 2, y: (ts[0].clientY + ts[1].clientY) / 2 }; }

function setScale(s) { mapState.scale = Math.max(mapState.minScale, Math.min(mapState.maxScale, s)); }

function constrainPan() {
    const r = document.getElementById('mapWrapper')?.getBoundingClientRect();
    if(!r) return;
    const sw = 360 * mapState.scale, sh = 480 * mapState.scale;
    const mx = Math.max(0, (sw - r.width) / 2), my = Math.max(0, (sh - r.height) / 2);
    mapState.x = Math.max(-mx, Math.min(mx, mapState.x));
    mapState.y = Math.max(-my, Math.min(my, mapState.y));
}

function zoomIn() { setScale(mapState.scale + 0.2); updateMapTransform(); }
function zoomOut() { setScale(mapState.scale - 0.2); updateMapTransform(); }
function resetMap() { calculateMinScale(); mapState.scale = mapState.minScale; mapState.x = 0; mapState.y = 0; updateMapTransform(); }

// ===== INIT =====
renderLanguages();
renderDistanceLabels();
renderPoints();
applyLanguage();
setTimeout(updateDistanceUI, 100);

window.addEventListener('resize', () => {
    updateDistanceUI();
    updateScrollbar();
    if (state.isMapVisible) { calculateMinScale(); constrainPan(); updateMapTransform(); }
});

if (window.matchMedia) {
    window.matchMedia('(pointer: coarse)').addEventListener?.('change', updateScrollbar);
    window.matchMedia('(max-width: 768px)').addEventListener?.('change', updateScrollbar);
}
