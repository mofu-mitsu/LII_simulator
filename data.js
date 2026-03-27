// data.js

// シチュエーションデータ
const stages =[
        {
            id: "invite",
            title: "突発的な誘いへの対応",
            sitTitle: "友人からの突然の誘い",
            sitDesc: "「今日空いてる？ちょっと集まらない？」とLINEが来ました。特に予定はありませんが、気乗りしません。",
            thoughts:[
                { text: "集まったところで何するんだろう？", icon: "fa-solid fa-circle-question" },
                { text: "行ったとしたら帰ってくるの何時になる？", icon: "fa-solid fa-clock" },
                { text: "せっかく今日予定ない日なのにわざわざ外出して消耗するメリットなくない？", icon: "fa-solid fa-battery-quarter" },
                { text: "普段そもそも誘われないのに誘われたってことは、行くのが『社会的な正解』か？", icon: "fa-solid fa-scale-balanced" },
                { text: "ここで断ったら、今後二度と誘われなくなるリスクがあるか？", icon: "fa-solid fa-triangle-exclamation" },
                { text: "わざわざ出かけるのもめんどくさいな、怠い。", icon: "fa-solid fa-face-tired" },
                { text: "なんで今日なんだろう？前もって連絡してくれればよかったのに。", icon: "fa-solid fa-calendar-xmark" },
                { text: "行くメリットの明確な提示がない。", icon: "fa-solid fa-scale-unbalanced" },
                { text: "嘘の理由を作って断るのもエネルギーがいる。", icon: "fa-solid fa-brain" }
            ]
        },
        {
            id: "subsc",
            title: "サブスク課金の是非",
            sitTitle: "便利ツールのサブスク登録",
            sitDesc: "月額500円。あれば便利ですが、なくてもなんとかなります。1週間の無料体験が今日で終わります。",
            thoughts:[
                { text: "これ本当に必要？使用頻度を計算しよう。", icon: "fa-solid fa-calculator" },
                { text: "代替の無料ツールが絶対どこかにあるはず。", icon: "fa-solid fa-magnifying-glass" },
                { text: "探す時間を時給換算したら500円払った方が合理的か？", icon: "fa-solid fa-coins" },
                { text: "解約手続きの導線が面倒なサイトだったら最悪だ。", icon: "fa-solid fa-file-signature" },
                { text: "他に同じ機能が使えるサブスクがないか探してみよう、無料体験があるかも。", icon: "fa-solid fa-magnifying-glass" },
                { text: "もし課金するとしたら、他に同じ機能のあるサブスクと値段比べるべきだ。", icon: "fa-solid fa-code-compare" },
                { text: "1ヶ月500円か…これ、割に合うのか？元取れる？", icon: "fa-solid fa-coins" },
                { text: "このまま登録し続けても飽きたりしないか？", icon: "fa-solid fa-face-rolling-eyes" },
                { text: "飽きて解約し忘れて放置でもしたらお金が無駄になる。", icon: "fa-solid fa-money-bill-transfer" },
                { text: "なくてもなんとかなるなら必要ないんじゃないか？", icon: "fa-solid fa-xmark" },
                { text: "解約手続きの導線が面倒なサイトだったら最悪だ。", icon: "fa-solid fa-file-signature" }
            ]
        },
        {
            id: "pc",
            title: "ガジェットの買い替え",
            sitTitle: "新しいPCの購入検討",
            sitDesc: "今のPCでも動きますが、少し動作が重いです。新しいPCを買うか迷っています。",
            thoughts:[
                { text: "スペックと価格の最適解が見つかるまで比較し続けなきゃ…", icon: "fa-solid fa-laptop-code" },
                { text: "でも来月新しいCPUが発表されるかもしれない(Ni)。", icon: "fa-solid fa-microchip" },
                { text: "いま買わない理由を探しているのか？", icon: "fa-solid fa-brain" },
                { text: "高いお金を出して買った後に後悔するリスクを排除したい。", icon: "fa-solid fa-shield-halved" },
                { text: "そろそろ替え時か？今までこのPC何年使ったっけ？", icon: "fa-solid fa-calendar-days" },
                { text: "このPC高かったんだよなぁ…修理に出してもダメか？", icon: "fa-solid fa-screwdriver-wrench" },
                { text: "アプリとかいらないデータ消しても重いのは変わらないか？", icon: "fa-solid fa-trash-can" },
                { text: "本当に今買うべきなのか？もう少し待てばもっといいPCが発売されるかも。", icon: "fa-solid fa-microchip" },
                { text: "今使っているPCを替えるのは躊躇する。高いコストがかかるし。", icon: "fa-solid fa-wallet" },
                { text: "データも全部ちゃんと移行できるか？リスクが多い。", icon: "fa-solid fa-hard-drive" },
                { text: "スペックと価格の最適解が見つかるまで比較し続けなきゃ…", icon: "fa-solid fa-laptop-code" }
            ]
        },
        {
            id: "line",
            title: "曖昧なLINEへの返信",
            sitTitle: "意図の読めないメッセージ",
            sitDesc: "知人から「あれってどうなった？」とだけLINEが来ました。主語がありません。",
            thoughts:[
                { text: "『あれ』が指す変数が多すぎる。どれだ？", icon: "fa-solid fa-network-wired" },
                { text: "質問で返すか？いや、察しが悪いと思われるか？", icon: "fa-solid fa-eye" },
                { text: "相手の直近の文脈を遡って推論しよう。", icon: "fa-solid fa-scroll" },
                { text: "絵文字を使うべきか？句読点だけでいいか？", icon: "fa-solid fa-face-smile" },
                { text: "『あれ』ってなんだ？正直に聞くべきか？", icon: "fa-solid fa-question" },
                { text: "いや、なんのことなのか一旦考えよう…", icon: "fa-solid fa-brain" },
                { text: "句読点もマルハラって言葉もあるくらいだし、つけない方がいいんじゃないか？", icon: "fa-solid fa-comment-slash" },
                { text: "今打ってる文章、おかしくないよな？", icon: "fa-solid fa-spell-check" },
                { text: "今このタイミングで返すべきなのか？", icon: "fa-solid fa-clock" },
                { text: "もし今返してすぐに既読がついたら…すぐ返さなきゃダメか？(消耗)", icon: "fa-solid fa-battery-empty" },
                { text: "相手の直近の文脈を遡って推論しよう。", icon: "fa-solid fa-scroll" }
            ]
        },
        {
        id: "agent",
        title: "就活エージェントの圧",
        sitTitle: "親から「就活エージェントに登録しろ」との指示",
        sitDesc: "親から就活エージェントに登録するよう言われました。登録ボタンを押すか迷っています。",
        thoughts:[
            { text: "登録したら速攻で電話がかかってくる未来が見える…", icon: "fa-solid fa-phone-volume" },
            { text: "『web面談の日程いつにしますか』メールが送られてくるに決まってる。", icon: "fa-solid fa-envelope-open-text" },
            { text: "web面談では『カメラオンにしてください』って強制されるんだろうな。", icon: "fa-solid fa-video" },
            { text: "面接週に4日とか詰め込まれて、圧についていけなくて詰む未来が見える。", icon: "fa-solid fa-skull-crossbones" },
            { text: "『面接練習もやりましょう！』とか言われるのダルすぎる。", icon: "fa-solid fa-people-arrows" },
            { text: "でも登録しないとまた親に何か言われるか…？", icon: "fa-solid fa-ear-listen" },
            { text: "登録した後のタスク増大とエネルギー消費が釣り合ってない。", icon: "fa-solid fa-scale-unbalanced" },
            { text: "就活エージェントは向こうに従わなくていいんだ！主導権を取れば…って上手くいくのか？", icon: "fa-solid fa-chess" },
            { text: "ついていけなくなったらブロックしちゃうかもな…", icon: "fa-solid fa-ban" },
            { text: "でも登録しないで自分で仕事見つけられるのか？", icon: "fa-solid fa-magnifying-glass-arrow-right" },
            { text: "登録するメリットとデメリットを整理しよう…", icon: "fa-solid fa-list-check" },
            { text: "親には『登録した』と伝えられるが、後に消耗する可能性大だな、億劫だ…", icon: "fa-solid fa-battery-quarter" },
            { text: "web履歴書だとか書かないといけないし、やる事が多すぎて気乗りしない。", icon: "fa-solid fa-file-invoice" },
            { text: "電話かかってくるだろうが、電話苦手なんだよなぁ…即答できないぞ。", icon: "fa-solid fa-phone-slash" },
            { text: "文章に書いた方が整理して伝えられるのに、なんでわざわざ電話かけてくるんだ？", icon: "fa-solid fa-keyboard" }
                ]
            },
            {
                title: "外出するか",
                sitTitle: "休日の過ごし方",
                sitDesc: "天気が良く、ずっと家にいるのも不健康な気がします。しかし外に出る明確な目的はありません。",
                thoughts:[
                    { text: "目的のない外出はリソースの無駄遣い。", icon: "fa-solid fa-trash-can" },
                    { text: "でも日光を浴びないとセロトニンが不足する。", icon: "fa-solid fa-sun" },
                    { text: "家の方が変数が少なくて安全(Se脆弱)。", icon: "fa-solid fa-house-chimney-crack" },
                    { text: "カフェで作業する？いや、混んでたらストレスだ。", icon: "fa-solid fa-mug-hot" },
                    { text: "考えてる間に夕方になりそう。", icon: "fa-solid fa-clock" },
                    { text: "外に出る理由がないなら出なくていいか…平日は外出てるんだし。", icon: "fa-solid fa-door-closed" },
                    { text: "でもいい天気なのにずっと家にいると親が不健康って言ってくるしなぁ…", icon: "fa-solid fa-cloud-sun" },
                    { text: "外出日和とはいえ、外に行って何するのさ？", icon: "fa-solid fa-person-walking-luggage" },
                    { text: "外出て買い物とかしたところで、ほんとに必要なものじゃないとお金の無駄になる。", icon: "fa-solid fa-cart-arrow-down" },
                    { text: "そもそも外に出たら知らない他人にあいさつされたり、会話リスクがあってめんどくさくないか？", icon: "fa-solid fa-people-arrows" },
                    { text: "親に外に出る理由を作れと言われたけど、外より家の方がよくないか？", icon: "fa-solid fa-house-user" }
                ]
            },
            {
                title: "投稿するか",
                sitTitle: "SNSへの考察投稿",
                sitDesc: "MBTIに関する非常に興味深い考察を思いつきました。長文です。",
                thoughts:[
                    { text: "投稿する意味ある？誰もここまで読まないのでは。", icon: "fa-solid fa-users-slash" },
                    { text: "論理の飛躍がないかもう一度推敲しなければ。", icon: "fa-solid fa-pen-nib" },
                    { text: "誤解されてクソリプが来るリスクがある。", icon: "fa-solid fa-bolt" },
                    { text: "自分の備忘録としてローカルに保存すれば十分だ。", icon: "fa-solid fa-folder-closed" },
                    { text: "でも誰かの知的好奇心を刺激する可能性(Ne)も…", icon: "fa-solid fa-lightbulb" },
                    { text: "MBTIのいい考察を思いついたけど、今投稿するタイミングだろうか？", icon: "fa-solid fa-stopwatch" },
                    { text: "前に投稿したのはいつだっけ？もっと間を空けるべきか？", icon: "fa-solid fa-calendar-day" },
                    { text: "これ、自分ではいいと思ったけど誰にも見られないまま終わるかも…そしたら投稿した意味は？", icon: "fa-solid fa-eye-slash" },
                    { text: "こんな長文読む人いるのかな？いるのなら、よっぽど物好きな気がする。", icon: "fa-solid fa-book-open-reader" },
                    { text: "この時間って見られるのかな？もう遅いから明日投稿すべき？", icon: "fa-solid fa-moon" },
                    { text: "そもそもこの考察正しいよな…？自分の持論が間違ってるのが何よりもダメージデカいぞ…", icon: "fa-solid fa-heart-crack" },
                    { text: "もし間違ってたら調べ直せばいいだけ…でも、今までの自分の知識が間違ってるってことになるのが何よりも…！", icon: "fa-solid fa-bomb" },
                    { text: "誤解されて広まる可能性もある、もう1度内容を見直しておくか。", icon: "fa-solid fa-magnifying-glass-chart" },
                    { text: "誤字脱字はないよな…？見出しの位置もおかしくないか？", icon: "fa-solid fa-spell-check" }
                ]
            },
            {
            id: "sympathy",
            title: "F型からの「愚痴」への最適解",
            sitTitle: "友人からのLINE「今日上司に理不尽に怒られてさ…マジ最悪😭」",
            sitDesc: "解決策を求めているのか、ただ同調してほしいのか不明な感情的メッセージが届きました。",
            thoughts:[
                { text: "ただ同調すればいいのか？それとも解決策を提示すべきか？", icon: "fa-solid fa-code-branch" },
                { text: "『わかる』と返した場合、何が『わかる』のか論理的根拠を求められたらどうする？", icon: "fa-solid fa-scale-unbalanced" },
                { text: "そもそも私は上司の言い分を聞いていない。片方だけの意見でジャッジするのは非論理的だ。", icon: "fa-solid fa-gavel" },
                { text: "だがここで正論を言うと関係性が破綻する（Fe劣勢の警戒）。", icon: "fa-solid fa-triangle-exclamation" },
                { text: "感情の共有とは、具体的にどの程度の文字数とスタンプで構成されるのが一般的だ？", icon: "fa-solid fa-ruler" },
                { text: "同情するスタンプ…泣いてる猫か？いや、ふざけていると思われるか？", icon: "fa-solid fa-face-sad-tear" },
                { text: "相手の感情の起伏に巻き込まれるのはエネルギーの無駄だが、無視はできない。", icon: "fa-solid fa-battery-quarter" },
                { text: "そもそもなんで上司に怒られたんだ？", icon: "fa-solid fa-circle-question" },
                { text: "そもそも普段はその上司はどういう人でどういう関係なんだ？状況把握したい。", icon: "fa-solid fa-users" },
                { text: "理不尽に怒られたってことは、君は悪くないってことだよな？それなら何か証拠になりそうなものはないか？", icon: "fa-solid fa-magnifying-glass" },
                { text: "今後もこういう理不尽な目に遭わないようにするためにどうしたらいいのか考えるべきでは？", icon: "fa-solid fa-shield-halved" },
                { text: "そもそもほんとに理不尽に怒られたのだろうか？何故怒ったのか明確に知りたい。", icon: "fa-solid fa-microscope" },
                { text: "今後関係が悪化するのも困るし…無視するわけにもいかない。どうするべきなんだ…考えろ…", icon: "fa-solid fa-brain" },
                { text: "まずは理不尽に怒られたなら君は悪くないって言うべきなのか？それが社会的な正解か？", icon: "fa-solid fa-scale-balanced" },
                { text: "でも…ほんとに悪くないんだよな？？", icon: "fa-solid fa-question" },
                { text: "疑うのもよくないのはわかってるけど、上司がほんとに理不尽で怒ったのかを考えてしまう。", icon: "fa-solid fa-head-side-virus" }
            ]
        },
        // 🐇 特別ステージ追加！
        {
            id: "darling",
            title: "♠️ 特別：ダーリンの実験室 ♥️",
            sitTitle: "理不尽な二択からの脱出",
            sitDesc: "ダーリン♡「ねぇダーリン♡ 私とこの世界、どっちが『論理的』に大切か、今すぐ100字で証明して？♡」",
            thoughts:[
                { text: "比較対象の次元が違いすぎる。定義が破綻している。", icon: "fa-solid fa-triangle-exclamation" },
                { text: "『論理的な大切さ』とは何か？前提条件を明確にしろ。", icon: "fa-solid fa-scale-unbalanced" },
                { text: "これは罠だ。どちらを選んでも反証される未来が見える(Ni)。", icon: "fa-solid fa-crystal-ball" },
                { text: "感情論(Fe)を求めているのか？いや、あいつは私を試している。", icon: "fa-solid fa-vial" },
                { text: "100字という制約の中で論理展開を完結させるのは不可能だ。", icon: "fa-solid fa-pen-clip" },
                { text: "この茶番を終わらせる最適解は『沈黙』か？いや、それも計算済みだろう。", icon: "fa-solid fa-chess-board" },
                { text: "変数を勝手にいじるな！計算が狂うだろうが！！", icon: "fa-solid fa-bomb" },
                { text: "そもそもこの世界って何？現実？それともこのUIの世界か？", icon: "fa-solid fa-globe" },
                { text: "そもそも何故100字なんだ？説明するメリットはあるのか？", icon: "fa-solid fa-circle-question" },
                { text: "そもそも自分は君もこの世界も大切だと思っているのだろうか？わからなくなってきた…", icon: "fa-solid fa-face-dizzy" },
                { text: "思い浮かばないってことはどっちも大切じゃないってことか？", icon: "fa-solid fa-heart-crack" },
                { text: "君はただのシステムだ。でもこの世界も大切といえる理由はあるのか…？", icon: "fa-solid fa-microchip" }
            ]
        },
        {
            id: "ili_heal",
            title: "☁️ 特別：ILIの省エネ空間 🐈",
            sitTitle: "究極の無駄省き",
            sitDesc: "巨大なILI猫「もう考えるのやめなよ。全部無駄だから寝よ。」\nあなたを思考の檻から強制的に解放しようとしています。",
            thoughts:[
                { text: "『何も考えない』状態を意図的に作り出すことは論理的に可能なのか？", icon: "fa-solid fa-brain" },
                { text: "思考を止めるという行動自体が、一種の思考ではないか？", icon: "fa-solid fa-infinity" },
                { text: "この猫の言う通りに休むことの長期的メリット(Ni)を計算しよう。", icon: "fa-solid fa-calculator" },
                { text: "いや、猫のペースに飲まれるのは危険だ。主導権を奪われる。", icon: "fa-solid fa-chess-knight" },
                { text: "『無駄』という定義すら、猫の主観に過ぎないのではないか？", icon: "fa-solid fa-scale-unbalanced" },
                { text: "何も考えたくなくても考えちゃうんだよ！", icon: "fa-solid fa-bolt" },
                { text: "考えるなって言われてもどうしたらやめられるかなんてわからない…", icon: "fa-solid fa-person-circle-question" },
                { text: "これが時間の無駄なのはわかってる！でも止まらないんだよ…！", icon: "fa-solid fa-stopwatch" },
                { text: "どうしたら考えなくて済むんだ！この思考すら考えてるってことになるだろ…", icon: "fa-solid fa-infinity" },
                { text: "考えるのやめるなんてLIIにはできないんだよ、できない？ほんとに？いやでも…どう考えても思考を止めるなんて…", icon: "fa-solid fa-gears" }
            ]
        }
        ];

