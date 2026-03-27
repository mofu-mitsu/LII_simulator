// script.js

let selectedStage = null;
let totalClicks = 0;
let userType = "名無し";
const maxClicksPerStage = 15; // 絶妙な長さに調整
let gameIntervals =[]; 
let bugClicks = 0; 
let minigameTimer;

// 💣 多重実行を防ぐためのフラグ！！（超重要）
let isEnded = false; 

let logStats = { manual: 0, cat: 0, flower: 0, dog: 0, escape: 0, darling: 0, ili_cancel: 0 };

window.onload = () => {
    const select = document.getElementById('stage-select');
    stages.forEach((stage, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.innerText = stage.title;
        select.appendChild(option);
    });
};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    const input = document.getElementById('user-type').value;
    userType = input ? input : "名無し";
    const stageIndex = document.getElementById('stage-select').value;
    selectedStage = stages[stageIndex];
    
    // 変数初期化！
    totalClicks = 0;
    isEnded = false; // フラグもリセット！
    logStats = { manual: 0, cat: 0, flower: 0, dog: 0, escape: 0, darling: 0, ili_cancel: 0 };
    
    document.body.className = ''; 
    if (selectedStage.id === "darling") document.body.classList.add('theme-darling');
    if (selectedStage.id === "ili_heal") document.body.classList.add('theme-ili');
    
    loadStage();
    showScreen('screen-game');
    startCharaEvents(); 
}

function loadStage() {
    document.getElementById('stage-title').innerText = selectedStage.title;
    document.getElementById('sit-title').innerHTML = `<i class="fa-solid fa-comment-dots"></i> ${selectedStage.sitTitle}`;
    document.getElementById('sit-desc').innerText = selectedStage.sitDesc;
    document.getElementById('stress-bar').style.width = '0%';
    document.querySelectorAll('.thought-bubble').forEach(b => b.remove());
    document.getElementById('end-overlay').classList.remove('active'); 
}

function addThought(type) {
    if (isEnded) return; // 終わってたら何もしない！
    if (type === 'manual') logStats.manual++;
    
    if (selectedStage.id === "ili_heal" && Math.random() < 0.6) {
        logStats.ili_cancel++; 
        
        const cat = document.getElementById('giant-ili');
        const speech = document.getElementById('giant-ili-speech');
        
        cat.style.transform = 'translateX(-50%) scale(1.05)';
        speech.style.opacity = '1';
        
        const lazyLines =["無駄無駄。寝なよ。", "それ考えて意味ある？", "省エネでいこ。", "思考キャンセェェル🐾"];
        speech.innerText = lazyLines[Math.floor(Math.random() * lazyLines.length)];
        
        setTimeout(() => {
            cat.style.transform = 'translateX(-50%) scale(1)';
            speech.style.opacity = '0';
        }, 1500);
        
        totalClicks = Math.max(0, totalClicks - 0.5); 
        updateStressBar();

        if (logStats.ili_cancel >= 20) {
            if (isEnded) return; // 重複防止
            isEnded = true; 
            setTimeout(showIliHealEndScreen, 1500);
        }
        return; 
    }

    const randomThought = selectedStage.thoughts[Math.floor(Math.random() * selectedStage.thoughts.length)];
    createBubble(randomThought.text, randomThought.icon, false);
    progressGame();
}

function updateStressBar() {
    const progress = (totalClicks / maxClicksPerStage) * 100;
    document.getElementById('stress-bar').style.width = `${Math.min(progress, 100)}%`;
}

function createBubble(text, icon, isCounter) {
    const bubble = document.createElement('div');
    bubble.className = `thought-bubble ${isCounter ? 'counter-bubble' : ''}`;
    bubble.innerHTML = `<i class="${icon}"></i> <span>${text}</span>`;
    
    const x = Math.max(10, Math.random() * (window.innerWidth - 260));
    const y = Math.max(10, Math.random() * (window.innerHeight - 80));
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    document.body.appendChild(bubble);
}

function progressGame() {
    if (isEnded) return; // 💣 これが多重送信を防ぐ絶対防壁！！
    
    totalClicks++;
    updateStressBar();

    if (totalClicks >= maxClicksPerStage) {
        isEnded = true; // 💣 ここでフラグを立てる！！
        gameIntervals.forEach(clearInterval);
        
        document.getElementById('main-container').classList.add('shake');
        setTimeout(() => {
            document.getElementById('main-container').classList.remove('shake');
            showEndScreen();
        }, 500); 
    }
}

