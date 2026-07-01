/* ============================================================
   DATA — 9-DAY ITINERARY  Switzerland → Venice → Rome
   ============================================================ */

const DAYS = [
  /* ---- Day 1: 7/4 Japan Departure ---- */
  {
    num: 1, date: '2026-07-04', label: '7/4(土)',
    title: '日本出発', city: 'transit',
    tags: ['✈️ 日本出発', '🌙 機内泊'],
    schedule: {
      '夕方〜深夜': [
        { time: '—',    icon: '🧳', name: '空港へ移動', desc: '成田 / 羽田空港へ向かう。3時間前には到着を目安に' },
        { time: '—',    icon: '✈️', name: '日本出発',   desc: 'チューリッヒ行きフライト出発', note: '機内泊' },
      ]
    }
  },
  /* ---- Day 2: 7/5 Arrive Zurich → Interlaken ---- */
  {
    num: 2, date: '2026-07-05', label: '7/5(日)',
    title: 'スイス到着 → インターラーケンへ', city: 'swiss',
    tags: ['🛬 チューリッヒ到着', '🚆 鉄道移動', '🏔 インターラーケン', '🌆 旧市街散策'],
    schedule: {
      '午前 — 到着': [
        { time: '—',    icon: '🛬', name: 'チューリッヒ空港 到着', desc: 'Zürich Flughafen。入国審査・荷物受け取り' },
        { time: '—',    icon: '🚆', name: 'チューリッヒ → インターラーケン', desc: 'チューリッヒ中央駅（HB）からベルン経由でインターラーケン・オスト（Interlaken Ost）まで鉄道で約2時間', note: '約2時間（乗換あり）' },
      ],
      '午後': [
        { time: '—',    icon: '🏨', name: 'ホテル チェックイン', desc: 'インターラーケン市内のホテル' },
        { time: '—',    icon: '🚶', name: 'ヘーエヴェーク通り散策', desc: 'Höheweg（ホーエウェーク）沿いにアイガー・メンヒ・ユングフラウの三峰を望む絶景の遊歩道。花壇とアルプスのコントラストが美しい' },
      ],
      '夕食': [
        { time: '—',    icon: '🍷', name: '夕食', desc: 'インターラーケン市内のレストランでスイス料理（チーズフォンデュ / ラクレット）' },
        { time: '—',    icon: '🏨', name: 'インターラーケン泊', desc: '' },
      ]
    }
  },
  /* ---- Day 3: 7/6 Grindelwald + Lauterbrunnen ---- */
  {
    num: 3, date: '2026-07-06', label: '7/6(月)',
    title: 'グリンデルワルト & ラウターブルンネン', city: 'swiss',
    tags: ['⛰ グリンデルワルト', '💦 ラウターブルンネン', '🚆 山岳鉄道'],
    schedule: {
      '午前': [
        { time: '08:00', icon: '🍳', name: '朝食', desc: 'ホテルにて。今日は長い1日なので早めに' },
        { time: '09:00', icon: '🚆', name: 'インターラーケン東駅 出発', desc: 'Interlaken Ost 発 → グリンデルワルトへ。BOB（ベルナー・オーバーランド鉄道）乗車' },
        { time: '09:30', icon: '⛰', name: 'グリンデルワルト 観光', desc: 'アイガー北壁（3,970m）を間近に仰ぐ標高1,034mの山岳村。グリンデルワルト・ターミナルのゴンドラ（Eiger Express）や村を散策', note: '〜12:00' },
      ],
      '昼': [
        { time: '12:00', icon: '🍽', name: '昼食', desc: 'グリンデルワルト村内のレストラン。スイスのロースティ（ポテト料理）がおすすめ' },
        { time: '13:00', icon: '🚆', name: 'グリンデルワルト → ラウターブルンネン', desc: 'Grindelwald Grund → Lauterbrunnen（乗換あり 約30分）' },
      ],
      '午後': [
        { time: '13:30', icon: '💦', name: 'ラウターブルンネン 観光', desc: '高さ297mのスタウバッハ滝を中心に、72の滝が流れる「滝の谷」。トリュンメルバッハの滝（氷河水が岩山内部を流れる絶景、CHF 14）も近くに', note: '〜17:00' },
        { time: '17:00', icon: '🚆', name: 'ラウターブルンネン → インターラーケン', desc: 'BLS鉄道で約20分' },
        { time: '17:30', icon: '🏨', name: 'ホテル帰着・シャワー休憩', desc: '' },
      ],
      '夕食': [
        { time: '18:30', icon: '🍷', name: '夕食', desc: 'インターラーケン旧市街のレストランで疲れを癒す夕食' },
        { time: '20:00', icon: '🏨', name: 'インターラーケン泊', desc: '' },
      ]
    }
  },
  /* ---- Day 4: 7/7 Jungfraujoch ---- */
  {
    num: 4, date: '2026-07-07', label: '7/7(火)',
    title: 'ユングフラウヨッホ — ヨーロッパの屋上', city: 'swiss',
    tags: ['❄️ ユングフラウヨッホ', '🚞 登山鉄道', '🏔 標高3,454m'],
    schedule: {
      '午前': [
        { time: '07:00', icon: '🌤', name: '天候確認 & 朝食', desc: '山頂は天候が変わりやすい。登山鉄道公式アプリやWebで天気確認後、出発判断を' },
        { time: '08:00', icon: '🍳', name: '朝食', desc: 'ホテルにて。しっかり食べて高所対策' },
        { time: '08:30', icon: '🚆', name: 'インターラーケン東駅 出発', desc: 'グリンデルワルト or ラウターブルンネン経由でユングフラウヨッホへ（ルートにより異なる）' },
        { time: '10:00', icon: '❄️', name: 'ユングフラウヨッホ 到着', desc: 'ヨーロッパ最高所の鉄道駅（3,454m）。スフィンクス展望台・氷の宮殿・アレッチ氷河を楽しむ', note: '晴天なら360°絶景！' },
      ],
      '昼': [
        { time: '12:00', icon: '🍽', name: '山頂で昼食', desc: 'ユングフラウヨッホのレストラン（Crystal Restaurant など）。標高3,454mのランチ' },
      ],
      '午後': [
        { time: '13:00', icon: '🏔', name: 'プラトー展望台 & 氷の宮殿', desc: '氷河のトンネル内に作られた氷の芸術、展望台からの大パノラマ', note: '〜15:00' },
        { time: '15:00', icon: '🚞', name: '下山 開始', desc: '同じルートで下山。往復の所要時間を考慮して早めに' },
        { time: '17:30', icon: '🏘', name: 'インターラーケン帰着', desc: '' },
        { time: '18:00', icon: '🛍', name: '夕方の散策・お土産', desc: 'スイスチョコレート（Lindt・Toblerone）、ナイフ、時計のお土産探し' },
      ],
      '夕食': [
        { time: '19:30', icon: '🍷', name: '夕食', desc: 'インターラーケン市内でスイス最後の夕食。ベルナープラッテ（肉盛り合わせ）がおすすめ' },
        { time: '21:00', icon: '🏨', name: 'インターラーケン泊', desc: '明日は早めの出発' },
      ]
    }
  },
  /* ---- Day 5: 7/8 Interlaken → Venice ---- */
  {
    num: 5, date: '2026-07-08', label: '7/8(水)',
    title: 'インターラーケン → ベネチア', city: 'venice',
    tags: ['🚆 国際列車', '🇮🇹 イタリア入国', '🌉 リアルト橋', '🎭 サン・マルコ夜景'],
    schedule: {
      '午前 — 移動': [
        { time: '07:00', icon: '🍳', name: '朝食', desc: 'ホテルにて' },
        { time: '08:00', icon: '🧳', name: 'チェックアウト & 出発', desc: 'インターラーケン東駅へ向かう' },
        { time: '09:00', icon: '🚆', name: 'インターラーケン → ベネチア 出発', desc: 'ミラノ経由でベネチア・サンタ・ルチア駅へ。ベルン→ミラノ→ベネチアで乗換あり', note: '所要 約6〜7時間' },
      ],
      '午後 — 到着': [
        { time: '15:00', icon: '🚉', name: 'ベネチア・サンタ・ルチア駅 到着', desc: '駅を出ると目の前に大運河！感動の瞬間（目安時刻）' },
        { time: '15:30', icon: '🏨', name: 'ホテル チェックイン', desc: 'ベネチア市内のホテル。石畳の路地を引きずるスーツケースが大変なので、できるだけ軽装で' },
        { time: '16:30', icon: '🌉', name: 'リアルト橋 散策', desc: '大運河を渡るヴェネツィア最古の橋。橋の上からゴンドラが行き交う大運河を眺める' },
        { time: '17:30', icon: '🚶', name: '徒歩でサン・マルコ広場へ', desc: 'リアルト橋から路地を縫うように徒歩約15分。細い石畳の路地の散策も楽しい' },
      ],
      '夜': [
        { time: '18:00', icon: '🎭', name: 'サン・マルコ広場 夜景', desc: '日が沈み、ライトアップされた大聖堂と鐘楼が幻想的。広場のカフェでカンパリソーダを' },
        { time: '19:30', icon: '🦞', name: '夕食', desc: 'ベネチア名物の新鮮シーフード。チチェッティ（ヴェネチア式の小皿料理）のバーカロ巡りも楽しい' },
        { time: '21:00', icon: '🌙', name: '夜の運河散策', desc: '人が減った夜のベネチアを散策。橋の上から運河の反射が美しい' },
        { time: '22:00', icon: '🏨', name: 'ホテル', desc: 'ベネチア泊' },
      ]
    }
  },
  /* ---- Day 6: 7/9 Venice → Rome (Italo) + Night sightseeing ---- */
  {
    num: 6, date: '2026-07-09', label: '7/9(木)',
    title: 'ベネチア → ローマ（Italo）& 夜景散策', city: 'rome',
    tags: ['🚄 Italo 高速鉄道', '🏟 ローマ到着', '⛲ ナヴォーナ', '🌙 夜景観光'],
    schedule: {
      '午前 — 移動': [
        { time: '08:30', icon: '🧳', name: 'ホテル チェックアウト', desc: '' },
        { time: '09:00', icon: '🚉', name: 'Venezia Mestre 駅へ', desc: 'ホテルから Venezia Santa Lucia 経由で Venezia Mestre へ（1駅）' },
        { time: '09:20', icon: '🚄', name: '【Italo】Venezia Mestre 発', desc: 'Italo 高速列車 出発', note: '09:20 発 Venezia Mestre' },
        { time: '11:20', icon: '🏛', name: '【乗換】Firenze S.M.Novella 着', desc: 'フィレンツェ到着。乗換時間 23分', note: '11:20 着 / 11:43 発' },
        { time: '11:43', icon: '🚄', name: '【Italo】Firenze S.M.Novella 発', desc: 'フィレンツェ発 → ローマへ', note: '11:43 発 Firenze S.M.N.' },
        { time: '15:30', icon: '🏟', name: '【到着】Roma Termini', desc: 'ローマ・テルミニ駅 到着', note: '15:30 着 Roma Termini' },
      ],
      '午後': [
        { time: '16:00', icon: '🏨', name: 'ホテル チェックイン', desc: 'テルミニ駅周辺またはローマ市内のホテル。ローマ泊' },
        { time: '17:00', icon: '☕', name: '休憩 & エスプレッソ', desc: '旅の疲れをローマのバールで一杯のエスプレッソで癒す' },
      ],
      '夜 — 夜景散策': [
        { time: '17:30', icon: '🌊', name: 'ナヴォーナ広場', desc: 'ベルニーニの「四大河の噴水」が美しくライトアップ。周囲のカフェのテラス席で休憩も◎' },
        { time: '18:30', icon: '🏛', name: 'パンテオン（外観）', desc: '2,000年前の神殿がライトアップ。夜の荘厳な佇まいは昼間と全く異なる魅力' },
        { time: '19:15', icon: '⛲', name: 'トレビの泉', desc: 'ライトアップされたバロック式噴水。コインを投げて「再びローマへ戻れる」伝説を体験', note: '夜が比較的空いている' },
        { time: '20:00', icon: '🏛', name: 'スペイン広場', desc: '135段の大階段とライトアップ。夜は人も少なく静かに楽しめる' },
        { time: '21:00', icon: '🍝', name: '夕食', desc: 'スペイン広場周辺またはトラステヴェレ地区のリストランテ。カルボナーラ発祥の地ローマで本場を味わう' },
        { time: '22:30', icon: '🏨', name: 'ホテル', desc: 'ローマ泊' },
      ]
    }
  },
  /* ---- Day 7: 7/10 Rome Colosseum + Vatican ---- */
  {
    num: 7, date: '2026-07-10', label: '7/10(金)',
    title: 'ローマ観光 — 古代遺跡 & バチカン', city: 'rome',
    tags: ['🏟 コロッセオ ✅予約済', '⛪ バチカン ✅予約済', '🎨 システィーナ'],
    schedule: {
      '午前 — 古代ローマ': [
        { time: '08:00', icon: '🍳', name: '朝食', desc: 'ホテルにて。しっかり食べて長い1日に備える' },
        { time: '09:00', icon: '🚌', name: 'コロッセオへ移動', desc: 'ホテルから徒歩 or バス（路線 75番など）' },
        { time: '09:15', icon: '🏟', name: 'コロッセオ 入場', desc: '予約時間に合わせて入場。西暦80年完成、最大5万人を収容した古代ローマ最大の円形闘技場', note: '✅ 事前予約済 €18' },
        { time: '10:45', icon: '🏛', name: 'フォロ・ロマーノ 入場', desc: '古代ローマの政治・宗教・商業の中心地。共通券でそのまま入場（コロッセオから徒歩2分）', note: '〜12:00（共通券）' },
        { time: '12:00', icon: '🌿', name: 'パラティーノの丘', desc: 'ローマ建国の伝説が残る緑豊かな丘。フォロ・ロマーノを見下ろす眺望が素晴らしい', note: '〜13:00（共通券）' },
      ],
      '昼': [
        { time: '13:00', icon: '🍝', name: '昼食', desc: 'テスタッチョ地区（地元感あふれる市場エリア）または周辺のトラットリアで' },
        { time: '14:30', icon: '🚌', name: 'バチカンへ移動', desc: 'バス or 地下鉄（A線 Ottaviano 駅）で約30分' },
      ],
      '午後 — バチカン': [
        { time: '15:30', icon: '⛪', name: 'バチカン エリア到着', desc: '美術館周辺を散策しながら入場時間を待つ' },
        { time: '16:00', icon: '🎨', name: 'ヴァチカン美術館 入場', desc: '世界最大級の美術コレクション。システィーナ礼拝堂のミケランジェロ天井画は圧倒的', note: '✅ 予約済（14:00-16:00 ランダム入場枠）' },
        { time: '17:30', icon: '🕊', name: 'サン・ピエトロ広場', desc: 'ベルニーニの大列柱廊に囲まれた壮大な広場。日が傾き始めた光の中の大聖堂が美しい' },
      ],
      '夜': [
        { time: '18:30', icon: '🌃', name: 'テヴェレ川沿い & 夜景散策', desc: 'サンタンジェロ橋ライトアップ方面へ散策' },
        { time: '19:30', icon: '🍷', name: '夕食', desc: 'バチカン近くまたはテヴェレ川沿いのトラットリア。ローマ式カチョ・エ・ペペ（チーズ＆胡椒のパスタ）がおすすめ' },
        { time: '21:00', icon: '🏨', name: 'ホテル', desc: 'ローマ泊' },
      ]
    }
  },
  /* ---- Day 8: 7/11 Last day Rome + Departure ---- */
  {
    num: 8, date: '2026-07-11', label: '7/11(土)',
    title: 'ローマ最終日 & 帰国便', city: 'rome',
    tags: ['🏰 サンタンジェロ城', '🛍 ショッピング', '✈️ 帰国便'],
    schedule: {
      '午前': [
        { time: '08:00', icon: '🍳', name: '朝食', desc: 'ホテルにて。ローマ最後の朝' },
        { time: '09:00', icon: '🧳', name: 'チェックアウト', desc: 'スーツケースをホテルに預け、手ぶらで散策へ' },
        { time: '09:30', icon: '🌉', name: 'サンタンジェロ橋', desc: 'テヴェレ川に架かるベルニーニ作の天使像が並ぶ橋。朝の光の中のサンタンジェロ城が美しい' },
        { time: '10:00', icon: '🏰', name: 'サンタンジェロ城 周辺散策', desc: 'テヴェレ川沿いを歩きながら城の外観を楽しむ。入場（€15）して屋上テラスからローマ全景を望む選択肢も' },
      ],
      '昼': [
        { time: '11:00', icon: '🛍', name: 'ショッピング', desc: 'ヴィア・コンドッティ（高級ブランド街）/ スペイン広場周辺 / ローマらしいお土産はテルミニ周辺でも揃う' },
        { time: '12:30', icon: '🍝', name: 'ローマ最後のランチ', desc: 'カルボナーラ、リガトーニ・アッラ・アマトリチャーナ、カチョ・エ・ペペで食べ納め。後悔しない1食を' },
      ],
      '午後 — 帰国': [
        { time: '14:00', icon: '🏨', name: 'ホテルで荷物ピックアップ', desc: '' },
        { time: '14:30', icon: '🚕', name: '空港へ出発', desc: 'フィウミチーノ空港（FCO）へ。タクシー（約45分・€48固定）or Leonardo Express（テルミニ駅から約32分・€14）' },
        { time: '16:00', icon: '✈️', name: '搭乗手続き・セキュリティ', desc: '国際線は3時間前が目安。免税店での買い物もお忘れなく' },
        { time: '—',    icon: '🛫', name: '帰国便 出発', desc: 'ローマ → 日本（直行 or 乗換）', note: '機内泊' },
      ]
    }
  },
  /* ---- Day 9: 7/12 Arrive Japan ---- */
  {
    num: 9, date: '2026-07-12', label: '7/12(日)',
    title: '日本到着', city: 'transit',
    tags: ['🛬 日本到着', '🏠 帰宅', '✨ 旅行終了'],
    schedule: {
      '到着': [
        { time: '—', icon: '🛬', name: '日本（成田 / 羽田）到着', desc: '長旅お疲れ様でした！' },
        { time: '—', icon: '🏠', name: '帰宅', desc: 'スイス・ベネチア・ローマの素晴らしい思い出を胸に' },
      ]
    }
  }
];