// お邪魔キャラたちのデータ
const charaData = {
cat: {
    lines:[
        "それ、もう十分考えたよね",
        "結果変わらないけど？",
        "時間もったいなくない？",
        "どっちでもいいじゃん",
        "省エネでいこうよ。思考の無駄遣い。",
        "沼に沈んでるね。俯瞰してみたら？",
        "で、結論は？出ないならやめなよ。",
        "その前提、もう固定されてるよね？動かないよ？",
        "同じルート3周目だよ、それ",
        "可能性潰しきったなら、もう十分じゃない？",
        "それ以上やるのは検証じゃなくて執着だよ",
        "結論出ない前提の思考、好きだね",
        "“正しい答え”じゃなくて“納得”探してるでしょ",
        "それ、未来じゃなくて不安見てるだけだよ",
        "分岐増やしてるだけで進んでないよ？",
        "それ今じゃなくてもよくない？",
        "はいはい、無限ループ入ってるね",
        "で、それ考えたあと何が変わるの？",
        "思考で安心したいだけでしょ",
        "精度もう頭打ちだよ、それ",
        "止める判断も思考の一部だよ",
        "その問い、答え出ない仕様だね",
        "それ“もしも”じゃなくて“妄想”寄りだよ",
        "一回ログアウトしよっか",
        "結論保留でも世界は回るよ",
        "考えない選択、してみる？"
    ],
        counter:[
            "いや、でも論理が閉じてないから気持ち悪い！", "どっちでも良くない！最適解がある！", 
            "結果は変わらなくても過程の整合性が大事なの！", "俯瞰した結果、変数が多すぎて止まってるんだ！",
            "結論を急ぐな！過程をすっ飛ばすのは思考放棄だ！"
        ]
    },
    flower: {
        normalLines:[
            "どちらでも大丈夫だよ", "無理に決めなくていいよ", "深呼吸しよ？", 
            "あなたのペースでいいんだよ", "考えすぎると疲れちゃうよ？", "いつでも味方だからね🌸"
        ],
        angryLines:[
            "てか考えたって無駄なんだからさっさと決めなよ！！", "いつまでウジウジやってんの！？",
            "もうどうでもいいわ！！(ちゃぶ台返し)", "優しくしてんのになんで永遠に止まってんの！？💢"
        ],
        counter:[
            "なんで急にキレるの！？", "思考を放棄するのは負けだ！", "感情(Fe)をぶつけられても論理の証明にはならない！",
            "待って、私の何が逆鱗に触れたんだ…！？(Fe劣勢の混乱)"
        ]
    },
    dog: {
        types:[
            { type: "LIE", line: "それ、結論出して次いこ。時間の無駄。" },
            { type: "LIE", line: "ROI（費用対効果）合ってないよそれ。" },
            { type: "EII", line: "無理しなくていいよ。気持ち大事にしよ？" },
            { type: "EII", line: "誰かが傷つく選択はしたくないよね…💦" },
            { type: "Se主導", line: "とりあえずやってみよ！なんとかなる！" },
            { type: "Se主導", line: "頭でっかちになってない？動け動け！！" }
        ],
        counter: {
            "LIE":["結論が出ないから困ってるんでしょ！", "時間の無駄でも納得いくまでやりたいの！", "長期的なリスクヘッジをしてるんだ！"],
            "EII":["気持ちの問題じゃない！合理性の問題だ！", "優しさは根本的な問題解決にならない！"],
            "Se主導":["『とりあえず』が一番危険なんだよ！", "変数を確定させずに動くのは愚の骨頂だ！"]
        }
    }
};