// ==========================================
// 🐶🌸🐈 お邪魔キャラクターシステム
// ==========================================
function startCharaEvents() {
    gameIntervals.forEach(clearInterval); gameIntervals =[];

    if (selectedStage.id === "ili_heal") {
        document.getElementById('giant-ili').style.display = 'block';
        return; 
    }

    if (selectedStage.id === "darling") {
        document.getElementById('cat').style.display = 'none';
        document.getElementById('dog').style.display = 'none';
        document.getElementById('flower').style.display = 'none';
        
        bugClicks = 0;
        const bug = document.getElementById('caterpillar');
        bug.style.display = 'block';
        bug.classList.remove('squished');

        const darlingInterval = setInterval(triggerDarlingGimmick, 10000); 
        const rabbitInterval = setInterval(() => {
            const rabbit = document.getElementById('rabbit');
            rabbit.style.display = 'block';
            rabbit.classList.remove('run-left');
            void rabbit.offsetWidth;
            rabbit.classList.add('run-left');
            
            // 🐇 ちゃんとdata.jsからランダムに取るように修正！
            const line = darlingData.rabbit[Math.floor(Math.random() * darlingData.rabbit.length)];
            showSpeech('rabbit', `【ISTJ】${line}`);
        }, 15000);

        const cardInterval = setInterval(createCard, 1000);
        gameIntervals.push(darlingInterval, rabbitInterval, cardInterval);
        return; 
    }

    const catInterval = setInterval(() => {
        const cat = document.getElementById('cat');
        cat.style.display = 'block';
        cat.classList.remove('walk-right');
        void cat.offsetWidth; 
        cat.classList.add('walk-right');

        setTimeout(() => {
            // 🐈 ちゃんとdata.jsからランダムに取るように修正！
            const line = charaData.cat.lines[Math.floor(Math.random() * charaData.cat.lines.length)];
            showSpeech('cat', line);
            logStats.cat++; 
            
            setTimeout(() => {
                const counter = charaData.cat.counter[Math.floor(Math.random() * charaData.cat.counter.length)];
                createBubble(`【LIIの反論】${counter}`, "fa-solid fa-bolt", true);
                progressGame();
            }, 1200);
        }, 2500); 
    }, 12000); 

    gameIntervals.push(catInterval);
}

function createCard() {
    if(isEnded) return;
    const suits =['♠️', '♥️', '♣️', '♦️'];
    const card = document.createElement('div');
    card.className = 'falling-card';
    card.innerText = suits[Math.floor(Math.random() * suits.length)];
    card.style.left = `${Math.random() * 100}vw`;
    card.style.animationDuration = `${Math.random() * 3 + 3}s`;
    document.getElementById('cards-container').appendChild(card);
    setTimeout(() => card.remove(), 6000);
}

function triggerCaterpillar() {
    if (isEnded) return;
    if (bugClicks >= 5) return; 
    
    logStats.manual++; 
    // 🐛 ちゃんと順番に出るように修正！
    showSpeech('caterpillar', darlingData.caterpillar[bugClicks]);
    
    bugClicks++;
    if (bugClicks >= 5) {
        document.getElementById('caterpillar').classList.add('squished');
        createBubble("【LIIの冷酷】変数を1つ物理的に排除した。", "fa-solid fa-shoe-prints", true);
        progressGame();
    }
}

function triggerFlower() {
    if (isEnded) return;
    logStats.flower++;
    const isAngry = Math.random() < 0.2;
    const lines = isAngry ? charaData.flower.angryLines : charaData.flower.normalLines;
    const line = lines[Math.floor(Math.random() * lines.length)];
    
    document.getElementById('flower').style.color = isAngry ? "var(--danger-color)" : "var(--success-color)";
    showSpeech('flower', line);

    setTimeout(() => {
        if(isAngry) {
            const counter = charaData.flower.counter[Math.floor(Math.random() * charaData.flower.counter.length)];
            createBubble(`【LIIの反論】${counter}`, "fa-solid fa-fire", true);
        } else {
            createBubble("【LIIの葛藤】優しい言葉でも論理は埋まらない…", "fa-solid fa-droplet", false);
        }
        progressGame();
    }, 1000);
}

function triggerDog() {
    if (isEnded) return;
    logStats.dog++;
    const dogType = charaData.dog.types[Math.floor(Math.random() * charaData.dog.types.length)];
    showSpeech('dog', `【${dogType.type}】\n${dogType.line}`);

    setTimeout(() => {
        const counters = charaData.dog.counter[dogType.type];
        const counter = counters[Math.floor(Math.random() * counters.length)];
        createBubble(`【LIIの反論】${counter}`, "fa-solid fa-xmark", true);
        progressGame();
    }, 1500);
}