/* ============================================================
   SPOTS (Swiss → Venice → Rome, ordered by visit)
   ============================================================ */
const SPOTS = [
  /* ----- SWITZERLAND ----- */
  {
    id: 'interlaken',
    name: 'インターラーケン',
    nameEn: 'Interlaken',
    city: 'swiss', day: 2, emoji: '🏔',
    rating: 4,
    hours: '終日（自由散策）',
    ticket: '無料',
    ticketType: 'free',
    duration: '1〜2時間（旧市街散策）',
    bestTime: '夕方〜夜（アルプスの夕焼け）',
    desc: 'トゥーン湖とブリエンツ湖に挟まれた「二つの湖の間」を意味する観光都市。ヘーエヴェーク通り（Höheweg）からはアイガー・メンヒ・ユングフラウの三峰を一望できる。',
    photoTip: 'ヘーエヴェーク通りの花壇越しにユングフラウを撮影。ポストカードのような1枚が撮れる定番ショット。',
    trivia: 'インターラーケンはドイツ語で「二つの湖の間」の意。ユングフラウ地区への玄関口として年間約150万人が訪れる人気リゾート。',
    mapsUrl: 'https://maps.google.com/?q=Interlaken+Switzerland',
    officialUrl: 'https://www.interlaken.ch/'
  },
  {
    id: 'grindelwald',
    name: 'グリンデルワルト',
    nameEn: 'Grindelwald',
    city: 'swiss', day: 3, emoji: '⛰',
    rating: 5,
    hours: '終日（村は常時開放）',
    ticket: '村は無料（展望台・ゴンドラは別途）',
    ticketType: 'free',
    duration: '2〜3時間',
    bestTime: '早朝 5〜7時（モルゲンロート：山の夜明け）',
    desc: 'アイガー北壁（3,970m）の麓に広がる標高1,034mの山岳村。迫力ある北壁を間近に仰ぎながら、のどかな牧草地と山岳ホテルが並ぶ絵本のような景色が広がる。',
    photoTip: 'アイガー北壁をバックに緑の牧草地と村を構図に。早朝の日差しが岩壁をオレンジに染めるモルゲンロートが最高。',
    trivia: 'アイガー北壁の初登頂は1938年。国際登山家たちが38年間挑んだ「死の壁」と呼ばれた壁は、今もアルプス最難関の1つ。',
    mapsUrl: 'https://maps.google.com/?q=Grindelwald+Switzerland',
    officialUrl: 'https://www.grindelwald.swiss/'
  },
  {
    id: 'lauterbrunnen',
    name: 'ラウターブルンネン',
    nameEn: 'Lauterbrunnen',
    city: 'swiss', day: 3, emoji: '💦',
    rating: 5,
    hours: '終日（自由散策）',
    ticket: '無料（トリュンメルバッハの滝 CHF 14）',
    ticketType: 'free',
    duration: '2〜3時間',
    bestTime: '午前中（日差しが滝を照らす）',
    desc: '「72の滝の谷」として知られるベルン州の絶景渓谷。高さ297mのスタウバッハ滝が垂直の岩壁を流れ落ちる景色はまさにハイジの世界。岩山内部を流れるトリュンメルバッハの滝も必見。',
    photoTip: 'スタウバッハ滝と緑の谷を一緒にとらえた構図が定番。谷底から見上げる絶壁と滝のコントラストが圧巻。',
    trivia: 'J・R・R・トールキンは1911年にスイス旅行でこの谷を訪れ、「指輪物語」のリヴェンデルのモデルにしたと言われている。',
    mapsUrl: 'https://maps.google.com/?q=Lauterbrunnen+Switzerland',
    officialUrl: 'https://www.lauterbrunnen.swiss/'
  },
  {
    id: 'jungfraujoch',
    name: 'ユングフラウヨッホ',
    nameEn: 'Jungfraujoch',
    city: 'swiss', day: 4, emoji: '❄️',
    rating: 5,
    hours: '年中無休 8:00〜17:00（最終登山便に注意）',
    ticket: 'CHF 135〜165（季節・ルートにより変動）',
    ticketType: 'required',
    duration: '3〜4時間（往復の登山鉄道含む）',
    bestTime: '午前中早め（雲が出る前）',
    desc: '標高3,454mにある「ヨーロッパ最高所の鉄道駅」。スフィンクス展望台からはアレッチ氷河（全長23km・世界遺産）と4,000m級のアルプスが一望できる。氷の宮殿は一見の価値あり。',
    photoTip: 'スフィンクス展望台から360度パノラマを撮影。晴れた日はアイガー・メンヒ・ユングフラウの三峰を独占できる。',
    trivia: '1912年開通のユングフラウ鉄道。線路の一部はロータリー鋸刃式の仕組みで急勾配を登る。総工事費は現在価値で数百億円相当とも。',
    mapsUrl: 'https://maps.google.com/?q=Jungfraujoch+Switzerland',
    officialUrl: 'https://www.jungfrau.ch/'
  },
  /* ----- VENICE ----- */
  {
    id: 'rialto',
    name: 'リアルト橋',
    nameEn: 'Rialto Bridge',
    city: 'venice', day: 5, emoji: '🌉',
    rating: 5,
    hours: '24時間',
    ticket: '無料',
    ticketType: 'free',
    duration: '20〜30分',
    bestTime: '早朝 or 夕暮れ（人が最も少ない）',
    desc: '1591年完成のヴェネツィア最古の大運河に架かる橋。橋上からの大運河の眺めは格別。橋の両側にはジュエリーショップと土産店が並ぶ。ゴンドラが行き交う様子が橋上から見える。',
    photoTip: '水辺から橋全体を見上げる構図と、橋の上から大運河を見下ろす構図の両方を。ゴンドラが通る瞬間を狙って。',
    trivia: 'リアルト橋が完成する前は木製の橋が架けられていた。1444年に群衆が渡った際に崩落した記録が残る。',
    mapsUrl: 'https://maps.google.com/?q=Rialto+Bridge+Venice+Italy',
    officialUrl: null
  },
  {
    id: 'sanmarco',
    name: 'サンマルコ広場',
    nameEn: "St. Mark's Square",
    city: 'venice', day: 5, emoji: '🎭',
    rating: 5,
    hours: '24時間（夏季の混雑時は入場制限あり）',
    ticket: '無料',
    ticketType: 'free',
    duration: '30〜60分',
    bestTime: '夜（ライトアップと静寂の中で）',
    desc: 'ナポレオンが「ヨーロッパで最も美しい客間」と称えた広場。サンマルコ寺院・ドゥカーレ宮殿・鐘楼（カンパニーレ）が三方を囲む。広場に立つカフェ・フローリアンは1720年創業の世界最古のカフェ。',
    photoTip: '広場の中心から寺院を正面に。鐘楼越しに鳩が飛ぶ瞬間をとらえるのが定番。夜のライトアップ時間が特に幻想的。',
    trivia: 'この広場の石畳は海面下にあり、春〜秋の満潮時（アクア・アルタ）には浸水することがある。木製の仮設歩道が出るのがヴェネツィアらしい光景。',
    mapsUrl: "https://maps.google.com/?q=St.+Mark%27s+Square+Venice+Italy",
    officialUrl: null
  },
  {
    id: 'basilica',
    name: 'サンマルコ寺院',
    nameEn: "St. Mark's Basilica",
    city: 'venice', day: 5, emoji: '⛪',
    rating: 5,
    hours: '月〜土 9:30〜17:15 / 日 14:00〜17:15',
    ticket: '€10（2025年7月〜オンライン予約必須）',
    ticketType: 'preorder',
    duration: '45〜60分',
    bestTime: '開館直後（9:30〜10:00）',
    desc: 'ビザンチン様式の傑作で11世紀建造。8,000㎡以上の黄金のモザイクが輝く内装は圧倒的。外壁を飾る4頭の馬の像はビザンチン帝国から持ち帰った本物（現在はコピー、本物は内部に展示）。',
    photoTip: '内部の黄金モザイク天井。2階のロッジアからサンマルコ広場を見下ろす眺めが最高の撮影スポット。',
    trivia: '現地でチケットを購入することはできず、事前オンライン予約が必須（2025年7月〜）。無料で祈祷・ミサに参加することは引き続き可能。',
    mapsUrl: "https://maps.google.com/?q=St.+Mark%27s+Basilica+Venice+Italy",
    officialUrl: 'https://www.basilicasanmarco.it/'
  },
  {
    id: 'gondola',
    name: 'ゴンドラ',
    nameEn: 'Gondola Ride',
    city: 'venice', day: 5, emoji: '🛶',
    rating: 5,
    hours: '9:00〜日没（日没後は別料金）',
    ticket: '€90/30分（日没前）/ €110/30分（夜）・5名まで・現金のみ',
    ticketType: 'required',
    duration: '30〜40分',
    bestTime: '夕暮れ〜日没後（最もロマンチック）',
    desc: '700年以上の伝統を持つヴェネツィアの黒い手漕ぎボート。細い運河を縫うように進む唯一無二の体験。現在のゴンドリエーレ（漕ぎ手）は約400名で、そのほとんどが世襲制。',
    photoTip: '橋の上からゴンドラを見下ろす定番構図。乗船中に低い橋をくぐる瞬間が絵になる。',
    trivia: 'ゴンドラは全長11m・重さ600kgで、船体が左に傾くよう非対称に設計されている。これにより、1本の艪で真っ直ぐ進むことができる。',
    mapsUrl: 'https://maps.google.com/?q=Gondola+rides+Venice+Italy',
    officialUrl: null
  },
  /* ----- ROME — Day 6 (Night) ----- */
  {
    id: 'navona',
    name: 'ナヴォーナ広場',
    nameEn: 'Piazza Navona',
    city: 'rome', day: 6, emoji: '🌊',
    rating: 4,
    hours: '24時間',
    ticket: '無料',
    ticketType: 'free',
    duration: '30〜60分',
    bestTime: '夜（噴水のライトアップ）',
    desc: 'ベルニーニの「四大河の噴水」が中心に鎮座するバロック様式の美しい広場。周囲に優雅なカフェやギャラリーが並ぶ。古代ローマのスタジアムの跡地の上に建設されたため、楕円形の形をしている。',
    photoTip: '四大河の噴水を中心に広場全体をとらえる。カフェのテラスから俯瞰するのも雰囲気がある。夜のライトアップ時が一番フォトジェニック。',
    trivia: '広場の下には西暦86年建設の古代ローマのスタジアムが眠っている。楕円形の形はそのスタジアムの輪郭を今も踏襲している。',
    mapsUrl: 'https://maps.google.com/?q=Piazza+Navona+Rome+Italy',
    officialUrl: null
  },
  {
    id: 'pantheon',
    name: 'パンテオン',
    nameEn: 'Pantheon',
    city: 'rome', day: 6, emoji: '🏛',
    rating: 5,
    hours: '9:00〜19:00（毎日）',
    ticket: '€7（2026年7月〜）',
    ticketType: 'required',
    duration: '45〜60分',
    bestTime: '開館直後（9:00〜）または昼前後（天窓から光が差す）',
    desc: '西暦125年ハドリアヌス帝が再建。直径43mの完璧な球体内部空間と、直径9mの天窓（オクルス）から差し込む光の柱が2,000年間変わらず美しい。コンクリートドームとしては2009年まで世界最大だった。',
    photoTip: '内部から天窓を見上げる構図が定番。雨の日は床の排水口に吸い込まれる雨水を撮影するとユニーク。外観は正面の柱廊を広角で。',
    trivia: 'パンテオンの内部空間は直径43m、天井高43mの完全な球体。「パンテオン」とはギリシャ語で「すべての神々」の意味。',
    mapsUrl: 'https://maps.google.com/?q=Pantheon+Rome+Italy',
    officialUrl: 'https://www.pantheonroma.com/'
  },
  {
    id: 'trevi',
    name: 'トレビの泉',
    nameEn: 'Trevi Fountain',
    city: 'rome', day: 6, emoji: '⛲',
    rating: 5,
    hours: '24時間',
    ticket: '無料',
    ticketType: 'free',
    duration: '20〜30分',
    bestTime: '夜（ライトアップ）または早朝 5〜7時',
    desc: 'ローマ最大・世界で最も有名なバロック式噴水（1762年完成）。コインを右手で持ち左肩越しに投げると「再びローマに来られる」という伝説がある。年間コイン投入額は100万ユーロ以上で市の食料支援プログラムに寄付される。',
    photoTip: '噴水正面中央から。夜のライトアップ時が最もフォトジェニック。早朝（5時〜）なら観光客がほぼいなく独占撮影が可能。',
    trivia: '1954年の映画「ローマの休日」でオードリー・ヘップバーンが訪れた場所。映画の舞台として世界中に知られ今や年間300万人以上が訪れる。',
    mapsUrl: 'https://maps.google.com/?q=Trevi+Fountain+Rome+Italy',
    officialUrl: null
  },
  {
    id: 'spanish-steps',
    name: 'スペイン広場',
    nameEn: 'Spanish Steps',
    city: 'rome', day: 6, emoji: '🏛',
    rating: 4,
    hours: '24時間',
    ticket: '無料',
    ticketType: 'free',
    duration: '20〜30分',
    bestTime: '夕暮れ〜夜（ライトアップ）',
    desc: '1726年設計の135段の大階段と、ベルニーニ作「バルカッチャの船の泉」が有名。最上部のトリニタ・デイ・モンティ教会からはローマ市内を見渡せる。高級ブランド街「ヴィア・コンドッティ」の起点でもある。',
    photoTip: '広場の噴水越しに階段を仰ぐ構図が定番。夕暮れ時のオレンジ色の光の中、大階段がゴールデンに輝く時間帯が最高。',
    trivia: '「スペイン広場」という名前は17世紀にスペイン大使館が置かれていたことが由来。設計したフランチェスコ・デ・サンクティスはフランス人。',
    mapsUrl: 'https://maps.google.com/?q=Spanish+Steps+Rome+Italy',
    officialUrl: null
  },
  /* ----- ROME — Day 7 ----- */
  {
    id: 'colosseum',
    name: 'コロッセオ',
    nameEn: 'Colosseum',
    city: 'rome', day: 7, emoji: '🏟',
    rating: 5,
    hours: '9:00〜19:00（7月期、季節により変動）',
    ticket: '€18（フォロ・ロマーノ・パラティーノの丘の3施設共通）',
    ticketType: 'preorder',
    duration: '1時間30分〜2時間30分',
    bestTime: '開館直後（9:15〜）',
    desc: '西暦80年、わずか8年で完成した古代ローマ最大の円形闘技場。最大5万人を収容し、100日間にわたる開場式典で5,000頭の動物が使われた記録がある。現在はアリーナ床面エリアも公開中（一部追加料金）。',
    photoTip: '外観は南側からの全景がベスト。内部はアーチ越しに中央アリーナを撮影。夕方の柔らかい光の中で石材が黄金色に輝く。',
    trivia: '正式名称は「フラウィウスの円形闘技場」。「コロッセオ」という名称は近くにあった皇帝ネロの巨大黄金像「コロッスス」に由来するとも言われる。',
    mapsUrl: 'https://maps.google.com/?q=Colosseum+Rome+Italy',
    officialUrl: 'https://www.colosseo.it/'
  },
  {
    id: 'forum',
    name: 'フォロ・ロマーノ',
    nameEn: 'Roman Forum',
    city: 'rome', day: 7, emoji: '🏛',
    rating: 5,
    hours: '9:00〜19:00（コロッセオ共通券）',
    ticket: 'コロッセオ共通券に含む',
    ticketType: 'preorder',
    duration: '1時間〜1時間30分',
    bestTime: '午前中（日差しが遺跡に映える）',
    desc: '古代ローマの政治・宗教・商業の中心地。カエサル神殿、凱旋門、神殿跡など2,000年の歴史を刻む遺跡が広がる。カエサルが暗殺された後、この広場で行われた葬儀でアントニウスの演説が歴史を変えた。',
    photoTip: 'カピトリーノの丘からフォロ全景を俯瞰する眺めが圧巻。黄金時間帯（夕方）の光が遺跡に映える。',
    trivia: 'カエサル暗殺後の葬儀がこの広場で行われ、市民が自然発生的に花を供えた場所は現在も「燃やされた場所」として花が絶えない。',
    mapsUrl: 'https://maps.google.com/?q=Roman+Forum+Rome+Italy',
    officialUrl: 'https://www.colosseo.it/'
  },
  {
    id: 'palatine',
    name: 'パラティーノの丘',
    nameEn: 'Palatine Hill',
    city: 'rome', day: 7, emoji: '🌿',
    rating: 4,
    hours: '9:00〜19:00（コロッセオ共通券）',
    ticket: 'コロッセオ共通券に含む',
    ticketType: 'preorder',
    duration: '45〜60分',
    bestTime: '午前中（コロッセオ後に続けて訪問）',
    desc: 'ローマ建国の英雄ロムルスとレムスが狼に育てられたとされる伝説の地。歴代皇帝の宮殿跡が残り、フォロ・ロマーノを見下ろす眺望が素晴らしい。緑豊かな庭園も美しい。',
    photoTip: '丘の縁からフォロ・ロマーノを見下ろす構図。緑越しに古代遺跡を撮影すると奥行きが出る。',
    trivia: '英語の「Palace（宮殿）」という単語は、この丘の名前「Palatine（パラティーノ）」から来ている。',
    mapsUrl: 'https://maps.google.com/?q=Palatine+Hill+Rome+Italy',
    officialUrl: 'https://www.colosseo.it/'
  },
  {
    id: 'vatican',
    name: 'ヴァチカン美術館',
    nameEn: 'Vatican Museums',
    city: 'rome', day: 7, emoji: '🎨',
    rating: 5,
    hours: '月〜土 8:00〜20:00（最終入場 18:00）',
    ticket: '€20＋オンライン手数料 €5（公式サイト予約推奨）',
    ticketType: 'preorder',
    duration: '2〜3時間',
    bestTime: '午後 14:00〜（比較的空いている）',
    desc: '世界最大級の美術コレクションを誇るバチカン市国の美術館。ミケランジェロが1508〜1512年の4年間で完成させた「システィーナ礼拝堂天井画」は人類史上最高傑作のひとつ。',
    photoTip: 'ピーニャの中庭と360度廊下が美しい。システィーナ礼拝堂内は撮影禁止のため、記憶に刻むことも旅の醍醐味。',
    trivia: 'システィーナ礼拝堂の天井画を描く際、ミケランジェロは首を上に傾け続け、以後まっすぐ首を上げることが困難になったと伝えられている。',
    mapsUrl: 'https://maps.google.com/?q=Vatican+Museums+Vatican+City',
    officialUrl: 'https://www.museivaticani.va/'
  },
  {
    id: 'stpeters',
    name: 'サン・ピエトロ広場',
    nameEn: "St. Peter's Square",
    city: 'rome', day: 7, emoji: '⛪',
    rating: 5,
    hours: '7:00〜19:00',
    ticket: '無料',
    ticketType: 'free',
    duration: '30〜60分',
    bestTime: '夕方（日差しが大聖堂を照らす）',
    desc: 'ベルニーニが設計した284本の柱廊に囲まれた壮大な広場（1667年完成）。サン・ピエトロ大聖堂のクーポラからはローマを一望できる（有料）。「抱擁する腕」をイメージした楕円形の設計がベルニーニの真骨頂。',
    photoTip: '広場中央から大聖堂を正面に。列柱廊越しに空を入れた構図が美しい。早朝のミサ前が最も静か。',
    trivia: '広場を囲む284本の柱は「抱擁する腕」のイメージでベルニーニが設計。この列柱廊の中に立つと、どの位置からも全ての柱の列が1本に見える「不思議な光学効果」がある。',
    mapsUrl: "https://maps.google.com/?q=St+Peter%27s+Square+Vatican+City",
    officialUrl: 'https://www.vatican.va/'
  },
  /* ----- ROME — Day 8 ----- */
  {
    id: 'santangelo',
    name: 'サンタンジェロ城',
    nameEn: "Castel Sant'Angelo",
    city: 'rome', day: 8, emoji: '🏰',
    rating: 5,
    hours: '火〜日 9:00〜19:30（月曜休）',
    ticket: '€15',
    ticketType: 'required',
    duration: '1時間〜1時間30分（入場する場合）',
    bestTime: '夕方〜夜（ライトアップ最高）',
    desc: 'ハドリアヌス帝の霊廟として135年に建設。テヴェレ川の畔に立ち、屋上テラスからローマ全体を360度一望できる。夏季夜間ライトアップ（21:00〜）や、バチカンとの秘密通路（パッセット）も有名。',
    photoTip: 'サンタンジェロ橋の天使像越しに城を撮影。日没後のオレンジのライトアップが最も美しい撮影タイム。',
    trivia: '中世には法王の避難要塞として使用され、バチカン宮殿との間に秘密の地下通路「パッセット」が現存する。法王クレメンス7世がここに逃げ込んだ記録がある。',
    mapsUrl: "https://maps.google.com/?q=Castel+Sant+Angelo+Rome+Italy",
    officialUrl: 'https://www.museocastelsantangelo.beniculturali.it/'
  },
  {
    id: 'bridge',
    name: 'サンタンジェロ橋',
    nameEn: "Ponte Sant'Angelo",
    city: 'rome', day: 8, emoji: '🌉',
    rating: 4,
    hours: '24時間',
    ticket: '無料',
    ticketType: 'free',
    duration: '15〜20分',
    bestTime: '夕暮れ〜夜（ライトアップ）',
    desc: 'テヴェレ川に架かるベルニーニが欄干デザインを手がけた橋（134年建設、17世紀改装）。10体の天使像が橋を飾り、それぞれ異なるキリストの受難の道具を持っている。夜のライトアップが最高。',
    photoTip: '橋上から川とサンタンジェロ城を一緒に収める。夕暮れの光が川面に反射する時間帯が最高の撮影タイム。',
    trivia: 'ベルニーニ本人は2体の天使像しか制作せず（うち1体は現在ボルゲーゼ美術館に所蔵）、残り8体は弟子による作。10体全て違うキリストの受難の象徴を手に持つ。',
    mapsUrl: "https://maps.google.com/?q=Ponte+Sant+Angelo+Rome+Italy",
    officialUrl: null
  },
];

