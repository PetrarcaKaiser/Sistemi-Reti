function redirectTo(page) {
    window.location.href = page;
}

const urlParams = new URLSearchParams(window.location.search);
const nickname = urlParams.get('nickname');

const nicknameContainer = document.getElementById('nicknameContainer');
nicknameContainer.innerHTML = `<p>Benvenuto, ${nickname}!</p>`;