function tryEscape() {
    if (isEnded) return;
    logStats.escape++;
    alert("⚠️ エラー：まだ検討すべき合理的な変数が残っています！");
    createBubble("逃げちゃダメだ、論理を完成させろ！", "fa-solid fa-lock", true);
    progressGame();
}

function showSpeech(elementId, text) {
    const el = document.getElementById(elementId);
    const speech = document.createElement('div');
    speech.className = 'chara-speech';
    speech.innerText = text;
    el.appendChild(speech);
    setTimeout(() => speech.remove(), 3000);
}

// ==========================================
// ♥️ ダーリンのミニゲーム処理
// ==========================================
function triggerDarlingGimmick() {
    if (isEnded) return;
    logStats.darling++;
    const darling = document.getElementById('darling');
    darling.style.display = 'block';
    darling.style.top = `${Math.random() * 60 + 20}%`;
    darling.style.left = `${Math.random() * 80 + 10}%`;

    const rand = Math.random();
    if (rand < 0.15) startMinigame(1); 
    else if (rand < 0.3) startMinigame(2); 
    else if (rand < 0.5) startMinigame(3); 
    else {
        const line = darlingData.lines[Math.floor(Math.random() * darlingData.lines.length)];
        showSpeech('darling', `【ダーリン♡】\n${line}`);
        
        setTimeout(() => {
            if (rand < 0.75) {
                document.querySelectorAll('.thought-bubble').forEach(b => b.classList.add('flip-bubble'));
                createBubble("【LIIの悲鳴】今までの計算がすべて反転させられた！？", "fa-solid fa-rotate", true);
            } else {
                createBubble("【ダーリン】変数追加♡", "fa-solid fa-heart", true);
                progressGame(); progressGame(); 
            }
            setTimeout(() => { darling.style.display = 'none'; }, 1500);
        }, 1500);
    }
}

let heartsLeft = 0;
function startMinigame(type) {
    const modalId = `darling-minigame${type}`;
    document.getElementById(modalId).classList.add('show');
    let timeLeft = 3;
    document.getElementById(`timer${type}`).innerText = timeLeft;
    
    if (type === 3) {
        const container = document.getElementById('heart-container');
        container.innerHTML = '';
        heartsLeft = 5;
        for(let i=0; i<5; i++) {
            const h = document.createElement('i');
            h.className = 'fa-solid fa-heart tap-heart';
            h.style.left = `${Math.random() * 80 + 10}%`;
            h.style.top = `${Math.random() * 60 + 10}%`;
            h.onclick = function() {
                this.style.display = 'none';
                heartsLeft--;
                if(heartsLeft <= 0) answerMinigame(3, 'クリア');
            };
            container.appendChild(h);
        }
    }

    minigameTimer = setInterval(() => {
        timeLeft--;
        document.getElementById(`timer${type}`).innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(minigameTimer);
            answerMinigame(type, '時間切れ');
        }
    }, 1000);
}

function answerMinigame(type, answer) {
    clearInterval(minigameTimer);
    document.getElementById(`darling-minigame${type}`).classList.remove('show');
    let darlingReply = "";
    
    if (type === 1) darlingReply = answer === '効率' ? "どうせ『効率』で逃げようとしてるんでしょ？♡" : "時間切れ♡ 決断すらできないの？♡";
    else if (type === 2) darlingReply = answer === '拒否' ? "『メリットない』って言いながら心拍数上がってるよ？♡" : "照れ隠しだってバレバレだよ？♡";
    else if (type === 3) {
        if (answer === 'クリア') {
            createBubble(`【ダーリン】必死な顔、可愛かったよ♡`, "fa-solid fa-face-smile-wink", false);
            return; 
        } else darlingReply = "時間切れ♡ 不器用なダーリンには難しかった？♡";
    }

    createBubble(`【ダーリンの看破】${darlingReply}`, "fa-solid fa-eye", true);
    setTimeout(() => {
        createBubble("【LIIの絶望】手の内がすべて読まれている…！", "fa-solid fa-skull", true);
        progressGame(); progressGame(); progressGame(); 
        const darling = document.getElementById('darling');
        if(darling) darling.style.display = 'none';
    }, 1500);
}

// ==========================================
// 📊 エンド画面（ブルースクリーン ＆ 解放エンド）
// ==========================================