/* ============================================================
   ROUTES
   ============================================================ */
const ROUTES = {
  swiss: [
    {
      title: 'Day 3 ルート — グリンデルワルト & ラウターブルンネン',
      day: '7/6(月)',
      stops: [
        { icon: '🚉', name: 'インターラーケン東駅 出発', info: '09:00', mapsUrl: 'https://maps.google.com/?q=Interlaken+Ost+Station+Switzerland' },
        { walk: '電車で約30分（BOB 鉄道）', walkIcon: '🚆' },
        { icon: '⛰', name: 'グリンデルワルト', info: '09:30〜12:00 アイガー北壁の麓の山岳村を観光', mapsUrl: 'https://maps.google.com/?q=Grindelwald+Switzerland' },
        { walk: '電車で約30〜40分（乗換あり）', walkIcon: '🚆' },
        { icon: '💦', name: 'ラウターブルンネン', info: '13:30〜17:00 72の滝の谷を散策', mapsUrl: 'https://maps.google.com/?q=Lauterbrunnen+Switzerland' },
        { walk: '電車で約20分（BLS 鉄道）', walkIcon: '🚆' },
        { icon: '🏘', name: 'インターラーケン 帰着', info: '17:30 頃', mapsUrl: 'https://maps.google.com/?q=Interlaken+Switzerland' },
      ]
    },
    {
      title: 'Day 4 ルート — ユングフラウヨッホ',
      day: '7/7(火)',
      stops: [
        { icon: '🚉', name: 'インターラーケン東駅 出発', info: '08:30（天候確認後）', mapsUrl: 'https://maps.google.com/?q=Interlaken+Ost+Station+Switzerland' },
        { walk: 'ユングフラウ鉄道（登山）約 2時間', walkIcon: '🚞' },
        { icon: '❄️', name: 'ユングフラウヨッホ', info: '10:00〜15:00 標高3,454m 氷河 & 展望台を満喫', mapsUrl: 'https://maps.google.com/?q=Jungfraujoch+Switzerland' },
        { walk: 'ユングフラウ鉄道（下山）約 2時間', walkIcon: '🚞' },
        { icon: '🏘', name: 'インターラーケン 帰着', info: '17:30 頃', mapsUrl: 'https://maps.google.com/?q=Interlaken+Switzerland' },
      ]
    }
  ],
  venice: [
    {
      title: 'Day 5 ルート — ベネチア到着 & 夕方散策',
      day: '7/8(水)',
      stops: [
        { icon: '🚉', name: 'ベネチア・サンタ・ルチア駅 到着', info: '15:00 頃', mapsUrl: 'https://maps.google.com/?q=Venezia+Santa+Lucia+Station' },
        { walk: '徒歩 約25分 or ヴァポレット（水上バス）', walkIcon: '🚶' },
        { icon: '🌉', name: 'リアルト橋', info: '夕方 16:30〜 散策', mapsUrl: 'https://maps.google.com/?q=Rialto+Bridge+Venice' },
        { walk: '徒歩 約15分', walkIcon: '🚶' },
        { icon: '🎭', name: 'サンマルコ広場', info: '夜景 18:00〜', mapsUrl: "https://maps.google.com/?q=St.+Mark%27s+Square+Venice" },
        { walk: '徒歩 約1分', walkIcon: '🚶' },
        { icon: '🦞', name: '夕食（周辺レストラン）', info: '19:30〜', mapsUrl: 'https://maps.google.com/?q=San+Marco+restaurant+Venice' },
      ]
    }
  ],
  rome: [
    {
      title: 'Day 6 ルート — ローマ夜景散策',
      day: '7/9(木) 夜',
      stops: [
        { icon: '🏨', name: 'ホテル出発', info: '17:30', mapsUrl: null },
        { walk: '徒歩 約10分', walkIcon: '🚶' },
        { icon: '🌊', name: 'ナヴォーナ広場', info: '17:30〜18:30 四大河の噴水ライトアップ', mapsUrl: 'https://maps.google.com/?q=Piazza+Navona+Rome' },
        { walk: '徒歩 約5分', walkIcon: '🚶' },
        { icon: '🏛', name: 'パンテオン（外観）', info: '18:30〜19:00 2,000年前の神殿のライトアップ', mapsUrl: 'https://maps.google.com/?q=Pantheon+Rome' },
        { walk: '徒歩 約10分', walkIcon: '🚶' },
        { icon: '⛲', name: 'トレビの泉', info: '19:15〜20:00 コインで再会を誓う', mapsUrl: 'https://maps.google.com/?q=Trevi+Fountain+Rome' },
        { walk: '徒歩 約10分', walkIcon: '🚶' },
        { icon: '🏛', name: 'スペイン広場', info: '20:00〜20:30 135段の大階段ライトアップ', mapsUrl: 'https://maps.google.com/?q=Spanish+Steps+Rome' },
        { walk: '徒歩 約5分', walkIcon: '🚶' },
        { icon: '🍝', name: '夕食（周辺リストランテ）', info: '21:00〜', mapsUrl: 'https://maps.google.com/?q=restaurant+near+Spanish+Steps+Rome' },
      ]
    },
    {
      title: 'Day 7 ルート — 古代遺跡 & バチカン',
      day: '7/10(金)',
      stops: [
        { icon: '🏟', name: 'コロッセオ', info: '09:15 入場（事前予約済）', mapsUrl: 'https://maps.google.com/?q=Colosseum+Rome' },
        { walk: '徒歩 約2分', walkIcon: '🚶' },
        { icon: '🏛', name: 'フォロ・ロマーノ', info: '10:45〜12:00 共通券で入場', mapsUrl: 'https://maps.google.com/?q=Roman+Forum+Rome' },
        { walk: '徒歩 約5分', walkIcon: '🚶' },
        { icon: '🌿', name: 'パラティーノの丘', info: '12:00〜13:00 共通券で入場', mapsUrl: 'https://maps.google.com/?q=Palatine+Hill+Rome' },
        { walk: 'バス or 地下鉄 A線 約30分', walkIcon: '🚌' },
        { icon: '🎨', name: 'ヴァチカン美術館', info: '16:00〜17:30 予約済（14:00-16:00ランダム枠）', mapsUrl: 'https://maps.google.com/?q=Vatican+Museums' },
        { walk: '徒歩 約10分', walkIcon: '🚶' },
        { icon: '⛪', name: 'サン・ピエトロ広場', info: '夕方 夜景散策', mapsUrl: "https://maps.google.com/?q=St+Peter%27s+Square" },
      ]
    },
    {
      title: 'Day 8 ルート — 最終日散策',
      day: '7/11(土)',
      stops: [
        { icon: '🌉', name: 'サンタンジェロ橋', info: '09:30 朝の散策', mapsUrl: "https://maps.google.com/?q=Ponte+Sant+Angelo+Rome" },
        { walk: '徒歩 約1分', walkIcon: '🚶' },
        { icon: '🏰', name: 'サンタンジェロ城 周辺', info: '09:30〜10:30（外観散策 or 入場）', mapsUrl: "https://maps.google.com/?q=Castel+Sant+Angelo+Rome" },
        { walk: '徒歩 約20分', walkIcon: '🚶' },
        { icon: '🛍', name: 'ショッピング（ヴィア・コンドッティ）', info: '11:00〜12:30 高級ブランド街 & お土産', mapsUrl: 'https://maps.google.com/?q=Via+Condotti+Rome' },
        { walk: 'タクシー or Leonardo Express', walkIcon: '🚕' },
        { icon: '✈️', name: 'フィウミチーノ空港（FCO）', info: '14:30〜 搭乗手続き', mapsUrl: 'https://maps.google.com/?q=Rome+Fiumicino+Airport' },
      ]
    }
  ]
};