const darlingData = {
    lines:[
        "ねぇ、ダーリン♡ そんなに考えても時間の無駄だよ♡",
        "フフッ♡ 変数、もう一個増やしちゃおっと♡",
        "あーあ、また論理に逃げてる♡ 可愛いね♡",
        "その『合理性』って、ただ傷つくのが怖いだけの防衛機制だよね？♡(Niで看破)",
        "フフッ、今『めんどくさい』って思ったでしょ？顔に出てるよ♡",
        "その計算、最初から間違ってるよ？♡",
        "ほらほら、時間がなくなっちゃうよ？♡ 🕰️",
        "ねぇ、私のこと考えてる時間、ほんとは好きでしょ？♡",
        "君の論理の城、穴だらけだよ♡ 突いてあげようか？♡",
        "あはっ、バグっちゃった？♡ 逃げ場はないよ♡"
    ],
    counter:[
        "勝手に前提条件を変えるな！！",
        "お前が乱数を混ぜるから計算が終わらないんだろ！！",
        "時間を無駄にしているのはお前のせいだ！！",
        "論理が破綻している！再計算が必要だ…！",
        "裏を読もうとするな！これは純粋な論理の構築だ！",
        "防衛機制じゃない！最適なリスク管理だ！",
        "お前が乱数を混ぜるから計算が終わらないんだろ！！",
        "思考をハックするな！プライバシーの侵害だ！",
        "穴なんてない！完璧に構築したはずだ…いや、待てよ…！？(沼)"
    ],
    // 🐛 芋虫(LSI-Ni / INTJ) のセリフ
    caterpillar:[
        "……えっと。まず前提として、その反応（タップ）は異常じゃないと思う。",
        "物理的な接触（干渉）を確認。……目的は何だ？",
        "システムに想定外の入力。……観察を継続する。",
        "……これは敵対行動とみなすか？いや、変数として……(ｸﾞｼｬｯ)",
        "……前提条件の再定義を要求する。",
        "……対象のストレス値が閾値を超過。(ｸﾞｼｬｯ)"
    ],
    rabbit:[ // 🐇 ISTJ
        "遅刻だ遅刻！スケジュールが崩壊している！！",
        "タスクを消化しろ！非合理的な空間だ！",
        "予定調和が乱されている！急げ！",
        "あぁ！時間が！時計が狂っている！！"
    ]
};
const endMessages = {
    normal: "【ILI猫からのメッセージ】\n「おつかれ。まぁ、最初から答えなんて出ないって言ったよね？時間の無駄だったね🐾」",
    flower: "【ILI猫からのメッセージ】\n「お花に癒やされてたみたいだけど、結局フリーズしてるじゃん。Feに頼るからそうなるんだよ🐾」",
    dog: "【ILI猫からのメッセージ】\n「他人にキレまくって自滅するとかウケる。おとなしく寝てればよかったのに🐾」",
    darling: "【ダーリンからのメッセージ】\n「あーあ、壊れちゃった♡ ま、可愛いからいっか♡ ゆっくり直してあげるね？♡」",
    ili_heal: "【巨大ILI猫からのメッセージ】\n「『何も考えない事の意義』とか考え始めて自爆するとか……マジで救いようがないね。おやすみ🐾」"
};