function showIliHealEndScreen() {
    const bsod = document.getElementById('screen-end');
    bsod.style.background = "#11111b"; 
    bsod.style.border = "2px solid #a6adc8";
    bsod.style.boxShadow = "none";
    
    document.getElementById('end-overlay').classList.add('active'); 
    showScreen('screen-end');
    
    const logList = document.getElementById('log-list');
    logList.innerHTML = `<li>> MANUAL_THOUGHTS: ${logStats.manual}</li>`;
    logList.innerHTML += `<li>> ILI_CANCELED_THOUGHTS: ${logStats.ili_cancel}</li>`;
    
    const title = "SYSTEM_SLEEP_MODE (省エネ成功)";
    document.getElementById('end-title').innerText = `[ ${title} ]`;
    
    document.getElementById('bsod-h1').innerText = "SYSTEM_SLEEP_MODE_ACTIVATED";
    document.getElementById('bsod-p').innerHTML = 
        "A peaceful state has been detected and your brain has been put to sleep to save energy.<br><br>" +
        "STATUS: Ti_Ne_LOOP_CANCELED<br>" +
        "SUCCESS_PROCESS: sleep_mode.exe<br><br>" +
        "Have a good night. No more logic is needed here.";

    document.getElementById('end-message-box').innerText = endMessages["ili_heal"];
    
    sendLogToGAS(title); 
}

function showEndScreen() {
    const bsod = document.getElementById('screen-end');
    bsod.style.background = "#0044aa"; 
    
    document.getElementById('end-overlay').classList.add('active'); 
    showScreen('screen-end');
    
    const logList = document.getElementById('log-list');
    logList.innerHTML = `<li>> MANUAL_THOUGHTS: ${logStats.manual}</li>`;
    if(logStats.darling > 0) logList.innerHTML += `<li>> DARLIN_INTERFERENCES: ${logStats.darling}</li>`;
    if(logStats.cat > 0) logList.innerHTML += `<li>> ILI_CAT_DAMAGES: ${logStats.cat}</li>`;
    
    let title = "Ti-Ne_LOOP_FATAL_ERROR";
    let msgKey = "normal";

    if (selectedStage.id === "darling") {
        title = "DARLING_TOY_ERROR (ダーリンの愛玩動物)";
        msgKey = "darling";
    } else {
        if (logStats.cat > 3) { title = "ILI_SANDBAG (ILI猫のサンドバッグ)"; msgKey = "normal"; }
        else if (logStats.flower > 2) { title = "Fe_STARVATION (Fe劣等生の癒やし渇望)"; msgKey = "flower"; }
        else if (logStats.dog > 2) { title = "Te_RAMPAGE (全方位論破マン)"; msgKey = "dog"; }
    }
    
    document.getElementById('end-title').innerText = `[ ${title} ]`;
    
    // ✨ ここでようやくメッセージボックスに文字を入れる！！
    document.getElementById('end-message-box').innerText = endMessages[msgKey];

    sendLogToGAS(title); 
}

function shareResult() {
    const title = document.getElementById('end-title').innerText;
    const shareText = `【合理の檻】\n自認タイプ：${userType}\nシチュエーション：${selectedStage.title}\n\n獲得称号 ${title}\n・自問自答：${logStats.manual}回\n\n見事に思考ループの限界を迎えました。\n#思考ループ体験 #MBTI #LII`;
    if (navigator.share) navigator.share({ text: shareText }).catch(console.error);
    else navigator.clipboard.writeText(shareText).then(() => alert("結果をコピーしたよ！"));
}

function sendLogToGAS(title) {
    const gasURL = "https://script.google.com/macros/s/AKfycbzVIPjXrGqmXw7DB68oNAIxS-h-21tNvoT-WmT3T6BEJWdI2Z4GKmmAlzANPlSQLRu4LA/exec"; 
    
    const logsText = `・手動タップ(自問自答): ${logStats.manual}回\n` +
                     `・ILIが思考キャンセル成功: ${logStats.ili_cancel}回\n` +
                     `・ダーリンに弄ばれた: ${logStats.darling}回\n` +
                     `・ILI猫に削られた: ${logStats.cat}回\n` +
                     `・癒やし(花)タップ: ${logStats.flower}回\n` +
                     `・他者(犬)を論破: ${logStats.dog}回\n` +
                     `・逃亡を試みた: ${logStats.escape}回`;

    const payload = {
        userType: userType,
        stageTitle: selectedStage.title,
        title: title, 
        logs: logsText
    };

    fetch(gasURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => console.log("GASへのログ送信完了したよ！"))
    .catch(e => console.error("GAS送信エラー:", e));
}