/* ============================================================
   GALLERY
   ============================================================ */
const GALLERY = {
  swiss: [
    { name: 'インターラーケン', nameEn: 'Interlaken', emoji: '🏔', bg: 'swiss-bg' },
    { name: 'グリンデルワルト', nameEn: 'Grindelwald', emoji: '⛰', bg: 'swiss-bg' },
    { name: 'ラウターブルンネン', nameEn: 'Lauterbrunnen', emoji: '💦', bg: 'swiss-bg' },
    { name: 'ユングフラウヨッホ', nameEn: 'Jungfraujoch', emoji: '❄️', bg: 'swiss-bg' },
    { name: 'アルプスの絶景', nameEn: 'Alpine Panorama', emoji: '🌄', bg: 'swiss-bg' },
    { name: 'スイスの朝', nameEn: 'Swiss Morning', emoji: '🌅', bg: 'swiss-bg' },
  ],
  venice: [
    { name: 'リアルト橋', nameEn: 'Rialto Bridge', emoji: '🌉', bg: 'venice-bg' },
    { name: 'サンマルコ広場', nameEn: "St. Mark's Square", emoji: '🎭', bg: 'venice-bg' },
    { name: 'サンマルコ寺院', nameEn: "St. Mark's Basilica", emoji: '⛪', bg: 'venice-bg' },
    { name: 'ゴンドラ', nameEn: 'Gondola', emoji: '🛶', bg: 'venice-bg' },
    { name: '大運河', nameEn: 'Grand Canal', emoji: '🌊', bg: 'venice-bg' },
    { name: '夜のベネチア', nameEn: 'Venice at Night', emoji: '🌙', bg: 'venice-bg' },
  ],
  rome: [
    { name: 'コロッセオ', nameEn: 'Colosseum', emoji: '🏟', bg: 'rome-bg' },
    { name: 'トレビの泉', nameEn: 'Trevi Fountain', emoji: '⛲', bg: 'rome-bg' },
    { name: 'パンテオン', nameEn: 'Pantheon', emoji: '🏛', bg: 'rome-bg' },
    { name: 'サンタンジェロ城', nameEn: "Castel Sant'Angelo", emoji: '🏰', bg: 'rome-bg' },
    { name: 'ナヴォーナ広場', nameEn: 'Piazza Navona', emoji: '🌊', bg: 'rome-bg' },
    { name: 'スペイン広場', nameEn: 'Spanish Steps', emoji: '🌅', bg: 'rome-bg' },
    { name: 'ヴァチカン', nameEn: 'Vatican', emoji: '🎨', bg: 'rome-bg' },
    { name: 'サン・ピエトロ広場', nameEn: "St. Peter's Square", emoji: '⛪', bg: 'rome-bg' },
  ]
};

