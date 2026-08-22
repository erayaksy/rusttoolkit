window.RUST_DATA = {
  commands: [
    { command: 'effects.maxgibs -1', category: 'FPS + Combat', description: 'Kırılan yapıların oluşturduğu debris parçalarını kaldırır. Raid sırasında görüşü açar ve ani FPS düşüşlerini azaltabilir.', tag: 'recommended' },
    { command: 'client.headbob 0', category: 'Combat', description: 'Koşarken oluşan kamera sallanmasını kapatır. Tracking daha temiz hissedilir.', tag: 'recommended' },
    { command: 'client.hurtpunch 0', category: 'Combat', description: 'Hasar aldığında oluşan kamera tepkisini azaltır/kapatır. Fight sırasında aim korumayı kolaylaştırır.', tag: 'recommended' },
    { command: 'client.clampscreenshake true', category: 'Combat', description: 'Patlama ve benzeri efektlerde aşırı ekran sallanmasını sınırlar.', tag: 'recommended' },
    { command: 'client.headlerp_inertia false', category: 'Combat', description: 'ALT-look bıraktıktan sonra kameranın daha hızlı merkeze dönmesini sağlar.' },
    { command: 'graphics.vm_fov_scale false', category: 'Visibility', description: 'Silah modelinin FOV ile ölçeklenmesini kapatır ve görüş alanındaki kaplamayı azaltmaya yardımcı olur.' },
    { command: 'graphics.fov 90', category: 'Combat', description: 'FOV değerini 90 yapar ve çevresel görüş alanını artırır.' },
    { command: 'hitnotify.notification_level 2', category: 'Combat', description: 'Hit bildirimlerini server onayına göre gösterir; client tahminine bağlı sahte hit feedbackini azaltır.' },
    { command: 'graphics.grassshadows 0', category: 'FPS + Visibility', description: 'Çim gölgelerini kapatır. FPS ve yerdeki hareketleri ayırt etmeye yardımcı olabilir.' },
    { command: 'grass.displacement false', category: 'FPS', description: 'Çim displacement/deformasyon efektini kapatır.' },
    { command: 'water.reflections 0', category: 'FPS', description: 'Su yansımalarını azaltarak GPU yükünü düşürür.' },
    { command: 'effects.showoutlines true', category: 'QoL', description: 'Yere düşmüş itemların outline olarak görünmesini sağlar; fight sonrası loot toplamayı kolaylaştırır.' },
    { command: 'gc.buffer 4096', category: 'FPS', description: '32 GB+ RAM sistemlerde garbage collection kaynaklı takılmaları azaltmaya yardımcı olabilir.', tag: '32GB+' },
    { command: 'gc.buffer 2048', category: 'FPS', description: '16 GB RAM civarı sistemler için daha dengeli GC buffer seçeneği.', tag: '16GB' },
    { command: 'graphics.reflexmode 2', category: 'Combat', description: 'NVIDIA Reflex On + Boost. FPS artırmaktan çok input/render latency düşürmeye yöneliktir.', tag: 'NVIDIA' },
    { command: 'input.ads_sensitivity 0.8', category: 'Combat', description: 'ADS sırasında ayrı sensitivity kullanır. 0.8 örnek değerdir; kendi aimine göre ayarla.' },
    { command: 'graphics.vm_horizontal_flip true', category: 'Visibility', description: 'Silah viewmodelini ekranın sol tarafına geçirir.' },
    { command: 'bind mouse4 "+graphics.fov 90;graphics.fov 70"', category: 'Bind', description: 'Mouse4 basılıyken FOV 70, bırakınca 90 yapar.' },
    { command: 'bind f2 "consoletoggle;clear;combatlog"', category: 'Bind', description: 'F2 ile konsolu açıp combatlogu temiz şekilde gösterir.' }
  ],
  monuments: {
    green: {
      title: 'Yeşil Kart Nereden Alınır?',
      subtitle: 'Kart zincirinin başlangıcı. Küçük monumentlerde çoğunlukla puzzle gerekmeden alınır.',
      cardImage: 'https://files.facepunch.com/rust/item/keycard_green_512.png',
      accent: 'green',
      sources: [
        { name: 'Abandoned Cabins', need: 'Kart gerekmez', rad: 'Yok / düşük', route: 'Sarı iki katlı binaya gir, üst kata çık. Kart köşedeki masada.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Abandoned-Cabins-Monument-and-Green-Keycard-Location-RUST-1920x1052.jpeg' },
        { name: 'Lighthouse', need: 'Kart gerekmez', rad: 'Yok', route: 'Lighthouse içine gir, merdivenleri yukarı çık. Üst odadaki masada yeşil kart bulunur.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Lighthouse-Monument-and-Green-Keycard-Location-RUST.jpeg-1920x1026.jpeg' },
        { name: 'Abandoned Supermarket', need: 'Kart gerekmez', rad: 'Yok', route: 'Ana binada küçük ofis odasına gir. Kart masa üzerinde bulunur.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Supermarket-Monument-and-Green-Keycard-Location-RUST-1920x1069.jpeg' },
        { name: "Oxum's Gas Station", need: 'Kart gerekmez', rad: 'Yok', route: 'Ana binadaki ofis/masa bölümünü kontrol et. Kart masa üzerinde spawn olur.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Gas-Station-Monument-and-Green-Keycard-Location-RUST-1920x1044.jpeg' },
        { name: 'Junkyard', need: 'Kart gerekmez', rad: 'Yok / düşük', route: 'Monument ortasındaki köprüye çık ve üstteki container içindeki masayı kontrol et.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Junkyard-Monument-and-Green-Keycard-Location-RUST-1899x1080.jpeg' },
        { name: 'Ferry Terminal', need: 'Kart gerekmez', rad: 'Yok', route: 'Dış recyclerın karşısındaki binada bulunan masada ücretsiz yeşil kart vardır.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Ferry-Terminal-Monument-and-Blue-Keycard-Location-RUST-1891x1080.jpeg' }
      ],
      extra: [
        'Road Scientist ve bazı diğer scientist tiplerinden de yeşil kart düşebilir.',
        'Oil Rig ve bazı PvE scientist loot kaynaklarında da yeşil kart bulunabilir.'
      ]
    },
    blue: {
      title: 'Mavi Kart Nereden Alınır?',
      subtitle: 'Genellikle yeşil kart puzzle odasının ödülüdür. 2026 itibarıyla balık gutlayarak da alınabilir.',
      cardImage: 'https://files.facepunch.com/rust/item/keycard_blue_512.png',
      accent: 'blue',
      sources: [
        { name: 'Ferry Terminal', need: '1 Fuse + Green Card', rad: 'Yok', route: 'Metal shackte fuse ve switchi aktif et. Karşı taraftaki green reader kapısına koş; içeride mavi kart var.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Ferry-Terminal-Monument-and-Blue-Keycard-Location-RUST-1891x1080.jpeg' },
        { name: 'Small Harbor', need: '1 Fuse + Green Card', rad: 'Yok', route: 'Subway girişinin yanındaki iki katlı binada fuse + switch. Üst kattaki green door içinde mavi kart.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Small-Harbor-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1920x1064.jpeg' },
        { name: 'Large Harbor', need: '1 Fuse + Green Card', rad: 'Yok', route: 'Merkez containerda fuse + switch. Yakındaki hangardaki green door odasında mavi kart bulunur.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Large-Harbor-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1888x1080.jpeg' },
        { name: 'Satellite Dish', need: '1 Fuse + Green Card', rad: '~12%', route: 'Container içindeki fuse + switchi aç. Karşı taraftaki green door odasına geç; mavi kart masada.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Satellite-Dish-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1920x1064.jpeg' },
        { name: 'Sewer Branch', need: '1 Fuse + Green Card', rad: '~12%', route: 'Recycler yanındaki binada fuse + switch. Büyük pipe içine gir, green dooru aç; ileride mavi kart masada.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Sewer-Branch-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1920x1075.jpeg' },
        { name: 'The Dome', need: '1 Fuse + Green Card', rad: 'Bölgesel', route: 'Metal shackte fuse, dışarıdaki switch, ardından ikinci shackte green reader. Puzzle room içinde mavi kart bulunur.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/The-Dome-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1920x1050.jpeg' }
      ],
      fishing: [
        { name: 'Catfish', chance: '20%', image: 'https://files.facepunch.com/rust/item/fish.catfish_512.png' },
        { name: 'Salmon', chance: '20%', image: 'https://files.facepunch.com/rust/item/fish.salmon_512.png' },
        { name: 'Small Shark', chance: '20%', image: 'https://files.facepunch.com/rust/item/fish.smallshark_512.png' },
        { name: 'Orange Roughy', chance: '20%', image: 'https://files.facepunch.com/rust/item/fish.orangeroughy_512.png' }
      ],
      extra: [
        'Balığı yakalamak yetmez: gut/butcher yaptığında mavi kart çıkma ihtimali vardır.',
        'Ağustos 2026 değişikliklerinde Outpost vending machine üzerinden Blue Keycard satın alma kaldırıldı.'
      ]
    },
    red: {
      title: 'Kırmızı Kart Nereden Alınır?',
      subtitle: 'Mavi kart puzzlelarını tamamlayarak Tier 3 monumentlere geçiş için kırmızı kart toplarsın.',
      cardImage: 'https://files.facepunch.com/rust/item/keycard_red_512.png',
      accent: 'red',
      sources: [
        { name: 'Water Treatment Plant', need: '1 Fuse + Blue Card', rad: 'Final oda radlı', route: 'Gate binasında fuse + switchi aç. Köşedeki binanın çatısına çık, blue dooru aç. Red card içerideki masada.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Water-Treatment-Plant-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1057.jpeg' },
        { name: 'Power Plant', need: 'Green + Blue + Fuse', rad: 'Var', route: 'Dış switch zincirini tamamla, green door üzerinden ana binaya gir, üst kattaki blue roomda kırmızı kartı al.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Power-Plant-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1062.jpeg' },
        { name: 'Airfield', need: '2 Fuse + Green + Blue', rad: 'Hazmat önerilir', route: 'İlk fuse/switchten sonra pipe tüneline gir. Green door ve ikinci fuse sonrası blue dooru aç; final odada kırmızı kart.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Airfield-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1080.jpeg' },
        { name: 'Train Yard', need: 'Fuse + Green + Blue', rad: 'Var', route: 'Switch zincirini tamamla, merkez binadaki fuseu aktif et. Green bölüm sonrası üst kattaki blue roomda kırmızı kart bulunur.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Trainyard-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1024.jpeg' },
        { name: 'Arctic Research Base', need: 'Blue Card', rad: 'Soğuk + Scientist', route: 'Scientistleri temizle. Ortadaki iki kırmızı containerdan soldakine blue card bas; kırmızı kart içeride.', image: 'https://itemlevel.net/wp-content/uploads/2023/05/Arctic-Research-Base-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1056.jpeg' }
      ],
      extra: [
        'En kolay klasik red-card rotalarından biri Water Treatment olarak kabul edilir.',
        'Kırmızı kartı aldıktan sonra Launch Site, Military Tunnels, Oil Rigs, Underwater Labs ve Missile Silo gibi Tier 3 alanlarda kullanırsın.'
      ]
    }
  },
  raidTargets: [
    { name: 'Wood Wall', hp: 250, c4: 1, rockets: 2, satchels: 3, explo: 49 },
    { name: 'Stone Wall', hp: 500, c4: 2, rockets: 4, satchels: 10, explo: 185 },
    { name: 'Sheet Metal Wall', hp: 1000, c4: 4, rockets: 8, satchels: 23, explo: 400 },
    { name: 'Armored Wall', hp: 2000, c4: 8, rockets: 15, satchels: 46, explo: 799 },
    { name: 'Wood Door', hp: 200, c4: 1, rockets: 1, satchels: 2, explo: 19 },
    { name: 'Sheet Metal Door', hp: 250, c4: 1, rockets: 2, satchels: 4, explo: 63 },
    { name: 'Garage Door', hp: 600, c4: 2, rockets: 3, satchels: 9, explo: 150 },
    { name: 'Armored Door', hp: 1000, c4: 3, rockets: 5, satchels: 15, explo: 250 }
  ],
  sulfur: { c4: 2200, rockets: 1400, satchels: 480, explo: 25 }
};