/* ============================================================
   UTILITIES
   ============================================================ */
function toDateMidnight(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function getTodayMidnight() {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}
function getCurrentTripDay() {
  const today = getTodayMidnight();
  return DAYS.find(d => toDateMidnight(d.date).getTime() === today.getTime()) || null;
}
function getDaysUntilTrip() {
  const today = getTodayMidnight();
  const start = toDateMidnight(DAYS[0].date);
  return Math.ceil((start - today) / 86400000);
}
function starHtml(n) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star ${i < n ? 'filled' : 'empty'}">${i < n ? '★' : '☆'}</span>`
  ).join('');
}
function cityBadgeClass(city) {
  return { rome: 'badge-rome', venice: 'badge-venice', swiss: 'badge-swiss', transit: 'badge-transit' }[city] || 'badge-transit';
}

/* ============================================================
   HERO COUNTDOWN
   ============================================================ */
function initHeroCount() {
  const daysUntil  = getDaysUntilTrip();
  const currentDay = getCurrentTripDay();
  const label = document.getElementById('heroCountLabel');
  const value = document.getElementById('heroCountValue');
  const sub   = document.getElementById('heroCountSub');

  if (currentDay) {
    label.textContent = '旅行';
    value.textContent = currentDay.num;
    sub.textContent   = '日目';
  } else if (daysUntil > 0) {
    label.textContent = '出発まで';
    value.textContent = daysUntil;
    sub.textContent   = '日';
  } else {
    label.textContent = '旅の思い出';
    value.textContent = '🇨🇭';
    sub.textContent   = '楽しかった！';
  }
}

/* ============================================================
   OVERVIEW
   ============================================================ */
function renderOverview() {
  const today     = getTodayMidnight();
  const container = document.getElementById('overviewContent');
  if (!container) return;

  const cityLabel = { rome: 'ローマ', venice: 'ベネチア', swiss: 'スイス', transit: '移動日' };

  container.innerHTML = `<div class="overview-timeline fade-up">` +
    DAYS.map((day, i) => {
      const dayDate   = toDateMidnight(day.date);
      const isCurrent = dayDate.getTime() === today.getTime();
      const isPast    = dayDate < today;
      const cls       = isCurrent ? 'current' : isPast ? 'past' : '';
      const badge     = cityBadgeClass(day.city);
      const todayMark = isCurrent ? `<span class="ov-badge badge-today">TODAY</span>` : '';

      return `
        <div class="ov-item ${cls}" style="animation-delay:${i * 0.07}s">
          <div class="ov-dot">${day.num}</div>
          <div class="ov-card">
            <span class="ov-badge ${badge}">Day ${day.num} · ${cityLabel[day.city] || ''}</span>
            ${todayMark}
            <p class="ov-date">${day.label}</p>
            <p class="ov-title">${day.title}</p>
            <div class="ov-tags">
              ${day.tags.map(t => `<span class="ov-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>`;
    }).join('') +
  `</div>`;
}

/* ============================================================
   SCHEDULE TABS
   ============================================================ */
let activeDay = 1;

function renderScheduleTabs() {
  const today  = getTodayMidnight();
  const tabsEl = document.getElementById('scheduleTabs');
  if (!tabsEl) return;

  const curr = getCurrentTripDay();
  if (curr) activeDay = curr.num;

  const cityLabels = { rome: '🏛 ローマ', venice: '🎭 ベネチア', swiss: '🏔 スイス', transit: '✈️ 移動' };

  tabsEl.className = 'day-tabs';
  tabsEl.innerHTML = DAYS.map(day => {
    const isCurrent = toDateMidnight(day.date).getTime() === today.getTime();
    return `
      <button class="day-tab${activeDay === day.num ? ' active' : ''}" data-day="${day.num}" aria-selected="${activeDay === day.num}">
        <div class="tab-day">Day ${day.num}${isCurrent ? ' · TODAY' : ''}</div>
        <div class="tab-date">${day.label}</div>
        <div class="tab-city">${cityLabels[day.city] || ''}</div>
      </button>`;
  }).join('');

  tabsEl.querySelectorAll('.day-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeDay = Number(btn.dataset.day);
      tabsEl.querySelectorAll('.day-tab').forEach(b => {
        b.classList.toggle('active', Number(b.dataset.day) === activeDay);
        b.setAttribute('aria-selected', b.classList.contains('active'));
      });
      renderScheduleContent();
    });
  });
}

function renderScheduleContent() {
  const el  = document.getElementById('scheduleContent');
  if (!el) return;
  const day = DAYS.find(d => d.num === activeDay);
  if (!day) return;

  const periodIcons = {
    '午前': '🌅', '午前 — 到着': '🌅', '午前 — 移動': '✈️', '午前 — 古代ローマ': '🏛',
    '午後': '☀️', '午後 — 到着': '🚉', '午後 — バチカン': '⛪', '午後 — 帰国': '✈️',
    '昼': '🍽', '夕方〜夜': '🌆', '夕食': '🍷', '夜': '🌙',
    '夜 — 夜景散策': '🌃', '到着': '🛬', '移動': '✈️',
  };

  const periods = Object.keys(day.schedule);
  const periodsHtml = periods.map(period => {
    const events = day.schedule[period];
    const icon   = periodIcons[period] || '📌';
    return `
      <div class="sched-group">
        <p class="sched-period-label">${icon} ${period}</p>
        ${events.map(ev => `
          <div class="sched-item">
            <span class="sched-time">${ev.time}</span>
            <span class="sched-icon">${ev.icon}</span>
            <div class="sched-body">
              <p class="sched-name">${ev.name}</p>
              ${ev.desc ? `<p class="sched-desc">${ev.desc}</p>` : ''}
              ${ev.note ? `<span class="sched-note">${ev.note}</span>` : ''}
            </div>
          </div>`).join('')}
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="day-schedule">
      <div class="day-header">
        <p class="day-header-label">Day ${day.num}</p>
        <h3 class="day-header-title">${day.title}</h3>
        <p class="day-header-sub">${day.label}</p>
      </div>
      ${periodsHtml}
    </div>`;
}

/* ============================================================
   SPOTS FILTER + GRID
   ============================================================ */
let activeFilter = 'all';

function renderSpotsFilter() {
  const el = document.getElementById('spotsFilter');
  if (!el) return;

  const filters = [
    { key: 'all',    label: 'すべて' },
    { key: 'swiss',  label: '🏔 スイス' },
    { key: 'venice', label: '🎭 ベネチア' },
    { key: 'rome',   label: '🏛 ローマ' },
  ];

  el.className = 'filter-tabs';
  el.innerHTML = filters.map(f => `
    <button class="filter-tab${activeFilter === f.key ? ' active' : ''}" data-filter="${f.key}" role="tab" aria-selected="${activeFilter === f.key}">
      ${f.label}
    </button>`).join('');

  el.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      el.querySelectorAll('.filter-tab').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === activeFilter);
        b.setAttribute('aria-selected', b.classList.contains('active'));
      });
      filterSpots();
    });
  });
}

function renderSpotsGrid() {
  const el = document.getElementById('spotsGrid');
  if (!el) return;

  el.className = 'spots-grid';
  el.innerHTML = SPOTS.map(spot => {
    const bg = `${spot.city}-bg`;
    const ticketBadge = spot.ticketType === 'free'
      ? `<span class="spot-ticket-badge ticket-free">🎟 入場無料</span>`
      : spot.ticketType === 'preorder'
        ? `<span class="spot-ticket-badge ticket-preorder">📋 事前予約必須</span>`
        : `<span class="spot-ticket-badge ticket-required">🎫 チケット必要</span>`;

    const officialBtn = spot.officialUrl
      ? `<a href="${spot.officialUrl}" target="_blank" rel="noopener" class="btn btn-official">🔗 公式</a>`
      : '';

    return `
      <div class="spot-card fade-up" data-city="${spot.city}" id="spot-${spot.id}">
        <div class="spot-header ${bg}">
          <span class="spot-emoji" aria-hidden="true">${spot.emoji}</span>
          <span class="spot-day-badge">Day ${spot.day}</span>
          <p class="spot-name-en">${spot.nameEn}</p>
          <h3 class="spot-name">${spot.name}</h3>
        </div>
        <div class="spot-body">
          <div class="spot-rating" aria-label="評価 ${spot.rating}/5">${starHtml(spot.rating)}</div>
          <p class="spot-desc">${spot.desc}</p>

          <div class="spot-info-grid">
            <div class="info-item">
              <span class="info-icon">🕐</span>
              <div>
                <p class="info-label">営業時間</p>
                <p class="info-value">${spot.hours}</p>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">⏱</span>
              <div>
                <p class="info-label">所要時間</p>
                <p class="info-value">${spot.duration}</p>
              </div>
            </div>
            <div class="info-item full-width">
              <span class="info-icon">💶</span>
              <div>
                <p class="info-label">料金</p>
                <p class="info-value">${spot.ticket}</p>
              </div>
            </div>
            ${spot.bestTime ? `
            <div class="info-item full-width">
              <span class="info-icon">⏰</span>
              <div>
                <p class="info-label">おすすめ時間帯</p>
                <p class="info-value">${spot.bestTime}</p>
              </div>
            </div>` : ''}
          </div>

          ${ticketBadge}

          <div class="spot-photo-tip">
            <span class="photo-icon">📷</span>
            <p>${spot.photoTip}</p>
          </div>

          ${spot.trivia ? `
          <div class="spot-photo-tip" style="background:linear-gradient(135deg,rgba(255,193,7,.09),rgba(255,193,7,.04));border-color:rgba(255,193,7,.3)">
            <span class="photo-icon">💡</span>
            <p>${spot.trivia}</p>
          </div>` : ''}

          <div class="spot-actions">
            <a href="${spot.mapsUrl}" target="_blank" rel="noopener" class="btn btn-map">📍 Maps</a>
            ${officialBtn}
          </div>
        </div>
      </div>`;
  }).join('');
}

function filterSpots() {
  document.querySelectorAll('#spotsGrid .spot-card').forEach(card => {
    card.classList.toggle('hidden', activeFilter !== 'all' && card.dataset.city !== activeFilter);
  });
}

/* ============================================================
   MAPS / ROUTES  (3 tabs: swiss / venice / rome)
   ============================================================ */
let activeMapsTab = 'swiss';

function renderMapsTabs() {
  const el = document.getElementById('mapsTabs');
  if (!el) return;

  el.className = 'maps-tabs filter-tabs';
  el.innerHTML = [
    { key: 'swiss',  label: '🏔 スイス' },
    { key: 'venice', label: '🎭 ベネチア' },
    { key: 'rome',   label: '🏛 ローマ' },
  ].map(t => `
    <button class="filter-tab${activeMapsTab === t.key ? ' active' : ''}" data-map="${t.key}">
      ${t.label}
    </button>`).join('');

  el.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeMapsTab = btn.dataset.map;
      el.querySelectorAll('.filter-tab').forEach(b =>
        b.classList.toggle('active', b.dataset.map === activeMapsTab));
      renderMapsContent();
    });
  });
}

function renderMapsContent() {
  const el = document.getElementById('mapsContent');
  if (!el) return;

  const routes = ROUTES[activeMapsTab] || [];
  if (!routes.length) {
    el.innerHTML = `<div class="empty-state"><p class="empty-state-icon">🗺</p><p>後日更新予定</p></div>`;
    return;
  }

  el.innerHTML = `<div class="route-container">` +
    routes.map(route => `
      <div class="route-section fade-up">
        <p class="route-section-title">${route.title}
          <span style="color:var(--text-3);font-weight:400;font-size:12px">${route.day}</span>
        </p>
        <div class="route-track">
          ${route.stops.map(stop => {
            if (stop.walk) {
              return `
                <div class="route-walk">
                  <div class="route-walk-line"></div>
                  <span class="route-walk-label">${stop.walkIcon || '🚶'} ${stop.walk}</span>
                </div>`;
            }
            return `
              <div class="route-stop">
                <div class="route-dot"></div>
                <span class="route-stop-icon">${stop.icon}</span>
                <div class="route-stop-body">
                  <p class="route-stop-name">${stop.name}</p>
                  <p class="route-stop-info">${stop.info}</p>
                  ${stop.mapsUrl ? `<a href="${stop.mapsUrl}" target="_blank" rel="noopener" class="route-stop-link">📍 地図で見る →</a>` : ''}
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>`).join('') +
  `</div>`;
}

/* ============================================================
   GALLERY  (default: swiss)
   ============================================================ */
let activeGalleryTab = 'swiss';

function renderGalleryTabs() {
  const el = document.getElementById('galleryTabs');
  if (!el) return;

  el.className = 'gallery-tabs filter-tabs';
  el.innerHTML = [
    { key: 'swiss',  label: '🏔 スイス' },
    { key: 'venice', label: '🎭 ベネチア' },
    { key: 'rome',   label: '🏛 ローマ' },
  ].map(t => `
    <button class="filter-tab${activeGalleryTab === t.key ? ' active' : ''}" data-gallery="${t.key}">
      ${t.label}
    </button>`).join('');

  el.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeGalleryTab = btn.dataset.gallery;
      el.querySelectorAll('.filter-tab').forEach(b =>
        b.classList.toggle('active', b.dataset.gallery === activeGalleryTab));
      renderGalleryGrid();
    });
  });
}

function renderGalleryGrid() {
  const el    = document.getElementById('galleryGrid');
  if (!el) return;
  const items = GALLERY[activeGalleryTab] || [];

  el.className = 'gallery-grid';
  el.innerHTML = items.map(item => `
    <div class="gallery-item ${item.bg} fade-up">
      <span class="gallery-item-emoji" aria-hidden="true">${item.emoji}</span>
      <div class="gallery-overlay">
        <p class="gallery-name">${item.name}</p>
        <p class="gallery-name-en">${item.nameEn}</p>
      </div>
    </div>`).join('');
}

/* ============================================================
   HERO SLIDESHOW
   ============================================================ */
function initHeroSlideshow() {
  const Q = '?w=1920&q=85&fit=crop&crop=center';
  const SLIDE_IMAGES = [
    { cls: 'hero-slide--swiss-alps', src: 'https://images.unsplash.com/photo-1628415491140-4d1108dc1045' + Q },
    { cls: 'hero-slide--interlaken', src: 'https://images.unsplash.com/photo-1528493366314-e317cd98dd52' + Q },
    { cls: 'hero-slide--jungfrau',   src: 'https://images.unsplash.com/photo-1589371917123-cb9ccf53a931' + Q },
    { cls: 'hero-slide--venice',     src: 'https://images.unsplash.com/photo-1523906921802-b5d2d899e93b' + Q },
    { cls: 'hero-slide--rome',       src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5' + Q   },
    { cls: 'hero-slide--colosseum',  src: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294' + Q   },
  ];

  SLIDE_IMAGES.forEach(({ cls, src }) => {
    const slide = document.querySelector(`.${cls}`);
    if (!slide) return;
    const img = new Image();
    img.onload = () => { slide.style.backgroundImage = `url('${src}')`; };
    img.src = src;
  });

  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;

  let current = 0;
  slides[0].classList.add('active');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5500);
}

/* ============================================================
   HEADER COMPACT ON SCROLL
   ============================================================ */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('compact', window.scrollY > 80);
  }, { passive: true });
}

/* ============================================================
   BOTTOM NAV — ACTIVE SECTION
   ============================================================ */
function initBottomNav() {
  const items  = document.querySelectorAll('.bnav-item');
  const navMap = {
    home: 'home', overview: 'overview', schedule: 'overview',
    spots: 'spots', maps: 'maps', gallery: 'gallery'
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const navTarget = navMap[entry.target.id] || entry.target.id;
        items.forEach(item =>
          item.classList.toggle('active', item.dataset.section === navTarget));
      }
    });
  }, { threshold: 0.35, rootMargin: '-10% 0px -50% 0px' });

  ['home','overview','schedule','spots','maps','gallery'].forEach(id => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

/* ============================================================
   FADE-UP ANIMATIONS
   ============================================================ */
function makeFadeObserver() {
  return new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target._fadeIO && entry.target._fadeIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
}

function observeFadeUps(root) {
  const io = makeFadeObserver();
  (root || document).querySelectorAll('.fade-up:not(.visible)').forEach(el => {
    el._fadeIO = io;
    io.observe(el);
  });
}

/* ============================================================
   SMOOTH SCROLL (header offset)
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = document.getElementById('header')?.offsetHeight || 60;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - headerH, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeroCount();

  renderOverview();
  renderScheduleTabs();
  renderScheduleContent();
  renderSpotsFilter();
  renderSpotsGrid();
  renderMapsTabs();
  renderMapsContent();
  renderGalleryTabs();
  renderGalleryGrid();

  initHeroSlideshow();
  initHeader();
  initBottomNav();
  initSmoothScroll();

  requestAnimationFrame(() => {
    observeFadeUps(document);

    ['overviewContent','scheduleContent','spotsGrid','mapsContent','galleryGrid'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      observeFadeUps(el);
      new MutationObserver(() => observeFadeUps(el)).observe(el, { childList: true, subtree: true });
    });
  });
});
